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
  TopBoxLink,
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

const Python_01_06_M = () => {
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
    navigate("/study/python/01/06");
    window.location.reload();
  };

  const Python_01_06_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
addr = "서울시 강남구 역삼동" # 문자열을 나타낸다.
lang = "파이썬"
name = "Coditor"
age = 10  #정수형이다.

print("나의 이름은 " + name + "입니다.")
print("나이는 " + str(age) + "입니다.")
print(addr + "에서" + lang + "을 배우고 있습니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
addr = "서울시 강남구 역삼동"
lang = "Python"
name = "Coditor"
age = 10

print("나의 이름은 " + name + "입니다.")
print("나이는 " + str(age) + "입니다.")
print(addr + "에서" + lang + "을 배우고 있습니다.")

addr = "서울시 강남구 삼성동"  # 기존에 선언과 할당이 이루어진 변수에 값을 업데이트 한다.
print(f"{addr} 에서 {lang}를 배우고 있습니다.") # 이런 방법으로 출력 할 수도 있음 (포맷 문자열 리터럴)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
a = b = c = 1  # 하나의 값을 여러 변수에 한번에 할당 가능하다.
print(a, b, c)
a, b, c = 1, 2, "Coditor" # 여러개의 변수에 여러개의 값을 한번에 할당 가능 하다.
print(a, b, c)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
lang = input("배우고 싶은 언어를 입력하세요: ")
print(f"입력된 언어는 {lang}입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
num = 10
print(type(num))  # <class 'int'>
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
i = 10
j = 3
print(i+j)
print(i-j)
print(i*j)
print(i**j)  # 제곱 연산자
print(i/j)
print(i//j)  # 몫의 값을 실수가 아닌 정수로 얻고자 한다면..
print(i%j)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print(bool(1)) # True
print(bool(0)) # False
print(bool(None)) # False
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
str = 'Hello World!'

print(str)
print(str[0])
print(str[2:5])
print(str[2:])
print(str * 2)
print(str + "TEST")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_06_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print(10 + int("10"))
print("나이" + str(30))
print(float(0.1) * float("512.45"))

a = 10
b = "20"
print(a + int(b))

	x,y,z = -1, 10, "test"   # 0, None은 False 입니다.
print(bool(x))
print(bool(y))
print(bool(z))
          `}
        </code>
      </pre>
    );
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleStudy()}>
            <TopBoxText>study</TopBoxText>
          </TopBoxLink>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleStudyPython()}>
            <TopBoxText>Python</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxLink onClick={() => handleStudyPython()}>
            <TopBoxText2>01. 개발 환경 구성 및 기본 문법</TopBoxText2>
          </TopBoxLink>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText2>06. 자료형과 표준 데이터 형식</TopBoxText2>
          </TopBoxLink>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>Python?</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>자료형이란?</ClassContentsTitle2>
        <ClassContentsText>
          <b>자료형</b>은 데이터를 저장하기 위해 미리 정의된 데이터의 형태를
          의미합니다. Python은 변수에 값이 할당될 때 자료형이 자동으로
          결정되지만, 데이터형에 대한 이해는 필수적입니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>파이썬의 주요 자료형</ClassContentsTitle3>
        <ClassContentsText>
          1. 문자열(String) :
          <ClassContentsTextTab>
            - 연속된 문자 데이터로, " " 또는 ' '로 표현됩니다.
            <br />
            - 예: 이름, 주소, 이메일 제목 등<br />
            - 문자형은 따로 존재하지 않으며, 모든 문자는 문자열로 취급됩니다.
            <br />
          </ClassContentsTextTab>
          2. 숫자(Numeric) :
          <ClassContentsTextTab>
            - 숫자 데이터로 연산 가능한 값<br />
            - 정수형(int)과 실수형(float)으로 나뉩니다.
            <br />
            - 예: 가격, 점수 등<br />
          </ClassContentsTextTab>
          3. 불리언(Boolean) :
          <ClassContentsTextTab>
            - 참(True)과 거짓(False) 값을 나타냄
            <br />
            - 첫 글자는 반드시 대문자로 작성
            <br />
          </ClassContentsTextTab>
        </ClassContentsText>
        <br />
        <hr />
        <br />
        <ClassContentsTitle2>변수</ClassContentsTitle2>
        <ClassContentsText>
          <b>변수</b>는 데이터를 저장하기 위해 메모리 공간에 이름을 부여하는
          것을 의미합니다.
          <ClassContentsTextTab>
            - Python은 값을 할당하는 순간 자동으로 변수 선언과 자료형 결정이
            이루어집니다.
            <br />- 대입 연산자 =를 사용하며, ==는 비교 연산자이므로 혼동하지
            않도록 주의하세요.
          </ClassContentsTextTab>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>변수 사용 예제</ClassContentsTitle3>
        <Python_01_06_Code01 />
        <br />
        <ClassContentsTitle3>변수의 재활용</ClassContentsTitle3>
        <ClassContentsText>
          선언된 변수에 대해 저장된 데이터를 변경 할 수 있습니다.
        </ClassContentsText>
        <Python_01_06_Code02 />
        <br />
        <ClassContentsTitle3>다중 할당</ClassContentsTitle3>
        <Python_01_06_Code03 />
        <br />
        <ClassContentsTitle3>입력값으로 변수 초기화</ClassContentsTitle3>
        <Python_01_06_Code04 />
        <br />
        <ClassContentsTitle3>변수의 타입 확인</ClassContentsTitle3>
        <ClassContentsText>
          Python에서는 type() 함수를 사용하여 변수의 자료형을 확인할 수
          있습니다.
        </ClassContentsText>
        <Python_01_06_Code05 />
        <br />
        <ClassContentsTitle2>표준 데이터 형식</ClassContentsTitle2>
        <ClassContentsTitle3>숫자형 타입(numeric types)</ClassContentsTitle3>
        <ClassContentsText>
          - 정수(int) : 소수점이 없는 숫자. 예: 123, -345, 0<br />
          - 실수(float) : 소수점이 포함된 숫자. 예 : 123.45, -1234.5, 3.4e10
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>숫자형 연산 예제</ClassContentsTitle3>
        <Python_01_06_Code06 />
        <ClassContentsText>
          <ClassTableBox>
            <ClassTable style={{ width: "100%", textAlign: "center" }}>
              <ClassTableTr>
                <ClassTableTd
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <b>자료형</b>
                </ClassTableTd>
                <ClassTableTd
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <b>사용 예</b>
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>정수</ClassTableTd>
                <ClassTableTd>123, -345, 0</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>실수</ClassTableTd>
                <ClassTableTd>123.45, -1234.5, 3.4e10</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>복소수</ClassTableTd>
                <ClassTableTd>1 + 2j, -3j</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>8진수</ClassTableTd>
                <ClassTableTd>034, 025</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>16진수</ClassTableTd>
                <ClassTableTd>0x2A, 0xFF</ClassTableTd>
              </ClassTableTr>
            </ClassTable>
          </ClassTableBox>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>불리언(Boolean)</ClassContentsTitle3>
        <ClassContentsText>
          참(True)과 거짓(False) 값을 표현합니다.
        </ClassContentsText>
        <Python_01_06_Code07 />
        <br />
        <ClassContentsTitle3>문자열(String)</ClassContentsTitle3>
        <ClassContentsText>
          문자열은 문자들의 연속된 집합으로 '' 또는 ""로 감싸서 표현합니다.
        </ClassContentsText>
        <Python_01_06_Code08 />
        <br />
        <ClassContentsTitle3>형변환</ClassContentsTitle3>
        Python에서는 데이터를 다른 자료형으로 변환할 수 있습니다.
        <ClassContentsText>
          <ClassContentsTextTab>
            - <b>bool(값)</b> : 값을 논리형으로 변환
            <br />- <b>int(값)</b> : 값을 정수형으로 변환
            <br />- <b>float(값)</b> : 값을 실수형으로 변환
            <br />- <b>str(값)</b> : 값을 문자열로 변환
            <br />
          </ClassContentsTextTab>
        </ClassContentsText>
        <Python_01_06_Code09 />
        <br />
        <hr />
        <br />
        <ClassContentsTitle2>주요 포인트</ClassContentsTitle2>
        <ClassContentsText>
          1. Python은 <b>동적 타입</b> 언어로, 변수 선언 시 자료형을 명시하지
          않아도 됩니다.
          <br />
          2. type() 함수로 변수의 자료형을 확인할 수 있습니다.
          <br />
          3. <b>형변환</b>을 통해 변수의 자료형을 변경할 수 있습니다.
          <br />
          4. 자료형은 Python의 기본 클래스이며, 이를 통해 다양한 연산과 조작이
          가능합니다.
          <br />
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
export default Python_01_06_M;
