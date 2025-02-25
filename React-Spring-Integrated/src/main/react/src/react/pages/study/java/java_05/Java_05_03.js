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
import Java_05_03_M from "./Java_05_03_M";

const Java_05_03 = () => {
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
    navigate("/study/java/05/03");
    window.location.reload();
  };

  const Java_05_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
StringBuffer sb = new StringBuffer();  // StringBuffer 객체 sb 생성
sb.append("hello");
sb.append(" ");
sb.append("jump to java");
System.out.println(sb);
          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String result = "";
result += "hello";
result += " ";
result += "jump to java";
System.out.println(result);
          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
StringBuilder sb = new StringBuilder();
sb.append("hello");
sb.append(" ");
sb.append("jump to java");
String result = sb.toString();
System.out.println(result);

          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
StringBuffer sb = new StringBuffer();
sb.append("jump to java");
sb.insert(0, "hello ");
System.out.println(sb.toString()); // String 클래스로 반환
          `}
        </code>
      </pre>
    );
  };

  const Java_05_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
StringBuffer sb = new StringBuffer();
sb.append("Hello jump to java");
System.out.println(sb.substring(0, 4));
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_05_03_M />
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
                03. StringBuffer, StringBuilder
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
                  <ClassHeaderTitle>
                    StringBuffer, StringBuilder
                  </ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    문자열을 추가하거나 변경 할 때 사용되는 자료형 입니다.
                    <br />
                    아래의 내용을 참고로 필요에 따라 String 클래스 또는
                    StringBuffer, StringBuilder를 사용할 수 있습니다.
                    <Java_05_03_Code01 />
                    <br />
                    StringBuffer 자료형은 append 메소드를 사용하여 계속해서
                    문자열을 추가해 나갈 수 있다. 그리고 위 예제와 같이 
                    <ClassContentsCode>toString()</ClassContentsCode>메소드를
                    이용하면 String 자료형으로 변경할 수 있다.
                    <br />
                    위의 예제를 String 자료형만으로도 표현 가능 합니다.
                    <Java_05_03_Code02 />
                    <br />두 개 예제의 결과는 동일하지만 내부적으로 객체가
                    생성되고 메모리가 사용되는 과정은 다릅니다.
                    <br />
                    첫번째 예제의 경우 StringBuffer 객체는 한번만 생성된다.
                    두번째 예제는 String 자료형에 
                    <ClassContentsCode>+</ClassContentsCode> 연산이 있을 때마다
                    새로운 String 객체가 생성된다(문자열 간 
                    <ClassContentsCode>+</ClassContentsCode> 연산이 있는 경우
                    자바는 자동으로 새로운 String 객체를 만들어 낸다). 두번째
                    예제에서는 총 4개의 String 자료형 객체가 만들어지게 됩니다.
                    <br />
                    String 자료형은 한번 값이 생성되면 그 값을 변경할 수가
                    없습니다. 이렇게 값을 변경할 수 없는 것을 immutable 하다고
                    한다. trim, toUpperCase 등의 메소드를 보면 문자열이 변경되는
                    것 처럼 생각 될 수도 있지만 해당 메소드 수행 시 또 다른
                    String 객체를 생성하여 리턴할 뿐이다. 하지만 StringBuffer는
                    이와 반대로 값을 변경할 수 있다(mutable 하다). 즉 한번
                    생성된 값을 언제든지 수정할 수 있습니다.
                    <br />
                    그렇다면 무조건 StringBuffer를 사용하는 것이 좋을까요?
                    <br />
                    그건 상황에 따라 다릅니다. StringBuffer 자료형은 String
                    자료형보다 무거운 편에 속합니다. 
                    <br />
                    <ClassContentsCode>new StringBuffer()</ClassContentsCode>로
                    객체를 생성하는 것은 일반 String을 사용하는 것보다 메모리
                    사용량도 많고 속도도 느리다. 따라서 문자열 추가나 변경등의
                    작업이 많을 경우에는 StringBuffer를, 문자열 변경 작업이 거의
                    없는 경우에는 그냥 String을 사용하는 것이 유리 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>StringBuilder</ClassContentsTitle2>
                  <ClassContentsText>
                    StringBuffer와 비슷한 자료형으로 StringBuilder가 있다.
                    <b>StringBuilder의 사용법은 StringBuffer의 사용법과 동일</b>
                    합니다.
                    <Java_05_03_Code03 />
                    <br />
                    <b>
                      StringBuffer는 멀티 스레드 환경에서 안전하다는 장점이
                      있고, StringBuilder는 StringBuffer보다 성능이 우수한 장점
                    </b>
                    이 있다. 따라서 동기화를 고려할 필요가 없는 상황에서는
                    StringBuffer 보다는 StringBuilder를 사용하는 것이 유리
                    합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>append()</ClassContentsTitle3>
                  <ClassContentsText>
                    문자열 추가에 사용 됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>delete()</ClassContentsTitle3>
                  <ClassContentsText>
                    전달된 인덱스에 해당하는 문자열을 제거 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>insert</ClassContentsTitle3>
                  <ClassContentsText>
                    insert 메소드는 특정 위치에 원하는 문자열을 삽입할 수
                    있습니다.
                    <Java_05_03_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle3>substring</ClassContentsTitle3>
                  <ClassContentsText>
                    substring 메소드는 String 자료형의 substring 메소드와
                    동일하게 사용 됩니다.
                    <Java_05_03_Code05 />
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
export default Java_05_03;
