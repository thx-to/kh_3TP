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

import Python_ArrowNavigation from "../python_components/Python_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Python_01_08_M = () => {
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
  const handleStudyPython = () => {
    navigate("/study/python");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/python/01/08");
    window.location.reload();
  };

  const Python_01_08_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
i = 10
j = 4
print(i + j)   # 덧셈 : 14
print(i - j)   # 뺄셈 : 6
print(i * j)   # 곱셈 : 40
print(i / j)   # 나눗셈 : 2.5
print(i % j)   # 나머지 : 2
print(i // j)  # 몫 : 2
print(i ** 4)  # 제곱 : 10 * 10 * 10 * 10
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
text = "Python"
print(text + " Programming")  # 문자열 연결
print(text * 3)               # 문자열 반복
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
tax_rate = 0.10
income = int(input("당신의 수입은 얼마입니까? "))
print(f"당신이 내야 할 세금은 {income * tax_rate} 입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
month_pay = float(input("당신의 월 실수령액은 얼마 입니까? "))
print(f"당신의 연봉은 {month_pay * 12 * 1.15:.2f} 입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
num1 = 10
num1 += 2    # num1 = num1 + 2
print(num1)  # 12
num1 -= 2
print(num1)  # 10
num1 *= 2
print(num1)  # 20
num1 //= 2
print(num1)  # 10
num1 %= 2
print(num1)  # 0
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
a = 10
b = 20
print(a > b)
print(a < b)
print(a == b)
print(a != b)
print(a >= b)
print(a <= b)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
x = 10
y = 20

print(x > 5 and y > 15)  # True
print(x > 15 or y > 15)  # True
print(not(x > 15))       # True
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
값 = (조건) and 참일 때의 값 or 거짓일 때의 값
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
num = 100
flag = (num % 2 == 0) and "짝수" or "홀수"
print(flag)  # 짝수
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
result = 5 + 2 * 3
print(result)  # 11 (곱셈이 먼저 수행)

result = (5 + 2) * 3
print(result)  # 21 (소괄호가 우선)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
42 == 0b1010100  # True
42 == 0o52  # True
42 == 0x2a  # True
bin(42)  # 2진수의 문자열로 변환 합니다.
oct(42)  # 8진수의 문자열로 변환 합니다.
hex(42)  # 16진수 문자열로 변환 합니다.
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
a = 10  # 00001010
b = 12  # 00001100
print(a & b) # bit and
print(a | b) # bit or
print(a ^ b) # bit xor (값이 다른 경우 1)
print(~a)    # bit 반전
print(a << 1) # bit 이동
print(a >> 1)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_08_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
year = int(input("년도를 입력하세요: "))

if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    print(f"{year}년은 윤년입니다.")
else:
    print(f"{year}년은 윤년이 아닙니다.")
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
          <TopBoxText onClick={() => handleStudyPython()}>Python</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyPython()}>
            01. 개발 환경 구성 및 기본 문법
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>08. 연산자</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>Python?</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsText>
          연산자는 프로그램에서 값을 계산하거나 변수에 대해 연산을 수행하는
          기호입니다. 다양한 종류의 연산자가 있으며, 각기 다른 목적에
          사용됩니다. 아래는 주요 연산자와 그 사용 예제입니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>산술연산자</ClassContentsTitle2>
        <ClassContentsText>
          숫자형 데이터 사이에서 기본적인 사칙연산을 수행합니다. 정수형 연산은
          정수형으로, 실수형 연산은 실수형으로 결과를 반환합니다. 문자열에
          대해서도 일부 산술연산이 가능합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>예제 코드</ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_08_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>문자열에 대한 연산</ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_08_Code02 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>응용 예제 1</ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_08_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>응용 예제2</ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_08_Code04 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>대입연산자</ClassContentsTitle2>
        <ClassContentsText>
          변수에 값을 할당하거나, 복합적으로 값을 갱신할 때 사용됩니다.
          <ClassContentsTextTab>
            - 대입 연산자의 종류 : =, +=, -=, *=, /=, //=, %=
          </ClassContentsTextTab>
          <ClassContentsCodeBox>
            대입 연산자는 기본적으로 (=)이다. (==)은 같다라는 비교연산자이므로
            잘 구별해서 사용해야 합니다.
          </ClassContentsCodeBox>
          <Python_01_08_Code05 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>비교연산자</ClassContentsTitle2>
        <ClassContentsText>
          두개의 값을 비교하여 조건이 참인지 거짓인지 판별 합니다.
          <ClassContentsTextTab>
            {`- == 같다 , > 크다, != 같지 않다,  <= 작거나 같다, < 작다, >= 크거나 같다.`}
          </ClassContentsTextTab>
          <ClassContentsCodeBox>
            값의 범위를 체크하는 비교 연산자 사용시 변수를 한번만 넣을 수
            있습니다. {`(예,  0 < x ≤ 100)`}
          </ClassContentsCodeBox>
          <Python_01_08_Code06 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>논리 연산자</ClassContentsTitle2>
        <ClassContentsText>
          조건을 비교하여 참(True)과 거짓(False)을 반환합니다.
          <ClassContentsTextTab>
            - and : 둘다 참 일 때 참이다. (교집합)
            <br />
            - or : 둘중 하나만 참이면 참이다. (합집합)
            <br />- not : 조건의 결과를 반대로 변환 (참 → 거짓)
          </ClassContentsTextTab>
          <Python_01_08_Code07 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>삼항 연산자</ClassContentsTitle2>
        <ClassContentsText>
          조건에 따라 다른 값을 반환 합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>구문</ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_08_Code08 />
        </ClassContentsText>
        <ClassContentsTitle3>예제 코드</ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_08_Code09 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>연산자 우선 순위</ClassContentsTitle2>
        <ClassContentsText>
          1. 소괄호 ( )<br />
          2. 거듭 제곱 **
          <br />
          3. 곱셈, 나눗셈, 나머지, 몫 *, /, %, //
          <br />
          4. 덧셈, 뺄셈 +, -<br />
          {`5. 비교 연산자 <, >, <=, >=, ==, !=`}
          <br />
          6. 논리 연산자 not, and, or
          <br />
          <Python_01_08_Code10 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>진법</ClassContentsTitle2>
        <ClassContentsText>
          인간이 사용하는 진법은 10진법 입니다. 0 ~ 9까지의 숫자로 총개의 숫자를
          의미 합니다.
          <br />
          컴퓨터는 2진법을 사용 합니다. 2진법은 0과1반 있으며, 전기적인 신호인
          ON/OFF를 의미 합니다.
          <br />
          16진법은 프로그램 작성시 많이 사용되며, 2진번 4자리와 일치하므로
          사용에 편리 하여 자주 사용 됩니다.
          <ClassContentsTextTab>
            - 2진수(0b) : 2진수를 의미 합니다.
            <br />
            - 8진수(0o) : 8진수를 의미 합니다.
            <br />- 16진수(0x) : 16진수를 의미 합니다.
          </ClassContentsTextTab>
          <Python_01_08_Code11 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>비트 연산자</ClassContentsTitle2>
        <ClassContentsText>
          각 비트별로 연산을 한다. (2진법)
          <Python_01_08_Code12 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>응용 예제</ClassContentsTitle3>
        <ClassContentsText>
          <font color="#2c79c1">
            <b>
              <i>
                윤년 판단하기 (조건문, 나머지 연산자, 비교연산자, 논리연산자)
              </i>
            </b>
          </font>
          <br />
          달력(양력)은 지구가 태양을 공전하는 시간을 기준으로 작성된다.
          <br />
          양력에서의 1년은 지구가 태양을 1바퀴 도는데 걸리는 시간이며, 시간은
          365일 과 1/4만큼 걸린다.
          <br />
          <br />
          <font color="#2c79c1">
            <b>
              <i>윤년의 조건</i>
            </b>
          </font>
          <br />
          - 연도가 4로 나누어 떨어진다.
          <br />
          - 100으로 나누어 떨어지면 연도는 윤년이 아니다.
          <br />
          - 400으로 나누어 떨어지면 윤년이다.
          <Python_01_08_Code13 />
        </ClassContentsText>
        {/* </ClassContentsContainer>
          </EachClass> */}
        <ArrowContainer>
          <Python_ArrowNavigation direction="left" />
          <Python_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default Python_01_08_M;
