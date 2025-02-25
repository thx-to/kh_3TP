import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  LeftContainer,
  RightContainer,
} from "../../../styles/study/Language_Main";

import Java_ChapterList from "./java_components/Java_ChapterList";
import Java_Title from "./java_components/Java_Title";
import Java_ClassList from "./java_components/Java_ClassList";
import Java_Main_M from "./Java_Main_M";
import ScrollToTopButton from "../../ScrollToTopButton";

const Java_Main = () => {
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
    navigate("/study/java");
  };

  // Chapter Scrolling
  const sectionRefs = {
    section01: useRef(null),
    section02: useRef(null),
    section03: useRef(null),
    section04: useRef(null),
    section05: useRef(null),
    section06: useRef(null),
    section07: useRef(null),
    section08: useRef(null),
    section09: useRef(null),
  };

  return (
    <>
      {isMobile ? (
        <Java_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                Java
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <Java_ChapterList
                refs={sectionRefs}
                mainContentRef={mainContentRef}
              />
            </LeftContainer>
            <RightContainer>
              <Java_ClassList refs={sectionRefs} />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Java_Main;
