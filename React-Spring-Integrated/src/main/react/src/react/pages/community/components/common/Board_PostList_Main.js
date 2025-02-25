import { useEffect, useState } from "react";
import {
  PostBottom,
  PostBottomDataBox,
  PostBottomDot,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomTag,
  PostBottomTagsBox,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  PostEach,
  PostEachMain,
  PostListContainer,
  PostMiddle,
  PostMiddleContentsPending,
  PostMiddleContentsSolved,
  PostMiddleContentsText,
  PostMiddleContentsTitle,
  PostMiddleContentsUpper,
  PostTop,
  PostTopDays,
  PostTopUser,
  PostTopUserId,
  PostTopUserImg,
} from "../../../../styles/community/Board";
import AxiosApi from "../../../../../api/AxiosApi";
import { useLocation, useNavigate } from "react-router-dom";
import Board_Pagination from "./Board_Pagination";
import {
  LanguageDisplayNames,
  CourseDisplayNames,
  StudyDisplayNames,
  TeamDisplayNames,
} from "../common/DisplayNames";

const Board_PostList_Main = ({
  boardType,
  page,
  size,
  sortBy,
  order,
  status,
  enumFilter,
  search,
}) => {
  const navigate = useNavigate();

  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages > 0 ? totalPages : 1);
    }
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [enumFilter, search]);

  // Get Board from Backend
  useEffect(() => {
    const loadBoard = async () => {
      try {
        const response = await AxiosApi.getBoard(
          currentPage,
          size,
          boardType,
          sortBy,
          order,
          status,
          enumFilter,
          search
        );
        setBoards(response.content); // 받아온 게시글 리스트로 상태 업데이트
        setTotalPages(response.totalPages); // 총 페이지 수 설정
        console.log("게시글 불러오기 성공");
      } catch (error) {
        console.error("게시글 리스트 가져오는 중 오류 발생 : ", error);
      }
    };
    loadBoard();
  }, [boardType, currentPage, sortBy, order, status, enumFilter, search]); // boardType 또는 currentPage가 변경될 때마다 실행

  console.log("게시글 확인 : ", boards);

  // view post
  const handlePost = (boardType, board) => {
    navigate(`/community/${boardType}/post/${board.boardId}`, {
      state: {
        boardId: board.boardId,
        boardType: boardType,
      },
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
      <PostListContainer>
        {boards.length > 0 ? (
          <>
            {boards.map((board) => (
              <PostEachMain
                key={board.boardId}
                style={{ cursor: "pointer" }}
                onClick={() => handleMove(boardType, board)}
              >
                <PostTop>
                  <PostTopUser>
                    <PostTopUserImg
                      style={{
                        backgroundImage: `url(${
                          board.profileUrl
                            ? board.profileUrl
                            : "/images/general/default_profile.png"
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
                    {". "}
                    작성
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
              </PostEachMain>
            ))}
          </>
        ) : (
          <p>작성된 게시글이 없습니다.</p>
        )}
      </PostListContainer>
    </>
  );
};

export default Board_PostList_Main;
