import {useEffect, useState} from "react";
import {
  ReplyContainer,
  ReplyTitle,
  SuggestBox,
  ReplyList,
  ReplyEach,
  ReplyUserProfileBox,
  ReplyUserProfileImg,
  ReplyUserId,
  ReplyUserProfileTextBox,
  ReplyUserDate,
  ReplyMiddle,
  ReplyMiddleText,
  EditorBox,
} from "../../../../styles/community/Post";
import AxiosApi from "../../../../../api/AxiosApi";
import {useNavigate, useParams} from "react-router-dom";
import {Editor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Post_Reply_WriteEditor from "./Post_ReplyEditor";
import Board_Pagination from "./Board_Pagination";
import {useSelector} from "react-redux";

const Post_ReplyArea = ({boardType, page, size, sortBy, order}) => {
  const {boardId} = useParams();
  const [posts, setPosts] = useState([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [replies, setReplies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // Get Replies from Backend (getPost)
  useEffect(() => {
    const readPost = async () => {
      try {
        const response = await AxiosApi.getPost(boardId);
        setPosts([response]);
      } catch (error) {
        console.error("게시글 가져오는 중 오류 발생 : ", error);
      }
    };
    readPost();
  }, [boardId]);

  // Get Replies from Backend (getReplies)
  useEffect(() => {
    const loadReplies = async () => {
      try {
        const response = await AxiosApi.getReplies(
          boardId,
          currentPage,
          size,
          sortBy,
          order
        );
        setReplies(response.content);
        setTotalPages(response.totalPages);
        console.log("댓글 항목 : ", response);
      } catch (error) {
        console.error("댓글 리스트 가져오는 중 오류 발생 : ", error);
      }
    };
    loadReplies();
  }, [boardId, currentPage]);

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

  // Reply Editor Open
  const handleBoxClick = () => {
    if (!editorOpen) {
      setEditorOpen(true); // 클릭 시 에디터 열기
    }
  };

  // Reply Editor Close
  const handleCloseEditor = () => {
    setEditorOpen(false);
  };

  const nickname = useSelector((state) => state.auth.nickname);

  return (
    <>
      {posts.map((post, index) => (
        <ReplyContainer key={index}>
          <ReplyTitle>답변 {post.commentCnt}</ReplyTitle>
          <SuggestBox
            expanded={editorOpen}
            onClick={nickname ? handleBoxClick : () => navigate("/login")}
          >
            <span style={{marginLeft: "15px", cursor: "pointer"}}>
              💡
              {nickname
                ? `${nickname}님, 답변을 작성해보세요.`
                : " 로그인하고 답변을 작성해보세요."}
            </span>
            {editorOpen && (
              <EditorBox expanded={editorOpen}>
                <Post_Reply_WriteEditor
                  handleCloseEditor={handleCloseEditor}
                  boardID={boardId}
                />
              </EditorBox>
            )}
          </SuggestBox>
          <ReplyList>
            {replies
              .filter((reply) => reply.boardId === post.boardId) // boardId가 같은 것만 필터링
              .map((reply, index) => (
                <ReplyEach key={index}>
                  <ReplyUserProfileBox>
                    <ReplyUserProfileImg isProfile={reply.profileUrl} />
                    <ReplyUserProfileTextBox>
                      <ReplyUserId>{reply.name}</ReplyUserId>
                      <ReplyUserDate>
                        {new Date(reply.createdAt)
                          .toLocaleString("ko-KR", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })
                          .replace(/\. /g, ". ")}{" "}
                        작성
                      </ReplyUserDate>
                      <ReplyMiddleText
                        dangerouslySetInnerHTML={{__html: reply.content}}
                      />
                    </ReplyUserProfileTextBox>
                  </ReplyUserProfileBox>
                </ReplyEach>
              ))}
          </ReplyList>
          {totalPages > 1 && (
            <Board_Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </ReplyContainer>
      ))}
    </>
  );
};

export default Post_ReplyArea;
