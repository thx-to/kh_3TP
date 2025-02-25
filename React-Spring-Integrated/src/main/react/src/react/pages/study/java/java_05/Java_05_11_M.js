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

const Java_05_11_M = () => {
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
    navigate("/study/java/05/11");
    window.location.reload();
  };

  const Java_05_11_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String s = new String();
Class c = s.getClass(); //getClass() 메소드의 반환형은 Class
          `}
        </code>
      </pre>
    );
  };

  const Java_05_11_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Class c = String.class;
          `}
        </code>
      </pre>
    );
  };

  const Java_05_11_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Class c = Class.forName("java.lang.String");
          `}
        </code>
      </pre>
    );
  };

  const Java_05_11_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Person {
    private String name;
    private int age;
    public Person() {}
    public Person(String name) {
        this.name = name;
    }
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_11_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws ClassNotFoundException {
    Person person = new Person();
    Class pCls1 = person.getClass(); // Object 의 getClass() 메소드 사용하기
    System.out.println(pCls1.getName());

    Class pCls2 = Person.class; // 직접 class 대입하기
    System.out.println(pCls2.getName());

    Class pCls3 = Class.forName("Class클래스.Person"); // ClassNotFoundException 필요
    System.out.println(pCls3.getName());
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
            05. Java API 클래스
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            11. Class 클래스
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsText>
          자바의 모든 클래스와 인터페이스는 컴파일되고 나면 class 파일로
          생성됩니다.
          <br />
          class 파일에는 클래스나 인터페이스에 대한 변수, 메소드, 생성자 등의
          정보가 들어 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>Class 클래스란?</ClassContentsTitle2>
        <ClassContentsText>
          Class 클래스는 컴파일된 class 파일에 저장된 클래스나 인터페이스 정보를
          가져오는데 사용 합니다.
          <br />
          예를 들어, 모르는 클래스의 정보를 사용할 경우 직접 클래스의 정보를
          찾아야 하는데 이때 Class 클래스를 활용하면 됩니다.
          <br />
          <b>
            Class 클래스를 선언하고 클래스 정보를 가져오는 방법은 아래의 세 가지
            방법이 있습니다.
          </b>
        </ClassContentsText>
        <ClassContentsTitle3>
          Object 클래스의 getClass() 메소드 사용
        </ClassContentsTitle3>
        <Java_05_11_Code01 />
        <ClassContentsTitle3>
          클래스 파일 이름을 Class 변수에 직접 대입하기
        </ClassContentsTitle3>
        <Java_05_11_Code02 />
        <ClassContentsTitle3>
          Class.forName(”클래스 이름”) 메소드 사용
        </ClassContentsTitle3>
        <Java_05_11_Code03 />
        <br />
        <ClassContentsTitle2>사용 예제</ClassContentsTitle2>
        <Java_05_11_Code04 />
        <Java_05_11_Code05 />
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
export default Java_05_11_M;
