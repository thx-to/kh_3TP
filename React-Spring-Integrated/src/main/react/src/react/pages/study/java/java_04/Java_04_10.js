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
import Java_04_10_M from "./Java_04_10_M";

const Java_04_10 = () => {
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
    navigate("/study/java/04/10");
    window.location.reload();
  };

  const Java_04_10_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class JavaApp {
	public static void main(String[] args) {
		Child child = new Child();
		child.childMethod();
	}
}

class Parent {
	int x = 10;
}

class Child extends Parent {
	int x = 20;

	void childMethod() {
		System.out.println("x=" + x);
		System.out.println("this.x=" + this.x);
		System.out.println("super.x=" + super.x);
	}
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_10_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class Parent {

    int a;
    Parent() { a = 10; }
    Parent(int n) { a = n; }
}

class Child extends Parent {
    int b;
    Child() {
	     //super(40);
        b = 20;
    }
    void display() {
        System.out.println(a);
        System.out.println(b);
    }
}

public class Inheritance04 {
    public static void main(String[] args) {
        Child ch = new Child();
        ch.display();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_10_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Car() {
        speed = 150;
        color = "없음";
        name = "없음";
    }
    Car(int speed) {
        this.speed = speed;
        color = "없음";
        name = "없음";
    }

SportCar(String name) {
    super(280);
    isTurbo = false;
    this.name = name;
    this.color = "Red";
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_04_10_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                04. 객체 지향 프로그래밍
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                10. super & super()
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="04" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>super & super()</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>super</ClassContentsTitle2>
                  <ClassContentsText>
                    <b>
                      자식 클래스가 부모클래스로 부터 상속 받은 멤버를 참조 할
                      때 사용하는 참조 변수
                    </b>
                    입니다.
                    <br />
                    클래스 내의 멤버번수와 지역변수의 이름이 같을 경우 구분을
                    위해 this를 사용하듯이{" "}
                    <b>부모 클래스와 자식클래스 생성자를 구분하기 위해 사용</b>
                    합니다.
                    <Java_04_10_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>super()</ClassContentsTitle2>
                  <ClassContentsText>
                    <b>부모 클래스의 생성자를 호출하는 메소드</b>입니다.
                    상속받은 자식클래스가 부모클래스의 멤버를 사용할 경우가 있을
                    수도 있으므로 부모 클래스를 우선적으로 초기화해줘야 합니다.
                    부모클래스의 생성자는 자식 클래스의 생성자 첫줄에서 호출
                    해줍니다.
                    <br />
                    기본적으로 별도로{" "}
                    <b>super()를 사용하지 않아도 자동으로 기본 생성자를 호출</b>
                    해줍니다.
                    <br />
                    하지만, 부모 클래스의 생성자가 기본 생성자가 아니면 자동으로
                    추가되지 않으므로 추가해주어야 합니다.
                    <Java_04_10_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    상속의 자동차 예제 참조
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    부모의 생성자가 오버로딩 되어 있는 경우 상속 받은 자식의
                    생성자에서 부모의 생성자를 선택할 수 있습니다.
                    <br />
                    즉, 상속 받은 자식 클래스가 객체로 만들어 질 때 우선적으로
                    원하는 부모의 생성자를 통해 부모의 객체를 생성한 후 자식의
                    객체가 생성 됩니다.
                    <Java_04_10_Code03 />
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

export default Java_04_10;
