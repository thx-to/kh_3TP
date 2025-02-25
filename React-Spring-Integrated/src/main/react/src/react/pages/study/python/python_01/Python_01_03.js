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
import Python_01_03_M from "./Python_01_03_M";

const Python_01_03 = () => {
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
    navigate("/study/python/01/03");
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <Python_01_03_M />
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
              03. Python 용어 노트
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
                  <ClassHeaderTitle>Python 용어 노트</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>아나콘다</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 데이터 과학, 머신러닝 분야에 특화된 파이썬·R
                    패키지 모음 배포판
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - conda를 통한 손쉬운 패키지·환경 관리
                      <br />
                      - NumPy, Pandas 등 자주 쓰이는 데이터 분석 라이브러리 사전
                      탑재
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 프로젝트별 가상 환경 구축, GPU 활용
                    TensorFlow 설치, 신속한 분석 환경 <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>VS Code</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 마이크로소프트가 개발한 경량 오픈소스 에디터
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 확장 기능(Extensions)으로 기능 확장 가능 (파이썬
                      플러그인, Git 연동, Docker 지원 등)
                      <br />
                      - 빠른 속도, 다양한 언어 지원, 테마 변경, 디버깅 환경 제공
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 데이터 분석 스크립트 작성, 웹 서비스 코드
                    편집, Jupyter 확장으로 노트북 환경 구축
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>PyCharm</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : JetBrains사의 전문 파이썬 IDE
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 코드 자동완성, 품질 검사, 리팩토링, 디버깅, 테스트 등
                      고급 기능 제공
                      <br />
                      - 가상 환경 관리, 웹 프레임워크(Django, Flask) 및
                      데이터베이스 연동 지원
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 대규모 파이썬 애플리케이션 개발, 복잡한
                    머신러닝 파이프라인 관리, 웹 서비스 프로토타이핑
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>주피터 노트북</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 웹 브라우저 기반 코드 실행 및 결과 시각화
                    환경
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 셀 단위 실행으로 탐색적 데이터 분석에 적합
                      <br />
                      - 그래프, 표, 이미지 시각화 용이, Markdown 활용 문서화
                      가능
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 데이터 전처리, 모델 프로토타이핑, 실험
                    결과 공유 및 프레젠테이션
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>코랩</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 구글 클라우드 기반 주피터 노트북 서비스
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 무료 GPU/TPU 지원 → 딥러닝 모델 학습 용이
                      <br />
                      - 구글 드라이브 연동으로 파일 공유·저장 편리
                      <br />
                      - 추가 설치 없이 웹 브라우저에서 즉시 사용 가능
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 신속한 딥러닝 모델 테스트, 온라인 실습 및
                    교육, 대규모 데이터 처리 예제 구현
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>넘파이(NumPy)</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 고성능 다차원 배열 및 수치연산 라이브러리
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 내부 C/Fortran 구현으로 빠른 연산 속도
                      <br />
                      - 선형대수, 난수 생성, 푸리에 변환 지원
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 과학·공학적 연산, 머신러닝 전처리 단계
                    벡터·행렬 연산
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>판다스(Pandas)</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 고성능 다차원 배열 및 수치연산 라이브러리
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 내부 C/Fortran 구현으로 빠른 연산 속도
                      <br />
                      - 선형대수, 난수 생성, 푸리에 변환 지원
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 과학·공학적 연산, 머신러닝 전처리 단계
                    벡터·행렬 연산
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>
                    텐서플로(TensorFlow)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 구글 개발 오픈소스 딥러닝 프레임워크
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 계산 그래프 기반 효율적 연산, 자동 미분 지원
                      <br />
                      - GPU/TPU 활용, 분산 학습 기능, 다양한 API 레벨 제공
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 이미지 분류, 음성 인식, 자연어 처리 등
                    대규모 딥러닝 모델 훈련
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>케라스(Keras)</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 텐서플로 등을 백엔드로 사용하는 고수준
                    딥러닝 라이브러리
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 직관적 API(Sequential, Functional) → 빠른 모델
                      프로토타이핑
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : CNN, RNN 모델 구현, 실험용 프로토타입
                    모델 개발 <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>
                    사이킷런(Scikit-learn)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 파이썬 머신러닝 라이브러리
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 회귀, 분류, 클러스터링 등 다양한 모델 및 전처리 기능
                      지원
                      <br />
                      - 일관된 API로 모델 피팅, 예측, 평가 간편
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 기본 머신러닝 모델 학습, 평가, 특징 추출,
                    하이퍼파라미터 튜닝
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>장고(Django)</ClassContentsTitle2>
                  <ClassContentsText>
                    · <b>특징</b> : 파이썬 기반 고수준 웹 프레임워크
                    <br />· <b>장점</b> : <br />
                    <ClassContentsTextTab>
                      - 인증, 관리자 페이지, ORM, 보안 등 다양한 웹 기능 내장
                      <br />
                      - MTV(Model-Template-View) 아키틱처로 구조화된 개발 기능
                      <br />
                    </ClassContentsTextTab>
                    · <b>활용 예</b> : 블로그, 뉴스 포털, 전자상거래 웹사이트,
                    RESTful API 서버 구축
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>가상 환경</ClassContentsTitle2>
                  <ClassContentsText>
                    파이썬의 가상 환경은 프로젝트 별로 독립적인 환경을 생성하여
                    각각의 프로젝트마다 필요한 라이브러리와 패키지를 분리하여
                    관리할 수 있는 도구입니다. 가상 환경을 사용하면 다양한
                    프로젝트에서 서로 다른 버전의 패키지를 사용할 수 있으며,
                    프로젝트 간의 충돌을 피하고 프로젝트 관리를 더욱 효율적으로
                    할 수 있습니다.
                    <br />
                    가상 환경을 만들고 관리하기 위해 사용되는 주요 도구는 다음과
                    같습니다.
                    <br /><br/>
                    1. 가상 환경 생성
                    <ClassContentsTextTab>
                      - 파이썬의 기본 모듈인 venv나 virtualenv를 사용하여 가상
                      환경을 생성할 수 있습니다. 이들 도구는 파이썬 패키지를
                      격리된 디렉토리에 설치하여 가상 환경을 생성합니다.
                    </ClassContentsTextTab>
                    2. conda :
                    <ClassContentsTextTab>
                      - 아나콘다 배포판의 일부인 conda는 가상 환경을 만들고
                      관리하기 위한 강력한 도구입니다. conda를 사용하면 파이썬
                      뿐만 아니라 다양한 패키지와 의존성을 함께 관리할 수
                      있습니다.
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
export default Python_01_03;
