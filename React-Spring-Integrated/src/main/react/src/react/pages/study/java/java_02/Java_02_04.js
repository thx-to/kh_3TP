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
import Java_02_04_M from "./Java_02_04_M";

const Java_02_04 = () => {
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
    navigate("/study/java/02/04");
    window.location.reload();
  };

  const Java_02_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
if (조건식) {
    조건식의 결과가 참일 때 실행하고자 하는 명령문;
}
이 부분은 조건식을 만족하거나 만족하거나 공통으로 수행 됩니다.
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.print("정수를 입력 하세요 : ");
Scanner sc = new Scanner(System.in);
int a = sc.nextInt()
if (a >= 0) {
	System.out.println("양수 입니다.");
} else {
	System.out.println("음수 입니다.");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
if (조건식) {
	조건식이 참일 때 실행될 문장
} else if (조건식) {
	첫번째 조건식이 거짓이고 현재의 조건이 참인 경우 실행 될 문장
} else {
	조건식이 거짓일 때 실행 될 문장
} 
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Scanner sc = new Scanner(System.in); // 키 입력 받기 위해 스캐너 객체 생성
  System.out.print("정수를 입력 하세요 : ");
  int number = sc.nextInt(); // 키보드 입력을 정수형 변수에 담음
  if(number > 100) {
      System.out.println(number + "는 100보다 커요");
  } else if(number < 100) {
      System.out.println(number + "는 100보다 작아요.");
  } else {
      System.out.println(number + "는 100과 같아요.");
  }
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.Scanner;

public class condition {
    public static void main(String[] args) {
        System.out.print("문자를 입력 하세요 : ");
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        if (ch >= 'a' && ch <= 'z') {
            System.out.println("알파벳 소문자 입니다.");
        } else if(ch >= 'A' && ch <= 'Z') {
            System.out.println("알파벳 대문자 입니다.");
        } else {
            System.out.println("알파벳이 아닙니다.");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
switch(변수) {
	case 값 :
		실행문
		....
		break;  // switch문을 탈출 합니다.
	case 값 :
		....
		break;
	default:
		나머지 조건에 해당
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class SwitchEx1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("계절을 입력 하세요 : ");
        String season = sc.next();
        switch(season) {
            case "spring" : // 해당 조건이 실행 됨
                System.out.println("꽃이 피는 봄이 왔어요^^");
                break; // 해당 조건을 종료
            case "summer" :
                System.out.println("무더운 여름 입니다.");
                break;
            case "fall":
            case "autumn" :
                System.out.println("쓸쓸한 가을 입니다.");
                break;
            case "winter":
                System.out.println("아직 겨울이네요ㅠㅠㅠㅠㅠㅠ");
                break;
            default :
                System.out.println("계절을 잘 못 입력 했습니다.");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        int x, y;
        char op;
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        op = sc.next().charAt(0);
        y = sc.nextInt();
        switch(op) {
            case '+' :
                System.out.printf("SUM : %d\n", x + y);
                break;
            case '-' :
                System.out.printf("SUB : %d\n", x - y);
                break;
            case '*' :
                System.out.printf("MUL : %d\n", x * y);
                break;
            case '/' :
                System.out.printf("DIV : %d\n", x / y);
                break;
            default :
                System.out.println("조건식이 없습니다.");
        }
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class ScoreEx1 {
    public static void main(String[] args) {
        // 입력을 위한 스캐너 생성
        Scanner sc = new Scanner(System.in);
        // 입력을 받아서 정수형 변수에 대입
        // 조건문을 만드는데 우선, 0 ~ 100 사이의 정상 적인 입력 인지 확인
        while(true) {
            System.out.print("성적을 입력 하세요 : ");
            int score = sc.nextInt();
            if(score < 0 || score > 100) continue;
            if(score >= 90) System.out.println("A");
            else if(score >= 80) System.out.println("B");
            else if(score >= 70) System.out.println("C");
            else if(score >= 60) System.out.println("D");
            else System.out.println("F");
            break;
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
       int num;
       int a, b, c;
       System.out.print("세자리 정수 입력 : ");
       Scanner sc = new Scanner(System.in);
       num = sc.nextInt();
       a = num / 100;
       b = (num % 100) / 10;
       c = num % 10;

       if (a > b) {
           System.out.println(Math.max(a, c));
       } else {
           System.out.println(Math.max(b,c));
       }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
[이름]님.
[계절에 맞는 인사말]
아래와 일정으로 [제목]를 진행하고자 하오니 오셔서 자리를 빛내 주시기 바랍니다.

===== 행사 안내 =====
행사 안내 : [제목]
일시 : [년]년 [월]월 [일]일
시간 : [시간]시
          `}
        </code>
      </pre>
    );
  };

  const Java_02_04_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 행사안내메일;
import java.util.Scanner;
// 사용자로부터 이름, 제목, 날짜(20230817), 시간(17) 정보를 입력 받습니다.
public class GreetingEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("이름 : ");
        String name = sc.nextLine();
        System.out.print("제목 : ");
        String title = sc.nextLine();
        System.out.print("날짜 : ");
        String date = sc.nextLine();
        System.out.print("시간 : ");
        String time = sc.nextLine();

        String month = date.substring(4, 6);
        String greeting = "";
        switch (month) {
            case "01" : greeting = "한파의 연속인 1월 입니다."; break;
            case "02" : greeting = "한파의 연속인 2월 입니다."; break;
            case "03" : greeting = "봄의 기운이 느껴지는 3월 입니다."; break;
            case "04" : greeting = "새싹이 피어나는 4월 입니다."; break;
            case "05" : greeting = "계절의 여왕 5월 입니다."; break;
            case "06" : greeting = "활동하기 좋은 6월 입니다."; break;
            case "07" : greeting = "휴가가 기다려지는 7월 입니다."; break;
            case "08" : greeting = "무더운 8월 입니다."; break;
            case "09" : greeting = "선선한 9월 입니다."; break;
            case "10" : greeting = "천고마비의 계절 10월 입니다."; break;
            case "11" : greeting = "쓸쓸한 늦가을 11월 입니다."; break;
            case "12" : greeting = "한파의 연속인 12월 입니다."; break;
            default: System.out.println("알 수 없는 월 입니다.");
        }
        System.out.println(name + "님.");
        System.out.println(greeting);
        System.out.println("아래와 일정으로" + title +"를 진행하고자 하오니 오셔서 자리를 빛내 주시기 바랍니다.\n");
        System.out.println("=".repeat(5) + "행사 안내" + "=".repeat(5));
        System.out.println("날짜 : " + date.substring(0, 4) + "년 " + month + "월 " + date.substring(6,8) + "일");
        System.out.println("시간 : " + time + "시");
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
        <Java_02_04_M />
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
                04. 조건문
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
                  <ClassHeaderTitle>조건문</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>제어문이란?</ClassContentsTitle1>
                  <ClassContentsText>
                    프로그램이 원하는 결과를 얻기 위해서는 프로그램의 순차적인
                    흐름을 제어해야만 할 경우가 생깁니다.
                    <br />
                    이때, 사용하는 명령문을 제어문이라고 하며, 이러한 제어문에는{" "}
                    <b>조건문, 반복문</b> 등이 있습니다.
                    <br />
                    이러한 제어문에 속하는 명령문들은 중괄호{}로 둘러싸여
                    있으며, 이러한 중괄호 영역을 블록(block)이라고 합니다.
                    <br />
                    <br />
                    <ClassContentsTextTab>
                      - <i>순차 구조 : 명령이 순차적으로 수행되는 구조</i>
                      <br />-{" "}
                      <i>
                        선택 구조 : 입력 받은 값에 따라 선택하여 실행되는 구조
                        (조건문)
                      </i>
                      <br />-{" "}
                      <i>
                        반복 구조 : 입력 값에 따라 반복 실행되는 구조 (반복문)
                      </i>
                      <br />
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>조건문</ClassContentsTitle2>
                  <ClassContentsText>
                    조건문은 주어진 조건식의 결과에 따라 별도의 명령을
                    수행하도록 제어하는 명령문입니다. <br />
                    조건문 중에서도 가장 기본이 되는 명령문은 바로 if 문입니다.
                    <br />
                    자바에서 사용하는 대표적인 조건문의 형태는 다음과 같습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>if ~ else 문</ClassContentsTitle3>
                  <ClassContentsText>
                    if 문은 조건식의 결과가 참(true)이면 주어진 명령문을
                    실행하며, 거짓(false)이면 아무것도 실행하지 않습니다.
                    <br />
                    <br />
                    <Java_02_04_Code01 />
                    <br />
                    <Java_02_04_Code02 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    if ~ else if ~ else 문
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Java_02_04_Code03 />

                    <br />
                    <br />
                    <b>[예제1]</b>
                    <br />
                    <br />
                    <Java_02_04_Code04 />

                    <br />
                    <br />
                    <b>[예제2]</b>
                    <br />
                    <br />
                    <Java_02_04_Code05 />

                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>switch문</ClassContentsTitle2>
                  <ClassContentsText>
                    switch문은 if문과 마찬가지로 조건 제어문 입니다. switch문의
                    if문 처럼 조건식이 true일 때 블록 내부의 실행문을 실행하는
                    것이 아니라, 변수가 어떤 값을 갖는냐에 따라 실행문이 선택
                    됩니다.
                    <br />
                    <br />
                    <ClassContentsTextTab>
                      - if문에 비해 코드의 가독성을 높여주며 코드가 간결해
                      집니다.
                      <br />
                      - if문과 달리 조건식을 넣을수가 없고 값만 올 수 있다는
                      부분에 유의해야 합니다. (실수형은 안됨)
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <Java_02_04_Code06 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>스위치문 기본</ClassContentsTitle3>
                  <ClassContentsText>
                    <Java_02_04_Code07 />

                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>계산기 만들기</ClassContentsTitle3>
                  <ClassContentsText>
                    <Java_02_04_Code08 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>연습문제(1)</ClassContentsTitle3>
                  <ClassContentsText>
                    · 시험 성적을 입력 받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~
                    79점은 C, 60 ~ 69점은 D, 나머지는 F를 출력하는 프로그램
                    <br />
                    · 0 ~ 100 사이가 아니면 성적이 잘못 입력 되었다고 출력
                    <br />
                    <br />
                    <b>[선택사항]</b> 성적이 잘못 입력된 경우 다시 입력 받도록
                    수정
                    <br />
                    <br />
                    <Java_02_04_Code09 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>연습문제(2)</ClassContentsTitle3>
                  <ClassContentsText>
                    · 세자리의 정수를 입력 받아 가장 큰 수 출력
                    <br />
                    <br />
                    <Java_02_04_Code10 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>연습문제(3)</ClassContentsTitle3>
                  <ClassContentsText>
                    · 행사 안내 메일 발송하기
                    <br />
                    <br />
                    <hr />
                    <br />
                    <ClassContentsTextTab>
                      1. 사용자로부터 이름, 제목, 날짜(20230817), 시간(17)
                      정보를 입력받습니다.
                      <br />
                      2. 입력된 날짜의 월을 추출하여 해당하는 계절을 판단합니다.
                      <br />
                      3. 계절에 따라 적절한 인사말과 입력된 일정 정보를
                      출력합니다.
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <hr />
                    <br />
                    · 프로그램은 다음과 같은 방식으로 동작해야 합니다.
                    <br />
                    · 1월부터 12월까지의 월 정보를 입력 받습니다.
                    <br />
                    · 입력된 월에 따라 다음과 같은 계절에 맞는 인사말을
                    출력합니다.
                    <br />
                    <ClassContentsTextTab>
                      - 12월, 1월, 2월 → "한파의 연속인 1월 입니다."
                      <br />
                      - 3월 → "봄의 기운이 느껴지는 3월 입니다."
                      <br />
                      - 4월 → "새싹이 피어나는 4월 입니다."
                      <br />
                      - 5월 → "계절의 여왕 5월 입니다."
                      <br />
                      - 6월 → "활동하기 좋은 6월 입니다."
                      <br />
                      - 7월 → "휴가가 기다려지는 7월 입니다."
                      <br />
                      - 8월 → "무더운 8월 입니다."
                      <br />
                      - 9월 → "선선한 9월 입니다."
                      <br />
                      - 10월 → "천고마비의 계절 10월 입니다."
                      <br />
                      - 11월 → "쓸쓸한 늦가을 11월 입니다."
                      <br />
                    </ClassContentsTextTab>
                    · 입력된 이름, 제목, 날짜, 시간 정보와 계절 정보를 이용하여
                    다음과 같은 형식으로 일정 정보를 출력합니다.
                    <br />
                    <br />
                    <b>[힌트]</b>
                    <br />
                    · 문자열의 substring을 이용하면 원하는 문자를 추출 할 수
                    있음
                    <br />
                    <ClassContentsTextTab>
                      - date = “20230817”;
                      <br />
                      - month = date.substring(4, 6); // 인덱스는 0부터 시작,
                      그리고 두번째 인덱스는 미만 개념
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <b>[출력 형식]</b>
                    <br />
                    <br />
                    <Java_02_04_Code11 />
                    <br />
                    <Java_02_04_Code12 />
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

export default Java_02_04;
