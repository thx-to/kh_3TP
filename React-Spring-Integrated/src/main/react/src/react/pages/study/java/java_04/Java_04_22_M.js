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

const Java_04_22_M = () => {
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
    navigate("/study/java/04/22");
    window.location.reload();
  };

  const Java_04_22_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 익명객체;

public class AnonymousEx {
    public static void main(String[] args) {
        Parent parent = new Child();
        parent.methodParent();

    }
}
class Parent {
    String name = "Parent Class";
    void methodParent() {
        System.out.println("Parent method : " + this.name);
    }
}
class Child extends Parent {
    String name = "Child Class";
    @Override
    void methodParent() {
        System.out.println("class name(Child) : " + this.name);
        System.out.println("class name(Parent) : " + super.name);

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_22_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Parent {
    String name = "Parent Class";
    void methodParent() {
        System.out.println("Parent method : " + this.name);
    }
}

class A {
    Parent field = new Parent() {
      int childField;
      void methodChild() {
      }
      @Override
        void methodParent() {}
    };
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_22_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class AnonymousEx {
    public static void main(String[] args) {
        A a = new A();
        a.field.methodParent();
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_04_22_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
RemoteControl rc = new RemoteControl() {
    int volume;
    @Override
    public void turnOn() {
        System.out.println("플레이 스테이션5  켭니다.");
    }

    @Override
    public void turnOff() {
        System.out.println("플레이 스테이션5  끕니다.");
    }

    @Override
    public void setVolume(int volume) {
        if(volume > RemoteControl.MAX_VOLUME) {
            this.volume = RemoteControl.MAX_VOLUME;
        } else if(volume < RemoteControl.MIN_VOLUME) {
            this.volume = RemoteControl.MIN_VOLUME;
        } else {
            this.volume = volume;
        }
        System.out.println("현재 TV 볼륨 : " + this.volume);
    }

    @Override
    public void getInfo() {
        System.out.println("플레이 스테이션5 입니다.");
        System.out.println("현재 볼륨은 " + volume + " 입니다.");
    }
};
rc.turnOn();
rc.setVolume(100);
rc.getInfo();
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
            22. 익명 객체
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>익명 객체란?</ClassContentsTitle2>
        <ClassContentsText>
          자바에서 익명 객체(Anonymous Object)는 이름 없이 정의되는 객체를
          말합니다. 이러한 객체는 <b>일회성 작업이나 간단한 구현을 위해 사용</b>
          됩니다. 익명 객체는 클래스나 인터페이스를 정의하지 않고도 객체를
          생성하고 사용할 수 있는 방법을 제공합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>사용하는 상황과 이유</ClassContentsTitle2>
        <ClassContentsText>
          익명 객체는 주로 다음과 같은 상황에서 사용됩니다.
          <br />
          <br />
          1. <b>이벤트 핸들러</b>
          <br />
          <ClassContentsTextTab>
            GUI 프로그래밍에서 이벤트 핸들러를 구현할 때 익명 객체를 사용하여
            간단한 이벤트 처리 코드를 작성할 수 있습니다.
          </ClassContentsTextTab>
          2. <b>쓰레드 생성</b>
          <br />
          <ClassContentsTextTab>
            <ClassContentsCode>Thread</ClassContentsCode> 클래스를 확장하여
            새로운 쓰레드를 생성할 때 익명 객체를 사용하여 쓰레드 실행 코드를
            작성할 수 있습니다.
          </ClassContentsTextTab>
          3. <b>인터페이스 구현</b>
          <br />
          <ClassContentsTextTab>
            인터페이스의 메서드를 구현해야 하는데, 해당 인터페이스의 구현체를
            따로 정의하고 싶지 않을 때 익명 객체를 사용하여 메서드를 구현합니다.
          </ClassContentsTextTab>
          4. <b>객체 생성과 사용 분리</b>
          <br />
          <ClassContentsTextTab>
            객체를 생성하고 그에 따른 메서드 호출을 분리해서 작성할 때 익명
            객체를 사용하면 코드가 간결해집니다.
          </ClassContentsTextTab>
          <br />
          익명 객체의 사용 이유는 다음과 같습니다.
          <br />- <b>간결성</b> : 간단한 작업을 할 때 별도의 클래스나
          인터페이스를 정의하지 않고도 코드를 작성할 수 있어 코드가
          간결해집니다.
          <br />- <b>지역성</b> : 익명 객체는 해당 블록 내에서만 유효하므로 다른
          부분에서 사용되지 않는 임시적인 객체를 생성할 때 유용합니다.
          <br />- <b>일회성 작업</b> : 한 번만 사용될 것으로 예상되는 코드를
          별도의 클래스나 인터페이스를 정의하지 않고 즉석에서 구현할 수
          있습니다.
          <br />
          <br />
          하지만 주의할 점도 있습니다. 익명 객체는 한 번만 사용될 때 유용하지만,
          복잡한 기능을 가진 객체를 구현해야 할 때는 별도의 클래스나
          인터페이스를 정의하여 가독성과 유지보수성을 높이는 것이 좋습니다.
        </ClassContentsText>
        <ClassContentsTitle3>
          일반적인 상속을 이용한 객체 사용법
        </ClassContentsTitle3>
        <Java_04_22_Code01 />
        <br />
        <ClassContentsTitle3>자식 객체가 일회성이라면?</ClassContentsTitle3>
        <ClassContentsText>
          <ClassContentsCodeBox>
            👉 다형성을 위해 부모 타입으로 필드나 변수를 선언하고, 자식 객체를
            초기값으로 대입하는 경우 자식 클래그가 재사용되지 않고, 오로지 해당
            필드와 변수의 초기값으로만 사용할 경우라면(일회성){" "}
            <font color="red">
              <b>익명 자식 객체를 생성</b>
            </font>
            해서 초기값으로 대입하는 것이 좋습니다.
          </ClassContentsCodeBox>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>익명의 자식 객체 생성</ClassContentsTitle2>
        <ClassContentsText>
          일반 클래스와의 차이점은 익명 자식 객체는 생성자를 선언 할 수
          없습니다.
          <br />
          익명 자식 객체에 새롭게 정의된 필드와 메소드는 익명 자식 객체
          내부에서만 사용되고, 외부에서는 필드와 메소드에 접근 할 수 없습니다.
          <br />
          <ClassContentsCode>
            {`부모클래스 [필드변수] = new 부모클래스(매개값,…) { 필드, 메소드 };`}
          </ClassContentsCode>
          <Java_04_22_Code02 />
          <Java_04_22_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>익명 구현 객체 생성</ClassContentsTitle2>
        <ClassContentsText>
          - 이전에 만든 리모컨 인터페이스를 이용한 익명의 객체 생성
          <Java_04_22_Code04 />
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

export default Java_04_22_M;
