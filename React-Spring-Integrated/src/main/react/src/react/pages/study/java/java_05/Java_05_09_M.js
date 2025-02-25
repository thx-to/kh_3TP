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

const Java_05_09_M = () => {
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
    navigate("/study/java/05/09");
    window.location.reload();
  };

  const Java_05_09_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
    long time = System.currentTimeMillis();
    long timeNano = System.nanoTime();

    System.out.println(time);
    System.out.println(timeNano);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_09_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[]args) throws InterruptedException {
       int[] data = new int[1000];
       int cnt = 0, i;
       // 배열내에서 찾고자 하는 임의의 수
       int randVal = (int)(Math.random() * 1000) + 1;
       for(i = 0; i < data.length; i++) {
           data[i] = i + 1;
       }
       long time1 = System.currentTimeMillis();
       // 순차 검색
       for(i = 0; i < data.length; i++) {
           cnt++; // 총 검색 횟수 구하기
           sleep(1);
           if(randVal == data[i]) {
               System.out.println("위치 : " + (i+1));
               break;
           }
       }
       long time2 = System.currentTimeMillis();
       System.out.println("총 검색 횟수 : " + cnt);
       System.out.println("검색에 소요된 시간은 " + (time2 - time1) + "밀리초 입니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_09_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(System.getProperty("os.name"));
System.out.println(System.getProperty("user.name"));
System.out.println(System.getProperty("os.home"));
          `}
        </code>
      </pre>
    );
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
            09. System 클래스
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle2>프로그램 종료(exit())</ClassContentsTitle2>
        <ClassContentsText>
          프로그램을 강제 종료 시킴
          <br />
          <ClassContentsCode>System.exit()</ClassContentsCode>
        </ClassContentsText>
        <ClassContentsTitle2>쓰레기 수집기 실행</ClassContentsTitle2>
        <ClassContentsText>
          <ClassContentsCode>System.gc()</ClassContentsCode>
        </ClassContentsText>
        <ClassContentsTitle2>현재 시간 읽기</ClassContentsTitle2>
        <ClassContentsText>
          - 주로 실행 시간을 측정하는 용도로 사용 됩니다.
          <br />- currentTimeMillis() : UTC 1970년 1월 1일 00:00:00.000을
          기준으로 현재 시간의 차이를 반환(1/1000초 단위)
          <br />- nanoTime() : 10억분의 1초를 의미 함(1/100,000,000)
          <Java_05_09_Code01 />
          <Java_05_09_Code02 />
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">시스템 프로퍼티 읽기</font>
        </ClassContentsTitle3>
        <Java_05_09_Code03 />
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
export default Java_05_09_M;
