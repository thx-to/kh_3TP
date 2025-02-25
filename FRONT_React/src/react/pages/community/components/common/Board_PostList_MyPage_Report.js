import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostEach,
  PostListContainer,
  PostTop,
  PostTopUser,
  PostTopUserId,
  PostTopUserImg,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostBottom,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostBottomDot,
  PostMiddleContentsUpper,
  PostMiddleContentsSolved,
  PostMiddleContentsPending,
} from "../../../../styles/community/Board";
import AxiosApi from "../../../../../api/AxiosApi";
import Board_Pagination from "./Board_Pagination";

const Board_PostList_MyPage_Report = ({ page, size, status, onPageChange }) => {
  const navigate = useNavigate();
  const [reportPosts, setReportPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMyReportPosts = async () => {
      try {
        const response = await AxiosApi.getMyReportPosts(
          page,
          size,
          "createdAt",
          "DESC",
          status
        );
        setReportPosts(response.content);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("내 신고한 게시글 불러오기 오류:", error);
      }
    };
    fetchMyReportPosts();
  }, [page, size, status]); // status 변경 시 데이터 새로 불러오기

  // HTML 태그 제거 함수
  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handlePostClick = (post) => {
    navigate(`/community/${post.boardType}/post/${post.boardId}`);
  };

  return (
    <>
      <PostListContainer>
        {reportPosts.length > 0 ? (
          reportPosts.map((post) => (
            <PostEach key={post.boardId} onClick={() => handlePostClick(post)}>
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        post.profileUrl
                          ? post.profileUrl
                          : "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>{post.name ?? "알 수 없음"}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(post.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  {". "}
                  작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  {post.status === "INACTIVE" ? (
                    <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
                  ) : (
                    <PostMiddleContentsPending>
                      미해결
                    </PostMiddleContentsPending>
                  )}
                  <PostMiddleContentsTitle>
                    {post.title}
                  </PostMiddleContentsTitle>
                </PostMiddleContentsUpper>
                <PostMiddleContentsText>
                  {getTextFromHTML(post.content)}
                </PostMiddleContentsText>
              </PostMiddle>
            </PostEach>
          ))
        ) : (
          <p>신고한 게시글이 없습니다.</p>
        )}
      </PostListContainer>

      <Board_Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Board_PostList_MyPage_Report;
