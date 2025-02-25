import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

import {
  Wrap,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxWide,
  Container,
  LeftContainer,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitlePathLink,
  ClassHeaderTitleButton,
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle2,
  ClassContentsTitle3,
  ClassContentsTextTab,
  ClassContentsImage,
  ClassContentsCodeBox,
  ClassContentsCode,
  ClassTable,
  ClassTableTd,
  ClassTableTr,
  StickyClassBox,
  ClassLinkBox,
} from "../../../../styles/study/Language_00_00";
import { ArrowContainer } from "../../../../styles/study/Language_ArrowNavigation";

import Java_Title from "../java_components/Java_Title";
import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import Java_ClassList_Filtered from "../java_components/Java_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Java_01_02_M from "./Java_01_02_M";

const Java_01_02 = () => {
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
  const handleStudyJava = () => {
    navigate("/study/java");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/java/01/02");
    window.location.reload();
  };

  const Java_01_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
export JAVA_HOME=/Users/Coditor/Library/Java/JavaVirtualMachines/corretto-17.0.9/Contents/Home
export PATH=\${PATH}:$JAVA_HOME/bin
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_01_02_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                Java
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
              01. Java 시작
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              02. Java 프로젝트 생성 및 기본
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="01" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>
                    Java 프로젝트 생성 및 기본
                  </ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    자바 개발을 위해 자바와 자바 프로그래밍을 위한 통합 개발
                    환경(Integrated Development Environment)이 필요 합니다.
                    통합개발환경에는 이클립스, 인텔리제이, VS Code 등이 있으며,
                    인텔리제이를 주로 사용하도록 하겠습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>프로그램 설치</ClassContentsTitle2>
                  <hr />
                  <ClassContentsTitle3>JDK 설치</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassLinkBox to="https://oracle.com" target="_blank">
                      oracle 접속
                    </ClassLinkBox>
                    <br />
                    Java SE Development Kit 11.0.15
                    <br />
                    오라클 계정 생성 필요
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>인텔리제이 설치</ClassContentsTitle3>
                  <ClassContentsText>
                    주로 자바 개발시 이클립스와 더불어 많이 사용되고 있으며,
                    이클립스 보다 더 많은 장점을 가지고 있어 인텔리제이를 통합
                    개발 환경(IDE)로 사용하도록 하겠습니다.
                    <br />
                    상용 버전인 Uitimate 버전과 무료 버전이 Community 버전이
                    존재하며 Community 버전으로도 충분히 개발을 진행할 수
                    있으므로 Community 버전을 사용하도록 하겠습니다.
                    <br /><br />
                    <ClassLinkBox
                      to="https://www.jetbrains.com/ko-kr/idea/"
                      target="_blank"
                    >
                      인텔리제이 설치
                    </ClassLinkBox>
                    <br />
                    <ClassContentsTextTab>
                      - 환경 설정 → 에디터 → 일반 → Ctrl + 마우스 휠로 글꼴 크기
                      변경
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>환경 변수 설정</ClassContentsTitle2>
                  <hr />
                  <ClassContentsText>
                    인텔리제이를 이용해 자바를 컴파일하고 실행하는 경우는 필요
                    없을 수 있으나, 스프링부트를 사용하는 백앤드 개발 시
                    필요합니다.
                    <br />
                    시스템 환경변수는 모든 사용자 및 프로세스에 적용되는
                    전역적인 설정입니다. 이러한 변수는 컴퓨터의 운영체제 및
                    시스템 구성 요소와 관련된 정보를 저장하며, 모든 계정에서
                    공유됩니다.
                    <br />
                    사용자 환경변수는 특정 사용자 계정에 대한 설정을 지정합니다.
                    <br />
                    PATH의 경로는 JDK 설치 경로에 따라 달라집니다.
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>Mac OS</ClassContentsTitle3>
                  <ClassContentsText>
                    아래의 내용은 .zshrc 파일에 대한 설정 예시 이며, 자바 JDK
                    설치 경로와 안드로이드 설치 경로는 개인 PC의 설치 경로로
                    변경해야 합니다.
                  </ClassContentsText>
                  <Java_01_02_Code01 />
                  <ClassContentsCodeBox>
                    <ClassContentsCode>
                      export
                      JAVA_HOME=/Users/Coditor/Library/Java/JavaVirtualMachines/corretto-17.0.9/Contents/Home
                      <br />
                      export PATH=${`{PATH}`}:$JAVA_HOME/bin
                    </ClassContentsCode>
                  </ClassContentsCodeBox>
                  <ClassContentsTitle3>윈도우</ClassContentsTitle3>
                  <ClassContentsText>시스템 환경 변수 편집</ClassContentsText>

                  <ClassContentsCodeBox>
                    👉 설치 후 버전 변경이 안되는 경우 해당 경로를 찾아서 환경
                    변수를 설정해주어야 합니다.
                    <ClassContentsTextTab>
                      <br />
                      예) C:\Program Files\java\jdk-11
                      <br />
                      <font color="red">환경 변수 추가</font>
                      <br />
                      <b>JAVA_HOME</b>
                      <br />
                      C:\Program Files\java\jdk-11
                      <br />
                      <font color="red">환경변수 편집</font>
                      <br />
                      <b>Path</b>
                      <br />
                      %JAVA_HOME%\bin
                      <br />
                    </ClassContentsTextTab>
                  </ClassContentsCodeBox>
                  <ClassContentsTitle3>환경 변수 테스트</ClassContentsTitle3>
                  <ClassContentsText>
                    - 검색창에서 cmd d 입력
                    <br />
                    <br />
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/java/java_01_02_01.png"})`,
                      }}
                    />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    인텔리제이에서 JDK 버전 확인하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 파일 → Project Structure 이동
                    <br />
                    <br />
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/java/java_01_02_02.png"})`,
                      }}
                    />
                    <br />
                  </ClassContentsText>
                  <ClassContentsText>
                    👉 SDK 버전이 정상적으로 잡혀 있는지 확인 합니다.
                    <br />
                    <br />
                    <ClassContentsCodeBox>
                      👉 설치 후 버전 변경이 안되는 경우 해당 경로를 찾아서 환경
                      변수를 설정해주어야 합니다.
                    </ClassContentsCodeBox>{" "}
                  </ClassContentsText>
                </ClassContentsContainer>
              </EachClass>
              <ArrowContainer>
                <Java_ArrowNavigation direction="left" />
                <Java_ArrowNavigation direction="right" />
              </ArrowContainer>
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Java_01_02;
