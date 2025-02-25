import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  CenterContainer,
  CenterContainerTitle,
  CenterContainerEach,
  CenterFeedContainer,
  CenterFeedText,
  CenterFeedContentsBox,
  FeedButton,
} from "../../styles/mypage/MyPage_UserFeed_M";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import UserFeed_WriteEditor from "./Components/UserFeed_WriteEditor";
import { MobileEachTitle } from "../../styles/mypage/MyPage_M";

const MyPage_UserFeed_M = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleMyPage = () => {
    navigate("/mypage");
  };

  const handleRefresh = () => {
    navigate("/mypage/userfeed");
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleOpenEditor = () => setIsEditing(true);
  const handleCloseEditor = () => setIsEditing(false);

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxLink onClick={() => handleMyPage()}>
              <TopBoxText>my page</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>내 소개</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <MobileEachTitle>내 소개</MobileEachTitle>
          <CenterFeedContainer>
            {isEditing ? (
              <UserFeed_WriteEditor handleCloseEditor={handleCloseEditor} />
            ) : (
              <CenterFeedContentsBox>
                <CenterFeedText>등록된 소개글이 없습니다.</CenterFeedText>
                <FeedButton onClick={handleOpenEditor}>
                  내 소개글 등록하기
                </FeedButton>
              </CenterFeedContentsBox>
            )}
          </CenterFeedContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_UserFeed_M;
