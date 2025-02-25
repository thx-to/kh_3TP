import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
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

const Java_09_03_M = () => {
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
    navigate("/study/java/09/03");
    window.location.reload();
  };

  const Java_09_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
serverSocket = new ServerSocket(5001);
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
serverSocket = new ServerSocket();		
serverSocket.bind(new InetSocketAddress("localhost", 5001));
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
ServerSocket serverSocket = new ServerSocket();
// localhost대신 정확한 IP를 주면 됨.
serverSocket.bind(new InetSocketAddress("localhost",포트번호));
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
InetSocketAddress isa = (InetSocketAddress) socket.getRemoteSocketAddress();
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    ServerSocket serverSocket = null;
    try {
        serverSocket = new ServerSocket();
        serverSocket.bind(new InetSocketAddress("localhost", 5001));
        while(true) {
            System.out.println( "[연결 기다림]");
            Socket socket = serverSocket.accept();
            InetSocketAddress isa = (InetSocketAddress) socket.getRemoteSocketAddress();
            System.out.println("[연결 수락함] " + isa.getHostName());
        }
    } catch(Exception e) {}

    if(!serverSocket.isClosed()) {
        try {
            serverSocket.close();
        } catch (IOException e1) {}
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Socket socket = null;
    try {
        socket = new Socket();
        System.out.println( "[연결 요청]");
        socket.connect(new InetSocketAddress("localhost", 5001));
        System.out.println( "[연결 성공]");
    } catch(Exception e) {}

    if(!socket.isClosed()) {
        try {
            socket.close();
        } catch (IOException e1) {}
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
// 입력 스트림 얻기
InputStream is = socket.getInputStream();

// 출력 스트림 얻기
OutputStream os = socket.getOutputStream();
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String data = "보낼 데이터";
byte[] byteArr = data.getBytes("UTF-8");
OutputStream os =socket.getOutputStream();
os.wirte(byteArr);
os.flush();
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
byte[] byteArr = new byte[100];
InputStream is = socket.getInputStream();
int readByteCount = is.read(byteArr);
String data = new String(byteArr, 0, readByteCount, "UTF-8");
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    ServerSocket serverSocket = null; // ServerSocket에 대한 참조 변수 생성
    try {
        serverSocket = new ServerSocket();
        serverSocket.bind(new InetSocketAddress("localhost", 5600));
        while(true) {
            System.out.println("[연결 기다림]");
            Socket socket = serverSocket.accept();
            InetSocketAddress isa = (InetSocketAddress) socket.getRemoteSocketAddress();
            System.out.println("[연결 수락] " + isa.getHostName());

            byte[] bytes = null;
            String message = null;

            OutputStream os = socket.getOutputStream();
            message = "안녕하세요.클라이언트님 !!!";
            bytes = message.getBytes("UTF-8");
            os.write(bytes);
            os.flush();
            System.out.println("[데이터 보내기 성공]");

            InputStream is = socket.getInputStream();
            bytes = new byte[100];
            int readByteCount = is.read(bytes);
            message = new String(bytes, 0, readByteCount, "UTF-8");
            System.out.println("[데이터 받기 성공] : " + message);

            os.close();
            is.close();
        }
    } catch(BindException e) {

    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Socket socket = null;
    try {
        socket = new Socket();
        System.out.println( "[연결 요청]");
        socket.connect(new InetSocketAddress("localhost", 5500));
        System.out.println( "[연결 성공]");

        byte[] bytes = null;
        String message = null;

        OutputStream os = socket.getOutputStream();
        message = "Hello Server";
        bytes = message.getBytes("UTF-8");
        os.write(bytes);
        os.flush(); // 스트림 버퍼의 내용을 강제적으로 출력 시킴
        System.out.println( "[데이터 보내기 성공]");

        InputStream is = socket.getInputStream();
        bytes = new byte[100];
        int readByteCount = is.read(bytes);
        message = new String(bytes, 0, readByteCount, "UTF-8");
        System.out.println("[데이터 받기 성공]: " + message);

        os.close();
        is.close();
    } catch(Exception e) {}

    if(!socket.isClosed()) {
        try {
            socket.close();
        } catch (IOException e1) {}
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
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <TopBoxWide2>
        <TopBox2>
          <TopBoxText2 onClick={() => handleStudyJava()}>
            09. 네트워킹
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            03. TCP 네트워킹
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsText>
          TCP(Transmission Control Protocol)은 <b>연결 지향적 프로토콜</b>{" "}
          입니다.
          <br />
          클라이언트가 연결 요청을 하고, 서버가 연결을 수락하면 통신 선로
          고정되고, 모든 데이터는 통선 선로를 통해 순차적으로 전달 합니다.
          <br />
          데이터를 전송하기 전 연결이 형성되어하고 이제 소요되는 시간이 많이
          걸립니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>ServerSocket 과 Socket의 용도</ClassContentsTitle2>
        <ClassContentsTitle3>
          <font color="black">
            클라이언트의 연결 요청을 기다리면서 요청이 오면 요청 수락
          </font>
        </ClassContentsTitle3>
        <ClassContentsText>
          java.net.ServerSocket클래스의 역할
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">연결된 클라이언트와 통신</font>
        </ClassContentsTitle3>
        <ClassContentsText>java.net.Socket 클래스의 역할</ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">바이딩 포트</font>
        </ClassContentsTitle3>
        <ClassContentsText>
          서버는 클라이언트가 접속 할 포트를 가지고 있어야 하는데, 이 포트를
          바인딩 포트라고 합니다.
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">동작 절차</font>
        </ClassContentsTitle3>
        <ClassContentsText>
          서버는 고정된 포트 번호에 바인딩해서 실행 {`->`} ServerSocket을 생성할
          때 포트번호 하나를 지정해야함
          <br />
          서버가 실행되면 클라이언트는 서버의 IP 주소와 바인딩 포트 번호로
          Socket을 생성하여 연결 요청
          <br />
          ServerSocket은 클라이언트가 연결 요청을 하면 accept() 메서드로 연결
          수락, 통신용 socket 생성
          <br />그 후 클라이언트와 서버는 각각 Socket을 이용해 데이터를 주고
          받음
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>ServerSocket 생성과 연결 요청</ClassContentsTitle2>
        <ClassContentsTitle3>ServerSocket 얻기</ClassContentsTitle3>
        <ClassContentsText>
          첫번째 방법 : 생성자에 바인딩 포트를 대입하고 객체를 생성
          <Java_09_03_Code01 />
          <br />
          두번째 방법 : 디폴트 생성자로 객체 생성 후 포트 바인딩을 위해 bind()
          메서드 호출
          <Java_09_03_Code02 />
          <br />
          서버PC에 멀티IP가 할당되어 있을 경우, 특정 IP로만 접속할 때만 연결
          수락을 하고 싶다면 “localhost”대신 정확한 IP를 적으면 됩니다.
          <Java_09_03_Code03 />
          <br />
          ServerSocket 생성 시 해당 포트가 이미 할당되어 있을 경우
          BindException이 발생함
          <br />
          {`=>`} 다른 포트로 바인딩하거나 다른 프로그램을 종료하고 다시 실행하면
          됨.
        </ClassContentsText>
        <ClassContentsTitle3>연결 수락</ClassContentsTitle3>
        <ClassContentsText>
          포트 바인딩이 끝났으면 ServerSocket은 클라이언트 연결 수락을 위해
          accept() 메서드 실행하면 됩니다.
          <br />
          accept()는 클라이언트가 연결 요청하기 전까지 블로킹
          <br />
          블로킹 : 스레드가 대기 상태가 된다는 뜻<br />
          때문에 UI를 생성하는 스레드나, 이벤트를 처리하는 스레드에서 accept()를
          호출하지 않아야 함.
        </ClassContentsText>
        <ClassContentsTitle3>
          연결된 클라이언트 IP와 포트 정보 확인
        </ClassContentsTitle3>
        <ClassContentsText>
          <Java_09_03_Code04 />
          <ClassTableBox>
            <ClassTable style={{ textAlign: "center" }}>
              <ClassTableTr>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>리턴 타입</b>
                </ClassTableTd>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>메서드(매개변수)</b>
                </ClassTableTd>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>설명</b>
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>String</ClassTableTd>
                <ClassTableTd>getHostName()</ClassTableTd>
                <ClassTableTd>클라이언트 IP 리턴</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>Int</ClassTableTd>
                <ClassTableTd>getPost()</ClassTableTd>
                <ClassTableTd>클라이언트 포트 번호 리턴</ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>String</ClassTableTd>
                <ClassTableTd>toString()</ClassTableTd>
                <ClassTableTd>"IP:포트번호" 형태의 문자열 리턴</ClassTableTd>
              </ClassTableTr>
            </ClassTable>
          </ClassTableBox>
          <br />
          <b>Server</b>
          <Java_09_03_Code05 />
          <br />
          <b>Client</b>
          <Java_09_03_Code06 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>Socket 데이터 통신</ClassContentsTitle2>
        <ClassContentsText>
          클라이언트가 연결 요청 connect()하고 서버가 연결 수락 accept() 했다면,
          양쪽의 Socket객체로 부터 각각 입력 스트림과 출력 스트림을 얻을 수
          있습니다.
          <ClassContentsImage
            style={{
              width: "100%",
              height: "150px",
              backgroundImage: `url(${"/images/study/java/java_09_03_01.png"})`,
            }}
          />
          <Java_09_03_Code07 />
          <font color="red">
            <b>Stream이란?</b>
          </font>{" "}
          개별 바이트나 문자열인 데이터의 원천 파일을 읽거나 쓸 때, 네트워크
          소켓을 거쳐 통신 할 때 쓰이는 추상적인 개념을 의미 합니다.
        </ClassContentsText>
        <ClassContentsTitle3>
          상대방에게 데이터를 보내기 위한 byte[] 생성
        </ClassContentsTitle3>
        <Java_09_03_Code08 />
        <ClassContentsTitle3>
          상대방이 보낸 데이터를 받기 위한 byte[] 생성
        </ClassContentsTitle3>
        <ClassContentsText>
          - InputStream은 데이터를 바이트 단위로 읽어 들이는 통로 입니다.
          <br />
          - InputStream은 추상 클래스이며 입력 스트림을 나타내는 모든 클래스의
          수퍼 클래스 입니다.
          <br />
          - InputStream은 데이터 읽기, 특정 시점으로 되돌아가기, 남아 있는
          데이터 보여주기 , 끊기 기능 제공 합니다.
          <Java_09_03_Code09 />
          <br />
          <b>Server</b>
          <Java_09_03_Code10 />
          <br />
          <b>Client</b>
          <Java_09_03_Code11 />
        </ClassContentsText>
        {/* </ClassContentsContainer> */}
        {/* </EachClass> */}
        <ArrowContainer>
          <Java_ArrowNavigation direction="left" />
          <Java_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default Java_09_03_M;
