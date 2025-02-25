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
import Java_09_05_M from "./Java_09_05_M";

const Java_09_05 = () => {
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
    navigate("/study/java/09/05");
    window.location.reload();
  };

  const Java_09_05_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 단일채팅클라이언트;
import java.io.DataInputStream;
import java.io.IOException;
import java.net.Socket;

public class RcvThread extends Thread {
    private final Socket socket;
    private String rcvString;
    public RcvThread(Socket socket) {
        this.socket = socket;
    }
    @Override
    public void run() {
        try {
            DataInputStream buf = new DataInputStream(socket.getInputStream());
            while (true) {
                rcvString = buf.readUTF();
                if(rcvString == null) {
                    System.out.println("상대방 연결이 종료 되었습니다.");
                } else {
                    System.out.println("상대방 : " + rcvString);
                }
            }
        } catch(IOException e) {
            e.printStackTrace();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_05_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 단일채팅클라이언트;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class SndThread extends Thread {
    private final Socket socket;
    Scanner sc = new Scanner(System.in);
    public SndThread(Socket socket) {
        this.socket = socket;
    }
    @Override
    public void run() {
        try {
            DataOutputStream sndWriter = new DataOutputStream(socket.getOutputStream());
            String sndString;
            while (true) {
                sndString = sc.nextLine();
                // UTF-8 인코딩을 사용해서 문자열 출력, socket에 출력
                sndWriter.writeUTF(sndString);
                sndWriter.flush();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_05_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 단일채팅클라이언트;
import java.io.IOException;
import java.net.ConnectException;
import java.net.Socket;
import java.net.UnknownHostException;

public class SingleChatClient {
    public static void main(String[] args)  {
        Socket sock = null;
        try {
            sock = new Socket("localhost", 8888);
            System.out.println("서버와 연결되었습니다.");
        } catch(ConnectException e) {
            System.out.println("서버와의 연결이 거절었습니다. 서버를 먼저 실행 하세요.");
        } catch (UnknownHostException e) {
            System.out.println("서버를 알 수 없습니다.");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        if(sock != null) {
            RcvThread rcvThread = new RcvThread(sock);
            rcvThread.start();
            SndThread sndThread = new SndThread(sock);
            sndThread.start();
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
        <Java_09_05_M />
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
                05. Client (단일 채팅 클라이언트)
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
                  <ClassHeaderTitle>
                    Client (단일 채팅 클라이언트)
                  </ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>
                    클라이언트용 TCP 소켓 프로그래밍 순서
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    1. 서버의 IP주소와 서버가 정한 포트번호를 매개변수로 하여
                    클라리언트용 소켓 객체 생성
                    <br />
                    2. 서버와의 입출력 스트림 오픈
                    <br />
                    3. 보조 스트림을 통해 성능 개선
                    <br />
                    4. 스트림을 통해 읽고 쓰기
                    <br />
                    5. 통신 종료
                    <br />
                    <br />
                    <b>ReceiveThread</b>
                    <Java_09_05_Code01 />
                    <br />
                    <b>SendThread</b>
                    <Java_09_05_Code02 />
                    <br />
                    <b>SocketClient</b>
                    <Java_09_05_Code03 />
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
export default Java_09_05;
