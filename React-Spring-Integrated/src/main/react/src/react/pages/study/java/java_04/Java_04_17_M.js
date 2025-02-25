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

const Java_04_17_M = () => {
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
    navigate("/study/java/04/17");
    window.location.reload();
  };

  const Java_04_17_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface Interface {
   // 추상 메서드 
    void abstractMethodA();
    void abstractMethodB();
    void abstractMethodC();

	// default 메서드
    default int defaultMethodA(){
    	...
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_17_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스3;
// 인터페이스에 포함되는 것들
// 상수 : 모든 필드는 자동으로 상수(final static)로 변환된다.
// 메소드 : 모든 메소드는 추상메소드로 변경된다. (자동으로 abstract 붙는다.)
// 디폴트메소드 : 구현부를 가짐. 상속 받은 클래스가 재정의 사용 가능
// 정적 메소드 : static, 객체와 상관없이 인터페이스 타입으로 사용
public interface RemoteControl {
    int MAX_VOLUME = 100; // 자동으로 final static 이 붙는다.
    int MIN_VOLUME = 0;
    void turnON();        // 자동으로 abstract 가 붙는다.
    void turnOFF();
    void setVolume(int volume);
    // 디폴트 메소드 : jdk 1.8 이후에 추가 됨, default 키워드를 사용 함
    default void setMute(boolean mute) {
        if(mute) System.out.println("무음 처리 합니다.");
        else System.out.println("무음 해제 합니다.");
    }
    static void changeBattery() {
        System.out.println("건전지를 교환 합니다.");
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_17_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스3;
public class Audio implements RemoteControl {
    private int volume;
    @Override
    public void turnON() {
        System.out.println("Audio 를 켭니다.");
    }

    @Override
    public void turnOFF() {
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

    @Override
    public void setMute(boolean mute) {
        if(mute) System.out.println("오디오를 무음 처리 합니다.");
        else System.out.println("오디오 무음 처리 해제 합니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_17_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스3;
public class Television implements RemoteControl {
    private int volume;
    @Override
    public void turnON() {
        System.out.println("TV 를 켭니다.");
    }

    @Override
    public void turnOFF() {
        System.out.println("TV 를 끕니다.");
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
        System.out.println("현재 TV 볼륨 : " + this.volume);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_17_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 인터페이스3;
import java.util.Scanner;

public class RemoteMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("제품 선택 [1]TV, [2]Audio : ");
        int selectMenu = sc.nextInt();
        RemoteControl remoCon;
        if(selectMenu == 1) {
            remoCon = new Television();
            remoCon.turnON();
            remoCon.setVolume(20);
            remoCon.setMute(true);
            // 인터페이스 소속의 static 메소드
            RemoteControl.changeBattery();
        } else {
            remoCon = new Audio();
            remoCon.turnON();
            remoCon.setVolume(30);
            remoCon.setMute(true);
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
            17. Default Method
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>디폴트 메소드?</ClassContentsTitle2>
        <ClassContentsText>
          <b>default method는 인터페이스에 있는 구현 메서드를 의미</b>
          합니다.
          <br />
          인터페이스에서는 구현부가 있는 메소드를 만들 수 없는 것이 기본적인
          특징이나 예외적으로 디폴트 메서드를 만들 수 있습니다.
          <br />
          기존의 추상 메서드와 다른 점은 아래와 같습니다.
          <br />- 메서드 앞에 default 예약어를 붙인다.
          <br />- 구현부 {}가 있어야 한다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>디폴트 메소드가 필요한 이유</ClassContentsTitle2>
        <ClassContentsText>
          인터페이스에서 디폴트 메소드를 허용한 이유는 기존 인터페이스를
          확장해서 새로운 기능을 추가하기 위함 입니다.
          <br />
          기존 인터페이스의 이름과 추상 메소드의 변경 없이 디폴트 메소드만 추가
          할 수 있기 때문에 이전에 개발된 구현 클래스를 그대로 사용할 수
          있으면서 새롭게 개발하는 클래스는 디폴트 메소드를 활용할 수 있습니다.
          <Java_04_17_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>디폴트 메소드의 사용</ClassContentsTitle2>
        <ClassContentsText>
          디폴트 메소드는 인터페이스에 선언되지만, 인터페이스에서 사용 할 수
          없습니다.
        </ClassContentsText>
        <ClassContentsTitle3>인터페이스 선언</ClassContentsTitle3>
        <Java_04_17_Code02 />
        <br />
        <ClassContentsTitle3>인터페이스 상속 (Audio)</ClassContentsTitle3>
        <Java_04_17_Code03 />
        <br />
        <ClassContentsTitle3>인터페이스 상속 (Television)</ClassContentsTitle3>
        <Java_04_17_Code04 />
        <br />
        <ClassContentsTitle3>Main</ClassContentsTitle3>
        <Java_04_17_Code05 />
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

export default Java_04_17_M;
