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

const Java_04_04_M = () => {
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
    navigate("/study/java/04/04");
    window.location.reload();
  };

  const Java_04_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package Car;

public class Main {
    public static void main(String[]args) {
        Car car = new Car("Sonata", 2022, "Gray", 220);
    }
}

class Car {
    private String modelName;
    private int modelYear;
    private String color;
    private int maxSpeed;
    private int currentSpeed;

    Car(String modelName, int modelYear, String color, int maxSpeed) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 디스메소드;

public class Main {
    public static void main(String[]args) {
        Car car = new Car("Santefa");
    }
}

class Car {
    private String modelName;
    private int modelYear;
    private String color;
    private int maxSpeed;

    Car(String modelName, int modelYear, String color, int maxSpeed) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    Car(String model) {
        this(model, 2020, "은색", 250); // 다른 생성자 호출
    }

    Car() {

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
            04. this & this()
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>this 참조 변수</ClassContentsTitle2>
        <ClassContentsText>
          <b>
            this 참조 변수는 인스턴스가 자기 자신을 참조하는데 사용하는 변수
          </b>
          입니다. (자신의 메모리를 가리키는 this)
          <br />
          아래의 예제처럼 생성자의 매개변수 이름과 인스턴스 변수의 이름이 같을
          경우에는 인스턴스 변수 앞에 this 키워드를 붙여 구분해야만 합니다.
          <br />
          <b>this 참조자를 사용 할 수 있는 영역은 인스턴스 메소드 뿐</b>
          이며, 클래스 메소드에서는 사용 할 수 없습니다.
          <br />
          모든 인스턴스 메소드에는{" "}
          <b>this 참조 변수가 숨겨진 지역 변수로 존재</b>하고 있습니다.
          <Java_04_04_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          this() 메소드 - 다른 생성자 호출
        </ClassContentsTitle2>
        <ClassContentsText>
          생성자 오버로딩이 많아 질 경우 생성자 간의 중복된 코드가 발생 할 수
          있습니다.
          <br />
          <b>this() 메소드는 생성자 내부에서만 사용</b>할 수 있으며,
          <b>같은 클래스의 다른 생성자를 호출 할 때 사용</b>합니다.
          <br />
          <b>this() 메소드에 인수를 전달하면, 일치하는 생성자를 찾아서 호출</b>
          해 줍니다.
          <Java_04_04_Code02 />
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

export default Java_04_04_M;
