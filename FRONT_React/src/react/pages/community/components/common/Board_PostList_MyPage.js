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
  PostBottomTagsBox,
  PostBottomTag,
  PostBottomDataBox,
} from "../../../../styles/community/Board";
import AxiosApi from "../../../../../api/AxiosApi";
import Board_Pagination from "./Board_Pagination";
import {
  CourseDisplayNames,
  LanguageDisplayNames,
  StudyDisplayNames,
  TeamDisplayNames,
} from "./DisplayNames";

const Board_PostList_MyPage = ({ page, size, onPageChange }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await AxiosApi.getMyPosts(page, size);
        setPosts(response.content);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("내 게시글 불러오기 오류:", error);
      }
    };
    fetchMyPosts();
  }, [page, size]);

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
        {posts.length > 0 ? (
          posts.map((post) => (
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
                  <PostTopUserId>{post.name}</PostTopUserId>
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
                  {post.status ? (
                    post.boardType === "CODING" ? (
                      post.status === "INACTIVE" ? (
                        <PostMiddleContentsSolved>
                          해결됨
                        </PostMiddleContentsSolved>
                      ) : (
                        <PostMiddleContentsPending>
                          미해결
                        </PostMiddleContentsPending>
                      )
                    ) : post.boardType === "STUDY" ? (
                      post.status === "INACTIVE" ? (
                        <PostMiddleContentsSolved>
                          모집완료
                        </PostMiddleContentsSolved>
                      ) : (
                        <PostMiddleContentsPending>
                          모집중
                        </PostMiddleContentsPending>
                      )
                    ) : (
                      post.boardType === "TEAM" &&
                      (post.status === "INACTIVE" ? (
                        <PostMiddleContentsSolved>
                          모집완료
                        </PostMiddleContentsSolved>
                      ) : (
                        <PostMiddleContentsPending>
                          모집중
                        </PostMiddleContentsPending>
                      ))
                    )
                  ) : (
                    <></>
                  )}
                  <PostMiddleContentsTitle>
                    {post.title}
                  </PostMiddleContentsTitle>
                </PostMiddleContentsUpper>
                <PostMiddleContentsText>
                  {/* {getTextFromHTML(post.content).length > 100
                    ? getTextFromHTML(post.content).slice(0, 100) + "..."
                    : getTextFromHTML(post.content)} */}
                  {getTextFromHTML(post.content)}
                </PostMiddleContentsText>
              </PostMiddle>
              <PostBottom>
                {((Array.isArray(post.language) &&
                  post.language.some((item) => item.trim() !== "")) ||
                  (Array.isArray(post.course) &&
                    post.course.some((item) => item.trim() !== "")) ||
                  (Array.isArray(post.study) &&
                    post.study.some((item) => item.trim() !== "")) ||
                  (Array.isArray(post.team) &&
                    post.team.some((item) => item.trim() !== ""))) && (
                  <PostBottomTagsBox>
                    {post.language && post.language.length > 0
                      ? post.language.map((lang, index) => (
                          <PostBottomTag>
                            {LanguageDisplayNames[lang]}
                          </PostBottomTag>
                        ))
                      : post.course && post.course.length > 0
                      ? post.course.map((lang, index) => (
                          <PostBottomTag>
                            {CourseDisplayNames[lang]}
                          </PostBottomTag>
                        ))
                      : post.study && post.study.length > 0
                      ? post.study.map((lang, index) => (
                          <PostBottomTag>
                            {StudyDisplayNames[lang]}
                          </PostBottomTag>
                        ))
                      : post.team &&
                        post.team.length > 0 &&
                        post.team.map((lang, index) => (
                          <PostBottomTag>
                            {TeamDisplayNames[lang]}
                          </PostBottomTag>
                        ))}
                  </PostBottomTagsBox>
                )}
                <PostBottomDataBox>
                  <PostBottomRepliesBox>
                    <PostBottomRepliesImg />
                    <PostBottomRepliesText>
                      {post.commentCnt}
                    </PostBottomRepliesText>
                  </PostBottomRepliesBox>
                  <PostBottomDot />
                  <PostBottomViewsImg />
                  <PostBottomViewsText>{post.viewCnt}</PostBottomViewsText>
                </PostBottomDataBox>
              </PostBottom>
            </PostEach>
          ))
        ) : (
          <p>작성한 게시글이 없습니다.</p>
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

export default Board_PostList_MyPage;
