import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  Container,
  SubjectLink,
  TopBoxLink,
  LevelContainer,
  LevelImgPractice,
  LevelImgBasic,
  LevelImgIntermediate,
  LevelImgExpert,
} from "../../../styles/codingtest/CodingTest_Main_M";
import ScrollToTopButton from "../../ScrollToTopButton";

const CodingTest_Main_M = () => {
  const navigate = useNavigate();

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
      <Wrap>
        <TopBoxWide>
          <TopBox>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>coding test</TopBoxText>
              </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
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
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default CodingTest_Main_M;
