package com.kh.totalproject.controller;

import com.kh.totalproject.constant.SendTestcaseResultStatus;
import com.kh.totalproject.dto.flask.callback.TestcaseResult;
import com.kh.totalproject.service.CodeChallengeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/callback")
@RequiredArgsConstructor
public class CallbackController {
    private final CodeChallengeService codeChallengeService;

    @PostMapping("/notify-testcase-result")
    public ResponseEntity<Void> receiveResult(@RequestBody TestcaseResult dto) {
        SendTestcaseResultStatus status = codeChallengeService.sendTestcaseResult(dto.getJobId(), dto);

        switch(status) {
            case SUCCESS:
                return ResponseEntity.ok().build();
            case CLIENT_NOT_FOUND:
                return ResponseEntity.notFound().build();
            case GONE:
                return ResponseEntity.status(410).build();
            default:
                return ResponseEntity.internalServerError().build();
        }
    }
}
