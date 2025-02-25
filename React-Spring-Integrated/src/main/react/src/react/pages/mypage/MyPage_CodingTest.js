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
  SubjectContainer,
  CenterContainerTitle,
} from "../../styles/mypage/MyPage";
import {
  SubjectLink,
  LevelContainer,
  LevelImgPractice,
  LevelImgBasic,
  LevelImgIntermediate,
  LevelImgExpert,
  LevelContainerPage,
} from "../../styles/codingtest/CodingTest_Main";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect } from "react";
import MyPage_CodingTest_M from "./MyPage_CodingTest_M";

const MyPage_CodingTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    navigate("/mypage/codingtest");
  };

  // Practice onClick
  const handlePractice = () => {
    navigate("/codingtest/practice");
  };

  // Basic onClick
  const handleBasic = () => {
    navigate("/codingtest/basic");
  };

  // Practice onClick
  const handleIntermediate = () => {
    navigate("/codingtest/intermediate");
  };

  // Practice onClick
  const handleExpert = () => {
    navigate("/codingtest/expert");
  };

  return (
    <>
      {isMobile ? (
        <MyPage_CodingTest_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleMyPage()}>my page</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                coding test
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftTopProfile />
              <LeftMenus />
            </LeftContainer>
            <CenterContainer>
              <CenterContainerTitle>coding test</CenterContainerTitle>
              <SubjectContainer>
                <SubjectLink onClick={() => handlePractice()}>
                  <LevelContainerPage>
                    <LevelImgPractice />
                    Practice
                  </LevelContainerPage>
                </SubjectLink>
                <SubjectLink onClick={() => handleBasic()}>
                  <LevelContainerPage>
                    <LevelImgBasic />
                    Basic
                  </LevelContainerPage>
                </SubjectLink>
                <SubjectLink onClick={() => handleIntermediate()}>
                  <LevelContainerPage>
                    <LevelImgIntermediate />
                    Intermediate
                  </LevelContainerPage>
                </SubjectLink>
                <SubjectLink onClick={() => handleExpert()}>
                  <LevelContainerPage>
                    <LevelImgExpert />
                    Expert
                  </LevelContainerPage>
                </SubjectLink>
              </SubjectContainer>
            </CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default MyPage_CodingTest;
