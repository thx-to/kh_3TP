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

const Java_04_09_M = () => {
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
    navigate("/study/java/04/09");
    window.location.reload();
  };

  const Java_04_09_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Parent {
    protected int num;
    public void display() {
        System.out.println("부모 클래스 메소드");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Child extends Parent {
    private int x = 100;
    public Child() {}
    public void out() {
        System.out.println("부모의 protected num 필드 : " + num);
        System.out.println("자식 클래스 메소드");
    }
    @Override
    public void display() {
        System.out.println("상속 받아 재정의한 메소드");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class PolyEx1 {
    public static void main(String[] args) {
        Child c = new Child();
        c.display();
        c.out();
        System.out.println();

        Parent p = new Child(); // Overriding 된 parent 멤버이므로 접근 가능
        p.display();
        //((Child) p).out(); // Parent 타입으로 Child 멤버에 접근 할 수 없음
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class TypeCastXMain {
    public static void main(String[] args) {
        Buyer buyer = new Buyer();
        TV tv = new TV();
        Computer computer = new Computer();
        Audio audio = new Audio();
        buyer.buy(tv);
        buyer.buy(audio);
        buyer.buy(computer);
        buyer.viewInfo();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 매개변수다형성엑스;

public class Product {
    int price;
    int bonusPoint;
}
class TV extends Product {
    TV() {
        this.price = 100;
        this.bonusPoint = 10;
    }
}
class Computer extends Product {
    Computer() {
        this.price = 200;
        this.bonusPoint = 20;
    }
}
class Audio extends Product {
    Audio() {
        this.price = 120;
        this.bonusPoint = 12;
    }
}
class Buyer {
    int money = 1000;
    int bonusPoint = 0;
    void buy(Product p) {
        money -= p.price;
        bonusPoint += p.bonusPoint;
    }
    void viewInfo() {
        System.out.println("잔액 : " + money);
        System.out.println("포인트 : " + bonusPoint);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Driver {
    String name;
    public Driver(String name) {
        this.name = name;
    }

    //    void drive(Vehicle v) {
    //       System.out.print(name + "의 ");
    //       v.run();
    //    }
    void drive(SportsCar s) {
        System.out.print(name + "의 ");
        s.run();
    }
    void drive(Bus b) {
        System.out.print(name + "의 ");
        b.run();
    }
    void drive(Taxi t) {
        System.out.print(name + "의 ");
        t.run();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Vehicle {
    public void run() {
        System.out.println("차량이 달립니다.");
    }
}

class Bus extends Vehicle {
    @Override
    public void run() {
        System.out.println("버스가 달립니다");
    }
}

class Taxi extends Vehicle {
    @Override
    public void run() {
        System.out.println("택시가 달립니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_09_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class DriverMain {
    public static void main(String[]args) {
        Driver driver = new Driver("우영우");
        Bus bus = new Bus();
        Taxi taxi = new Taxi();
        SportsCar sportsCar = new SportsCar();
        Scanner sc = new Scanner(System.in);
        System.out.print("운전하고 싶은 차를 선택 하세요[1]버스, [2]택시, [3]스포츠카 : ");
        int selMenu = sc.nextInt();
        switch(selMenu) {
            case 1 : driver.drive(bus); break;
            case 2 : driver.drive(taxi); break;
            case 3 : driver.drive(sportsCar); break;
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
          <TopBoxText2 onClick={() => handleRefresh()}>09. 다형성</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsTitle1>다형성이란?</ClassContentsTitle1>
        <ClassContentsText>
          객체지향개념에서 다향성이란 한 가지 인터페이스나 클래스를 여러 형태로
          사용할 수 있는 능력을 가리킵니다. 다형성을 통해 코드의 재사용성과
          유연성을 높일 수 있습니다.
          <br />
          1. <b>Compile-time Polymorphism (정적 다형성 또는 오버로딩)</b>
          <br />
          <ClassContentsTextTab>
            이는 <b>메서드 오버로딩(Method Overloading)</b>과 관련이 있습니다.
            같은 이름의 메서드를 여러 개 만들고, 매개변수의 타입, 개수, 순서
            등을 다르게 정의하여 여러 형태의 메서드를 사용할 수 있게 합니다.
            컴파일 시에 어떤 메서드가 호출되어야 할지 결정됩니다. 정적 다형성은
            메서드 시그니처(메서드 이름과 매개변수 목록)에 따라서 결정됩니다.
          </ClassContentsTextTab>
          2. <b>Runtime Polymorphism (동적 다형성 또는 오버라이딩)</b>
          <br />
          <ClassContentsTextTab>
            이는 <b>메서드 오버라이딩(Method Overriding)</b>과 관련이 있습니다.
            부모 클래스의 메서드를 하위 클래스에서 재정의하여 사용하는 것을
            말합니다. 이 경우, 상위 클래스 타입의 변수로 하위 클래스의 객체를
            참조하더라도 실제로 호출되는 메서드는 해당 하위 클래스에서 정의한
            메서드입니다. 동적 다형성은 런타임에 객체의 실제 타입에 따라서 어떤
            메서드가 호출되어야 할지 결정됩니다.
          </ClassContentsTextTab>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          부모의 클래스의 참조 변수로 자식클래스의 인스턴스 참조 예제
        </ClassContentsTitle2>
        <ClassContentsText>
          <b>Parent</b>
          <Java_04_09_Code01 />
          <br />
          <b>Child</b>
          <Java_04_09_Code02 />
          <br />
          <b>Main</b>
          <Java_04_09_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>매개변수의 다형성</ClassContentsTitle2>
        <ClassContentsText>
          자동 타입 변환은 필드의 값을 대입할 때도 발생하지만, 주로 메소드를
          호출 할 때 많이 발생 합니다.
          <br />
          메소드를 호출 할 때에는 일반적으로는 매개변수의 타입과 동일한 매개값을
          지정하지만, 상속 관계를 이용해 매개변수에 자식 타입의 객체를 사용 할
          수 있습니다.{" "}
          <b>
            매개변수의 다형성을 이용하면 필요한 시점에 필요한 객체를 메소드의
            매개 변수로 전달
          </b>
          할 수 있습니다.
        </ClassContentsText>
        <ClassContentsTitle3>예제 1</ClassContentsTitle3>
        <Java_04_09_Code04 />
        <Java_04_09_Code05 />
        <br />
        <ClassContentsTitle3>예제 2</ClassContentsTitle3>
        <ClassContentsText>
          <b>Driver</b>
          <Java_04_09_Code06 />
          <br />
          <b>Vehicle</b>
          <Java_04_09_Code07 />
          <br />
          <b>Main</b>
          <Java_04_09_Code08 />
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

export default Java_04_09_M;
