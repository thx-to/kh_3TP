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

const JavaScript_01_01_M = () => {
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
    navigate("/study/javascript/01/01");
    window.location.reload();
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText>
            {" "}
            onClick={() => handleStudyJavaScript()}JavaScript
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
            01. 자바스크립트 개요
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>자바스크립트 개요</ClassHeaderTitle>
          </ClassHeader>
          <ClassContentsContainer> */}
        <ClassContentsText>
          <i>
            자바스크립트는 동적으로 웹 페이지를 변경하고 조작하는 데 사용될 수
            있습니다. 예를 들어, 사용자가 버튼을 클릭하면, 자바스크립트는 새로운
            콘텐츠를 로드하거나 웹 페이지의 스타일을 변경할 수 있습니다.
          </i>
        </ClassContentsText>
        <hr />
        <ClassContentsTitle1>자바스크립트란 무엇인가?</ClassContentsTitle1>
        <ClassContentsText>
          <b>자바스크립트(JavaScript)</b>는 웹 페이지를 동적으로 만들기 위한
          스크립트 언어입니다. HTML과 CSS와 함께 웹 프론트엔드 개발에서 중요한
          역할을 하는 언어입니다. 자바스크립트는 사용자가 웹사이트를 방문할 때
          브라우저에서 실행되어 웹 페이지를 동적으로 변경하거나 조작할 수 있게
          해줍니다. 예를 들어, 사용자가 버튼을 클릭하면 새로운 콘텐츠를
          로드하거나 페이지 스타일을 바꿀 수 있습니다.
          <br />
          또한, 자바스크립트는 서버 측에서도 사용될 수 있습니다. <b>Node.js</b>
          라는 런타임 환경을 사용하면 서버에서 자바스크립트를 실행할 수 있으며,
          이를 통해 데이터베이스 작업이나 웹 애플리케이션의 백엔드 개발도
          가능합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>자바스크립트의 특징</ClassContentsTitle2>
        <ClassContentsTitle3>인터프리터 언어</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트는 인터프리터 언어로, 현대 웹 브라우저에서{" "}
          <b>JIT(Just In Time) 컴파일러</b>를 사용하여 실행 시 코드를 빠르게
          컴파일합니다.
        </ClassContentsText>
        <ClassContentsTitle3>
          프로토타입 기반 객체 지향 언어
        </ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트는 <b>프로토타입 기반 객체 지향 언어</b>로, 객체를 생성한
          후에도 속성이나 메서드를 동적으로 추가하거나 삭제할 수 있는 유연성이
          특징입니다. 이는 Java나 C++과 같은 <b>클래스 기반 객체 지향 언어</b>
          와는 다른 점입니다.
        </ClassContentsText>
        <ClassContentsTitle3>동적 타입 언어</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트는 <b>동적 타입 언어</b>로, 변수의 데이터 타입이 동적으로
          변경될 수 있습니다. 즉, 같은 변수에 숫자를 저장했다가 문자열로 바꾸는
          것이 가능합니다.
        </ClassContentsText>
        <ClassContentsTitle3>함수가 일급 객체</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트의 함수는 <b>일급 객체</b>로 취급됩니다. 이는{" "}
          <b>함수가 다른 함수의 인자로 전달되거나 반환될 수 있음을 의미</b>
          합니다. 이러한 특성 덕분에 <b>고차 함수</b>를 구현할 수 있으며,
          자바스크립트에서
          <b>함수형 프로그래밍</b>이 가능하게 합니다.
        </ClassContentsText>
        <ClassContentsTitle3>클로저</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트는 <b>클로저</b>를 사용할 수 있습니다. 클로저는 함수가
          정의될 때의 환경을 기억하여, 외부 함수의 변수를 함수 내부에서 계속
          사용할 수 있게 해줍니다. 이를 통해 데이터 은닉이나 특정 상태를 유지할
          수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>자바스크립트의 역사</ClassContentsTitle2>
        <ClassContentsTitle3>탄생 배경</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트는 1995년, Netscape의 엔지니어인 Brendan Eich에 의해
          개발되었습니다. 초기 이름은 <b>LiveScript</b>였으나, Java 언어의
          인기를 고려하여 <b>JavaScript</b>로 변경되었습니다.
        </ClassContentsText>
        <ClassContentsTitle3>주요 특징</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트는 <b>다중 패러다임 언어</b>로, 동적이며 Java와 C 언어의
          구문을 기반으로 합니다. 자바스크립트는{" "}
          <b>프로토타입 기반 객체 지향</b>과 <b>함수형 프로그래밍</b>을 모두
          지원합니다. 함수가 객체로 취급되기 때문에, 함수 자체를 다른 객체처럼
          다룰 수 있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>바닐라 JS란?</ClassContentsTitle3>
        <ClassContentsText>
          <b>바닐라 JS</b>는 라이브러리나 프레임워크 없이 순수 자바스크립트만을
          사용하는 것을 의미합니다. 최근에는 다양한 라이브러리와 프레임워크의
          사용이 일반화되었지만, 바닐라 JS를 이해하는 것은 자바스크립트의 기본을
          다지는 데 중요합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>자바스크립트로 할수 있는 일</ClassContentsTitle2>
        <ClassContentsTitle3>웹 요소 제어</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트를 사용하여 웹 페이지의 요소를 동적으로 제어할 수
          있습니다. 예를 들어, 사용자가 입력한 정보를 확인하거나 특정 버튼 클릭
          시 동작을 수행하게 할 수 있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>웹 애플리케이션 개발</ClassContentsTitle3>
        <ClassContentsText>
          자바스크립트를 이용해 다양한 웹 애플리케이션을 개발할 수 있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>다양한 라이브러리 사용</ClassContentsTitle3>
        <ClassContentsText>
          <b>React</b>, <b>Vue</b>, <b>Angular</b>와 같은 라이브러리와
          프레임워크를 사용하여 더욱 강력하고 복잡한 기능을 구현할 수 있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>서버 개발</ClassContentsTitle3>
        <ClassContentsText>
          <b>Node.js</b>를 사용하면 자바스크립트로 서버를 개발할 수 있습니다.
          이를 통해 웹 애플리케이션의 프론트엔드와 백엔드를 모두 자바스크립트로
          개발할 수 있게 되었습니다.
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
export default JavaScript_01_01_M;
