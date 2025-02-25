import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

import {
  Container,
  LeftContainer,
  PostContainer,
  PostTitle,
  RightContainer,
  TopBox,
  TopBoxArrow,
  TopBoxText,
  TopBoxWide,
  Wrap,
  UserProfileBox,
  UserProfileImg,
  UserProfileTextBox,
  UserId,
  UserPostAmount,
} from "../../styles/community/User";
import { PathLink } from "../../styles/community/Community";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import User_Feed from "./components/common/User_Feed";
import Board_Community_Main from "./components/common/Board_Community_Main";
import Board_Community_User from "./components/common/Board_Community_User";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import AxiosApi from "../../../api/AxiosApi";
import User_Main_M from "./User_Main_M";

const User_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { writerKey } = location.state || {};
  const [writerProfile, setWriterProfile] = useState(null);
  const [writerName, setWriterName] = useState("");
  const [writerPostCnt, setWriterPostCnt] = useState(null);
  const [writerSelfIntro, setWriterSelfIntro] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  useEffect(() => {
    const readUserPost = async () => {
      console.log(writerKey);

      try {
        const response = await AxiosApi.getotherprofile(writerKey);
        setWriterProfile(response.profileUrl);
        setWriterName(response.nickname);
        setWriterPostCnt(response.postCnt);
        if (response.introduction === null) {
          setWriterSelfIntro("아직 자기소개글이 없습니다.");
        } else if (response.introduction === "") {
          setWriterSelfIntro("아직 자기소개글이 없습니다.");
        } else {
          setWriterSelfIntro(response.introduction);
        }
        console.log("불러온 작성자 게시글 목록 : ", response);
      } catch (error) {
        console.log("유저 게시글 불러올 때 오류 발생 : ", error);
      }
    };
    readUserPost();
  }, []);

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community");
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate(`/community/user/${writerKey}`, {
      state: {
        writerKey: writerKey,
      },
    });
  };

  return (
    <>
      {isMobile ? (
        <User_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <PathLink onClick={() => handleCommunity()}>
                <TopBoxText>community</TopBoxText>
              </PathLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <PathLink onClick={() => handleRefresh()}>
                <TopBoxText>User Page</TopBoxText>
              </PathLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <UserProfileBox style={{ cursor: "pointer" }}>
                <UserProfileImg isProfile={writerProfile} />
                <UserProfileTextBox>
                  <UserId>{writerName}</UserId>
                  <UserPostAmount>작성한 질문수 {writerPostCnt}</UserPostAmount>
                </UserProfileTextBox>
              </UserProfileBox>
            </LeftContainer>
            <RightContainer>
              <User_Feed intro={writerSelfIntro} />
              <PostContainer>
                <PostTitle>작성글</PostTitle>
                <Board_Community_User
                  writerName={writerName}
                  writerKey={writerKey}
                  writerProfile={writerProfile}
                  page={page}
                  size={size}
                />
              </PostContainer>
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default User_Main;
