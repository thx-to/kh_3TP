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
import Java_04_07_M from "./Java_04_07_M";

const Java_04_07 = () => {
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
    navigate("/study/java/04/07");
    window.location.reload();
  };

  const Java_04_07_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class Animal {
    String name;

    void setName(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
}

public class Sample {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.setName("poppy");
        System.out.println(dog.name);  // poppy 출력
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main extends SameClass {
    public static void main(String[] args) {
        HouseDog houseDog = new HouseDog();
        houseDog.setName("happy");
        houseDog.sleep();  // happy zzz 출력
    }
}
class Animal {
    String name;

    void setName(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    void sleep() {
        System.out.println(this.name + " zzz");
    }
}

class HouseDog extends Dog {
    void sleep() {
        System.out.println(this.name + " zzz in house");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main extends SameClass {
    public static void main(String[] args) {
        HouseDog houseDog = new HouseDog();
        houseDog.setName("happy");
        houseDog.sleep();  // happy zzz 출력
        houseDog.sleep(3);  // happy zzz 출력
    }
}
class Animal {
    String name;

    void setName(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    void sleep() {
        System.out.println(this.name + " zzz");
    }
}

class HouseDog extends Dog {
    void sleep() {
        System.out.println(this.name + " zzz in house");
    }
    void sleep(int hour) {
        System.out.println(this.name + " zzz in house for " + hour + " hours");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
        SportCar sportCar = new SportCar("Ferrari");
        ElectricCar elecCar = new ElectricCar("EV6");
        sportCar.setTurbo(true);
        sportCar.infoCar();
        elecCar.infoCar();
        sportCar.accelerator();
        sportCar.breakPanel();
    }

public class Car {
    int speed; // 속도
    String color;
    String name;
    final void accelerator() {
        System.out.println("차의 속도를 증가 시킵니다.");
    }
    final void breakPanel() {
        System.out.println("차의 속도를 감소 시킵니다.");
    }
}
class SportCar extends Car {
    boolean isTurbo;
    SportCar(String name) {
        isTurbo = false;
        speed = 280;
        this.name = name;
        this.color = "Red";
    }

    int getSpeed() {
        if (isTurbo) return speed *= 1.2;
        return speed;
    }
    public boolean isTurbo() {
        return isTurbo;
    }
    public void setTurbo(boolean turbo) {
        isTurbo = turbo;
    }
    void infoCar() {

        System.out.println("이름 : " + name);
        System.out.println("속도 : " + getSpeed());
        System.out.println("색상 : " + color);
        System.out.println("터보모드 : " + isTurbo);
    }
}
class ElectricCar extends Car {
    boolean isAutoDrv;
    ElectricCar(String name) {
        isAutoDrv = false;
        speed = 200;
        this.name = name;
        color = "White";
    }
    public boolean isAutoDrv() {
        return isAutoDrv;
    }
    public void setAutoDrv(boolean autoDrv) {
        isAutoDrv = autoDrv;
    }
    void infoCar() {
        System.out.println("이름 : " + name);
        System.out.println("속도 : " + speed);
        System.out.println("색상 : " + color);
        System.out.println("자율주행 : " + isAutoDrv);

    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Common {
    final static String[] screenType = {"", "11인치", "12.9인치"};
    final static String[] colorType = {"", "스페이스그레이", "실버"};
    final static String[] memType = {"", "128BG", "256GB", "512GB", "1TB"};
    final static String[] netType = {"", "Wi-Fi", "Wi-Fi+Cellular"};
}

public class Constants {
    public static final int MAX_VALUE = 100; // 정수 상수
    public static final double PI = 3.14159; // 실수 상수
    public static final String GREETING = "Hello, World!"; // 문자열 상수
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class A {
    public void msg() {
        System.out.println("A message");
    }
}

class B {
    public void msg() {
        System.out.println("B message");
    }
}

class C extends A, B {
    public void static main(String[] args) {
        C test = new C();
        test.msg();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Worker work = new Worker();
    work.viewWorker();
    Student student = new Student();
    student.viewStudent();
    HouseWife houseWife = new HouseWife();
    houseWife.viewHouseWife();
}

public class Person {
    String eat = "밥을 먹습니다";
    String getEat() {
        return eat;
    }
}

class Student extends Person {
    String study = "공부 합니다.";
    String getEat() {
        return "학생이 " + eat;
    }

    void viewStudent() {
        System.out.println(study);
        System.out.println(getEat());
    }
}

class Worker extends Person {
    String work = "일을 합니다.";
    String getEat() {
        return "직장인이 " + eat;
    }

    void viewWorker() {
        System.out.println(work);
        System.out.println(getEat());
    }
}

class HouseWife extends Person {
    String homeWork = "집안일을 합니다.";
    String getEat() {
        return "주부가 " + eat;
    }

    void viewHouseWife() {
        System.out.println(homeWork);
        System.out.println(getEat());
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class PersonInheritance {
    public static void main(String[] args) {
        Worker worker = new Worker();
        worker.setWork(8);
        worker.setAge(30);
        worker.setSleep(8);
        System.out.println("직장인이 " + worker.getWork() + "시간 동안 일 합니다.");
        System.out.println("직장인의 나이는 " + worker.getAge() + "입니다.");
        System.out.println("직장인은 " + worker.getSleep() + "시간 동안 잠을 잡니다.");

        Student student = new Student();
        student.setStudy(1);
        student.setAge(18);
        worker.setSleep(6);
        System.out.println("학생이 " + student.getStudy() + " 공부 합니다.");
        System.out.println("학생의 나이는 " + student.getAge() + "입니다.");
        System.out.println("학생은 " + worker.getSleep() + "시간 동안 잠을 잡니다.");
    }
}

package Person상속;

public class Person {
    int age;
    int sleep;
    void setAge(int age) {
        this.age = age;
    }
    int getAge() {
        return age;
    }
    void setSleep(int sleep) {
        this.sleep = sleep;
    }
    int getSleep() {
        return sleep;
    }
}
class Worker extends Person {
    int work;
    void setWork(int work) {
        this.work = work;
    }
    int getWork() {
        return work;
    }
}
class Student extends Person {
    int study;
    void setStudy(int study) {
        this.study = study;
    }
    String getStudy() {
        String[] studyStr = {"", "\"열심히\"", "\"적당히\"", "\"놀면서\""};
        return studyStr[study];
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_07_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        Parent parent = new Parent("부모");
        Child child = new Child("자식");

        System.out.println(parent instanceof Parent);
        System.out.println(child instanceof Parent);
        System.out.println(parent instanceof Child);
        System.out.println(child instanceof Child);
    }
}
class Parent {
    String name;
    Parent(String name) {
        this.name = name;
    }
}

class Child extends Parent {
    String name;
    Child(String name) {
        super("부모");
        this.name = name;
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
        <Java_04_07_M />
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
              <TopBoxText onClick={() => handleRefresh()}>07. 상속</TopBoxText>
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
                  <ClassHeaderTitle>상속</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>상속이란?</ClassContentsTitle2>
                  <ClassContentsText>
                    -{" "}
                    <b>
                      상속(Inheritance)은 자식 클래스가 부모 클래스의 기능을
                      물려받아 사용할 수 있게 하는 것
                    </b>
                    입니다.
                    <br />- 상속을 통해 코드 재사용성을 높이고, 새로운 클래스의
                    구현을 쉽게 할 수 있습니다.
                    <br />- 상속을 구현하려면{" "}
                    <ClassContentsCode>extends</ClassContentsCode> 키워드를
                    사용합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>상속의 주요 특징</ClassContentsTitle3>
                  <ClassContentsText>
                    - <b>재사용성</b> : 기존 클래스를 재사용하여 새로운 클래스를
                    작성할 수 있습니다.
                    <br />- <b>확장성</b> : 기존 코드를 수정하지 않고 새로운
                    기능을 추가하거나 기존 기능을 확장할 수 있습니다.
                    <br />- <b>다형성</b> : 상속을 통해 메소드
                    오버라이딩(Overriding)을 구현하여 다형성을 실현할 수
                    있습니다. 오버라이딩은 자식 클래스에서 부모 클래스의
                    메소드를 재정의하는 것을 말합니다.
                    <br />
                  </ClassContentsText>
                  <ClassContentsTitle3>상속의 장점</ClassContentsTitle3>
                  <ClassContentsText>
                    - 기존에 작성된 클래스를 재활용할 수 있습니다.
                    <br />- 중복된 코드를 작성하지 않아도 됩니다.
                    <br />- 클래스 간의 계층적 관계를 구성하여 <b>다형성</b>을
                    쉽게 구현할 수 있습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    부모 클래스와 자식 클래스의 관계
                  </ClassContentsTitle3>
                  <ClassContentsImage
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundImage: `url(${"/images/study/java/java_04_07_01.png"})`,
                    }}
                  />
                  <br />
                  <ClassContentsTitle2>자바의 상속 방식</ClassContentsTitle2>
                  <ClassContentsText>
                    자바는 <b>다단계 상속</b>과 <b>계층적 상속</b>을 지원합니다.
                    다만 <b>다중 상속</b>은 지원하지 않습니다. 이는 다중
                    상속으로 인한 모호성 문제를 피하기 위함입니다. 대신
                    <b>인터페이스</b>를 통해 다중 상속과 유사한 기능을
                    제공합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_04_07_02.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>상속 기본 예시</ClassContentsTitle3>
                  <ClassContentsText>
                    클래스 상속을 위해{" "}
                    <ClassContentsCode>extends</ClassContentsCode> 키워드를
                    사용합니다. 아래의 예시에서는{" "}
                    <ClassContentsCode>Dog</ClassContentsCode> 클래스가{" "}
                    <ClassContentsCode>Animal</ClassContentsCode>
                    클래스를 상속받아{" "}
                    <ClassContentsCode>Animal</ClassContentsCode> 클래스의
                    필드와 메소드를 그대로 사용합니다.
                    <Java_04_07_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    메소드 오버라이딩1(Method overriding)
                  </ClassContentsTitle3>
                  <Java_04_07_Code02 />
                  <ClassContentsTitle3>
                    메소드 오버라이딩이후 오버로딩
                  </ClassContentsTitle3>
                  <Java_04_07_Code03 />
                  <br />
                  <ClassContentsTitle2>
                    final 클래스와 final 매소드
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    final 키워드는 클래스, 필드, 매소드 선언 시에 사용 할 수
                    있다. final 키워드는 해당 선언이 최종 상태이고 수정 할 수
                    없음을 나타낸다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    상속 할 수 없는 final 클래스
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    상속 할 수 없는 대표적인 클래스는 String클래스 이다. (보안
                    문제)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    오버라이딩 할 수 없는 final 메소드
                  </ClassContentsTitle3>
                  <Java_04_07_Code04 />
                  <br />
                  <ClassContentsTitle2>static final</ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsCode>static final</ClassContentsCode>은
                    자바에서 상수를 정의하는 데 사용되는 키워드입니다.{" "}
                    <ClassContentsCode>static final</ClassContentsCode>을
                    사용하여 정의된 변수는 클래스 수준에서 한 번 초기화되고
                    이후에 값이 변경되지 않는 상수가 됩니다. 이렇게 정의된
                    상수는 클래스 내부에서 사용되며, 객체의 생성 여부와 관계없이
                    항상 동일한 값을 갖습니다. 아래는{" "}
                    <ClassContentsCode>static final</ClassContentsCode>을 사용한
                    예시입니다.
                    <Java_04_07_Code05 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>다중 상속</ClassContentsTitle2>
                  <ClassContentsText>
                    자바는 다중 상속을 지원하지 않는 프로그래밍 언어입니다.
                    이러한 선택은 몇 가지 이유로 인해 이루어졌습니다.
                    <br />
                    1. <b>다이아몬드 문제(Diamond Problem)</b>
                    <br />
                    <ClassContentsTextTab>
                      다중 상속이 허용되는 언어에서는 같은 메서드나 속성을 둘
                      이상의 부모 클래스로부터 상속받을 수 있습니다. 이 경우에
                      상속 계층이 다이아몬드 형태로 형성될 수 있고, 이로 인해
                      충돌이 발생하는 다이아몬드 문제가 발생할 수 있습니다. 즉,
                      동일한 메서드나 속성을 어떤 부모 클래스의 것으로 사용해야
                      할지 결정하기 어려워집니다.
                    </ClassContentsTextTab>
                    2. <b>복잡성 증가</b>
                    <br />
                    <ClassContentsTextTab>
                      다중 상속을 지원하는 언어에서는 클래스 계층 구조가
                      복잡해질 수 있습니다. 코드를 이해하고 유지보수하기
                      어려워질 수 있습니다. 또한 상속 체인의 변경이 한 부분에서
                      다른 부분으로 예상치 못한 영향을 미칠 수 있습니다.
                    </ClassContentsTextTab>
                    3. <b>클래스 간 명확한 관계 부재</b>
                    <br />
                    <ClassContentsTextTab>
                      다중 상속이 허용되면 클래스 간의 명확한 관계를 파악하기
                      어려워질 수 있습니다. 어떤 클래스의 메서드나 속성이 어떤
                      부모 클래스에서 상속되었는지 추적하기가 어려울 수
                      있습니다.
                    </ClassContentsTextTab>
                    4. <b>자바의 설계 철학</b>
                    <br />
                    <ClassContentsTextTab>
                      자바는 단순하고 명확한 객체 지향 프로그래밍을 지향하는
                      언어입니다. 다중 상속을 허용함으로써 발생하는 복잡성과
                      충돌을 피하기 위해 클래스 단위의 단순한 상속 구조를
                      채택하였습니다.
                    </ClassContentsTextTab>
                    <br />
                    자바는 이러한 이유로 인해 다중 상속을 지원하지 않습니다. 그
                    대신 인터페이스를 통한 다중 상속과 유사한 기능을 제공하여
                    클래스 간의 관계와 코드의 구조를 보다 명확하게 유지할 수
                    있도록 도와줍니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    다이아몬드 상속 문제 (자바에서는 실행 안되는 코드)
                  </ClassContentsTitle3>
                  <Java_04_07_Code06 />
                  <br />
                  <ClassContentsTitle2>연습문제 (계층상속)</ClassContentsTitle2>
                  <ClassContentsText>
                    - 인간 으로 부터 상속 받아 직장인, 학생 클래스 만들기
                    <br />- 인간은 밥을 먹는다, 잠을 잔다 기본 특성을 가짐
                    <br />- 직장인은 일한다라는 특성을 추가로 가짐
                    <br />- 학생은 공부한다하는 특성을 추가로 가짐
                    <Java_04_07_Code07 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>연습문제(2)</ClassContentsTitle2>
                  <ClassContentsText>
                    - 인간 (Person) 클래스 만들기
                    <br />
                    <ClassContentsTextTab>
                      · 정수 타입으로 age : 게터와 세터
                      <br />· 정수 타입으로 sleep : 게터와 세터
                    </ClassContentsTextTab>
                    - 상속 받아 직장인 만들기
                    <br />
                    <ClassContentsTextTab>
                      · 정수 타입으로 work : 게터와 세터
                    </ClassContentsTextTab>
                    - 속 받아 학생 만들기
                    <br />
                    <ClassContentsTextTab>
                      · 정수 타입으로 study (열심히/적당히/놀면서)
                    </ClassContentsTextTab>
                    <Java_04_07_Code08 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    객체 타입 확인(instanceof)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassContentsCode>
                      boolean result = 좌향(객체) instanceof 우향(타입)
                    </ClassContentsCode>
                    <br />
                    <ClassContentsCode>instanceof</ClassContentsCode> 연산자는
                    객체가 특정 클래스의 인스턴스인지를 확인하기 위해
                    사용됩니다. 이 연산자는 두 개의 피연산자를 받아서 왼쪽
                    피연산자가 오른쪽 피연산자의 인스턴스인지를 검사하며, 결과는
                    불리언 값(<ClassContentsCode>true</ClassContentsCode> 또는
                    <ClassContentsCode>false</ClassContentsCode>)으로
                    반환됩니다.
                    <br />
                    <b>
                      주로 상속 관계에서 부모객체인지 자식 객체인지 확인 하는데
                      사용
                    </b>
                    됩니다.
                    <Java_04_07_Code09 />
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

export default Java_04_07;
