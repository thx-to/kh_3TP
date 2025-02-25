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

import JavaScript_ArrowNavigation from "../javascript_components/JavaScript_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const JavaScript_01_02_M = () => {
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
  const handleStudyJavaScript = () => {
    navigate("/study/javascript");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/javascript/01/02");
    window.location.reload();
  };

  const JavaScript_01_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-html">
          {`
<body>
    <h1 id="head-line">자바스크립트</h1>
    <p id="desc">자바스크립트와 HTML을 연결합니다.</p>
    <script src="./sample.js"></script>
</body>
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const heading = document.querySelector('#head-line');
heading.onclick = function() {
    heading.style.color = "red";
}
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
const pi = 3.14;
console.log(pi * 20);
console.log("안녕하세요!"); 
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
alert("이것은 경고창입니다.");
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let result = confirm("색상을 변경하시겠습니까?");
console.log(result);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let name = prompt("이름을 입력 하세요");
console.log(name);
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let name = prompt("이름을 입력 하세요");
console.log(name + "님, 안녕하세요.")
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let person = {
    name: "Coditor",
    age: 30,
    greet: function() {
        console.log("안녕하세요 " + this.name);
    }
};
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
let numbers = [1, 2, 3, 4, 5];
          `}
        </code>
      </pre>
    );
  };

  const JavaScript_01_02_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-javascript">
          {`
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(this.brand + "가 운전 중입니다.");
    }
}
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
          <TopBoxText onClick={() => handleStudyJavaScript()}>
            JavaScript
          </TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyJavaScript()}>
            01. 자바스크립트 기초
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            02. 자바스크립트 시작하기
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>자바스크립트 개요</ClassHeaderTitle>
          </ClassHeader>
          <ClassContentsContainer> */}
        <ClassContentsTitle1>개발 환경 설정</ClassContentsTitle1>
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          Node.js 설치
        </ClassContentsTitle2>
        <ClassContentsText>
          자바스크립트는 원래 브라우저에서 실행되도록 설계되었습니다. 하지만
          Node.js를 사용하면 자바스크립트를 서버에서도 실행할 수 있어 백엔드
          개발에도 사용할 수 있습니다.
        </ClassContentsText>
        <ClassLinkBox to="https://nodejs.org/ko/download" target="_blank">
          Node.js 다운로드
        </ClassLinkBox>
        <br />
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          VS Code 설치
        </ClassContentsTitle2>
        <ClassContentsText>
          자바스크립트를 효율적으로 작성하려면 VS Code와 같은 텍스트 편집기를
          사용하는 것이 좋습니다.
        </ClassContentsText>
        <ClassLinkBox
          to="https://code.visualstudio.com/download"
          target="_blank"
        >
          VS Code 다운로드
        </ClassLinkBox>
        <br />
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          자바스크립트 개발을 위한 추천 확장 프로그램
        </ClassContentsTitle2>
        <ClassContentsText>
          - <b>JavaScript (ES6) 코드 스니펫</b> : ES6 문법을 포함한 자바스크립트
          코드 자동 완성 기능을 제공합니다.
          <br />- <b>ESLint</b> : 자바스크립트 코드의 문법 및 스타일 오류를
          찾아줍니다.
          <br />- <b>Code Runner</b> : 터미널에서 자바스크립트를 직접 실행할 수
          있도록 합니다. (Node.js가 설치되어 있어야 합니다.)
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>자바스크립트 코드 작성 방법</ClassContentsTitle1>
        <ClassContentsText>
          자바스크립트는 HTML 문서에 <b>내부 스크립트</b>나 <b>외부 스크립트</b>
          로 포함할 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          HTML과 자바스크립트 연결하기
        </ClassContentsTitle2>
        <ClassContentsText>
          HTML 문서와 자바스크립트 파일을 연결하는 방법은{" "}
          <b>내부 스크립트와 외부 스크립트 2가지 방법</b>으로 나누어 집니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>외부 스크립트 사용</ClassContentsTitle3>
        <ClassContentsText>
          유지보수의 편의성을 위해 대부분의 경우 외부 자바스크립트 파일을
          사용하는 것이 좋습니다.
          <br />
          <br />
          <b>HTML</b>
          <JavaScript_01_02_Code01 />
          <br />
          <b>sample.js</b>
          <JavaScript_01_02_Code02 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          자바 코드 실행 하기
        </ClassContentsTitle2>
        <ClassContentsText>
          자바스크립트는 브라우저나 VS Code에서 직접 실행할 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>크롬 개발자 도구 사용하기</ClassContentsTitle3>
        <ClassContentsText>
          <b>F12</b>를 눌러 크롬 개발자 도구를 열고, <b>콘솔</b> 탭에서
          자바스크립트 명령어를 직접 실행하거나 코드를 확인할 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>간단한 코드 테스트 예시</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트 실행을 테스트할 수 있는 간단한 예시입니다.
          <JavaScript_01_02_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          자바스크립트 입출력 방법
        </ClassContentsTitle2>
        <ClassContentsTitle3>경고창 출력하기</ClassContentsTitle3>
        <ClassContentsText>
          경고창은 사용자에게 간단한 메시지를 표시할 때 사용합니다.
          <JavaScript_01_02_Code04 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>확인 창 출력하기</ClassContentsTitle3>
        <ClassContentsText>
          확인창은 사용자에게 확인을 요청합니다.
          <JavaScript_01_02_Code05 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>프롬프트 창에서 입력 받기</ClassContentsTitle3>
        <ClassContentsText>
          프롬프트 창을 사용하여 사용자로부터 입력을 받을 수 있습니다.
          <JavaScript_01_02_Code06 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>콘솔창에 출력하기</ClassContentsTitle3>
        <ClassContentsText>
          console.log()를 사용하여 개발자 도구의 콘솔 창에 출력할 수 있습니다.
          <JavaScript_01_02_Code07 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2 style={{ textDecoration: "underline" }}>
          자바스크립트 기본 문법 및 개념
        </ClassContentsTitle2>
        <ClassContentsText>
          <b>1. 변수</b>
          <br />
          변수는 let, const 키워드를 사용하여 선언할 수 있습니다.
          <ClassContentsTextTab>
            - let : 블록 범위 스코프를 가지며, 같은 블록 내에서 재선언할 수
            없습니다.
            <br />- const : 블록 범위 스코프를 가지며, 값을 변경하거나 재선언할
            수 없습니다.
          </ClassContentsTextTab>
          <br />
          <b>2. 데이터 타입</b>
          <br />
          자바스크립트는 number, string, boolean, null, undefined, object 등의
          데이터 타입을 지원합니다.
          <br />
          <br />
          <b>3. 연산자</b>
          <br />
          자바스크립트는 다양한 연산자를 제공합니다 :
          <ClassContentsTextTab>
            - 산술 연산자 : +, , , /, %<br />-{" "}
            {`비교 연산자 : ==, !=, ===, !==, >, <, >=, <=`}
            <br />- 논리 연산자 : &&, ||, !
          </ClassContentsTextTab>
          <br />
          <b>4. 조건문</b>
          <br />
          if, else if, else, switch 등을 사용하여 조건문을 작성할 수 있습니다.
          <br />
          <br />
          <b>5. 반복문</b>
          <br />
          자바스크립트는 for, while, do-while 반복문을 제공합니다.
          <br />
          <br />
          <b>6. 함수</b>
          <br />
          함수는 function 키워드를 사용하여 선언할 수 있으며, 변수에 할당하거나
          인자로 전달할 수 있습니다.
          <br />
          <br />
          <b>7. 객체</b>
          <br />
          자바스크립트 객체는 키-값 쌍의 모음입니다.
          <JavaScript_01_02_Code08 />
          <br />
          <b>8. 배열</b>
          <br />
          자바스크립트 배열은 순서가 있는 값의 집합입니다.
          <JavaScript_01_02_Code09 />
          <br />
          <b>9. 클래스</b>
          <br />
          자바스크립트 클래스는 객체를 생성하는 청사진을 제공합니다.
          <JavaScript_01_02_Code10 />
        </ClassContentsText>
        {/* </ClassContentsContainer>
        </EachClass> */}
        <ArrowContainer>
          <JavaScript_ArrowNavigation direction="left" />
          <JavaScript_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default JavaScript_01_02_M;
