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

const Java_05_04_M = () => {
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
    navigate("/study/java/05/04");
    window.location.reload();
  };

  const Java_05_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println((int)(Math.random() * 100)); // 0 ~ 99

Random ran = new Random();
System.out.println(ran.nextInt(100));           // 0 ~ 99
          `}
        </code>
      </pre>
    );
  };

  const Java_05_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
(int)(Math.random() * 6);       // 0 ~ 5
((int)(Math.random() * 6) + 1); // 1 ~ 6
((int)(Math.random() * 6) + 3); // 3 ~ 8
          `}
        </code>
      </pre>
    );
  };

  const Java_05_04_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(Math.abs(10));    // 10
System.out.println(Math.abs(-10));   // 10
System.out.println(Math.abs(-3.14)); // 3.14
          `}
        </code>
      </pre>
    );
  };

  const Java_05_04_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
// ceil() : 소수점이하가 있으면 무조건 올림
System.out.println(Math.ceil(10.0));
System.out.println(Math.ceil(10.1));
System.out.println(Math.ceil(10.00000001));
// floor() : 소수점 이하를 무조건 날림
System.out.println(Math.floor(10.0));
System.out.println(Math.floor(10.9));
System.out.println(Math.floor(10.00000001));
// round() : 반올림
System.out.println(Math.round(10.0));
System.out.println(Math.round(10.4999));
System.out.println(Math.round(10.5));
// max()와 min()
int x = 10;
int y = 20;
System.out.println(Math.max(x, y));
System.out.println(Math.min(x, y));
          `}
        </code>
      </pre>
    );
  };

  const Java_05_04_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(Math.max(3.14, 3.14159)); // 3.14159
System.out.println(Math.min(3.14, 3.14159)); // 3.14
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
            04. Math 클래스
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
                  <ClassContentsTitle1>Math 클래스</ClassContentsTitle1>
                  <ClassContentsText>
                    Math 클래스는{" "}
                    <b>
                      수학에서 자주 사용하는 상수들과 함수들을 미리 구현해 놓은
                      클래스
                    </b>
                    입니다.
                    <br />
                    <b>
                      Math 클래스의 모든 메소드는 클래스 메소드(static
                      method)이므로, 객체를 생성하지 않고도 바로 사용
                    </b>
                    할 수 있습니다.
                    <br />
                    이러한 <b>Math 클래스는 java.lang 패키지에 포함되어 제공</b>
                    됩니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>random 메소드</ClassContentsTitle2>
                  <ClassContentsText>
                    <b>
                      random() 메소드는 0.0 이상 1.0 미만의 범위에서 임의의
                      double형 값을 하나 생성하여 반환
                    </b>
                    합니다.
                    <br />이 메소드는 내부적으로 java.util 패키지의 Random
                    클래스를 사용한 의사 난수 발생기(pseudorandom-number
                    generator)를 사용하여 임의의 수를 생성합니다.
                    <Java_05_04_Code01 />
                    <br />
                    자바에서는 Math 클래스의 random() 메소드뿐만 아니라
                    java.util패키지에 포함된 Random 클래스의 nextInt()메소드를
                    사용해도 난수를 생성할 수 있습니다.
                    <Java_05_04_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>abs() 메소드</ClassContentsTitle2>
                  <ClassContentsText>
                    abs() 메소드는 전달된 값이 음수이면 그 값의 절대값을
                    반환하며, 전달 된 값이 양수이면 전달 된 값을 그대로
                    반환합니다.
                    <Java_05_04_Code03 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    floor() 메소드, ceil() 메소드와 round() 메소드
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    floor() 메서드는 주어진 숫자를 <b>내림한 결과를 반환</b>
                    합니다.
                    <br />
                    ceil() 메소드는 주어진 숫자를 <b>올림한 결과를 반환</b>
                    합니다.
                    <br />
                    round() 메소드는 전달받은 실수를 소수점 첫째 자리에서
                    반올림한 정수를 반환합니다.
                    <Java_05_04_Code04 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    max() 메소드와 min() 메소드
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    max() 메소드는 전달된 두 값을 비교하여 그중에서 큰 값을
                    반환하며, min() 메소드는 그중에서 작은 값을 반환합니다.
                    <Java_05_04_Code05 />
                  </ClassContentsText>

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
export default Java_05_04_M;
