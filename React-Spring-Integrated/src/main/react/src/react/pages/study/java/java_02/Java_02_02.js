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
import Java_02_02_M from "./Java_02_02_M";

const Java_02_02 = () => {
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
    navigate("/study/java/02/02");
    window.location.reload();
  };

  const Java_02_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package data_ex1;

// System.out
public class DataType {
    public static void main(String[] args) {
      String name = "Lee";
      String addr = "Seoul City";
      char gender = 'F';
      int age = 18;
      int kor = 99;
      int eng = 88;
      int mat = 40;
      double aver = 0.0;

	      // 자바 스타일 (print 오버로딩)
        System.out.println("====== Java Style output =======");
        System.out.println("Name : " + name);
        System.out.println("Address : " + addr);
        System.out.println("Gender : " + gender);
        System.out.println("Age : " + age);
        System.out.println("Total : " + (kor + eng + mat));
        System.out.println("Average : " + (double)(kor + eng + mat) / 3);

        // C언어 스타일 (printf 서식지정자)
        System.out.println("====== C Style Output ======");
        System.out.printf("Name : %s\n", name);
        System.out.printf("Address : %s\n", addr);
        System.out.printf("Gender : %c\n", gender);
        System.out.printf("Age : %d\n", age);
        System.out.printf("Total : %d\n", (kor + eng + mat));
        System.out.printf("Average : %.2f\n", (double)(kor + eng + mat)/3);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println("\"Enter\" 키를 입력 하셔면 종료 됩니다.");
System.out.println("Hello\\Java"); 
Ssytem.out.println("25%%");
          `}
        </code>
      </pre>
    );
  };

  const Java_02_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    int keyCode = System.in.read();
    System.out.println("KeyCode : " + keyCode);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_02_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
        while(true) {
            int keyCode = System.in.read();
            System.out.println("KeyCode : " + keyCode);
            if (keyCode == 'q') break;
        }
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_02_02_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.Scanner;	// Scanner 클래스 호출
 
public class Main {
	public static void main(String[] args) {
 
		Scanner in = new Scanner(System.in);	// Scanner 객체 생성
 
		byte a = in.nextByte(); 		// byte 형 입력 및 리턴
		short b = in.nextShort(); 		// short 형 입력 및 리턴
		int c = in.nextInt(); 			// int 형 입력 및 리턴
		long d = in.nextLong(); 		// long 형 입력 및 리턴
		char ch = sc.next().charAt(0); // 문자 입력
 
		float e = in.nextFloat(); 		// float 형 입력 및 리턴
		double f = in.nextDouble(); 	// double 형 입력 및 리턴
 
		boolean g = in.nextBoolean(); 	// boolean 형 입력 및 리턴
 
		String h = in.next(); 			// String 형 입력 및 리턴 (공백을 기준으로 한 단어를 읽음)
		String i = in.nextLine(); 		// String 형 입력 및 리턴 (개행을 기준으로 한 줄을 읽음)
	} 
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_02_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package Sample1;
import java.lang.String;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("이름을 입력 하세요 : ");
        String name = sc.next();
        sc.nextLine();
        System.out.print("주소를 입력 하세요 : ");
        String addr = sc.nextLine();
        System.out.print("성별을 입력 하세요 : ");
        char gender = sc.next().charAt(0);
        System.out.print("나이를 입력 하세요 : ");
        int age = sc.nextInt();

        System.out.println("==== 회원 정보 출력 =====");
        System.out.println("이름 : " + name);
        System.out.println("주소 : " + addr);
        System.out.println("성별 : " + gender);
        System.out.println("나이 : " + age);
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
        <Java_02_02_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                02. 기본 자료형과 연산자
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                02. 변수와 시스템 입출력
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="02" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>변수와 시스템 입출력</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>
                    자바 표준 입출력 클래스 (System)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    사용자가 프로그램과 대화하기 위해서는 사용자와 프로그램
                    사이의 입출력을 담당하는 수단이 필요 합니다.
                    <br />
                    자바에서는 모든 것이 객체로 표현되므로, 입출력을 담당하는
                    수단 또한 모두 객체 입니다.
                    <br />
                    <br />
                    <ClassContentsTextTab>
                      -{" "}
                      <font color="#2c79c1">
                        <i>System.in</i>
                      </font>{" "}
                      표준 입력 스트림으로, 프로그램 내에서 사용자로부터의
                      입력을 받을 수 있도록 합니다.
                      <br />-{" "}
                      <font color="#2c79c1">
                        <i>System.out</i>
                      </font>{" "}
                      표준 출력 스트림으로, 프로그램 내에서 결과를 콘솔에 출력할
                      수 있도록 합니다.
                      <br />-{" "}
                      <font color="#2c79c1">
                        <i>System.err</i>
                      </font>{" "}
                      표준 오류 출력 스트림으로, 프로그램 내에서 발생한 오류와
                      관련된 정보를 콘솔에 출력할 때 사용됩니다. (리다이렉션이
                      되지 않습니다.)
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <ClassContentsCodeBox>
                      👉 리다이렉션이란 컴퓨터 프로그램이나 운영 체제에서 입력과
                      출력을 다른 곳으로 보내는 기능을 말합니다.
                    </ClassContentsCodeBox>
                    <br />
                    <font color="red">System.out.println(”출력 내용");</font>
                    <br />
                    시스템의 출력 장치로 내용을 출력 한다는 의미
                    <br />
                    <br />
                    <ClassTable style={{ width: "70%" }}>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>메소드</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>의미</b>
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>println(내용)</ClassTableTd>
                        <ClassTableTd>내용 출력 후 줄 바꿈</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>print(내용)</ClassTableTd>
                        <ClassTableTd>내용 출력</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>printf(”서식”, 출력값)</ClassTableTd>
                        <ClassTableTd>
                          출력 값을 서식에 맞춰서 출력 (C언어 서식과 동일)
                        </ClassTableTd>
                      </ClassTableTr>
                    </ClassTable>
                    <br />
                    <ClassContentsTextTab>
                      - 서식지정자 : %d, %ld, %f, %.2f, %2d, %s, %c , %%
                      <br />
                      - 이스케이프시퀀스 : \n, \r, \t, \b, \\
                      <br />
                      - %6d : 6자의 정수 공간을 확보하고 오른쪽 정렬
                      <br />
                      - %-10.2f : 10자리 공간을 확보하고 왼쪽 정렬
                      <br />
                      - %6s : 문자열공간을 6자리 확보하고 오른쪽 정렬
                      <br />
                      <br />
                    </ClassContentsTextTab>
                    <Java_02_02_Code01 />
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>System 클래스 특징</ClassContentsTitle3>
                  <ClassContentsText>
                    자바 프로그램은 운영체제상에서 바로 실행되는 것이 아니라{" "}
                    <b>JVM위에서 실행</b>됩니다.
                    <br />
                    따라서 운영체제의 모든 기능을 자바 코드에서 직접 접근하기가
                    어렵습니다.
                    <br />
                    하지만,{" "}
                    <b>
                      java.lang 패키지에 속하는 System 클래스를 이용하면
                      운영체제의 일부 기능을 이용
                    </b>
                    할 수 있습니다.
                    <br />
                    즉 프로그램의 종료, 키보드 입력, 모니터 출력, 메모리 정리,
                    현재 시간 읽기, 시스템 환경 변수 읽기 등이 가능 합니다.
                    <br />
                    System 클래스의 모든 필드와 메소드는{" "}
                    <b>정적 필드와 정적 메소드로 구성</b> 됩니다.
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>기타 출력 예제</ClassContentsTitle3>
                  <Java_02_02_Code02 />
                  <br />
                  <ClassContentsTitle3>
                    키보드에서 입력된 내용을 변수에 저장하기
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    키보드에서 키 하나를 입력하면 프로그램에서는 숫자로 된
                    키보드를 읽을 수 있습니다.
                    <br />
                    <font color="red">
                      throws <i>IOException</i>
                    </font>{" "}
                    <i>예외 처리 코드가 자동으로 추가 됩니다.</i>
                    <br />
                    자바는 일출력에 대한 예외에 대해서 까다롭게 규정하고
                    있습니다. 그래서 입/출력 을 다루는 메서드에서 예외처리가
                    없다면 컴파일 에러가 발생하게 됩니다.
                    <br />
                    <br />
                    <font color="red">
                      <b>int keyCode = System.in.read();</b>
                    </font>
                    <br />
                    <br />
                    <Java_02_02_Code03 />
                    <br />
                    <Java_02_02_Code04 />
                    <br />
                    <br />
                    <font color="red">
                      <b>ASCII 코드값</b>
                    </font>
                    <br />
                    <br />
                    <ClassTable style={{ textAlign: "center", width: "40%" }}>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Dec</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Hex</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Char</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Dec</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Hex</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Char</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Dec</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Hex</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Char</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Dec</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Hex</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>Char</b>
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          0
                        </ClassTableTd>
                        <ClassTableTd>00</ClassTableTd>
                        <ClassTableTd>Null</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          1
                        </ClassTableTd>
                        <ClassTableTd>01</ClassTableTd>
                        <ClassTableTd>SOH</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          2
                        </ClassTableTd>
                        <ClassTableTd>02</ClassTableTd>
                        <ClassTableTd>STX</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          3
                        </ClassTableTd>
                        <ClassTableTd>03</ClassTableTd>
                        <ClassTableTd>ETX</ClassTableTd>
                      </ClassTableTr>

                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          4
                        </ClassTableTd>
                        <ClassTableTd>04</ClassTableTd>
                        <ClassTableTd>EOT</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          5
                        </ClassTableTd>
                        <ClassTableTd>05</ClassTableTd>
                        <ClassTableTd>ENQ</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          6
                        </ClassTableTd>
                        <ClassTableTd>06</ClassTableTd>
                        <ClassTableTd>ACK</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          7
                        </ClassTableTd>
                        <ClassTableTd>07</ClassTableTd>
                        <ClassTableTd>BEL</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          8
                        </ClassTableTd>
                        <ClassTableTd>08</ClassTableTd>
                        <ClassTableTd>BS</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          9
                        </ClassTableTd>
                        <ClassTableTd>09</ClassTableTd>
                        <ClassTableTd>TAB</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          10
                        </ClassTableTd>
                        <ClassTableTd>0A</ClassTableTd>
                        <ClassTableTd>LF</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          11
                        </ClassTableTd>
                        <ClassTableTd>0B</ClassTableTd>
                        <ClassTableTd>VT</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          12
                        </ClassTableTd>
                        <ClassTableTd>0C</ClassTableTd>
                        <ClassTableTd>FF</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          13
                        </ClassTableTd>
                        <ClassTableTd>0D</ClassTableTd>
                        <ClassTableTd>CR</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          14
                        </ClassTableTd>
                        <ClassTableTd>0E</ClassTableTd>
                        <ClassTableTd>SO</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          15
                        </ClassTableTd>
                        <ClassTableTd>0F</ClassTableTd>
                        <ClassTableTd>SI</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          16
                        </ClassTableTd>
                        <ClassTableTd>10</ClassTableTd>
                        <ClassTableTd>DLE</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          17
                        </ClassTableTd>
                        <ClassTableTd>11</ClassTableTd>
                        <ClassTableTd>DC1</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          18
                        </ClassTableTd>
                        <ClassTableTd>12</ClassTableTd>
                        <ClassTableTd>DC2</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          19
                        </ClassTableTd>
                        <ClassTableTd>13</ClassTableTd>
                        <ClassTableTd>DC3</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          20
                        </ClassTableTd>
                        <ClassTableTd>14</ClassTableTd>
                        <ClassTableTd>DC4</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          21
                        </ClassTableTd>
                        <ClassTableTd>15</ClassTableTd>
                        <ClassTableTd>NAK</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          22
                        </ClassTableTd>
                        <ClassTableTd>16</ClassTableTd>
                        <ClassTableTd>SYN</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          23
                        </ClassTableTd>
                        <ClassTableTd>17</ClassTableTd>
                        <ClassTableTd>ETB</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          24
                        </ClassTableTd>
                        <ClassTableTd>18</ClassTableTd>
                        <ClassTableTd>CAN</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          25
                        </ClassTableTd>
                        <ClassTableTd>19</ClassTableTd>
                        <ClassTableTd>EM</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          26
                        </ClassTableTd>
                        <ClassTableTd>1A</ClassTableTd>
                        <ClassTableTd>SUB</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          27
                        </ClassTableTd>
                        <ClassTableTd>1B</ClassTableTd>
                        <ClassTableTd>ESC</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          28
                        </ClassTableTd>
                        <ClassTableTd>1C</ClassTableTd>
                        <ClassTableTd>FS</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          29
                        </ClassTableTd>
                        <ClassTableTd>1D</ClassTableTd>
                        <ClassTableTd>GS</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          30
                        </ClassTableTd>
                        <ClassTableTd>1E</ClassTableTd>
                        <ClassTableTd>RS</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          31
                        </ClassTableTd>
                        <ClassTableTd>1F</ClassTableTd>
                        <ClassTableTd>US</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          32
                        </ClassTableTd>
                        <ClassTableTd>20</ClassTableTd>
                        <ClassTableTd>Space</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          33
                        </ClassTableTd>
                        <ClassTableTd>21</ClassTableTd>
                        <ClassTableTd>!</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          34
                        </ClassTableTd>
                        <ClassTableTd>22</ClassTableTd>
                        <ClassTableTd>"</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          35
                        </ClassTableTd>
                        <ClassTableTd>23</ClassTableTd>
                        <ClassTableTd>#</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          36
                        </ClassTableTd>
                        <ClassTableTd>24</ClassTableTd>
                        <ClassTableTd>$</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          37
                        </ClassTableTd>
                        <ClassTableTd>25</ClassTableTd>
                        <ClassTableTd>%</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          38
                        </ClassTableTd>
                        <ClassTableTd>26</ClassTableTd>
                        <ClassTableTd>&</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          39
                        </ClassTableTd>
                        <ClassTableTd>27</ClassTableTd>
                        <ClassTableTd>'</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          40
                        </ClassTableTd>
                        <ClassTableTd>28</ClassTableTd>
                        <ClassTableTd>{`(`}</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          41
                        </ClassTableTd>
                        <ClassTableTd>29</ClassTableTd>
                        <ClassTableTd>{`(`}</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          42
                        </ClassTableTd>
                        <ClassTableTd>2A</ClassTableTd>
                        <ClassTableTd>*</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          43
                        </ClassTableTd>
                        <ClassTableTd>2B</ClassTableTd>
                        <ClassTableTd>+</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          44
                        </ClassTableTd>
                        <ClassTableTd>2C</ClassTableTd>
                        <ClassTableTd>,</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          45
                        </ClassTableTd>
                        <ClassTableTd>2D</ClassTableTd>
                        <ClassTableTd>-</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          46
                        </ClassTableTd>
                        <ClassTableTd>2E</ClassTableTd>
                        <ClassTableTd>.</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          47
                        </ClassTableTd>
                        <ClassTableTd>2F</ClassTableTd>
                        <ClassTableTd>/</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          48
                        </ClassTableTd>
                        <ClassTableTd>30</ClassTableTd>
                        <ClassTableTd>0</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          49
                        </ClassTableTd>
                        <ClassTableTd>31</ClassTableTd>
                        <ClassTableTd>1</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          50
                        </ClassTableTd>
                        <ClassTableTd>32</ClassTableTd>
                        <ClassTableTd>2</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          51
                        </ClassTableTd>
                        <ClassTableTd>33</ClassTableTd>
                        <ClassTableTd>3</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          52
                        </ClassTableTd>
                        <ClassTableTd>34</ClassTableTd>
                        <ClassTableTd>4</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          53
                        </ClassTableTd>
                        <ClassTableTd>35</ClassTableTd>
                        <ClassTableTd>5</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          54
                        </ClassTableTd>
                        <ClassTableTd>36</ClassTableTd>
                        <ClassTableTd>6</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          55
                        </ClassTableTd>
                        <ClassTableTd>37</ClassTableTd>
                        <ClassTableTd>7</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          56
                        </ClassTableTd>
                        <ClassTableTd>38</ClassTableTd>
                        <ClassTableTd>8</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          57
                        </ClassTableTd>
                        <ClassTableTd>39</ClassTableTd>
                        <ClassTableTd>9</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          58
                        </ClassTableTd>
                        <ClassTableTd>3A</ClassTableTd>
                        <ClassTableTd>:</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          59
                        </ClassTableTd>
                        <ClassTableTd>3B</ClassTableTd>
                        <ClassTableTd>;</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          60
                        </ClassTableTd>
                        <ClassTableTd>3C</ClassTableTd>
                        <ClassTableTd>{`<`}</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          61
                        </ClassTableTd>
                        <ClassTableTd>3D</ClassTableTd>
                        <ClassTableTd>=</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          62
                        </ClassTableTd>
                        <ClassTableTd>3E</ClassTableTd>
                        <ClassTableTd>{`>`}</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          63
                        </ClassTableTd>
                        <ClassTableTd>3F</ClassTableTd>
                        <ClassTableTd>?</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          64
                        </ClassTableTd>
                        <ClassTableTd>40</ClassTableTd>
                        <ClassTableTd>@</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          65
                        </ClassTableTd>
                        <ClassTableTd>41</ClassTableTd>
                        <ClassTableTd>A</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          66
                        </ClassTableTd>
                        <ClassTableTd>42</ClassTableTd>
                        <ClassTableTd>B</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          67
                        </ClassTableTd>
                        <ClassTableTd>43</ClassTableTd>
                        <ClassTableTd>C</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          68
                        </ClassTableTd>
                        <ClassTableTd>44</ClassTableTd>
                        <ClassTableTd>D</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          69
                        </ClassTableTd>
                        <ClassTableTd>45</ClassTableTd>
                        <ClassTableTd>E</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          70
                        </ClassTableTd>
                        <ClassTableTd>46</ClassTableTd>
                        <ClassTableTd>F</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          71
                        </ClassTableTd>
                        <ClassTableTd>47</ClassTableTd>
                        <ClassTableTd>G</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          72
                        </ClassTableTd>
                        <ClassTableTd>48</ClassTableTd>
                        <ClassTableTd>H</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          73
                        </ClassTableTd>
                        <ClassTableTd>49</ClassTableTd>
                        <ClassTableTd>I</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          74
                        </ClassTableTd>
                        <ClassTableTd>4A</ClassTableTd>
                        <ClassTableTd>J</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          75
                        </ClassTableTd>
                        <ClassTableTd>4B</ClassTableTd>
                        <ClassTableTd>K</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          76
                        </ClassTableTd>
                        <ClassTableTd>4C</ClassTableTd>
                        <ClassTableTd>L</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          77
                        </ClassTableTd>
                        <ClassTableTd>4D</ClassTableTd>
                        <ClassTableTd>M</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          78
                        </ClassTableTd>
                        <ClassTableTd>4E</ClassTableTd>
                        <ClassTableTd>N</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          79
                        </ClassTableTd>
                        <ClassTableTd>4F</ClassTableTd>
                        <ClassTableTd>O</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          80
                        </ClassTableTd>
                        <ClassTableTd>50</ClassTableTd>
                        <ClassTableTd>P</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          81
                        </ClassTableTd>
                        <ClassTableTd>51</ClassTableTd>
                        <ClassTableTd>Q</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          82
                        </ClassTableTd>
                        <ClassTableTd>52</ClassTableTd>
                        <ClassTableTd>R</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          83
                        </ClassTableTd>
                        <ClassTableTd>53</ClassTableTd>
                        <ClassTableTd>S</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          84
                        </ClassTableTd>
                        <ClassTableTd>54</ClassTableTd>
                        <ClassTableTd>T</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          85
                        </ClassTableTd>
                        <ClassTableTd>55</ClassTableTd>
                        <ClassTableTd>U</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          86
                        </ClassTableTd>
                        <ClassTableTd>56</ClassTableTd>
                        <ClassTableTd>V</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          87
                        </ClassTableTd>
                        <ClassTableTd>57</ClassTableTd>
                        <ClassTableTd>W</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          88
                        </ClassTableTd>
                        <ClassTableTd>58</ClassTableTd>
                        <ClassTableTd>X</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          89
                        </ClassTableTd>
                        <ClassTableTd>59</ClassTableTd>
                        <ClassTableTd>Y</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          90
                        </ClassTableTd>
                        <ClassTableTd>5A</ClassTableTd>
                        <ClassTableTd>Z</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          91
                        </ClassTableTd>
                        <ClassTableTd>5B</ClassTableTd>
                        <ClassTableTd>{`[`}</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          92
                        </ClassTableTd>
                        <ClassTableTd>5C</ClassTableTd>
                        <ClassTableTd>\</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          93
                        </ClassTableTd>
                        <ClassTableTd>5D</ClassTableTd>
                        <ClassTableTd>{`]`}</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          94
                        </ClassTableTd>
                        <ClassTableTd>5E</ClassTableTd>
                        <ClassTableTd>^</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          95
                        </ClassTableTd>
                        <ClassTableTd>5F</ClassTableTd>
                        <ClassTableTd>_</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          96
                        </ClassTableTd>
                        <ClassTableTd>60</ClassTableTd>
                        <ClassTableTd>`</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          97
                        </ClassTableTd>
                        <ClassTableTd>61</ClassTableTd>
                        <ClassTableTd>a</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          98
                        </ClassTableTd>
                        <ClassTableTd>62</ClassTableTd>
                        <ClassTableTd>b</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          99
                        </ClassTableTd>
                        <ClassTableTd>63</ClassTableTd>
                        <ClassTableTd>c</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          100
                        </ClassTableTd>
                        <ClassTableTd>64</ClassTableTd>
                        <ClassTableTd>d</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          101
                        </ClassTableTd>
                        <ClassTableTd>65</ClassTableTd>
                        <ClassTableTd>e</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          102
                        </ClassTableTd>
                        <ClassTableTd>66</ClassTableTd>
                        <ClassTableTd>f</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          103
                        </ClassTableTd>
                        <ClassTableTd>67</ClassTableTd>
                        <ClassTableTd>g</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          104
                        </ClassTableTd>
                        <ClassTableTd>68</ClassTableTd>
                        <ClassTableTd>h</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          105
                        </ClassTableTd>
                        <ClassTableTd>69</ClassTableTd>
                        <ClassTableTd>i</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          106
                        </ClassTableTd>
                        <ClassTableTd>6A</ClassTableTd>
                        <ClassTableTd>j</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          107
                        </ClassTableTd>
                        <ClassTableTd>6B</ClassTableTd>
                        <ClassTableTd>k</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          108
                        </ClassTableTd>
                        <ClassTableTd>6C</ClassTableTd>
                        <ClassTableTd>l</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          109
                        </ClassTableTd>
                        <ClassTableTd>6D</ClassTableTd>
                        <ClassTableTd>m</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          110
                        </ClassTableTd>
                        <ClassTableTd>6E</ClassTableTd>
                        <ClassTableTd>n</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          111
                        </ClassTableTd>
                        <ClassTableTd>6F</ClassTableTd>
                        <ClassTableTd>o</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          112
                        </ClassTableTd>
                        <ClassTableTd>70</ClassTableTd>
                        <ClassTableTd>p</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          113
                        </ClassTableTd>
                        <ClassTableTd>71</ClassTableTd>
                        <ClassTableTd>q</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          114
                        </ClassTableTd>
                        <ClassTableTd>72</ClassTableTd>
                        <ClassTableTd>r</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          115
                        </ClassTableTd>
                        <ClassTableTd>73</ClassTableTd>
                        <ClassTableTd>s</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          116
                        </ClassTableTd>
                        <ClassTableTd>74</ClassTableTd>
                        <ClassTableTd>t</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          117
                        </ClassTableTd>
                        <ClassTableTd>75</ClassTableTd>
                        <ClassTableTd>u</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          118
                        </ClassTableTd>
                        <ClassTableTd>76</ClassTableTd>
                        <ClassTableTd>v</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          119
                        </ClassTableTd>
                        <ClassTableTd>77</ClassTableTd>
                        <ClassTableTd>w</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          120
                        </ClassTableTd>
                        <ClassTableTd>78</ClassTableTd>
                        <ClassTableTd>x</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          121
                        </ClassTableTd>
                        <ClassTableTd>79</ClassTableTd>
                        <ClassTableTd>y</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          122
                        </ClassTableTd>
                        <ClassTableTd>7A</ClassTableTd>
                        <ClassTableTd>z</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          123
                        </ClassTableTd>
                        <ClassTableTd>7B</ClassTableTd>
                        <ClassTableTd>{`{`}</ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          124
                        </ClassTableTd>
                        <ClassTableTd>7C</ClassTableTd>
                        <ClassTableTd>|</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          125
                        </ClassTableTd>
                        <ClassTableTd>7D</ClassTableTd>
                        <ClassTableTd>{`}`}</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          126
                        </ClassTableTd>
                        <ClassTableTd>7E</ClassTableTd>
                        <ClassTableTd>~</ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          127
                        </ClassTableTd>
                        <ClassTableTd>7F</ClassTableTd>
                        <ClassTableTd>DEL</ClassTableTd>
                      </ClassTableTr>
                    </ClassTable>
                    <br />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Scanner 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    1. 기본적인 데이터 타입들을 Scanner의 메소드를 사용하여
                    입력받을 수 있습니다.
                    <br />
                    예로 들어 100을 입력하고자 할 때, String(문자열)로 입력받고
                    싶으면 next() 나 nextLine() 을, int(정수)로 입력받고 싶다면
                    nextInt() 를 사용하여 입력받으면 알아서 해당 타입으로
                    입력된다.
                    <br />
                    2. Scanner 을 사용할 시 util 패키지를 경로의 Scanner
                    클래스를 호출해야 합니다.
                    <br />
                    Scanner 클래스는 java.utiil 패키지내에 존재하므로
                    import해줘야 합니다.
                    <br />
                    <font color="red">import java.util.Scanner;</font>
                    <br />
                    3. 공백(띄어쓰기) 또는 개행(줄 바꿈)을 기준으로 읽는다.
                  </ClassContentsText>
                  <ClassContentsTitle3>객체 생성 방법</ClassContentsTitle3>
                  <ClassContentsText>
                    스캐너 클래스 사용을 위해서는 먼저 클래스를 호출하고, 객체를
                    생성 해야 합니다.
                    <br />
                    <b>
                      클래스이름 객체이름 = <font color="#2c79c1">new</font>{" "}
                      클래스이름();
                    </b>
                    <br />
                    <font color="red">
                      <b>
                        Scanner in = new Scanner(System.in); // Scanner 객체
                        생성
                      </b>
                    </font>{" "}
                    <b>[Scanner 입력 메소드 종류]</b>
                    <br />
                    Scanner 생성자에는 사용자로 부터 입력을 받기 위한 입력
                    스트림을 지정 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>사용 방법</ClassContentsTitle3>
                  <Java_02_02_Code05 />
                  <br />
                  <ClassContentsTitle3>실습 예제</ClassContentsTitle3>
                  <ClassContentsText>
                    스캐너 연속 입력 시 버퍼 비우기가 필요할 수 있습니다.
                    <br />
                    <font color="#2c79c1">
                      <b>
                        <i>scan.nextLine();</i>
                      </b>
                    </font>
                    <br />
                  </ClassContentsText>
                  <Java_02_02_Code06 />
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

export default Java_02_02;
