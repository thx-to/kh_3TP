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

import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Java_02_05_M = () => {
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
  const handleStudyJava = () => {
    navigate("/study/java");
  };

  // TopBox fourthpath
  const handleRefresh = () => {
    navigate("/study/java/02/01");
    window.location.reload();
  };

  const Java_02_05_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
while(n > 0) {
	sum += n;
	n--;
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class While {
    public static void main(String[]args) {
        int age;
				 Scanner sc = new Scanner(System.in);
        while(true) {
            System.out.print("나이를 입력 하세요 : ");
            age = sc.nextInt();
            if (age > 0 && age < 200) break;
            else System.out.println("나이를 잘못 입력 하셨습니다. ");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int treeHit = 0;
while (treeHit < 10) {
    treeHit++;
    System.out.println("나무를  " + treeHit + "번 찍었습니다.");
    if (treeHit == 10) {
        System.out.println("나무 넘어갑니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class While {
    public static void main(String[]args) {
        int age;
        do {
            System.out.print("나이를 입력 하세요 : ");
            Scanner sc = new Scanner(System.in);
            age = sc.nextInt();
        } while(age <= 0 || age >= 200);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
    for (int i = 1; i <= 100; i++) {
        System.out.printf("%4d", i);
        if (i % 10 == 0) System.out.println();
    }
    System.out.println();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
   public static void main(String[]args) {
      for (int i = 0; i < 10; i++) {
          for (int j = 0; j < 10; j++) {
              System.out.print("* ");
          }
          System.out.println();
      }
  }

          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
  for (int i = 2; i < 10; i++) {
      for (int j = 1; j < 10; j++) {
          System.out.printf("%d x %d = %d\n", i, j, (i*j));
      }
      System.out.println();
  }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i <= n*n; i++) {
            System.out.printf("%3d", i);
            if(i % n == 0) System.out.println();
        }
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Scanner sc = new Scanner(System.in);
  int n = sc.nextInt();
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n;j++) {
          System.out.print("* ");
      }
      System.out.println();
 }
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i+1;j++) {
            System.out.print("* ");
        }
        System.out.println();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int rand1, rand2;
    int cnt = 0;
    while(true) {
        cnt++;
        rand1 = (int) ((Math.random() * 6) + 1); // 랜덤 함수는 실수형으로 값이 생성되므로 형변환이 필요.
        rand2 = (int) ((Math.random() * 6) + 1);
        if((rand1 + rand2) == 12) {
            System.out.printf("무인도를 %d 번만에 탈출 합니다.\n", cnt);
            break;
        } else {
            System.out.println("주사위의 합이 " + (rand1 + rand2) + "입니다.");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_02_05_Code12 = () => {
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

  const Java_02_05_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.Scanner;

public class Test {
    public static void main(String[] args)  {
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        int n = sc.nextInt();
        for (int i = 1; i <= n * n; i++) {
            System.out.printf("%4d", i);
            if (i % n == 0) System.out.println();
        }
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
          <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyJava()}>
            02. 기본 자료형과 연산자
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>05. 반복문</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>반복문</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsText>
          반복문이란 주어진 조건이 참인 경우 혹은 주어진 횟수만큼 반복적으로
          프로그램을 수행 합니다.
          <br />
          프로그램이 처리하는 코드의 많은 부분이 반복적으로 수행되는 형태가
          많으므로 가장 많이 사용되는 제어문 입니다.
          <br />
          <br />
          <ClassContentsTextTab>
            1. while 문<br />
            2. do ~ while문
            <br />
            3. for문
            <br />
            4. Enhanced for 문 : 배열이나 컬렉션과 같은 반복 가능한(iterable)
            객체를 간편하게 순회하고 요소에 접근하는 반복문
            <br />
            <br />
          </ClassContentsTextTab>
        </ClassContentsText>
        <ClassContentsTitle3>while 문</ClassContentsTitle3>
        <ClassContentsText>
          주어진 조건이 참인 동안 수행되는 반복문 입니다. <br />
          반복 횟수가 명확하지 않거나, 특정 조건이 충족될 때까지 반복해야 하는
          경우에 사용됩니다.
          <br />
          <font color="red">
            <b>
              {`while(조건식) {`}
              <br />
              {`조건이 참인 동안 반복적으로 실행되는 명령문;`}
              <br />
              {`}`}
            </b>
          </font>
          <br />
          <br />
          <Java_02_05_Code01 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>
          잘못 입력된 경우 반복문 계속 수행 (유효값 체크)
        </ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code02 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>정해진 횟수 반복하기</ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code03 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>do ~ while문</ClassContentsTitle2>
        <ClassContentsText>
          먼저 루틴을 수행하고 조건을 나중에 비교 합니다.
          <br />
          해당 루틴이 한번은 수행되어야 하는 경우 사용하며 while문으로 대체 가능
          합니다.
          <br />
          <font color="red">
            <b>
              {`do {`}
              <br />
              {`한번은 무조건 수행되고 조건이 참인 경우 반복적으로 수행되는 루틴`}
              <br />
              {`} while(조건식);`}
            </b>
          </font>
          <br />
          <br />
          <Java_02_05_Code04 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>for문</ClassContentsTitle2>
        <ClassContentsText>
          for문내에 초기식, 조건식, 증감식에 대한 식을 가지고 있는 유한의 갯수를
          반복 수행할 때 유용하게 사용 됩니다.
          <br />
          for문내의 초기식, 조건식, 증감식은 각각 생략 할 수 있습니다.
          <br />
          for문에서 실행될 명령문이 한 중인 경우 중괄호를 생략 할 수 있습니다.
          (조건문도 동일)
          <br />
          <font color="red">
            <b>
              {`for(초기식;조건식;증감식) {`}
              <br />
              {`참인 동안 반복적으로 실행되는 명령문;`}
              <br />
              {`}`}
            </b>
          </font>
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>기본 for문</ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code05 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>중첩 for문(별찍기)</ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code06 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>구구단 찍기</ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code07 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>사각형 찍기</ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code08 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>별찍기 (2중 for 기본)</ClassContentsTitle3>
        <ClassContentsText>
          <Java_02_05_Code09 />
          <br />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>분기분</ClassContentsTitle2>
        <ClassContentsTitle3>break문</ClassContentsTitle3>
        <ClassContentsText>
          break 문은 루프 내에서 사용하여 해당 반복문을 완전히 종료시킨 뒤,
          반복문 바로 다음에 위치한 명령문을 실행합니다.
          <br />
          즉 루프 내에서 조건식의 판단 결과와 상관없이 반복문을 완전히
          빠져나가고 싶을 때 사용합니다.
          <br />
          주로 반복문에서 사용되며, switch 문의 case를 끝낼 때도 사용 됩니다.
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>continue 문</ClassContentsTitle3>
        <ClassContentsText>
          continue 문은 루프 내에서 사용하여 해당 루프의 나머지 부분을 건너뛰고,
          바로 다음 조건식의 판단으로 넘어가게 해줍니다.
          <br />
          보통 반복문 내에서 특정 조건에 대한 예외 처리를 하고자 할 때 자주
          사용됩니다.
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>return 문</ClassContentsTitle3>
        <ClassContentsText>
          메소드에서 사용되며, 메소드의 실행을 종료하고 값을 반환합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>실습문제</ClassContentsTitle2>
        <ClassContentsTitle3>연습문제(1)</ClassContentsTitle3>
        <ClassContentsText>
          · 삼각형 별찍기
          <br />
          <br />
          <Java_02_05_Code10 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>연습문제(2)</ClassContentsTitle3>
        <ClassContentsText>
          · 두개의 주사위(랜덤 함수 사용)
          <br />
          <br />
          <ClassContentsCodeBox>
            👉 Math.random(): Math 클래스의 random() 메서드는 0 이상 1 미만의
            무작위 실수 값을 반환합니다.
          </ClassContentsCodeBox>
          <br />
          <Java_02_05_Code11 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>연습문제(3)</ClassContentsTitle3>
        <ClassContentsText>
          · 중복 없는 로또 번호 만들기
          <br />
          <br />
          <Java_02_05_Code12 />
          <br />
        </ClassContentsText>
        <ClassContentsTitle3>연습문제(4)</ClassContentsTitle3>
        <ClassContentsText>
          · 양의 정수 n을 입력 받아 n * n 크기의 행렬을 출력하는 프로그램 작성
          <br />
          · 이 때 행렬의 값은 1부터 시작하여 왼쪽에서 오른쪽, 위에서 아래
          순서대로 채워 넣음
          <br />
          <br />
          <Java_02_05_Code13 />
        </ClassContentsText>
        {/* </ClassContentsContainer>
          </EachClass> */}
        <ArrowContainer>
          <Java_ArrowNavigation direction="left" />
          <Java_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Java_02_05_M;
