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
import Java_04_05_M from "./Java_04_05_M";

const Java_04_05 = () => {
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
    navigate("/study/java/04/05");
    window.location.reload();
  };

  const Java_04_05_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 아이패드주문하기;

public class IPadMain {
    public static void main(String[] args) throws InterruptedException {
        while(true) {
            IPadPro iPadPro = new IPadPro("iPad Pro");
            if (!iPadPro.continueOrder()) break;
            iPadPro.setScreen();
            iPadPro.setColor();
            iPadPro.setMemory();
            iPadPro.setNetwork();
            iPadPro.setName();
            iPadPro.progressIPadPro();
            iPadPro.iPadProInfo();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_05_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 아이패드주문하기;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import static java.lang.Thread.sleep;

public class IPadPro {
    private final Scanner sc; // 입력 받기 위한 스캐너 참조 변수 생성
    private int screen;  // 11인치, 13인치
    private int color;   // 스페이스그레이, 실버
    private int memory;  // 256GB, 512GB, 1TB, 2TB
    private int network; // Wi-Fi, Wi-Fi+Cellular
    private String name; // 각인 서비스 이름 저장
    private String productDate;  // 제품 생산 일자
    String serialNum;  // 제품에 대한 일련번호
    private int price;   // 제품 구매 가격
    private static int cnt = 0;  //  제품 생산 대수, 클래스 변수
    public IPadPro(String name) {  // 생성자는 클래스가 객체로 만들어 질 때 호출
        this.sc = new Scanner(System.in);
        this.name = name;  // 생성자 호출 시 이름을 전달 받아서 초기값 지정
        Date now = new Date(); // 현재 시간을 운영체제로 부터 받아 옴
        SimpleDateFormat sdf = new SimpleDateFormat("yyMMdd");
        productDate = sdf.format(now); // 지정된 format 형태로 시간정보가 가공되서 반환 됨
        cnt++;
        productDate += cnt;   // 산술연산이 아니고 문자열을 연결 함
    }
    public boolean continueOrder() {
        System.out.println("====== iPad Pro 구입하기 =====");
        System.out.print("구입을 진행하려면 yes / 종료는 no : ");
        String isContinue = sc.next();
        if (isContinue.equalsIgnoreCase("yes")) return true;
        else return false;
    }
    public void setScreen() {
        while (true) {
            System.out.print("디스플레이 선택 [1]11인치 [2]13인치 : ");
            screen = sc.nextInt();
            if (screen == 1 || screen == 2) return;
            System.out.println("디스플레이 선택이 잘 못 되었습니다.");
        }

    }
    public void setColor() {
        while (true) {
            System.out.print("컬러 선택 [1]스페이스그레이 [2]실버 : ");
            color = sc.nextInt();
            if (color == 1 || color == 2) return;
            System.out.println("컬러 선택이 잘 못 되었습니다.");
        }
    }

    public void setMemory() {
        while (true) {
            System.out.print("메모리 선택 [1]256GB [2]512GB [3]1TB [4]2TB : ");
            memory = sc.nextInt();
            if (memory > 0 && memory < 5) return;
            System.out.println("메모리 선택이 잘 못 되었습니다.");
        }
    }

    public void setNetwork() {
        while (true) {
            System.out.print("네트워크 선택 : [1]WiFI [2]WiFi+Cellular : ");
            network = sc.nextInt();
            if (network == 1 || network == 2) return;
            System.out.println("네트워크 선택 이 잘 못 되었습니다.");
        }
    }
    public void setName() {
        System.out.print("각인 서비스를 신청 하시겠습니까? (yes / no) : ");
        String nameService = sc.next();
        sc.nextLine();
        if (nameService.equalsIgnoreCase("yes")) {
            System.out.print("이름을 입력 하세요 : ");
            name = sc.nextLine();
        }
    }

    // 일련번호 만들기
    public void setSerialNum() {
        String screenStr = (screen == 1) ? "11" : "13";
        String[] memoryStr = {"", "256","512", "1024", "2048"};
        String networkStr = (network == 1) ? "W" : "C";
        serialNum = "iPadPro" + screenStr + memoryStr[memory] + networkStr + productDate;
    }
    // 제품 옵션 선택이 완료되면 출고까지 30초 동안 제품 생산 진행 상황을 보여주고 출고
    public void progressIPadPro() throws InterruptedException {
        int cnt = 0;
        setSerialNum();  // 시리얼 넘버 생성
        while (true) {
            sleep(300); // 0.3초를 의미
            cnt++;
            System.out.printf("<< iPadPro 제작 중 : [%d%%] >>\r", cnt);
            if (cnt >= 100) break;
        }
    }
    // 제품 선택 옵션과 일련번호, 총 가격
    public void iPadProInfo() {
        final String[] screenType = {"", "11인치", "13인치"};
        final String[] colorType = {"", "스페이스 그레이", "실버"};
        final String[] memoryType = {"", "256GB", "512GB", "1TB", "2TB"};
        final String[] networkType = {"", "WiFI", "WiFi+Cellular"};
        System.out.println("============== iPad Pro 출고 =============");
        System.out.println("화면 : " + screenType[screen]);
        System.out.println("색상 : " + colorType[color]);
        System.out.println("용량 : " + memoryType[memory]);
        System.out.println("네트워크 : " + networkType[network]);
        System.out.println("이름 : " + name);
        System.out.println("일련번호 : " + serialNum);
        System.out.println("제품 가격 : " + iPadProCalcPrice() + "원");
        System.out.println("-----------------------------------------");
    }

    // 선택한 옵션을 포함한 제품 가격 구하기
    public String iPadProCalcPrice() {
        NumberFormat numberFormat = NumberFormat.getInstance();  // 숫자 형식 지정 객체 생성
        int[] screenPrice = {0, 1499000, 1999000};
        int[] memoryPrice = {0, 0, 300000, 900000, 1500000};
        int[] networkPrice = {0, 0, 300000};

        price += screenPrice[screen];
        price += memoryPrice[memory];
        price += networkPrice[network];
        return numberFormat.format(price);
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
        <Java_04_05_M />
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
                05. ✏️ 예제 : 아이패드 주문하기
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
                  <ClassHeaderTitle>
                    ✏️ 예제 : 아이패드 주문하기
                  </ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>코드 설명</ClassContentsTitle2>
                  <ClassContentsText>
                    이 자바 프로그램은 사용자가 가상으로 아이패드를 주문하고,
                    제작 과정을 시뮬레이션하여 최종적으로 주문한 제품의 세부
                    정보를 출력합니다. 아이패드의 다양한 옵션(화면 크기, 색상,
                    저장 용량, 네트워크 유형)을 선택할 수 있으며, 각인 서비스를
                    통해 제품에 이름을 추가할 수도 있습니다. 제작 과정은 진행률
                    표시를 통해 시뮬레이션되며, 주문 과정은 사용자의 입력을
                    기반으로 계속되거나 중단될 수 있습니다.
                  </ClassContentsText>
                  <ClassContentsTitle2>문제</ClassContentsTitle2>
                  <ClassContentsText>
                    1. 사용자가 공홈을 통해서 제품 구매를 한다. (구매를 진행
                    할지 말지를 선택)
                    <br />
                    2. 화면 크기 11인치와 13인치
                    <br />
                    3. 컬러는 스페이스그레이와 실버
                    <br />
                    4. 저장 용량은 128GB, 256GB, 512GB, 1TB
                    <br />
                    5. 네트워크는 Wi-Fi 모델과 Wi-Fi + Cellular 모델
                    <br />
                    6. 각인 서비스지원으로 이름을 입력 할 수 있음
                    <br />
                    7. 일련번호는 iPad + 인치 + 메모리 + W/C + 제조일 + 생산댓수
                    <br />
                    예) iPad11256W2201061 (제품명 +
                    화면크기+용량+네트워크+출시일+생산댓수)
                    <br />
                    <font color="red">
                      <i>
                        일련번호란? 제품에 대한 고유 번호를 의미하며, 중복된
                        번호가 존재할 수 없는 유일한 식별자 이다.
                      </i>
                    </font>
                  </ClassContentsText>
                  <ClassContentsTitle2>구현 내용</ClassContentsTitle2>
                  <ClassContentsText>
                    - iPad Pro 구입하기 : Yes or No 선택 기능 (반복 구매 가능,
                    while 문 처리)
                    <br />- 디스플레이 선택 기능 (입력은 정수, 출력은 “11인치”,
                    “12.9인치”)
                    <br />- 컬러 선택 기능 (입력은 정수로 입력 받고 출력은
                    “스페이스그레이”, “실버”)
                    <br />- 용량 선택 기능 (입력은 정수, 출력은 “128GB”,
                    “256GB”, “512GB”, “1TB”)
                    <br />- 네트워크 선택 기능
                    <br />- 각인 서비스
                    <br />- 출고까지 제품 준비중…이라고 표시하고 30초간 대기 후
                    (진행 상황을 보여 줄 수 있으면 구현 하면 좋음. 진행바와
                    같은거…)
                    <br />- 제품 출고 (화면, 색상, 용량, 네트워크, 이름,
                    일련번호)
                  </ClassContentsText>
                  <ClassContentsTitle2>추가 구현 사항</ClassContentsTitle2>
                  <ClassContentsText>
                    공식 홈페이지 기준으로 옵션 선택시 가격 추가하고 제품 정보
                    출력 시 가격 정보 포함되도록 구현
                  </ClassContentsText>
                  <Java_04_05_Code01 />
                  <Java_04_05_Code02 />
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

export default Java_04_05;
