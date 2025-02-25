import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
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

const Java_05_05_M = () => {
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
    navigate("/study/java/05/05");
    window.location.reload();
  };

  const Java_05_05_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public enum Week {
	MONDAY,
	TUESDAY,
	WEDNESDAY,
	THURSDAY,
	FRIDAY,
	SATURDAY,
	SUNDAY
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.Calendar;

public class Main {
    public static void main(String[] args) {
        Week today = null;
        Calendar cal = Calendar.getInstance();
        int week = cal.get(Calendar.DAY_OF_WEEK);
        switch(week) {
            case 1 :
                today = Week.SUNDAY; break; // 열거 상수 대입
            case 2 :
                today = Week.MONDAY; break;
            case 3 :
                today = Week.TUESDAY; break;
            case 4 :
                today = Week.WEDNESDAY; break;
            case 5 :
                today = Week.THURSDAY; break;
            case 6 :
                today = Week.FRIDAY; break;
            case 7 :
                today = Week.SATURDAY; break;
        }
        System.out.println("오늘 요일 : " + today);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
enum Rainbow { RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET }

public class Main {
		    public static void main(String[] args) {
        Rainbow[] arr = Rainbow.values();
        for (Rainbow rb : arr) {
            System.out.println(rb);
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
enum Rainbow { RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET }

public class Enum02 {
    public static void main(String[] args) {
        Rainbow rb = Rainbow.valueOf("GREEN");
        System.out.println(rb);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
enum Rainbow { RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET }

public class Enum03 {
    public static void main(String[] args) {
        int idx = Rainbow.YELLOW.ordinal();
        System.out.println(idx);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
enum Rainbow {
    RED(3), ORANGE(10), YELLOW(21), GREEN(5), BLUE(1), INDIGO(-1), VIOLET(-11);
    private final int value;
    Rainbow(int value) { this.value = value; } //생성자는 항상 private
    public int getValue() { return value; }
}

public class Enum04 {
    public static void main(String[] args) {
        System.out.println(Rainbow.YELLOW.ordinal());
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public enum DevType {
    MOBILE, FRONTEND, BACKEND, DBA
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public enum Career {
    JUNIOR, SENIOR
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public enum Gender {
    MALE, FEMALE
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Developer {
    private String name;
    private DevType type;
    private Career career;
    private Gender gender;

    public Developer(String name, DevType type, Career career, Gender gender) {
        this.name = name;
        this.type = type;
        this.career = career;
        this.gender = gender;
    }

    public void devInfo() {
        System.out.println("이름 : " + name);
        System.out.println("업무 : " + type);
        System.out.println("경력 : " + career);
        System.out.println("성별 : " + gender);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_05_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class EnumType {
    public static void main(String[] args) {
        Developer developer = new Developer("곰돌이사육사", DevType.FRONTEND, Career.SENIOR, Gender.MALE);
        developer.devInfo();
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
            05. Java API 클래스
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            05. Enum 클래스
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}

        <ClassContentsTitle2>열거타입</ClassContentsTitle2>
        <ClassContentsText>
          열거 타입은{" "}
          <b>한정된 값인 열거 상수 중에서 하나의 상수를 저장하는 타입</b>
          입니다.
          <br />
          서로 관련 있는 상수들끼리 모아 상수들을 정의
          <br />- JDK1.5 에서 해당 기능이 추가되었습니다.
          <br />- C언어의 열거체보다 더욱 향상된 기능을 제공합니다.
          <br />- <b>열거체를 비교 할 때 실제 값뿐만 아니라 타입까지 체크</b>
          합니다.
          <br />- 기존의 public class 내에 final static 으로 정의 하던 부분에
          대한 대체
          <br />
          enum 열거체이름 {`{상수1이름, 상수2이름…}`}
          <Java_05_05_Code01 />
        </ClassContentsText>
        <ClassContentsTitle3>열거 타입 변수</ClassContentsTitle3>
        <ClassContentsText>
          열거 타입을 선언 했다면 타입을 사용 할 수 있습니다. 열거 타입도 하나의
          데이터 타입이므로 변수를 선언하고 사용해야 합니다.
          <br />
          <ClassContentsCode>열거타입 변수;</ClassContentsCode>
          <br />
          <ClassContentsCode>Week today;</ClassContentsCode>
          <br />
          열거 타입 변수를 선언 했다면 아래와 같이 열거 상수를 저장 할 수
          있습니다. 열거 상수는 단독으로 사용할 수 없고 반드시 열거
          타입.열거상수로 사용 됩니다.
          <br />
          <ClassContentsCode>
            열거타입 변수 = 열거타입.열거상수;
          </ClassContentsCode>
          <br />
          <ClassContentsCode>Week today = Week.SUNDAY;</ClassContentsCode>
          <br />
          열거 타입은 참조 타입이므로 null 값을 저장 할 수 있습니다.
          <Java_05_05_Code02 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>열거 객체의 메소드</ClassContentsTitle2>
        <ClassContentsTitle3>values() 메소드</ClassContentsTitle3>
        <ClassContentsText>
          values() 메소드는{" "}
          <b>해당 열거체의 모든 상수를 저장한 배열을 생성하여 반환</b>
          합니다.
          <Java_05_05_Code03 />
        </ClassContentsText>
        <ClassContentsTitle3>valueOf()메소드</ClassContentsTitle3>
        <ClassContentsText>
          valueOf() 메소드는{" "}
          <b>전달된 문자열과 일치하는 해당 열거체의 상수를 반환</b>
          합니다.
          <Java_05_05_Code04 />
        </ClassContentsText>
        <ClassContentsTitle3>ordinal() 메소드</ClassContentsTitle3>
        <ClassContentsText>
          ordinal() 메소드는{" "}
          <b>
            해당 열거체 상수가 열거체 정의에서 정의된 순서(0부터 시작)를 반환
          </b>
          합니다.
          <br />
          이때 반환되는 값은 열거체 정의에서 해당 열거체 상수가 정의된 순서이며,
          상수값 자체가 아님을 명심해야 합니다.
          <Java_05_05_Code05 />
        </ClassContentsText>
        <ClassContentsTitle3>열거체의 상수값 정의 및 추가</ClassContentsTitle3>
        <ClassContentsText>
          열거체의 기본적으로 첫 번째 상수값은 0부터 설정되며, 그 다음 상수값은
          1만큼 증가되면서 자동 설정 됩니다.
          <br />
          임의로 상수값을 지정하는 별도의 추가 구현이 필요 합니다.
          <Java_05_05_Code06 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>예제</ClassContentsTitle2>
        <Java_05_05_Code07 />
        <Java_05_05_Code08 />
        <Java_05_05_Code09 />
        <Java_05_05_Code10 />
        <Java_05_05_Code11 />

        {/* </ClassContentsContainer> */}
        {/* </EachClass> */}
        <ArrowContainer>
          <Java_ArrowNavigation direction="left" />
          <Java_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default Java_05_05_M;
