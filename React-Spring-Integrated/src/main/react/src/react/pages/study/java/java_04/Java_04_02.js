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
  ClassTableBox,
} from "../../../../styles/study/Language_00_00";
import { ArrowContainer } from "../../../../styles/study/Language_ArrowNavigation";

import Java_Title from "../java_components/Java_Title";
import Java_ArrowNavigation from "../java_components/Java_ArrowNavigation";
import Java_ClassList_Filtered from "../java_components/Java_ClassList_Filtered";
import ScrollToTopButton from "../../../ScrollToTopButton";
import Java_04_02_M from "./Java_04_02_M";

const Java_04_02 = () => {
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
    navigate("/study/java/04/02");
    window.location.reload();
  };

  const Java_04_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample {
    int sum(int a, int b) {  // a, b 는 매개변수(인자), parameter
        return a+b;
    }

    public static void main(String[] args) {
        Sample sample = new Sample();
        int c = sample.sum(3, 4);  // 3, 4는 인수, argument

        System.out.println(c);  // 7 출력
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
void say() {
    System.out.println("Hi");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
    int result = sum(1,2,3,4,5);
    System.out.println(result);
}

static int sum(int ... values) {
    int sum = 0;
    for(int i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Rec {
    public static void main(String[] args) {
        int rec = recursive_func(10);
        System.out.println(rec);
    }
    public static int recursive_func(int n) {
        if(n == 1) return 1;
        return n + recursive_func(n - 1);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class Car {
	static int productNumber;
	String modelName;
	void method() {
		int speed;
		int power;
	}
}	
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class Field {
    static int classVar = 10; // 클래스 변수 선언
    int instanceVar = 20;     // 인스턴스 변수 선언
}

public class Main {
    public static void main(String[] args) {
        int var = 30;                   // 지역 변수 선언
        System.out.println(var + "\n"); // 지역 변수 참조
        Field myField1 = new Field();   // 인스턴스 생성
        Field myField2 = new Field();   // 인스턴스 생성
        System.out.println(Field.classVar); // 클래스 변수 참조

        System.out.println(Field.classVar); // 클래스 변수 참조

        System.out.println(myField2.instanceVar + "\n");
        myField1.instanceVar = 200;               // 인스턴스 변수의 값을 변경

        System.out.println(myField1.instanceVar); // 인스턴스 변수 참조
        System.out.println(myField2.instanceVar);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Car(String modelName) {}
Car(String modelName, int modelYear) {}
Car(String modelName, int modelYear, String color) {}
Car(String modelName, int modelYear, String color, int maxSpeeds) {}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.carInfo();
        Car car1 = new Car("싼타페", "레드");
        car1.carInfo();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Car {
    String company = "현대자동차";
    String model;
    String color;
    int speed;
    int horsePower;

    Car() {}
    Car(String model) {
        this.model = model;
    }
    Car(String model, String color) {
        this.model = model;
        this.color = color;
        this.speed = 200;
        this.horsePower = 200;
    }
    Car(String model, String color, int speed, int hP) {
        this.model = model;
        this.color = color;
        this.speed = speed;
        this.horsePower = hP;
    }
    public void carInfo() {
        System.out.println(company);
        System.out.println(model);
        System.out.println(color);
        System.out.println(speed);
        System.out.println(horsePower);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package TV;

public class Main {
    public static void main(String[]args) {
        TV tv = new TV();
        tv.setON(true);
        tv.setChannel(200);
        tv.setVolume(50);
        tv.getTV();
    }
}

class TV {
    private boolean isON;
    private int channel;
    private int volume;
    TV() {
        isON = false;
        channel = 10;
        volume = 10;
        System.out.println("전원 : " + false + ", 채널 : " + channel + ", 볼륨 : " + volume);
    }
    public void setON(boolean onOFF) {
        isON = onOFF;
        String onOffStr = (isON) ? "ON" : "OFF";
        System.out.println("TV : " + onOffStr);
    }
    public void setChannel(int cnl) {
        if (cnl >= 1 && cnl <= 999) {
            channel = cnl;
            System.out.println("채널을 "+ channel + "변경 하였습니다.");
        }
    }
    public void setVolume(int vol) {
        if (vol >= 0 && vol <= 100) {
            volume = vol;
            System.out.println("볼륨을 " + volume + "변경 하였습니다.");
        }
    }
    public void getTV() {
        String onOffStr = (isON) ? "ON" : "OFF";
        System.out.println("====== TV State ======");
        System.out.printf("전원 : %s\n", onOffStr);
        System.out.printf("볼륨 : %d\n", volume);
        System.out.printf("채널 : %d\n", channel);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_02_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 생성자;

public class Main {
    public static void main(String[]args) {
        TV tv = new TV();
        tv.setON(true);
        tv.setChannel(200);
        tv.setVolume(50);
        tv.getTV();
        TV tv1 = new TV(true, 100, 100);
        tv1.getTV();
    }
}

class TV {
    private boolean isON;
    private int channel;
    private int volume;
    TV() {
        isON = false;
        channel = 10;
        volume = 10;
        System.out.println("전원 : " + false + ", 채널 : " + channel + ", 볼륨 : " + volume);
    }
    TV(boolean isOn, int channel, int volume) {
        this.isON = isOn;
        this.channel = channel;
        this.volume = volume;
    }
    public void setON(boolean onOFF) {
        isON = onOFF;
        String onOffStr = (isON) ? "ON" : "OFF";
        System.out.println("TV : " + onOffStr);
    }
    public void setChannel(int cnl) {
        if (cnl >= 1 && cnl <= 999) {
            channel = cnl;
            System.out.println("채널을 "+ channel + "변경 하였습니다.");
        }
    }
    public void setVolume(int vol) {
        if (vol >= 0 && vol <= 100) {
            volume = vol;
            System.out.println("볼륨을 " + volume + "변경 하였습니다.");
        }
    }
    public void getTV() {
        String onOffStr = (isON) ? "ON" : "OFF";
        System.out.println("====== TV State ======");
        System.out.printf("전원 : %s\n", onOffStr);
        System.out.printf("볼륨 : %d\n", volume);
        System.out.printf("채널 : %d\n", channel);
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
        <Java_04_02_M />
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
                02. 메소드와 필드 / 생성자
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
                  <ClassHeaderTitle>메소드와 필드 / 생성자</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    자바에서 클래스는{" "}
                    <b>멤버로 속성을 표현하는 필드와 기능을 표현하는 메소드</b>
                    를 가집니다.
                    <br />
                    메소드와 필드는 객체지향 프로그래밍의 핵심 요소로서 클래스
                    내에서 정의되며, 객체의 동작과 상태를 나타내는 역할을
                    합니다.
                    <br />
                    메소드는 함수와 거의 동일 합니다. (자바에서는 함수가
                    단독으로 존재할 수 없는 클래스 기반의 언어라는 차이점이
                    있습니다.)
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>메소드</ClassContentsTitle1>
                  <ClassContentsText>
                    메소드는 클래스 내부에 선언된 함수로{" "}
                    <b>객체의 동작이나 기능을 정의</b>합니다.
                    <br />
                    메소드는 특정 작을 수행하거나 계산을 수행하며, 필요한 경우
                    메소드에 매개변수를 전달 할 수 있습니다.
                    <br />
                    (기능적으로 <b>함수와 동일</b> 합니다.)
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>함수란?</ClassContentsTitle2>
                  <ClassContentsText>
                    함수란 <b>‘하나의 기능을 수행하는 일련의 코드’</b>를
                    말합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_04_02_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>메소드의 사용 목적</ClassContentsTitle2>
                  <ClassContentsText>
                    메소드를 작성하여 사용하는 이유는 중복되는 코드의 반복적인
                    프로그래밍을 피할 수 있습니다.
                    <br />
                    모듈화로 인해 코드의 가독성이 좋아 집니다.
                    <br />
                    프로그램의 문제점 발견이나 기능을 추가하거나 변경하기
                    쉽습니다.
                    <br />
                    메소드를 작성할 때는 가급적 하나의 메소드가 하나의 기능만을
                    수행하도록 작성하는 것이 좋습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>메소드의 정의</ClassContentsTitle2>
                  <ClassContentsText>
                    일반 함수의 정의와 거의 동일 합니다.
                    <br />
                    <ClassContentsCode>
                      {`접근제한자 반환타입 메소드이름(매개변수목록) { 구현부 / return }`}
                    </ClassContentsCode>
                    - <b>접근제한자</b> : 해당 메소드에 접근 할 수 있는 범위를
                    명시합니다.
                    <br />- <b>반환 타입</b> : 메소드가 작업을 마치고 반환하는
                    데이터의 타입을 명시합니다.
                    <br />- <b>메소드 이름</b> : 메소드를 호출하기 위한
                    이름입니다.
                    <br />- <b>매개변수 목록</b>(parameters) : 메소드 호출 시
                    전달되는 인수의 값을 저장할 변수들을 명시합니다.
                    <br />- 구현부 : 메소드의 고유 기능을 수행하는 명령문의 집합
                    입니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>메소드의 선언</ClassContentsTitle2>
                  <ClassContentsTitle3>메소드 이름</ClassContentsTitle3>
                  <ClassContentsText>
                    메소드의 이름은 자바 식별자 규칙에 맞게 작성하면 되는데
                    아래의 규칙을 만족해야 합니다.
                    <br />
                    - 숫자로 시작하면 안됨
                    <br />
                    - 특수문자는 _와 $만 사용 가능
                    <br />
                    - 두개의 단어로 이루어진 이름의 경우 두번째 단어의 첫글자는
                    대문자(camel 표기법)
                    <br />
                    - 소문자로 시작
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>리턴 타입</ClassContentsTitle3>
                  <ClassContentsText>
                    리턴값이란 메소드를 실행한 후 결과값을 말합니다.
                    <br />
                    <b>
                      메소드는 리턴값이 있을 수도 있고 없을 수도 있으나 리턴
                      타입은 선언부에 명시
                    </b>
                    되어야 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    매개변수(Parameter)와 인수(Argument)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 매개변수(인자)는 메소드의 선언문에서 작은 괄호 내의 변수를
                    의미
                    <br />- 인수는 메소드의 호출부에서 전달하는 값을 의미
                    <Java_04_02_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    입력값도 리턴값도 없는 메소드
                  </ClassContentsTitle3>
                  <Java_04_02_Code02 />
                  <br />
                  <ClassContentsTitle3>
                    매개 변수의 수를 모를 경우
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    메소드의 배개 변수는 개수가 이미 정해져 있는것이
                    일반적이지만, 경우에 따라서는 메소드를 선언할 때 변수의
                    개수를 알 수 없는 경우가 있습니다. 이럴 경우 … 을 사용하면
                    됩니다.
                    <Java_04_02_Code03 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>메소드의 호출</ClassContentsTitle2>
                  <ClassContentsText>
                    메소드는 클래스의 내부 또는 외부에서 호출되어 사용 됩니다.
                    <b>호출되지 않으면 동작하지 않습니다.</b>
                    <br />
                    <b>
                      클래스 내부에서 다른 메소드 호출 시는 단순히 메소드
                      이름으로 호출하면 되고, 클래스 외부에서 호출 할 때는
                      객체를 생성한 뒤 참조 변수를 이용해서 메소드를 호출
                    </b>
                    해야 합니다. (뒤에 나오는 영화표 예매 예제를 통해서 확인
                    가능)
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    재귀 호출(recursive call)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    재귀호출이란{" "}
                    <b>
                      메소드 내부에서 해당 메소드가 또 다시 호출되는 것을 의미
                    </b>
                    합니다.
                    <br />
                    재귀호출은 자기가 자신을 계속해서 호출하므로, 끝없이 반복
                    됩니다. (반드시 탈출문 필요)
                    <br />
                    재귀호출은 잘못 사용하는 경우 무한 루프에 빠지는 등 문제가
                    발생 할 가능성이 높고 이해하기 어려운 문법이지만 알고리즘과
                    자료구조에서 매우 중요하게 사용되고 있어 중요한 개념중에
                    하나 입니다.
                    <br />
                    또한, 재귀 호출을 사용하면 복잡한 문제도 매우 간단하게
                    논리적으로 접근하여 표현 할 수 있습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    n까지의 합을 더하는 재귀호출 함수
                  </ClassContentsTitle3>
                  <Java_04_02_Code04 />
                  <br />
                  <ClassContentsTitle1>필드</ClassContentsTitle1>
                  <ClassContentsText>
                    <b>
                      자바프로그래밍에서 ‘필드’는 클래스 내부에 선언된 변수를
                      의미
                    </b>
                    합니다. 필드는 클래스의 객체들이 공유하는 데이터를 저장하며,
                    객체의 상태를 나타내는 역할을 합니다. 필드는 클래스의 중요한
                    구성 요소 중 하나로, 클래스의 특징과 행동을 정의하는 데
                    사용됩니다.
                    <br />
                    <br />
                    1. <b>데이터 저장</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 <b>데이터를 저장</b>하는 역할을 합니다. 클래스가
                      특정 속성을 가지거나 특정 값을 유지해야 할 때 필드를
                      사용하여 그 정보를 저장합니다. 예를 들어, 자동차 클래스의
                      필드로는 브랜드, 모델, 연식 등이 있을 수 있습니다.
                    </ClassContentsTextTab>
                    2. <b>인스턴스 변수</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 클래스의 객체(인스턴스)마다 각각의 복사본을 가지게
                      됩니다. 따라서 각 객체마다 다른 값을 가질 수 있습니다.
                      이를 통해 객체마다 고유한 상태를 유지할 수 있습니다.
                    </ClassContentsTextTab>
                    3. <b>접근 제어자</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 접근 제어자(
                      <ClassContentsCode>private</ClassContentsCode>,{" "}
                      <ClassContentsCode>protected</ClassContentsCode>,{" "}
                      <ClassContentsCode>public</ClassContentsCode> 등)를
                      사용하여 접근 범위를 제한할 수 있습니다. 이를 통해 필드에
                      직접 접근하는 것을 제어하거나 제한할 수 있습니다.
                    </ClassContentsTextTab>
                    4. <b>데이터 타입</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 데이터 타입을 가집니다. 이는 필드가 어떤 종류의
                      데이터를 저장하는지를 나타냅니다. 정수, 실수, 문자열 등
                      다양한 데이터 타입을 필드로 사용할 수 있습니다.
                    </ClassContentsTextTab>
                    5. <b>초기값 설정</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 선언할 때 초기값을 설정할 수 있습니다. 이 초기값은
                      필드가 객체 생성 시에 할당됩니다. 만약 초기값이 설정되지
                      않으면 기본값(0, false, null 등)이 할당됩니다.
                    </ClassContentsTextTab>
                    6. <b>클래스 변수</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 <ClassContentsCode>static</ClassContentsCode>{" "}
                      키워드로 선언하여 클래스 변수로 만들 수도 있습니다. 클래스
                      변수는 클래스의 모든 객체가 공유하는 하나의 데이터를
                      나타냅니다. 예를 들어, 모든 객체가 공통적으로 사용하는
                      상수를 클래스 변수로 선언할 수 있습니다.
                    </ClassContentsTextTab>
                    7. <b>상태 정보 저장</b>
                    <br />
                    <ClassContentsTextTab>
                      필드는 객체의 상태 정보를 저장하는 데 사용됩니다. 객체의
                      특성이나 속성을 나타내며, 객체의 상태가 변화할 때 필드의
                      값도 함께 변화할 수 있습니다.
                    </ClassContentsTextTab>
                    8. <b>메서드와 함께 사용</b>
                    <br />
                    <ClassContentsTextTab>
                      필드의 값은 클래스 내부의 메서드에서 사용되어 객체의
                      동작에 영향을 줄 수 있습니다. 필드의 값을 변경하거나,
                      필드의 값을 기반으로 계산을 수행하는 등의 작업이
                      가능합니다.
                    </ClassContentsTextTab>
                    9. <b>Getter와 Setter 메서드</b>
                    <br />
                    <ClassContentsTextTab>
                      필드의 값을 가져오기 위한 Getter 메서드와 값을 설정하기
                      위한 Setter 메서드를 제공하여 필드에 접근하고 수정할 수
                      있습니다.
                    </ClassContentsTextTab>
                    <br />
                    <Java_04_02_Code05 />
                    <br />
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>변수</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>클래스가 메모리에 올라갈 때</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>소멸 시기</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>저장 메모리</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>사용 방법</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>클래스 변수</ClassTableTd>
                          <ClassTableTd>
                            클래스가 메모리에 올라갈 때
                          </ClassTableTd>
                          <ClassTableTd>프로그램 종료 시</ClassTableTd>
                          <ClassTableTd>메소드 영역</ClassTableTd>
                          <ClassTableTd>클래스 이름, 변수 이름</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>인스턴스 변수</ClassTableTd>
                          <ClassTableTd>인스턴스가 생성될 때</ClassTableTd>
                          <ClassTableTd>인스턴스 소멸 시</ClassTableTd>
                          <ClassTableTd>힙 영역</ClassTableTd>
                          <ClassTableTd>인스턴스 이름, 변수 이름</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>지역 변수</ClassTableTd>
                          <ClassTableTd>블록 내에서 변수 선언시</ClassTableTd>
                          <ClassTableTd>블록을 벗어날 때</ClassTableTd>
                          <ClassTableTd>스택 영역</ClassTableTd>
                          <ClassTableTd>변수 이름</ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <br />
                    클래스 변수는 인스턴스를 생성하지 않고도 바로 사용 할 수
                    있습니다.
                    <br />
                    <b>
                      클래스 변수와 인스턴스 변수는 초기화 하지 않아도 변수의
                      타입에 맞게 자동으로 초기화
                    </b>
                    됩니다.
                    <br />
                    <Java_04_02_Code06 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>생성자(constructor)</ClassContentsTitle1>
                  <ClassContentsText>
                    <b>
                      자바에서는 객체의 생성과 동시에 인스턴스 변수를 원하는
                      값으로 초기화할 수 있는 생성자라는 메소드를 제공
                    </b>
                    합니다.
                    <br />
                    <b>
                      new 연산자로 클래스로 부터 객체를 생성 할 때 자동으로 호출
                    </b>
                    됩니다.
                    <br />- 생성자와 클래스의 이름은 같아야 합니다.
                    <br />- 생성자는 반환값이 없지만, void로 반환타입을 선언하지
                    않습니다.
                    <br />- 하나의 클래스가 여러 개의 생성자를 가질 수 있습니다.
                    (생성자 오버로딩)
                  </ClassContentsText>
                  <ClassContentsTitle3>생성자 예제</ClassContentsTitle3>
                  <Java_04_02_Code07 />
                  <Java_04_02_Code08 />
                  <Java_04_02_Code09 />
                  <br />
                  <ClassContentsTitle3>생성자 오버로딩</ClassContentsTitle3>
                  <ClassContentsText>
                    외부에서 제공되는 다양한 데이터들을 이용해서 객체를 초기화
                    하려면 생성자도 다양한게 호출 될 필요가 있습니다.
                    <br />
                    매개변수의 타입과 개수에 의해서 오버로딩이 결정 됩니다.
                    <Java_04_02_Code10 />
                    <Java_04_02_Code11 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>필드 초기화</ClassContentsTitle3>
                  <ClassContentsText>
                    <b>
                      클래스로 부터 객체가 생성될 때 필드는 기본 초기값으로 자동
                      설정
                    </b>
                    됩니다.
                    <br />
                    객체의 생성 시점에 외부에서 제공되는 다양한 값들로 초기화
                    되어야 한다면 <b>생성자에서 초기화</b>해야 합니다.
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

export default Java_04_02;
