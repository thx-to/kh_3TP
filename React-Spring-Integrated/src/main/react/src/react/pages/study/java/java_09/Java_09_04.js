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
import Java_09_04_M from "./Java_09_04_M";

const Java_09_04 = () => {
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
    navigate("/study/java/09/04");
    window.location.reload();
  };

  const Java_09_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 소켓서버;

import java.io.DataInputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.SocketException;

public class ReceiveThread extends Thread {
    private final Socket socket;

    public ReceiveThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            DataInputStream tmpbuf = new DataInputStream(socket.getInputStream());
            String receiveString;
            while (true) {
                receiveString = tmpbuf.readUTF();
                System.out.println("상대방 : " + receiveString);
            }
        } catch (SocketException e1) {
            System.out.println("상대방 연결이 종료되었습니다.");
        } catch (IOException e2) {
            e2.printStackTrace();
        }
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 소켓서버;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class SendThread extends Thread {
    private final Socket socket;
    private Scanner scanner = new Scanner(System.in);

    public SendThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            DataOutputStream sendWriter = new DataOutputStream(socket.getOutputStream());
            String sendString;
            while(true){
                sendString = scanner.nextLine();
                sendWriter.writeUTF(sendString);
                sendWriter.flush();
            }
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_04_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 소켓서버;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketServer {
    public static void main(String[] args) throws IOException {
        int port = 8888;
        ServerSocket socketServer = new ServerSocket(port);
        while(true) {
            Socket sock = socketServer.accept();
            System.out.println("ip : " + sock.getInetAddress() + " 와 연결되었습니다.");
            ReceiveThread receiveThread = new ReceiveThread(sock);
            receiveThread.start();
            SendThread sendThead = new SendThread(sock);
            sendThead.start();
        }
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
        <Java_09_04_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                09. 네트워킹
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                04. Server (단일 채팅 서버)
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="09" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>Server (단일 채팅 서버)</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>
                    서버용 TCP 소켓 프로그래밍 순서
                  </ClassContentsTitle1>
                  <ClassContentsText>
                    1. 서버의 포트 번호를 정함
                    <br />
                    2. 서버용 소켓 객체 생성 (ServerSocket)
                    <br />
                    3. 클라이언트 쪽에서 접속 요청이 오길 기다림 (accept)
                    <br />
                    4. 접속 요청이 오면 요청 수락 후 해당 클라이언트에 대한 소켓
                    객체 생성
                    <br />
                    5. 연결된 클라이언트와 입출력 스트림 생성
                    <br />
                    6. 스트림을 통해 읽고 쓰기
                    <br />
                    7. 통신 종료
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">ReceiveThread</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    클라이언트에서 온 데이터를 수신하는 스레드이다.
                    <br />
                    마찬가지로 별도의 Thread를 만들기위해 Thread클래스를
                    상속받아 run()메서드를 구현한다.
                    <br />
                    socket.getIntputStream()을 사용해서 클라이언트에게 데이터를
                    수신할 수 있다.
                    <Java_09_04_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">SendThread</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    서버에서 클라이언트로 데이터를 전송하는 스레드이다.
                    <br />
                    별도의 Thread를 만들기위해 Thread클래스를 상속받아
                    run()메서드를 구현한다.
                    <br />
                    socket.getOutputStream()을 사용해서 클라이언트에게 데이터를
                    전송할 수 있다.
                    <Java_09_04_Code02 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">SocketServer</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    클라이언트의 연결 요청을 기다리면서 연결 수락을 담당하는
                    클래스
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_09_04_01.png"})`,
                      }}
                    />
                    <Java_09_04_Code03 />
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
export default Java_09_04;
