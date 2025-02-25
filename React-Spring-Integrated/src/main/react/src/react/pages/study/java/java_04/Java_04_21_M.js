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

const Java_04_21_M = () => {
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
    navigate("/study/java/04/21");
    window.location.reload();
  };

  const Java_04_21_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface AirCon {
    int MAX_TEMP = 30; // public final static 숨겨져 있음
    int MIN_TEMP = 0;
    void airConON();  // 상속 받은 클래스에서 기능을 완성해야 함
    void airConOFF();
    void setAirConTemp(int tmp);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface AutoDrive {
    void autoDrvON();  // abstract가 생략 되어 있음
    void autoDrvOFF();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Car {
    protected int speed; // 같은 패키지와 부모 자식 관계에서 접근 가능
    protected String color;
    protected String year;
    public Car() {
        this.speed = 150;
        this.color = "white";
        this.year = "1970";
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class SportCar extends Car implements AirCon, AutoDrive {
    private boolean isAirCon; // AirCon ON/OFF
    private int setTemp;
    private boolean isAutoDrv;
    private int speed;
    private String color;
    private String year;
    private boolean isTurbo;

    public SportCar(boolean isAirCon, int setTemp,
                    boolean isAutoDrv, int speed, String color,
                    String year) {
        this.isAirCon = isAirCon;
        this.setTemp = setTemp;
        this.isAutoDrv = isAutoDrv;
        this.speed = speed;
        this.color = color;
        this.year = year;
        this.isTurbo = false;
    }
    public void viewInfo() {
        String airConStr = (isAirCon) ? "ON" : "OFF";
        String autoStr = (isAutoDrv) ? "ON" : "OFF";
        String turboStr = (isTurbo) ? "ON" : "OFF";
        System.out.println("속도 : " + speed);
        System.out.println("색상 : " + color);
        System.out.println("제작연도 : " + year);
        System.out.println("에어컨 : " + airConStr);
        System.out.println("에어컨 온도 : " + setTemp);
        System.out.println("자율 주행 : " + autoStr);
        System.out.println("터보 모드 : " + turboStr);
    }

    @Override
    public void airConON() {
        System.out.println("에어컨을 켰습니다.");
    }

    @Override
    public void airConOFF() {
        System.out.println("에어컨을 껐습니다.");
    }

    @Override
    public void setAitConTemp(int temp) {
        System.out.println("에어컨 설정 온도를 " + temp + "로 변경 합니다.");
    }

    @Override
    public void autoDrvON() {
        System.out.println("자율 주행 모드를 켰습니다.");
    }

    @Override
    public void autoDrvOFF() {
        System.out.println("자율 주행 모드를 껐습니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        SportCar ferrari = new SportCar(false,18,
                false,250, "Red", "2022");
        ferrari.viewInfo();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface Buy {
    void buy();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface Sell {
    void sell();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Customer implements Buy, Sell {
    @Override
    public void buy() {
        System.out.println("구매하기");
    }

    @Override
    public void sell() {
        System.out.println("판매하기");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CustomerTest {
    public static void main(String[] args) {
        Customer customer = new Customer();
        Buy buyer = customer; // Customer Type의 customer 참조 변수를 Buy 인터페이스형에 대입하여 형 변환
        buyer.buy();          //  Buyer는 Buy 인터페이스의 메서드만 호출 가능

        Sell seller = customer;
        seller.sell();
        Customer customer2 = (Customer) seller; // 다시 역으로 형 변환
        customer2.buy();
        customer2.sell();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface Buy {
    void buy();
    default void order() {
        System.out.println("구매 주문");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public interface Sell {
    void sell();
    default void order() {
        System.out.println("판매 주문");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Customer implements Buy, Sell {

    @Override
    public void buy() {
        System.out.println("판매하기");
    }

    @Override
    public void order() {
        System.out.println("고객 판매 주문");
    }

    @Override
    public void sell() {
        System.out.println("구매하기");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_21_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CustomerTest {
    public static void main(String[] args) {
        Customer customer = new Customer();

        Buy buyer = customer;
        buyer.buy();
        buyer.order(); // 재정의된 메소드 호출

        Sell seller = customer;
        seller.sell();
        seller.order(); // 재정의된 메소드 호출

        Customer customer1 = (Customer) seller;
        customer1.buy();
        customer1.sell();
        customer1.order();
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
            21. 다중 인터페이스와 상속
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle2>
          다중 인터페이스를 사용하는 이유
        </ClassContentsTitle2>
        <ClassContentsText>
          1. <b>유연한 설계와 재사용성</b>
          <br />
          <ClassContentsTextTab>
            클래스가 다중 인터페이스를 구현하면 다양한 인터페이스의 기능을
            사용할 수 있으므로, 더 유연하고 재사용 가능한 코드를 설계할 수
            있습니다.
          </ClassContentsTextTab>
          2. <b>인터페이스의 다중 상속</b>
          <br />
          <ClassContentsTextTab>
            클래스가 여러 인터페이스를 구현함으로써, 인터페이스의 다중 상속을
            흉내낼 수 있습니다. 이는 클래스가 여러 기능을 동시에 수행하거나 여러
            종류의 동작을 지원할 수 있도록 합니다.
          </ClassContentsTextTab>
          3. <b>코드 간 결합도 감소</b>
          <br />
          <ClassContentsTextTab>
            클래스가 여러 인터페이스를 구현하는 경우, 해당 인터페이스들 간에는
            직접적인 의존성이 없으므로 클래스 간의 결합도가 낮아집니다. 이는
            유지보수성과 확장성을 향상시키는데 도움이 됩니다.
          </ClassContentsTextTab>
          4. <b>다형성과 다중 인터페이스 활용</b>
          <br />
          <ClassContentsTextTab>
            클래스가 다중 인터페이스를 구현하면, 해당 클래스의 인스턴스는 각
            인터페이스의 다형성을 활용하여 다양한 상황에서 사용될 수 있습니다.
          </ClassContentsTextTab>
          5. <b>기능 분리와 명확성</b>
          <br />
          <ClassContentsTextTab>
            각 인터페이스는 특정한 기능이나 역할을 나타내므로, 클래스가 다중
            인터페이스를 구현하면 기능들을 더욱 분리하여 코드를 더 명확하게
            구조화할 수 있습니다.
          </ClassContentsTextTab>
          6. <b>좋은 설계의 향상</b>
          <br />
          <ClassContentsTextTab>
            인터페이스를 사용하여 클래스의 기능을 구성하는 것은 좋은 객체 지향
            설계의 원칙을 따르는데 도움이 됩니다. 각 인터페이스는 단일 책임
            원칙을 따르며, 이는 코드를 더욱 모듈화하고 이해하기 쉽게
            만들어줍니다.
          </ClassContentsTextTab>
          <br />
          요약하면, 다중 인터페이스를 사용하는 것은 유연한 설계, 재사용성,
          다형성, 결합도 감소 등 다양한 이점을 제공하여 좋은 객체 지향
          프로그래밍과 좋은 소프트웨어 설계를 지원합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>인터페이스와 클래스 설계 예시</ClassContentsTitle2>
        <ClassContentsText>
          - 에어컨 인터페이스 ( ON/OFF, 온도 설정)
          <br />- 자율운전 인터페이스
          <br />- protected 접근 제한자 사용
          <br />
          <br />
          <b>Aircon.java</b>
          <Java_04_21_Code01 />
          <br />
          <br />
          <b>AutoDrive.java</b>
          <Java_04_21_Code02 />
          <br />
          <br />
          <b>Car.java</b>
          <Java_04_21_Code03 />
          <br />
          <br />
          <b>SportCar.java</b>
          <Java_04_21_Code04 />
          <br />
          <br />
          <b>Main.java</b>
          <Java_04_21_Code05 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          인터페이스 활용(다중 인터페이스 상속)
        </ClassContentsTitle2>
        <ClassContentsText>
          한 클래스가 여러 클래스로 부터 상속을 받으면 여러 가지 문제가 발생 할
          수 있습니다.
          <br />
          자바는 이런 문제를 해결하기 위해 한 클래스가 여러 인터페이스를 구현 할
          수 있습니다.
          <Java_04_21_Code06 />
          <Java_04_21_Code07 />
          <Java_04_21_Code08 />
          <Java_04_21_Code09 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          두 인터페이스의 디폴트 메소드가 중복되는 경우
        </ClassContentsTitle2>
        <ClassContentsText>
          정적 메소드는 인스턴스 생성과 상관없이 사용 할 수 있습니다.
          <br />
          Customer 클래스가 Buy, Sell 두 인터페이스를 구현하고 Buy 인터페이스와
          Sell 인터페이스에 똑같은 디폴트 order() 메소드를 가지는 경우 문제가
          됩니다.
          <br />이 경우 상속받는 Customer 클래스에서 <b>재정의해서 사용</b>해야
          합니다. (명시적인 메소드 재정의)
          <br />- 컴파일 타임에서는 문제가 발생하지 않지만 런타임에서 문제를
          야기 할 수 있습니다.
          <Java_04_21_Code10 />
          <Java_04_21_Code11 />
          <Java_04_21_Code12 />
          <Java_04_21_Code13 />
        </ClassContentsText>
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

export default Java_04_21_M;
