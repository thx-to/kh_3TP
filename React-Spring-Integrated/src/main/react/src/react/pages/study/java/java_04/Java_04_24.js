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

import Java_Title from "../java_components/Java_Title";
import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import Java_ClassList_Filtered from "../java_components/Java_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Java_04_24_M from "./Java_04_24_M";

const Java_04_24 = () => {
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
  const handleStudyJava = () => {
    navigate("/study/java");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/java/04/24");
    window.location.reload();
  };

  const Java_04_24_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 템플릿메서드;

public class TemplateMain {
    public static void main(String[] args) {
        Car petrolCar = new PetrolCar();
        System.out.println("휘발유 자동차 운전 시작 : ");
        petrolCar.drive();
        System.out.println();
    }
}

// 추상 클래스 Car: 템플릿 메서드를 제공하는 자동차 클래스
abstract class Car {
    // 템플릿 메서드: 자동차 운전 흐름을 정의
    public final void drive() {
        startEngine();  // 시동 켜기
        driveCar();     // 운전하기
        stopEngine();   // 시동 끄기
    }

    // 추상 메서드들: 하위 클래스가 각각 구현할 부분
    protected abstract void startEngine();
    protected abstract void driveCar();
    protected abstract void stopEngine();
}

// 휘발유 자동차(PetrolCar) 클래스
class PetrolCar extends Car {
    @Override
    protected void startEngine() {
        System.out.println("휘발유 자동차의 엔진을 시동겁니다.");
    }

    @Override
    protected void driveCar() {
        System.out.println("휘발유 자동차를 운전합니다.");
    }

    @Override
    protected void stopEngine() {
        System.out.println("휘발유 자동차의 엔진을 끕니다.");
    }
}

// 전기 자동차(ElectricCar) 클래스
class ElectricCar extends Car {
    @Override
    protected void startEngine() {
        System.out.println("전기 자동차의 배터리를 활성화합니다.");
    }

    @Override
    protected void driveCar() {
        System.out.println("전기 자동차를 조용하게 운전합니다.");
    }

    @Override
    protected void stopEngine() {
        System.out.println("전기 자동차의 배터리를 끕니다.");
    }
}

          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_04_24_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                04. 객체 지향 프로그래밍
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                24. Template Method
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="04" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>Template Method</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>
                    템플릿 메서드(Template Method)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    - 템플릿 메서드는 상위 클래스에서{" "}
                    <b>알고리즘의 구조를 정의</b>하고, 일부 세부 단계는 하위
                    클래스에서 구현하는 디자인 패턴
                    <br />
                    - 상위 클래스에서 알고리즘의 전체적인 흐름을 정의하고, 하위
                    클래스가 세부 단계의 구현을 책임
                    <Java_04_24_Code01 />
                  </ClassContentsText>
                </ClassContentsContainer>
              </EachClass>
              <ArrowContainer>
                <Java_ArrowNavigation direction="left" />
                <Java_ArrowNavigation direction="right" />
              </ArrowContainer>
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Java_04_24;
