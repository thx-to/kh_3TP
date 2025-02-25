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

const Python_01_07_M = () => {
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
    navigate("/study/python/01/07");
    window.location.reload();
  };

  const Python_01_07_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print("안녕하세요" + " 반갑습니다.")  # 결과: "안녕하세요 반갑습니다."
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print("안녕" * 3)  # 결과: "안녕안녕안녕"
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
print(38)
print("문자열")
print([1, 2, 3])
print(1+2)
print("파"+"이"+"썬")
print("파""이""썬") # 띄어쓰기 없다.
print("파","이","썬") # 콤마는 띄어쓰기를 의미 한다. sep 옵션을 통해 변경 가능

print("\n\n\n") # 줄바꿈 문자 (이스케이프 케릭터라고 함)

# 작은 따옴표 3개를 사용해도 동일 함
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

  const Python_01_07_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
text = "안녕하세요"
print(text[0])   # 결과: "안" (첫 번째 문자)
print(text[-1])  # 결과: "요" (뒤에서 첫 번째 문자)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
text = "안녕하세요"
print(text[1:4])    # 결과: "녕하세" (인덱스 1~3)
print(text[::2])    # 결과: "안하요" (2칸 간격으로 추출)
print(text[::-1])   # 결과: "요세하녕안" (문자열 뒤집기
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
jumin = "991120-1234567"

print("성별 : " + jumin[7]) # 인덱스 7은 8번째 숫자를 의미 합니다.
print("년 : " + jumin[:2]) # 0부터 2 미만까지 (0,1)
print("월 : " + jumin[2:4]) # 2부터 4 미만
print("일 : " + jumin[4:6])

print("생년월일 : " + jumin[:6])
print("뒤 7자리 : " + jumin[7:])
print("뒤 7자리 : " + jumin[-7:])
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
a = "Hello Python Program.."
print(a.upper())
print(a.lower())
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
input_str = "Hello Python Program"
new_str = input_str.replace("Python", "JavaScript") 
print(new_str)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
text = "banana"
print(text.count("a"))  # 결과: 3
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
text = "Hello World"
print(len(text))  # 결과: 11
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
phrase = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서"
print(phrase.find("가장"))
print(phrase.rfind("가장")) # 뒤에서 부터 찾지만 인덱스는 앞에서 부터

print(phrase.index("포기")) 

print(phrase.find("나에게"))  # 찾는 결과 없으면 -1
print(input_b.index("나에게")) # 해당 단어가 없으므로 에러가 발생 합니다

new_phrase = phrase.replace("가장", "나에게")
print(new_phrase)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
input_a = """
    안녕하세요.
문자열 함수를 알아 봅니다.

    """
print(input_a.strip())
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
# 한파의 연속인 1월 입니다.
# 봄을 기다리는 2월 입니다.
# 봄의 기운이 느껴지는 3월 입니다.
# 새싹이 피어나는 4월 입니다.
# 계절의 여왕 5월 입니다.  
# 활동하기 좋은 6월 입니다. 
# 휴가가 기다려지는 7월 입니다. 
# 무더운 8월 입니다. 
# 선선한 9월 입니다. 
# 천고마비의 계절 10월 입니다.
# 쓸쓸한 늦가을 11월 입니다.
# 올 한해의 마무리 12월 입니다.

name = input("이름 : ")
event = input("제목 : ")
date = input("일시 : ")
time = input("시간 : ")

# date에서 몇월인지 가져오기
month = date[4:6]
greeting = "봄의 기운이 느껴지는 3월 입니다."

print(f"{name}님.")
print(greeting)
print(f"아래와 일정으로 {event}를 진행 하고자 하오니 오셔서 \
자리를 빛내 주시기 바랍니다.\n")
print("="*5, "행사 안내", "="*5)
print("행사 안내 : " + event)
# print("일시 : " + date[:4] + "년 " + date[4:6]+"월 " + date[6:8] + "일")
print(f"일시 : {date[:4]}년 {date[4:6]}월 {date[6:8]}일")
print("시간 : " + time + "시")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
if month == "01":
    greeting = "한파의 연속인 1월 입니다."
elif month == "02":
    greeting = "봄을 기다리는 2월 입니다."
elif month == "03":
    greeting = "봄의 기운이 느껴지는 3월 입니다."
elif month == "04":
    greeting = "새싹이 피어나는 4월 입니다."
elif month == "05":
    greeting = "계절의 여왕 5월 입니다."
elif month == "06":
    greeting = "활동하기 좋은 6월 입니다."
elif month == "07":
    greeting = "휴가가 기다려지는 7월 입니다."
elif month == "08":
    greeting = "무더운 8월 입니다."
elif month == "09":
    greeting = "무더운 8월 입니다."
elif month == "10":
    greeting = "천고마비의 계절 10월 입니다."
elif month == "11":
    greeting = "쓸쓸한 늦가을 11월 입니다."
else :
    greeting = "올 한해의 마무리 12월 입니다."
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
trans_time = int(time)
if(trans_time > 12):
    trans_time = trans_time - 12
    time = "오후" + str(trans_time)
else:
    time = "오전" + str(trans_time)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
url = input("사이트 : ")

my_str = url.replace("http://", "")
my_str = my_str[:my_str.index(".")] # 슬라이싱, 처음부터 . 위치 미만까지
password = my_str[:3] + str(len(my_str)) + str(my_str.count("o")) + str(my_str.count("k")) + "!" + "coditor"
print("비밀번호 : " + password)# 각 사이트 비밀번호 자동으로 만들기
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
file_name = "password.txt"
f = open(file_name, "wt") #t는 텍스트 모드이며 기본 값
while True:
    url = input("사이트 : ")
    if url == "exit": break
    my_str = url.replace("http://", "")
    my_str = my_str[:my_str.index(".")] # 슬라이싱, 처음부터 . 위치 미만까지
    password = my_str[:3] + str(len(my_str)) + str(my_str.count("o")) + str(my_str.count("o")) + "!" + "coditor"
    print("비밀번호 : " + password)# 각 사이트 비밀번호 자동으로 만들기
    f.write(password + "\n")
f.close()
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
hour, min, sec = map(int, input("시간 입력 : ").split(":"))
if hour == 12:
    print(f"오후 : {hour}시 {min}분 {sec}초 ")
elif hour > 12:
    hour -= 12 # hour = hour - 12
    print(f"오후 {hour}시 {min}분 {sec}초")
else:
    print(f"오전 {hour}시 {min}분 {sec}초")
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
a, b, c = map(int, input("정수 입력 : ").split())
if a > b :
    if a > c : print(a)
    else : print(c)
else :
    if b > c : print(b)
    else : print(c)
          `}
        </code>
      </pre>
    );
  };

  const Python_01_07_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-python">
          {`
from datetime import datetime
curr_year = datetime.today().year
jumin = input("주민등록번호 : ")
year = int(jumin[:2])
gender = int(jumin[7])
month = int(jumin[2:4])
day = int(jumin[4:6])

if gender == 1 or gender == 2:
    age = curr_year - 1900 - year
else:
    age = curr_year - 2000 - year

if gender == 1 or gender == 3:
    gender_str = "남성"
else:
    gender_str = "여성"

print(f"생년월일 : {year:02}년 {month:02}월 {day:02}일")
print(f"성별 : {gender_str}")
print(f"나이 : {age}")
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
          <TopBoxText2 onClick={() => handleRefresh()}>07. 문자열</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>Python?</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>문자열 표현 방법</ClassContentsTitle2>
        <ClassContentsText>
          문자열은 문자들의 집합으로, 파이썬에서는 다음 방법으로 표현할 수
          있습니다: 1. <b>큰따옴표("")</b>로 감싸기
          <ClassContentsTextTab>- 예 : "안녕하세요"</ClassContentsTextTab>
          2. <b>작은따옴표('')</b>로 감싸기
          <ClassContentsTextTab>- 예 : '안녕하세요'</ClassContentsTextTab>
          3. <b>큰따옴표 3개(""" """)</b>로 감싸기 : 여러 줄 문자열에 사용
          <ClassContentsTextTab>
            - 예 : """ 안녕하세요. 반갑습니다. """"
          </ClassContentsTextTab>
          4. <b>작은따옴표 3개(''' ''')</b>로 감싸기 : 여러 줄 문자열에 사용
          <ClassContentsTextTab>
            - 예 : ''' 안녕하세요. 반갑습니다.'''
          </ClassContentsTextTab>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>이스케이프 코드</ClassContentsTitle2>
        <ClassContentsText>
          문자열 내에서 특수한 동작을 수행하거나 특정 문자를 표현할 떄
          사용합니다.
        </ClassContentsText>
        <ClassTableBox>
          <ClassTable style={{ width: "60%", textAlign: "center" }}>
            <ClassTableTr>
              <ClassTableTd
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              >
                <b>코드</b>
              </ClassTableTd>
              <ClassTableTd
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              >
                <b>설명</b>
              </ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\n</ClassTableTd>
              <ClassTableTd>문자열 안에서 줄을 바꿀 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\t</ClassTableTd>
              <ClassTableTd>문자열 사이에 탭 간격을 줄 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\\</ClassTableTd>
              <ClassTableTd>\를 표현 할 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\’</ClassTableTd>
              <ClassTableTd>작은 따옴표를 표현 할 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\”</ClassTableTd>
              <ClassTableTd>큰 따옴표를 표현 할 때 사용</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\b</ClassTableTd>
              <ClassTableTd>백 스페이스</ClassTableTd>
            </ClassTableTr>
            <ClassTableTr>
              <ClassTableTd>\r</ClassTableTd>
              <ClassTableTd>커서를 줄의 맨 앞으로 옮김</ClassTableTd>
            </ClassTableTr>
          </ClassTable>
        </ClassTableBox>
        <br />
        <ClassContentsTitle2>문자열 연산</ClassContentsTitle2>
        <ClassContentsText>
          1. <b>문자열 연산(+)</b>
          <ClassContentsTextTab>- 두 문자열을 합칩니다.</ClassContentsTextTab>
          <Python_01_07_Code01 />
          2. <b>문자열 반복(*)</b>
          <ClassContentsTextTab>
            문자열을 주어진 횟수만큼 반복합니다.
          </ClassContentsTextTab>
          <Python_01_07_Code02 />
          <Python_01_07_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>문자열 인덱싱</ClassContentsTitle2>
        <ClassContentsText>
          문자열에서 특정 위치의 문자를 선택하는 작업을 <b>인덱싱</b>
          이라고 합니다.
          <ClassContentsTextTab>
            - 문자열의 각 문자는 <b>인덱스</b>로 접근 가능하며, 인덱스는{" "}
            <b>0부터 시작</b>합니다.
            <br />
            - 음수 인덱스를 사용하면 문자열 뒤에서부터 접근합니다.
            <br />- 사용법 : 문자열[index]
          </ClassContentsTextTab>
        </ClassContentsText>
        <ClassContentsTitle3>예제</ClassContentsTitle3>
        <Python_01_07_Code04 />
        <br />
        <ClassContentsTitle2>문자열 슬라이싱(Slicing)</ClassContentsTitle2>
        <ClassContentsText>
          문자열의 일부를 잘라내는 작업을 <b>슬라이싱</b>이라고 합니다.
          <ClassContentsTextTab>
            - <b>구문</b> : 문자열[start:end:step]
            <br />
            - start : 시작 인덱스 (포함)
            <br />
            - end : 끝 인덱스 (포함하지 않음)
            <br />- step : 추출 간격 (기본값: 1)
          </ClassContentsTextTab>
          <Python_01_07_Code05 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>인덱싱 및 슬라이싱 연습</ClassContentsTitle3>
        <ClassContentsText>
          - 주민등록번호 자르기
          <br />
          - 하위 7자리중 첫번째 글자는 성별을 의미 합니다.
          <br />
          - 앞의 6자리는 년,월,일을 의미 합니다.
          <br />
          <font color="#2c79c1">
            <b>
              <i>
                인덱싱의 범위는 0부터 시작 합니다. 프로그램의 모든 시작 위치는 0
                입니다.
                <br />
                그러므로 항상 실제 숫자보다 1이 작다는걸 유의 해야 합니다.
              </i>
            </b>
          </font>
          <Python_01_07_Code06 />
        </ClassContentsText>
        <br />
        <hr />
        <br />
        <ClassContentsTitle2>문자열 함수</ClassContentsTitle2>
        <ClassContentsTitle3>
          대소문자 바꾸기 : upper()와 lower()
        </ClassContentsTitle3>
        <ClassContentsText>
          <Python_01_07_Code07 />
        </ClassContentsText>
        <ClassContentsTitle3>문자열 변경 : replace(””, “”)</ClassContentsTitle3>
        <ClassContentsText>
          - .replace(old, new) : 문자열에서 old를 찾아 new로 변경
          <Python_01_07_Code08 />
        </ClassContentsText>
        <ClassContentsTitle3>문자 갯수 세기</ClassContentsTitle3>
        <ClassContentsText>
          - .count(char) : 문자열에서 특정 문자의 개수를 반환
          <Python_01_07_Code09 />
        </ClassContentsText>
        <ClassContentsTitle3>문자열 길이</ClassContentsTitle3>
        <ClassContentsText>
          - len(string) : 문자열의 전체 길이 반환
          <Python_01_07_Code10 />
        </ClassContentsText>
        <ClassContentsTitle3>
          문자열 찾기 : find()와 rfind(), 그리고 index()
        </ClassContentsTitle3>
        <ClassContentsText>
          - <b>find()</b> : 찾은 부분 문자열의 첫 번째 인덱스를 반환합니다. 부분
          문자열을 찾지 못하면 -1을 반환합니다.
          <br />- <b>index()</b> : 찾은 부분 문자열의 첫 번째 인덱스를
          반환합니다. 부분 문자열을 찾지 못하면 ValueError 예외를 발생시킵니다.
          <Python_01_07_Code11 />
        </ClassContentsText>
        <ClassContentsTitle3>문자열 양옆의 공백제거</ClassContentsTitle3>
        <ClassContentsText>
          - <b>.strip()</b> : 양쪽 공백 제거
          <br />- <b>.lstrip()</b> : 왼쪽 공백 제거
          <br />- <b>.rstrip()</b> : 오른쪽 공백 제거
          <Python_01_07_Code12 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>응용예제 1번</ClassContentsTitle3>
        <ClassContentsText>
          <font color="#2c79c1">
            <b>
              <i>행사 안내 메일 내용 자동 작성 하기</i>
            </b>
          </font>
          <ClassContentsTextTab>
            - 이름 : 백이진
            <br />
            - 행사내용 : 현대 자동차 신차 발표회
            <br />
            - 일시 : 20220301 (연속해서 입력)
            <br />- 시간 : 14
          </ClassContentsTextTab>
          <Python_01_07_Code13 />
          <br />
          <b>👉 추가 과제 : </b>
          <br />
          <ClassContentsTextTab>
            1. 월별 안내 문구를 자동으로 변경 해보기
          </ClassContentsTextTab>
          <Python_01_07_Code14 />

          <ClassContentsTextTab>
            2. 시간을 14로 입력 받으면 오후 2시로 출력 해보기
          </ClassContentsTextTab>
          <Python_01_07_Code15 />
          <ClassContentsTextTab>
            3. 파일로 저장해보기
            <br />
            4. 파일에서 발송 명단 가져 오기
            <br />
          </ClassContentsTextTab>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>응용 예제 2번</ClassContentsTitle3>
        <ClassContentsText>
          <font color="#2c79c1">
            <b>
              <i>각 사이트 비밀번호 자동으로 만들기</i>
            </b>
          </font>
          <br />
          - 규칙1 : http://naver.com에서 앞의 http:// 잘라내기
          <br />
          - 규칙2 : 처음 만나는 점(.) 이후는 제외 <br />
          - 규칙3 : 남은 글자 중 처음 세자리 + 글자 갯수 + 글자에 포함된 'o'
          갯수 +글자에 포함된 'k' 갯수+ '!' + 자신의이니셜(예: 'coditor')
          <br />
          <Python_01_07_Code16 />
        </ClassContentsText>
        <ClassContentsTitle3>번외 과제</ClassContentsTitle3>
        <ClassContentsText>
          - 반복 수행 및 종료 조건 추가
          <br />
          - 파일에 저장 하기
          <Python_01_07_Code17 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>연습문제 1번</ClassContentsTitle3>
        <ClassContentsText>
          정해진 형식으로 시간을 입력 받아서 출력하기
          <Python_01_07_Code18 />
        </ClassContentsText>
        <ClassContentsTitle3>연습문제 2번</ClassContentsTitle3>
        <ClassContentsText>
          3개의 정수를 입력 받아 최대값 구하기
          <Python_01_07_Code19 />
        </ClassContentsText>
        <ClassContentsTitle3>연습문제 3번</ClassContentsTitle3>
        <ClassContentsText>
          주민등록번호를 입력받아 생년월일, 성별, 나이 출력하기
          <Python_01_07_Code20 />
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
export default Python_01_07_M;
