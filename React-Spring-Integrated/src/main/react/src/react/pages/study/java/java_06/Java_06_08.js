import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
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
  ClassTableBox,
} from "../../../../styles/study/Language_00_00";
import { ArrowContainer } from "../../../../styles/study/Language_ArrowNavigation";

import Java_Title from "../java_components/Java_Title";
import Java_ClassList_Filtered from "../java_components/Java_ClassList_Filtered";
import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Java_06_08_M from "./Java_06_08_M";

const Java_06_08 = () => {
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
    navigate("/study/java/06/08");
    window.location.reload();
  };

  const Java_06_08_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
		Stack<Integer> stack = new Stack<>();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		System.out.println(stack.peek());
		System.out.println(stack.pop());
		System.out.println(stack.empty());
		System.out.println(stack.size());
		System.out.println(stack.contains(1)); //1이 포함되어 있다면 true
	}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_08_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class StackCoin {
    public static void main(String[] args) {
        Stack<Coin> coinBox = new Stack<>();
        coinBox.push(new Coin(100));
        coinBox.push(new Coin(50));
        coinBox.push(new Coin(500));
        coinBox.push(new Coin(10));

        while (!coinBox.isEmpty()) {
            Coin coin = coinBox.pop();
            System.out.println("꺼내온 동전 : " + coin.getValue());
        }
    }
}

class Coin {  // Integer
    private int value;

    public Coin(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_08_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 스택EX;
import java.util.Scanner;
import java.util.Stack;
// 스택을 이용한 괄호 열림/닫힘 확인
public class StackMainEx {
    public static void main(String[] args) {
        Stack<Character> st = new Stack<>();
        Scanner sc = new Scanner(System.in);
        System.out.print("수식 입력 : ");
        String exp = sc.next();
        // 입력 받은 문자열 길이 만큼 반복문 순회
        for(int i = 0; i < exp.length(); i++) {
            char ch = exp.charAt(i);
            if(ch == '(') {
                st.push(ch); // 열림 괄호 일 때 push
            } else if(ch == ')') {
                if(!st.isEmpty())st.pop(); // 닫힘 괄호 일 때 pop
                else {
                    System.out.println("괄호가 일치 하지 않습니다.");
                    return;
                }
            }
        }
        if(st.isEmpty()) {
            System.out.println("괄호가 일치 합니다.");
        } else {
            System.out.println("괄호가 일치 하지 않습니다.");
        }

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_08_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Queue<Message> msgQueue = new LinkedList<>();
    msgQueue.offer(new Message("Mail", "백이진"));
    msgQueue.offer(new Message("SMS", "스티브"));
    msgQueue.offer(new Message("Kakao", "서울시"));

    while(!msgQueue.isEmpty()) { // 메시지큐가 비어 있는지 확인
        Message msg = msgQueue.poll(); // 메시지큐에서 한개의 메시지를 꺼냄
        switch(msg.command) {
            case "Mail" :
                System.out.println(msg.to + "에게 메일을 보냅니다.");
                break;
            case "SMS" :
                System.out.println(msg.to + "에게 문자를 보냅니다.");
                break;
            case "Kakao" :
                System.out.println(msg.to + "에게 카톡을 보냅니다");
                break;
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_08_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Message {
    public String command;
    public String to;

    public Message(String command, String to) {
        this.command = command;
        this.to = to;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_08_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class QueueHistoryEx {
    Queue<String> queue = new LinkedList<>();
    final static int MAX_SIZE = 10;
    public static void main(String[] args) {
        QueueHistoryEx history = new QueueHistoryEx();
        System.out.println("help 를 입력하면 도움말을 볼 수 있습니다.");
        while(true) {
            System.out.print("$ ");
            Scanner sc = new Scanner(System.in);
            String cmd = sc.nextLine().trim(); // 입력 받은 문자열의 앞/뒤의 공백을 제거
            if(cmd.equalsIgnoreCase("q")) { // 대소문자 구분없이 q 입력 시 종료
                System.exit(0); // 프로그램 강제 종료(System Call)
            } else if(cmd.equalsIgnoreCase("help")) {
                System.out.println("help - 도움말을 보여 줍니다.");
                System.out.println("q/Q - 프로그램 종료");
                System.out.println("history - 최근 입력한 명령어를 " + MAX_SIZE + "개 보여 줍니다.");
            } else if(cmd.equalsIgnoreCase("history")) {
                history.save(cmd);
                int cnt = 0;
                for(String e : history.queue) {
                    cnt++; // 명령 history 앞에 숫자를 붙여 주기 위해서 값 증가 시킴
                    System.out.println(cnt + " " + e);
                }
            } else {
                history.save(cmd);
                System.out.println(cmd);
            }
        }
    }
    void save(String cmd) {
        queue.offer(cmd);
        if(queue.size() > MAX_SIZE) queue.remove();
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
        <Java_06_08_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                06. 제네릭 / 컬렉션 프레임워크
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                08. LIFO & FIFO
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="06" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>LIFO & FIFO</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>Stack</ClassContentsTitle2>
                  <ClassContentsText>
                    LIFO(Last in First Out) 구조 입니다. 스택을 응용한 대표적인
                    예가 JVM의 스택 메모리 입니다.
                    <br />
                    스택 메모리에 저장된 변수는 나중에 저장된 것 부터 먼저
                    제거가 됩니다.{" "}
                    <b>Stack은 내부적으로 Vector 클래스를 상속</b>받아 만들어
                    졌습니다.
                    <br />- 프로그램내에서 메소드의 호출이 쌓이는 구조에
                    사용됩니다.
                    <br />- 아래의 예제 처럼 괄호를 열고 닫는 부분등의 체크에
                    사용 됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>관련 메소드</ClassContentsTitle3>
                  <ClassContentsText>
                    - push(item) : 객체를 저장 합니다.
                    <br />- peek() : 스택 맨 위의 값 확인
                    <br />- pop() : 스택의 맨 위의 값을 추출하면서 보여 준다.
                    <br />- empty() : Stack이 비어 있는지 확인 합니다.
                    <ClassContentsImage
                      style={{
                        width: "90%",
                        height: "250px",
                        backgroundImage: `url(${"/images/study/java/java_06_08_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>기본적인 문법</ClassContentsTitle3>
                  <Java_06_08_Code01 />
                  <ClassContentsTitle3>동전 예제</ClassContentsTitle3>
                  <Java_06_08_Code02 />
                  <ClassContentsTitle3>괄호 예제</ClassContentsTitle3>
                  <Java_06_08_Code03 />
                  <br />
                  <ClassContentsTitle2>Queue</ClassContentsTitle2>
                  <ClassContentsText>
                    FIFO (Frist in First out) 구조 입니다.
                    <br />
                    자바에서 큐는{" "}
                    <b>
                      LinkedList를 활용하여 생성해야 하므로 LinkedList가 import
                    </b>
                    되어야 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_06_08_02.png"})`,
                      }}
                    />
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>메서드</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>설명</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>boolean add(E e)</ClassTableTd>
                          <ClassTableTd>
                            해당 큐의 맨 뒤에 전달된 요소를 삽입함.
                            <br />
                            만약 삽입에 성공하면 true를 반환하고, 큐에 여유
                            공간이 없어 삽입에 실패하면 IllegalStateException을
                            발생시킴.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>E peek()</ClassTableTd>
                          <ClassTableTd>
                            해당 큐의 맨 앞에 있는(제일 먼저 저장된) 요소를
                            반환함.
                            <br />
                            만약 큐가 비어있으면 null을 반환함.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>Object remove()</ClassTableTd>
                          <ClassTableTd>
                            해당 큐의 맨 앞에 있는(제일 먼저 저장된) 요소를
                            제거함.
                            <br />
                            예외 발생
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>boolean offer(Obect o)</ClassTableTd>
                          <ClassTableTd>
                            주어진 객체를 넣는다.
                            <br />
                            예외 발생하지 않고 false 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>Object poll()</ClassTableTd>
                          <ClassTableTd>
                            Queue에서 객체를 꺼내서 반환 합니다.
                            <br />
                            비어 있으면 null 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>Object element()</ClassTableTd>
                          <ClassTableTd>
                            삭제 없이 요소를 읽어 온다.
                            <br />
                            예외 발생
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <Java_06_08_Code04 />
                    <Java_06_08_Code05 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    명령어 이력 조회 예제
                  </ClassContentsTitle3>
                  <Java_06_08_Code06 />
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
export default Java_06_08;
