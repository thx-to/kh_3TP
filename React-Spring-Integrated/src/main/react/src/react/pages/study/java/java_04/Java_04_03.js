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
import Java_04_03_M from "./Java_04_03_M";

const Java_04_03 = () => {
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
    navigate("/study/java/04/03");
    window.location.reload();
  };

  const Java_04_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
  MovieTicket ticket = new MovieTicket();
  Scanner sc = new Scanner(System.in);
  while (true) {
      System.out.println("[1]예매하기");
      System.out.println("[2]종료하기");
      int selMenu = sc.nextInt();
      if(selMenu == 1) ticket.selectSeat();
      else {
          System.out.println(ticket.totalAmount());
          break;
      }
  }
}

public class MovieTicket {
    int[] seat = new int[10];

    int totalAmount() {
       int cnt = 0;
        for(int val : seat) {
            if (val == 1) cnt++;
        }
        return cnt * 12000;
    }
    void printSeat() {
        for(int i = 0; i < seat.length; i++) {
            if(seat[i] == 0) System.out.print("[ ]");
            else System.out.print("[V]");
        }
        System.out.println();
    }
    void selectSeat() {
        printSeat();
        Scanner sc = new Scanner(System.in);
        System.out.print("좌석 번호를 입력 하세요. : ");
        int seatPos = sc.nextInt();
        if(seat[seatPos-1] == 0) {
            seat[seatPos-1] = 1;
            printSeat();
        } else System.out.println("이미 예약된 좌석 입니다. 다른 좌석을 선택 하세요.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 영화표예매;
// 예매하기와 종료하기 메뉴 작성
// 총 좌석은 10개
// 좌석당 가격은 생성자를 통해서 입력
// 좌석 정보에 대한 메서드 작성 ([][][V][][][][][][][])
// 좌석 예약 하기 : 값이 0이면 예약 안된 좌석, 1이면 판매된 좌석
// 총 판매 금액에 대한 메서드 작성

import java.util.Scanner;

public class MovieMain {
    public static void main(String[] args) {
        // MovieTicket 클래스에 대한 객체 생성
        MovieTicket movieTicket = new MovieTicket(12000);
        // 입력 받기 위한 스캐너 생성
        Scanner sc = new Scanner(System.in);
        // 메뉴 작성은 무한 반복문으로 구현
        while (true) {
            System.out.println("[1]예매하기");
            System.out.println("[2]취소하기");
            System.out.println("[3]종료하기");
            int select = sc.nextInt();
            switch (select) {
                case 1:
                    movieTicket.selectSeat();
                    break;
                case 2:
                    movieTicket.cancelSeat();
                    break;
                case 3:
                    System.out.println(movieTicket.totalAmount());
                    return;
                default:
                    System.out.println("메뉴 선택이 잘 못 되었습니다.");
            }

        }
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_04_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 영화표예매;
import java.util.Scanner;

public class MovieTicket {
    // 좌석 10개에 대한 정수형 배열의 인스턴스 변수 생성
    private final int[] seat = new int[10];
    // 좌석당 가격에 대한 인스턴스 필드
    private final int price;
    // 입력을 받기 위한 스캐너 객체 생성
    private final Scanner sc = new Scanner(System.in);

    // 생성자는 좌석당 가격 정보를 객체 생성 시 넣어야 되므로 매개변수가 있는 생성자 필요
    public MovieTicket(int price) {
        this.price = price;
    }
    // 좌석 상태 표시 메서드 구현
    public void printSeat() {
        for (int e : seat) {
            if (e == 0) System.out.print("[ ]");
            else System.out.print("[V]");
        }
        System.out.println();
    }
    // 좌석 예약 메서드 구현
    public void selectSeat() {
        printSeat();
        System.out.print("좌석 번호를 입력 하세요 : ");
        int seatPos = sc.nextInt();
        if (seat[seatPos - 1] == 0) {
            seat[seatPos - 1] = 1;
            System.out.println("좌석이 예매 되었습니다.");
            printSeat();
        } else {
            System.out.println("이미 예약된 좌석 입니다.");
        }
    }

    // 예약 취소 하기 구현
    public void cancelSeat() {
        printSeat();
        System.out.print("취소할 좌석을 입력 하세요 : ");
        int seatPos = sc.nextInt();
        if (seat[seatPos - 1] == 1) {
            seat[seatPos - 1] = 0;
            System.out.println("좌석 예약이 취소 되었습니다.");
            printSeat();
        } else {
            System.out.println("예약된 좌석이 아닙니다.");
        }
    }

    // 총 판매 금액 메서드 구현 (총 판매 금액은 인스턴스 필드로 만들지 말고 결과로 반환)
    public int totalAmount() {
        int cnt = 0;
        for (int e : seat) {
            if (e == 1) cnt++;
        }
        return cnt * price;
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
        <Java_04_03_M />
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
                03. ✏️ 예제 : 영화표 예매
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
                  <ClassHeaderTitle>✏️ 예제 : 영화표 예매</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>
                    메소드 연습(영화표 예매)
                  </ClassContentsTitle1>
                  <ClassContentsTitle3>문제 설명</ClassContentsTitle3>
                  <ClassContentsText>
                    간단한 영화표사용자가 영화의 좌석을 선택하고 선택한 좌석
                    수에 따라 총 금액을 계산합니다. 예매 시스템에 대한
                    예제입니다.
                    <br />
                    사용자가 영화의 좌석을 선택하고 선택한 좌석 수에 따라 총
                    금액을 계산합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>문제의 조건</ClassContentsTitle3>
                  <ClassContentsText>
                    - 예매하기와 종료하기 메뉴 작성
                    <br />- 극장의 좌석은 10개 입니다.
                    <br />- 각 좌석당 판매 가격은 12000원 입니다. (판매 금액은
                    생성자를 통해서 정의)
                  </ClassContentsText>
                  <ClassContentsTitle3>필요한 문법</ClassContentsTitle3>
                  <ClassContentsText>
                    1. <b>클래스와 메서드</b>
                    <br />
                    <ClassContentsTextTab>
                      클래스는 객체 지향 프로그래밍의 기본 단위입니다.
                      <ClassContentsCode>MovieTicket</ClassContentsCode>{" "}
                      클래스는 영화 티켓 예매 시스템을 나타내며, 내부에
                      메서드들이 정의되어 있습니다.
                    </ClassContentsTextTab>
                    2. <b>배열</b>
                    <br />
                    <ClassContentsTextTab>
                      <ClassContentsCode>int[] seat</ClassContentsCode>는 10개의
                      정수로 이루어진 배열을 선언하며, 좌석의 예약 상태를
                      나타냅니다.
                    </ClassContentsTextTab>
                    3. <b>메서드 호출</b>
                    <br />
                    <ClassContentsTextTab>
                      <ClassContentsCode>ticket.selectSeat()</ClassContentsCode>
                      와 같이 메서드를 호출하여 해당 메서드의 코드 블록을
                      실행합니다.
                    </ClassContentsTextTab>
                    4. <b>조건문</b>
                    <br />
                    <ClassContentsTextTab>
                      <ClassContentsCode>if</ClassContentsCode>,{" "}
                      <ClassContentsCode>else</ClassContentsCode>문을 사용하여
                      조건에 따라 다른 코드 블록을 실행합니다.
                    </ClassContentsTextTab>
                    5. <b>반복문</b>
                    <br />
                    <ClassContentsTextTab>
                      <ClassContentsCode>while(true)</ClassContentsCode> 루프를
                      사용하여 무한 루프를 만들고, 조건에 따라 반복하거나
                      중단합니다.
                    </ClassContentsTextTab>
                    6. <b>입출력</b>
                    <br />
                    <ClassContentsTextTab>
                      <ClassContentsCode>Scanner</ClassContentsCode> 클래스를
                      사용하여 사용자로부터 입력을 읽어들이고,{" "}
                      <ClassContentsCode>
                        System.out.println()
                      </ClassContentsCode>
                      을 사용하여 출력을 화면에 표시합니다.
                    </ClassContentsTextTab>
                    7. <b>배열 반복문</b>
                    <br />
                    <ClassContentsTextTab>
                      일반 반복문과 향상된 for문을 사용 합니다.
                    </ClassContentsTextTab>
                    8. <b>클래스의 생성자</b>
                    <br />
                    <ClassContentsTextTab>
                      <ClassContentsCode>MovieTicket</ClassContentsCode>{" "}
                      클래스의 생성자는 코드에서는 보이지 않지만, 자바에서는
                      클래스 내에 생성자를 정의하여 객체의 초기화를 수행할 수
                      있습니다.
                    </ClassContentsTextTab>
                    <br />
                    <Java_04_03_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>기능 추가 건</ClassContentsTitle3>
                  <ClassContentsText>
                    1. 예매 취소하기 기능 추가
                    <Java_04_03_Code02 />
                    <Java_04_03_Code03 />
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

export default Java_04_03;
