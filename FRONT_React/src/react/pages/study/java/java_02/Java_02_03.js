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
import Java_02_03_M from "./Java_02_03_M";

const Java_02_03 = () => {
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
    navigate("/study/java/02/03");
    window.location.reload();
  };

  const Java_02_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class operator {
    public static void main(String[] args) {
        int num1 = 10, num2 = 4;
        System.out.println("+ 연산자 : " + (num1 + num2));
        System.out.println("- 연산자 : " + (num1 - num2));
        System.out.println("* 연산자 : " + (num1 * num2));
        System.out.println("/ 연산자 : " + ((double)num1 / num2));
        System.out.println("% 연산자 : " + (num1 % num2));
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
try {
    System.out.println(5 / 0);
} catch(ArithmeticException e) {
    System.out.println("0 으로 나누면 안됨");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int num1 = 10;
System.out.println(num1 += 2);
System.out.println(num1 -= 2);
System.out.println(num1 *= 2);
System.out.println(num1 /= 2);
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int num1 = 10;
System.out.println(num1++);
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int x = 10;
int y = 20;
System.out.println(x > y);
System.out.println(x < y);
System.out.println(x == y);
System.out.println(x != y);
System.out.println(x >= y);
System.out.println(x <= y);
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int x = 10;
int y = 20;
boolean rst1;
boolean rst2;
boolean rst3;
rst1 = (x > 0) && (x < y);
rst2 = (x > 0) || (x > y);
rst3 = !((x > 0) || (x > y));
System.out.println(rst1);
System.out.println(rst2);
System.out.println(rst3);
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Scanner sc = new Scanner(System.in); // 입력을 받기 위한 스캐너 객체 생성
  System.out.print("나이를 입력 하세요 : ");
  int age = sc.nextInt();
  boolean isAdult = (age > 19) ? true : false;
  System.out.println(isAdult);
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println("Java" + 18.04 + 12);
System.out.println(3 + 3.3 + "JDK");
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("년도를 입력 하세요 : ");
        int year = in.nextInt();
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            System.out.println("윤년 입니다.");
        } else {
            System.out.println("윤년이 아닙니다.");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Scanner in = new Scanner(System.in);
System.out.print("정수를 입력 하세요 : ");
int num = in.nextInt();
int a = num / 100;
int b = (num % 100) / 10;
int c = num % 10;
System.out.println("100의 자리 : " + a + ", 10의 자리 : " + b + ", 1의 자리 : " + c);
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
	int val1 = 5;
	int val2 = 5;
	int val3 = 5;
	int result1, result2, result3;

	result1 = val1 + val2 * val3;
	result2 = (val1 + val2) * val3;
	result3 = val1 + (++val2) * val3; // val2에 증가 연산자를 표시하면 어떻게 될까?
          `}
        </code>
      </pre>
    );
  };

  const Java_02_03_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int num1 = 10;
int num2 = 12;
System.out.println(num1 & num2);
System.out.println(num1 | num2);
System.out.println(num1 ^ num2);
System.out.println(~num1);
System.out.println(num1 << 1);
System.out.println(num1 >> 1);
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_02_03_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                02. 기본 자료형과 연산자
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                03. 연산자
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="02" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>연산자</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    프로그램에서 사용하는 값을 연산해야 하는 경우가 자주
                    있습니다. 이 때 사용하는 연산자는 간단한 사칙 연산 부터 값을
                    비교하는 연산자, 비트 단위 연산자까지 종류가 다양합니다.
                    <br />
                    <br />
                    <ClassContentsTextTab>
                      1. 산술 연산자(arithmetic operator)
                      <br />
                      2. 대입 연산자(assignment operator)
                      <br />
                      3. 증감 연산자(increment and decrement operators)
                      <br />
                      4. 비교 연산자(comparison operator)
                      <br />
                      5. 논리 연산자(logical operator)
                      <br />
                      6. 비트 연산자(bitwise operator)
                      <br />
                      7. 삼항 연산자(ternary operator)
                      <br />
                      8. instanceof 연산자 (객체 타입 확인)
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <ClassTable style={{ textAlign: "center" }}>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>연산자 종류</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>연산자</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>피연산자 수</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>산출값</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>기능</b>
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>산술</ClassTableTd>
                        <ClassTableTd>+, -, *, /, %</ClassTableTd>
                        <ClassTableTd>이항</ClassTableTd>
                        <ClassTableTd>숫자</ClassTableTd>
                        <ClassTableTd>사칙연산과 나머지</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>부호</ClassTableTd>
                        <ClassTableTd>+, -</ClassTableTd>
                        <ClassTableTd>단항</ClassTableTd>
                        <ClassTableTd>숫자</ClassTableTd>
                        <ClassTableTd>음수와 양수 표시</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>문자열</ClassTableTd>
                        <ClassTableTd>+</ClassTableTd>
                        <ClassTableTd>이항</ClassTableTd>
                        <ClassTableTd>문자열</ClassTableTd>
                        <ClassTableTd>두 문자열을 연결</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>대입</ClassTableTd>
                        <ClassTableTd>=, +=, -=, *=, /=, %=</ClassTableTd>
                        <ClassTableTd>이항</ClassTableTd>
                        <ClassTableTd>다양</ClassTableTd>
                        <ClassTableTd>우변의 값을 좌변에 대입</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>증감</ClassTableTd>
                        <ClassTableTd>++, —</ClassTableTd>
                        <ClassTableTd>단항</ClassTableTd>
                        <ClassTableTd>숫자</ClassTableTd>
                        <ClassTableTd>1만큼 증가/감소</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>비교</ClassTableTd>
                        <ClassTableTd>{`==, ≠, <, >, ≥, ≤, instanceof`}</ClassTableTd>
                        <ClassTableTd>이항</ClassTableTd>
                        <ClassTableTd>boolean</ClassTableTd>
                        <ClassTableTd>값의 비교</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>논리</ClassTableTd>
                        <ClassTableTd>!, &, |, &&, ||</ClassTableTd>
                        <ClassTableTd>단항, 이항</ClassTableTd>
                        <ClassTableTd>boolean</ClassTableTd>
                        <ClassTableTd>논리 부정, And, or</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>조건</ClassTableTd>
                        <ClassTableTd>(조건식)?A:B</ClassTableTd>
                        <ClassTableTd>삼항</ClassTableTd>
                        <ClassTableTd>다양</ClassTableTd>
                        <ClassTableTd>
                          조건식에 따라 A 또는 B 중 선택
                        </ClassTableTd>
                      </ClassTableTr>
                    </ClassTable>
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>이항 연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    이항 연산자는 피연산자가 두 개인 연산자를 말합니다.
                    <br />
                    산술 연산자, 문자열 연결 연산자, 대입연산자, 비교 연산자,
                    논리 연산자, 비트 논리 연산사, 비트 이동 연산자 등이
                    있습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>산술 연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    산술연산자는 사칙연산을 다루는 연산자로 가장 기본적이면서
                    가장 많이 사용되는 연산자 중 하나 입니다.
                    <ClassContentsTextTab>
                      - 명시적 형변환 : 데이터의 자료형을 다른 자료형으로 바꾸는
                      것
                      <br />
                      - 묵시적 현변환 : 프로그램 실행 도중 자동으로 일어나는
                      형변환
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <Java_02_03_Code01 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>Nan과 Infinity 연산</ClassContentsTitle3>
                  <ClassContentsText>
                    /또는 % 연산자를 사용 할 때는 주의 할 점이 있습니다.
                    <br />
                    좌측 피연산자가 정수 타입인 경우 나누는 수인 우측 연산자는
                    0을 사용할 수 없습니다.
                    <br />
                    5 / 0.0 → Infinity (무한대)
                    <br />
                    5 % 0.0 → NaN (Not a Number)
                    <br />
                    <br />
                    <Java_02_03_Code02 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    연산자 우선순위와 결합 방향
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTable style={{ textAlign: "center" }}>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>우선순위</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>연산자</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>결합 방향</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>설명</b>
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>1</ClassTableTd>
                        <ClassTableTd>() []</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>
                          괄호, 배열 인덱스, 멤버 선택
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>2</ClassTableTd>
                        <ClassTableTd>
                          ++ -- ~ ! +(양수) -(음수) (type)
                        </ClassTableTd>
                        <ClassTableTd>오른쪽에서 왼쪽</ClassTableTd>
                        <ClassTableTd>
                          증감, 비트 NOT, 논리 NOT, 양수, 음수, 형 변환
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>3</ClassTableTd>
                        <ClassTableTd>* / %</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>곱셈, 나눗셈, 나머지</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>4</ClassTableTd>
                        <ClassTableTd>+ -</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>덧셈, 뺄셈</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>5</ClassTableTd>
                        <ClassTableTd>{`<< >> >>>`}</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>
                          비트 시프트(좌/우측), 채움 없는 우측 시프트
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>6</ClassTableTd>
                        <ClassTableTd>{`< > <= >= instanceof`}</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>비교 연산자 및 instanceof</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>7</ClassTableTd>
                        <ClassTableTd>== !=</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>
                          등호(동등성), 부정 등호(부정 동등성)
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>8</ClassTableTd>
                        <ClassTableTd>&</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>비트 AND</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>9</ClassTableTd>
                        <ClassTableTd>^</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>비트 XOR</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>10</ClassTableTd>
                        <ClassTableTd>|</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>비트 OR</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>11</ClassTableTd>
                        <ClassTableTd>&&</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>논리 AND</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>12</ClassTableTd>
                        <ClassTableTd>||</ClassTableTd>
                        <ClassTableTd>왼쪽에서 오른쪽</ClassTableTd>
                        <ClassTableTd>논리 OR</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>13</ClassTableTd>
                        <ClassTableTd>? :</ClassTableTd>
                        <ClassTableTd>오른쪽에서 왼쪽</ClassTableTd>
                        <ClassTableTd>삼항 연산자</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>14</ClassTableTd>
                        <ClassTableTd>{`= += -= *= /= %= &= ^= |= <<= >>= >>>=`}</ClassTableTd>
                        <ClassTableTd>오른쪽에서 왼쪽</ClassTableTd>
                        <ClassTableTd>할당 연산자</ClassTableTd>
                      </ClassTableTr>
                    </ClassTable>
                    <br />
                  </ClassContentsText>
                  <ClassContentsImage
                    style={{
                      width: "80%",
                      height: "500px",
                      backgroundImage: `url(${"/images/study/java/java_02_03_01.png"})`,
                    }}
                  />
                  <ClassContentsTitle2>대입 연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    대입 연산자는 변수에 값을 대입할 때 사용하는 이항연산자이며,
                    피연산자들의 결합 방향은 오른쪽에서 왼쪽 입니다.
                    <br />
                    <ClassContentsTextTab>
                      - 값을 대입하는 연산자 (= 같다는 의미가 아니고 대입한다는
                      의미에 유의 해야 함)
                      <br />
                      - 대입연산자와 다른 연산자를 결합하여 다양한 복합 대입
                      연산자를 제공 합니다.
                      <br />
                      - 값의 대입은 항상 뒤에서 앞으로 대입 한다.
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <Java_02_03_Code03 />
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>증감 연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    증감 연산자는 피연산자를 1씩 증가 혹은 감소 시킬 때 사용하는
                    연산자 입니다.
                    <br />
                    단항연산자 입니다.
                    <br />
                    <br />
                    <Java_02_03_Code04 />
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>비교연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    비교 연산자는 왼쪽의 피연산자와 오른쪽의 피연산자를
                    비교하여, 어느 쪽이 더 큰지, 작은지, 또는 서로 같은지를
                    판단합니다.
                    <br />
                    비교 연산자는 모두 두 개의 피연산자를 가지는 이항
                    연산자이며, 피연산자들의 결합 방향은 왼쪽에서 오른쪽입니다.
                    <br />
                    <br />
                    <Java_02_03_Code05 />
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>논리연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    - && : AND 연산자 이며 A이고 B, 즉 A와 B가 모두 만족해야
                    참이된다.
                    <br />
                    - || : OR 연산자이며 A이거나 B, 즉 A와 B중 한개만 만족하면
                    참이 된다.
                    <br />
                    - ! : NOT연산자이며, 현재의 조건을 부정하므로 반대가 된다.
                    <br />
                    - 논리연산자만 쓰이는 경우는 없으며, 비교 연산자와 함께
                    쓰인다.
                    <br />
                    <br />
                    <Java_02_03_Code06 />
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>삼항 연산자</ClassContentsTitle2>
                  <ClassContentsCodeBox>
                    👉 조건식 ? 참인 경우 수행 : 거짓인 경우 수행
                  </ClassContentsCodeBox>
                  <ClassContentsText>
                    3개의 피연산자를 필요로 하는 연산자 입니다.
                    <br />
                    프론트앤드 개발 시 조건문 보다 더 사용 빈도가 높습니다.
                    <br />
                    if ~ else 문 보다 간결 합니다.
                    <br />
                    <br />
                    <Java_02_03_Code07 />
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>문자열 결합 연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    문자열 결합 연산자인 +는 문자열을 서로 결합하는 연산자
                    입니다. 피연산자 중 한쪽이 문자열이면 + 연산자는 문자열의
                    결합 연산자로 사용 됩니다.
                  </ClassContentsText>
                  <Java_02_03_Code08 />
                  <br />
                  <ClassContentsTitle3>연습문제(1)</ClassContentsTitle3>
                  <ClassContentsText>
                    달력(양력)은 지구가 태양을 공전하는 시간을 기준으로 작성
                    된다.
                    <br />
                    양력에서의 1년은 지구가 태양을 1바퀴 도는데 걸리는 시간이며,
                    시간은 365일 과 1/4만큼 걸린다.
                    <br />
                    <br />
                    <ClassContentsTextTab>
                      <b>[윤년의 조건]</b>
                      <br />
                      - 연도가 4로 나누어 떨어 진다.
                      <br />
                      - 100으로 나누어 떨어지면 연도는 윤년이 아니다.
                      <br />
                      - 400으로 나누어 떨어지면 윤년이다.
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <Java_02_03_Code09 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>연습문제(2)</ClassContentsTitle3>
                  <ClassContentsText>
                    100의 자리 정수를 입력 받아서 3개의 변수에 나누어 대입 하기
                    <br />
                  </ClassContentsText>
                  <Java_02_03_Code10 />
                  <br />
                  <ClassContentsTitle3>연산자 우선순위</ClassContentsTitle3>
                  <ClassContentsText>
                    <Java_02_03_Code11 />

                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>비트 연산자</ClassContentsTitle2>
                  <ClassContentsText>
                    자바(Java)는 비트 연산자를 제공하여 숫자의 비트
                    수준(bit-level) 조작을 할 수 있습니다. 이러한 비트 연산자는
                    정수형 변수들의 비트를 조작하고, 비트 패턴에 대한 다양한
                    연산을 수행할 때 사용됩니다. 자바에서 제공하는 주요 비트
                    연산자는 다음과 같습니다.
                    <br />
                    <br />
                    <ClassContentsCodeBox>
                      💡 비트 연산은 컴퓨터 과학과 프로그래밍에서 다양한 용도로
                      사용되며, 특히 다음과 같은 분야에서 그 활용도가 높습니다:
                      <br />
                      <br />
                      <ClassContentsTextTab>
                        1. <b>성능 최적화</b>: 비트 연산은 CPU가 직접 수행할 수
                        있으며, 대부분의 고급 연산보다 훨씬 빠르게 실행됩니다.
                        이를 통해 메모리 접근, 연산 속도 등을 최적화할 수 있어,
                        성능이 중요한 저수준 프로그래밍(예: 임베디드 시스템,
                        시스템 프로그래밍, 게임 개발)에서 자주 사용됩니다.
                        <br />
                        2. <b>데이터 압축과 암호화</b>: 비트 연산을 사용하여
                        데이터를 압축하고 암호화하는 알고리즘을 구현할 수
                        있습니다. 이러한 알고리즘은 데이터를 효율적으로 저장하고
                        전송하는 데 필요한 비트 패턴을 조작하여 작동합니다.
                        <br />
                        3. <b>네트워킹</b>: IP 주소 처리, 서브네팅 계산 등
                        네트워크 주소를 계산하고 조작하는 데 비트 연산이
                        필수적으로 사용됩니다. 네트워크 프로토콜의 헤더 정보를
                        분석하거나 조작할 때도 비트 연산이 활용됩니다.
                        <br />
                        4. <b>플래그와 설정 관리</b>: 여러 설정이나 상태를
                        나타내는 플래그를 한 변수에 저장하고, 이를 효율적으로
                        관리하기 위해 비트 연산을 사용합니다. 예를 들어, 파일
                        시스템의 권한 설정, 소프트웨어의 구성 옵션 등을 비트로
                        표현하고 조작할 수 있습니다.
                        <br />
                        5. <b>그래픽스 프로그래밍</b>: 비트 연산은 픽셀 데이터를
                        처리하고, 이미지의 비트맵을 조작하는 데 사용됩니다. 예를
                        들어, 이미지 필터링, 색상 조정, 투명도 관리 등에 비트
                        연산이 사용됩니다.
                        <br />
                        6. <b>게임 개발</b>: 게임 상태 관리, 리소스 관리, 충돌
                        감지 등에서 비트 연산을 사용하여 데이터를 효율적으로
                        처리하고 상태를 관리합니다.
                        <br />
                        7. <b>하드웨어 인터페이스와 드라이버 개발</b>: 하드웨어
                        장치의 레지스터를 직접 조작하거나, 특정 하드웨어 기능을
                        활성화/비활성화할 때 비트 연산이 필수적으로 사용됩니다.
                        <br />
                        <br />
                      </ClassContentsTextTab>
                      비트 연산은 이러한 분야에서 데이터를 저수준에서 효율적으로
                      처리하고, 메모리 및 성능 최적화를 달성하기 위해 널리
                      사용됩니다. 비트 연산의 빠른 처리 속도와 정밀한 데이터
                      조작 능력은 프로그래밍에서 매우 유용한 도구입니다.
                    </ClassContentsCodeBox>
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>비트 AND</ClassContentsTitle3>
                  <ClassContentsText>
                    두 비트가 모두 1일 경우에만 1을 반환합니다. 나머지 경우에는
                    0을 반환합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>비트 OR</ClassContentsTitle3>
                  <ClassContentsText>
                    두 비트 중 하나라도 1이면 1을 반환합니다. 두 비트 모두 0일
                    경우에만 0을 반환합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>비트 XOR</ClassContentsTitle3>
                  <ClassContentsText>
                    두 비트가 서로 <b>다를 경우에만 1을 반환</b>하고, 같을
                    경우에는 0을 반환합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>비트 NOT</ClassContentsTitle3>
                  <ClassContentsText>
                    비트의 반전을 수행합니다. 1은 0으로, 0은 1로 변환합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>왼쪽 시프트</ClassContentsTitle3>
                  <ClassContentsText>
                    비트를 왼쪽으로 이동시킵니다. 빈 자리는 0으로 채워집니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>오른쪽 시프트</ClassContentsTitle3>
                  <ClassContentsText>
                    비트를 오른쪽으로 이동시킵니다. 부호 비트로 채워집니다.
                    <br />
                    <br />
                    <ClassContentsCodeBox>
                      👉 <font color="red">비트(bit)</font>
                      <ClassContentsTextTab>
                        - 비트는 컴퓨터의 가장 작은 정보 단위입니다.
                        <br />
                        - 이진(binary) 숫자 시스템으로 표현되며, 0 또는 1의 두
                        가지 값을 가집니다.
                        <br />
                        - 비트는 정보의 여부를 표시하는 데 사용됩니다. 예를
                        들어, 두 가지 상태를 표현할 수 있습니다. (예: 참/거짓,
                        켜짐/꺼짐 등)
                        <br />
                        <br />
                      </ClassContentsTextTab>
                      👉 <font color="red">바이트(byte)</font>
                      <ClassContentsTextTab>
                        - 바이트는 8개의 비트로 구성된 데이터 단위입니다.
                        <br />
                        - 컴퓨터에서 가장 일반적으로 사용되는 데이터 단위 중
                        하나로, 문자나 숫자, 그림, 음악 등 다양한 유형의
                        데이터를 표현하는 데 사용됩니다.
                        <br />
                        - 바이트는 보통 256(2^8)가지의 서로 다른 값을 나타낼 수
                        있습니다.
                        <br />
                        - 예를 들어, ASCII 문자 코드는 1바이트 크기로 표현되며,
                        0부터 255까지의 다양한 문자를 나타낼 수 있습니다.
                        <br />
                      </ClassContentsTextTab>
                    </ClassContentsCodeBox>
                    <br />
                    <Java_02_03_Code12 />
                    <br />
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

export default Java_02_03;
