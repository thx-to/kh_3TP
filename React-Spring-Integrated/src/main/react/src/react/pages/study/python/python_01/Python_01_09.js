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
  ClassTableBox,
} from "../../../../styles/study/Language_00_00";
import { ArrowContainer } from "../../../../styles/study/Language_ArrowNavigation";

import Python_Title from "../python_components/Python_Title";
import Python_ArrowNavigation from "../python_components/Python_ArrowNavigation";
import Python_ClassList_Filtered from "../python_components/Python_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Python_01_09_M from "./Python_01_09_M";

const Python_01_09 = () => {
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
  const handleStudyPython = () => {
    navigate("/study/python");
  };


  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/python/01/09");
    window.location.reload();
  };

  const Python_01_09_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
num = int(input("정수를 입력 하세요 : "))

if num % 2 == 0 : print("짝수 입니다.")
else : print("홀수 입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력 하세요 : "))
if n > 100 :
	print("100보다 커요")
elif n < 100 :
	print("100보다 작아요")
else :
	print("100과 같아요")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
season = input("지금 계절은? ").lower()  # 소문자로 변환하여 비교

if season == "spring":  
    print("봄이 왔어요.")  
elif season == "summer":  
    print("여름이 왔어요.")  
elif season == "fall":  
    print("쓸쓸한 가을입니다.")  
elif season == "winter":  
    print("아직 겨울이네요ㅠㅠ")  
else:  
    print("알 수 없는 계절입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
name = input("이름을 입력하세요: ")
hakbun = int(input("학번을 입력하세요: "))
score1 = int(input("국어 점수: "))
score2 = int(input("영어 점수: "))
score3 = int(input("수학 점수: "))

total = score1 + score2 + score3
average = total / 3

# 학점 계산
if average >= 90:  
    grade = "A"  
elif average >= 80:  
    grade = "B"  
elif average >= 70:  
    grade = "C"  
elif average >= 60:  
    grade = "D"  
else:  
    grade = "F"

print(f"이름: {name}, 학번: {hakbun}, 평균: {average:.2f}, 학점: {grade}")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
time = int(input("시간을 입력하세요 (0~23): "))

if time == 0:  
    print("오전 12시")  
elif time < 12:  
    print(f"오전 {time}시")  
elif time == 12:  
    print("오후 12시")  
else:  
    print(f"오후 {time - 12}시")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
id = input("아이디를 입력하세요: ")

if len(id) < 8:  
    print("아이디는 반드시 8자리 이상이어야 합니다.")  
else:  
    pw = input("비밀번호를 입력하세요: ")
    if len(pw) < 8 or len(pw) > 16:  
        print("비밀번호는 8자리 이상, 16자리 이하여야 합니다.")  
    elif id in pw:  
        print("비밀번호에 아이디를 포함할 수 없습니다.")  
    else:  
        print("회원가입이 완료되었습니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
import random

numbers = []
while len(numbers) < 6:  
    num = random.randint(1, 45)  
    if num not in numbers:  
        numbers.append(num)

print(f"생성된 로또 번호: {sorted(numbers)}")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수 입력 : "))
a = n // 100
b = (n % 100) // 10
c = n % 10
if a > b:
    if a > c: print(a)
    else: print(c)
else:
    if b > c : print(b)
    else: print(c)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수 입력 : "))
x = []
x.append(n // 100)  # 100 나눈 몫을 구함
x.append((n % 100) // 10) # 100으로 나눈 나머지에서 다시 10으로 나눈 몫 구하기
x.append(n % 10) # 10으로 나눈 나머지
print(max(x))
          `}
        </code>
      </pre>
    );
  };

  const Python_01_09_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
work_type = int(input("주간근무 [1] 야간근무[2] 를 입력 하세요 : "))
work_time = int(input("근무 시간을 입력 하세요 : "))
HOUR_PAY = 9860

if work_type == 1:
    pay = work_time * HOUR_PAY
else:
    pay = work_time * HOUR_PAY * 1.5

work_type_str = work_type == 1 and "주간" or "야간"
pay_str = f"{pay:,.0f}"
print(f"{work_time}시간 동안 근무한 {work_type_str} 급여는 {pay_str}원 입니다.")
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Python_01_09_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyPython()}>
                Python
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyPython()}>
              01. 개발 환경 구성 및 기본 문법
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              09. 조건문
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Python_Title />
              <StickyClassBox>
                <Python_ClassList_Filtered chapter="01" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>조건문</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>제어문이란?</ClassContentsTitle2>
                  <ClassContentsText>
                    제어문은 프로그램의 흐름을 제어하는 데 사용됩니다. 순차적인
                    흐름을 조건에 따라 변경하거나, 특정 코드를 반복 실행할 수
                    있도록 해줍니다. 제어문이 없다면 프로그램은 입력값과
                    상관없이 항상 동일한 흐름을 따르게 됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>제어문의 종류</ClassContentsTitle3>
                  <ClassContentsText>
                    1. <b>조건문 (if, elif, else)</b> : 입력 값에 따라 특정 코드
                    블록을 선택적으로 실행합니다.
                    <br />
                    2. <b>반복문 (while, for)</b> : 조건이 충족되는 동안 특정
                    코드 블록을 반복 실행합니다.
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>
                    조건문(if, elif, else)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    조건문은 조건을 평가하여 참(True)인지 거짓(False)인지에 따라
                    특정 코드를 실행합니다.
                  </ClassContentsText>
                  <ClassContentsTitle2>if ~ else문</ClassContentsTitle2>
                  <ClassContentsText>
                    조건이 참이면 if 블록을 실행하고, 거짓이면 else 블록을
                    실행합니다.
                    <Python_01_09_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>if ~ elif ~ else</ClassContentsTitle3>
                  <ClassContentsText>
                    다양한 조건을 확인할 때 사용됩니다. elif는 여러 개 사용할 수
                    있으며, 순차적으로 조건을 평가합니다.
                    <Python_01_09_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>응용 : 문자열 비교</ClassContentsTitle3>
                  <ClassContentsText>
                    <Python_01_09_Code03 />
                    - input() 함수로 입력받은 값은 기본적으로 문자열 형태입니다.
                    <br />- lower()를 사용해 입력값을 소문자로 변환하면 대소문자
                    구분 없이 비교할 수 있습니다.
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>
                    학점 계산 프로그램 (실습)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    학생의 이름, 학번, 그리고 국어, 영어, 수학 점수를 입력받아
                    평균 점수에 따라 학점을 출력하는 프로그램 작성
                    <Python_01_09_Code04 />
                    - 평균 점수를 소수점 두 자리까지 출력하기 위해 .2f 형식을
                    사용했습니다.
                    <br />- 조건은 위에서부터 순차적으로 평가되므로, 하위 조건은
                    별도로 제한하지 않아도 됩니다.
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>
                    24시간 형식을 12시간 형식으로 변경
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <Python_01_09_Code05 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>
                    회원 가입을 위한 아이디와 패스워드 입력 받기
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    아이디는 8자리 이상이어야 하며, 비밀번호는 8~16자리 사이여야
                    하고 아이디를 포함해서는 안 됩니다.
                    <Python_01_09_Code06 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>
                    로또 번호 자동 생성 (중복 제거)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <Python_01_09_Code07 />
                    - random.randint(1, 45)는 1에서 45 사이의 정수를 반환합니다.
                    <br />- sorted()를 사용해 최종 출력 시 번호를 오름차순으로
                    정렬했습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    [실습문제] 세자리수 중에서 가장 큰 수
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 3자리의 정수를 입력을 받아 100의자리, 10자리, 1의 자리로
                    나누어 담고 가장 큰수를 찾아서 출력
                    <br />
                    - 예) 입력 : 574, 출력 : 7
                    <Python_01_09_Code08 />
                    <br />
                    - 리스트 사용 코드
                    <Python_01_09_Code09 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    [실습문제] 주/야간 근무시간을 입력 받아 아르바이트 급여
                    계산하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 주간 근무 : 9860원
                    <br />
                    - 야간 근무 : 주간 시급 * 1.5
                    <br />
                    <br />
                    - 주간근무 [1], 야간근무[2]를 입력 하세요 : <br />
                    - 근무 시간을 입력해 주세요 : <br />
                    - 입력한 시간 동안 근무한 주간 또는 야간 급여는 ___원
                    입니다.
                    <Python_01_09_Code10 />- pay:,.0f를 사용해 급여를 천 단위
                    콤마로 표시했습니다.
                  </ClassContentsText>
                </ClassContentsContainer>
              </EachClass>
              <ArrowContainer>
                <Python_ArrowNavigation direction="left" />
                <Python_ArrowNavigation direction="right" />
              </ArrowContainer>
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};
export default Python_01_09;
