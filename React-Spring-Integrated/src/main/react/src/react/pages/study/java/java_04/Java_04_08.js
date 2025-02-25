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
import Java_04_08_M from "./Java_04_08_M";

const Java_04_08 = () => {
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
    navigate("/study/java/04/08");
    window.location.reload();
  };

  const Java_04_08_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 새로운TV만들기;
public class Main {
    public static void main(String[] args) {
        PrototypeTV money = new PrototypeTV();
        TV lgTV = new TV("우리집 TV");
        lgTV.setPower(true);
        lgTV.setVolume(120);
        lgTV.setChannel(1500, false);
        lgTV.viewTV();
    }
}

class TV extends PrototypeTV {
    String name;
    boolean isInternet;
    TV() { // 자식 클래스의 생성자
        // 매개변수가 있는 부모의 생성자가 호출 되었음
        super(true, 30, 30);
        name = "LG TV";
    }
    TV(String name) {
        isPower = false;
        channel = 10;
        volume = 10;
        isInternet = false;
        this.name = name;
    }
    void setPower(boolean isPower) {
        this.isPower = isPower;
    }
    void setVolume(int vol) {
        if(vol >= 0 && vol <= 100) {
            this.volume = vol;
        } else {
            System.out.println("볼륨 설정 범위를 벗어 났습니다.");
        }
    }

    // 오버 라이딩 : 부모에게서 물려 받은 것을 재정의 해서 사용 함
    public void setChannel(int cnl) {
        if(cnl > 0 && cnl < 2000) {
            channel = cnl;
            System.out.println("채널을 " + channel + "변경 했습니다.");
        } else System.out.println("채널 설정 범위가 아닙니다.");
    }
    // 메소드 오버로딩 : 동일 이름의 메소드를 매개변수의 갯수나 타입으로 구분하는 것
    public void setChannel(int cnl, boolean isInternet) {
        if(isInternet) {
            System.out.println("인터넷 모드 입니다.");
            this.isInternet = true;
        } else {
            this.isInternet = false;
            if(cnl > 1 && cnl < 2000) {
                channel = cnl;
                System.out.println("채널을 " + channel + "변경 했습니다.");
            } else System.out.println("채널 설정 범위가 아닙니다.");
        }
    }
    void viewTV() {
        System.out.println("이름 : " + name);
        System.out.println("전원 : " + isPower);
        System.out.println("채널 : " + channel);
        System.out.println("볼륨 : " + volume);
        System.out.println("인터넷모드 : " + isInternet);
    }

}
          `}
        </code>
      </pre>
    );
  };

    const Java_04_08_Code02 = () => {
      useEffect(() => {
        hljs.highlightAll();
      }, []);
      return (
        <pre>
          <code className="language-java">
            {`
package 새로운TV만들기;
public class PrototypeTV {
    boolean isPower;  // 전원에 대한 설정값 저장
    int channel;      // 채널에 대한 설정값을 저장하는 인스턴스 필드
    int volume;       // 볼륨에 대한 설정값을 저장하는 인스턴스 필드
    // 생성자가 하는 일은 객체가 생성될 때 필드에 초기값을 할당한 역할이다.
    public PrototypeTV() {
        this.isPower = false;
        this.channel = 10;
        this.volume = 10;
    }
    // 생성자 오버로딩 : 생성자를 매개변수의 갯수나 타입에 따라 다양하게 호출 하도록 함
    public PrototypeTV(boolean isPower, int channel, int volume) {
        this.isPower = isPower;
        this.channel = channel;
        this.volume = volume;
    }
    public void setChannel(int cnl) {
        if(cnl > 0 && cnl < 1000) {
            channel = cnl;
        } else System.out.println("채널 설정 범위가 아닙니다.");
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
        <Java_04_08_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                04. 객체 지향 프로그래밍
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                08. ✏️ 예제 : TV 만들기
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="04" />
              </StickyClassBox>
            </LeftContainer>

            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>✏️ 예제 : TV 만들기</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>상속 적용하기</ClassContentsTitle2>
                  <ClassContentsText>
                    이전에 만들었던 TV를 수정하여 아래의 기능을 적용하도록
                    하겠습니다.
                    <br />- 시제품 TV를 만들고 이를 상속 받아서 TV를
                    만들겠습니다.
                    <br />- 상속 받은 TV에서 메소드를 오버라이딩해서 기능을 개선
                    하겠습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsText>
                    <b>Main.java</b>
                    <Java_04_08_Code01 /><br />
                    <b>PrototypeTV.java</b>
                    <Java_04_08_Code02 />
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

export default Java_04_08;
