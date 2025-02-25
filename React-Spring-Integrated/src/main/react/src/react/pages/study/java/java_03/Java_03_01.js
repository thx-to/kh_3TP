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
import Java_03_01_M from "./Java_03_01_M";

const Java_03_01 = () => {
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
    navigate("/study/java/03/01");
    window.location.reload();
  };

  const Java_03_01_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int age = 25;
double price = 100.5;
          `}
        </code>
      </pre>
    );
  };

  const Java_03_01_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String name = "Americano";
String group = "Coffee";
          `}
        </code>
      </pre>
    );
  };

  const Java_03_01_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[] intArray = null;
String str = (String) null;
Interger val = (Interger) null;
          `}
        </code>
      </pre>
    );
  };

  const Java_03_01_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Integer boxedValue = null;
  int intValue = boxedValue; // NullPointerException 발생
  System.out.println(intValue);
          `}
        </code>
      </pre>
    );
  };

  const Java_03_01_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
   String strVal1 = "나희도";  // 리터럴 상수로 고정 됨
        String strVal2 = "나희도";
        String strVal3 = new String("나희도"); //heap 영역에 메모리 공간을 확보 함

        // 참조 변수에서 ==, != (주소가 같은지를 몰어 보게 됨)
        if(strVal1 == strVal3) { //  주소가 같은지 물어 봄
            System.out.println("strVal1과 strVal3는 참조하는 주소가 같음");
        } else {
            System.out.println("strVal1과 strVal3는 참조하는 주소가 다름");
        }

        if(strVal1.equals(strVal3)) { //포함된 내용, 즉 문자열이 같은지를 물어 봄
            System.out.println("strVal1과 strVal3의 내용이 같음");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_03_01_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                03. 배열과 문자열
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                01. 참조 타입과 메모리 구조
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="03" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>참조 타입과 메모리 구조</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    자바는 기본 타입과 참조 타입으로 나뉘며, 이들은 메모리
                    구조에서 다르게 처리 됩니다.
                    <ClassContentsCodeBox>
                      👉 자바에서 기본 타입(primitive types)이 있는 것은 자바가
                      완벽한 객체지향 프로그래밍 언어라는 것을 의미하지
                      않습니다. 자바는 객체지향 언어이긴 하지만, 일부 측면에서는
                      완벽한 객체지향 언어라고 보기는 어렵습니다.
                    </ClassContentsCodeBox>
                  </ClassContentsText>
                  <ClassContentsTitle2>데이터 타입 분류</ClassContentsTitle2>
                  <hr />
                  <ClassContentsImage
                    style={{
                      width: "80%",
                      height: "350px",
                      backgroundImage: `url(${"/images/study/java/java_03_01_01.png"})`,
                    }}
                  />
                  <ClassContentsText>
                    기본 타입과 참조 타입으로 선언된 변수의 차이점은 저장되는
                    값이 다르다는 점 입니다.
                    <br />
                    <b>
                      기본 타입은 선언된 변수에 실제 값이 저장되지만 참조 타입은
                      변수에 실제값이 저장된 주소
                    </b>
                    를 가지고 있습니다.
                  </ClassContentsText>
                  <ClassContentsImage
                    style={{
                      width: "80%",
                      height: "100px",
                      backgroundImage: `url(${"/images/study/java/java_03_01_02.png"})`,
                    }}
                  />
                  <ClassContentsTitle2>변수와 메모리 구조</ClassContentsTitle2>
                  <hr />
                  <ClassContentsTitle3>메소드 영역(Static)</ClassContentsTitle3>
                  <ClassContentsText>
                    <b>
                      메서드 영역은 클래스들의 클래스 정보, 정적(static) 변수,
                      상수, 메서드의 코드 등이 저장되는 공간
                    </b>
                    입니다. 클래스 로더에 의해 클래스들이 로드되고 메모리에
                    배치됩니다. JVM이 실행될 때 클래스 정보들이 로드되며,
                    프로그램 실행 도중 변경되지 않는 정적 변수와 메서드 코드도
                    이 영역에 저장됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>힙 영역</ClassContentsTitle3>
                  <ClassContentsText>
                    힙 영역은 객체와 배열이 생성되는 영역입니다. 힙 영역에
                    생성된 객체와 배열은 JVM 스택 영역의 변수나 다른 객체의
                    필드에서 참조한다. 참조하는 변수나 필드가 없다면 의미 없는
                    객체가 되기 때문에 이것을 쓰레기로 취급하고{" "}
                    <b>
                      JVM은 Garbage Collector를 실행시켜 스레기 객체를 힙
                      영역에서 자동으로 제거
                    </b>
                    합니다.
                    <br />
                    그렇기 때문에 개발자는 객체를 제거하기 위해 별도의 코드를
                    작성할 필요가 없습니다.
                    <br />
                    Garbage Collector의 존재가 C언어와의 차이점 중 하나입니다.
                    <b>
                      C언어에서 참조 변수(포인터)를 사용하게되면 직접 쓰레기를
                      제거
                    </b>
                    해줘야 하기 때문입니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>스택 영역</ClassContentsTitle3>
                  <ClassContentsText>
                    <b>
                      JVM 스택 영역은 각 스레드마다 하나씩 존재하며 스레드가
                      시작될 때 할당
                    </b>
                    됩니다. 자바 프로그램에서{" "}
                    <b>
                      추가적으로 스레드를 생성하지 않는다면 main 스레드만
                      존재하므로 JVM 스택도 하나
                    </b>
                    입니다. JVM 스택은 메소드를 호출할 때마다 프레임을 추가하고
                    메소드가 종료되면 해당 프레임을 제거하는 동작을 수행합니다.
                    <br />
                    프레임 내부에는 로컬 변수 스택이 있는데 기본 타입 변수와
                    참조 타입 변수가 추가되거나 제거됩니다.{" "}
                    <b>
                      변수는 선언된 블록 안에서만 스택으로 존재하고 블록을
                      벗어나면 스택에서 제거됩니다. 이는 메소드, if문, for문
                      등에서 내부에서 생성된 변수는 해당 로컬 변수 스택에만
                      존재하여 해당 구문을 빠져 나오게되면 제거가 되여
                      외부에서는 사용이 불가능 하다는 것
                    </b>
                    을 말합니다. 배열 같은 경우에는 배열의 변수는 스택 영역에
                    생성되지만 배열의 데이터 자체는 Heap 영역에 생성되어
                    제거되지 않습니다. 즉 Java에서 배열은 객체로 취급을 합니다.
                  </ClassContentsText>
                  <ClassContentsImage
                    style={{
                      width: "80%",
                      height: "200px",
                      backgroundImage: `url(${"/images/study/java/java_03_01_03.png"})`,
                    }}
                  />
                  <ClassContentsTitle1>
                    참조 타입과 참조 변수
                  </ClassContentsTitle1>
                  <ClassContentsText>
                    자바의 타입은 기본 타입과 참조 타입으로 분류됩니다.
                    <br />
                    기본 타입은 정수, 실수, 문자, 논리값 등을 저장하는 타입을
                    말합니다.
                    <br />
                    참조 타입은 객체의 번지를 참조하는 타입으로{" "}
                    <b>배열, 열거 클래스, 인터페이스, 문자열</b>을 말합니다.{" "}
                    <b>기본 타입은 값을 저장하고 참조 타입은 주소를 저장</b>{" "}
                    합니다. (자바에서의 객체 주소는 <b>해시 코드</b>로 사용)
                    <br />
                    <b>기본 타입 변수</b>
                    <Java_03_01_Code01 />
                    <b>참조 타입 변수</b>
                    <Java_03_01_Code02 />
                  </ClassContentsText>
                  <ClassContentsTitle3>메모리 사용 영역</ClassContentsTitle3>
                  <ClassContentsText>
                    <b>참조 타입 변수는 스택 영역에 힙 영역의 객체 주소</b>를
                    가집니다.
                    <br />
                    (C언어의 동적 할당과 유사 합니다.)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    null과 NullPointerException
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    참조 타입 변수는{" "}
                    <b>힙 영역의 객체를 참조하지 않는다는 뜻으로 null값</b>을
                    가질 수 있습니다. (즉, 참조형 타입의 기본값으로 사용할 수
                    있습니다.)
                    <br />
                    null값도 초기값으로 사용 할 수 있기 때문에 null로 초기화된
                    참조 변수는 스택 영역에 생성 됩니다.
                    <Java_03_01_Code03 />
                    <br />
                    참조 타입의 변수가 참조하는 값이 없는 경우, 이를 언박싱 하게
                    되면, NullPointerException 이 발생 합니다.
                    <Java_03_01_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    참조변수의 ==, != 연산
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    기본 타입 변수의 ==, != 연산은 변수의 값이 같은지 아닌지를
                    조사 하지만 참조 타입 변수들 간의 ==, != 연산은 동일한
                    객체를 참조하는지 확인할 때 사용 합니다.
                    <Java_03_01_Code05 />
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

export default Java_03_01;
