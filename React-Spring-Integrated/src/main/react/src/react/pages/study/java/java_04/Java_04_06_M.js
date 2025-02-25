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

const Java_04_06_M = () => {
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
    navigate("/study/java/04/06");
    window.location.reload();
  };

  const Java_04_06_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
1. println()
2. println(boolean x)
3. println(char x)
4. println(char[] x)
5. println(double x)
6. println(float x)
7. println(int x)
8. println(long x)
9. println(Object x)
10. println(String x)
          `}
        </code>
      </pre>
    );
  };

  const Java_04_06_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[]args) {
        System.out.printf("%d\n", sum(10, 20, 30));
        System.out.printf("%.2f\n", sum(10.22, 20.33, 30.44));
        System.out.printf("%s\n", sum("Korea", "Seoul", "Gang-nam"));
        System.out.printf("%d\n", sum(10, 'A', 'B'));
    }

    static int sum(int x, int y, int z) {
        return x + y + z;
    }
    static double sum(double x, double y, double z) {
        return x + y + z;
    }
    static String sum(String x, String y, String z) {
        return x + y + z;
    }
		static int sum(int x, String y. int z) {
				if(e.equals("100)) return x + 100 + z;
				else return 0;
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
            06. Method Overloading
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>
          메소드 오버로딩(method overloading)
        </ClassContentsTitle2>
        <ClassContentsText>
          <b>
            메소드 오버로딩이란 같은 이름의 메소드를 중복하여 정의하는 것을 의미
          </b>
          합니다.
          <br />
          원래 한 클래스내에 같은 이름의 메소드를 둘 이상 가질 수 없으나
          매개변수의 개수나 타입을 다르게 하면, 하나의 이름으로 메소드를 작성 할
          수 있습니다.
          <br />
          메소드 오버로딩은 객체지향 프로그래밍의 특징 중 하나인
          다형성(polymorphism)을 구현하는 방법 중 하나 입니다.
          <br />
          메소드 오버로딩의 대표적인 예로는 println() 메소드를 들 수 있습니다.
          <Java_04_06_Code01 />
        </ClassContentsText>
        <ClassContentsTitle3>메소드 오버로딩의 조건</ClassContentsTitle3>
        <ClassContentsText>
          1. 메소드의 이름이 같아야 합니다.
          <br />
          2. 매개변수의 개수 또는 타입이 달라야 합니다. (매개변수는 같은데 반환
          타입이 다른 경우는 오버로딩이 성립하지 않습니다.)
          <ClassContentsImage
            style={{
              width: "100%",
              height: "200px",
              backgroundImage: `url(${"/images/study/java/java_04_06_01.png"})`,
            }}
          />
          <Java_04_06_Code02 />
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

export default Java_04_06_M;
