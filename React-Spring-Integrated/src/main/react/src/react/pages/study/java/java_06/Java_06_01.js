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
import Java_06_01_M from "./Java_06_01_M";

const Java_06_01 = () => {
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
    navigate("/study/java/06/01");
    window.location.reload();
  };

  const Java_06_01_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
// 캐스팅 하는 경우
List list = new ArrayList();
list.add("hello");
String str = (String) list.get(0);

// 제네릭 타입
List<String> list = new ArrayList()<>;
list.add("hello");
String str = list.get(0);
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class 클래스명<T> { ... }
public interface 인터페이스명<T> {...}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class Person <T> {
    public T info;
    Person(T info) {
        this.info = info;
    }
}

public class Main {
    public static void main(String[] args) {
        Person<String> p1 = new Person<>("고유림");
        Person<Integer> p2 = new Person<>(1000);
        System.out.println(p1.info);
        System.out.println(p2.info);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Product<T, M> {
    private T name;
    private M year;

    public T getName() {
        return name;
    }

    public void setName(T name) {
        this.name = name;
    }

    public M getYear() {
        return year;
    }

    public void setYear(M year) {
        this.year = year;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
    Product<String, Integer> pr1 = new Product<>();
    pr1.setName("스마트 TV");
    pr1.setYear(2022);

    Product<Integer, String> pr1 = new Product<>();
    pr1.setName(12345);
    pr1.setYear("2022");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Powder {
    public void doPrinting() {
        System.out.println("Powder 재료로 출력 합니다.");
    }
    public String toString() {
        return "재료는 Powder 입니다.";
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Plastic {
    public void doPrinting() {
        System.out.println("Plastic 재료로 출력 합니다.");
    }
    public String toString() {
        return "재료는 Plastic 입니다.";
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class GenericPrinter<T> {
    private T material; // T 자료형으로 선언한 변수

    public void setMaterial(T material) {
        this.material = material;
    }
    public T getMaterial() {
        return material;
    }
    public String toString() {
        return material.toString();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class GenericTest {
    public static void main(String[] args) {
        GenericPrinter<Powder> powderPrinter = new GenericPrinter<>();
        powderPrinter.setMaterial(new Powder());
        System.out.println(powderPrinter);
        powderPrinter.getMaterial().doPrinting();

        GenericPrinter<Plastic> plasticPrinter = new GenericPrinter<>();
        plasticPrinter.setMaterial(new Plastic());
        System.out.println(plasticPrinter);
        powderPrinter.getMaterial().doPrinting();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public abstract class Material {
    public abstract void doPrinting();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Powder extends Material {
    @Override
    public void doPrinting() {
        System.out.println("Powder 재료로 출력합니다.");
    }
    public String toString() {
        return "재료는 Powder 입니다.";
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Plastic extends Material {
    @Override
    public void doPrinting() {
        System.out.println("Plastic 재료로 출력합니다.");
    }

    public String toString() {
        return "재료는 Plastic 입니다.";
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class GenericPrinter<T extends Material> {
    private T material; // T 자료형으로 선언한 변수

    public void setMaterial(T material) {
        this.material = material;
    }
    public T getMaterial() {
        return material;
    }
    public String toString() {
        return material.toString();
    }
    public void printing() {
        material.doPrinting();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_01_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class GenericTestEx2 {
    public static void main(String[] args) {
        GenericPrinter<Powder> powderPrinter = new GenericPrinter<>();
        powderPrinter.setMaterial(new Powder());
        powderPrinter.printing();

        GenericPrinter<Plastic> plasticPrinter = new GenericPrinter<>();
        plasticPrinter.setMaterial(new Plastic());
        plasticPrinter.printing();
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
        <Java_06_01_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                06. 제네릭 / 컬렉션 프레임워크
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                01. 제네릭
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="06" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>제네릭</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>제너릭이란?</ClassContentsTitle1>
                  <ClassContentsText>
                    <font color="red">
                      제네릭(generic)이란 데이터의 타입(data type)을
                      일반화한다(generalize)는 것을 의미합니다. (데이터 형식에
                      의존하지 않고, 하나의 값이 여러 다른 데이터 타입을 가질 수
                      있도록 하는 방법)
                    </font>
                    <br />
                    <br />
                    이렇게 함으로써 여러가지{" "}
                    <b>
                      데이터 타입 또는 자료구조에 상관없이 동일한 프로그래밍이
                      가능
                    </b>
                    합니다.
                    <br />
                    프로그램에서 변수를 선언 할 때 모든 변수는 자료형이
                    있습니다. 메소드에서 매개변수를 사용하는 경우에도 자료형을
                    가지고 있습니다. 일반적인 경우에는 하나의 자료형으로 구현을
                    하지만, 변수나 메소드의 자료형을 필요에 따라 여러 자료형으로
                    바꿀 수 있다면 프로그램이 훨씬 유연해 집니다. 이와 같이 어떤
                    값이 참조하는 자료형이 아닌 여러 참조형을 사용할 수 있도록
                    프로그래밍하는 것을{" "}
                    <font color="red">
                      <b>제네릭 프로그래밍</b>
                    </font>
                    이라고 합니다.
                    <br />
                    <b>
                      제네릭은 클래스나 메소드에서 사용할 내부 데이터 타입을
                      컴파일 시에 미리 지정하는 방법 사용 합니다.
                    </b>
                    <br />
                    이렇게 컴파일 시에 미리 타입 검사(type check)를 수행하면
                    다음과 같은 장점을 가집니다.
                    <br />
                    1. <b>컴파일 시 강한 타입 체크</b>를 할 수 있습니다.
                    <br />
                    2. <b>타입 변환(casting)을 제거</b>한다.
                    <Java_06_01_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    {`제네릭 타입 (class<T>, interface<T>)`}
                  </ClassContentsTitle2>
                  <Java_06_01_Code02 />
                  <br />

                  <ClassContentsTitle2>
                    제네릭의 선언 및 생성
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    자바에서 제네릭은 클래스와 메소드에만 다음과 같은 방법으로
                    선언 할 수 있습니다.
                    <Java_06_01_Code03 />
                    위의 예제에서 사용된{" "}
                    <b>
                      'T'를 타입 변수(type variable)라고 하며, 임의의 참조형
                      타입을 의미
                    </b>
                    합니다.
                    <br />꼭 'T'뿐만 아니라 어떠한 문자를 사용해도 상관없으며,
                    여러 개의 타입 변수는 쉼표(,)로 구분하여 명시할 수 있습니다.
                    <br />
                    <b>
                      타입 변수는 클래스에서뿐만 아니라 메소드의 매개변수나
                      반환값으로도 사용
                    </b>
                    할 수 있습니다.
                    <br />
                    위와 같이 선언된 제네릭 클래스(generic class)를 생성할
                    때에는 타입 변수 자리에 사용할 실제 타입을 명시해야 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>멀티 타입 파라미터</ClassContentsTitle2>
                  <Java_06_01_Code04 />
                  <Java_06_01_Code05 />
                  <br />
                  <ClassContentsTitle2>
                    제네릭 클래스 사용 예제
                  </ClassContentsTitle2>
                  <Java_06_01_Code06 />
                  <Java_06_01_Code07 />
                  <Java_06_01_Code08 />
                  <Java_06_01_Code09 />
                  <br />
                  <ClassContentsTitle2>
                    {`T 자료형에 사용할 자료형을 제한하는 <T extends 클래스>`}
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    제네릭 클래스에서 T 자료형에 사용할 자료형에 대해 제한을
                    걸어야 할 경우가 있습니다. 예를 들어 위의 예제와 같이
                    프린터를 위해 다양한 재료를 사용할 수 있는데 사용 할 수 없는
                    재료가 있을 수 있습니다.
                    <br />
                    <ClassContentsCode>
                      {`GenericPrinter<Water> plasticPrinter = new GenericPrinter<>();`}
                    </ClassContentsCode>
                    <br />
                    이런 일을 방지 하기 위해 상속 관계를 이용해 제한을 걸 수
                    있습니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "180px",
                        backgroundImage: `url(${"/images/study/java/java_06_01_01.png"})`,
                      }}
                    />
                    <Java_06_01_Code10 />
                    <Java_06_01_Code11 />
                    <Java_06_01_Code12 />
                    <Java_06_01_Code13 />
                    <Java_06_01_Code14 />
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
export default Java_06_01;
