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

const Java_02_01_M = () => {
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
    navigate("/study/java/02/01");
    window.location.reload();
  };

  const Java_02_01_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int age; // 정수값을 저장할 수 있는 age 변수 선언
double value; // 실수값을 저장 할 수 있는 value 변수 선언
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
abstract  continue  for         new        switch
assert    default   goto        package    synchronized
boolean   do        if          private    this
break     double    implements  protected  throw
byte      else      import      public     throws
case      enum      instanceof  return     transient
catch     extends   int         short      try
char      final     interface   static     void
class     finally   long        strictfp   volatile
const     float     native      super      while
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int 1st;   // 변수명은 숫자로 시작할 수 없다.
int a#;    // 변수명에 특수문자를 사용할 수 없다.
int class; // 키워드를 변수명으로 사용할 수 없다.
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
// 논리형 변수 선언
boolean isTrue;     

// 정수형 변수 선언
byte bNum;
short sNum;
int iNume;
long lNum;

// 문자형 변수 선언
char ch;

// 문자열 변수 선언
String str;

// 실수형 변수 선언
float fNum;
double dNum;


int num1, num2;                  // 같은 타입의 변수를 동시에 선언함.
double num3 = 3.14;              // 선언과 동시에 초기화함.
double num4 = 1.23, num5 = 4.56; // 같은 타입의 변수를 동시에 선언하면서 초기화함.

int hour = 3;
int minute = 5;
System.out.println(hour + "시간" + minute + "분");

int test;
System.out.println(test); // 선언 이후 초기화 없이 사용하였으므로 에러 발생
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class NameCard{
	String name;
	int age;
	String addr;
	String eMail;
	String phoneNum;
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int score = 90;
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
		int value = 10;  // 로컬 변수 { }
		int sum = value + 20;
		System.out.printf("%d", sum);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
		int n = 20;
		if (n > 10) {
			int m = 30; // 조건문 내의 지역 변수
			m = n - 10;
		}
		int k = n + m;
	}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
        byte num1 = 127;
        byte num2 = -128;

        num1++; // 127 + 1
        num2--; // -128 - 1

        System.out.println(num1); // -128
        System.out.println(num2); // 127
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
char ch = 'A'; // 단일 문자를 저장
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CharacterEx {
    public static void main(String[] args) {
        char ch1 = 'A';
        System.out.println(ch1);  // 문자 출력
        System.out.println((int)ch1); // 문자에 대한 정수(ASCII)값 출력

        char ch2 = 66;
        System.out.println(ch2);

        System.out.printf("%c\n", ch2);
        System.out.printf("%d\n", (int)ch2);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
float height = 175.5f;
double pi = 3.141592653589793;
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Float {
    public static void main(String[] args) {
        double num1 = 0.1;
        for(int i = 0; i < 1000; i++) {
            num1 += 0.1;
        }
        System.out.println(num1);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
final int AGES = 30;
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.Scanner;

public class Final {
    public static void main(String[] args) {
        final double TAX_RATE = 0.10;
        Scanner sc = new Scanner(System.in);
        System.out.print("수입을 입력 하세요 : ");
        int income = sc.nextInt();
        System.out.println("당신의 내야 할 세금은 " + income * TAX_RATE);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CharacterEx {
    final static String KH_DOMAIN = "http://128.129.133.12";
    final static String PORT_NUM = "8111";
    public static void main(String[] args) {
        System.out.println(KH_DOMAIN);
        System.out.println(PORT_NUM);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
char ch = 'A';
int num = 10;
final double PI = 3.14;
          `}
        </code>
      </pre>
    );
  };

  const Java_02_01_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int num1 = 1, num2 = 4;
double result1 = num1 / num2;  
double result2 = (double) num1 / num2;  // 명시적 형변환

System.out.println(result1);
System.out.println(result2);

System.out.println(""+ result1 + 10); // 연산자 우선순위에 의해서 문자열로 간주 됩니다.
System.out.println(result1 + 10 + "10"); // 먼저 숫자형 타입이 계산되고 문자열이추가 됩니다.
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
            02. 기본 자료형과 연산자
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            01. 변수와 자료형
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsText>
          기계가 정보를 이해하는 방법은 사람과 다를 수밖에 없습니다. 우리가
          평소에 사용하는 숫자나 문자를 컴퓨터 내부에 어떻게 저장하고
          표현하는지, 그리고 이러한 값을 어떻게 컴퓨터가 이해할 수 있게하는지
          알아보겠습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>
          컴퓨터가 데이터를 표현하는 방법
        </ClassContentsTitle1>
        <hr />
        <ClassContentsTitle2>컴퓨터에서 수를 표현하는 방법</ClassContentsTitle2>
        <ClassContentsText>
          우리가 사용하는 모든 데이터는 컴퓨터 내부에서 0과 1로 이루어져
          있습니다. 컴퓨터 내부를 구성하는 반도체가 0과 1로만 표현 할 수 있기
          때문 입니다. 이렇게 0 또는 1로 표현할 수 있는 최소 단위를
          비트(bit)라고 하며, 8비트가 모이면 1바이트(Byte)가 됩니다.
        </ClassContentsText>
        <ClassContentsTitle3>10진수와 2진수</ClassContentsTitle3>
        <ClassContentsText>
          우리가 일상 생활에서 사용하는 숫자는 0부터 9까지 한 자릿수이고
          10부터는 두 자릿수가 됩니다. 이를 10진수라고 합니다. 하지만 컴퓨터
          내부에서는 모든 데이터를 0과 1로 표현해야 합니다. 이 때 사용하는 것이
          바로 2진수 입니다. 2진수란 0과 1 두 개로만 표현되는 수를 말합니다.
          <br />
          <br />
          <ClassTableBox>
            <ClassTable style={{ textAlign: "center" }}>
              <ClassTableTr>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>10진수</b>
                </ClassTableTd>
                <ClassTableTd>0</ClassTableTd>
                <ClassTableTd>1</ClassTableTd>
                <ClassTableTd>2</ClassTableTd>
                <ClassTableTd>3</ClassTableTd>
                <ClassTableTd>4</ClassTableTd>
                <ClassTableTd>5</ClassTableTd>
                <ClassTableTd>6</ClassTableTd>
                <ClassTableTd>7</ClassTableTd>
                <ClassTableTd>8</ClassTableTd>
                <ClassTableTd>9</ClassTableTd>
                <ClassTableTd>10</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>2진수</b>
                </ClassTableTd>
                <ClassTableTd>0</ClassTableTd>
                <ClassTableTd>1</ClassTableTd>
                <ClassTableTd>10</ClassTableTd>
                <ClassTableTd>11</ClassTableTd>
                <ClassTableTd>100</ClassTableTd>
                <ClassTableTd>101</ClassTableTd>
                <ClassTableTd>110</ClassTableTd>
                <ClassTableTd>111</ClassTableTd>
                <ClassTableTd>1000</ClassTableTd>
                <ClassTableTd>1001</ClassTableTd>
                <ClassTableTd>1010</ClassTableTd>
              </ClassTableTr>
            </ClassTable>
          </ClassTableBox>
          <br />
          컴퓨터 내부에서는 숫자뿐만 아니라 문자도 2진수로 표현합니다. 예를 들어
          A라는 문자가 있을 때 A는 숫자 65라는 값으로 표현하도록 약속되어
          있습니다. 이를 2진수로 표현하면 1000001로 표현 됩니다. 이 값을 A
          문자의 아스키(ASCII)값이라고 합니다.
        </ClassContentsText>
        <ClassContentsTitle3>부호 있는 수를 표현하는 방법</ClassContentsTitle3>
        <ClassContentsText>
          컴퓨터에서 숫자를 표현 할 때 양수와 음수를 어떻게 표현할까요? 컴퓨터는
          숫자를 0과 1로만 표현할 수 있기 때문에 부호 또한 0과 1로 표현합니다.
          부호를 나타내는 비트는 맨 앞에 붙이며 부호 비트(MSB)라고 부릅니다.
          부호 비트가 0이면 양수, 1이면 음수를 나타냅니다.
        </ClassContentsText>
        <ClassContentsTitle3>2의 보수 표기법</ClassContentsTitle3>
        <ClassContentsText>
          자바에서 음수는 2의 보수 표기법을 사용하여 표현 합니다.
          <ClassContentsTextTab>
            1. 음수의 절댓값을 2진수로 나타냅니다.
            <br />
            2. 모드 비트를 반전시킵니다.
            <br />
            3. 1을 더합니다.
            <br />
            <br />
            <ClassContentsCodeBox>
              👉 예를 들어, int 타입으로 -3을 표현하는 경우:
              <ClassContentsTextTab></ClassContentsTextTab>
              1. 3을 이진수로 나타냅니다: 0000 0000 0000 0000 0000 0000 0000
              0011
              <br />
              2. 모든 비트를 반전시킵니다: 1111 1111 1111 1111 1111 1111 1111
              1100
              <br />
              3. 1을 더합니다: 1111 1111 1111 1111 1111 1111 1111 1101
              <br />
            </ClassContentsCodeBox>
            <br />
          </ClassContentsTextTab>
          ☘️  자바에서 음수를 2의 보수로 표기하는 이유는 컴퓨터 시스템에서 산술
          연산을 간단하고 효율적으로 처리하기 위해서입니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>변수란?</ClassContentsTitle1>
        <hr />
        <ClassContentsText>
          변수란? 값을 저장할 수 있는 <b>메모리 공간에 이름을 붙여 놓은 것.</b>
          <br />
          프로그램은 변수를 통해 특정 번지에 값을 저장하고 읽을 수 있습니다.
          <br />
          대부분의 프로그래밍 언어는 메모리 공간에 저장할 위치를 운영체제가
          결정하지만 <b>자바는 JVM</b>이 합니다.
          <br />
          (JVM이 운영체제로 부터 대량의 메모리를 미리 할당 받아두고 이를 재
          할당)
          <br />
          자바는 데이터형이 존재하는 언어 이기 때문에 선언시 사용 데이터에 맞는
          자료형을 선언해야 합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>변수의 선언</ClassContentsTitle2>
        <ClassContentsText>
          변수를 사용하기 위해서는 먼저 변수를 선언해야 합니다. 변수의 선언은
          어떤 타입의 데이터를 저장할 것인지 그리고 변수 이름이 무엇인지를
          결정해야 합니다.
          <br />
          <br />
          <Java_02_01_Code01 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle2>변수의 생성 규칙</ClassContentsTitle2>
        <ClassContentsText>
          자바에서는 변수 뿐만 아니라 클래스, 매소드 등의 이름을 짓는데 반드시
          지켜야 하는 공통된 규칙이 있습니다.
          <ClassContentsTextTab>
            1. 변수의 이름은 **영문자(대소문자), 숫자, 언더스코어(_),
            달러($)로만 구성**할 수 있습니다.
            <br />
            2. 변수의 이름은 숫자로 시작할 수 없습니다.
            <br />
            3. 변수의 이름 사이에는 공백을 포함할 수 없습니다.
            <br />
            4. 변수의 이름으로 자바에서 미리 정의된 키워드(keyword)는 사용할 수
            없습니다.
            <br />
            5. **camel 표기법**을 따릅니다.
            <br />
            <br />
          </ClassContentsTextTab>
          <font color="#2c79c1">
            <i>
              변수의 이름은 해당 변수에 저장될 데이터의 의미를 잘 나타내도록
              짓는 것이 좋습니다.
            </i>
          </font>
          <br />
          <br />
          <b>[참고] 자바의 키워드</b>
          <br />
          <br />
          <Java_02_01_Code02 />
          <br />
          <br />
          <b>[참고] 변수명을 잘못 사용한 경우</b>
          <br />
          <br />
          <Java_02_01_Code03 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>변수의 선언과 초기화</ClassContentsTitle2>
        <ClassContentsText>
          자바에서는 변수를 사용하기 전에 반드시 먼저 변수를 선언하고 초기화해야
          합니다.
          <br />
          변수를 선언하는 방법에는 다음과 같이 두 가지 방법이 있습니다.
          <br />
          <ClassContentsTextTab>
            1. 변수의 선언만 하는 방법
            <br />
            2. 변수의 선언과 동시에 초기화하는 방법
            <br />
            3. 값 대입 하기
            <br />
          </ClassContentsTextTab>
        </ClassContentsText>
        <ClassContentsTitle3>선언 예시</ClassContentsTitle3>

        <Java_02_01_Code04 />
        <br />
        <ClassContentsTitle3>사용자 정의 자료형</ClassContentsTitle3>
        <ClassContentsText>
          - class는 대표적인 사용자 정의 자료형 입니다.
          <br />
          - 내부에 다양한 메소드를 포함 할 수 있습니다.
          <br />
          <br />
          <Java_02_01_Code05 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>값 저장</ClassContentsTitle2>
        <ClassContentsText>
          <b>변수에 값을 저장 할 때는 대입연산자(=)를 사용</b> 합니다.
          <br />
          수학에서 등호(=) 같다는 표시이지만 프로그래밍 언어에서는 오른쪽 값을
          왼쪽 변수에 저장 한다는 의미 입니다.
          <br />
          <br />
          <Java_02_01_Code06 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>변수의 사용 범위</ClassContentsTitle2>
        <ClassContentsText>
          - 변수는 중괄호 {} 블록 내에서 선언되고 사용 됩니다. (변수는 선언된
          블록 내에서만 사용이 가능 합니다.)
          <br />
          <br />
          <Java_02_01_Code07 />
          <br />
          <br />
          - int m이라는 변수가 블록 내에서 선언되어 사용되었으면 블록 밖에서는
          존재 할 수 없으므로 에러 발생
          <br />
          <br />
          <Java_02_01_Code08 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>
          변수가 저장되는 공간의 특성, 자료형
        </ClassContentsTitle1>
        <hr />
        <ClassContentsTitle2>변수와 메모리</ClassContentsTitle2>
        <ClassContentsText>
          변수는 컴퓨터 내부의 메모리 공간에 저장됩니다. 메모리는 프로그램이
          실행되는 작업 공간 입니다. 즉 int level; 문장을 선언하면, 메모리에
          4바이트 크기의 공간이 level 이라는 이름으로 할당됩니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>자료형의 종류 및 표현 범위</ClassContentsTitle2>
        <ClassContentsImage
          style={{
            backgroundImage: `url(${"/images/study/java/java_02_01_01.png"})`,
          }}
        />
        <br />
        <ClassContentsTitle2>기본 자료형의 종류</ClassContentsTitle2>
        <ClassContentsText>
          자바에서 제공하는 자료형은 <b>기본 자료형과 참조 자료형</b>이
          있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>정수 자료형</ClassContentsTitle3>
        <ClassContentsText>
          부호를 가지며, 소수가 없습니다.
          <br />
          정수형 데이터 타입을 결정 할 때는 사용하고자 하는 데이터의 최대크기를
          고려해서 결정해야 합니다.
          <br />
          해당 타입이 표현 할 수 있는 범위를 벗어나면 오버플로우가 발생해 전혀
          다른 값이 저장 됩니다.
          <br />
          <br />
          <ClassContentsTextTab>
            -{" "}
            <font color="red">
              <b>byte</b>
            </font>{" "}
            : 8비트, 부호 있는 정수, -128에서 127까지의 값 저장 가능
            <br />-{" "}
            <font color="red">
              <b>short</b>
            </font>{" "}
            : 16비트, 부호 있는 정수, -32,768에서 32,767까지의 값 저장 가능
            <br />-{" "}
            <font color="red">
              <b>int</b>
            </font>{" "}
            : 32비트, 부호 있는 정수, -2^31에서 2^31-1까지의 값 저장 가능
            <br />-{" "}
            <font color="red">
              <b>long</b>
            </font>{" "}
            : 64비트, 부호 있는 정수, -2^63에서 2^63-1까지의 값 저장 가능
            <br />
            <br />
          </ClassContentsTextTab>
          <Java_02_01_Code09 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>문자 자료형</ClassContentsTitle3>
        <ClassContentsText>
          <ClassContentsTextTab>
            -{" "}
            <b>
              컴퓨터는 0과 1로만 표현 할 수 있으므로 문자 역시 컴퓨터 내부에서
              표현 할 때 0과 1의 조합
            </b>
            <br />
            - 어떤 문자를 컴퓨터 내부에서 표현하려면 특정 정수 값으로 정하자고
            약속
            <br />
            - 예를 들어 A를 얼마로 표현할 것인지 약속하는데, 이런 코드 값을 모안
            둔 것을 ‘문자 세트’라고 하고 문자를 정해진 코드 값으로 변환하는 것을
            ‘문자 인코딩’이라고 합니다. 반대로 코드 값을 다시 문자로 변환하는
            것을 ‘디코딩’이라고 합니다.
            <br />
            <br />
          </ClassContentsTextTab>
          프로그래밍 언어에서 가장 기본이 되는 문자 인코딩은 아스키(ASCII)
          코드이며, 주로 C언어에서 사용하는 방식 입니다.{" "}
          <b>
            아스키(ASCII) 코두 방식은 1바이트로 영문자, 숫자, 특수문자를
            표현하는 방식
          </b>
          이므로 한글 등 여러나라의 문자를 표시 할 수 없습니다.
          <br />
          <br />
          <ClassContentsCodeBox>
            👉 <b>ASCII ?</b>
            <br />
            <ClassContentsTextTab>
              미국정보교환표준부호(영어: American Standard Code for Information
              Interchange), 또는 줄여서 ASCII( /ˈæski/, 아스키)는 영문 알파벳을
              사용하는 대표적인 문자 인코딩이다. 아스키는 컴퓨터와 통신 장비를
              비롯한 문자를 사용하는 많은 장치에서 사용되며, 대부분의 문자
              인코딩이 아스키에 기초를 두고 있다.
            </ClassContentsTextTab>
          </ClassContentsCodeBox>
          <br />
          <br />
          자바에서 문자(char)는 16비트 유니코드(Unicode) 문자를 나타내는 데
          사용됩니다.
          <br />
          <br />
          <Java_02_01_Code10 />
          <br />
          <Java_02_01_Code11 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>실수 자료형</ClassContentsTitle3>
        <ClassContentsImage
          style={{
            backgroundImage: `url(${"/images/study/java/java_02_01_02.png"})`,
          }}
        />
        <ClassContentsText>
          - 자바에서 실수는 부동소수점 숫자로 표현 (지수와 가수를 구분하여
          표현하는 방식)
          <br />
          - 부동소수점은 정수부와 소수부로 구성된 숫자를 나타내는 방식(두 가지
          부동소수점 자료형 제공)
          <br />
          - 컴퓨터에서 실수를 표현하는 방법은 정수에 비해 훨씬 복잡
          <br />
          - 부동 소수점 방식을 사용하며, 고정 소수점 방식에 비해 훨씬 더 많은
          범위까지 표현 가능
          <br />
          - 컴퓨터에서 실수를 표현하는 방법은 정확한 값이 아니라 언제자 근사치를
          표현하므로 오차가 발생
          <br />
          - 부동소수점은 정수부와 소수부로 구성된 숫자를 나타내는 방식
          <br />
          <br />
          <Java_02_01_Code12 />
          <br />
          1. float : <br />
          <ClassContentsTextTab>
            - 32비트 크기를 가지며 단정밀도 부동소수점을 표현합니다.
            <br />
            - 숫자 뒤에 f`나 F를 붙여서 표시합니다.
            <br />
            - 예시: float num = 3.14f;
            <br />
          </ClassContentsTextTab>
          2. double : <br />
          <ClassContentsTextTab>
            - 64비트 크기를 가지며 배정밀도 부동소수점을 표현합니다.
            <br />
            - 기본적으로 실수 리터럴은 double 자료형으로 간주됩니다.
            <br />
            - 예시: double value = 123.456;
            <br />
          </ClassContentsTextTab>
          실수를 표현하는 방식에서는 반올림 오차와 같은 부동소수점 연산에 따르는
          정확도 제한에 주의
          <br />
          이러한 이유로 금융 연산과 같이 정확한 연산이 필요한 경우에는
          부동소수점 자료형 대신 정수 연산을 고려하는 것이 좋습니다.
          <br />
          <br />
          <br />
          <br />
          <font color="red">
            <b>부동 소수점 방식의 오류</b>
          </font>
          <br />
          지수와 가수로 나타내는 부동 소수점 방식은 지수로 표현되는 값이 0을
          나타낼 수 없습니다. 따라서 부동 소수점 값을 연산하면 약간의 오차가
          발생할 수 있습니다.
          <br />
          <br />
          <Java_02_01_Code13 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>상수와 리터럴</ClassContentsTitle1>
        <hr />
        <ClassContentsTitle2>상수(constant)</ClassContentsTitle2>
        <ClassContentsText>
          - 상수(constant)란 변수와 마찬가지로 데이터를 저장할 수 있는 메모리
          공간을 의미
          <br />
          - 상수가 변수와 다른 점은 프로그램이 실행되는 동안 메모리에 저장된
          데이터를 변경할 수 없다는 점<br />- 자바에서는{" "}
          <b>final 키워드를 사용하여 선언</b>
          <br />
          - 상수 이름은 관례상 대문자를 주로 사용하고, 여러 단어를 연결하는
          경우에 _기호를 사용
          <br />
          <br />
        </ClassContentsText>
        <Java_02_01_Code14 />
        <Java_02_01_Code15 />
        <br />
        <ClassContentsTitle2>상수를 사용하면 편리한 이유</ClassContentsTitle2>
        <ClassContentsText>
          프로그램 내부에서 반복적으로 사용하고, 변하지 않아야 하는 값을 상수로
          선언하여 사용하면 좋습니다. <br />
          <br />
          <Java_02_01_Code16 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>리터럴</ClassContentsTitle2>
        <ClassContentsText>
          리터럴이한 프로그램에서 사용하는 모든 숫자, 문자, 논리값을 일컫는
          말입니다.
          <br />
          아래 변수에 대입되는 ‘A’, 10, 3.14와 같은 문자와 숫자를{" "}
          <b>리터럴 혹은 리터럴 상수</b>라고 합니다.
          <br />
          <b>
            리터럴은 프로그램이 시작 할 때 시스템에 같이 로딩되어 특정 메모리
            공간인 상수 풀
          </b>
          에 놓입니다.
          <br />
          <br />
          <Java_02_01_Code17 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>형 변환</ClassContentsTitle1>
        <hr />
        <ClassContentsTitle2>형 변환이란?</ClassContentsTitle2>
        <ClassContentsText>
          하나의 타입을 다른 타입으로 바꾸는 것을 타입 변환이라고 합니다.
          <br />
          자바에서는 다른 타입끼리 연산의 경우 모두 같은 타입으로 변환이 후
          수행이 됩니다.
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>묵시적 형 변환</ClassContentsTitle2>
        <ClassContentsText>
          자동 타입 변환이라고도 하며 컴파일러가 유리한 방향으로 형을 변환
          합니다.
        </ClassContentsText>
        <ClassContentsTitle2>명시적 형 변환</ClassContentsTitle2>
        <ClassContentsText>
          개발자가 의도를 명확한 목적을 가지고 형을 변환하는 것을 의미 합니다.
          <br />
          <br />
          <Java_02_01_Code18 />
          <br />
          <br />
          <ClassContentsTitle3>타입 변환 메소드</ClassContentsTitle3>
          <font color="red">
            <i>Integer.parseInt(test); </i>
          </font>
          문자열을 정수 int 타입으로 변환 합니다.
          <br />
          <font color="red">
            <i>Double.parseDouble(test); </i>
          </font>
          문자열을 실수 double 타입으로 변환 합니다.
          <br />
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

export default Java_02_01_M;
