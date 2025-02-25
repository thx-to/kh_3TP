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

import Python_Title from "../python_components/Python_Title";
import Python_ArrowNavigation from "../python_components/Python_ArrowNavigation";
import Python_ClassList_Filtered from "../python_components/Python_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Python_01_05_M from "./Python_01_05_M";

const Python_01_05 = () => {
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
    navigate("/study/python/01/05");
    window.location.reload();
  };

  const Python_01_05_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print(38) # 정수형
print("문자열") 
print([1, 2, 3]) # 리스트형
print(1+2)
print("파"+"이"+"썬")
print("파""이""썬")
print("파","이","썬") # 콤마는 띄어쓰기를 의미 한다.

print("\n\n\n") # 줄바꿈 문자 (이스케이프 케릭터라고 함)

# 작은 따옴표 3개를 사용해도 동일 함, 여러줄 연속 사용, \사용으로도 동일 효과 낼 수 있음
print("""동해물과 백두산이 마르고 닳도록 하느님이
보우하사 우리나라 만세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전 하세
""")

# 큰 따옴표, 작은 따옴표 화면에 표시 하기
print("\"안녕하세요\"라고 말했습니다.")
print("\'안녕하세요\'라고 말했습니다.")

# 이스케이프 문자 사용 하기
print("서울시\t강남구\t역삼동\n")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_05_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print("Hello", end="\n")
print()

print("Hello", end="")
print("World");

print("Hello",end="-")
print("python")

print("life","is","too short"); # 콤마는 띄어쓰기 역할을 한다. (기본 값)
print(1,2,3,4,5,sep=" ")
print(1,2,3,4,5,sep="\n")
print("010","1234","5678",sep="-")

year = 2024
month = 5
day = 23
print(year, month, day, sep="/")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_05_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
name = "Coditor"
age = 20
gender = "남성"
jobs = "소프트웨어 개발자"
addr = "서울시 역삼동"

# C언어 스타일, %방식
print("====== C 스타일 ======")
print("이름 : %s"%(name))
print("나이 : %d"%(age))
print("성별 : %s"%(gender))
print("직업 : %s"%(jobs))
print("주소 : %s\n"%(addr))

# 파이썬 스타일 1, str.format
print("====== 파이썬 스타일 1 ======")
print("이름 : {}{}".format(name, addr))
print("나이 : {}".format(age))
print("성별 : {}".format(gender))
print("직업 : {}".format(jobs))
print("주소 : {}\n".format(addr))

# 파이썬 스타일 2, 가장 최근에 추가된 방식(f-string), 3.6 이후
# f와 {}로 사용 합니다.
print("====== 파이썬 스타일 2 ======")
print(f"이름 : {name}")
print(f"나이 : {age}")
print(f"성별 : {gender}")
print(f"직업 : {jobs}")
print(f"주소 : {addr}\n")

# 자바 스타일
print("====== 자바 스타일 ======")
print("이름 : " + name)
print("나이 : " + str(age))
print("성별 : " + gender)
print("직업 : " + jobs)
print("주소 : " + addr)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_05_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
#정렬 위치
# < - 좌측
# > - 우측 (기본값 : 생략 가능)
# ^ - 중앙
num1 = 100
num2 = 1000
num3 = 10000
print(f"|{num1:^7}|")
print(f"|{num2:^7}|")
print(f"|{num3:^7}|")

print(f"|{10:5}|")  # 오른쪽 정렬, 10이라는 값을 오른쪽 정렬으로 출력 한다는 의미 
print(f"|{10:<5}|") # 왼쪽 정렬, 10이라는 값을 왼쪽 정렬으로 출력 한다는 의미
print(f"|{10:^6}|") # 중간 정렬, 10이라는 값을 중간 정렬 한다는 의미
print(f"{20.3333333:.2f}")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_05_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
name = input() # 데이터를 입력 받아 변수에 저장 합니다.
print(name)

name = input("이름을 입력하세요 : ") # 가이드로 표시 할 내용을 포함하여 한줄에 표시
print(name)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_05_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
name = input('이름을 입력하세요 : ')
age = int(input("나이를 입력 하세요 : ")) # 문자열이 아닌 데이터형을 입력 받기 위해서는 형변환을 해야 합니다.
addr = input("주소를 입력 하세요 : ")
jobs = input("직업을 입력 하세요 : ")
aver = float(input("성적을 입력하세요 : "))

print(f'안녕하세요? {name} 님.')
print(f"당신의 주소는 {addr}이고 직업은 {jobs}이고 나이는 {age} 입니다.")
print(f"당신의 성적은 {aver} 입니다.")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_05_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`

str1, str2 = input("이름과 주소 입력 : ").split()
print(str1,str2)

kor, eng, mat = map(int, input("국어 영어 수학 : ").split())
print(kor,eng,mat)

hour, min, sec = input("시:분:초 : ").split(":")
print(f"{hour}시{min}분{sec}초")

a, b, c = map(int, input("정수 입력 : ").split(":"))
if a == 12:
    print(f"오후{a:02}시{b:02}분{c:02}초")
elif a > 12:
    a -= 12
    print(f"오후{a:02}시{b:02}분{c:02}초")
else:
    print(f"오전{a:02}시{b:02}분{c:02}초")
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Python_01_05_M />
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
              05. 표준 입출력 함수
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
                  <ClassHeaderTitle>표준 입출력 함수</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>출력 : print() 함수</ClassContentsTitle2>
                  <ClassContentsText>
                    - 데이터를 화면에 출력하거나 사용자에게 메시지를 전달할 때
                    사용
                    <br />- 이스케이프 문자를 사용해 줄바꿈, 탭 등을 추가할 수
                    있음
                    <ClassContentsTextTab>
                      · \n : 줄바꿈을 의미
                      <br />
                      · \t : 탭을 의미
                      <br />
                      · \b : 백스페이스
                      <br />· \r : 커서를 맨 앞으로 이동시킴
                    </ClassContentsTextTab>
                    <br />
                    <ClassContentsTitle3>출력 예제</ClassContentsTitle3>
                    <Python_01_05_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle2>
                    출력 옵션 : end와 sep
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    - end : 출력 후 삽입될 문자를 지정 (기본값은 \n)
                    <br />- sep : 출력 값 사이에 삽입될 문자를 지정 (기본값은
                    공백)
                    <br />
                    <br />
                    <ClassContentsTitle3>출력 옵션 예제</ClassContentsTitle3>
                    <Python_01_05_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>다양한 출력 스타일</ClassContentsTitle2>
                  <Python_01_05_Code03 />
                  <ClassContentsTitle2>정렬 및 포맷 지정</ClassContentsTitle2>
                  <ClassContentsText>
                    - {`<`} : 왼쪽 정렬
                    <br />- {`>`} : 오른쪽 정렬
                    <br />
                    - ^ : 가운데 정렬
                    <br />
                    <Python_01_05_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle2>입력 : input() 함수</ClassContentsTitle2>
                  <ClassContentsText>
                    - 사용자로부터 데이터를 입력받아 처리
                    <br />
                    - 기본적으로 문자열로 반환되며, 다른 데이터형으로 변환하려면
                    형변환 함수를 사용해야 함
                    <br />
                    <br />
                    <ClassContentsTitle3>입력 예제</ClassContentsTitle3>
                    <Python_01_05_Code05 />
                    <Python_01_05_Code06 />
                    <br />
                    <br />
                    <ClassContentsTitle3>
                      여러개의 데이터를 한번에 입력받기
                    </ClassContentsTitle3>
                    - split() : 입력받은 문자를 공백 기준으로 분리하여 변수에
                    넣어주는 역할을 함, 항상 공백 기준은 아니고 split(옵션)에
                    따라 기준이 달라짐
                    <br />
                    - map() : 리스트의 요소를 지정된 함수로 처리하는 함수(첫번째
                    매개변수는 적용시킬 함수 또는 형, 두번째 매개변수는 반복
                    가능한 자료형)
                    <Python_01_05_Code07 />
                  </ClassContentsText>
                  <ClassContentsTitle2>요약 정리</ClassContentsTitle2>
                  <ClassContentsText>
                    1. 출력(print) :
                    <ClassContentsTextTab>
                      - print("내용")으로 출력
                      <br />
                      - 이스케이프 문자로 출력 모양 제어 가능 (\n, \t 등)
                      <br />
                      - end와 sep 옵션으로 출력 형식 조정 가능
                      <br />
                      - 다양한 스타일로 출력 가능 (C 스타일, format, f-string)
                      <br />
                    </ClassContentsTextTab>
                    2. 입력(input) :
                    <ClassContentsTextTab>
                      - input()으로 사용자 입력 받기
                      <br />
                      - 반환값은 문자열이며, 필요한 경우 형변환 필요 (int(),
                      float() 등)
                      <br />
                    </ClassContentsTextTab>
                    3. 정렬 및 포맷 :
                    <ClassContentsTextTab>
                      - 문자열 및 숫자 정렬 가능 {`(<, >, ^)`}
                      <br />
                      - 소수점 자릿수 지정 가능 (:.nf)
                      <br />
                    </ClassContentsTextTab>
                    4. 여러 입력값 처리 :
                    <ClassContentsTextTab>
                      - split()으로 공백 기준 입력 분리
                      <br />
                      - map()으로 형변환 및 여러 변수에 입력값 저장 가능
                      <br />
                    </ClassContentsTextTab>
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
export default Python_01_05;
