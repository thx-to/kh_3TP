import React, { useEffect, useRef } from "react";
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
} from "../../../styles/study/Language_Main";

import Python_ChapterList from "./python_components/Python_ChapterList";
import Python_Title from "./python_components/Python_Title";
import Python_ClassList from "./python_components/Python_ClassList";
import ScrollToTopButton from "../../ScrollToTopButton";
import Python_Main_M from "./Python_Main_M";

const Python_Main = () => {
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
  const handleRefresh = () => {
    navigate("/study/python");
  };

  // 챕터 스크롤링
  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
    section06: useRef(null),
  };

  return (
    <>
      {isMobile ? (
        <Python_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                Python
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Python_Title />
              <Python_ChapterList
                refs={sectionRefs}
                mainContentRef={mainContentRef}
              />
            </LeftContainer>
            <RightContainer>
              <Python_ClassList refs={sectionRefs} />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Python_Main;
