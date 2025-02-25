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
import Java_04_18_M from "./Java_04_18_M";

const Java_04_18 = () => {
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
    navigate("/study/java/04/18");
    window.location.reload();
  };

  const Java_04_18_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자동차만들기;
import java.util.Scanner;
import static 자동차만들기.Common.DISTANCE;

public class CarMain {
    public static void main(String[] args) {
        Car car = null;
        Scanner sc = new Scanner(System.in);
        int location = 0, carType = 0, option = 0, weather = 0;
        while (true) {
            System.out.print("이동 지역 [1]부산 [2]대전 [3]강릉 [4]광주 :  ");
            location = sc.nextInt();
            if (location > 0 && location < 5) break;
            System.out.println("이동할 지역 선택이 잘 못 되었습니다.");
        }

        System.out.print("이동할 승객 수 : ");
        int passCnt = sc.nextInt();
        
        while (true) {
            System.out.print("차량 선택 [1]스포츠카 [2]승용차 [3]버스 : ");
            carType = sc.nextInt();
            if (carType > 0 && carType < 5) break;
            System.out.println("차량 선택이 잘 못 되었습니다.");
        }

        while(true) {
            System.out.print("부가 기능 [1]ON [2]OFF : ");
            option = sc.nextInt();
            if (option == 1 || option == 2) break;
            System.out.println("모드 선택이 잘 못 되었습니다.");
        }

        boolean isMode = (option == 1) ? true : false;
        switch (carType) {
            case 1: car = new SportsCar("포르쉐 911"); break;
            case 2: car = new Sedan("제네시스 G80"); break;
            case 3: car = new Bus("고속버스"); break;
            default: System.out.println("차량 선택이 잘 못 되었습니다.");
        }

        while(true) {
            System.out.print("날씨 선택 [1]맑음 [2]비 [3]눈 : ");
            weather = sc.nextInt();
            if (weather > 0 && weather < 4) break;
            System.out.println("날씨 선택이 잘 못 되었습니다.");
        }
        
        if (car != null) {
            car.setMode(isMode);
            int moveCnt = car.getMovingCnt(passCnt);
            System.out.println("=".repeat(7) + car.getName() + "=".repeat(7));
            System.out.println("총 비용 : " + car.getTotalCost(DISTANCE[location], moveCnt) + "원");
            System.out.println("총 주유 횟수 : " + car.getRefuelCnt(DISTANCE[location], moveCnt) + "회");
            System.out.println("총 이동 시간 : " + car.getMovingTime(DISTANCE[location], moveCnt, weather));
        }
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_04_18_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자동차만들기;

import java.text.DecimalFormat;
import static 자동차만들기.Common.FUEL_PRICE;

public abstract class Car {
    protected int maxSpeed; // 최고 속도
    protected int fuelEff; // 연비 (리터당 주행 거리(Km))
    protected int fuelTank; // 연료 탱크 크기
    protected int seatCnt; // 좌석수
    protected String name; // 자동차 이름

    public Car(int maxSpeed, int fuelEff, int fuelTank, int seatCnt, String name) {
        this.maxSpeed = maxSpeed;
        this.fuelEff = fuelEff;
        this.fuelTank = fuelTank;
        this.seatCnt = seatCnt;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // 총 이동 횟수
    int getMovingCnt(int passCnt) { // 입력값으로 승객 수가 필요
        if(passCnt % seatCnt != 0) return (passCnt / seatCnt) + 1;
        return passCnt / seatCnt;
    }
    // 총 주유 횟수
    int getRefuelCnt(int dist, int moveCnt) { // 이동 거리와 이동 횟수를 매개 변수로 전달 받음
        if (((dist * moveCnt) / fuelEff) % fuelTank != 0) return (((dist * moveCnt) / fuelEff) / fuelTank) + 1;
        return ((dist * moveCnt) / fuelEff) / fuelTank;
    }
    // 총 이동 비용
    String getTotalCost(int dist, int moveCnt) {
        DecimalFormat df = new DecimalFormat("#,###");
        return df.format(((long) dist / fuelEff) * FUEL_PRICE * moveCnt);
    }
    // 총 소요 시간
    String getMovingTime(int dist, int moveCnt, int weather) {
        double getTime = (double) dist * moveCnt / maxSpeed;

        switch (weather) {
            case 2: getTime *= 1.2; break;
            case 3: getTime *= 1.4; break;
            default:
        }

        int totalMinute = (int) (getTime * 60);
        int hour = totalMinute / 60;
        int minute = totalMinute % 60;
        return String.format("%d시간 %d분", hour, minute);
    }

    abstract void setMode(boolean isMode); // 상속 받은 각각의 자동차의 특수 기능

}

          `}
        </code>
      </pre>
    );
  };

  const Java_04_18_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class SportsCar extends Car {
    public SportsCar(String name) {
        super(250, 8, 30, 2, name);
    }

    @Override
    void setMode(boolean isMode) {
        if(isMode) maxSpeed *= 1.2;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_18_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sedan extends Car {
    public Sedan(String name) {
        super(200, 12, 45, 4, name);
    }

    @Override
    void setMode(boolean isMode) {
        if(isMode) seatCnt += 1;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_18_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Bus extends Car {
    public Bus(String name) {
        super(150, 5, 100, 20, name);
    }

    @Override
    void setMode(boolean isMode) {
        if(isMode) fuelTank += 30;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_18_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자동차만들기;

public class Common {
    final static int FUEL_PRICE = 2000;
    final static int[] DISTANCE = {0, 400, 150, 200, 300};

}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_04_18_M />
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
                18. ✏️ 예제 : 자동차 만들기
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
                  <ClassHeaderTitle>✏️ 예제 : 자동차 만들기</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>실습 문제</ClassContentsTitle1>
                  <hr />
                  <ClassContentsText>
                    자동차를 상속 받아 승용차, 스포츠카, 버스를 만들고 주어진
                    설정 정보에 따라 기능 구현을 하고 결과를 출력하는 문제
                    입니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>클래스 설계</ClassContentsTitle2>
                  <hr />
                  <ClassContentsTitle3>자동차</ClassContentsTitle3>
                  <ClassContentsText>
                    자동차는 스포츠카, 승용차, 버스를 상속 주기 위해 만들어 지며
                    실제 객체화 되지 않음
                    <br />
                    구현해야 할 공통의 메소드는 자동차 클래스에서 구현해서
                    상속주는 것으로 구현
                    <br />
                    아래는 공통으로 포함되어야 할 필드 입니다.
                    <ClassContentsTextTab>
                      - 속도
                      <br />- 연비
                      <br />- 연료탱크 크기
                      <br />- 좌석수
                      <br />- 차량이름
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <ClassContentsTitle3>스포츠카</ClassContentsTitle3>
                  <ClassContentsText>
                    - 연비 : 8km
                    <br />- 속도 : 250km
                    <br />- 연료 탱크 크기 : 30리터
                    <br />- 좌석수 : 2<br />- 차량이름은 생성자에서 입력 받아서
                    설정
                    <br />- 부가기능 : 터보기능 (켜면 속도 20% 향상)
                  </ClassContentsText>
                  <ClassContentsTitle3>승용차</ClassContentsTitle3>
                  <ClassContentsText>
                    - 연비 : 12km
                    <br />- 속도 : 200km
                    <br />- 연료 탱크 크기 : 45리터
                    <br />- 좌석수 : 4<br />- 차량이름은 생성자 입력 받아서 설정
                    <br />- 부가기능 : 트렁크가 좌석으로 변경 (켜면 승객 1명
                    추가)
                  </ClassContentsText>
                  <ClassContentsTitle3>버스</ClassContentsTitle3>
                  <ClassContentsText>
                    - 연비 : 5km
                    <br />- 속도 : 150km
                    <br />- 연료탱크 크기 : 100리터
                    <br />- 좌석수 : 20
                    <br />- 차량이름은 입력 생성자 받아서 설정
                    <br />- 부가기능 : 보조연료탱크(켜면 연료탱크 크기가 30리터
                    늘어남)
                  </ClassContentsText>
                  <hr />
                  <ClassContentsTitle2>설정 정보</ClassContentsTitle2>
                  <hr />
                  <ClassContentsTitle3>기본 설정</ClassContentsTitle3>
                  <ClassContentsText>
                    - 기름값은 1리터당 2000원
                    <br />- 연비란? 리터당 주행거리를 의미합니다.
                    <br />- 부산 400km, 강릉 200km, 대전 150km, 광주 300km
                    <br />- 처음 출발시 연료통에는 기름이 없는 상태입니다.
                    <br />- 이동 횟수는 편도로 계산합니다.
                    <br />- 이동 시간은 차량의 최고속도 기준으로 계산합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>기능 구현</ClassContentsTitle3>
                  <ClassContentsText>
                    - 이동 지역을 선택하세요 (1. 부산, 2. 대전, 3. 강릉, 4.
                    광주)
                    <br />- 이동할 승객 수를 입력하세요 ( 1 ~ 100 사이)
                    <br />- 이동 차량을 선택하세요. (1. 스포츠카, 2. 승용차, 3.
                    버스)
                    <br />- 부가 기능의 ON/OFF 를 선택하세요.
                  </ClassContentsText>
                  <ClassContentsTitle3>추가 고려 사항</ClassContentsTitle3>
                  <ClassContentsText>
                    - 입력 값 검증 기능 추가 (이동 지역 및 차량 선택에 대한 잘
                    못된 입력 값 검증)
                    <br />- 기름값은 고정된 금액이므로 상수 처리
                    <br />- 날씨 요인 추가 : 비가 오면 이동 시간 20% 증가, 눈이
                    오면 이동 시간 40% 증가, 단, 이동 시간이 증가해도 연비와
                    비용은 거리와 횟수와 관련이 있으므로 비용은 증가하지 않음
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>결과 출력 예시</ClassContentsTitle2>
                  <hr />
                  <ClassContentsText>
                    이동 지역 선택 [1]부산 [2]대전 [3]강릉 [4] 광주 : 1<br />
                    이동할 승객 수 입력 : 21
                    <br />
                    이동할 차량 선택 [1]스포츠카 [2]승용차 [3]버스 : 1<br />
                    부가 기능 [1]ON [2]OFF : 1<br />
                    날씨 [1]맑음 [2]비 [3]눈 : 1<br />
                    =====Ferrari=====
                    <br />총 비용 : 1,100,000원
                    <br />총 주유 횟수 : 19회
                    <br />총 이동 시간 : 14시간 40분
                    <br />
                  </ClassContentsText>
                  <hr />
                  <ClassContentsText>
                    이동 지역 선택 [1]부산 [2]대전 [3]강릉 [4] 광주 : 1<br />
                    이동할 승객 수 입력 : 21
                    <br />
                    이동할 차량 선택 [1]스포츠카 [2]승용차 [3]버스 : 2<br />
                    부가 기능 [1]ON [2]OFF : 1<br />
                    날씨 [1]맑음 [2]비 [3]눈 : 3<br />
                    =====GV80=====
                    <br />총 비용 : 333,333원
                    <br />총 주유 횟수 : 4회
                    <br />총 이동 시간 : 14시간 0분
                  </ClassContentsText>
                  <hr />
                  <ClassContentsText>
                    이동 지역 선택 [1]부산 [2]대전 [3]강릉 [4] 광주 : 2<br />
                    이동할 승객 수 입력 : 10
                    <br />
                    이동할 차량 선택 [1]스포츠카 [2]승용차 [3]버스 : 3<br />
                    부가 기능 [1]ON [2]OFF : 2<br />
                    날씨 [1]맑음 [2]비 [3]눈 : 2<br />
                    ====== 관광버스 ======
                    <br />총 비용 : 60,000원
                    <br />총 주유 횟수 : 1회
                    <br />총 이동 시간 : 1시간 12분
                  </ClassContentsText>
                  <hr />
                  <br />
                  <br />
                  <ClassContentsTitle1>자동차 만들기 코드</ClassContentsTitle1>
                  <ClassContentsText>
                    <b>CarMain</b>
                    <Java_04_18_Code01 />
                    <br />
                    <br />
                    <b>Car</b>
                    <Java_04_18_Code02 />
                    <br />
                    <br />
                    <b>SportsCar</b>
                    <Java_04_18_Code03 />
                    <br />
                    <br />
                    <b>Sedan</b>
                    <Java_04_18_Code04 />
                    <br />
                    <br />
                    <b>Bus</b>
                    <Java_04_18_Code05 />
                    <br />
                    <br />
                    <b>Common</b>
                    <Java_04_18_Code06 />
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

export default Java_04_18;
