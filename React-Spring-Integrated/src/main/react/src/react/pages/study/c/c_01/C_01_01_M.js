import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

import {
  Wrap,
  TopBoxWide,
  TopBoxWide2,
  TopBox,
  TopBox2,
  TopBoxText,
  TopBoxText2,
  TopBoxArrow,
  TopBoxArrow2,
  Container,
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
  ClassTableBox,
  ClassTable,
  ClassTableTd,
  ClassTableTr,
  ClassLinkBox,
} from "../../../../styles/study/Language_00_00_M";
import { ArrowContainer } from "../../../../styles/study/Language_ArrowNavigation";

import C_ArrowNavigation from "../c_components/C_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const C_01_01_M = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();

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
  const handleStudyC = () => {
    navigate("/study/c");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/c/01/01");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyC()}>C</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyC()}>01. C 기본</TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            01. C언어의 특징
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>C언어의 특징</ClassHeaderTitle>
          </ClassHeader>
          <ClassContentsContainer> */}
        <ClassContentsTitle2>C언어란?</ClassContentsTitle2>
        <ClassContentsText>
          <b>C언어</b>는 1972년 벨 연구소의 <b>데니스 리치(Dennis Ritchie)</b>에
          의해 개발된 범용 프로그래밍 언어입니다. 주로 <b>시스템 프로그래밍</b>
          과 <b>운영 체제 개발</b>을 목적으로 만들어졌으며, UNIX 운영 체제를
          개발하는 데 중요한 역할을 했습니다.
        </ClassContentsText>
        <hr />
        <ClassContentsTitle3>C언어의 특징</ClassContentsTitle3>
        <ClassContentsText>
          · <b>절차지향 언어</b> : 함수 단위로 구성되어 순차적으로 명령 실행
          <br />· <b>저수준 접근 가능</b> : 포인터와 메모리 제어를 통해
          하드웨어와 밀접하게 작업 가능
          <br />· <b>포인터 지원</b> : 효율적인 메모리 관리와 시스템
          프로그래밍에 유리
          <br />· <b>이식성</b> : 다양한 플랫폼에서 컴파일 후 실행 가능
          <br />· <b>라이브러리 확장</b> : 표준 및 외부 라이브러리를 통해 기능
          확장 가능
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>C언어의 장점</ClassContentsTitle3>
        <ClassContentsText>
          · <b>빠른 실행 속도</b> : 컴파일된 코드로 실행되어 속도가 매우 빠름
          <br />· <b>유연성과 확장성</b> : 시스템 프로그래밍, 게임, 임베디드 등
          다양한 분야에서 활용
          <br />· <b>직접 메모리 제어 가능</b> : 효율적인 메모리 최적화 가능
          <br />· <b>높은 이식성</b> : 플랫폼 종속성이 낮아 코드 재사용성이 좋음
          <br />· <b>시스템 프로그래밍 적합</b> : 운영체제 및 드라이버 개발에
          강점
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>C언어의 단점</ClassContentsTitle3>
        <ClassContentsText>
          · <b>메모리 관리 복잡성</b> : 포인터와 메모리 할당/해제로 인해 오류
          발생 위험
          <br />· <b>객체지향 지원 부족</b> : 코드 재사용성과 유지보수에
          비효율적
          <br />· <b>오류 처리 어려움</b> : 자동 예외 처리 시스템 부재로
          수동으로 처리해야 함<br />· <b>표준 라이브러리 한계</b> : 기본 제공
          기능이 적고, 직접 구현 필요
          <br />· <b>학습 난이도 높음</b> : 포인터와 메모리 제어 개념 이해가
          어려움
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>활용 분야</ClassContentsTitle3>
        <ClassContentsText>
          · 운영체제 개발 (UNIX, Linux)
          <br />
          · 시스템 소프트웨어 (드라이버, 컴파일러)
          <br />
          · 임베디드 시스템
          <br />
          · 고성능 애플리케이션
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>요약</ClassContentsTitle3>
        <ClassContentsText>
          · <b>장점</b> : 빠르고 유연하며 하드웨어에 가까운 작업이 가능
          <br />· <b>단점</b> : 메모리 관리 및 오류 처리의 복잡성으로 인해
          초보자에게 어려움
          <br />
        </ClassContentsText>
        <hr />
        <ClassContentsTitle3>컴파일 절차</ClassContentsTitle3>
        <ClassContentsText>
          C언어의 프로그램은 다음 단계를 거쳐 실행 파일로 변환됩니다 :
          <br />
          <br />
          1.{" "}
          <b>
            소스 코드 작성 (<font color="red">.c</font>)
          </b>
          <ClassContentsTextTab>
            - C언어로 작성된 코드 파일입니다.
          </ClassContentsTextTab>
          <br />
          2. <b>전처리 (Preprocessing)</b>
          <ClassContentsTextTab>
            - 전처리기를 통해 <font color="red">#include</font>,{" "}
            <font color="red">#define</font> 등 전처리 지시문 처리
            <br />- 결과: 확장된 소스 코드 (<font color="red">.i</font>)
            <br />
          </ClassContentsTextTab>
          <br />
          3. <b>컴파일 (Compilation)</b>
          <ClassContentsTextTab>
            - 확장된 소스 코드를 어셈블리 코드 (<font color="red">.s</font>
            )로 변환
            <br />
            - 문법 검사와 최적화 수행
            <br />
          </ClassContentsTextTab>
          <br />
          4. <b>어셈블 (Assembly)</b>
          <ClassContentsTextTab>
            - 어셈블리 코드를 기계어로 변환하여 목적 파일 (
            <font color="red">.o</font>) 생성
            <br />
          </ClassContentsTextTab>
          <br />
          5. <b>링킹 (Linking)</b>
          <ClassContentsTextTab>
            - 목적 파일과 라이브러리들을 결합해 실행 파일 (
            <font color="red">.exe</font> 또는 OS에 맞는 포맷) 생성
            <br />
            - 외부 함수나 라이브러리를 결합
            <br />
          </ClassContentsTextTab>
        </ClassContentsText>
        {/* </ClassContentsContainer>
        </EachClass> */}
        <ArrowContainer>
          <C_ArrowNavigation direction="left" />
          <C_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default C_01_01_M;
