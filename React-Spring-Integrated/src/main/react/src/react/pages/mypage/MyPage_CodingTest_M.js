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
  MobileEachTitle,
} from "../../styles/mypage/MyPage_M";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect } from "react";
import { SubjectLink } from "../../styles/study/Study_Main";
import {
  LevelContainer,
  LevelImgBasic,
  LevelImgExpert,
  LevelImgIntermediate,
  LevelImgPractice,
} from "../../styles/codingtest/CodingTest_Main";

const MyPage_CodingTest_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText onClick={() => handleMyPage()}>my page</TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText onClick={() => handleRefresh()}>coding test</TopBoxText>
          </TopBox>
        </TopBoxWide>
        <Container>
          <MobileEachTitle>coding test</MobileEachTitle>
          <SubjectContainer>
            <SubjectLink onClick={() => handlePractice()}>
              <LevelContainer>
                <LevelImgPractice>Practice</LevelImgPractice>
              </LevelContainer>
            </SubjectLink>
            <SubjectLink onClick={() => handleBasic()}>
              <LevelContainer>
                <LevelImgBasic>Basic</LevelImgBasic>
              </LevelContainer>
            </SubjectLink>
            <SubjectLink onClick={() => handleIntermediate()}>
              <LevelContainer>
                <LevelImgIntermediate>Intermediate</LevelImgIntermediate>
              </LevelContainer>
            </SubjectLink>
            <SubjectLink onClick={() => handleExpert()}>
              <LevelContainer>
                <LevelImgExpert>Expert</LevelImgExpert>
              </LevelContainer>
            </SubjectLink>
          </SubjectContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_CodingTest_M;
