/* 회원정보 수정, 탈퇴 및 내 작성글, 댓글, 요청 전달 받는 컨트롤러
*  관리자 전용 페이지는 따로 컨트롤러 분리 할 예정 */
package com.kh.totalproject.controller;


import com.kh.totalproject.dto.request.ReportRequest;
import com.kh.totalproject.dto.request.SuggestRequest;
import com.kh.totalproject.dto.request.UserRequest;
import com.kh.totalproject.dto.response.*;
import com.kh.totalproject.service.FirebaseStorageService;
import com.kh.totalproject.service.MyPageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/my")
public class MyPageController {
    private final MyPageService myPageService;
    private final FirebaseStorageService firebaseStorageService;

    // 내 정보 조회
    @GetMapping("/profile")
    public ResponseEntity<UserResponse> myProfile(@RequestHeader("Authorization") String authorizationHeader) {
        log.info("헤더를 통해 들어온 토큰 값 {}", authorizationHeader);
        return ResponseEntity.ok(myPageService.listMyProfile(authorizationHeader));
    }

    // 내 정보 수정, 아마 버튼 클릭시 조회에서 바로 수정 입력칸 받을 수 있게
    @PutMapping("/profile-modify")
    public ResponseEntity<Boolean> modifyUserInfo(@RequestHeader("Authorization") String authorizationHeader,
                                                  @RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(myPageService.modifyMyProfile(authorizationHeader, userRequest));
    }

    // 내 소개글 조회 메소드
    @GetMapping("/userfeed")
    public ResponseEntity<String> getUserIntroduction(@RequestHeader("Authorization") String authorizationHeader) {
        return ResponseEntity.ok(myPageService.getUserIntroduction(authorizationHeader));
    }

    // 내 소개글 등록 메소드
    @PostMapping("/userfeed")
    public ResponseEntity<Boolean> saveUserIntroduction(@RequestHeader("Authorization") String authorizationHeader,
                                                        @RequestBody Map<String, String> request) {
        String introduction = request.get("introduction");
        return ResponseEntity.ok(myPageService.saveUserIntroduction(authorizationHeader, introduction));
    }


    // 닉네임 중복 검사 API 추가
    @GetMapping("/profile/check-nickname")
    public ResponseEntity<Boolean> checkNickname(@RequestParam String nickname) {
        return ResponseEntity.ok(myPageService.isNicknameAvailable(nickname));
    }


    // 닉네임 변경 API
    @PutMapping("/profile/change-nickname")
    public ResponseEntity<Boolean> changeNickname(@RequestHeader("Authorization") String authorizationHeader,
                                                  @RequestParam String newNickname) {
        return ResponseEntity.ok(myPageService.changeNickname(authorizationHeader, newNickname));
    }



    // 현재 비밀번호 확인 API 추가
    @PostMapping("/profile-checkPw")
    public ResponseEntity<Boolean> checkPw(@RequestHeader("Authorization") String authorizationHeader,
                                           @RequestParam String inputPw) {
        return ResponseEntity.ok(myPageService.checkPw(authorizationHeader, inputPw));
    }


    // 내 정보에서 비밀번호 수정
    @PutMapping("/profile-changePw")
    public ResponseEntity<Boolean> changePw(@RequestHeader("Authorization") String authorizationHeader,
                                            @RequestParam String inputPw,
                                            @RequestParam String newPw) {
        return ResponseEntity.ok(myPageService.changePw(authorizationHeader, inputPw, newPw));
    }

    // 내 정보에서 내가 작성한 글 보기
    @GetMapping("/post/list")
    public ResponseEntity<Page<BoardResponse>> listMyPost(@RequestParam(defaultValue = "1") int page,
                                                          @RequestParam(defaultValue = "10") int size,
                                                          @RequestParam(required = false) String sortBy,
                                                          @RequestParam(required = false) String order) {
        return ResponseEntity.ok(myPageService.myPost(page, size, sortBy, order));
    }

    // 내가 작성한 신고 작성 글 목록 보기 요청 / 응답
    @GetMapping("/report/list")
    public ResponseEntity<Page<ReportResponse>> listMyReportPost(@RequestParam(defaultValue = "1") int page,
                                                                 @RequestParam(defaultValue = "10") int size,
                                                                 @RequestParam(defaultValue = "createdAt") String sortBy,
                                                                 @RequestParam(defaultValue = "DESC") String order,
                                                                 @RequestParam(defaultValue = "INACTIVE") String status) {
        return ResponseEntity.ok(myPageService.myReportList(page, size, sortBy, order, status));
    }

    // 내가 작성한 건의사항 작성 글 목록 보기 요청 / 응답
    @GetMapping("/suggestion/list")
    public ResponseEntity<Page<SuggestResponse>> listMySuggestionPost(@RequestParam(defaultValue = "1") int page,
                                                                      @RequestParam(defaultValue = "10") int size,
                                                                      @RequestParam(defaultValue = "createdAt") String sortBy,
                                                                      @RequestParam(defaultValue = "DESC") String order,
                                                                      @RequestParam(defaultValue = "INACTIVE") String status) {
        return ResponseEntity.ok(myPageService.mySuggestionList(page, size, sortBy, order, status));
    }

    // 내가 작성한 신고 글 자세히 보기 요청 / 응답
    @GetMapping("/listOne/reportPost")
    public ResponseEntity<ReportResponse> MyReportPost(@RequestParam long reportId) {
        return ResponseEntity.ok(myPageService.myReportPost(reportId));
    }

    // 내가 작성한 건의사항 글 자세히 보기 요청 / 응답
    @GetMapping("/listOne/suggestionPost")
    public ResponseEntity<SuggestResponse> MySuggestionPost(@RequestParam long suggestionId) {
        return ResponseEntity.ok(myPageService.mySuggestionPost(suggestionId));
    }

//    // 내가 작성한 신고 글 수정
//    @PutMapping("/modify/reportPost")
//    public ResponseEntity<Boolean> modifyMyReport(@RequestHeader("Authorization") String authorizationHeader,
//                                                  @RequestBody ReportRequest reportRequest) {
//        return ResponseEntity.ok(myPageService.modifyMyReport(authorizationHeader, reportRequest));
//    }
//
//    // 내가 작성한 건의사항 글 수정
//    @PutMapping("/modify/suggestionPost")
//    public ResponseEntity<Boolean> modifyMySuggestion(@RequestHeader("Authorization") String authorizationHeader,
//                                                      @RequestBody SuggestRequest suggestRequest) {
//        return ResponseEntity.ok(myPageService.modifyMySuggestion(authorizationHeader, suggestRequest));
//    }

    // 내가 작성한 신고 글 삭제
    @DeleteMapping("/delete/reportPost")
    public ResponseEntity<Boolean> deleteMyReport(@RequestParam Long reportId) {
        return ResponseEntity.ok(myPageService.deleteMyReportPost(reportId));
    }

    // 내가 작성한 건의사항 글 삭제
    @DeleteMapping("/delete/suggestionPost")
    public ResponseEntity<Boolean> deleteMySuggestion(@RequestParam Long suggestionId) {
        return ResponseEntity.ok(myPageService.deleteMySuggestionPost(suggestionId));
    }

    @PostMapping("/profile/imageupload")
    public ResponseEntity<String> uploadMyProfile(@RequestHeader("Authorization") String authorizationHeader,
                                                  @RequestParam("file")MultipartFile file,
                                                  @RequestParam("fileName") String fileName) throws IOException {
        return ResponseEntity.ok(firebaseStorageService.uploadFile(authorizationHeader, file, fileName));
    }
    @PostMapping("/profile/imagedelete")
    public ResponseEntity<Boolean> deleteMyProfile(@RequestHeader("Authorization") String authorizationHeader) {
        return ResponseEntity.ok(firebaseStorageService.deleteFile(authorizationHeader));
    }
}
