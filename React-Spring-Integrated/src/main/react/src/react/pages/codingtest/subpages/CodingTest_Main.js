import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  Container,
  SubjectLink,
  LevelContainer,
  LevelImgPractice,
  LevelImgBasic,
  LevelImgIntermediate,
  LevelImgExpert,
  LevelContainerPage,
} from "../../../styles/codingtest/CodingTest_Main";
import ScrollToTopButton from "../../ScrollToTopButton";
import CodingTest_Main_M from "./CodingTest_Main_M";

const CodingTest_Main = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // TopBox firstpath
  const handleRefresh = () => {
    navigate("/codingtest");
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
        <CodingTest_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleRefresh()}>
                coding test
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
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
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default CodingTest_Main;
