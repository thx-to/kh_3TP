import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
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

import CPlus_ArrowNavigation from "../cplus_components/CPlus_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const CPlus_01_01_M = () => {
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
  const handleStudyCPlus = () => {
    navigate("/study/cplus");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/cplus/01/01");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyCPlus()}>C++</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyCPlus()}>
            01. C++ 기본
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>01. C++?</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>C++?</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsText>
          <i>
            C++은 C 언어를 기반으로 하는 객체 지향 프로그래밍 언어입니다. C++은
            C 언어와 마찬가지로 시스템 프로그래밍이나 임베디드 시스템에서 많이
            사용되며, 게임 개발, 알고리즘 문제 풀이, 머신러닝 등 다양한
            분야에서도 사용됩니다.
          </i>
        </ClassContentsText>
        <hr />
        <ClassContentsTitle1>배경</ClassContentsTitle1>
        <ClassContentsText>
          · 절차 지향 언어인 C언어에 객체 지향 언어의 특성을 추가하여 만들어짐
          <br />
          · 절차 지향 언어의 특성과 객체 지향 언어의 특성을 모두 가지고 있음
          <br />
          · 모듈화 및 재사용 특성 등으로 인해 대형 프로젝트에 유리
          <br />
          · C언어와 마찬가지로 컴파일 언어이며 C언어 특성을 그대로 가지고 있음
          <br />· C++언어의 주요 특성은 C와 동일한{" "}
          <font color="#2c79c1">
            <b>절차지향 언어</b>
          </font>
          의 특성, 그리고 C++ 고유의{" "}
          <font color="#2c79c1">
            <b>객체지향 언어</b>
          </font>
          의 특성, 그리고 알고리즘 구현에 특화되어 있는{" "}
          <font color="#2c79c1">
            <b>일반화 프로그램</b>
          </font>
          의 특성을 모두 가지고 있음. (학습할 내용이 많음)
          <br />
        </ClassContentsText>
        <hr />
        <ClassContentsTitle1>객체지향언어의 4가지 특징</ClassContentsTitle1>
        <ClassContentsText>
          ·{" "}
          <font color="#fe9226">
            <b>캡슐화 (Encapsulation)</b>
          </font>{" "}
          : 객체가 구현된 방식의 세부 정보(내부의 멤버)를 숨기는 기능
          <br />
          <ClassContentsTextTab>
            - 객체 내부의 멤버를 숨기는 방법은 접근제한자를 통해서 이루어 진다.
            <br />
            - 접근 제한자는 (private, ptotected, public으로 구성되며 클래스에서
            자세하게 다루도록 한다.)
            <br />
            - 멤버에 대한 접근은 일반적으로 클래스내에 선언된 함수를 통해서만
            이루어짐.
            <br />
          </ClassContentsTextTab>
          ·{" "}
          <font color="#fe9226">
            <b>상속 (Inheritance)</b>
          </font>{" "}
          : 부모의 자산을 물려 받는 것<br />
          <ClassContentsTextTab>
            - 객체 지향의 중요한 특성중의 하나로 GUI 기능을 구현하거나 게임
            구현등에 많이 사용 됨.
            <br />
            - C++에서는 다중 상속을 지원하고 있으며, 이로 인해 여러가지 문제점이
            발생할 수 있음
            <br />
          </ClassContentsTextTab>
          ·{" "}
          <font color="#fe9226">
            <b>다형성 (Polymorphism)</b>
          </font>
          <br />
          <ClassContentsTextTab>
            - 오버로딩 : 같은 이름의 함수를 매개변수의 타입이나 개수를 다르게
            하여 재 정의
            <br />
            - 오버라이딩 : 부모 클래스의 메소드와 같은 이름, 동일한 매개변수를
            지닌 매소드를 자식 클래스에서 재 정의
            <br />
          </ClassContentsTextTab>
          ·{" "}
          <font color="#fe9226">
            <b>추상화 (Abstraction)</b>
          </font>{" "}
          : 실체가 없는 클래스로 부터 상속을 받는 것<br />
          <ClassContentsTextTab>
            - virtual 키워드를 통해 이루어지면 상속과 항상 함께하는 개념임
          </ClassContentsTextTab>
        </ClassContentsText>
        <hr />
        <ClassContentsTitle1>
          객체지향 프로그래밍을 사용하는 이유
        </ClassContentsTitle1>
        <ClassContentsTitle2>[장점]</ClassContentsTitle2>
        <ClassContentsText>
          · 코드의 재사용성
          <br />
          · 유지보수 및 업그레이드가 쉽다.
          <br />
          · 대형프로젝트에 효과적
          <br />
          · 직관적인 코드 분석 가능
          <br />
        </ClassContentsText>
        <ClassContentsTitle2>[단점]</ClassContentsTitle2>
        <ClassContentsText>
          · 처리 속도가 느리다. (C언어에 비해서 느리다는 의미이지 다른 언어
          보다는 엄청 빠름)
          <br />
          · 객체가 많아 질수록 용량이 커진다. (상속 관계가 복잡해지면 계속 커짐)
          <br />
          · 설계 시 시간과 노력이 많이 든다. (클래스 설계)
          <br />
        </ClassContentsText>
        {/* </ClassContentsContainer>
          </EachClass> */}
        <ArrowContainer>
          <CPlus_ArrowNavigation direction="left" />
          <CPlus_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default CPlus_01_01_M;
