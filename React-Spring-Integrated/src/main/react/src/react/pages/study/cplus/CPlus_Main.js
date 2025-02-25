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

import CPlus_ChapterList from "./cplus_components/CPlus_ChapterList";
import CPlus_Title from "./cplus_components/CPlus_Title";
import CPlus_ClassList from "./cplus_components/CPlus_ClassList";
import ScrollToTopButton from "../../ScrollToTopButton";
import CPlus_Main_M from "./CPlus_Main_M";

const CPlus_Main = () => {
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
    navigate("/study/cplus");
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
    section10: useRef(null),
  };

  return (
    <>
      {isMobile ? (
        <CPlus_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                C++
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <CPlus_Title />
              <CPlus_ChapterList
                refs={sectionRefs}
                mainContentRef={mainContentRef}
              />
            </LeftContainer>
            <RightContainer>
              <CPlus_ClassList refs={sectionRefs} />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default CPlus_Main;
