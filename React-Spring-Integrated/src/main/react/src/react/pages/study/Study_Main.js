import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  Container,
  SubjectLink,
} from "../../styles/study/Study_Main";

import Java_Title from "./java/java_components/Java_Title";
import Python_Title from "./python/python_components/Python_Title";
import C_Title from "./c/c_components/C_Title";
import CPlus_Title from "./cplus/cplus_components/CPlus_Title";
import JavaScript_Title from "./javascript/javascript_components/JavaScript_Title";
import Study_Main_M from "./Study_Main_M";
import ScrollToTopButton from "../ScrollToTopButton";

const Study_Main = () => {
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
    navigate("/study");
  };

  // Java onClick
  const handleJavaCheck = () => {
    navigate("/study/java");
  };

  // Python onClick
  const handlePythonCheck = () => {
    navigate("/study/python");
  };

  // C onClick
  const handleCCheck = () => {
    navigate("/study/c");
  };

  // C++ onClick
  const handleCPlusCheck = () => {
    navigate("/study/cplus");
  };

  // JavaScript onClick
  const handleJavaScriptCheck = () => {
    navigate("/study/javascript");
  };

  return (
    <>
      {isMobile ? (
        <Study_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleRefresh()}>study</TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <SubjectLink onClick={() => handleJavaCheck()}>
              <Java_Title />
            </SubjectLink>
            <SubjectLink onClick={() => handlePythonCheck()}>
              <Python_Title />
            </SubjectLink>
            <SubjectLink onClick={() => handleCCheck()}>
              <C_Title />
            </SubjectLink>
            <SubjectLink onClick={() => handleCPlusCheck()}>
              <CPlus_Title />
            </SubjectLink>
            <SubjectLink onClick={() => handleJavaScriptCheck()}>
              <JavaScript_Title />
            </SubjectLink>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Study_Main;
