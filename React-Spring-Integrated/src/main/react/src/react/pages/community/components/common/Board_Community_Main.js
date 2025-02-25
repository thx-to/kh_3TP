import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PostListContainer,
  PostEach,
  PostTop,
  PostTopUser,
  PostTopUserImg,
  PostTopUserId,
  PostTopDays,
  PostMiddle,
  PostMiddleContentsUpper,
  PostMiddleContentsTitle,
  PostMiddleContentsText,
  PostMiddleContentsSolved,
  PostMiddleContentsPending,
  PostBottom,
  PostBottomDataBox,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomDot,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  EachBoardTitle,
  PostBottomTagsBox,
  PostBottomTag,
  EachBoardContainer,
} from "../../../../styles/community/Board";
import AxiosApi from "../../../../../api/AxiosApi";
import {
  LanguageDisplayNames,
  CourseDisplayNames,
  StudyDisplayNames,
  TeamDisplayNames,
} from "../common/DisplayNames";

const Board_Community_Main = () => {
  const navigate = useNavigate();

  const [codingBoards, setCodingBoards] = useState([]);
  const [courseBoards, setCourseBoards] = useState([]);
  const [studyBoards, setStudyBoards] = useState([]);
  const [teamBoards, setTeamBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        try {
          const codingResponse = await AxiosApi.getBoard(
            1,
            3,
            "coding",
            "createdAt",
            "desc"
          );
          console.log("Coding Response:", codingResponse);
          setCodingBoards(codingResponse.content || []);
        } catch (error) {
          console.error("coding 게시판 가져오기 실패:", error);
        }

        try {
          const courseResponse = await AxiosApi.getBoard(
            1,
            3,
            "course",
            "createdAt",
            "desc"
          );
          console.log("Course Response:", courseResponse);
          setCourseBoards(courseResponse.content || []);
        } catch (error) {
          console.error("course 게시판 가져오기 실패:", error);
        }

        try {
          const studyResponse = await AxiosApi.getBoard(
            1,
            3,
            "study",
            "createdAt",
            "desc"
          );
          console.log("Study Response:", studyResponse);
          setStudyBoards(studyResponse.content || []);
        } catch (error) {
          console.error("study 게시판 가져오기 실패:", error);
        }

        try {
          const teamResponse = await AxiosApi.getBoard(
            1,
            3,
            "team",
            "createdAt",
            "desc"
          );
          console.log("Team Response:", teamResponse);
          setTeamBoards(teamResponse.content || []);
        } catch (error) {
          console.error("팀 게시판 가져오기 실패:", error);
        }
      } catch (error) {
        console.error("게시판 가져오기 실패: ", error);
      }
    };

    fetchBoards();
  }, []);

  // 게시글 클릭 시 이동
  const handlePost = (boardType, board) => {
    navigate(`/community/${boardType}/post/${board.boardId}`, {
      state: { boardId: board.boardId, boardType },
    });
  };

  const handleMove = async (boardType, board) => {
    try {
      const response = await AxiosApi.getPostCheck(board.boardId);
      if (response) {
        handlePost(boardType, board);
      }
    } catch (error) {
      console.error("게시글 이동중 오류 발생 : ", error);
    }
  };

  const handleBoard = (boardType) => {
    navigate(`/community/${boardType}`);
  };

  // HTML 태그 제거 후 텍스트만 추출
  const getTextFromHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
        <EachBoardTitle onClick={() => handleBoard("coding")}>
          💻 새로 올라온 코딩 질문
        </EachBoardTitle>
        <PostListContainer>
          {codingBoards.map((board) => (
            <PostEach
              key={board.boardId}
              onClick={() => handleMove("coding", board)}
              style={{ cursor: "pointer" }}
            >
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        board.profileUrl ||
                        "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>By: {board.name}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(board.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  . 작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  {board.status === "INACTIVE" ? (
                    <PostMiddleContentsSolved>해결됨</PostMiddleContentsSolved>
                  ) : (
                    <PostMiddleContentsPending>
                      미해결
                    </PostMiddleContentsPending>
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
                {Array.isArray(board.language) &&
                  board.language.some((item) => item.trim() !== "") && (
                    <PostBottomTagsBox>
                      {board.language.map((lang, index) => (
                        <PostBottomTag key={index}>
                          {LanguageDisplayNames[lang]}
                        </PostBottomTag>
                      ))}
                    </PostBottomTagsBox>
                  )}
                <PostBottomDataBox>
                  <PostBottomRepliesBox>
                    <PostBottomRepliesImg />
                    <PostBottomRepliesText>
                      {board.commentCnt}
                    </PostBottomRepliesText>
                  </PostBottomRepliesBox>
                  <PostBottomDot />
                  <PostBottomViewsBox>
                    <PostBottomViewsImg />
                    <PostBottomViewsText>{board.viewCnt}</PostBottomViewsText>
                  </PostBottomViewsBox>
                </PostBottomDataBox>
              </PostBottom>
            </PostEach>
          ))}
        </PostListContainer>

        <EachBoardTitle onClick={() => handleBoard("course")}>
          🎓 새로 올라온 진로 질문
        </EachBoardTitle>
        <PostListContainer>
          {courseBoards.map((board) => (
            <PostEach
              key={board.boardId}
              onClick={() => handleMove("course", board)}
              style={{ cursor: "pointer" }}
            >
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        board.profileUrl ||
                        "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>By: {board.name}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(board.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  . 작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  <PostMiddleContentsTitle>
                    {board.title}
                  </PostMiddleContentsTitle>
                </PostMiddleContentsUpper>
                <PostMiddleContentsText>
                  {getTextFromHTML(board.content)}
                </PostMiddleContentsText>
              </PostMiddle>
              <PostBottom>
                {Array.isArray(board.course) &&
                  board.course.some((item) => item.trim() !== "") && (
                    <PostBottomTagsBox>
                      {board.course.map((lang, index) => (
                        <PostBottomTag key={index}>
                          {CourseDisplayNames[lang]}
                        </PostBottomTag>
                      ))}
                    </PostBottomTagsBox>
                  )}
                <PostBottomDataBox>
                  <PostBottomRepliesBox>
                    <PostBottomRepliesImg />
                    <PostBottomRepliesText>
                      {board.commentCnt}
                    </PostBottomRepliesText>
                  </PostBottomRepliesBox>
                  <PostBottomDot />
                  <PostBottomViewsBox>
                    <PostBottomViewsImg />
                    <PostBottomViewsText>{board.viewCnt}</PostBottomViewsText>
                  </PostBottomViewsBox>
                </PostBottomDataBox>
              </PostBottom>
            </PostEach>
          ))}
        </PostListContainer>


        <EachBoardTitle onClick={() => handleBoard("study")}>
          ✏️ 새로 올라온 스터디 모집
        </EachBoardTitle>
        <PostListContainer>
          {studyBoards.map((board) => (
            <PostEach
              key={board.boardId}
              onClick={() => handleMove("study", board)}
              style={{ cursor: "pointer" }}
            >
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        board.profileUrl ||
                        "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>By: {board.name}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(board.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  . 작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  {board.status === "INACTIVE" ? (
                    <PostMiddleContentsSolved>
                      모집완료
                    </PostMiddleContentsSolved>
                  ) : (
                    <PostMiddleContentsPending>
                      모집중
                    </PostMiddleContentsPending>
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
                {Array.isArray(board.study) &&
                  board.study.some((item) => item.trim() !== "") && (
                    <PostBottomTagsBox>
                      {board.study.map((lang, index) => (
                        <PostBottomTag key={index}>
                          {StudyDisplayNames[lang]}
                        </PostBottomTag>
                      ))}
                    </PostBottomTagsBox>
                  )}
                <PostBottomDataBox>
                  <PostBottomRepliesBox>
                    <PostBottomRepliesImg />
                    <PostBottomRepliesText>
                      {board.commentCnt}
                    </PostBottomRepliesText>
                  </PostBottomRepliesBox>
                  <PostBottomDot />
                  <PostBottomViewsBox>
                    <PostBottomViewsImg />
                    <PostBottomViewsText>{board.viewCnt}</PostBottomViewsText>
                  </PostBottomViewsBox>
                </PostBottomDataBox>
              </PostBottom>
            </PostEach>
          ))}
        </PostListContainer>


        <EachBoardTitle onClick={() => handleBoard("team")}>
          📋 새로 올라온 프로젝트 구인
        </EachBoardTitle>
        <PostListContainer>
          {teamBoards.map((board) => (
            <PostEach
              key={board.boardId}
              onClick={() => handleMove("team", board)}
              style={{ cursor: "pointer" }}
            >
              <PostTop>
                <PostTopUser>
                  <PostTopUserImg
                    style={{
                      backgroundImage: `url(${
                        board.profileUrl ||
                        "/images/general/default_profile.png"
                      })`,
                    }}
                  />
                  <PostTopUserId>By: {board.name}</PostTopUserId>
                </PostTopUser>
                <PostTopDays>
                  {new Date(board.createdAt)
                    .toISOString()
                    .slice(0, 10)
                    .replace(/-/g, ".")}
                  . 작성
                </PostTopDays>
              </PostTop>
              <PostMiddle>
                <PostMiddleContentsUpper>
                  {board.status === "INACTIVE" ? (
                    <PostMiddleContentsSolved>
                      모집완료
                    </PostMiddleContentsSolved>
                  ) : (
                    <PostMiddleContentsPending>
                      모집중
                    </PostMiddleContentsPending>
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
                {Array.isArray(board.team) &&
                  board.team.some((item) => item.trim() !== "") && (
                    <PostBottomTagsBox>
                      {board.team.map((lang, index) => (
                        <PostBottomTag key={index}>
                          {TeamDisplayNames[lang]}
                        </PostBottomTag>
                      ))}
                    </PostBottomTagsBox>
                  )}
                <PostBottomDataBox>
                  <PostBottomRepliesBox>
                    <PostBottomRepliesImg />
                    <PostBottomRepliesText>
                      {board.commentCnt}
                    </PostBottomRepliesText>
                  </PostBottomRepliesBox>
                  <PostBottomDot />
                  <PostBottomViewsBox>
                    <PostBottomViewsImg />
                    <PostBottomViewsText>{board.viewCnt}</PostBottomViewsText>
                  </PostBottomViewsBox>
                </PostBottomDataBox>
              </PostBottom>
            </PostEach>
          ))}
        </PostListContainer>


    </>
  );
};

export default Board_Community_Main;
