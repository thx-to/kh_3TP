import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
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
  ClassTableBox,
} from "../../../../styles/study/Language_00_00";
import { ArrowContainer } from "../../../../styles/study/Language_ArrowNavigation";

import Java_Title from "../java_components/Java_Title";
import Java_ClassList_Filtered from "../java_components/Java_ClassList_Filtered";
import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Java_09_01_M from "./Java_09_01_M";

const Java_09_01 = () => {
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
    navigate("/study/java/09/01");
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <Java_09_01_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                09. 네트워킹
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                01. 웹의 개요
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="09" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>웹의 개요</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>웹이란?</ClassContentsTitle1>
                  <ClassContentsText>
                    World Wide Web을 줄여서 WWW 또는 웹이라도 합니다.
                    <br />
                    웹은 인터넷에 운영되는 서비스 중에 하나이며, 웹 자체가
                    인터넷을 의미하는 것은 아닙니다.
                    <br />
                    하지만, 일반적으로 웹과 인터넷은 동일하다고 생각 합니다.
                    <br />
                    웹이 인터넷의 대표적인 서비스라고 할 수 있지만 기술적
                    관점에서는 잘못된 것이므로 개발자라면 좀 더 정확한 내용을
                    알고 있어야 합니다.
                    <br />
                    웹을 처음 개발한 사람은 1989년 스위치에 있는
                    유럽입자연구소의 팀 버너스 리 입니다.
                    <br />
                    처음 개발한 목적은 연구자들이 흩어져 있는 정보를 손쉽게
                    정리하고 이를 공유하기 위해서 입니다.
                    <br />
                    <b>
                      HTML(Hyper Text Markup Laguage)이라는 간단한 마크업 언어를
                      통해 정보의 연결이 가능하도록 하이퍼텍스트 포함한 컨텐츠를
                      제공하며, HTTP라는 프로토콜을 사용해 TCP/IP 네트워크상에서
                      서비스를 운영하게 된 것이 웹의 시작
                    </b>
                    입니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>웹의 특징</ClassContentsTitle3>
                  <ClassContentsText>
                    - 인터넷은 컴퓨터 네트워크망을 의미하고, 웹은 인터넷 서비스
                    중 하나를 의미 합니다.
                    <br />- 웹은 인터넷상의 정보를 하이퍼텍스트 방식과
                    멀티미디어 환경에서 검색 할 수 있게 해주는 정보 검색
                    시스템을 의미 합니다.
                    <br />- 웹은 HTTP 프로토콜을 사용하여 HTML로 작성된 문서를
                    연결하여 다양한 컨텐츠를 제공 합니다.
                    <br />- 웹 서비스는 많은 사람들이 정보를 쉽게 공유하고
                    접근할 수 있도록 하는 것을 목적으로 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>웹의 동작 구조</ClassContentsTitle1>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_09_01_01.png"})`,
                      }}
                    />
                    1. 웹 브라우저에서 https://kakao.co.kr/index.html을 입력
                    합니다.
                    <br />
                    2. DNS 서버는 www.kakao.co.kr이라는 도메인을 가진 IP 주소를
                    웹 브라우저에 제공 합니다.
                    <br />
                    3. 웹 브라우저는 IP 주소에 해당하는 서버 80번 포트로 접속을
                    시도 합니다. www.kakao.co.kr의 웹 서버는 80번 포트로 접속을
                    기다리다 접속 요청이 들어오면 받습니다.
                    <br />
                    4. 웹 서버는 요청 내용을 분석하고 요청된 index.html 파일을
                    읽습니다.
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
export default Java_09_01;
