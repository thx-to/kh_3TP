package com.kh.totalproject.service;

import com.kh.totalproject.constant.ChallengeDifficulty;
import com.kh.totalproject.constant.SendTestcaseResultStatus;
import com.kh.totalproject.dto.flask.callback.TestcaseResult;
import com.kh.totalproject.dto.flask.request.JobRequest;
import com.kh.totalproject.dto.request.SubmitCodeRequest;
import com.kh.totalproject.dto.response.ChallengeDetailResponse;
import com.kh.totalproject.dto.response.ChallengeMetaResponse;
import com.kh.totalproject.entity.CodeChallengeInfo;
import com.kh.totalproject.entity.CodeChallengeSubmission;
import com.kh.totalproject.entity.User;
import com.kh.totalproject.exception.CustomHttpClientErrorException;
import com.kh.totalproject.exception.CustomHttpServerErrorException;
import com.kh.totalproject.exception.InvalidResponseBodyException;
import com.kh.totalproject.exception.UnauthenticatedException;
import com.kh.totalproject.repository.CodeChallengeInfoRepository;
import com.kh.totalproject.repository.CodeChallengeSubmissionRepository;
import com.kh.totalproject.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import io.github.cdimascio.dotenv.Dotenv;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Transactional
@RequiredArgsConstructor
@Service
@Slf4j
public class CodeChallengeService {
    // Java에서 멀티 스레드 환경에서 효율적으로 동작하도록 설계된 Map 인터페이스의 구현체
    // 추후 빈에 등록 후 서비스를 쪼개서 사용하는 것도 고려 중 입니다
    private final ConcurrentHashMap<String, SseEmitter> subscriptions = new ConcurrentHashMap<>();
    private final UserRepository userRepository;
    private final CodeChallengeInfoRepository codeChallengeInfoRepository;
    private final CodeChallengeSubmissionRepository codeChallengeSubmissionRepository;

    private final RestTemplate restTemplate;

    private String FLASK_URL;
    private String FLASK_X_API_KEY;
    private String FLAKS_X_CLIENT_ID;

    @PostConstruct
    public void initVariables() throws IOException {
        Dotenv dotenv = Dotenv.load();

        FLASK_URL = dotenv.get("FLASK_URL");
        FLASK_X_API_KEY = dotenv.get("FLASK_X_API_KEY");
        FLAKS_X_CLIENT_ID = dotenv.get("FLASK_X_CLIENT_ID");

        if (
            FLASK_URL == null || FLASK_URL.isEmpty() ||
            FLASK_X_API_KEY == null || FLASK_X_API_KEY.isEmpty() ||
            FLAKS_X_CLIENT_ID == null || FLAKS_X_CLIENT_ID.isEmpty()
        ){
            throw new RuntimeException("FLASK_URL 환경변수가 설정되지 않았습니다.");
        }
    }

    public String createJob(SubmitCodeRequest dto) {
        Map<String, Object> flaskResponse = sendRequestToFlask(FLASK_URL + "/job/create", dto, HttpMethod.POST);
        Map<String, Object> responseData = (Map<String, Object>) flaskResponse.get("data");

        if (responseData.get("jobId") == null) {
            throw new InvalidResponseBodyException("코딩 테스트 submit 요청에 대한 응답 본문에서 jobId를 가져올 수 없습니다.");
        }
        return (String) responseData.get("jobId");
    }

    public SendTestcaseResultStatus sendTestcaseResult(String jobId, TestcaseResult result) {
        SseEmitter emitter = subscriptions.get(jobId);

        // 구독 중인 사용자가 없는 경우
        if (emitter == null) {
            return SendTestcaseResultStatus.CLIENT_NOT_FOUND;
        }

        // 사용자의 중단 요청에 대한 처리
        // 반환 값과 관계 없이 Celery Task는 자동 종료됨
        else if (
            result.getSuccess() &&
            result.getDetail() != null &&
            result.getDetail().contains("중단")
        ) {
            removeSubscriptionAndSetEmitterComplete(jobId);
            return SendTestcaseResultStatus.SUCCESS;
        }

        // Task 실행 완료 처리
        // 반환 값과 관계 없이 Celery Task는 자동 종료됨
        else if (
            result.getDetail() != null &&
            result.getDetail().contains("complete")
        ) {
            removeSubscriptionAndSetEmitterComplete(jobId);

            User user = userRepository.findById(result.getUserId()).orElse(null);
            CodeChallengeInfo codeChallengeInfo = codeChallengeInfoRepository.findById(result.getQuestionId()).orElse(null);
            codeChallengeSubmissionRepository.save(
                    CodeChallengeSubmission.builder()
                        .user(user)
                        .codeChallengeInfo(codeChallengeInfo)
                        .code(result.getCode())
                        .codeLanguage(result.getCodeLanguage())
                        .success(result.getSuccess())
                        .memoryUsage(result.getMemoryUsage())
                        .runningTime(result.getRunningTime())
                        .codeSize(result.getCodeSize())
                        .submittedAt(result.getCreatedAt())
                        .build()
            );
            return SendTestcaseResultStatus.SUCCESS;
        }

        // Celery Task 실행 중 치명적 에러 발생
        // 반환 값과 관계 없이 Celery Task는 자동 종료됨
        else if (
            !result.getSuccess() &&
            result.getError() != null &&
            !result.getError().contains("런타임") &&
            !result.getError().contains("컴파일")
        ) {
            sendSseMessage(
                jobId,
                emitter,
                "error " + result.getError(),
                null
            );

            removeSubscriptionAndSetEmitterComplete(jobId);
            return SendTestcaseResultStatus.SUCCESS;
        }

        // 테스트 케이스 메시지 전송
        // 반환 값에 따라 Celery Task에서 추가 작업 여부를 판단
        else {
            Map<String, Object> data = new HashMap<>();
            data.put("success", result.getSuccess());
            data.put("runningTime", result.getRunningTime());
            data.put("memoryUsage", result.getMemoryUsage());
            data.put("codeSize", result.getCodeSize());
            data.put("error", result.getError());
            data.put("detail", result.getDetail());

            return sendSseMessage(
                jobId,
                emitter,
                data,
                String.valueOf(result.getTestcaseIndex())
            );
        }
    }

    public int executeJob(String jobId, Long userId) {
        JobRequest request = JobRequest.builder()
                .jobId(jobId)
                .userId(userId)
                .build();
        Map<String, Object> flaskResponse = sendRequestToFlask(FLASK_URL + "/job/execute", request, HttpMethod.POST);
        Map<String, Object> responseData = (Map<String, Object>) flaskResponse.get("data");

        if (responseData.get("numOfTestcase") == null) {
            throw new InvalidResponseBodyException("코딩 테스트 execute 요청에 대한 응답 본문에서 numOfTestcase를 가져올 수 없습니다.");
        }
        return (int) responseData.get("numOfTestcase");
    }

    public void cancelJob(String jobId, Long userId) {
        JobRequest request = JobRequest.builder()
                .jobId(jobId)
                .userId(userId)
                .build();

        sendRequestToFlask(FLASK_URL + "/job/cancel", request, HttpMethod.POST);
    }

    public void deleteJob(String jobId, Long userId) {
        JobRequest request = JobRequest.builder()
                .jobId(jobId)
                .userId(userId)
                .build();
        sendRequestToFlask(FLASK_URL + "/job/delete", request, HttpMethod.DELETE);
    }

    public void addSubscription(String jobId, SseEmitter emitter) {
        subscriptions.put(jobId, emitter);
    }

    public void removeSubscriptionAndSetEmitterComplete(String jobId) {
        SseEmitter emitter = subscriptions.get(jobId);
        if (emitter != null) {
            try {
                emitter.complete();
            } catch (IllegalStateException e2) {
                // 이미 complete 인 경우 또 complete 되어 발생하는 로그 제거
            }
            subscriptions.remove(jobId);
        }
    }

    public SseEmitter getEmitter(String jobId) {
        return subscriptions.get(jobId);
    }

    public SendTestcaseResultStatus sendSseMessage(
        String jobId,
        SseEmitter emitter,
        Object data,
        @Nullable String id
    ) {
        try {
            if (id == null) {
                emitter.send(SseEmitter.event().data(data));
            } else {
                emitter.send(SseEmitter.event()
                        .id(id)
                        .data(data)
                );
            }
            return SendTestcaseResultStatus.SUCCESS;
        } catch (IOException e) {
            // 클라이언트와의 SSE 연결이 모종의 이유(이탈, 네트워크 장애)로 끊어져
            // 메시지를 send 할 수 없는 경우 처리
            return SendTestcaseResultStatus.GONE;
        } catch (Exception e) {
            // 기타 예외 처리
            log.warn("Unexpected error occurred while sending event for jobId: {}", jobId, e);
            removeSubscriptionAndSetEmitterComplete(jobId);
            return SendTestcaseResultStatus.ERROR;
        }
    }

    public CodeChallengeInfo getChallengeInfo(Long questionId) {
        return codeChallengeInfoRepository.findById(questionId).orElse(null);
    }

    public List<CodeChallengeSubmission> getSubmissionHistory(Long userId, CodeChallengeInfo challengeInfo) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) { throw new UnauthenticatedException(); }

        return codeChallengeSubmissionRepository.findByCodeChallengeInfoAndUser(challengeInfo, user);
    }

    public List<CodeChallengeSubmission> getAllSubmissionHistory(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) { throw new UnauthenticatedException(); }

        return codeChallengeSubmissionRepository.findByUser(user);
    }

    public ChallengeDetailResponse getChallengeDetail(CodeChallengeInfo challengeInfo, Long userId) {
        User user = userId == null ? null : userRepository.findById(userId).orElse(null);
        CodeChallengeSubmission submission = user != null ? codeChallengeSubmissionRepository.findFirstByCodeChallengeInfoAndUserOrderBySubmittedAtDesc(challengeInfo, user).orElse(null) : null;

        log.info("challenge info : {}", challengeInfo);
        log.info("submission : {}", submission);

        return ChallengeDetailResponse.builder()
                .title(challengeInfo.getTitle())
                .description(challengeInfo.getDescription())
                .cond(challengeInfo.getCond())
                .difficulty(challengeInfo.getDifficulty())
                .memoryLimit(challengeInfo.getMemoryLimit())
                .runningTimeLimit(challengeInfo.getRunningTimeLimit())
                .lastSubmittedCode(submission == null ? null : submission.getCode())
                .build();
    }

    public List<ChallengeMetaResponse> getChallengeMetaList(ChallengeDifficulty difficulty, Long userId) {
        List<CodeChallengeInfo> codeChallengeInfoList = codeChallengeInfoRepository.findByDifficulty(difficulty);
        List<ChallengeMetaResponse> response = new ArrayList<>();

        for (var challengeInfo: codeChallengeInfoList) {
            int totalSubmissionCount = codeChallengeSubmissionRepository.countByCodeChallengeInfoAndSuccess(challengeInfo, true);
            int challengePassCount = codeChallengeSubmissionRepository.countByCodeChallengeInfo(challengeInfo);

            User user = userId == null ? null : userRepository.findById(userId).orElse(null);
            Boolean passedBefore = user == null ? null : codeChallengeSubmissionRepository.countByCodeChallengeInfoAndUser(challengeInfo, user) >= 1;
            response.add(
                ChallengeMetaResponse.builder()
                    .questionId(challengeInfo.getQuestionId())
                    .title(challengeInfo.getTitle())
                    .category(challengeInfo.getCategory())
                    .difficulty(challengeInfo.getDifficulty())
                    .passingRate(totalSubmissionCount == 0 ? 0.0f :
                            Math.round((challengePassCount / (float) totalSubmissionCount) * 1000) / 10.0f)
                    .passedBefore(passedBefore)
                    .build()
            );
        }

        return response;
    }

    private Map<String, Object> sendRequestToFlask(String url, Object body, HttpMethod method) {
        // HTTP Header 설정
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");
        headers.set("X-Api-Key", FLASK_X_API_KEY);
        headers.set("X-Client-Id", FLAKS_X_CLIENT_ID);

        // HttpEntity에 DTO와 Header 추가
        HttpEntity<Object> requestEntity;
        if (body == null) requestEntity = new HttpEntity<>(headers);
        else requestEntity = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<Map> flaskResponse = restTemplate.exchange(url, method, requestEntity, Map.class);
            Map<String, Object> response = new HashMap<>();
            response.put("status", flaskResponse.getStatusCode().value());
            response.put("data", flaskResponse.getBody()); // data는 최소 null 값 보장
            return response;
        }
        catch (HttpClientErrorException e) {
            // 4xx 응답 처리
            throw new CustomHttpClientErrorException(e, url);
        }
        catch (HttpServerErrorException e) {
            // 5xx 응답 처리
            throw new CustomHttpServerErrorException(e, url);
        }
    }
}
