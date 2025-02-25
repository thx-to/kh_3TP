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
import Java_03_02_M from "./Java_03_02_M";

const Java_03_02 = () => {
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
    navigate("/study/java/03/02");
    window.location.reload();
  };

  const Java_03_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[] grade1 = new int[3]; // 길이가 3인 int형 배열의 선언 및 생성

grade1[0] = 85; // 인덱스를 이용한 배열의 초기화
grade1[1] = 65;
grade1[2] = 90;

for (int i = 0; i < grade1.length; i++) {
    System.out.print(grade1[i] + " "); // 인덱스를 이용한 배열로의 접근
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String[] weeks = new String[7];
weeks[0] = "월";
weeks[1] = "화";
weeks[2] = "수";
weeks[3] = "목";
weeks[4] = "금";
weeks[5] = "토";
weeks[6] = "일";
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Array {
    public static void main(String[] args) {
        int[] grade1 = {88, 99, 56};
        int[] grade2 = new int[]{67, 77, 88};
        int[] grade3;
        grade3 = new int[]{70,80,90};
        for (int e : grade1) {
            System.out.print(e + " ");
        }
				// System.out.println(Arrays.toString(grade1));
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int[] score = {89, 90, 88, 76};
      int sum = 0;
      for(int i : score) sum += i;
      System.out.println("총점 : " + sum);
      System.out.printf("평균 : %.2f\n", (double)sum/score.length);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String[] weeks = {"월", "화", "수", "목", "금", "토", "일"};
for (int i=0; i<weeks.length; i++) {
    System.out.println(weeks[i]);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CommandLine {
    public static void main(String[] args) {
        if(args.length != 2) {
            System.out.println("프로그램 사용법");
            System.out.println("Java Main String Argument num1 num2");
            System.exit(0); // 프로그램 강제 종료
        }
        String strNum1 = args[0];
        String strNum2 = args[1];

        int num1 = Integer.parseInt(strNum1);
        int num2 = Integer.parseInt(strNum2);
        int result = num1 + num2;
        System.out.println(num1 + " + " + num2 + " = " + result);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int[] arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};
    int tmp = 0;
    for (int i = 0; i < arr.length; i++) {
        for (int j = i; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    for(int e : arr) System.out.print(e + " ");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int[] arr = {9, 4, 3, 10, 5, 8, 7, 6, 2, 1};
    int tmp = 0;
    int min;
    for (int i = 0; i < arr.length; i++) {
        min = i;
        for (int j = i; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
               min = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    for(int i : arr) System.out.print(i + " ");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Array1 {
    public static void main(String[] args) {
      int [][] arr = new int[2][3];
      int k = 10;
      for (int i = 0; i < arr.length; i++) { // 행에 대한 길이
          for (int j = 0; j < arr[i].length; j++) { // 열에 대한 길이
              arr[i][j] = k;
              k += 10;
          }
      }
        for (int[] ints : arr) {
            for (int anInt : ints) {
                System.out.print(anInt + " ");
            }
            System.out.println();
        }

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[5][3] arr = {
    {10, 20, 30},
    {40, 50, 60}
};
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String[] strArray = new String[3];
  strArray[0] = "Java";
  strArray[1] = "C++";
  strArray[2] = "C";
//String[] strArray = {"Java", "C++", "C"};

  for(String i : strArray) {
      System.out.println(i);
  }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[] arr = new int[]{1, 2, 3, 4, 5};

for (int e : arr) {
    System.out.print(e + " ");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`

public class score {
	public static void main(String[] args) {
		double[] avr = {0,0,0,0,0};
		int[][] score = {
			{1, 30, 90, 20, 0},
			{2, 80, 88, 98, 0},
			{3, 100, 40, 100, 0},
			{4, 100, 30, 33, 0},
			{5, 100, 90, 100, 0}
		};
		for (int i = 0; i < score.length; i++) {
			for (int j = 1; j < 4; j++) {
				score[i][4] += score[i][j];
			}
			avr[i] = (double)score[i][4] / 3;
			System.out.printf("%d, %d, %.2f\n", score[i][0], score[i][4], avr[i]);
		}
		int tmp_num = 0;
		int tmp_total = 0;
		double tmp_avr = 0;
		System.out.println("Number  Total Score  Average");
		System.out.println("========================================");
		for (int i = 0; i < score.length; i++) {
			for (int j = i; j < score.length; j++) {
				if (score[i][4] < score[j][4]) {
					tmp_total = score[i][4];
					score[i][4] = score[j][4];
					score[j][4] = tmp_total;

					tmp_num = score[i][0];
					score[i][0] = score[j][0];
					score[j][0] = tmp_num;

					tmp_avr = avr[i];
					avr[i] = avr[j];
					avr[j] = tmp_avr;
				}
			}
			System.out.printf("%4d%10d        %.2f\n", score[i][0], score[i][4], avr[i]);
		}
	}
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 스레드;

import java.util.Arrays;
import java.util.Scanner;

public class Sample {
    public static void main(String args[]){
        double[] avr = {0,0,0,0,0};
        int[][] score = {
                {1, 30, 90, 20, 0},
                {2, 80, 88, 98, 0},
                {3, 100, 40, 100, 0},
                {4, 100, 30, 33, 0},
                {5, 100, 90, 100, 0}
        };
        for (int i = 0; i < score.length; i++) {
            for (int j = 1; j < 4; j++) {
                score[i][4] += score[i][j];
                avr[i] = (double)score[i][4] / 3;
            }
            System.out.printf("%d, %d, %.2f\n", score[i][0], score[i][4], avr[i]);
        }
        int tmp_num = 0;
        int tmp_total = 0;
        double tmp_avr = 0;
        System.out.println("Number  Total Score  Average");
        System.out.println("========================================");
        int max;
        for (int i = 0; i < score.length; i++) {
            max = i;
            for (int j = i; j < score.length; j++) {
                if (score[j][4] > score[max][4]) {
                    max = j;
                }
            }
            tmp_total = score[i][4];
            score[i][4] = score[max][4];
            score[max][4] = tmp_total;

            tmp_num = score[i][0];
            score[i][0] = score[max][0];
            score[max][0] = tmp_num;

            tmp_avr = avr[i];
            avr[i] = avr[max];
            avr[max] = tmp_avr;
            System.out.printf("%4d%10d        %.2f\n", score[i][0], score[i][4], avr[i]);
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int[] arr1 = new int[] {1,2,3,4,5};
    int newLen = 10;
    int[] arr2 = new int[newLen];
    System.arraycopy(arr1, 0, arr2, 4, arr1.length); // 
    for(int i : arr2) {
        System.out.println(i);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[] arr1 = new int[] {1,2,3,4,5};
int[] arr3 = Arrays.copyOf(arr1, 10);
for(int i : arr3) {
    System.out.print(i + " ");
}
System.out.println();
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[] arr1 = new int[4];
int[] arr2 = arr1;
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
for(int i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}
System.arraycopy(arr1, 0, arr2, 0, arr1.length);
arr2 = Arrays.copyOf(arr1, arr1.length);
arr2 = arr1.clone();
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
   public static void main(String[] args) {
       int[] lotto = new int[6];
       int val, index = 0;
       boolean isExist = false;
       while(true) {
           val = (int)((Math.random() * 45) + 1);
           for (int i = 0; i < 6; i++) {
               if (lotto[i] == val) isExist = true;
           }
           if(!isExist) lotto[index++] = val;
           if(index == 6) break;
           isExist = false;
       }
       for(int i = 0; i < 6; i++) {
           System.out.print(lotto[i] + " ");
       }
       System.out.println();
   }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_02_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package EvenOdd;
import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Calc_func calc_func = new Calc_func();
        calc_func.inputInt();
        calc_func.oddEven();
        calc_func.dispOutput();
    }
}
class Calc_func {
    int[] arr = new int[7];
    int[] even = new int[7];
    int[] odd = new int[7];
    int e_idx = 0;
    int o_idx = 0;
    public void inputInt() {
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 7; i++) {
            arr[i] = sc.nextInt();
        }
    }
    public void oddEven() {
        for (int i : arr) {
            if (i % 2 == 0)  even[e_idx++] = i;
            else odd[o_idx++] = i;
        }
    }
    public void dispOutput() {
        System.out.println("홀수 : ");
        for (int i = 0; i < o_idx; i++) System.out.printf("%2d", odd[i]);
        System.out.println();
        System.out.println("짝수 : ");
        for (int i = 0; i < e_idx; i++) System.out.printf("%2d", even[i]);
        System.out.println();
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
        <Java_03_02_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                03. 배열과 문자열
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>02. 배열</TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="03" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>배열</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>배열이란?</ClassContentsTitle1>
                  <ClassContentsText>
                    자바의 배열은 동일한 타입의 데이터 요소들을 연속적으로
                    저장하는 자료 구조 입니다. 배열은 여러 개의 값을 하나의
                    변수에 저장할 수 있도록 해주며, 인덱스를 사용하여 각 요소에
                    접근할 수 있습니다. 자바에서 배열은 기본 자료형과 객체 타입
                    모두에 대해 사용 할 수 있습니다.
                    <br />
                    자바 배열은 객체로 취급되며, 기본적으로 힙(Heap) 영역에
                    메모리가 할당되고 사용됩니다. 배열의 크기를 지정하여 사용
                    합니다.
                    <br />
                    <ClassContentsCode>
                      타입[] 배열이름 = new 타입[배열길이];
                    </ClassContentsCode>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_03_02_01.png"})`,
                      }}
                    />
                    <Java_03_02_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle2>배열 선언</ClassContentsTitle2>
                  <ClassContentsText>
                    배열을 사용하기 위해서는 우선 배열을 선언 해야 합니다.
                    <br />
                    배열은 자료형 타입 옆에 [] 기호를 사용하여 표현 합니다.
                    <br />- 타입[] 변수; 타입 변수[];
                    <br />
                    <ClassContentsCode>int[] intArray;</ClassContentsCode>
                    <br />
                    <ClassContentsCode>double[] doubleArray;</ClassContentsCode>
                    <br />
                    <ClassContentsCode>String[] strArray;</ClassContentsCode>
                    <br />
                    배열 변수는 참조 변수이며, 배열도 객체 이므로 힙 영역에
                    생성되고, 힙 역역의 배열 객체를 참조 합니다.
                    <br />
                    즉, 참조 변수는 스택영역이고 힙영역에 배열에 저장될 값에
                    대한 메모리가 할당 됩니다.
                    <br />
                    데이터타입[] 변수 = {`{값0, 값1, 값2, 값3,….}`}
                    <br />
                    <ClassContentsCode>
                      int[] odds = {`{1, 3, 5, 7, 9}`};
                    </ClassContentsCode>
                    <br />
                    <ClassContentsCode>
                      String[] weeks ={" "}
                      {`{"월", "화", "수", "목", "금", "토", "일"}`};
                    </ClassContentsCode>
                    <Java_03_02_Code02 />
                  </ClassContentsText>
                  <ClassContentsTitle2>
                    배열의 선언과 초기화
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsCode>타입[ ] 변수 = null;</ClassContentsCode>{" "}
                    배열 변수는 참조 변수에 속합니다. 배열도 객체이므로 힙
                    영역에 생성되고 배열 변수는 힙 영역의 배열 객체를 참조하게
                    됩니다.
                    <Java_03_02_Code03 />
                    <Java_03_02_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle2>배열 길이</ClassContentsTitle2>
                  <ClassContentsText>
                    배열의 길이란 배열에 저장할 수 있는 전체 항목의 개수를
                    말합니다. 코드에서 배열의 길이를 얻으려면 배열 객체의 length
                    필드를 읽습니다.
                    <ClassContentsCode>배열 변수.length;</ClassContentsCode>
                    <Java_03_02_Code05 />
                  </ClassContentsText>
                  <ClassContentsTitle2>커맨드 라인 입력</ClassContentsTitle2>
                  <ClassContentsText>
                    main 메소드에도 매개 변수의 값을 입력 받을 수 있습니다.
                    <ClassContentsImage
                      style={{
                        width: "50%",
                        height: "80px",
                        backgroundImage: `url(${"/images/study/java/java_03_02_02.png"})`,
                      }}
                    />
                    인텔리제이 상단 오른쪽의 실행 매뉴의 클래스명을 눌러
                    구성편집으로 진입 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "80px",
                        backgroundImage: `url(${"/images/study/java/java_03_02_03.png"})`,
                      }}
                    />
                    <Java_03_02_Code06 />
                  </ClassContentsText>
                  <ClassContentsTitle2>배열의 인덱스</ClassContentsTitle2>
                  <ClassContentsText>
                    생성된 배열 공간의 각 저장공간을 요소하고 부르며,
                    배열이름[인덱스] 형식으로 요소에 접근 할 수 있습니다.
                    <br />
                    <b>
                      배열의 인덱스는 0에서 부터 배열의 길이 -1까지 지정
                    </b>{" "}
                    됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle2>배열의 출력</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsTextTab>
                      - for 문을 이용한 출력
                      <br />
                      - 향상된 for 이용한 출력
                      <br />- Arrays.tostring 이용한 출력
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <ClassContentsTitle2>빈번한 오류</ClassContentsTitle2>
                  <ClassContentsText>
                    아마 여러분이 자바 코드를 작성하면서 보게 될 가장 많은
                    오류중의 하나는 바로 다음의 오류일 것이다.
                    <ClassContentsCodeBox>
                      ArrayIndexOutOfBoundsException
                    </ClassContentsCodeBox>
                    다음의 예처럼 요일 배열의 길이는 총 7개인데 만약 8번째 값을
                    얻으려고 시도하면 이와 같은 오류가 발생한다.
                    <ClassContentsCodeBox>
                      System.out.println(weeks[7]); // 8번째 배열값이 없으므로
                      ArrayIndexOutOfBoundsException 오류가 발생한다.
                    </ClassContentsCodeBox>
                  </ClassContentsText>
                  <ClassContentsTitle2>배열의 정렬</ClassContentsTitle2>
                  <ClassContentsTitle3>버블 정렬</ClassContentsTitle3>
                  <Java_03_02_Code07 />
                  <ClassContentsTitle3>선택 정렬</ClassContentsTitle3>
                  <Java_03_02_Code08 />
                  <ClassContentsTitle1>2차원 배열</ClassContentsTitle1>
                  <ClassContentsText>
                    <ClassContentsCode>
                      int[][] arr = new int[2][3];
                    </ClassContentsCode>
                  </ClassContentsText>
                  <ClassContentsImage
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundImage: `url(${"/images/study/java/java_03_02_04.png"})`,
                    }}
                  />
                  <Java_03_02_Code09 />
                  <ClassContentsTitle2>
                    배열의 선언과 동시에 초기화하는 방법
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    1차원 배열과 마찬가지로 2차원 배열도 선언과 동시에 초기화 할
                    수 있습니다.
                    <Java_03_02_Code10 />
                  </ClassContentsText>
                  <ClassContentsTitle2>
                    객체를 참조하는 배열
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    기본 타입의 배열은 각 항목에 직접 값을 가지고 있지만, 참조
                    타입 배열은 각 항목에 객체의 번지를 가지고 있습니다.
                    <Java_03_02_Code11 />
                  </ClassContentsText>
                  <ClassContentsTitle2>Enhanced for 문</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsCode>{`for (타입 변수이름 : 배열이나컬렉션이름) { 배열의 길이만큼 반복적으로 실행하고자 하는 명령문; } `}</ClassContentsCode>
                    <br />
                    배열이나 컬렉션의 길이만큼 반복되어 실행 됩니다.
                    <br />
                    루프 마다 각 요소는 명시한 변수의 이름으로 저장되며,
                    명령문에서는 이 변수를 사용하여 각 요소를 참조할 수
                    있습니다.
                    <br />
                    Enhanced for 문은 요소를 참조할 때만 사용하는 것이 좋으며,
                    요소의 값을 변경하는 작업에는 적합하지 않습니다.
                    <Java_03_02_Code12 />
                  </ClassContentsText>
                  <ClassContentsTitle2>
                    2차원 배열 성적 구하기 및 정렬 (버블정렬)
                  </ClassContentsTitle2>
                  <Java_03_02_Code13 />
                  <ClassContentsTitle2>정렬(선택정렬)</ClassContentsTitle2>
                  <Java_03_02_Code14 />
                  <ClassContentsTitle1>배열의 활용</ClassContentsTitle1>
                  <ClassContentsTitle2>배열의 복사</ClassContentsTitle2>
                  <ClassContentsText>
                    자바에서 배열은 한 번 생성하면 그 길이를 변경 할 수
                    없습니다.
                    <br />더 많은 데이터를 저장하기 위해서는 더욱 큰 배열을
                    만들고, 이전 배열의 데이터를 새로 만든 배열로 복사해야
                    합니다.
                    <br />
                    배열의 복사를 위해 자바에서는 여러가지 방법을 제공 합니다.
                    <br />
                    <ClassContentsTextTab>
                      1. System 클래스의 arraycopy() 메소드
                      <br />
                      2. Arrays 클래스의 copyOf() 메소드
                      <br />
                      3. Object 클래스의 clone() 메소드
                      <br />
                      4. for 문과 인덱스를 이용한 복사
                    </ClassContentsTextTab>
                    중에서 가장 좋은 성능을 보이는 것은 배열의 복사만을 위해
                    만들어진 arraycopy() 메소드입니다.
                    <br />
                    하지만 현재 배열의 복사를 위해 가장 많이 사용되는 메소드는
                    좀 더 유연한 방식의 copyOf() 메소드입니다.
                    <br />
                    arraycopy(), copyOf() 메소드와 for 문을 이용한 복사는 배열의
                    길이를 마음대로 늘일 수 있습니다.
                    <br />
                    하지만 clone() 메소드는 이전 배열과 같은 길이의 배열밖에
                    만들 수 없습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>arraycopy()</ClassContentsTitle3>
                  <ClassContentsText>
                    배열 값을 복사 할 때 사용합니다.
                    <ClassContentsCode>
                      System.arraycopy(Object src, int srcPos, Object dest, int
                      destPos, int length);
                    </ClassContentsCode>
                    <Java_03_02_Code15 />
                  </ClassContentsText>
                  <ClassContentsTitle3>copyOf()</ClassContentsTitle3>
                  <ClassContentsText>
                    배열을 원하는 길이 만큼 새로운 배열로 복사
                    <Java_03_02_Code16 />
                  </ClassContentsText>
                  <ClassContentsTitle2>얕은 복사</ClassContentsTitle2>
                  <ClassContentsText>
                    객체의 주소 값만 가져와 참조형 변수에 저장하고 하나의 객체를
                    주소 변수가 참조하는 것을 의미 합니다.
                    <Java_03_02_Code17 />
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_03_02_05.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle2>깊은 복사</ClassContentsTitle2>
                  <ClassContentsText>
                    새로운 배열 객체를 생성하여 기존 배열의 데이터를 복사하는 것
                    <Java_03_02_Code18 />
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_03_02_06.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>연습문제 (1)</ClassContentsTitle3>
                  <ClassContentsText>
                    중복 없는 로또 번호 만들기
                    <Java_03_02_Code19 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>연습문제 (2)</ClassContentsTitle3>
                  <ClassContentsText>
                    7개의 정수를 입력 받아 홀수와 짝수를 각 배열에 나누어 저장
                    후 출력합니다.
                    <Java_03_02_Code20 />
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

export default Java_03_02;
