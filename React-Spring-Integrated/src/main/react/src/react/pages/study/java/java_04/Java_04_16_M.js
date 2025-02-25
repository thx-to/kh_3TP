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

const Java_04_16_M = () => {
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
    navigate("/study/java/04/16");
    window.location.reload();
  };

  const Java_04_16_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
접근제어자 interface 인터페이스이름 {
	public static final 타입 상수 이름 = 값;
	...
	public abstract 메소드이름(매겨변수 목록)'
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스;

import java.util.Scanner;

interface NetworkAdapter {
    public abstract void connect();
}

class LAN implements NetworkAdapter {
    String company;
    LAN(String company) {
        this.company = company;
    }
    @Override
    public void connect() {
        System.out.println(company + " LAN에 연결 되었습니다.");
    }
}

class WiFi implements NetworkAdapter {
    String company;
    WiFi(String company) {
        this.company = company;
    }
    @Override
    public void connect() {
        System.out.println(company + " WiFi에 연결 되었습니다.");
    }
}

class LTE implements NetworkAdapter {
    String company;
    LTE(String company) {
        this.company = company;
    }
    @Override
    public void connect() {
        System.out.println(company + " LTE에 연결 되었습니다.");
    }
}

public class Main {
    public static void main(String[] args) {
        NetworkAdapter adapter;
        Scanner sc = new Scanner(System.in);
        System.out.print("연결할 네트워크를 선택 하세요[1]LAN, [2]WiFi, [3]LTE : ");
        int num = sc.nextInt();
        switch(num) {
            case 1 :
                adapter = new LAN("KT Magapass");
                adapter.connect();
                break;
            case 2 :
                adapter = new WiFi("SK Telecom");
                adapter.connect();
                break;
            case 3 :
                adapter = new LTE("LG U+");
                adapter.connect();
                break;
            default :
                System.out.println("네트워크 선택이 잘 못 되었습니다.");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스;
import java.util.Scanner;

interface NetworkAdapter {
    public abstract void connect();

		default void description() {
        System.out.println("자바8에서 추가된 새로운 메소드 입니다.");
    }
}

class Chat {
    Chat() {
    }
    public void sendMsg() {
        System.out.println("메시지를 보냅니다.");
    }
    public void rcvMsg() {
        System.out.println("메시지를 받습니다.");
    }
}

class LAN extends Chat implements NetworkAdapter {
    String company;
    String name;
    LAN(String company, String name) {
        this.company = company;
        this.name = name;
    }
		//default void description() {
    //    System.out.println("자바8에서 추가된 새로운 메소드 입니다.");
    //}

    @Override
    public void connect() {
        System.out.println(company + " LAN에 연결 되었습니다.");
    }

    public void sendMsg() {
        System.out.println(name + "에게 메시지를 보냅니다.");
    }
    public void rcvMsg() {
        System.out.println(name + "으로 부터 메시지를 받습니다.");
    }
}

class WiFi implements NetworkAdapter {
    String company;
    String name;
    WiFi(String company, String name) {
        this.company = company;
        this.name = name;
    }
    @Override
    public void connect() {
        System.out.println(company + " WiFi에 연결 되었습니다.");
    }
    public void sendMsg() {
        System.out.println(name + "에게 메시지를 보냅니다.");
    }
    public void rcvMsg() {
        System.out.println(name + "으로 부터 메시지를 받습니다.");
    }
}

class LTE implements NetworkAdapter {
    String company;
    LTE(String company) {
        this.company = company;
    }
    @Override
    public void connect() {
        System.out.println(company + " LTE에 연결 되었습니다.");
    }
}

public class Main {
    public static void main(String[] args) {
        NetworkAdapter adapter;
        Scanner sc = new Scanner(System.in);
        System.out.print("연결할 네트워크를 선택 하세요[1]LAN, [2]WiFi, [3]LTE : ");
        int num = sc.nextInt();
        switch(num) {
            case 1 :
                adapter = new LAN("KT Magapass", "고유림");
                adapter.connect();
                ((LAN) adapter).sendMsg();
                ((LAN) adapter).rcvMsg();
                break;
            case 2 :
                adapter = new WiFi("SK Telecom", "나희도");
                adapter.connect();
                ((WiFi) adapter).sendMsg();
                ((WiFi) adapter).rcvMsg();
                break;
            case 3 :
                adapter = new LTE("LG U+");
                adapter.connect();
                break;
            default :
                System.out.println("네트워크 선택이 잘 못 되었습니다.");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CocoaMain {
    public static void main(String[] args) {
        CocoaTok cocoaTok = new CocoaTok("2NE1");
        cocoaTok.writeMsg("오늘 춥죠??");
        NetAdapter adapter;
        Scanner sc = new Scanner(System.in);
        System.out.print("네트워크 [1]WiFi [2]5G");
        int sel = sc.nextInt();
        if(sel == 1) adapter = new WiFi();
        else adapter = new FiveG();
        cocoaTok.send(adapter);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CocoaTok {
    private String to; // 상대방이름
    private String msg; // 전달할 메시지
    public CocoaTok(String name) {
        to = name;
    }
    public void writeMsg(String msg) {
        this.msg = to + " : " + msg;
    }
    public void send(NetAdapter na) {
        na.send(msg);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface NetAdapter {
    void connect();
    void send(String msg);
}

class WiFi implements NetAdapter {
    @Override
    public void connect() {}

    @Override
    public void send(String msg) {
        System.out.println("WiFi >> " + msg);
    }
}
class FiveG implements NetAdapter {
    @Override
    public void connect() {}

    @Override
    public void send(String msg) {
        System.out.println("5G >> " + msg);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스디폴트메소드;

public interface RemoteControl {
    int MAX_VOLUME = 100; // 상수로 정의 하지 않았지만 상수 이다.
    int MIN_VOLUME = 0;
    // 추상 메소드 : abstract 를 생략 했지만 수창 메소드 이다.
    void turnOn();
    void turnOff();
    void setVolume(int volume);

    // 정적 메소드
		// 인터페이스의 정적 메소드는 인터페이스로 호출 가능 하다.
    static void changeBattery() {
        System.out.println("건전지를 교환 합니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Audio implements  RemoteControl{
    private int volume;
    @Override
    public void turnOn() {
        System.out.println("Audio 를 켭니다.");
    }

    @Override
    public void turnOff() {
        System.out.println("Audio 를 끕니다.");
    }

    @Override
    public void setVolume(int volume) {
        if(volume > RemoteControl.MAX_VOLUME) {
            this.volume = RemoteControl.MAX_VOLUME;
        } else if(volume < RemoteControl.MIN_VOLUME) {
            this.volume = RemoteControl.MIN_VOLUME;
        } else {
            this.volume = volume;
        }
        System.out.println("현재 Audio 볼륨 : " + this.volume);
    }
    void getInfo() {
        System.out.println("오디오 입니다.");
        System.out.println("현재 볼륨은 " + volume + " 입니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("제품을 선택 하세요(1.TV/2.AUDIO) : ");
    int selType = sc.nextInt();
    RemoteControl rc;
    if(selType == 1) {
        rc = new Television();
        rc.turnOn();
        rc.setVolume(20);
        ((Television) rc).getInfo();
    } else {
        rc = new Audio();
        rc.turnOn();
        rc.setVolume(20);
        ((Audio) rc).getInfo();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_16_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    RemoteControl rc = new RemoteControl() {
        @Override
        public void turnOn() {
            System.out.println("Test");
        }

        @Override
        public void turnOff() {

        }

        @Override
        public void setVolume(int volume) {

        }
    };
    rc.turnOn();
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
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyJava()}>
            04. 객체 지향 프로그래밍
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            16. Interface
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>인터페이스란?</ClassContentsTitle2>
        <ClassContentsText>
          자식 클래스가 여러 부모 클래스를 상속받을 수 있다면, 다양한 동작을
          수행할 수 있다는 장점을 가지게 될 것입니다.
          <br />
          하지만 클래스를 이용하여 다중 상속을 할 경우 메소드 출처의 모호성 등
          여러 가지 문제가 발생할 수 있어{" "}
          <b>자바에서는 클래스를 통한 다중 상속은 지원하지 않습니다.</b>
          <br />
          하지만 다중 상속의 이점을 버릴 수는 없기에{" "}
          <b>자바에서는 인터페이스라는 것을 통해 다중 상속을 지원</b>
          하고 있습니다.
          <br />
          <font color="red">
            <i>
              인터페이스(interface)란 다른 클래스를 작성할 때 기본이 되는 틀을
              제공하면서, 다른 클래스 사이의 중간 매개 역할까지 담당하는 일종의
              추상 클래스
            </i>
          </font>
          를 의미합니다.
          <ClassContentsImage
            style={{
              width: "100%",
              height: "300px",
              backgroundImage: `url(${"/images/study/java/java_04_16_01.png"})`,
            }}
          />
          <br />
          자바에서{" "}
          <b>
            추상 클래스는 추상 메소드뿐만 아니라 생성자, 필드, 일반 메소드도
            포함
          </b>
          할 수 있습니다.
          <br />
          하지만 인터페이스(interface)는 오로지{" "}
          <b>추상 메소드와 상수만을 포함</b>할 수 있습니다.
          <br />- 상수 : 모든 필드는 <b>자동으로 상수(final static)으로 변환</b>
          됩니다.
          <br />- 메소드 : 모든 메소드는 <b>추상 메소드로 변경</b>
          되며(public abstract 자동으로 추가) 상속 받은 클래스에서 구현 해야 함
          <br />- 디폴트 메소드 : 구현부를 가지고 있으며,
          <b>상속 받은 클래스에서 재정의 하여 사용 가능</b>합니다.
          <br />- 정적 메소드 : <b>객체와 상관없이 인터페이스 타입으로 사용</b>
          할수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>인터페이스의 선언</ClassContentsTitle2>
        <ClassContentsText>
          인터페이스를 선언할 때에는{" "}
          <b>접근 제어자와 함께 interface 키워드를 사용</b>하면 됩니다.
          <Java_04_16_Code01 />
          <br />
          클래스와는 달리 인터페이스의 <b>모든 필드는 public static final</b>
          이어야 하며, <b>모든 메소드는 public abstract</b>이어야 합니다. 이
          부분은 모든 인터페이스에 공통으로 적용되는 부분이므로 부분이므로 이
          제어자는 생략할 수 있습니다.{" "}
          <b>생략하면 제어자는 컴파일 시 컴파일러가 자동으로 추가</b>해 줍니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>인터페이스의 구현</ClassContentsTitle2>
        <ClassContentsText>
          인터페이스는 추상 클래스와 마찬가지로 자신이 직접 인스턴스를 생성 할
          수 없습니다.
          <br />
          따라서 인터페이스가 포함하고 있는 추상 메소드를 구현해 줄 클래스를
          작성해야만 합니다.
          <br />
          <ClassContentsCode>
            class 클래스이름 implements 인터페이스이름 {`{…}`}
          </ClassContentsCode>
          <Java_04_16_Code02 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          상속과 인터페이스 함께 사용하기
        </ClassContentsTitle2>
        <ClassContentsText>
          - 예제가 문법 설명으로는 적합하나 실 동작시 문제점을 포함하고 있어
          수정 필요
          <Java_04_16_Code03 />
        </ClassContentsText>
        <ClassContentsTitle3>
          예제를 매개변수의 다형성을 이용 수정
        </ClassContentsTitle3>
        <ClassContentsText>
          - CocoaTok class 별도 생성
          <br />
          - Send와 Rcv는 인터페이스 상속으로 구현해서 CocoTok의 전송 기능으로
          연결
          <br />
          - 전송시 자동으로 네트워크를 찾아주면 좋으나 우선은 조건문으로선택해서
          연결
          <br />
          - 매개변수 다형성을 이용해서 해결
          <Java_04_16_Code04 />
          <Java_04_16_Code05 />
          <Java_04_16_Code06 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>리모컨 예제 (인터페이스)</ClassContentsTitle2>
        <ClassContentsText>
          클래스는 필드, 생성자, 메소드로 구성되어지는 반면에 인터페이스는 상수
          필드, 추상메서드로만 구성
          <br />
          <br />
          <b>RemoteControl.java</b>
          <Java_04_16_Code07 />
          <br />
          <b>Audio.java</b>
          <Java_04_16_Code08 />
          <br />
          <b>Main.java</b>
          <Java_04_16_Code09 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>인터페이스 익명 구현 객체</ClassContentsTitle2>
        <Java_04_16_Code10 />
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

export default Java_04_16_M;
