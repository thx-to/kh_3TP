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
import Java_04_13_M from "./Java_04_13_M";

const Java_04_13 = () => {
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
    navigate("/study/java/04/13");
    window.location.reload();
  };

  const Java_04_13_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class SingletonEx {
    public static void main(String[] args) {
        Student student1 = new Student();
        Student student2 = new Student();
        student1.setInfo("안유진", 21);  // 정보를 전달
        student2.viewInfo();   // 전달된 정보를 확인
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_13_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Singleton {
    String name;
    int id;
    // 정적 변수로 Singleton클래스에 대한 참조 변수 =>
    private static Singleton singleton = new Singleton();
    private Singleton() {
        name = "곰돌이사육사";
        id = 100;
    }
    static Singleton getSingleton() {
        return singleton;
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_04_13_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Student {
    Singleton singleton = Singleton.getSingleton();   // 이미 만들어진 싱글톤 객체의 주소를 대입

    void setInfo(String name, int id) {
        singleton.name = name;  // 싱글톤 객체의 인스턴스 필드 객체 접근
        singleton.id = id;
    }
    void viewInfo() {
        System.out.println("이름 : " + singleton.name);
        System.out.println("아이디 : " + singleton.id);
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
        <Java_04_13_M />
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
                13. Singleton
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
                  <ClassHeaderTitle>Singleton</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    프로그램 전체에서 단 하나의 객체만 만들도록 보장해야 하는
                    경우가 있습니다.
                    <br />단 <b>하나만 생성된다고 해서 이 객체를 싱글톤</b>
                    이라고 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    싱글톤 패턴을 사용하는 이유
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    첫번째는 <b>메모리 측면</b>일 것이다. 최초 한번의 new
                    연산자를 통해서 고정된 메모리 영역을 사용하기 때문에 추후
                    해당 객체에 접근할 때 메모리 낭비를 방지할 수 있다. 뿐만
                    아니라 이미 생성된 인스턴스를 활용하니 속도 측면에서도
                    이점이 있다고 볼 수 있다.
                    <br />
                    또다른 이점은 다른 클래스 간에 <b>데이터 공유가 쉽다</b>는
                    것이다. 싱글톤 인스턴스가 전역으로 사용되는 인스턴스이기
                    때문에 다른 클래스의 인스턴스들이 접근하여 사용할 수 있다.
                    하지만 여러 클래스의 인스턴스에서 싱글톤 인스턴스의 데이터에
                    동시에 접근하게 되면 동시성 문제가 발생할 수 있으니 이점을
                    유의해서 설계하는 것이 좋다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    싱글톤 패턴의 문제점
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    싱글톤 패턴을 적용하면 위와 같은 효율에서의 이점을 얻을 수
                    있지만 많은 문제점을 포함할 가능성도 함께 존재 합니다.
                    <br />
                    먼저, 싱글톤 패턴을 구현하는 약간의 복잡한 코드가 필요
                    합니다. 그리고 멀티스레딩 환경에서 발생항 수 있는 동시성
                    문제 해결을 위해 syncronized를 사용해야 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>실습 예제</ClassContentsTitle2>
                  <Java_04_13_Code01 />
                  <Java_04_13_Code02 />
                  <Java_04_13_Code03 />
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

export default Java_04_13;
