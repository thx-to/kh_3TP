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
import Java_04_15_M from "./Java_04_15_M";

const Java_04_15 = () => {
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
    navigate("/study/java/04/15");
    window.location.reload();
  };

  const Java_04_15_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
abstract class 클래스이름 {
...
	abstract 반환타입 메소드이름();
...
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_15_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
abstract class Animal { abstract void cry(); }
class Cat extends Animal { void cry() { System.out.println("냐옹냐옹!"); } }
class Dog extends Animal { void cry() { System.out.println("멍멍!"); } }

public class Polymorphism02 {

    public static void main(String[] args) {
        // Animal a = new Animal(); // 추상 클래스는 인스턴스를 생성할 수 없음.
        Cat c = new Cat();
        Dog d = new Dog();

        c.cry();
        d.cry();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_15_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        SmartPhone smartPhone = new SmartPhone("Galaxy S22");
        smartPhone.setPower(true);
        smartPhone.internet();
        smartPhone.call();
    }
}

class SmartPhone extends Phone {
    public SmartPhone(String name) {
        super(name);
    }

    @Override
    void call() {
        System.out.println("부모의 요청으로 통화 기능을 완성 합니다.");
    }

    public void internet() {
        System.out.println("인터넷을 검색 합니다.");
    }
}

public abstract class Phone {
    public String name;
    public boolean isPower;
    public Phone(String name) {
        this.name = name;
    }
    public void setPower(boolean isPower) {
        this.isPower = isPower;
        if (isPower) {
            System.out.println("Phone Power ON");
        } else {
            System.out.println("Phone Power OFF");
        }
    }
    abstract void call();
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_04_15_M />
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
                15. 추상 클래스
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
                  <ClassHeaderTitle>추상 클래스</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>추상클래스 ?</ClassContentsTitle2>
                  <ClassContentsText>
                    자바에서 추상 클래스(Abstract Class)는 일반 클래스와는
                    다르게 <b>인스턴스를 직접 생성할 수 없는 클래스</b>입니다.
                    추상 클래스는 다른 클래스들이 공통적으로 가져야 할 메서드를
                    정의하거나 일부 구현을 제공하는 역할을 합니다. 이러한 추상
                    클래스를 상속받은 서브클래스에서는 추상 클래스의 추상
                    메서드를 구체화하여 실제로 사용할 수 있는 클래스를 만들게
                    됩니다.
                    <br />
                    추상 클래스를 만들기 위해서는 다음과 같은 특징을 가지고
                    있어야 합니다.
                    <br />
                    <br />
                    1. <b>추상 메서드 포함</b>
                    <br />
                    <ClassContentsTextTab>
                      추상 클래스는 추상 메서드(구현이 없는 메서드)를 포함할 수
                      있습니다. 이러한 추상 메서드는 서브클래스에서 반드시
                      구현되어야 합니다.
                    </ClassContentsTextTab>
                    2. <b>일반 메서드 포함</b>
                    <br />
                    <ClassContentsTextTab>
                      추상 클래스는 추상 메서드 외에도 일반 메서드를 포함할 수
                      있습니다. 이 메서드들은 추상 클래스 내부에서 구현될 수
                      있습니다.
                    </ClassContentsTextTab>
                    3. <b>인스턴스 생성 불가능</b>
                    <br />
                    <ClassContentsTextTab>
                      추상 클래스는 직접 객체를 생성할 수 없습니다. 즉,{" "}
                      <ClassContentsCode>new AbstractClass()</ClassContentsCode>
                      와 같이 추상 클래스의 생성자를 호출하여 객체를 생성할 수
                      없습니다.
                    </ClassContentsTextTab>
                    4. <b>상속을 통한 사용</b>
                    <br />
                    <ClassContentsTextTab>
                      추상 클래스를 상속받은 서브클래스에서 추상 메서드를
                      구체화하여 사용할 수 있습니다. 이렇게 구체화된
                      서브클래스의 인스턴스를 생성하여 사용할 수 있습니다.
                    </ClassContentsTextTab>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "120px",
                        backgroundImage: `url(${"/images/study/java/java_04_15_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    추상 클래스와 인터페이스
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "250px",
                        backgroundImage: `url(${"/images/study/java/java_04_15_02.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    추상 메소드(abstract method)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    추상 메소드(abstract method)란{" "}
                    <b>
                      자식 클래스에서 반드시 오버라이딩해야만 사용할 수 있는
                      메소드
                    </b>
                    를 의미합니다.
                    <br />
                    자바에서 추상 메소드를 선언하여 사용하는 목적은{" "}
                    <b>
                      추상 메소드가 포함된 클래스를 상속받는 자식 클래스가
                      반드시 추상 메소드를 구현하도록 하기 위함
                    </b>
                    입니다.
                    <br />
                    예를 들면 모듈처럼 중복되는 부분이나 공통적인 부분은 미리 다
                    만들어진 것을 사용하고, 이를 받아 사용하는 쪽에서는 자신에게
                    필요한 부분만을 재정의하여 사용함으로써 생산성이 향상되고
                    배포 등이 쉬워지기 때문입니다.
                    <br />
                    이러한 추상 메소드는 선언부만이 존재하며, 구현부는 작성되어
                    있지 않습니다.
                    <br />
                    바로 이 작성되어 있지 않은 구현부를 자식 클래스에서
                    오버라이딩하여 사용하는 것입니다.
                    <br />
                    자바에서 추상 메소드는 다음과 같은 문법으로 선언합니다.
                    <br />
                    <ClassContentsCode>
                      abstract 반환타입 메소드이름();
                    </ClassContentsCode>
                    <br />
                    위와 같이{" "}
                    <b>
                      선언부만 있고 구현부가 없다는 의미로 선언부 끝에 바로
                      세미콜론(;)을 추가
                    </b>
                    합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>추상 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    자바에서는{" "}
                    <b>
                      하나 이상의 추상 메소드를 포함하는 클래스를 가리켜 추상
                      클래스(abstract class)
                    </b>
                    라고 합니다.
                    <br />
                    이러한 추상 클래스는 객체 지향 프로그래밍에서 중요한 특징인
                    다형성을 가지는 메소드의 집합을 정의할 수 있도록 해줍니다.
                    <br />
                    즉, 반드시 사용되어야 하는 메소드를 추상 클래스에 추상
                    메소드로 선언해 놓으면, 이 클래스를 상속받는 모든
                    클래스에서는 이 추상 메소드를 반드시 재정의해야 합니다.
                    <br />
                    자바에서 추상 클래스는 다음과 같은 문법으로 선언합니다.
                    <Java_04_15_Code01 />
                    <br />
                    이러한 추상 클래스는 동작이 정의되어 있지 않은 추상 메소드를
                    포함하고 있으므로, 인스턴스를 생성할 수 없습니다.
                    <br />
                    추상 클래스는 먼저 상속을 통해 자식 클래스를 만들고, 만든
                    자식 클래스에서 추상 클래스의 모든 추상 메소드를
                    오버라이딩하고 나서야 비로소 자식 클래스의 인스턴스를 생성할
                    수 있게 됩니다.
                    <Java_04_15_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    추상 메소드와 오버라이딩
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    abstract로 선언된 메소드가 포함되면 해당 클래스는 객체로
                    만들어 질 수 없고, 추상메소드라 포함된 클래스를 상속 받는
                    경우에는 해당 메소드를 반드시 오버로딩해서 구체화 해야
                    합니다.
                    <Java_04_15_Code03 />
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

export default Java_04_15;
