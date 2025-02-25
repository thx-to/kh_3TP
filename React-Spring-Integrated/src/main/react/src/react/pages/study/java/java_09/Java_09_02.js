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
import Java_09_02_M from "./Java_09_02_M";

const Java_09_02 = () => {
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
    navigate("/study/java/09/02");
    window.location.reload();
  };

  const Java_09_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
InetAddress local = InetAddress.getLocalHost();
          `}
        </code>
      </pre>
    );
  };

  const Java_09_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
InetAddress[] iaArr = InetAddress.getAllByName("www.naver.com");
  for(InetAddress remote : iaArr) {
      System.out.println("www.naver.com IP주소: " + remote.getHostAddress());
  }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
  try {
      InetAddress local = InetAddress.getLocalHost();
      System.out.println("내컴퓨터 IP주소: " + local.getHostAddress());

      InetAddress[] iaArr = InetAddress.getAllByName("www.naver.com");
      for(InetAddress remote : iaArr) {
          System.out.println("www.naver.com IP주소: " + remote.getHostAddress());
      }
  } catch(UnknownHostException e) {
      e.printStackTrace();
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
        <Java_09_02_M />
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
                02. TCP / IP와 소켓 통신
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
                  <ClassHeaderTitle>TCP / IP와 소켓 통신</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>네트워크</ClassContentsTitle1>
                  <ClassContentsTitle2>서버와 클라이언트</ClassContentsTitle2>
                  <ClassContentsText>
                    네트워크로 연결된 컴퓨터간의 관계를 역할(role)로 구분한 개념
                    <br />
                    서버는 서비스를 제공하는 프로그램으로 클라이언트의 연결을
                    수락하고 요청 내용을 처리 후 응답을 보내는 역할
                    <br />
                    클라이언트는 서비스를 받는 프로그램으로 네트워크 데이터를
                    필요로 하는 모든 어플리케이션이 해당됨
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_09_02_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>OSI 7 계층 모델</ClassContentsTitle2>
                  <ClassContentsText>
                    네트워크 통신 장비 업체간의 표준을 맞춰 호환성을 증대 시키기
                    위해 ISO 단체에 의해 만들어 졌습니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "400px",
                        backgroundImage: `url(${"/images/study/java/java_09_02_02.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>1. 물리 계층</ClassContentsTitle3>
                  <ClassContentsText>
                    물리 계층(Physical layer)은 네트워크의 기본 네트워크
                    하드웨어 전송 기술을 이룬다. 네트워크의 높은 수준의 기능의
                    논리 데이터 구조를 기초로 하는 필수 계층이다. 다양한 특징의
                    하드웨어 기술이 접목되어 있기에 OSI 아키텍처에서 가장 복잡한
                    계층으로 간주된다.
                  </ClassContentsText>
                  <ClassContentsTitle3>2. 데이터 링크 계층</ClassContentsTitle3>
                  <ClassContentsText>
                    데이터 링크 계층(Data link layer)은 포인트 투 포인트(Point
                    to Point) 간 신뢰성있는 전송을 보장하기 위한 계층으로 CRC
                    기반의 오류 제어와 흐름 제어가 필요하다. 네트워크 위의
                    개체들 간 데이터 를 전달하고, 물리 계층에서 발생할 수 있는
                    오류를 찾아 내고, 수정하는 데 필요한 기능적, 절차적 수단을
                    제공한다. 주소 값은 물리적으로 할당 받는데, 이는 네트워크
                    카드가 만들어질 때부터 맥 주소(MAC address)가 정해져 있다는
                    뜻이다. 주소 체계는 계층이 없는 단일 구조이다. 데이터 링크
                    계층의 가장 잘 알려진 예는 이더넷 이다. 이 외에도 HDLC나
                    ADCCP 같은 포인트 투 포인트(point-to-point) 프로토콜이나
                    패킷 스위칭 네트워크나 LLC, ALOHA  같은 근거리 네트워크용
                    프로토콜이 있다. 네트워크 브릿지나 스위치 등이 이 계층에서
                    동작하며, 직접 이어진 곳에만 연결할 수 있다.
                  </ClassContentsText>
                  <ClassContentsTitle3>3. 네트워크 계층</ClassContentsTitle3>
                  <ClassContentsText>
                    네트워크 계층(Network layer)은 여러개의 노드를 거칠때마다
                    경로를 찾아주는 역할을 하는 계층으로 다양한 길이의 데이터 를
                    네트워크들을 통해 전달하고, 그 과정에서 전송 계층이
                    요구하는 서비스 품질 (QoS)을 제공하기 위한 기능적, 절차적
                    수단을 제공한다. 네트워크 계층은 라우팅, 흐름 제어,
                    세그멘테이션(segmentation/desegmentation), 오류 제어,
                    인터네트워킹(Internetworking) 등을 수행한다. 라우터가 이
                    계층에서 동작하고 이 계층에서 동작하는 스위치도 있다.
                    데이터를 연결하는 다른 네트워크를 통해 전달함으로써 인터넷이
                    가능하게 만드는 계층이다. 논리적인 주소 구조(IP), 곧
                    네트워크 관리자가 직접 주소를 할당하는 구조를 가지며,
                    계층적(hierarchical)이다.
                  </ClassContentsText>
                  <ClassContentsTitle3>4. 전송 계층</ClassContentsTitle3>
                  <ClassContentsText>
                    전송 계층(Transport layer)은{" "}
                    <b>
                      양 끝단(End to end)의 사용자들이 신뢰성있는 데이터를 주고
                      받을 수 있도록 해 주어
                    </b>
                    , 상위 계층들이 데이터 전달의 유효성이나 효율성을 생각하지
                    않도록 해준다. 시퀀스 넘버 기반의 오류 제어 방식을 사용한다.
                    전송 계층은 특정 연결의 유효성을 제어하고, 일부 프로토콜은
                    상태 개념이 있고(stateful), 연결 기반(connection
                    oriented)이다. 이는 전송 계층이 패킷들의 전송이 유효한지
                    확인하고 전송 실패한 패킷들을 다시 전송한다는 것을 뜻한다.
                    가장 잘 알려진 전송 계층의 예는 TCP이다.
                    <br />
                    종단간(end-to-end) 통신을 다루는 최하위 계층으로 종단간
                    신뢰성 있고 효율적인 데이터를 전송하며, 기능은 오류검출 및
                    복구와 흐름제어, 중복검사 등을 수행한다.
                  </ClassContentsText>
                  <ClassContentsTitle3>5. 세션 계층</ClassContentsTitle3>
                  <ClassContentsText>
                    두 시스템간의 동기화를 유지하고 데이터 교환을 관리
                  </ClassContentsText>
                  <ClassContentsTitle3>6. 표현 계층</ClassContentsTitle3>
                  <ClassContentsText>
                    데이터의 구조를 하나의 통일 된 형식으로 설정
                  </ClassContentsText>
                  <ClassContentsTitle3>7. 응용 계층</ClassContentsTitle3>
                  <ClassContentsText>응용프로그램</ClassContentsText>
                  <br />
                  <ClassContentsTitle2>TCP/IP 계층 모델</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>계층 구분</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>해당 계층에 속하는 프로토콜 종류</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>응용</ClassTableTd>
                          <ClassTableTd>
                            FTP, SSH, TELNET, SMTP, DNS, HTTP, SNMP, SSL 등
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>전송</ClassTableTd>
                          <ClassTableTd>TCP, UDP 등</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>네트워크</ClassTableTd>
                          <ClassTableTd>IP, ICMP, IGMP, ARP 등</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>데이터 링크</ClassTableTd>
                          <ClassTableTd>이더넷, PPP 등</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>물리</ClassTableTd>
                          <ClassTableTd>-</ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>IP Address</ClassContentsTitle2>
                  <ClassContentsText>
                    네트워크의 모든 Host는 Internet Address라 불리는 32bit로
                    구성된 Address 체계를 이용하야 서로를 구분 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Port</ClassContentsTitle2>
                  <ClassContentsText>
                    같은 IP Address를 가지는 컴퓨터 내에서 프로그램을 식별하는
                    번호로 사용되며, 클라이언트는 서버 연결 요청 시 IP주소와
                    포트 번호를 알아야 합니다. (1 ~ 65535)
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Protocol</ClassContentsTitle2>
                  <ClassContentsText>
                    서버-클라이언트 간의 접속이나 통신 방식, 전송 데이터 형식
                    등을 정의한 통신 규약 입니다.
                    <br />
                    Internet 표준 Protocol에는 TCP와 UDP가 있습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>소켓 통신?</ClassContentsTitle2>
                  <ClassContentsText>
                    서버와 클라이언트 양방향 연결이 이루어지는 통신으로,
                    클라이언트도 서버로 요청을 보낼 수 있고, 서버도 클라이언트로
                    요청을 보낼 수 있는 통신으로 “
                    <b>
                      클라이언트와 서버 양쪽에서 서로에게 데이터를 전달을 하는
                      방식의 양방향 통신
                    </b>
                    " 입니다.
                    <br />
                    보통 스트리밍이나 실시간 채팅 등 실시간으로 데이터를 주고
                    받아야 하는 경우 소켓 통신이 적합 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    TCP(Transmission Control Protocol)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    TCP는 네트워크 계층 중 전송 계층에서 사용하는 프로토콜로서,
                    장치들 사이에 논리적인 접속을 성립(establish)하기 위하여
                    연결을 설정하여 <b>신뢰성을 보장하는 연결형 서비스</b> 이다.
                    TCP는 네트워크에 연결된 컴퓨터에서 실행되는 프로그램 간에 
                    <b>
                      일련의 옥텟(데이터, 메세지, 세그먼트라는 블록
                      단위)를 안정적으로, 순서대로, 에러없이 교환
                    </b>
                    할 수 있게 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">연결형 서비스</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>연결형 서비스 이다.</ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">흐름 제어</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    데이터 처리 속도를 조절하여 수신자의 버퍼 오버플로우를 방지
                    할 수 있다. (버퍼 사이즈 조정)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">혼잡제어</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    네트워크 내의 패킷 수가 넘치게 증가하지 않도록 방지(패킷
                    갯수 조절)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">신뢰성이 높은 전송</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    ACK 값의 수신 여부 확인하여 재전송 요구 들을 할 수 있음
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    UDP(User Datagram Protocol)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    TCP와 달리 비연결형 프로토콜 입니다. 즉, 연결을 위해
                    할당되는 논리적인 경로가 없는데,그렇기 때문에 각각의 패킷은
                    다른 경로로 전송되고, 각각의 패킷은 독립적인 관계를 지니게
                    되는데 이렇게 데이터를 서로다른 경로로 독립적으로 처리하게
                    되고, 이러한 프로토콜을 UDP라고 합니다.
                    <br />- 비연결형 서비스로 데이터그램 방식을 제공한다.
                    <br />- 정보를 주고 받을 때 정보를 보내거나 받는다는
                    신호절차를 거치지 않는다.
                    <br />- UDP헤더의 CheckSum 필드를 통해 최소한의 오류만
                    검출한다.
                    <br />- 신뢰성이 낮다.
                    <br />- TCP보다 속도가 빠르다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    HTTP(Hyper Text Transfer Protocol)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    브라우저와 서버가 통신할 수 있도록 만들어주는 여러 프로토콜
                    가운데 한 종류로 <b>웹 브라우저</b>와 <b>웹 서버</b> 사이에
                    HTML(웹 문서를 만들기 위한 언어) 문서를 주고받는데 쓰이는
                    통신 프로토콜입니다.
                    <br />
                    <ClassContentsTextTab>
                      -{" "}
                      <b>
                        초기에는 HTTP 파일을 전송하기 위한 목적으로 만들어졌으나
                        현재는 JSON, Image 파일 등 또한 전송할 수 있습니다.
                      </b>
                    </ClassContentsTextTab>
                    일반적으로 전송 계층 프로토콜로 TCP를 사용하고, 네트워크
                    계층 프로토콜로 IP를 사용합니다. 이 두 계층을 합쳐서 
                    <b>TCP/IP</b>라는 이름으로 부릅니다. TCP/IP에서는 IP 주소를
                    사용해서 통신할 컴퓨터를 결정하고, 포트 번호를 사용해서 해당
                    컴퓨터의 어떤 프로그램과 통신할지를 결정합니다.
                    <br />
                    (HTTP에서는 기본적으로 80번 포트를 사용합니다.)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">HTTP Protocol 의 특징</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    HTTP에서는 클라이언트가 서버에 요청 메세지를 보내고 서버는
                    클라이언트의 요청에 대한 응답을 반환합니다. 연결 상태를
                    유지하지 않는 비연결성 프로토콜이며, 
                    <b>요청과 응답(request, response) 방식</b>으로 동작합니다.
                    <br />
                    (비연결성 프로토콜의 단점을 해결하기 위해 Cookie와 Session이 등장하였습니다.)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      HTTP 통신의 요청과 응답(Request, Respose)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    클라이언트란 요청을 보내는 쪽을 의미하며 일반적으로 웹
                    관점에서는 브라우저를 의미합니다. 서버란 요청을 받는 쪽을
                    의미하며 일반적으로 데이터를 보내주는 원격지의 컴퓨터를
                    의미합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "180px",
                        backgroundImage: `url(${"/images/study/java/java_09_02_03.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>
                    TCP/IP 소켓 프로그래밍
                  </ClassContentsTitle1>
                  <ClassContentsText>
                    클라이언트와 서버간의 1:1 소켓 통신
                    <br />
                    서버가 먼저 실행 되어 클라이언트의 요청을 기다려야 하고,
                    서버용 프로그램과 클라이언트용 프로그램을 따로 구현해야 함
                    <br />
                    자바에서는 TCP 소켓 프로그래밍을 위해 java.net패키지에서
                    ServerSocket과 Socket클래스 제공
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "250px",
                        backgroundImage: `url(${"/images/study/java/java_09_02_04.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>Socet의 통신 과정</ClassContentsTitle1>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "400px",
                        backgroundImage: `url(${"/images/study/java/java_09_02_05.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">서버측 동작 과정</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    1. 서버는 socket를 만든다.
                    <br />
                    2. 서버에서 ip주소와 port를 지정하여 소켓에 바인딩한다.
                    <br />
                    3. 서버는 listen상태가 되어 클라이언트의 요청을 기다린다.
                    <br />
                    4. 클라이언트의 요청을 받아들이고 데이터 송수신을 위한
                    소켓을 생성한다.
                    <br />
                    5. 클라이언트와 데이터를 송/수신한다.
                    <br />
                    6. 연결을 종료한다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">클라이언트측 동작 과정</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    1. socket을 만든다.
                    <br />
                    2. 서버에게 요청을 보내 connection을 맺는다.
                    <br />
                    3. 서버와 데이터를 송/수신한다.
                    <br />
                    4. 연결을 종료한다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>InetAddress 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    IP 주소를 다루기 위해 자바에서 제공하는 클래스
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
                          <ClassTableTd>byte[] getAddress()</ClassTableTd>
                          <ClassTableTd>
                            IP 주소를 byte 배열로 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            static InetAddress[] getAllByName(String host)
                          </ClassTableTd>
                          <ClassTableTd>
                            도메인 명에 지정된 모든 호스트의 IP 주소를 배열로
                            담아 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            static InetAddress getByAddress(byte[] addr)
                          </ClassTableTd>
                          <ClassTableTd>
                            byte 배열을 통해 IP 주소를 얻는다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            static InetAddress getByName(String host)
                          </ClassTableTd>
                          <ClassTableTd>
                            도메인 명을 통해 IP 주소를 얻는다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            String getCanonicaHostName()
                          </ClassTableTd>
                          <ClassTableTd>
                            FQDN(Full Qualified Domain Name)을 얻는다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>String getHostAddress()</ClassTableTd>
                          <ClassTableTd>
                            호스트의 IP 주소를 반환한다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>String getHostName()</ClassTableTd>
                          <ClassTableTd>호스트의 이름을 반환한다.</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            static InetAddress getLocalHost()
                          </ClassTableTd>
                          <ClassTableTd>
                            로컬 호스트의 IP 주소를 반환한다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            boolean isMulticastAddress()
                          </ClassTableTd>
                          <ClassTableTd>
                            IP 주소가 멀티캐스트 주소인지 알려준다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            boolean isLoopbackAddress()
                          </ClassTableTd>
                          <ClassTableTd>
                            IP 주소가 loopback 주소(127.0.0.1)인지 알려준다.
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    InetAddress로 IP 주소 얻기
                  </ClassContentsTitle2>
                  <ClassContentsTitle3>
                    <font color="black">로컬 컴퓨터 IP 주소 얻기</font>
                  </ClassContentsTitle3>
                  <Java_09_02_Code01 />
                  <ClassContentsTitle3>
                    <font color="black">도메인 이름으로 IP 얻기</font>
                  </ClassContentsTitle3>
                  <Java_09_02_Code02 />
                  <Java_09_02_Code03 />
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
export default Java_09_02;
