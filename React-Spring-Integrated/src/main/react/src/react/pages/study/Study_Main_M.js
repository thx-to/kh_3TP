import { useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  Container,
  SubjectLink,
  TopBoxText,
  TopBoxArrow,
} from "../../styles/study/Study_Main_M";

import Java_Title_M from "./java/java_components/Java_Title_M";
import Python_Title_M from "./python/python_components/Python_Title_M";
import C_Title_M from "./c/c_components/C_Title_M";
import CPlus_Title_M from "./cplus/cplus_components/CPlus_Title_M";
import JavaScript_Title_M from "./javascript/javascript_components/JavaScript_Title_M";
import ScrollToTopButton from "../ScrollToTopButton";

const Study_Main_M = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

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
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText onClick={() => handleRefresh()}>study</TopBoxText>
          </TopBox>
        </TopBoxWide>
        <Container>
          <SubjectLink onClick={() => handleJavaCheck()}>
            <Java_Title_M />
          </SubjectLink>
          <SubjectLink onClick={() => handlePythonCheck()}>
            <Python_Title_M />
          </SubjectLink>
          <SubjectLink onClick={() => handleCCheck()}>
            <C_Title_M />
          </SubjectLink>
          <SubjectLink onClick={() => handleCPlusCheck()}>
            <CPlus_Title_M />
          </SubjectLink>
          <SubjectLink onClick={() => handleJavaScriptCheck()}>
            <JavaScript_Title_M />
          </SubjectLink>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Study_Main_M;
