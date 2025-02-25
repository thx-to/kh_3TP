/* 각각 커뮤니티에 해당하는 게시글 보기, 게시글 작성, 게시글 수정 등등 요청과 응답에 필요한 컨트롤러 */
package com.kh.totalproject.controller;

import com.kh.totalproject.constant.Reaction;
import com.kh.totalproject.dto.request.BoardRequest;
import com.kh.totalproject.dto.request.CommentRequest;
import com.kh.totalproject.dto.response.BoardReactionResponse;
import com.kh.totalproject.dto.response.BoardResponse;
import com.kh.totalproject.dto.response.CommentResponse;
import com.kh.totalproject.dto.response.UserResponse;
import com.kh.totalproject.service.CommunityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/community")
public class CommunityController {
    private final CommunityService communityService;

    // 게시판별 단일 글 작성시 게시판 type 을 전달 받아 서비스에서 해당 로직으로 연결
    @PostMapping("/new/post")
    ResponseEntity<Boolean> createPost(@RequestBody BoardRequest boardRequest,
                                       @RequestParam String boardType) {
        return ResponseEntity.ok(communityService.createPost(boardRequest, boardType));
    }

    // 게시판별 단일 글 수정시 게시판 type 을 전달 받아 서비스에서 해당 로직으로 연결
    @PutMapping("/modify/post")
    ResponseEntity<Boolean> modifyPost(@RequestBody BoardRequest boardRequest,
                                       @RequestParam String boardType) {
        return ResponseEntity.ok(communityService.modifyPost(boardRequest, boardType));
    }

    // 게시글 삭제시 게시글 번호를 전달 받아 서비스에서 해당 로직으로 연결
    @DeleteMapping("/delete/post")
    ResponseEntity<Boolean> deletePost(@RequestParam Long id) {
        return ResponseEntity.ok(communityService.deletePost(id));
    }


    // 게시판별 전체 게시글 조회시 게시판 type 을 전달 받아 서비스에서 해당 로직으로 연결
    @GetMapping("/list/all")
    ResponseEntity<Page<BoardResponse>> listAll(@RequestParam(defaultValue = "1") int page,
                                                @RequestParam(defaultValue = "10") int size,
                                                @RequestParam String boardType,
                                                @RequestParam(required = false) String sortBy,
                                                @RequestParam(required = false) String order,
                                                @RequestParam(required = false) String status,
                                                @RequestParam(required = false) String enumFilter,
                                                @RequestParam(required = false) String search) {
        return ResponseEntity.ok(communityService.listAllByBoardTypeWithSort(page, size, boardType, sortBy, order, status, enumFilter, search));
    }

    // 게시판별 단일 게시글 조회시 게시판 type 을 전달 받아 서비스에서 해당 로직으로 연결
    @GetMapping("/list/one")
    ResponseEntity<BoardResponse> listOne(@RequestParam long id) {
        return ResponseEntity.ok(communityService.listOneById(id));
    }

    // 단순 조회수 올리기
    @GetMapping("/list/one/check")
    ResponseEntity<Boolean> listOneCheck(@RequestParam long id) {
        return ResponseEntity.ok(communityService.listOneByIdCheck(id));
    }

    // 게시글 내 댓글 확인
    @GetMapping("/list/comment")
    ResponseEntity<Page<CommentResponse>> listComment(@RequestParam Long boardId,
                                                      @RequestParam(defaultValue = "1") int page,
                                                      @RequestParam(defaultValue = "10") int size,
                                                      @RequestParam(defaultValue = "createdAt") String sortBy,
                                                      @RequestParam(defaultValue = "DESC") String order) {
        return ResponseEntity.ok(communityService.listComment(boardId, page, size, sortBy, order));
    }

    // 댓글 생성
    @PostMapping("/add/comment")
    ResponseEntity<Boolean> addComment(@RequestBody CommentRequest commentRequest) {
        return ResponseEntity.ok(communityService.addComment(commentRequest));
    }

    // 댓글 수정
    @PutMapping("/modify/comment")
    ResponseEntity<Boolean> modifyComment(@RequestBody CommentRequest commentRequest) {
        return ResponseEntity.ok(communityService.modifyComment(commentRequest));
    }

    // 댓글 삭제
    @DeleteMapping("/delete/comment")
    ResponseEntity<Boolean> deleteComment(@RequestParam Long id) {
        return ResponseEntity.ok(communityService.deleteComment(id));
    }

    // 게시글 내 좋아요 싫어요 클릭시 요청 / 응답
    @PostMapping("/reaction/voting")
    public ResponseEntity<?> toggleReaction(@RequestParam Long boardId,
                                            @RequestParam Long userId,
                                            @RequestParam Reaction reaction) {
        communityService.toggleReaction(boardId, userId, reaction);
        return ResponseEntity.ok().build();
    }

    // 유저별 좋아요 싫어요 상태
    @GetMapping("/reaction/status")
    public ResponseEntity<BoardReactionResponse> getReactionStatus(@RequestParam Long boardId,
                                                                   @RequestParam Long userId) {
        BoardReactionResponse reactionStatus = communityService.getReactionStatus(boardId, userId);
        return ResponseEntity.ok(reactionStatus);
    }

    // 게시판에서 TopWriter 요청 / 응답
    @GetMapping("/topWriter")
    public ResponseEntity<List<BoardResponse>> getTopWriterBoard() {
        return ResponseEntity.ok(communityService.getTopWriterBoard());
    }

    // 주간 인기글 요청 / 응답
    @GetMapping("/weeklyPopularPost")
    public ResponseEntity<List<BoardResponse>> weeklyPopularPost() {
        return ResponseEntity.ok(communityService.getWeeklyPopularPost());
    }

    // 상대방의 아이디를 클릭 했을때 상대방의 게시글 목록 요청 / 응답
    @GetMapping("/list/others/post")
    public ResponseEntity<Page<BoardResponse>> listOthersPost(@RequestParam Long userId,
                                                              @RequestParam(defaultValue = "1") int page,
                                                              @RequestParam(defaultValue = "10") int size,
                                                              @RequestParam(required = false) String sortBy,
                                                              @RequestParam(required = false) String order) {
        return ResponseEntity.ok(communityService.listOthersPost(userId, page, size, sortBy, order));
    }

    @GetMapping("/list/others/profile")
    public ResponseEntity<UserResponse> listOthersProfile(@RequestParam Long userId) {
        return ResponseEntity.ok(communityService.listOthersProfile(userId));
    }
}
