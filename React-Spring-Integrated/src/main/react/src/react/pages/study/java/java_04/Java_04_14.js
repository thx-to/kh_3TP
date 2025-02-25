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
import Java_04_14_M from "./Java_04_14_M";

const Java_04_14 = () => {
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
    navigate("/study/java/04/14");
    window.location.reload();
  };

  const Java_04_14_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 에어컨만들기;

import java.util.Scanner;
import static java.lang.Thread.sleep;

public class AirConMain {
    public static void main(String[] args) throws InterruptedException {
        AirCon lgAirCon = new AirCon(false, 20, false, false, 1);
        Scanner sc = new Scanner(System.in);
        System.out.print("에어컨 켜기 (yes / no) : ");
        String isOn = sc.nextLine();
        if(isOn.equalsIgnoreCase("yes")) {
            int elapsedTime = 0;  // 경과 시간을 계산하기 위한 변수
            boolean changedTemp = false;  // 온도의 변화 감지하는 변수
            lgAirCon.setPower(true);      // 에어컨 전원 켜기
            lgAirCon.setAirConSetting();  // 에어컨 설정
            while (true) {
                sleep(1000);  // 1초 동안 해당 쓰레드가 잠을 잠
                elapsedTime++;
                switch (lgAirCon.getWindStep()) {
                    case 1: if(elapsedTime >= 60) changedTemp = true; break;
                    case 2: if(elapsedTime >= 30) changedTemp = true; break;
                    case 3: if(elapsedTime >= 20) changedTemp = true; break;
                    default:
                        System.out.println("바람세기 설정 오류");
                        if(elapsedTime >= 60) changedTemp = true;
                }
                if(changedTemp) {
                    if(lgAirCon.isHeater()) lgAirCon.setCurrTemp(1);  // 현재 온도 올리기
                    if(lgAirCon.isCooler()) lgAirCon.setCurrTemp(-1); // 현재 온도 내리기
                    lgAirCon.airConInfo();  // 화면에 정보 표시 하기
                    elapsedTime = 0;
                    changedTemp = false;
                }
                // 현재 온도와 설정 온도가 같은 경우
                if(lgAirCon.getCurrTemp() == lgAirCon.getSetTemp()) {
                    System.out.println("에어컨을 종료 합니다.");
                    break;
                }
            }
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_14_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 에어컨만들기;
// 전원 : ON/OFF
// 온도 설정 기능
// 현재 온도 표시 기능
// Cooler ON/OFF
// Heater ON/OFF
// 바람세기 설정 (1단 / 2단 / 3단)

import java.util.Calendar;
import java.util.Scanner;

public class AirCon {
    private boolean isPower;  // 전원 ON/OFF
    private int setTemp;      // 온도 설정 기능
    private int currTemp;     // 현재 온도 표시
    private boolean isCooler; // 에어컨 ON/OFF
    private boolean isHeater; // 히터 ON/OFF
    private int windStep;     // 바람세기 1단, 2단, 3단
    private Scanner sc = null;
    // 생성자는 클래스가 객체로 만들어질 때 호출, 하는 일은 인스턴스 필드를 초기화 하는 일을 주로 수행
    public AirCon(boolean power, int setTemp, boolean cooler, boolean heater, int wind) {
        // 시뮬레이션 위해서 월 평균 기온을 배열로 정함
        final int[] monthTemp = {-5, 3, 10, 15, 22, 28, 32, 30, 24, 16, 8, 4};
        Calendar now = Calendar.getInstance();  // 현재 날짜와 시간 정보를 가져옴 (운영체제로 부터)
        int month = now.get(Calendar.MONTH);  // 몇월인지 정보가 넘어 오는데 배열 인덱스와 동일
        this.currTemp = monthTemp[month];
        this.isPower = power;
        this.setTemp = setTemp;
        this.isCooler = cooler;
        this.isHeater = heater;
        this.windStep = wind;
        sc = new Scanner(System.in);  // 입력을 받기 위한 스캐너 객체 생성
    }
    // 에어컨 정보를 출력하기, 온도가 변경되면 정보를 출력
    void airConInfo() {
        String onOffStr = (isPower) ? "ON": "OFF";
        String heaterStr = (isHeater) ? "ON": "OFF";
        String coolerStr = (isCooler) ? "ON": "OFF";
        final String[] windStr = {"", "1단계", "2단계", "3단계"};
        System.out.println("=".repeat(10) + "에어컨 정보" + "=".repeat(10));
        System.out.println("전원 : " + onOffStr);
        System.out.println("현재 온도 : " + currTemp);
        System.out.println("설정 온도 : " + setTemp);
        System.out.println("히터 : " + heaterStr);
        System.out.println("쿨러 : " + coolerStr);
        System.out.println("바람세기 : " + windStr[windStep]);
    }
    // 에어컨 설정하기
    public void setAirConSetting() {
        System.out.println("현재 온도가 " + currTemp + "도 입니다.");
        System.out.print("온도 설정 : ");
        setTemp = sc.nextInt();  // 설정 온도 입력 받기
        System.out.println("설정 온도는 " + setTemp + "도 입니다.");
        System.out.print("바람세기 설정(1/2/3) : ");
        windStep = sc.nextInt();
        // 히터를 켤지, 쿨러를 켤지 정하는 조건문
        if(currTemp > setTemp) { // 현재가 더운 상태
            System.out.println("Cooler가 동작 합니다.");
            isCooler = true;
            isHeater = false;
        } else if(currTemp < setTemp) {  // 현재가 추운 상태
            System.out.println("Heater가 동작 합니다.");
            isCooler = false;
            isHeater = true;
        } else {
            isCooler = false;
            isHeater = false;
        }
    }
    // 게터, 세터 만들기
    // 전원을 켜고 끄는 기능
    public void setPower(boolean power) {
        isPower = power;
    }
    // 현재의 바람세기가 얼마인지 읽는 기능
    public int getWindStep() {
        return windStep;
    }
    // 히터 상태를 확인 (ON/OFF 확인)
    public boolean isHeater() {
        return isHeater;
    }
    // 쿨러 상태 확인 (ON/OFF 확인)
    public boolean isCooler() {
        return isCooler;
    }
    // 현재 온도 변경 기능 만들기 (시뮬레이션 동작)
    public void setCurrTemp(int n) {
        currTemp += n;
    }
    // 현재 온도 확인
    public int getCurrTemp() {
        return currTemp;
    }
    // 설정 온도 확인 기능
    public int getSetTemp() {
        return setTemp;
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
        <Java_04_14_M />
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
                14. ✏️ 예제 : 에어컨 만들기
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
                  <ClassHeaderTitle>✏️ 예제 : 에어컨 만들기</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>에어컨 설계</ClassContentsTitle2>
                  <ClassContentsText>
                    클래스의 기능을 통해 현실세계에 있는 사물을 구현하는 것을
                    목표로 합니다.
                    <br />
                    실제 클래스로 설계할 사물을 기능을 분석하고 이를 필드와
                    메소드로 구현해 보겠습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>기능 설계</ClassContentsTitle3>
                  <ClassContentsText>
                    - 전원 ON/OFF 기능
                    <br />- 온도 설정 기능 (1도 단위 설정)
                    <br />- 현재 온도 표시 기능
                    <br />- 냉방기 ON/OFF 기능
                    <br />- 난방기 ON/OFF 기능
                    <br />- 바람세기 설정 (1단계 / 2단계 / 3단계)
                  </ClassContentsText>
                  <ClassContentsTitle3>설정 조건 및 동작</ClassContentsTitle3>
                  <ClassContentsText>
                    - 설정된 온도에 따라 온도 조정 기능 (60초/30초/20초) 주기로
                    온도 변함
                    <br />- 에어컨 ON/OFF 동작을 위해 Scanner 입력에 대한 문자열
                    체크
                    <br />- 현재 온도 표시를 위한 캘린더 API 활용(현재 날짜에
                    대한 적절한 온도 설정)
                    <Java_04_14_Code01 />
                    <Java_04_14_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>추가 구현 사항(?)</ClassContentsTitle2>
                  <ClassContentsTitle3>1. Thread 추가</ClassContentsTitle3>
                  <ClassContentsText>
                    - 리모컨 입력 기능 : 에어컨 켜기/끄기
                    <br />- 에어컨 동작을 입력 받기 위한 쓰레드 필요
                  </ClassContentsText>
                  <ClassContentsTitle3>2. 타이머 설정 기능</ClassContentsTitle3>
                  <ClassContentsText>
                    - 타이머 설정 기능 : 5분/10분/30분/1시간/ 연속
                    <br />- 타이머가 설정 되면 설정 온도와 현재 온도가 같아도
                    계속 동작
                    <br />- 타이머 체크 쓰레드를 별도로 만들고 해당 온도가 되면
                    에어컨 끄기
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    3. 기본 에어컨 상속 구현
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - Smart Aircon : 온도 설정 및 바람세기 설정 없이 자동으로
                    동작하게 하기 (20도 기준)
                    <br />- Portable Aircon : 동작 시 1분에 배터리 1%식 줄어
                    들게 구현
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

export default Java_04_14;
