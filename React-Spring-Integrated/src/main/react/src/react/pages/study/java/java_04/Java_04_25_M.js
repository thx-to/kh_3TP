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

const Java_04_25_M = () => {
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
    navigate("/study/java/04/25");
    window.location.reload();
  };

  const Java_04_25_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "Spring!!");
        return "hello";
    }
    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "hello-template";
    }
    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name) {
        return "hello " + name;
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello hellApi(@RequestParam("name") String name) {
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }
    static class Hello {
        private String name;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
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
            25. Annotation
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>어노테이션?</ClassContentsTitle2>
        <ClassContentsText>
          어노테이션은 메타데이터라고 볼 수 있습니다. 메타데이터란
          애플리케이션이 처리해야 할 데이더가 아니라,{" "}
          <b>
            컴파일 과정과 실행과정에에서 코드를 어떻게 컴파일하고 처리 할 것인지
            알려 주는 정보
          </b>
          입니다.
          <br />
          <ClassContentsCode>@AnnotationName</ClassContentsCode>
          <br />- 컴파일러에게 코드 문법의 에러를 체크하도록 정보를 제공
          <br />- 소프트웨어 개발 툴이 빌드나 배치 시 코드를 자동으로 생성 할 수
          있도록 정보를 제공
          <br />- 실행 시 특정 기능을 실행하도록 정보를 제공 (Spring
          프레임워클에서 Controller 기능 구현 시 사용 됩니다.)
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>어노테이션의 종류</ClassContentsTitle2>
        <ClassContentsText>
          - 표준(내장)어노테이션 : 자바가 기본적으로 제공해주는 어노테이션
          <br />- 메타 어노테이션 : 어노테이션을 위한 어노테이션
          <br />- 사용자정의 어노테이션 : 사용자가 직접 정의하는 어노테이션
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>표준 어노테이션</ClassContentsTitle2>
        <ClassContentsTitle3>@Override</ClassContentsTitle3>
        <ClassContentsText>
          오버라이딩을 올바르게 했는지 컴파일러가 체크한다.
        </ClassContentsText>
        <ClassContentsTitle3>@Deprecated</ClassContentsTitle3>
        <ClassContentsText>
          앞으로 사용하지 않을 것을 권장하는 필드나 메서드에 붙인다.
        </ClassContentsText>
        <ClassContentsTitle3>@Functionallnterface</ClassContentsTitle3>
        <ClassContentsText>
          함수형 인터페이스에 붙이면, 컴파일러가 올바르게 작성 했는지 체크
          <br />
          해당 어노테이션은, 함수형 인터페이스의 "하나의 추상메서드만 가져야
          한다는 제약"을 확인해준다.
          <br />
          또한 함수형 인터페이스라는 것을 알려주는 역할도 한다.
        </ClassContentsText>
        <ClassContentsTitle3>@SuppressWarnings</ClassContentsTitle3>
        <ClassContentsText>
          선언한 곳의 컴파일 경고를 무시하도록 합니다.
        </ClassContentsText>
        <Java_04_25_Code01 />
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

export default Java_04_25_M;
