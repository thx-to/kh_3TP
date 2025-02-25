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
import Java_01_03_M from "./Java_01_03_M";

const Java_01_03 = () => {
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
    navigate("/study/java/01/03");
    window.location.reload();
  };

  const Java_01_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package sample;
/*
	Author : 홍길동
	Date : 2023.08.14
	Purpose : 기본 샘플 프로그램
*/

public class SampleClass{ // 클래스 블록의 시작
	// 여기가 진입점 입니다.
	public static void main(String[] args) { // 메소드 블록의 시작
		System.out.println("자바 개발을 시작해 봅니다.");
	}
}
          `}
        </code>
      </pre>
    );
  };

  const Java_01_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
/* 클래스 블록 */
public class 클래스명 {

    /* 메소드 블록 */
    [public|private|protected] [static] (리턴자료형|void) 메소드명1(입력자료형 매개변수, ...) {
        명령문(statement);
        ...
    }

    ...
}
          `}
        </code>
      </pre>
    );
  };

  const Java_01_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.print(7);         // print() 메소드는 줄 바꿈을 하지 않음.
System.out.println(3);       // 정수 출력
System.out.println(3.14);    // 실수 출력
System.out.println("자바!"); // 문자열 출력
System.out.println("문자열끼리의 " + "연결도 가능합니다.");
System.out.println("숫자" + 3 + "과 문자열의 연결도 가능합니다.");
System.out.printf("%d", 3); // 서식 지정자 사용
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_01_03_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                01. Java 시작
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                03. Java 개발 환경 구축
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
                  <ClassHeaderTitle>Java 개발 환경 구축</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>
                    자바 학습을 위한 폴더 생성
                  </ClassContentsTitle2>
                  <hr />
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - D 드라이브 하위에 Dev 폴더 생성
                      <br />
                      - Dev 폴더 하위에 work_java 폴더 생성
                      <br />
                      - 프로젝트 이름을 Java_project로 지정
                      <br />
                      - java_project / src 에서 마우스 오른쪽 클릭 후 New →
                      Package 선택
                      <br />
                      <br />
                      <ClassContentsImage
                        style={{
                          backgroundImage: `url(${"/images/study/java/java_01_03_01.png"})`,
                        }}
                      />
                      <br />
                      <br />
                      - Package이름을 샘플프로그램 으로 지정
                      <br />
                      - 샘플프로그램에서 마우스 오른쪽 클릭 후 New → Java Class
                      선택
                      <br />
                      - Class 이름을 SampleClass로 지정
                      <br />
                      <br />
                      <Java_01_03_Code01 />
                      <br />
                      <br />
                      ▶️ 클릭으로 실행 후 화면 아래의 창에서 실행 결과 확인
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>자바의 기본 구성</ClassContentsTitle2>
                  <hr />
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 자바는 클래스 중심 그리고 컴파일러 언어이므로 가장
                      간단한 코드일지라도 기본적인 구성을위해 많은 코딩이
                      필요합니다. 이부분은 파이썬 언어와 대비되는 부분 입니다.
                      <br />
                      <br />
                      <Java_01_03_Code02 />
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>코드 설명</ClassContentsTitle3>
                  <ClassContentsText>
                    클래스와 매소드의 시작과 끝은 중괄호로 감싸서 표현하며 각
                    내부의 범위는 들여쓰기로 구분 합니다.
                    <br />
                    컴파일언어에서의 코드 시작 위치는 main()에서 부터 시작
                    합니다.
                    <br />
                    패키지가 다르면 동일한 class 이름이 존재 할 수 있습니다.
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    public static void main(String[] args)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    우선 main 메소드는 자바 어플리케이션이 실행되면 가장 먼저
                    실행됩니다.
                    <br />
                    public은 접근 제한자이며 누구나 접근 가능하다는 의미 입니다.
                    <br />
                    static은 정적변수를 의미하며 객체로 생성이 불가능 하고
                    유일하다는 의미 입니다.
                    <br />
                    void는 메소드의 실행결과로 아무것도 되돌려 주지 않는 다는
                    의미 입니다.
                    <br />
                    String[]은 문자열이 배열로 이루어져 있다는 의미로 여러개의
                    문자열을 입력 받을 수 있다는 의미 입니다.
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>주석</ClassContentsTitle3>
                  <ClassContentsText>
                    - 한줄 주석 : //
                    <br />
                    - 여러 줄 주석 : /* */
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>명령문과 세미콜론</ClassContentsTitle3>
                  <ClassContentsText>
                    자바 프로그램의 동작을 명시하고, 이러한 동작을 컴퓨터에게
                    알려주는데 사용되며 반드시 (;)세미콜론으로 끝나야 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    자바 표준 출력 클래스
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 자바의 표준 출력 클래스는 print(), println(), printf()
                      세가지의 메소드가 있습니다.
                      <br />
                      - print(), println() 메소드 오버로딩으로 구현되어
                      있습니다.
                      <br />
                      <br />
                      <Java_01_03_Code03 />
                      <br />
                      - %d : 정수형 출력
                      <br />
                      - %s : 문자열 출력
                      <br />
                      - %c : 문자 출력
                      <br />
                      - %f : 실수형 출력
                      <br />
                      - %b : boolean 출력
                      <br />
                    </ClassContentsTextTab>
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

export default Java_01_03;
