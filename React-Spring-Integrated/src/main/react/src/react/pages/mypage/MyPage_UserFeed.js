import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  LeftContainer,
  CenterContainer,
  CenterContainerTitle,
  CenterContainerEach,
  CenterFeedContainer,
  CenterFeedText,
  CenterFeedContentsBox,
  FeedButton,
} from "../../styles/mypage/MyPage_UserFeed";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import UserFeed_WriteEditor from "./Components/UserFeed_WriteEditor";
import MyPage_UserFeed_M from "./MyPage_UserFeed_M";

const MyPage_UserFeed = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

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
      {isMobile ? (
        <MyPage_UserFeed_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleMyPage()}>my page</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>내 소개</TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftTopProfile />
              <LeftMenus />
            </LeftContainer>
            <CenterContainer>
              <CenterContainerEach>
                <CenterContainerTitle>내 소개</CenterContainerTitle>
                <CenterFeedContainer>
                  {isEditing ? (
                    <UserFeed_WriteEditor
                      handleCloseEditor={handleCloseEditor}
                    />
                  ) : (
                    <CenterFeedContentsBox>
                      <CenterFeedText>등록된 소개글이 없습니다.</CenterFeedText>
                      <FeedButton onClick={handleOpenEditor}>
                        내 소개글 등록하기
                      </FeedButton>
                    </CenterFeedContentsBox>
                  )}
                </CenterFeedContainer>
              </CenterContainerEach>
            </CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default MyPage_UserFeed;
