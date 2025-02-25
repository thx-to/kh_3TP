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
  TopBoxLink,
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

const Java_01_01_M = () => {
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
    navigate("/study/java/01/01");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleStudy()}>
            <TopBoxText>study</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleStudyJava()}>
            <TopBoxText>
              Java
            </TopBoxText>
          </TopBoxLink>
          </TopBox>
          </TopBoxWide>
          <TopBoxWide2>
          <TopBox2>
          <TopBoxLink onClick={() => handleStudyJava()}>
            <TopBoxText2>
            01. Java 시작
            </TopBoxText2>
          </TopBoxLink>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>
              01. Java 시작하기
            </TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
          {/* <ClassContentsContainer> */}
            <ClassContentsTitle1>프로그래밍이란?</ClassContentsTitle1>
            <ClassContentsText>
              프로그래밍은 문제를 해결하기 위해 컴퓨터 프로그램을 설계하고
              개발하는 전체 과정을 의미합니다.
            </ClassContentsText>
            <hr />
            <ClassContentsText>
              <ClassContentsTextTab>
                1. 문제 정의 : 해결하려는 문제를 명확하게 정의합니다.
                <br />
                2. 요구사항 분석 : 프로그램이 해결해야 할 요구사항을 분석합니다.
                <br />
                3. 알고리즘 설계 : 문제를 해결하기 위한 논리적인 단계를
                설계합니다.
                <br />
                4. 코딩 : 설계한 알고리즘을 특정 프로그래밍 언어로 구현합니다.
                <br />
                5. 디버깅 : 코드의 오류를 찾아 수정합니다.
                <br />
                6. 테스트 : 프로그램이 요구 사항을 제대로 충족하는지 확인합니다.
                <br />
                7. 유지보수 : 프로그램을 개선하고 업데이트합니다.
                <br />
              </ClassContentsTextTab>
            </ClassContentsText>
            <hr />
            <br />
            <ClassContentsTitle1>자바(Java)란?</ClassContentsTitle1>
            <ClassContentsText>
              자바는 C++와 다르게 처음부터 객체지향 언어로 개발된 프로그래밍
              언어입니다. 자바는 자바 가상 머신(JVM, Java Virtual Machine)을
              사용하여 어느 운영체제에서나 동일하게 실행될 수 있습니다.
            </ClassContentsText>
            <br />
            <ClassContentsTitle2>자바의 역사</ClassContentsTitle2>
            <hr />
            <ClassContentsText>
              <ClassContentsTextTab>
                - 자바 1.0 (1996년) : “Write Once, Run Anywhere” 원칙을 소개하며
                처음 출시되었습니다.
                <br />
                - 자바 2 (1998년) : Swing GUI 툴킷 추가 등으로 그래픽 사용자
                인터페이스 개발이 강화되었습니다.
                <br />
                - 자바 5 (2004년) : 제네릭스, 어노테이션, 열거형 등 현대적
                프로그래밍 기능이 도입되었습니다.
                <br />
                - 자바 8 (2014년) : 람다 표현식과 스트림 API 도입으로 함수형
                프로그래밍 요소가 강화되었습니다.
                <br />
                - 자바 11 (2018년) : LTS(Long-Term Support) 버전으로, 새로운
                HTTP 클라이언트, var 키워드 등이 추가되었습니다.
                <br />
                - 자바 17 (2021년) : 최신 LTS 버전으로, 패턴 매칭, 레코드,
                sealed 클래스 등이 추가되었습니다.
                <br />
              </ClassContentsTextTab>
            </ClassContentsText>
            <hr />
            <br />
            <ClassContentsTitle2>자바의 특징</ClassContentsTitle2>
            <ClassContentsTitle3>자바의 장점</ClassContentsTitle3>
            <ClassContentsText>
              <ClassContentsTextTab>
                1. 운영체제 독립성 : JVM을 통해 어느 운영체제에서나 동일하게
                실행할 수 있습니다.
                <br />
                2. 쉽고 배우기 쉬움 : C++보다 불필요한 기능이 제거되어 배우기
                쉽습니다.
                <br />
                3. 자동 메모리 관리 : 가비지 컬렉션을 통해 메모리를 자동으로
                관리합니다.
                <br />
                4. 풍부한 라이브러리 : 많은 오픈소스 라이브러리를 사용할 수
                있습니다.
                <br />
                5. 네트워크, 멀티스레드, 동적 로딩 지원 : 다양한 기능을 쉽게
                구현할 수 있습니다.
                <br />
              </ClassContentsTextTab>
            </ClassContentsText>
            <ClassContentsTitle3>자바의 단점</ClassContentsTitle3>
            <ClassContentsText>
              <ClassContentsTextTab>
                1. 실행 속도 : JVM을 통해 실행되므로 다른 언어보다 속도가 느릴
                수 있습니다.
                <br />
                2. 예외 처리 : 예외 처리를 개발자가 직접 지정해야 하므로
                번거로울 수 있습니다.
                <br />
                3. 코드 길이 : 다른 언어에 비해 코드가 길어질 수 있습니다.
                <br />
              </ClassContentsTextTab>
            </ClassContentsText>
            <ClassContentsTitle3>자바의 주요 특징</ClassContentsTitle3>
            <ClassContentsText>
              <ClassContentsTextTab>
                - 이식성 : 자바로 개발된 프로그램은 JRE(Java Runtime
                Environment)가 설치된 모든 운영체제에서 실행 가능합니다.
                <br />
                - 객체 지향 언어 : 객체를 먼저 만들고, 이를 조립해 전체
                프로그램을 완성하는 기법을 사용합니다.
                <br />
                - 함수형 프로그래밍 지원 : 자바는 함수형 프로그래밍을 위해
                람다식을 지원하여 코드가 간결해지고 병렬 처리가 용이해집니다.
                <br />
                - 메모리 자동 관리 : 개발자가 직접 메모리를 관리하지 않으며,
                자바가 자동으로 할당 및 해제합니다.
                <br />
                - 멀티 스레드 지원 : 자바는 멀티 스레드를 쉽게 구현할 수 있도록
                관련 API를 제공합니다.
                <br />
                - 동적 로딩 : 객체가 필요한 시점에 클래스를 동적으로 로딩하여
                객체를 생성합니다.
                <br />
              </ClassContentsTextTab>
            </ClassContentsText>
            <br />
            <ClassContentsTitle1>자바 프로그램 개발 과정</ClassContentsTitle1>
            <ClassContentsImage
              style={{
                backgroundImage: `url(${"/images/study/java/java_01_01_01.png"})`,
              }}
            />
            <br />
            <ClassContentsTitle2>컴파일</ClassContentsTitle2>
            <ClassContentsText>
              컴파일은 사람이 이해하는 언어로 작성된 소스 코드를 컴퓨터가 이해할
              수 있는 기계어로 번역하는 과정입니다. 자바 컴파일러는 자바 소스
              코드를 JVM이 이해할 수 있는 바이트 코드로 변환합니다.
            </ClassContentsText>
            <ClassContentsImage
              style={{
                backgroundImage: `url(${"/images/study/java/java_01_01_02.png"})`,
              }}
            />
            <br />
            <ClassContentsTitle2>JDK, JRE, JVM</ClassContentsTitle2>
            <ClassContentsText>
              <ClassContentsTextTab>
                - JDK(Java Development Kit) : JRE와 개발 도구(컴파일러, 디버거
                등)를 포함합니다.
                <br />
                - JRE(Java Runtime Environment) : JVM과 자바 프로그램 실행에
                필요한 라이브러리를 포함합니다.
                <br />
                - JVM(Java Virtual Machine) : 운영체제별로 제공되며, 바이트
                코드를 읽고 실행합니다.
                <br />
              </ClassContentsTextTab>
            </ClassContentsText>
            <ClassContentsImage
              style={{
                backgroundImage: `url(${"/images/study/java/java_01_01_03.png"})`,
              }}
            />
            <br />
            <ClassContentsTitle2>빌드</ClassContentsTitle2>
            <ClassContentsText>
              빌드는 소프트웨어 개발 과정에서 코드를 컴파일하고 테스트하며 배포
              가능한 형태로 만드는 단계입니다. 대표적인 자바 빌드 툴로는 Maven과
              Gradle이 있습니다.
            </ClassContentsText>
            <ClassContentsTitle3>빌드 툴</ClassContentsTitle3>
            <ClassContentsText>
              <ClassContentsTextTab>
                - Maven : XML 기반의 프로젝트 관리 및 빌드 도구로, 의존성 관리와
                빌드 작업을 자동화합니다.
                <br />
                - Gradle : Groovy 스크립트를 사용하는 빌드 도구로, 유연한 빌드
                작업 정의가 가능하며 멀티 프로젝트 관리에 용이합니다.
                <br />
              </ClassContentsTextTab>
              <br />
              빌드 툴은 프로젝트의 의존성 관리, 빌드 설정, 테스트 실행, 배포
              등을 자동화하여 일관된 방식으로 작업할 수 있도록 도와줍니다.
            </ClassContentsText>
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
export default Java_01_01_M;
