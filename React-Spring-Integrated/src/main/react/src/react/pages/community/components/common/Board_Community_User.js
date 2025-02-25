import {useLocation, useNavigate, useParams} from "react-router-dom";
import {
  BoardContainer,
  PostListContainer,
  PostEach,
  PostTop,
  PostTopUserImg,
  PostTopUser,
  PostTopUserId,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsUpper,
  PostMiddleContentsPending,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostBottom,
  PostBottomTagsBox,
  PostBottomTag,
  PostBottomDataBox,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomDot,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostMiddleContentsSolved,
  PostListHr,
} from "../../../../styles/community/Board";
import {useEffect, useState} from "react";
import Board_Pagination from "./Board_Pagination";
import AxiosApi from "../../../../../api/AxiosApi";
import {LanguageDisplayNames} from "./DisplayNames";
import {CourseDisplayNames} from "./DisplayNames";
import {StudyDisplayNames} from "./DisplayNames";
import {TeamDisplayNames} from "./DisplayNames";

const Board_Community_User = ({
  writerName,
  writerKey,
  writerProfile,
  page,
  size,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstpath} = location.state || {};

  const [writerBoards, setWriterBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // view post
  const handlePost = (board) => {
    let secondpath = "";

    switch (board.boardType) {
      case "CODING":
        secondpath = "코딩 질문";
        break;
      case "COURSE":
        secondpath = "진로 질문";
        break;
      case "STUDY":
        secondpath = "스터디";
        break;
      case "TEAM":
        secondpath = "팀 프로젝트";
        break;
      default:
        secondpath = "기타";
    }

    navigate(
      `/community/${board.boardType.toLowerCase()}/post/${board.boardId}`,
      {
        state: {
          firstpath: firstpath,
          secondpath: secondpath,
          thirdpath: "게시글",
          boardId: board.boardId,
          boardType: board.boardType.toLowerCase(),
        },
      }
    );
  };
  const handleMove = async (board) => {
    try {
      const response = await AxiosApi.getPostCheck(board.boardId);
      if (response) {
        handlePost(board);
      }
    } catch (error) {
      console.error("게시글 이동중 오류 발생 : ", error);
    }
  };
  useEffect(() => {
    const readUserPost = async () => {
      try {
        const response = await AxiosApi.getotherpost(
          writerKey,
          currentPage,
          size
        );
        setWriterBoards(response.content);
        setTotalPages(response.totalPages);
        console.log("게시글 정보 : ", response.content);
      } catch (error) {
        console.log(error);
      }
    };
    readUserPost();
  }, [currentPage]);
  // paging handler
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // contents conversion
  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <BoardContainer>
        <PostListContainer>
          {writerBoards.map((board) => (
            <PostEach
              key={board.boardId}
              style={{cursor: "pointer"}}
              onClick={() => {
                handleMove(board);
              }}
            >
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        writerProfile
                          ? writerProfile
                          : "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>By: {writerName}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(board.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  {". "}
                  작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  {board.boardType === "CODING" ? (
                    board.status === "INACTIVE" ? (
                      <PostMiddleContentsSolved>
                        해결됨
                      </PostMiddleContentsSolved>
                    ) : (
                      <PostMiddleContentsPending>
                        미해결
                      </PostMiddleContentsPending>
                    )
                  ) : board.boardType === "STUDY" ? (
                    board.status === "INACTIVE" ? (
                      <PostMiddleContentsSolved>
                        모집완료
                      </PostMiddleContentsSolved>
                    ) : (
                      <PostMiddleContentsPending>
                        모집중
                      </PostMiddleContentsPending>
                    )
                  ) : (
                    board.boardType === "TEAM" &&
                    (board.status === "INACTIVE" ? (
                      <PostMiddleContentsSolved>
                        모집완료
                      </PostMiddleContentsSolved>
                    ) : (
                      <PostMiddleContentsPending>
                        모집중
                      </PostMiddleContentsPending>
                    ))
                  )}
                  <PostMiddleContentsTitle>
                    {board.title}
                  </PostMiddleContentsTitle>
                </PostMiddleContentsUpper>
                <PostMiddleContentsText>
                  {getTextFromHTML(board.content)}
                </PostMiddleContentsText>
              </PostMiddle>
              <PostBottom>
                {((Array.isArray(board.language) &&
                  board.language.some((item) => item.trim() !== "")) ||
                  (Array.isArray(board.course) &&
                    board.course.some((item) => item.trim() !== "")) ||
                  (Array.isArray(board.study) &&
                    board.study.some((item) => item.trim() !== "")) ||
                  (Array.isArray(board.team) &&
                    board.team.some((item) => item.trim() !== ""))) && (
                  <PostBottomTagsBox>
                    {board.language && board.language.length > 0
                      ? board.language.map((lang, index) => (
                          <PostBottomTag>
                            {LanguageDisplayNames[lang]}
                          </PostBottomTag>
                        ))
                      : board.course && board.course.length > 0
                      ? board.course.map((lang, index) => (
                          <PostBottomTag>
                            {CourseDisplayNames[lang]}
                          </PostBottomTag>
                        ))
                      : board.study && board.study.length > 0
                      ? board.study.map((lang, index) => (
                          <PostBottomTag>
                            {StudyDisplayNames[lang]}
                          </PostBottomTag>
                        ))
                      : board.team &&
                        board.team.length > 0 &&
                        board.team.map((lang, index) => (
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
                      {board.commentCnt} replies
                    </PostBottomRepliesText>
                  </PostBottomRepliesBox>
                  <PostBottomDot />
                  <PostBottomViewsBox>
                    <PostBottomViewsImg />
                    <PostBottomViewsText>
                      {board.viewCnt} views
                    </PostBottomViewsText>
                  </PostBottomViewsBox>
                </PostBottomDataBox>
              </PostBottom>
            </PostEach>
          ))}
        </PostListContainer>
      </BoardContainer>
      <Board_Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Board_Community_User;
