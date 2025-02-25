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
import Java_04_11_M from "./Java_04_11_M";

const Java_04_11 = () => {
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
    navigate("/study/java/04/11");
    window.location.reload();
  };

  const Java_04_11_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class ClassName { ... } // default 접근 제한
public class ClassName { ... }  // public 접근제한
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
class TV {
    private int channel;  // 필드에 대한 접근 제한
    private int volume;
   
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
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 상속;

public class SameClass {
    protected String sameVar = "접근 허용;
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 상속;

public class Main {
    public static void main(String[] args) {
        SameClass sp = new SameClass();
        System.out.println(sp.sameVar); // 다른 패키지에 속하는 자식 클래스까지 허용
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 상속.서브;

public class SameClass {
    protected String sameVar = "접근 허용";
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 상속;
import 상속.서브.SameClass;

public class Main {
    public static void main(String[] args) {
        SameClass sp = new SameClass();
        System.out.println(sp.sameVar); // 다른 패키지에 속하는 자식 클래스까지 허용
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 상속;

public class SameClass {
    String sameVar = "접근 허융";
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 상속;

public class Main {
    public static void main(String[] args) {
        SameClass sp = new SameClass();
        System.out.println(sp.sameVar); // 다른 패키지에 속하는 자식 클래스까지 허용
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 접근제한자;

public class Main {
    public static void main(String[] args) {
        Restrictor rest = new Restrictor();
        rest.seoul();
        rest.busan();
        rest.daegu();
        rest.suwon(); // 접근 안됨.

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 접근제한자;

public class Restrictor {
    public void seoul() {
    }
    protected void busan() {
    }
    void daegu() {
    }
    private void suwon() {
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 접근제한자;
public class Main {
    public static void main(String[] args) {
        Child child = new Child("개발자");
        System.out.println(child.getMoney());
        System.out.println(child.getName());
        System.out.println(child.getAddr());
        child.setJobs("놀기");
        System.out.println(child.getJobs());
    }
}
class Child extends Parent {
    String jobs;

    public Child(String jobs) {
        this.jobs = jobs;
    }

    public String getJobs() {
        return jobs;
    }
    public void setJobs(String jobs) {
        this.jobs = jobs;
    }

    public String getMoney() {
        return money;
    }
    public String getName() {
        return name;
    }
    public String getAddr() {
        return addr;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 접근제한자;
public class Parent {
    // default 제한자 : 같은 패키지 내에서 접근 가능
    String name;
    // protected : 같은 패키지와 상속 관계에서 접근 가능
    String money;
    String addr;
    public Parent() {
        name = "Parent Name";
        money = "20억";
        addr =  "서울시 강남구 역삼동";
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_11_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
private int channel;
//세터
public void setChannel(int cnl) {
    if (cnl >= 1 && cnl <= 999) {
        channel = cnl;
        System.out.println("채널을 "+ channel + "변경 하였습니다.");
    }
}
// 게터
public int getChannel() {
	return this.channel;
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_04_11_M />
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
                11. 접근 제한자 & Getter, Setter
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
                  <ClassHeaderTitle>
                    접근 제한자 & Getter, Setter
                  </ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>접근제한자</ClassContentsTitle2>
                  <ClassContentsText>
                    접근을 제한하기 위해 사용되며, 객채지향언어의 4가지 주요
                    특성 중의 하나 입니다.
                    <br />
                    <b>
                      클래스와 인터페이스를 다른 패키지나 클래스에서의 접근을
                      제한하는 용도로 사용
                    </b>
                    됩니다.
                    <br />
                    접근 제한자는 두 개 이상 같이 사용 할 수 없습니다.
                    <br />
                    객체지향의 핵심 개념중의 하나인 데이터은닉 혹은 캡슐화에
                    대한 핵심 개념 입니다.
                    <br />
                    데이터 은닉이란 사용자가 알 필요 없는 정보나 숨겨야 할
                    정보를 보이지 않도록 한다는 개념 입니다.
                    <br />
                    자바에서는 다음과 같은 네 가지의 접근 제어자를 제공합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "250px",
                        backgroundImage: `url(${"/images/study/java/java_04_11_01.png"})`,
                      }}
                    />
                    <Java_04_11_Code01 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>private</ClassContentsTitle2>
                  <ClassContentsText>
                    private 접근 제어자를 사용하여 선언된 클래스 멤버는 외부에
                    공개되지 않으며, 외부에서는 직접 접근할 수 없습니다. 즉,
                    자바 프로그램은 private 멤버에 직접 접근할 수 없으며, 해당
                    객체의 public 메소드를 통해서만 접근할 수 있습니다.
                    <Java_04_11_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>protected</ClassContentsTitle2>
                  <ClassContentsText>
                    클래스 내부에서의 접근을 허용하고, 추가로 부모로 부터
                    상속받은 클래스에 대해서 접근을 허용 합니다.
                    <br />
                    즉,{" "}
                    <b>
                      같은 패키지에 속하는 클래스와 다른 패키지에 속하는 자식
                      클래스에서만 접근 가능
                    </b>
                    합니다.
                    <br />- 같은 패키지에서의 접근 허용 (가능)
                    <Java_04_11_Code03 />
                    <Java_04_11_Code04 />
                    <br />
                    <br />
                    다른 패키지이고 상속 관계가 없는 경우 (접근 불가능)
                    <Java_04_11_Code05 />
                    <Java_04_11_Code06 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>default</ClassContentsTitle2>
                  <ClassContentsText>
                    접근 제한자가 지정되지 않으면 자동으로 default가 됩니다.
                    <br />
                    같은 패지키내에서는 자유롭게 사용 가능 합니다. (다른
                    패키에서는 접근이 안됩니다.)
                    <Java_04_11_Code07 />
                    <Java_04_11_Code08 />
                  </ClassContentsText>
                  <ClassContentsTitle3>접근제한자 테스트</ClassContentsTitle3>
                  <ClassContentsText>
                    - 다른 패키지의 부모를 상속 받는 경우
                    <Java_04_11_Code09 />
                    <Java_04_11_Code10 />
                    <br />
                    <br />
                    <b>Main.java</b>
                    <Java_04_11_Code11 />
                    <br />
                    <b>Parent.java</b>
                    <Java_04_11_Code12 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    클래스에 대한 접근 제한자
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    클래스의 접근 제한자는 해당 클래스가 어디에서 접근
                    가능한지를 제어합니다. 이는 클래스가 선언된 위치, 패키지,
                    그리고 상속 관계에 따라 접근 가능성을 결정하는 역할을
                    합니다. 접근 제한자는 다음과 같은 네 가지로 나뉩니다.
                    <br />
                    1. <ClassContentsCode>public</ClassContentsCode>
                    <br />
                    <ClassContentsTextTab>
                      다른 패키지에서도 접근 가능한 가장 넓은 범위의 접근
                      제한자입니다.{" "}
                      <ClassContentsCode>public</ClassContentsCode> 클래스는
                      어떤 패키지에서든 인스턴스를 생성하고 사용할 수 있습니다.
                      또한, 클래스 파일의 이름과 동일한{" "}
                      <ClassContentsCode>public</ClassContentsCode> 클래스로
                      만들어야 합니다. 이는 자바 컴파일러가 소스 코드를 쉽게
                      찾을 수 있도록 하기 위함입니다.
                    </ClassContentsTextTab>
                    2. <ClassContentsCode>default</ClassContentsCode>
                    (package-private)
                    <br />
                    <ClassContentsTextTab>
                      접근 제한자를 명시하지 않을 경우, 클래스는 기본적으로 같은
                      패키지 내에서만 접근할 수 있습니다. 다른 패키지에서는 해당
                      클래스에 직접 접근할 수 없습니다.
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>
                    Getter와 Setter 메소드
                  </ClassContentsTitle1>
                  <ClassContentsText>
                    객체지향 프로그래밍에서는 객체 내부의 데이터를 보호하기 위해
                    직접 접근을 제한합니다. 이러한 데이터를 안전하게 접근하고
                    수정할 수 있도록 <b>Getter</b>와 <b>Setter</b> 메소드를
                    사용합니다.
                    <br />
                    Getter와 Setter 메소드는 다음과 같은 이유로 사용됩니다.
                    <br />- 객체 내부의 데이터를 외부에서 직접 수정할 수 없도록
                    보호합니다.
                    <br />- 데이터에 대한 유효성 검사를 추가하여 잘못된 값이
                    설정되는 것을 방지합니다.
                    <br />
                    아래 예시처럼 <b>Setter</b> 메소드를 통해 정해진 범위 내의
                    값만 필드에 설정되도록 함으로써 코드의 안정성을 향상시킬 수
                    있습니다.
                    <Java_04_11_Code13 />
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

export default Java_04_11;
