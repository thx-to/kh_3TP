import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

import {
  Wrap,
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
} from "../../styles/community/Post";
import Post_ReplyArea from "./components/common/Post_ReplyArea";
import Post_UserProfile from "./components/common/Post_UserProfile";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import Post_MainContents from "./components/common/Post_MainContents";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import Post_Read_M from "./Post_Read_M";
import AxiosApi from "../../../api/AxiosApi";

const Post_Read = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardType, boardId } = useParams();
  const queryParams = new URLSearchParams(location.search);

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  );
  const [order, setOrder] = useState(queryParams.get("order") || "desc");
  const [postTitle, setPostTitle] = useState("");

  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // TopBox firstpath
  const handleCommunity = () => {
    console.log(boardType);
    navigate("/community");
  };

  // TopBox secondpath
  const handleCommunityBoard = () => {
    console.log(boardType);
    navigate(`/community/${boardType}`);
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    console.log(boardType);
    navigate(`/community/${boardType}/post/${boardId}`);
  };

  const boardNameConverter = [
    { type: "coding", display: "💻 코딩 질문" },
    { type: "course", display: "🎓 진로 질문" },
    { type: "study", display: "️✏️ 스터디" },
    { type: "team", display: "📋 팀 프로젝트" },
  ];

  const boardDisplayName =
    boardNameConverter.find((item) => item.type === boardType)?.display ||
    boardType;

  // Get Post from Backend
  useEffect(() => {
    const readPost = async () => {
      try {
        const response = await AxiosApi.getPost(boardId);
        setPostTitle(response.title);
      } catch (error) {
        console.error("제목 가져오는 중 오류 발생 : ", error);
      }
    };
    readPost();
  }, [boardId]);

  return (
    <>
      {isMobile ? (
        <Post_Read_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleCommunity()}>
                community
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText
                style={{
                  display: "block", // 기본적으로 block으로 설정, 필요 시 다른 스타일을 적용
                  whiteSpace: "nowrap", // 텍스트가 한 줄에 모두 표시되게 설정
                  overflow: "visible", // 텍스트가 잘리지 않도록 설정
                  textOverflow: "clip", // 텍스트가 넘치지 않도록 설정 (필요 시 조정)
                }}
                onClick={() => handleCommunityBoard()}
              >
                {boardDisplayName}
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                onClick={() => handleRefresh()}
              >
                {postTitle}
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Post_MainContents boardType={boardType} />
              <Post_ReplyArea
                boardType={boardType}
                page={page}
                size={size}
                sortBy={sortBy}
                order={order}
              />
            </LeftContainer>
            <RightContainer>
              <Post_UserProfile />
              <Post_RelatedPosts />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Post_Read;
