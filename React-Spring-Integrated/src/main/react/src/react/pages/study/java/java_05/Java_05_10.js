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
import Java_05_10_M from "./Java_05_10_M";

const Java_05_10 = () => {
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
    navigate("/study/java/05/10");
    window.location.reload();
  };

  const Java_05_10_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("이름을 /기준으로 연속 입력 하세요 : ");
    String names = sc.nextLine();
    StringTokenizer st = new StringTokenizer(names, "/");
    String[] nameStr = new String[st.countTokens()];
    int idx = 0;
    while(st.hasMoreTokens()) {
        nameStr[idx++] = st.nextToken();
    }
    for(int i = 0; i < nameStr.length; i++) {
        System.out.print(nameStr[i] + " ");
    }
    System.out.println();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_10_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String str = "23:34:45";
String[] time = str.split(":");
for(int i = 0; i < time.length; i++) {
	System.out.println(time[i]);
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_05_10_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                05. Java API 클래스
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                10. StringTokenizer
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="05" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>StringTokenizer</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    문자열이 특정 구분자로 연결되어 있는 경우, 구분자를 기준으로
                    부분 문자열 위해서는 String의 split()메소드를 이용하거나,
                    <b>java.util 패키지</b>의{" "}
                    <b>StringTokenizer 클래스를 이용</b>
                    합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>countTokens()</ClassContentsTitle2>
                  <ClassContentsText>
                    꺼내지 않고 남아 있는 토큰의 수
                  </ClassContentsText>
                  <ClassContentsTitle2>hasMoreTokens()</ClassContentsTitle2>
                  <ClassContentsText>
                    남아 있는 토큰이 있는지 여부
                  </ClassContentsText>
                  <ClassContentsTitle2>nextToken()</ClassContentsTitle2>
                  <ClassContentsText>
                    토큰을 하나씩 꺼내 옴
                    <Java_05_10_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle2>클래스 split()</ClassContentsTitle2>
                  <ClassContentsText>
                    - split()은 정규표현식을 사용하고 StringTokenizer() 문자열을
                    사용
                    <br />- 정규표현식이란? 특정한 규칙을 자진 문자열의 집합을
                    표현하는데 사용하는 형식 입니다. (패턴 매칭)
                    <Java_05_10_Code02 />
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
export default Java_05_10;
