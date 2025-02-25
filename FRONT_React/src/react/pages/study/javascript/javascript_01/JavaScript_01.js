import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
} from "../../../../styles/study/Language_00";

import JavaScript_Title from "../javascript_components/JavaScript_Title";
import JavaScript_ClassList_Filtered from "../javascript_components/JavaScript_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import JavaScript_01_M from "./JavaScript_01_M";

const JavaScript_01 = () => {
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
  const handleStudy = () => {
    navigate("/study");
  };

  // TopBox secondpath
  const handleStudyJavaScript = () => {
    navigate("/study/javascript");
  };

  // TopBox thirdpath
  const handleRefresh = () => {
    navigate("/study/javascript/01");
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <JavaScript_01_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJavaScript()}>
                JavaScript
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              01. 자바스크립트 기초
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <JavaScript_Title />
            </LeftContainer>
            <RightContainer>
              <JavaScript_ClassList_Filtered chapter="01" />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default JavaScript_01;
