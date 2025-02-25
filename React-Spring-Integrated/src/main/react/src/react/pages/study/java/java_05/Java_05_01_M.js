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

import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Java_05_01_M = () => {
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
  const handleStudyJava = () => {
    navigate("/study/java");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/java/05/01");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyJava()}>
            05. Java API 클래스
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            01. Java API
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle1>자바 API ?</ClassContentsTitle1>
        <ClassContentsText>
          자바에서 제공하는 다양한 API는 라이브러리라고도 부릅니다.
          <br />
          JDK에서 제공하는 많은 클래스를 활용하면 프로그램을 더욱 효율적으로
          구현 할 수 있습니다.
          <br />
          현재 강의에서 사용하는 버전은 JDK 11 입니다. 서점이나 강의에서
          사용되는 대부분의 버전이 JDK 8이며 이후의 문법적으로 변화는 크지
          않습니다. 우리가 JDK 11 사용하는 이유는 현재 현업에서 백앤드(Spring)
          개발 시 가장 많이 사용되는 버전이기 때문 입니다.
          <br />
          <ClassLinkBox
            to="https://docs.oracle.com/en/java/javase/index.html"
            target="_blank"
          >
            JDK 다운로드
          </ClassLinkBox>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>java.lang 패키지</ClassContentsTitle2>
        <ClassContentsText>
          java.lang과 java.util 패키지가 가장 많이 사용되고 있습니다.
          <br />
          java.lang 패키지는{" "}
          <b>자바에서 가장 기본적인 동작을 수행하는 클래스들의 집합</b>
          입니다.
          <br />
          따라서 자바에서는 java.lang 패키지의 클래스들은 import 문을 사용하지
          않아도 클래스 이름만으로 바로 사용할 수 있도록 하고 있습니다. (컴파일
          시 <ClassContentsCode>import java.lang.*</ClassContentsCode> 이 자동
          추가 됩니다.)
        </ClassContentsText>
        <ClassTableBox>
          <ClassTable>
            <ClassTableTr>
              <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <b>클래스</b>
              </ClassTableTd>
              <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <b>용도</b>
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Object</ClassTableTd>
              <ClassTableTd>자바의 최상위 클래스</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>System</ClassTableTd>
              <ClassTableTd>
                표준 입출력 장치로 부터 데이터를 입력 받거나 출력 할 때 사용,
                자바의 JVM을 종료 시킬 때 사용, 쓰레기 수집기를 실행 요청 할 때
                사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Class</ClassTableTd>
              <ClassTableTd>클래스를 메모리로 로딩 할 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>String</ClassTableTd>
              <ClassTableTd>
                문자열을 저장하고 여러가지 정보를 얻을 때 사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>StringBuffer, StringBuilder</ClassTableTd>
              <ClassTableTd>
                문자열을 저장하고 내부 문자열을 조작 할 때 사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Math</ClassTableTd>
              <ClassTableTd>수학 함수를 이용할 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>
                Byte, Short, Character, Integer, Float, Double, Boolean, Long
              </ClassTableTd>
              <ClassTableTd>
                기본 타입의 데이터를 갖는 객체를 만들 때 사용, 문자열을
                기본타입으로 변환 할 때 사용, 입력값 검사에 사용
              </ClassTableTd>
            </ClassTableTr>
          </ClassTable>
        </ClassTableBox>
        <br />
        <ClassContentsTitle2>java.util 패키지</ClassContentsTitle2>
        <ClassContentsText>컬렉션 클래스들이 대부분이다.</ClassContentsText>
        <ClassTableBox>
          <ClassTable>
            <ClassTableTr>
              <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <b>클래스</b>
              </ClassTableTd>
              <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <b>용도</b>
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Arrays</ClassTableTd>
              <ClassTableTd>
                배열을 조작비교, 복사, 정렬, 찾기 등에 사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Calendar</ClassTableTd>
              <ClassTableTd>
                운영체제의 날짜와 시간을 가져올 때 사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Date</ClassTableTd>
              <ClassTableTd>날짜와 시간 정보를 저장하는 클래스</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Objects</ClassTableTd>
              <ClassTableTd>
                객체 비교, null 여부 등을 조사 할 때 사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>StringTokenizer</ClassTableTd>
              <ClassTableTd>
                특정 문자로 구분된 문자열을 뽑아 낼 때 사용
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>Random</ClassTableTd>
              <ClassTableTd>난수를 얻을 때 사용</ClassTableTd>
            </ClassTableTr>
          </ClassTable>
        </ClassTableBox>
        {/* </ClassContentsContainer> */}
        {/* </EachClass> */}
        <ArrowContainer>
          <Java_ArrowNavigation direction="left" />
          <Java_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default Java_05_01_M;
