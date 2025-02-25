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

const Java_09_06_M = () => {
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
    navigate("/study/java/09/06");
    window.location.reload();
  };

  const Java_09_06_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 다중채팅서버;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

class MultiChatServer {
    public static void main(String[] args) {
        // 서버 : 192.168.10.245
        int port = 8900;
        try {
            // port 번호만 넣으면 서버의 첫번째 ip가 자동 입력
            // 바인딩 과정 생략
            ServerSocket serverSocket = new ServerSocket(port);
            while(true) {
                // 하나의 session, 즉 한개의 연결 통로가 만들어 짐
                Socket socket = serverSocket.accept();
                Thread serverTh = new ServerSocketTh(socket);
                serverTh.start();
            }

        } catch(IOException e) {}
    }
}

class ServerSocketTh extends Thread {
    // 소켓 식별자로 어레이리스트 생성
    Socket socket;
    static List<Socket> sockets = new ArrayList<>();
    public ServerSocketTh(Socket socket) {
        this.socket = socket;
        sockets.add(socket);
    }
    @Override
    public void run() {
        try {
            while(true) {
                String str;
                // 소켓으로 부터 입력을 받음 (바이트 단위)
                InputStream input = socket.getInputStream();
                // 문자 변환 보조 스트림 (바이트 입력을 문자로 변환)
                InputStreamReader isr = new InputStreamReader(input);
                // 버퍼를 이용이용하면 입/출력 성능이 개선 됨 (성능향상보조스트림)
                BufferedReader reader = new BufferedReader(isr);
                if((str = reader.readLine()) != null) {
                    System.out.println(str);
                    for(int i = 0; i < sockets.size(); i++) {
                        OutputStream out = sockets.get(i).getOutputStream(); // 쓰기
                        // 텍스트 출력 스트림
                        PrintWriter writer = new PrintWriter(out, true);
                        writer.println(str);
                    }
                }
            }
        } catch (IOException e) {}
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_06_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 다중채팅클라이언트;
import java.net.Socket;
import java.util.Scanner;

public class MultiChatClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 8900);
            System.out.println("서버 접속 성공");
            Scanner sc = new Scanner(System.in);
            System.out.print("이름을 설정 하세요 : ");
            Thread sndTh = new MultiSnd(socket, sc.nextLine());
            Thread rcvTh = new MultiRcv(socket);
            sndTh.start();
            rcvTh.start();

        } catch(Exception e) {
            System.out.println("서버 접속 실패!!");
        }
    }
}

public class MultiRcv extends Thread {
    Socket socket;
    public MultiRcv(Socket socket) {
        this.socket = socket;
    }
    @Override
    public void run() {
        InputStream input;     // 바이너리 입력
        InputStreamReader isr; // 바이너리를 문자로 변환하는 스트림
        BufferedReader reader; // 성능 향상 보조 스트림
        String str = null;
        try {
            while(true) {
                input = socket.getInputStream(); // 소켓으로 부터 바이너리 입력
                isr = new InputStreamReader(input);
                reader = new BufferedReader(isr);
                if((str = reader.readLine()) != null) {
                    System.out.println(str);
                }
            }
        } catch (IOException e) {}
    }
}

public class MultiSnd extends Thread {
    Socket socket;
    String name;
    Scanner sc;

    public MultiSnd(Socket socket, String name) {
        sc = new Scanner(System.in);
        this.socket = socket;
        this.name = name;
    }
    @Override
    public void run() {
        try {
            while(true) {
                // 궁극적으로는 소켓에 써야 함
                OutputStream out = socket.getOutputStream();
                // true를 넣으면 자동 flush 되므로 별도로 flush 호출 안해도 됨
                PrintWriter write = new PrintWriter(out, true);
                // 출력을 콘솔 출력과 동일하게 사용 가능
                write.println(name + " : " + sc.nextLine());
            }
        } catch (IOException e) { }
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
            06. Socket을 이용한 다중 채팅
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle2>다중 채팅 서버</ClassContentsTitle2>
        <ClassContentsText>
          <Java_09_06_Code01 />
        </ClassContentsText>
        <br />
        <br />
        <ClassContentsTitle2>다중 채팅 클라이언트</ClassContentsTitle2>
        <ClassContentsText>
          BufferedReader / BufferedWriter : 버퍼를 이용해서 읽고 쓴 메소드이며,
          버퍼를 이용하기 때문에 입/출력의 효율이 비교할 수없을 정도로 좋아
          집니다.
          <Java_09_06_Code02 />
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
export default Java_09_06_M;
