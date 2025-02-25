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
import Java_05_02_M from "./Java_05_02_M";

const Java_05_02 = () => {
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
    navigate("/study/java/05/02");
    window.location.reload();
  };

  const Java_05_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class Student {
	int id;
	String name;
}
// 컴파일 과정에서 아래와 같이 변경됨
class Student extends Object {
	int id;
	String name;
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Car car01 = new Car();
Car car02 = new Car();

System.out.println(car01.toString());
System.out.println(car02.toString());
          `}
        </code>
      </pre>
    );
  };

  const Java_05_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Car car01 = new Car();
Car car02 = new Car();

System.out.println(car01.equals(car02));
car01 = car02; // 두 참조 변수가 같은 주소를 가리킴.
System.out.println(car01.equals(car02));
          `}
        </code>
      </pre>
    );
  };

  const Java_05_02_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        Member mem1 = new Member("bear", "곰돌이사육사", "12345", 23, true);
        Member mem2 = mem1.getMember();
        mem2.age = 100;
        mem2.name = "test";

        System.out.println("name : " + mem1.name);
        System.out.println("name : " + mem2.name);

        System.out.println("name : " + mem1.age);
        System.out.println("name : " + mem2.age);
    }
}

public class Member implements Cloneable {
    public String id;
    public String name;
    public String password;
    public int age;
    public boolean adult;

    public Member(String id, String name, String password, int age, boolean adult) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.age = age;
        this.adult = adult;
    }
    public Member getMember() {
        Member cloned = null;
        try {
            cloned = (Member) clone(); // 클론 메서드는 Object타입이므로 Member 타입으로 변경
        } catch (CloneNotSupportedException e) { }
        return cloned;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_02_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    String str1 = new String("abc");
    String str2 = new String("abc");

    System.out.println(str1.hashCode());
    System.out.println(str2.hashCode());

    if(str1 == str2) {
        System.out.println("참조가 같습니다.");
    } else {
        System.out.println("참조가 다릅니다.");
    }
    // hashCode() 메소드는 재정의 되어 있으며, 같은 문자열을 가지는 경우 hashCode() 메소드는 동일한 해시 코드을 반환 합니다.

    Integer i1 = 100;
    Integer i2 = 200;

    System.out.println(i1.hashCode());
    System.out.println(i2.hashCode());
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_02_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자바API클래스;
public class Main {
    public static void main(String[] args) {
        Car car01 = new Car();
        Car car02 = new Car();
        car02 = car01;
        // 16진수 해시코드이며 인스턴스의 주소 값
        System.out.println(car01.toString());
        // 참조 변수가 가리키는 값을 비교
        System.out.println(car01.equals(car02));
        // 해당 객체의 클래스 타입을 반환 함.
        System.out.println(car02.getClass());
        // 객체의 해시 코드값을 반환
        System.out.println(car02.hashCode());
        // 대기하고 있는 하나의 쓰레드를 다시 실행
        //car01.notify();
        // 쓰레드를 다시 실행 할 때 호출
        //wait();
    }
}

class Car {
    Car() {

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
        <Java_05_02_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                05. Java API 클래스
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                02. Object 클래스
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="05" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>Object 클래스</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>Object 클래스?</ClassContentsTitle1>
                  <ClassContentsText>
                    <b>
                      java.lang 패키지 중에서도 가장 많이 사용되는 클래스는 바로
                      Object 클래스
                    </b>
                    입니다.
                    <br />
                    Object 클래스는{" "}
                    <font color="red">
                      <b>모든 자바 클래스의 최고 조상 클래스</b>
                    </font>
                    가 됩니다.
                    <br />
                    따라서 자바의 모든 클래스는 Object 클래스의 모든 메소드를
                    바로 사용할 수 있습니다.
                    <br />
                    이러한 Object 클래스는 필드를 가지지 않으며, 총 11개의
                    메소드만으로 구성되어 있습니다.
                  </ClassContentsText>
                  <ClassTableBox>
                    <ClassTable>
                      <ClassTableTr>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>메소드</b>
                        </ClassTableTd>
                        <ClassTableTd
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                        >
                          <b>설명</b>
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>protected Object clone()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 복제본을 생성하여 반환함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>boolean equals(Object obj)</ClassTableTd>
                        <ClassTableTd>
                          해당 객체와 전달받은 객체가 같은지 여부를 반환함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>protected void finalize()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체를 더는 아무도 참조하지 않아 가비지 컬렉터가
                          객체의 리소스를 정리하기 위해 호출함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>{`Class<T> getClass()`}</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 클래스 타입을 반환함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>int hashCode()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 해시 코드값을 반환 함.
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>void notify()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 대기(wait)하고 있는 하나의 스레드를 다시
                          실행할 때 호출함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>void notifyAll()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 대기(wait)하고 있는 모든 스레드를 다시
                          실행할 때 호출함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>String toString()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 정보를 문자열로 반환함
                        </ClassTableTd>
                      </ClassTableTr>
                      <ClassTableTr>
                        <ClassTableTd>void wait()</ClassTableTd>
                        <ClassTableTd>
                          해당 객체의 다른 스레드가 notify()나 notifyAll()
                          메소드를 실행할 때까지 현재 스레드를 일시적으로
                          대기(wait)시킬 때 호출함
                        </ClassTableTd>
                      </ClassTableTr>
                    </ClassTable>
                  </ClassTableBox>
                  <br />
                  <ClassContentsTitle2>
                    모든 클래스의 최상위 클래스 Object
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    모든 클래스는 Object 클래스를 상속 받습니다.
                    <br />
                    그러므로 Object가 가진 매서드를 모든 클래스는 가집니다.
                    <Java_05_02_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>toString()메소드</ClassContentsTitle2>
                  <ClassContentsText>
                    toString() 메소드는{" "}
                    <b>해당 인스턴스에 대한 정보를 문자열로 반환</b>합니다.
                    <br />
                    이때 반환되는 문자열은{" "}
                    <b>
                      클래스 이름과 함께 구분자로 '@'가 사용되며, 그 뒤로 16진수
                      해시 코드(hash code)가 추가
                    </b>
                    됩니다. (객체의 메모리 번지를 이용해 해시 코드 생성)
                    <br />
                    <b>
                      16진수 해시 코드 값은 인스턴스의 주소를 가리키는 값으로,
                      인스턴스마다 모두 다르게 반환
                    </b>
                    됩니다.
                    <br />
                    다음 예제는 toString() 메소드를 이용하여 인스턴스의 정보를
                    출력하는 예제입니다.
                    <br />
                    String과 Integer의 경우 값을 출력하기 위해 오버라이딩되어
                    사용 되고 있습니다.
                    <br />
                    자바에서 toString() 메소드는 기본적으로 각 API 클래스마다
                    자체적으로 오버라이딩을 통해 재정의되어 있습니다.
                    <Java_05_02_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>equals() 메소드</ClassContentsTitle2>
                  <ClassContentsText>
                    equals() 메소드는 해당 인스턴스를 매개변수로 전달받는 참조
                    변수와 비교하여, 그 결과를 반환합니다.
                    <br />
                    이때 참조 변수가 가리키는 값을 비교하므로, 서로 다른 두
                    객체는 언제나 false를 반환하게 됩니다.
                    <Java_05_02_Code03 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>clone() 메소드</ClassContentsTitle2>
                  <ClassContentsText>
                    clone() 메소드는{" "}
                    <b>
                      해당 인스턴스를 복제하여, 새로운 인스턴스를 생성해 반환
                    </b>
                    합니다.
                    <br />
                    하지만 Object 클래스의 clone() 메소드는 단지 필드의 값만을
                    복사하므로, 필드의 값이 배열이나 인스턴스면 제대로 복제할 수
                    없습니다.
                    <br />
                    따라서 이러한 경우에는 해당 클래스에서 clone() 메소드를
                    오버라이딩하여, <b>복제가 제대로 이루어지도록 재정의</b>해야
                    합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>얕은 복사</ClassContentsTitle3>
                  <ClassContentsText>
                    얕은 복사랑 단순이 필드값만 복사해서 객체를 복제하는 것을 말
                    합니다.
                    <br />
                    필드 값만 복사하기 때문에 기본 타입일 경우 값 복사가
                    일어나고 필드가 참조 타입일 경우 객체의 번지가 복사되므로
                    얕은 복사가 일어 납니다.
                    <br />
                    이러한 문제를 해결 하기위해 clone()메소드를 사용하며,
                    clone() 메소드는 데이터의 보호를 이유로 Cloneable
                    인터페이스를 구현한 클래스의 인스턴스만이 사용할 수
                    있습니다.
                    <Java_05_02_Code04 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>객체소멸자</ClassContentsTitle2>
                  <ClassContentsText>
                    참조하지 않는 배열이나 객체는 Garbage Collector가 힙 영역을
                    자동적으로 소멸 시킵니다.
                    <br />
                    객체소멸자는 Garbage Collector에 의해서 자동 호출되며
                    기본적으로는 수행 할 내용이 없습니다.
                    <br />
                    소멸자는 Object의 finalize() 입니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>hashCode() 메소드</ClassContentsTitle2>
                  <ClassContentsText>
                    해시(hash)는 정보를 저장하거나 검색할 때 사용하는 자료 구조
                    입니다. 정보를 어디에 저장 할 것인지, 어디서 가져올 것인지
                    해시 함수를 사용하여 구현 합니다.{" "}
                    <b>
                      해시 함수는 객체의 특정 정보(키 값)를 매개 변수 값으로
                      넣으면 그 객체가 저장 되어야 할 위치나 저장된 해시 테이블
                      주소(위치)를 반환
                    </b>
                    합니다. 따라서 객체 정보를 알면 해당 객체 위치를 빠르게 검색
                    할 수 있습니다. 해시 함수는 개발하는 프로그램 특성에 따라
                    다르게 구현 됩니다.
                    <br />
                    자바에서는 인스턴스를 힙 메모리에 생성하여 관리 할 때 해시
                    알고리즘을 사용 합니다.
                    <Java_05_02_Code05 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>Object 메소드 종합</ClassContentsTitle1>
                  <ClassContentsText>
                    Object 클래스의 메소드는 다음과 같습니다.
                    <Java_05_02_Code06 />
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
export default Java_05_02;
