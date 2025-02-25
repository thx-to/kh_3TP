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
import Java_07_03_M from "./Java_07_03_M";

const Java_07_03 = () => {
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
    navigate("/study/java/07/03");
    window.location.reload();
  };

  const Java_07_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
try{
// 예외 발생 가능성이 있거나, 예외를 반드시 처리해야 하는 코드 작성부
} catch (처리할 예외클래스명 객체 1) { // 예외 상황 1에 대한 처리 코드
} catch (처리할 예외클래스명 객체 2) { // 예외 상황 2에 대한 처리 코드
} finally {
// 예외 발생으로 try{} 안의 코드가 중단되더라도 반드시 실행해야 하는 코드
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int[] arr = new int[5];
    try {
        for (int i = 0; i <= 5; i++) {
            arr[i] = i;
            System.out.println(arr[i]);
        }
    } catch (ArrayIndexOutOfBoundsException e) {
        System.out.println(e);
        System.out.println("예외 처리 부분");
    }
    System.out.println("프로그램 정상 종료");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
BufferedReader br = new BufferedReader(new FileReader("없는파일"));
br.readLine();
br.close();
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Exception in thread "main" java.io.FileNotFoundException: 없는파일 (지정된 파일을 찾을 수 없습니다)
    at java.io.FileInputStream.open(Native Method)
    at java.io.FileInputStream.<init>(Unknown Source)
    at java.io.FileInputStream.<init>(Unknown Source)
    at java.io.FileReader.<init>(Unknown Source)
    ...
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args)  {
	Test test = null;
	String testStr = test.name;
	System.out.println(test);
}

class Test {
    String name = "곰돌이";
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    int rst = 0;
    Scanner sc = new Scanner(System.in);
    while(true) {
        System.out.print("나눗셈 입력 : ");
        int a = sc.nextInt();
        int c = sc.nextInt();
        try {
            rst = a / c;
        } catch (ArithmeticException e) {
            System.out.println("0으로 나눌 수 없습니다. 다시 입력 하세요.");
            continue;
        }
        System.out.println("결과 : " + rst);
        break;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
try {
	// 예외가 발생할 가능성이 있는 문장들을 넣는다
} catch(예외1) {
	...
} catch(예외2) {
  ...
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public void shouldBeRun() {
        System.out.println("ok thanks.");
  }

public static void main(String[] args) {
    Sample sample = new Sample();
    int c;
    try {
        c = 4 / 0;
    } catch (ArithmeticException e) {
        c = -1;
    } finally {
        sample.shouldBeRun();  // 예외에 상관없이 무조건 수행된다.
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
        FileWriter f = null;
        try {
            f = new FileWriter("test.txt");
            f.write("test");
        } catch (IOException e ) {
            e.printStackTrace();
        } finally {
            if(f != null) {
                try {
                    f.close(); // close구문은 항상 실행 되어야 한다.
                } catch(IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class IOSample {
    private int num;

    public void input() throws IOException {
        num = System.in.read();
    }
    public void output() {
        System.out.println(num);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    IOSample test = new IOSample( );
    try{
        test.input();
        test.output();
    } catch (IOException e) {
        e.printStackTrace();
    } catch (ArrayIndexOutOfBoundsException e) {
        e.printStackTrace();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    ThrowEx ex = new ThrowEx();
    ex.printStr(5);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class ThrowEx {
    String str = null;
    public void printStr(int cnt) {
        if(str == null) {
            System.out.println("str이 null이다");
            throw new NullPointerException();
        }
        for(int i = 0; i < cnt; i++) {
            System.out.println(str);
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class ExMain {
    public static void main(String[]args) {
        CheckEven ce = new CheckEven();
        int number1 = 100;
        int number2 = 99;
        try{
            System.out.println(ce.printEven(number1));
            System.out.println(ce.printEven(number2));
        } catch (EvenException e) {
            e.printStackTrace();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class EvenException extends Exception {
    private Integer number = null;
    public EvenException (int number) {
        this.number = number;
    }
    @Override
    public String getMessage() {
        if(number == null) {
            return "숫자가 아닙니다";
        }else{
            return Integer.toString(number) + "는 짝수가 아닙니다";
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_03_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class CheckEven {
    private int num;
    public void setNum(int num) { this.num = num;
    }
    public int printEven(int number) throws EvenException {
        this.num = number;
        if(num % 2 != 0) {
            throw new EvenException(num);
        }else{
            return num;
        }
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
        <Java_07_03_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                07. Thread / 예외 처리
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                03. 예외 처리
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="07" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>예외 처리</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>예외 클래스</ClassContentsTitle1>
                  <ClassContentsTitle2>오류란?</ClassContentsTitle2>
                  <ClassContentsText>
                    프로그램에서 오류가 발생하는 상황은 크게 두 가지로 나누어
                    집니다. 하나는{" "}
                    <b>프로그램 코드 작성 중 실수로 발생하는 컴파일 오류</b>
                    이고, 다른 하나는{" "}
                    <b>
                      실행중인 프로그램이 의도하지 않은 동작을 하거나 프로그램이
                      중지되는 실행 오류
                    </b>
                    입니다. 이 중 실행 오류는 프로그램 실행 중에 발생하는 오류는
                    예측하기 어렵고, 프로그램이 비정상 상황이 되어 갑자기 멈추는
                    문제가 발생 할 수 있습니다.
                    <br />
                    자바는 이러한 비정상 종료를 줄이기 위해 다양한 예외처리
                    방법을 제공하고 있습니다.
                    <br />
                    예외처리의 목적은 프로그램이 비정상 종료되는 것을 막기 위함
                    입니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>오류와 예외</ClassContentsTitle2>
                  <ClassContentsText>
                    실행 오류는 크게 두가지로 나누어 지는데, 하나는{" "}
                    <b>
                      <font color="red">시스템 오류(Error)</font>이고 다른
                      하나는 <font color="red">예외(Exception)</font>
                    </b>
                    입니다.
                    <br />
                    <b>
                      시스템 오류는 제어 할 수 없는 반면에 예외는 프로그램에서
                      제어
                    </b>
                    할 수 있습니다.
                    <br />
                    예외의 프로그램에서 파일을 읽을 수 없는 경우, 네트워크로
                    데이터를 주고 받고자 하는데 네트워크가 연결이 안된 경우,
                    배열 값을 출력하고자하는데 배열 요소가 없는 경우 등이 해당
                    됩니다.
                    <br />
                    자바의 예외는 크게 두 가지 종류로 나누어 집니다.{" "}
                    <b>checked 예외와 unchecked 예외</b>입니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>checked 예외</ClassContentsTitle3>
                  <ClassContentsText>
                    컴파일러가 체크하는 예외로, 코드 작성 시 반드시 예외 처리
                    코드가 작성되어야 합니다. 주로 입출력(IO) 관련 예외나
                    데이터베이스 연결 예외 등이 여기에 해당됩니다. Checked
                    예외를 처리하기 위해{" "}
                    <ClassContentsCode>try-catch</ClassContentsCode> 블록이나
                    <ClassContentsCode>throws</ClassContentsCode> 절을
                    사용합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>Unchecked 예외</ClassContentsTitle3>
                  <ClassContentsText>
                    <b>
                      컴파일러가 체크하지 않는 예외로, 주로 런타임 에러에
                      해당됩니다. 배열 인덱스 초과, 널 포인터 참조 등이 여기에
                      해당
                    </b>
                    합니다. 이러한 예외는 명시적인 예외 처리가 필요하지
                    않습니다. 하지만 프로그램이 정상적으로 실행되지 않을 수
                    있으므로 이를 피하기 위해 적절한 예외 처리 또는 예외 발생을
                    방지하는 로직을 작성하는 것이 중요합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>예외 클래스의 종류</ClassContentsTitle2>
                  <ClassContentsText>
                    프로그램에서 처리하는 예외 클래스의 최상위 클래스는
                    Exception 클래스입니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_07_03_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>정리</ClassContentsTitle3>
                  <ClassContentsText>
                    -{" "}
                    <b>
                      자바는 어떻게 할 수 없는 에러와 대응 가능한 예외라는 것이
                      존재
                    </b>
                    합니다.
                    <br />- 프로그램에서 예외 상황이 발생 했을 경우 프로그램의
                    갑작스러운 종료를 막고, 정상적인 실행을 유지 할 수 있도록
                    처리하는 코드를 예외처리 코드라고 합니다.
                    <br />-{" "}
                    <b>
                      자바 컴파일러는 소스 파일을 컴파일 할 때 일반 예외가
                      발생할 가능성이 있는 코드를 발견하면 컴파일 오류를
                      발생시켜 개발자로 하여금 강제적으로 예외 처리를 하도록
                      요구
                    </b>
                    합니다.
                    <br />- 하지만 <b>
                      실행 시 발생하는 예외는 개발자가 처리
                    </b>{" "}
                    해야 합니다.
                    <br />- 예외처리 코드는 <b>try ~ catch ~ finally</b> 블록을
                    이용 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>try ~ catch문</ClassContentsTitle3>
                  <Java_07_03_Code01 />
                  <br />
                  <ClassContentsTitle2>예외 상황</ClassContentsTitle2>
                  <ClassContentsTitle3>
                    ArrayIndexOutOfBoundsException
                  </ClassContentsTitle3>
                  <Java_07_03_Code02 />
                  <ClassContentsTitle3>
                    FileNotFoundException
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    존재하지 않는 파일을 열려고 시도 할 때 발생 합니다.
                    <Java_07_03_Code03 />
                    <Java_07_03_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    NullPointerException
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    Java의 NullPointerException은 런타임 예외입니다. Java는 개체
                    참조에 특별한 null 값을 할당합니다. 프로그램이 null 값으로
                    설정된 개체 참조를 사용하려고하면이 예외가 throw됩니다.
                    <br />
                    null값은 일반적으로 참조 변수에 값이 지정되지 안았음을 의미
                    합니다.
                    <Java_07_03_Code05 />
                  </ClassContentsText>
                  <ClassContentsTitle3>ArithmeticException</ClassContentsTitle3>
                  <ClassContentsText>
                    0으로 나누면 발생 합니다.
                    <Java_07_03_Code06 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    예외 처리 하기(exception handling)
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    예외처리를 위한 try, catch문의 기본 구조
                    <br />
                    - 정의 : 프로그램 실행 시 발생할 수 있는 예외의 발생에
                    대비한 코드를 작성하는 것<br />
                    - 목적 : 프로그램의 비정상 종료를 막고, 정상적인 실행 상태를
                    유지하는 것
                    <Java_07_03_Code07 />
                  </ClassContentsText>
                  <ClassContentsTitle3>finally</ClassContentsTitle3>
                  <ClassContentsText>
                    프로그램 수행 도중 예외가 발생하면 프로그램이 중지되거나
                    예외 처리에 의해 catch 구문이 실행된다. 하지만 어떤 예외가
                    발생하더라도 반드시 실행되어야 하는 부분이 있어야 한다면
                    어떻게 해야 할까?
                    <Java_07_03_Code08 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    파일 입출력 예외처리
                  </ClassContentsTitle3>
                  <Java_07_03_Code09 />
                  <br />
                  <ClassContentsTitle2>예외 처리 미루기</ClassContentsTitle2>
                  <ClassContentsText>
                    해당 메소드 안에서 발생한 예외 처리에 대한 책임을 메소드를
                    호출한 쪽으로 떠넘길 수 있습니다. 컴파일 시에는 문제가
                    발생하지 않았지만 동작 중 예외 발생 시 호출하는 코드에서
                    예외를 처리하지 못 한다면 프로그램에 비정상 종료를 하게
                    됩니다.
                    <Java_07_03_Code10 />
                    <Java_07_03_Code11 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>예외 처리 던지기</ClassContentsTitle2>
                  <ClassContentsText>
                    원하는 조건 상황에서 필요한 경우 예외 객체를 생성시키면서
                    예외를 발생 시킬 수 있습니다.
                    <br />
                    자바에서 제공되는 예외 클래스이든 개발자가 만든 사용자 정의
                    예외 클래스 이든 모두 생성하고 발생 시킬 수 있습니다.
                    <Java_07_03_Code12 />
                    <Java_07_03_Code13 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    사용자 정의 예외 클래스 만들기
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    자바에서는 제공해 주는 예외 클래스가 사용하려는 목적에 맞지
                    않을 때 직접 예외 클래스를 만들어 사용 할 수 있습니다.
                    사용자 정의 예외 클래스를 만들 때 java.lang.Exception
                    클래스를 상속 받아야 합니다.
                    <Java_07_03_Code14 />
                    <Java_07_03_Code15 />
                    <Java_07_03_Code16 />
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
export default Java_07_03;
