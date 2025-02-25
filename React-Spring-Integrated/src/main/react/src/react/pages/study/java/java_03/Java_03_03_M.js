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

const Java_03_03_M = () => {
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
    navigate("/study/java/03/03");
    window.location.reload();
  };

  const Java_03_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
"Hello Java"
"a"
"123"
'A' // 문자열이 아닌 문자를 의미
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
String b = "a";
String c = "123";
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = new String("Hello Java");
String b = new String("a");
String c = new String("123");
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "hello";
String b = "java";
String c = "hello";
System.out.println(a.equals(b)); // false 출력
System.out.println(a.equals(c)); // true 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "hello";
String b = new String("hello");
System.out.println(a.equals(b));  // true
System.out.println(a == b);  // false
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "hello";
String b = "hello";
System.out.println(a.equals(b));  // true
System.out.println(a == b);  // true
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
System.out.println(a.indexOf("Java"));  // 6 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
System.out.println(a.contains("Java"));  // true 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
System.out.println(a.charAt(6));  // "J" 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
System.out.println(a.replace("Java", "World"));  // Hello World 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String sentence = "Java is fun";
String modifiedSentence = sentence.replaceAll("\\s", "");
System.out.println(modifiedSentence);
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
System.out.println(a.substring(5));  // 5번인덱스 부터 끝까지..
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "Hello Java";
System.out.println(a.toUpperCase());  // HELLO JAVA 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String oldStr = "    자바 프로그래밍   ";
Stinrg newStr = oldStr.trim();
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String a = "a:b:c:d";
String[] result = a.split(":");  // result는 {"a", "b", "c", "d"}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(String.format("I eat %d apples.", 3));  // "I eat 3 apples." 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(String.format("I eat %s apples.", "five"));  // "I eat five apples." 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int number = 10;
String day = "three";

// "I ate 10 apples. so I was sick for three days." 출력
System.out.println(String.format("I ate %d apples. so I was sick for %s days.", number, day));
          `}
        </code>
      </pre>
    );
  };

  const Java_03_03_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
char[] word = input.toCharArray();
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
            03. 배열과 문자열
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>03. String</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsText>
          자바의 문자열을 나타내는 자료형은 String이며, <b>참조 타입 자료형</b>{" "}
          입니다.
          <br />
          문자열을 표현하기 위해서는{" "}
          <b>객체를 만들어 사용하거나 리터럴 표기 방식으로 사용</b>할 수 있으며,
          리터럴 표기 방식이 가독성이나 컴파일 시 성능에 유리한 점이 있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>문자열이란 문장을 의미합니다.</ClassContentsTitle3>
        <Java_03_03_Code01 />
        <br />
        <ClassContentsTitle3>
          자바에서 문자열을 나타내는 자료형은 String 입니다.
        </ClassContentsTitle3>
        <Java_03_03_Code02 />
        <br />
        <ClassContentsTitle3>아래와 같이 표현 가능</ClassContentsTitle3>
        <Java_03_03_Code03 />
        <br />
        <ClassContentsTitle3>리터럴 표기</ClassContentsTitle3>
        <ClassContentsText>
          <ClassContentsCode>String a = "happy java"</ClassContentsCode>와{" "}
          <ClassContentsCode>
            String a = new String("happy java")
          </ClassContentsCode>
          는 같은 값을 갖게 되지만 완전히 동일하지는 않다. 첫번째 방식을
          리터럴(literal) 표기라고 하는데 객체 생성없이 고정된 값을 그대로
          대입하는 방법을 말한다. 위 예에서 리터럴 표기법은 "happy java" 라는
          문자열을 internal pool 이라는 곳에 저장하고 다음에 다시 동일한
          문자열이 선언될때는 cache 된 문자열을 리턴한다. 두번째 방식은 항상
          새로운 String 객체를 만든다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>문자열 내장 메소드</ClassContentsTitle2>
        <ClassContentsTitle3>equals</ClassContentsTitle3>
        <ClassContentsText>
          <b>두개의 문자열이 동일하지를 비교하여 결과값을 리턴</b>
          합니다.
          <Java_03_03_Code04 />
          <br />
          <b>문자열을 비교할 때는 equal 메소드를 사용</b>해야 합니다.
          <Java_03_03_Code05 />
          <br />
          하지만 아래의 경우는 true 입니다. (같은{" "}
          <b>리터럴 문자열의 주소를 참조</b>하고 있음)
          <Java_03_03_Code06 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>indexOf</ClassContentsTitle3>
        <ClassContentsText>
          <b>문자열에서 특정 문자가 시작되는 인덱스를 리턴</b>합니다. (0부터
          시작 합니다.)
          <Java_03_03_Code07 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>contains</ClassContentsTitle3>
        <ClassContentsText>
          <b>문자열에서 특정 문자열이 포함되어 있는지의 여부를 리턴</b>
          한다.
          <Java_03_03_Code08 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>charAt</ClassContentsTitle3>
        <ClassContentsText>
          문자열에서 특정 위치의 문자(char)를 리턴한다.
          <Java_03_03_Code09 />
        </ClassContentsText>
        <br />
        <ClassContentsText>
          <font color="red">
            실습문제 : 입력받은 문자열 대/소문자 바꾸기
            <br />
            실습문제 : 문자열 반전
          </font>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>replace</ClassContentsTitle3>
        <ClassContentsText>
          문자열 중 특정 문자열을 다른 문자열로 바꾸고자 할 때 사용한다.
          <br />
          대체할 문자열에 대해 “”하면 해당 문자열을 찾아서 지울 수도 있습니다.
          <Java_03_03_Code10 />
        </ClassContentsText>
        <ClassContentsTitle3>replaceAll</ClassContentsTitle3>
        <ClassContentsText>
          문자열 중 특정 문자열을 다른 문자열로 바꾸고자 할 때 사용한다. (정규식
          사용 가능) - 모든 공백 문자 제거
          <Java_03_03_Code11 />
        </ClassContentsText>
        <ClassContentsTitle3>substring</ClassContentsTitle3>
        <ClassContentsText>
          문자열 중 특정 부분을 뽑아낼 경우에 사용한다.
          <Java_03_03_Code12 />
        </ClassContentsText>
        <br />
        <ClassContentsText>
          <font color="red">실습문제 : 문자열 추가하기</font>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>toUpperCase / toLowerCase</ClassContentsTitle3>
        <ClassContentsText>
          문자열을 모두 대문자/소문자로 변경할 때 사용한다.
          <Java_03_03_Code13 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>trim()</ClassContentsTitle3>
        <ClassContentsText>
          문자열 앞뒤의 공백을 잘라냅니다.
          <Java_03_03_Code14 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>split</ClassContentsTitle3>
        <ClassContentsText>
          문자열을 특정 구분자로 분리하는 메소드이다.
          <Java_03_03_Code15 />
        </ClassContentsText>
        <br />
        <ClassContentsText>
          <font color="red">
            실습 문제 : 정해진 형식으로 시간을 입력 받아서 출력하기
          </font>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>문자열 포매팅</ClassContentsTitle2>
        <ClassContentsText>
          문자열 포매팅이란 문자열 안에 어떤 값을 삽입하는 방법입니다.
          <br />
          출력 포맷이 정해져 있고 특정한 값만 계속되는 경우 사용하면 됩니다.
          <br />
          <ClassContentsCode>String.format</ClassContentsCode>과{" "}
          <ClassContentsCode>System.out.printf</ClassContentsCode>의 차이는
          전자는 문자열을 리턴하는 메소드이고 후자는 문자열을 출력하는
          메소드라는 점이다.
        </ClassContentsText>
        <ClassContentsTitle3>숫자 대입하기</ClassContentsTitle3>
        <Java_03_03_Code16 />
        <br />
        <ClassContentsTitle3>문자열 대입하기</ClassContentsTitle3>
        <Java_03_03_Code17 />
        <br />
        <ClassContentsTitle3>2개 이상 대입하기</ClassContentsTitle3>
        <Java_03_03_Code18 />
        <br />
        <ClassContentsTitle3>toCharArray()</ClassContentsTitle3>
        <ClassContentsText>
          문자열을 문자 배열로 반환합니다.
          <Java_03_03_Code19 />
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

export default Java_03_03_M;
