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

import JavaScript_Title from "../javascript_components/JavaScript_Title";
import JavaScript_ArrowNavigation from "../javascript_components/JavaScript_ArrowNavigation";
import JavaScript_ClassList_Filtered from "../javascript_components/JavaScript_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import JavaScript_01_03_M from "./JavaScript_01_03_M";

const JavaScript_01_03 = () => {
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
  const handleStudyJavaScript = () => {
    navigate("/study/javascript");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/javascript/01/03");
    window.location.reload();
  };

  const JavaScript_01_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
// 이 줄은 주석입니다. 실행되지 않습니다.
console.log('실행됩니다.'); // 이 줄은 실행되며, 콘솔에 '실행됩니다.'가 출력됩니다.
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
/*
여러 줄의 주석입니다.
이 줄은 실행되지 않습니다.
*/
console.log('실행됩니다.'); // 이 줄은 실행되며, 콘솔에 '실행됩니다.'가 출력됩니다.
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let x = 10;
x = 20; // 변수 x에 20을 할당합니다.
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const PI = 3.14; // 상수 PI를 선언하고, 3.14를 할당합니다.
PI = 3.14159; // 에러 발생: 상수는 값을 변경할 수 없습니다.
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
console.log(test); // undefined 출력
var test = 100;
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let currentYear = 2022;
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력 하세요 : (YYYY)", "");
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let a = Number(prompt("첫번째 수 입력 : ", ""));
let b = Number(prompt("두번째 수 입력 : ", ""));
let c = Number(prompt("세번째 수 입력 : ", ""));
let max, min;

max = Math.max(a, b, c);
min = Math.min(a, b, c);

document.write("<h3>제일 큰 값 : " + max + "</h3>");
document.write("<h3>제일 작은 값 : " + min + "</h3>");
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let string = "Hello, World!";
console.log(string);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let string2 = '안녕하세요. 저는 "안유진"입니다.';
console.log(string2);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let string = '문자열' + "연결 연산자";
console.log(string);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let string = "이스케이프 문자를 이용해서\n줄 바꿈하고 싶어요.";
console.log(string);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let string = \`문자열은 큰따옴표(")나 작은따옴표(')로 감싸면 됩니다.\`;
console.log(string);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let dan = 3;
let gugu = 8;
console.log(\`\${dan} x \${gugu} = \${dan * gugu}\`);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
console.log(0.1 + 0.2); // 결과: 0.30000000000000004
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const Decimal = require('decimal.js');

const a = new Decimal(0.1);
const b = new Decimal(0.2);
const result = a.plus(b);
console.log(result.toString()); // 결과: "0.3"
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let age = prompt("나이를 입력 하세요 : ", "");
age = Number(age);

let isAdult = (age > 18) ? true : false;
if (isAdult) document.write("<h3>당신은 성인 입니다.</h3>");
else document.write("<h3> 당신은 성인이 아닙니다.</h3>");
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let empty;
console.log(empty);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
console.log(empty);
var empty = 10;
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let empty = null;
console.log(empty);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let score = [80, 99, 77, 65];
console.log(score[1]);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code21 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let array = ["아이브", "안유진", 20, true, [100, 99, 88]]; 
console.log(array[4]);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code22 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let array = [];
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code23 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let score = [88,56, 45, 67];
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code24 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let score = {
    korScore : 80,
    engScore : 77,
    matScore : 89,
    scnScore : 87
};
console.log(score.korScore);
console.log(score['matScore']);

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  getInfo: function() {
    return \`\${this.name} is \${this.age} years old and lives in \${this.city}.\`;
  }
};

console.log(person.getInfo()); // 출력 결과: 'John is 30 years old and lives in New York.'
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code25 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let name = "안유진";
console.log(typeof(name));
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code26 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code27 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const a = 2;
const b = 3;
const c = a ** b;
console.log(c); // 출력 결과: 8
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code28 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
console.log(1 == '1'); // 출력 결과: true
console.log(1 == true); // 출력 결과: true
console.log(0 == false); // 출력 결과: true

console.log(1 != '1'); // 출력 결과: false
console.log(1 != true); // 출력 결과: false
console.log(0 != false); // 출력 결과: false
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code29 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
console.log(1 === '1'); // 출력 결과: false
console.log(1 === true); // 출력 결과: false
console.log(0 === false); // 출력 결과: false

console.log(1 !== '1'); // 출력 결과: true
console.log(1 !== true); // 출력 결과: true
console.log(0 !== false); // 출력 결과: true
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code30 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const a = 10;
const b = 5;
const c = 15;

console.log(a > b || a > c); // 출력 결과: true
console.log(a < b || a > c); // 출력 결과: false

console.log(a > b && a < c); // 출력 결과: true
console.log(a < b && a > c); // 출력 결과: false

console.log(!(a > b)); // 출력 결과: false
console.log(!(a < b)); // 출력 결과: true
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code31 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const num = 7;

const message = (num % 2 === 0) ? '짝수입니다.' : '홀수입니다.';
console.log(message); // 출력 결과: '홀수입니다.'
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code32 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let num1 = 10 + '10';
console.log(num1);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code33 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let num1 = 10;
let num2 = "10";
if(num1 == num2) console.log("값이 같습니다.");
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_03_Code34 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let num1 = 10;
let num2 = "10";
console.log(10 + Number(num2));

const num = 10;
const str = String(num);
console.log(str); // 출력 결과: '10'
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <JavaScript_01_03_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJavaScript()}>
                JavaScript
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJavaScript()}>
              01. 자바스크립트 기초
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
              03. 자바스크립트 기초 문법
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <JavaScript_Title />
              <StickyClassBox>
                <JavaScript_ClassList_Filtered chapter="01" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>자바스크립트 기초 문법</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    주석(Comments)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    자바스크립트(JavaScript)에서는 코드 내에 주석을 추가하여
                    코드를 설명하거나, 코드 실행 중에 무시되어야 하는 부분을
                    나타낼 수 있습니다. 주석은 코드를 읽기 쉽게 만들어주며,
                    코드를 수정하거나 유지보수할 때 유용합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>한 줄 주석 : //</ClassContentsTitle3>
                  <ClassContentsText>
                    <JavaScript_01_03_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    여러 줄 주석 : /* …. */
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <JavaScript_01_03_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    스타일 가이드
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    자바스크립트 스타일 가이드는 개발자들이 일관된 코드 스타일을
                    사용하여 코드를 작성하도록 돕는 규칙입니다. 일관된 스타일은
                    코드의 가독성과 유지보수성을 높이는 데 도움이 됩니다.
                    <ClassContentsTextTab>
                      - 소스 파일의 이름은 알파벳 소문자, 하이픈(-),
                      밑줄(_)으로만 작성
                      <br />- 소스파일의 확장자명은 <b>.js</b>
                      <br />- 소스파일의 인코딩은 <b>UTF-8</b>
                      <br />- <b>코드 줄 바꿈</b>과 <b>세미콜론(;)</b> 사용을
                      권장합니다.
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    식별자(Identifiers)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - 첫 글자는 영문자, 언더스코어(_), $로 시작해야 합니다.
                      <br />
                      - 단어를 연결하여 식별자를 작성할 때는
                      카멜표기법(camelCase)이나 언더스코어(_)를 사용합니다.
                      <br />- 예약어는 식별자로 사용할 수 없습니다.
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    변수와 상수
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    자바스크립트에서 변수와 상수는 데이터를 저장하는 역할을
                    합니다.
                    <ClassContentsTextTab>
                      - <b>변수 선언</b> : var, let, const 키워드를 사용합니다.
                      ES6 이후에는 let과 const를 주로 사용합니다.
                      <br />
                      <br />- let : 값을 변경할 수 있는 변수
                      <JavaScript_01_03_Code03 />
                      <br />- const: 값을 변경할 수 없는 상수
                      <JavaScript_01_03_Code04 />
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    호이스팅
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    호이스팅은 변수 및 함수 선언이 스코프의 최상단으로
                    끌어올려지는 자바스크립트의 동작 방식입니다. 변수나 함수를
                    선언하기 전에 사용할 수 있지만, 변수의 초기화가 아닌 선언만
                    끌어올려지기 때문에, 선언 전에는 <b>undefined</b>로
                    초기화됩니다.
                    <JavaScript_01_03_Code05 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    실습 문제
                  </ClassContentsTitle2>
                  <ClassContentsTitle3>나이 계산 프로그램</ClassContentsTitle3>
                  <ClassContentsText>
                    <JavaScript_01_03_Code06 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    3개의 정수 중 큰 수와 작은 수 구하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <JavaScript_01_03_Code07 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    데이터 타입(Data Types)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    데이터 타입은 프로그래밍 언어의 기본적인 구성 요소 입니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>데이터 타입의 분류</ClassContentsTitle3>
                  <ClassContentsText>
                    원시 타입에 속하지 않는 자바스크립트의 값은 객체라고 합니다.
                    객체는 변수 여러 개가 모여서 만들어진 복합 데이터
                    타입입니다. 자바스크립트에서는 배열, 함수, 정규 표현식과
                    같은 다양한 요소가 객체 입니다.
                  </ClassContentsText>
                  <ClassContentsImage
                    style={{
                      backgroundImage: `url(${"/images/study/javascript/javascript_01_03_01.png"})`,
                      width: "80%",
                    }}
                  />
                  <br />
                  <ClassContentsTitle3>문자열</ClassContentsTitle3>
                  <ClassContentsText>
                    자바스크립트의 문자열은 길이가 16비트인 유니코드
                    문자(UTF-16)를 나열한 것으로 전 세계에서 사용하는 문자를
                    대부분 표현할 수 있습니다. 문자열 리터럴은 작은 따옴표(’’)나
                    큰따옴표(””)를 문자열로 앞뒤에 붙여서 표현합니다.
                    <JavaScript_01_03_Code08 />
                    <br />
                    <b>문자열에 따옴표가 포함된 경우</b>
                    <JavaScript_01_03_Code09 />
                    <br />
                    <b>문자열 연결 연산자</b>
                    <JavaScript_01_03_Code10 />
                    <br />
                    <b>이스케이프 문자</b>
                    <br />
                    <br />
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_02.png"})`,
                        width: "80%",
                      }}
                    />
                    <JavaScript_01_03_Code11 />
                    <br />
                    <b>템플릿 문자열</b>
                    <br />
                    ES6에서 추가된 템플릿 문자열은 백틱으로 문자열을 정의하는
                    방법입니다.
                    <JavaScript_01_03_Code12 />
                    <JavaScript_01_03_Code13 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>숫자형 (Number)</ClassContentsTitle3>
                  <ClassContentsText>
                    자바스크립트는 모든 숫자를 하나의 숫자형으로 다루며, 실수를
                    부동소수점 방식으로 표현합니다. 이 방식은 정확한 실수 계산에
                    문제가 있을 수 있습니다. 이를 해결하려면 BigInt를 사용하거나
                    BigDecimal 같은 라이브러리로 정밀도를 높여 계산하는 것이
                    좋습니다.
                    <br />
                    <br />
                    <b>문제 예시</b>
                    <JavaScript_01_03_Code14 />
                    <br />
                    <b>코드 예제 수정</b>
                    <br />
                    npm install decimal.js
                    <JavaScript_01_03_Code15 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>논리형</ClassContentsTitle3>
                  <ClassContentsText>
                    논리 자료형은 참 또는 거짓에 해당하는 논리 값인 true와
                    flase를 의미합니다.
                    <JavaScript_01_03_Code16 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>undefined</ClassContentsTitle3>
                  <ClassContentsText>
                    변수나 상수를 컴퓨터 메모리 공간에 선언하면 반드시 생성한
                    공간에 저장할 데이터를 할당해야 합니다. 할당하지 않을 경우
                    자바스크립트 내부적으로 젼수와 상수 공간에 임시로 데이터를
                    할당하는데, 이 때 할당되는 값이 undefined 입니다.
                    <JavaScript_01_03_Code17 />
                    <JavaScript_01_03_Code18 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>null</ClassContentsTitle3>
                  <ClassContentsText>
                    null 자료형은 null 값 하나만 있으며, 변수나 상수를 선언하고
                    의도적으로 선언한 공간을 비워 둘 때 할당 합니다.
                    <JavaScript_01_03_Code19 />
                    <ClassContentsCodeBox>
                      👉 undefined와 null을 묶어서 특수 자료형이라고도 합니다.
                    </ClassContentsCodeBox>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    객체와 배열
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    객체(object)는 자바스크립트의 핵심적인 자료형 입니다. 기본
                    자료형을 제외하고 자바스크립트의 거의 모든 데이터와
                    자료구조는 객체 입니다.
                    <br />
                    객체 자료형에는 배열, 객체 리터럴, 함수가 있습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>배열</ClassContentsTitle3>
                  <ClassContentsText>
                    복수의 데이터를 정의 할 수 있는 자료형
                    <JavaScript_01_03_Code20 />
                    <ClassContentsCodeBox>
                      👉 배열은 자바와 다르게 모든 자료형을 저장 할 수 있습니다.
                    </ClassContentsCodeBox>
                    <JavaScript_01_03_Code21 />
                    <br />
                    배열로 정의한 데이터를 요소라고 하며, 배열의 요소를
                    접근하려면 인덱스를 이용 합니다.
                    <br />
                    배열의 데이터의 위치를 나타내는 인덱스는 0 부터 시작 합니다.
                    <br />
                    빈 배열을 선언 할 수 있습니다. (나중에 데이터를 동적으로
                    추가 위해 사용)
                    <JavaScript_01_03_Code22 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    객체 리터럴 (오브젝트)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    객체 리터럴은 객체를 정의하는 가장 간단한 방법 입니다.{" "}
                    <b>
                      객체 리터럴은 객체를 정의할 때 중괄호{}를 사용하며, 중괄호
                      안에는 키와 값의 한쌍으로 이루어진 속성
                    </b>
                    이 들어 갑니다.
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_03.png"})`,
                        width: "80%",
                      }}
                    />
                    객체 리터럴로 정의한 객체는 배열보다 작업이 많습니다. <br />
                    아래의 배열에서 국어, 영어, 수학, 과학 성적 저장 시 값의
                    의미를 파악할 수 없습니다.
                    <JavaScript_01_03_Code23 />
                    <JavaScript_01_03_Code24 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>typeof</ClassContentsTitle3>
                  <ClassContentsText>
                    <JavaScript_01_03_Code25 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>toString()</ClassContentsTitle3>
                  <ClassContentsText>
                    배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의
                    문자열로 반환 합니다.
                    <JavaScript_01_03_Code26 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
                    연산자
                  </ClassContentsTitle2>
                  <ClassContentsTitle3>산술연산자</ClassContentsTitle3>
                  <ClassContentsText>
                    덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%),
                    거듭제곱(**)을 수행합니다.
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_04.png"})`,
                        width: "80%",
                      }}
                    />
                    <JavaScript_01_03_Code27 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    대입 연산자와 복합 대입 연산자
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_05.png"})`,
                        width: "80%",
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>비교 연산자</ClassContentsTitle3>
                  <ClassContentsText>
                    비교 연산자는 피연산자를 비교한 뒤, 논리형 값인 참, 거짓으로
                    반환하는 연산을 수행 합니다.
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_06.png"})`,
                        width: "80%",
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    동등 연산자와 부등 연산자
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    동등 연산자 (==): 두 값이 같은지 비교합니다. 자료형이 다를
                    경우 자동으로 형변환이 일어납니다.
                    <JavaScript_01_03_Code28 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    일치 연산자와 불일치 연산자
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    일치 연산자 (===): 두 값이 같은지 비교합니다. 자료형도
                    같아야 합니다.
                    <JavaScript_01_03_Code29 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>논리 연산자</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_07.png"})`,
                        width: "80%",
                      }}
                    />
                    <JavaScript_01_03_Code30 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>삼항 연산자</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_08.png"})`,
                        width: "80%",
                      }}
                    />
                    <JavaScript_01_03_Code31 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>연산자 우선 순위</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        backgroundImage: `url(${"/images/study/javascript/javascript_01_03_09.png"})`,
                        width: "80%",
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>형변환</ClassContentsTitle2>
                  <ClassContentsText>
                    자바스크립트는 동적인 언어로, 변수의 데이터 타입이 자동으로
                    결정됩니다. 때문에 때때로 변수의 데이터 타입을 명시적으로
                    지정해주거나, 데이터 타입을 변환해주어야 할 필요가 있습니다.
                    이를 형변환이라고 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>묵시적 형 변환</ClassContentsTitle3>
                  <ClassContentsText>
                    자바스크립트는{" "}
                    <b>
                      숫자형 데이터와 문자열 데이터를 연결 연산자로 처리하면
                      문자열로 형 변환
                    </b>
                    이 일어 납니다.
                    <JavaScript_01_03_Code32 />
                    <JavaScript_01_03_Code33 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>명시적 형 변환</ClassContentsTitle3>
                  <ClassContentsText>
                    <JavaScript_01_03_Code34 />
                  </ClassContentsText>
                </ClassContentsContainer>
              </EachClass>
              <ArrowContainer>
                <JavaScript_ArrowNavigation direction="left" />
                <JavaScript_ArrowNavigation direction="right" />
              </ArrowContainer>
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};
export default JavaScript_01_03;
