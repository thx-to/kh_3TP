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

import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Java_04_01_M = () => {
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
    navigate("/study/java/04/01");
    window.location.reload();
  };

  const Java_04_01_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Student {
	int studentID;       // 학번
	String studentName;  // 이름 
	int grade;           // 학년
	String address;      // 주소
	// 메소드 추가
	public void showStudentInfo() {
		System.out.println(studentName + "," + address);
	}
}
          `}
        </code>
      </pre>
    );
  };
  const Java_04_01_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.showStudentInfo();
        Student s2 = new Student();
        s2.showStudentInfo();
    }
}
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
            04. 객체 지향 프로그래밍
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            01. 객체 지향 프로그래밍과 클래스
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle1>객체지향 프로그래밍이란?</ClassContentsTitle1>
        <hr />
        <ClassContentsText>
          객체지향 프로그래밍(Object-Oriented Programming, OOP)은 소프트웨어
          개발 방법론 중 하나로, 현실 세계의 객체(Object)와 그 객체들 간의
          상호작용을 모델링하여 프로그래밍하는 방법입니다.
        </ClassContentsText>
        <ClassContentsTitle3>
          클래스와 객체 (Class and Object)
        </ClassContentsTitle3>
        <ClassContentsText>
          - 클래스(Class)는 특정 객체의 <b>속성(변수)과 동작(메서드)을 정의</b>
          하는 틀입니다. (설계도면)
          <br />- 객체(Object)는 클래스의 인스턴스로, 클래스에 정의된
          속성(필드)과 동작(메소드)을 가지게 됩니다.
        </ClassContentsText>
        <ClassContentsTitle2>
          객체지향 프로그래밍의 4가지 특징
        </ClassContentsTitle2>
        <ClassContentsText>
          1. <b>캡슐화 (Encapsulation) :</b>
          <ClassContentsTextTab>
            - 클래스 내부에 데이터를 숨기고, 외부에서는 메서드를 통해서만
            데이터에 접근할 수 있도록 합니다.
            <br />- 이는 데이터의 무결성과 보안을 보장하며 코드 유지보수를
            용이하게 합니다.
          </ClassContentsTextTab>
          2. <b>상속 (Inheritance) :</b>
          <ClassContentsTextTab>
            - 상속은 기존 클래스의 속성과 메서드를 다른 클래스에서 재사용하거나
            확장할 수 있도록 해줍니다.
            <br />- 부모 클래스(상위 클래스)의 특성을 자식 클래스(하위 클래스)가
            물려받는 개념입니다.
            <br />- 코드 재사용과 계층적인 구조를 구현하는데 유용합니다.
          </ClassContentsTextTab>
          3. <b>다형성 (Polymorphism) :</b>
          <ClassContentsTextTab>
            - 다형성은 부모 클래스의 메서드를 하위 클래스에서 재정의하여
            사용하는 것을 말합니다.
            <br />- 은 메서드를 호출하더라도 실제 실행되는 메서드는 객체의
            타입에 따라 달라질 수 있습니다.
            <br />- 코드의 유연성과 가독성을 높여줍니다.
          </ClassContentsTextTab>
          4. <b>추상화 (Abstraction) :</b>
          <ClassContentsTextTab>
            - 복잡한 시스템을 단순화하여 필요한 부분만 표현하는 것을 말합니다.
            <br />- 클래스에서 핵심적인 특징만을 추출하여 구현하고, 세부 구현은
            숨김으로써 복잡성을 낮춥니다.
            <br />- 개발자가 중요한 부분에만 집중할 수 있도록 도와줍니다.
          </ClassContentsTextTab>
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>객체 지향 프로그래밍과 클래스</ClassContentsTitle1>
        <hr />
        <ClassContentsTitle2>객체 지향 프로그래밍</ClassContentsTitle2>
        <ClassContentsText>
          객체 지향 프로그래밍에서는{" "}
          <font color="#2c79c1">모든 데이터를 객체(object)로 취급</font>
          하며, 이러한 객체가 바로 프로그래밍의 중심이 됩니다.
          <br />
          객체(object)란 간단히 이야기하자면 실생활에서 우리가 인식할 수 있는
          사물로 설명할 수 있습니다.
          <br />
          이러한{" "}
          <font color="#2c79c1">
            객체의 상태(state)와 행동(behavior)을 구체화하는 형태의 프로그래밍이
            바로 객체 지향 프로그래밍
          </font>
          입니다.
          <br />
          이때 객체를 만들어 내기 위한 <b>설계도와 같은 개념을 클래스(class)</b>
          라고 합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>클래스(Class)</ClassContentsTitle2>
        <ClassContentsText>
          자바에서 클래스(class)란{" "}
          <font color="#2c79c1">
            객체를 정의하는 틀 또는 설계도와 같은 의미로 사용
          </font>
          됩니다.
          <br />
          자바에서는 이러한 설계도인 클래스를 가지고, 여러 객체를 생성하여
          사용하게 됩니다.
          <br />
          클래스는 객체의 상태를 나타내는{" "}
          <font color="#2c79c1">
            필드(field)와 객체의 행동을 나타내는 메소드(method)로 구성
          </font>
          됩니다.
          <br />
          즉,{" "}
          <font color="#2c79c1">
            필드(field)란 클래스에 포함된 변수(variable)를 의미
          </font>
          합니다.
          <br />
          또한,{" "}
          <font color="#2c79c1">
            메소드(method)란 어떠한 특정 작업을 수행하기 위한 명령문의 집합
          </font>
          이라 할 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>인스턴스(instance)</ClassContentsTitle2>
        <ClassContentsText>
          자바에서 클래스를 사용하기 위해서는 우선{" "}
          <font color="#2c79c1">해당 클래스 타입의 객체(object)를 선언</font>
          해야 합니다.
          <br />
          이렇게{" "}
          <font color="#2c79c1">
            클래스로부터 객체를 선언하는 과정을 클래스의 인스턴스 화
          </font>
          라고 합니다.
          <br />
          또한, 이렇게 선언된 해당 클래스 타입의 객체를 인스턴스(instance)라고
          합니다.
          <br />
          즉,{" "}
          <font color="#2c79c1">인스턴스란 메모리에 할당된 객체를 의미</font>
          합니다.
          <br />
          자바에서는 하나의 클래스로부터 여러 개의 인스턴스를 생성할 수
          있습니다.
          <br />
          이렇게 생성된{" "}
          <font color="#2c79c1">
            인스턴스는 독립된 메모리 공간에 저장된 자신만의 필드
          </font>
          를 가질 수 있습니다.
          <br />
          하지만 해당 클래스의 모든 메소드(method)는 해당 클래스에서 생성된 모든
          인스턴스가 공유하게 됩니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>메소드(method)</ClassContentsTitle2>
        <ClassContentsText>
          자바에서 클래스는{" "}
          <b>
            멤버(member)로 속성을 표현하는 필드(field)와 기능을 표현하는
            메소드(method)
          </b>
          를 가집니다.
          <br />
          그중에서 메소드(method)란 어떠한 특정 작업을 수행하기 위한 명령문의
          집합이라 할 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>클래스 살펴보기</ClassContentsTitle1>
        <hr />
        <ClassContentsTitle2>클래스의 선언</ClassContentsTitle2>
        <ClassContentsText>
          <ClassContentsCode>public class 클래스이름 {}</ClassContentsCode>
          <br />
          클래스 이름은 변수이름과 다르게 <b>첫자를 대문자로 사용</b> 합니다.
          <br />
          나머지 규칙은 변수와 동일 합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          클래스 속성을 구현하는 멤버 변수(필드)
        </ClassContentsTitle2>
        <Java_04_01_Code01 />
        <br />
        <ClassContentsTitle2>
          객체 생성과 클래스 기능을 구현하는 메소드
        </ClassContentsTitle2>
        <ClassContentsText>
          클래스로 부터 객체를 생성하려면 new 연산자를 사용하면 됩니다.
          <br />
          <ClassContentsCode>클래스 변수 = new 클래스();</ClassContentsCode>
          <Java_04_01_Code02 />
        </ClassContentsText>
        {/* </ClassContentsContainer>
          </EachClass> */}
        <ArrowContainer>
          <Java_ArrowNavigation direction="left" />
          <Java_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Java_04_01_M;
