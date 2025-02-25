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
import Python_01_10_M from "./Python_01_10_M";

const Python_01_10 = () => {
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
    navigate("/study/python/01/10");
    window.location.reload();
  };

  const Python_01_10_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력하세요: "))
total = 0  # 합계를 저장할 변수
while n > 0:  # n이 0보다 클 때만 반복
    total += n
    n -= 1  # n 값을 1씩 감소시킴
print(f"합: {total}")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
while True:  # 무한 반복 시작
    age = int(input("나이를 입력하세요: "))
    if 0 < age < 200:  # 나이가 0~200 사이일 경우 유효
        print("입력 완료!")
        break  # 유효한 입력값이면 반복 종료
    else:
        print("나이를 잘못 입력했습니다. 다시 시도하세요.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
while True:
    energy = 0
    print("1. 다른 누군가에게 발상, 지식이나 감정을 표현함으로써 에너지를 얻고 활동적이며 적극적입니다.")
    print("2. 지식이나 감정에 대한 자각의 깊이를 늘려감으로써 에너지를 얻고 깊이 있는 대인 관계를 가집니다.")
    print("[에너지 방향] : 1, 2중에 선택 하세요 : ", end=" ")
    energy = input()
    if (energy == '1'): 
        mbti = "E"
        break
    elif (energy == '2'): 
        mbti = "I"
        break
    else: print("입력 오류 다시 입력 하세요.")

while True:
    recog = 0
    print("1. 실제 경험을 중시하고 현실에 초점을 맞추어 정확하고 철저하게 일처리를 합니다.")
    print("2. 아이디어를 중시하고 미래지향적이고 개연성과 의미에 초점을 맞추어 신속하게 일을 처리 합니다.")
    print("[인식기능] : 1, 2중에 선택 하세요 : ", end=" ")
    recog = input()
    if (recog == '1'): 
        mbti = mbti + "S"
        break
    elif(recog == '2'):
        mbti = mbti + "N"
        break
    else: print("입력 오류 다시 입력 하세요.")

while True:
    print("1. 업무 중심 타입이며, 진실과 사실에 근거하고 논리적이고 분석적, 객관적으로 사실을 판단 합니다.")
    print("2. 인간 관계 중심이며, 사람과의 관계에 주로 관심이 많습니다, 우호적이고 공감하기를 좋아하고 도적성을 중시 합니다.")
    print("[판단기능] : 1, 2중에 선택 하세요 : ", end=" ")
    judg = input()
    if (judg == '1'): 
        mbti = mbti + "T"
        break
    elif (judg == '2'): 
        mbti = mbti + "F"
        break
    else: print("입력 오류 다시 입력 하세요.")

while True:
    pattern = 0
    print("1. 분명한 목적과 방향을 선호하고 계획적이며 체계적이고 기한을 잘 지킵니다. 정리정돈을 잘하고 뚜렷한 자기의사와 기준으로 신속한 결론을 내립니다.")
    print("2. 유동적이고, 자율적이고 융통성이 있으며 때에 따라 일정을 변경하며, 상황에 적응하고 결정을 보류 합니다.")
    print("[생활양식] : 1, 2중에 선택 하세요 : ", end=" ")
    pattern = input()
    if (pattern == '1'): 
        mbti = mbti + "J"
        break
    elif (pattern == '2'): 
        mbti = mbti + "P"
        break
    else: print("입력 오류 다시 입력 하세요.")

print("당신의 MBTI 유형은 " + mbti + "입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력하세요 : "))
sum = 0  # 초기화 해주어야 함, 왜냐면 기존 변수에 들어 있는 값을 기준으로 더하기 때문에
for i in range(1, n+1):
    sum += i
print(sum)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력 하세요 : "))
for i in range(0, n):  # 범위에서의 최종값 미만까지 반복 한다.
    for j in range(0, n) :
        print("*", end=' ')
    print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
for i in range(2, 10): # 2에서 10 미만 까지
    for j in range(1, 10):
        print(f"{i} * {j} = {i*j}")
    print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력 하세요 : "))
for i in range(0, n):
    for j in range(0, n):
        if j % 2 == 0: print("@", end=' ') # 짝수인 조건이다.
        else: print("*", end=' ') # 홀수인 조건이다.
    print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력 하세요 : "))
for i in range(1, n * n + 1):
    print(f"{i:3}", end='')    #이쁘게 찍기 위해서 오른쪽 정렬 한다. 왼쪽 정렬은 <
    if i % n == 0: print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input())
for i in range(n):
    for j in range(i+1):
        print("*", end="")
    print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input())
for i in range(n):
    for j in range(n-i):
        print("*", end="")
    print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input())
for i in range(n):
    for k in range(i):
        print(" ", end="")
    for j in range(n-i):
        print("*", end="")
    print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input("정수를 입력 하세요 : "))
for i in range(0, n):
    if i % 2 == 0 : continue # 나머지가 짝수이면 아래의 print문을 수행하지 않는다.
    print(i)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
for i in range(4, -1, -1): # 4에서 시작해서 0까지 역순으로 반복
    print(f"index : {i}")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
for i in range(ord("A"),ord("Z")+1): 
    print(chr(i), end=" ") # chr 문자 출력
print()

for i in range(65,91):#A:65 Z:90
	print(chr(i), end=" ")
print()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
while True:
    num = int(input("점수를 입력하세요(음수는 종료) : "))
    if num < 0:
        break

    if num > 100:
        print("올바른 점수가 아닙니다.\n0 ~ 100 사이의 점수를 입력하세요")
        continue  # 반복문으로 되돌아 갑니다.

    if num >= 90:
        grade = 'A'
    elif num >= 80:
        grade = 'B'
    elif num >= 70:
        grade = 'C'
    elif num >= 60:
        grade = 'D'

    print(f"{num}점의 학점은 \"{grade}\"입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
name = input("이름을 입력 하세요 : ")
while True:
    age = input("나이를 입력하세요 : ")
    if age.isdigit() : # 문자열이 '숫자'로만 이루어져있는지 확인하는 함수
        age = int(age)
        if 0 < age < 200 : break
    print("나이를 잘못 입력 하셨습니다. 다시 입력 하세요.")
        

while True:
    gender = input("성별을 입력 하세요 : ")
    if gender == 'M' or gender == 'm': break
    elif gender == 'F' or gender == 'f': break
    else: print("성별이 틀렸습니다. 다시 입력 해 주세요.") 

while True:
    jobs = input("직업을 입력 하세요 : ")
    if jobs.isdigit() :
        jobs = int(jobs)
        if 0 < jobs < 5 : break
    print("직업이 잘못 입력되었습니다. 다시 입력해주세요.")

if gender == 'M' or gender == 'm': 
	gen_name = "남성"
else: 
	gen_name = "여성"

jobs_name = ("", "학생", "회사원", "주부", "무직") # 튜플 사용

print("="*3, "회원정보", "="*3)     
print(f"이름 : {name}")
print(f"나이 : {age}")
print(f"성별 : {gen_name}")
print(f"직업 : {jobs_name[jobs]}")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
# 회원 정보 출력 하기 (1단계는 현재 상태대로 -> 함수 형태로)
def input_age() :
    while True :
        age = input("나이를 입력 하세요 : ")
        if age.isdigit():  # 문자열이 숫자로 구성되어 있는지 확인
            age = int(age)
            if 0 < age < 200: return age
        print("나이를 잘 못 입력 하셨 습니다.")

def input_gender() :
    while True :
        gender = input("성별을 입력하세요 : ")
        if gender == 'M' or gender == 'm' : return "남성"
        elif gender == 'F' or gender == 'f' : return "여성"
        print("성별이 잘 못 입력 되었습니다.")

def input_jobs() :
    while True :
        jobs = input("직업을 입력 하세요 : ")
        if jobs.isdigit():
            jobs = int(jobs)
            if 0 < jobs < 5: return jobs
        print("직업을 잘 못 입력 하셨습니다.")

def print_info(name, age, gender, jobs) :
    jobs_str = "", "학생", "회사원", "주부", "무직"  # 튜플
    print("=" * 3, "회원정보", "=" * 3)
    return f"이름 : {name}\n나이 : {age}\n성별 : {gender}\n직업 : {jobs_str[jobs]}"

# 함수는 선언 이후 호출해야 동작 함.
member_info = "member.txt"
fd = open(member_info, "wt", encoding="utf-8")
while True :
    name = input("이름을 입력 하세요 (종료하려면 quit) : ")
    if name == 'quit' : break
    age = input_age()
    gender = input_gender()
    jobs = input_jobs()
    rst = print_info(name, age, gender, jobs)
    fd.write(rst + "\n")
fd.close()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
3
40 40 40

          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
M 45
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code21 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
n = int(input())
call = list(map(int, input().split()))

y_pay = m_pay = 0
for i in range(n):
    y_pay += (call[i] // 30) * 10 + 10
    m_pay += (call[i] // 60) * 15 + 15

if y_pay > m_pay:
    print("M", m_pay)
elif y_pay < m_pay:
    print("Y", y_pay)
else:
    print("Y M", y_pay)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code22 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
r = ""
for i in input():
    if i.islower():
        r += i.upper()
    else:
        r+= i.lower()
print(r)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code23 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
150
266
427

          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code24 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
3
1
0
2
0
0
0
2
0
0
          `}
        </code>
      </pre>
    );
  };

  const Python_01_10_Code25 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
a, b, c = map(int, input("정수 3개 입력 : ").split())
ls = str(a * b * c)
for i in range(10) :
    print(ls.count(str(i))) # 해당 문자의 개수 반환
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Python_01_10_M />
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
                10. 반복문
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
                  <ClassHeaderTitle>반복문</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>while문</ClassContentsTitle1>
                  <ClassContentsText>
                    - 조건이 참인 동안 반복을 수행하는 반복문
                    <br />- <b>특징</b> : 조건이 거짓이 될 때까지 반복. 조건을
                    설정하지 않으면 무한 반복(while True)을 사용할 수 있음
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>
                    예제 1 : 입력 받은 정수에 대한 합 구하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 사용자가 입력한 숫자부터 1까지의 합을 계산하는 예제
                    <br />
                    - 반복문이 실행되면서 입력받은 숫자를 하나씩 줄이며 합계를
                    구함
                    <Python_01_10_Code01 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>
                    예제 2 : 입력값 유효성 검증
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 유효한 나이를 입력받을 때까지 반복해서 사용자에세 입력을
                    요구하는 예제
                    <br />
                    - if 조건문을 통해 입력값이 유효한 경우에만 반복문을
                    종료(break)
                    <Python_01_10_Code02 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>
                    예제 3 : 선택 기반 반복(MBTI 예제)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 특정 선택지를 입력받아 MBTI 유형을 구분하는 프로그램
                    <br />
                    - 잘못된 선택을 입력하면 다시 시도하도록 유도
                    <Python_01_10_Code03 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle1>for 문</ClassContentsTitle1>
                  <ClassContentsText>
                    정해진 범위만큼 반복 수행 할 때 효과적이다.
                    <br />
                    범위기반 반복문으로 많이 사용되며, 반드시 반복문에 대한 종료
                    조건이 있어야 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle2>for 요소 in 시퀀스</ClassContentsTitle2>
                  <ClassContentsText>
                    "for-in"문은 <b>시퀀스(리스트, 튜플, 문자열 등)</b>의 각
                    요소를 순회하는 데 사용됩니다. 일반적인 구문은 다음과
                    같습니다. (자바의 향상된 for문과 동일)
                    <Python_01_10_Code04 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    for 변수 in range(시작값, 종료값, 증감값)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    "for-range"문은 숫자 범위를 순회하는 데 사용됩니다. 일반적인
                    구문은 다음과 같습니다 :
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    값 더하기 (입력 받은 정수에 이하의 값 더하기)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Python_01_10_Code05 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    이중 for문 사용 하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Python_01_10_Code06 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>구구단 출력</ClassContentsTitle3>
                  <ClassContentsText>
                    <Python_01_10_Code07 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>
                    이중 for문과 조건문 사용 하기 (홀수, 짝수 판별)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Python_01_10_Code08 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>사각형 찍기</ClassContentsTitle3>
                  <ClassContentsText>
                    - 정수값을 n을 입력 받아 n * n 크기의 행렬을 출력하는
                    프로그램 작성
                    <br />
                    - 값은 1부터 시작하고 순서대로 채워 넣는다.
                    <Python_01_10_Code09 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>별찍기 1번</ClassContentsTitle3>
                  <ClassContentsText>
                    *<br />
                    **
                    <br />
                    ***
                    <br />
                    ****
                    <br />
                    *****
                    <br />
                    <Python_01_10_Code10 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>별찍기 2번</ClassContentsTitle3>
                  <ClassContentsText>
                    *****
                    <br />
                    ****
                    <br />
                    ***
                    <br />
                    **
                    <br />
                    *<br />
                    <Python_01_10_Code11 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>별찍기 3번</ClassContentsTitle3>
                  <ClassContentsText>
                    <div>
                      {`
*****
 ****
  ***
   **
    *
`
                        .split("\n")
                        .map((line, index) => (
                          <div key={index}>{line.replace(/ /g, "\u00A0")}</div>
                        ))}
                    </div>
                    <Python_01_10_Code12 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle3>
                    for문에서 continue 사용
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - continue 문을 만나면 아래의 문자을 수행하지 않고
                    반복문으로 이동한다.
                    <Python_01_10_Code13 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    for문을 반대로 반복하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Python_01_10_Code14 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    for문으로 알파벳 출력하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - chr : 유니코드 값을 입력 받아 그 코드에 해당하는 문자를
                    출력하는 함수
                    <br />
                    - ord : 문자의 유니코드 값을 돌려주는 함수
                    <Python_01_10_Code15 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsText>
                    <font color="#2c79c1">
                      <b>학점 구하기</b>
                    </font>
                    - break와 continue 사용 하기
                    <br />
                    - 출력문에서 “”사용 하기
                    <br />
                    - 크거나 같다, 작거나 같다 사용시 크다/작다 부호가 먼저 와야
                    합니다.
                    <Python_01_10_Code16 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>종합 복습 예제</ClassContentsTitle2>
                  <ClassContentsTitle3>회원정보 출력하기</ClassContentsTitle3>
                  <ClassContentsText>
                    · 회원정보를 입력 받아서 출력 하는 예제 진행
                    <ClassContentsTextTab>
                      - 이름 입력
                      <br />
                      - 나이 입력 : 1 ~ 199까지 입력 받고 잘못된 값이 오면
                      재입력 요청을 한다.
                      <br />
                      - 성별 입력 : 영문자 (M과m은 남성) (F와 f는 여성)으로 입력
                      받고 나머지는 재입력 요청을 한다.
                      <br />
                      - 직업 입력 : 1(학생), 2(회사원), 3(주부), 4(무직)으로
                      입력 받고 나머지는 재입력 요청 한다.
                      <br />- 결과는 마지막에 한번에 출력 한다.
                    </ClassContentsTextTab>
                    <Python_01_10_Code17 />
                    <br />
                    - 함수로 변환, 반복순회, 파일 추가 기능 포함 코드
                    <Python_01_10_Code18 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    핸드폰 요금 계산 하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    👉 <b>문제</b>
                    <br />
                    동호는 새악대로 T 통신사의 새 핸드폰 옴머나를 샀다. 새악대로
                    T 통신사는 동호에게 다음 두 가지 요금제 중 하나를 선택하라고
                    했다.
                    <ClassContentsTextTab>
                      1. 영식 요금제
                      <br />
                      2. 민식 요금제
                    </ClassContentsTextTab>
                    영식 요금제는 30초마다 10원씩 청구된다. 이 말은 만약 29초
                    또는 그 보다 적은 시간 통화를 했으면 10원이 청구된다. 만약
                    30초부터 59초 사이로 통화를 했으면 20원이 청구된다.
                    <br />
                    민식 요금제는 60초마다 15원씩 청구된다. 이 말은 만약 59초
                    또는 그 보다 적은 시간 통화를 했으면 15원이 청구된다. 만약
                    60초부터 119초 사이로 통화를 했으면 30원이 청구된다.
                    <br />
                    동호가 저번 달에 새악대로 T 통신사를 이용할 때 통화 시간
                    목록이 주어지면 어느 요금제를 사용 하는 것이 저렴한지
                    출력하는 프로그램을 작성하시오.
                    <br />
                    <br />
                    👉 <b>입력</b>
                    <br />
                    동호가 저번 달에 이용한 통화의 개수 N이 주어진다. N은 20보다
                    작거나 같은 자연수이다. 둘째 줄에 통화 시간 N개가 주어진다.
                    통화 시간은 10,000보다 작거나 같은 자연수이다.
                    <br />
                    <br />
                    👉 <b>출력</b>
                    <br />
                    첫째 줄에 싼 요금제의 이름을 출력한다. 그 후에 공백을 사이에
                    두고 요금이 몇 원 나오는지 출력한다. 만약 두 요금제의 요금이
                    모두 같으면 영식을 먼저 쓰고 민식을 그 다음에 쓴다.
                    <br />
                    영식은 Y로, 민식은 M으로 출력한다.
                    <br />
                    <br />
                    🔥 <b>예제 입력 1</b>
                    <Python_01_10_Code19 />
                    <br />
                    🔥 <b>예제 출력 1</b>
                    <Python_01_10_Code20 />
                    <br />
                    <br />
                    <br />✨ <b>정답 코드</b>
                    <br />
                    <Python_01_10_Code21 />
                  </ClassContentsText>
                  <br />
                  <br />
                  <ClassContentsTitle3>대소문자 바꾸기</ClassContentsTitle3>
                  <ClassContentsText>
                    👉 <b>문제</b>
                    <br />
                    영어 소문자와 대문자로 이루어진 단어를 입력받은 뒤, 대문자는
                    소문자로, 소문자는 대문자로 바꾸어 출력하는 프로그램을
                    작성하시오.
                    <br />
                    <br />
                    👉 <b>입력</b>
                    <br />
                    첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다.
                    단어의 길이는 최대 100이다.
                    <br />
                    <br />
                    👉 <b>출력</b>
                    <br />
                    첫째 줄에 입력으로 주어진 단어에서 대문자는 소문자로,
                    소문자는 대문자로 바꾼 단어를 출력한다.
                    <br />
                    <br />
                    <br />✨ <b>정답 코드</b>
                    <br />
                    <Python_01_10_Code22 />
                  </ClassContentsText>
                  <br />
                  <br />
                  <ClassContentsTitle3>숫자의 개수</ClassContentsTitle3>
                  <ClassContentsText>
                    👉 <b>문제</b>
                    <br />
                    세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에
                    0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는
                    프로그램을 작성하시오.
                    <br />
                    예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 ×
                    266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이
                    3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
                    <br />
                    <br />
                    👉 <b>입력</b>
                    <br />
                    첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는
                    모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.
                    <br />
                    <br />
                    👉 <b>출력</b>
                    <br />
                    첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다.
                    마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에
                    1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에
                    하나씩 출력한다.
                    <br />
                    <br />
                    🔥 <b>예제 입력 1</b>
                    <Python_01_10_Code23 />
                    <br />
                    🔥 <b>예제 출력 1</b>
                    <Python_01_10_Code24 />
                    <br />
                    <br />
                    <br />✨ <b>정답 코드</b>
                    <br />
                    <Python_01_10_Code25 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle2>주요 키워드 정리</ClassContentsTitle2>
                  <ClassContentsText>
                    - 범위는 정수의 범위를 나타내며 range()함수로 생성합니다.
                    <br />
                    - while 반복문은 조건식을 기반으로 특정 코드를 반복해서 실행
                    할 때 사용합니다.
                    <br />- <b>break</b>는 반복문을 탈출 할 때 사용합니다.
                    <br />- <b>continue</b>는 반복문에서 아래의 구간을 수행하지
                    않고 반복문의 조건으로 이동할 때 사용합니다.
                    <br />
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
export default Python_01_10;
