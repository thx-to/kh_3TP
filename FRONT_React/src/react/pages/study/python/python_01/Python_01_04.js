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
import Python_01_04_M from "./Python_01_04_M";

const Python_01_04 = () => {
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
    navigate("/study/python/01/04");
    window.location.reload();
  };

  const Python_01_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print(’Hello, world’)
print(”Hello, world”)
print(100)
print(33.33)
print(100+20)

name = "coditor"
print(name)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
# 변수 선언 및 값 대입
num = 100
print(num)

# 기존 변수에 새로운 값 대입
num = 200
print(num)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_04_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
# "주소 : 서울시 강남구 역삼동"
# "전화번호 : 02-0000-0000"
# "직책 : 개발자"
# "이름 : coditor"
# "이메일 : admin@coditor.com"

name = "coditor"
email = "admin"
position = "개발자"
addr = "서울시 강남구 역삼동"

print(f"""
주소 : {addr}
전화번호 : 02-0000-0000
직책 : {position}
이름 : {name}
이메일 : {email}@gmail.com
""")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_04_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
and, exec, not, assert, finally, or, break, for, pass,
class, from, print, continue, global, raise, def, if,
return, del, import, try, elif, in, while, else, is,
with, except, lambda, yield
          `}
        </code>
      </pre>
    );
  };

  const Python_01_04_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
if True:
    print("True")
else:
    print("False")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_04_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
if True:
    print("Answer")
    print("True")
else:
    print("Answer")
  print("False")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_04_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
"""
작성자 : Coditor
수정날짜 : 2021.02.22
"""

print(38)        # 숫자를 출력하는 코드
print("문자열")  # 문자열을 출력하는 코드
print([1, 2, 3]) # 배열을 출력하는 코드
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Python_01_04_M />
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
              04. Python 기본
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
                  <ClassHeaderTitle>Python 기본</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>파일 작성 및 실행</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 파이썬 파일의 확장자는 반드시 .py로 설정해야 합니다.
                      <br />
                      - 간단한 프로그램은 터미널(명령 프롬프트 또는
                      PowerShell)에서 실행 가능합니다.
                      <br />- 터미널에서 파이썬 실행 모드 ({`>>>`} 상태) 종료 :
                      exit() 또는 quit() 입력
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>코드 작성해 보기</ClassContentsTitle3>
                  <Python_01_04_Code01 />
                  <hr /><br />
                  <ClassContentsTitle2>변수 사용</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 변수를 선언하고 값을 대입할 수 있습니다.
                      <br />
                      - 변수는 재할당이 가능하며, 새로운 값을 저장하면 기존 값은
                      대체됩니다.
                      <br />
                    </ClassContentsTextTab>
                    <Python_01_04_Code02 />
                  </ClassContentsText>
                  <hr /><br />
                  <ClassContentsTitle2>식별자(Identifier)</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 변수, 함수, 클래스 등 다양한 이름을 식별자로 사용
                      <br />
                      - 이름은 사용 목적을 이해하기 쉽게 설정
                      <br />
                    </ClassContentsTextTab>
                    <br />
                    <ClassContentsTitle3>제약 조건</ClassContentsTitle3>
                    <ClassContentsTextTab>
                      1. 예약어(키워드)는 사용 불가
                      <br />
                      2. 특수문자 중 _(언더바)만 허용
                      <br />
                      3. 숫자는 사용할 수 있으나, 숫자로 시작할 수 없음
                      <br />
                      4. 공백 포함 불가
                      <br />
                    </ClassContentsTextTab>
                    <br />
                    <ClassContentsTitle3>
                      이름 규칙(Naming Convention)
                    </ClassContentsTitle3>
                    <ClassContentsTextTab>
                      - snake_case : 단어를 _로 연결(주로 변수 및 함수 이름에
                      사용)
                      <br />
                      - camelCase : 첫 단어는 소문자, 이후 단어의 첫 글자는
                      대문자
                      <br />- PascalCase : 모든 단어의 첫 글자는 대문자 (주로
                      클래스 이름에 사용)
                    </ClassContentsTextTab>
                    <Python_01_04_Code03 />
                  </ClassContentsText>
                  <hr /><br />
                  <ClassContentsTitle2>예약어</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 예약된 단어로, 특정 기능을 수행하며 다른 용도로 사용할
                      수 없음
                      <br />
                    </ClassContentsTextTab>
                    <br />
                    <ClassContentsTitle3>파이썬 예약어</ClassContentsTitle3>
                    <Python_01_04_Code04 />
                  </ClassContentsText>
                  <hr /><br />
                  <ClassContentsTitle2>줄 들여쓰기</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 파이썬은 중괄호 대신 들여쓰기로 코드 블록을 구분
                      <br />
                      - 들여쓰기는 공백(Space) 또는 탭(Tab) 사용 가능
                      <br />- 동일한 블록 내에서는 반드시 동일한 공백 개수를
                      유지해야 함
                    </ClassContentsTextTab>
                    <br />
                    <ClassContentsTitle3>정상 코드</ClassContentsTitle3>
                    <Python_01_04_Code05 />
                    <br />
                    <ClassContentsTitle3>
                      오류 코드(들여쓰기 불일치)
                    </ClassContentsTitle3>
                    <Python_01_04_Code06 />
                  </ClassContentsText>
                  <hr /><br />
                  <ClassContentsTitle2>주석</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 주석은 실행되지 않으며 코드 설명이나 비활성화를 위해
                      사용
                      <br />- 주석 작성 방법 :
                      <ClassContentsTextTab>
                        · 단일 줄 : #<br />· 여러 줄 : """ """ 또는 ''' '''
                      </ClassContentsTextTab>
                    </ClassContentsTextTab>
                    <Python_01_04_Code07 />
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
export default Python_01_04;
