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
} from "../../styles/mypage/MyPage_UserFeed";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import UserFeed_WriteEditor from "./Components/UserFeed_WriteEditor";
import MyPage_UserFeed_M from "./MyPage_UserFeed_M";
import AxiosApi from "../../../api/AxiosApi";

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
  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    // 소개글 불러오기
    const fetchIntroduction = async () => {
      try {
        const data = await AxiosApi.getUserIntroduction();
        console.log("불러온 소개글:", data); // 디버깅용 콘솔 로그
        setIntroduction(data);
      } catch (error) {
        console.error("소개글 불러오기 실패:", error);
      }
    };

    fetchIntroduction();
  }, []);

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
                      initialContent={introduction} // 기존 소개글 전달
                    />
                  ) : introduction ? (
                    <CenterFeedContentsBox>
                      <CenterFeedText
                        dangerouslySetInnerHTML={{ __html: introduction }}
                      />
                      <br></br>
                      <br></br>
                      <FeedButton onClick={handleOpenEditor}>
                        소개글 수정
                      </FeedButton>
                    </CenterFeedContentsBox>
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
