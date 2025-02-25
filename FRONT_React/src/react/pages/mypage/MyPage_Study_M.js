import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  SubjectContainer,
  MobileEachTitle,
} from "../../styles/mypage/MyPage_M";

import { SubjectLink } from "../../styles/study/Study_Main";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";

import Java_Title_M from "../study/java/java_components/Java_Title_M";
import Python_Title_M from "../study/python/python_components/Python_Title_M";
import C_Title_M from "../study/c/c_components/C_Title_M";
import CPlus_Title_M from "../study/cplus/cplus_components/CPlus_Title_M";
import JavaScript_Title_M from "../study/javascript/javascript_components/JavaScript_Title_M";
import { useEffect } from "react";

const MyPage_Study_M = () => {
  const navigate = useNavigate();
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
    navigate("/mypage/study");
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
            <TopBoxLink onClick={() => handleMyPage()}>
              <TopBoxText>my page</TopBoxText>
            </TopBoxLink>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText>study</TopBoxText>
            </TopBoxLink>
          </TopBox>
        </TopBoxWide>
        <Container>
          <MobileEachTitle>study</MobileEachTitle>
          <SubjectContainer>
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
          </SubjectContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_Study_M;
