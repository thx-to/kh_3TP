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

const Java_08_01_M = () => {
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
    navigate("/study/java/08/01");
    window.location.reload();
  };

  const Java_08_01_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int add(int x, int y) {
	return x + y;
}
// 람다식으로 표현 하기
(int x, int y) -> {return x + y;}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
str -> {System.out.println(str);}
// 매개변수가 여러개인 경우는 괄호를 생략할 수 없습니다.
x,y -> {System.out.println(x + y)}; // 잘못된 형식
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
str -> System.out.println(str);
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
(x, y) -> x + y // 두 값을 더하여 반환함
str -> str.length() // 문자열 길이를 반환 함
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
new Thread(new Runnable() {
    public void run() {
        System.out.println("전통적인 방식의 일회용 스레드 생성");
    }
}).start();

new Thread(()->{
    System.out.println("람다 표현식을 사용한 일회용 스레드 생성");
}).start();
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
interface Calculator {
    int sum(int a, int b);
}

class MyCalculator implements  Calculator {
    public int sum(int a, int b) {
        return a+b;
    }
}

public class Sample {
    public static void main(String[] args) {
        MyCalculator mc = new MyCalculator();
        int result = mc.sum(3, 4);
        System.out.println(result);  // 7 출력
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
interface Calculator {
    int sum(int a, int b);
}

public class Sample {
    public static void main(String[] args) {
        Calculator mc = (int a, int b) -> a + b; // 인터페이스 상속을 받아서 클래스 대신 람다
        int result = mc.sum(3, 4);
        System.out.println(result);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
@FunctionalInterface
interface MyFuncInterface {
    public void method(int x);
}
public class LambdaMainEx {
    public static void main(String[] args) {
        MyFuncInterface fi = (x) -> {
          int result = x * 5;
          System.out.println(result);
        };
        fi.method(2);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
@FunctionalInterface
interface MyFuncInterface { // 함수형 인터페이스의 선언
    public int min(int x, int y); // 매소드가 반드시 한개만 존재
}

public class LambdaEx2 {
    public static void main(String[] args) {
        MyFuncInterface fi = (x, y)-> x < y ? x : y; // 구현부
        System.out.println(fi.min(3, 4)); // 호출부
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
	IntBinaryOperator operator;
	
	//정적 메소드 참조 ---------------------------------
	operator = (x, y) -> Calculator.staticMethod(x, y);
	System.out.println("결과1: " + operator.applyAsInt(1, 2));

	operator = Calculator :: staticMethod;
	System.out.println("결과2: " +  operator.applyAsInt(3, 4));
	
	//인스턴스 메소드 참조 ---------------------------
	Calculator obj = new Calculator();
	operator = (x, y) -> obj.instanceMethod(x, y);
	System.out.println("결과3: " + operator.applyAsInt(5, 6));

	operator = obj :: instanceMethod;
	System.out.println("결과4: " + operator.applyAsInt(7, 8));
}

public class Calculator {
	public static int staticMethod(int x, int y) {
		return x + y;
	}
	public int instanceMethod(int x, int y) {
		return x + y;
	}
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
	ToIntBiFunction<String,String> function;
	
	function = (a, b) -> a.compareToIgnoreCase(b);
	print(function.applyAsInt("Java8", "JAVA8"));
	
	function = String :: compareToIgnoreCase;
	print(function.applyAsInt("Java8", "JAVA8"));
}

public static void print(int order) {
	if(order<0) { System.out.println("사전순으로 먼저 옵니다."); }
	else if(order == 0) { System.out.println("동일한 문자열입니다."); }
	else { System.out.println("사전순으로 나중에 옵니다."); }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    Function<String, LambdaMember> function1 = LambdaMember :: new;
    LambdaMember member1 = function1.apply("angel");

    BiFunction<String, String, LambdaMember> function2 = LambdaMember :: new;
    LambdaMember member2 = function2.apply("천사", "angel");
}

public class LambdaMember {
    private String name;
    private String id;

    public LambdaMember() {
        System.out.println("Member() 실행");
    }
    public LambdaMember(String id) {
        System.out.println("Member(String id) 실행");
        this.id = id;
    }
    public LambdaMember(String name, String id) {
        System.out.println("Member(String name, String id)");
        this.name = name;
        this.id = id;
    }

    public String getId() { return id; }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_01_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.function.DoubleUnaryOperator;
public class methodRefEx {
    public static void main(String[]args) {
        DoubleUnaryOperator oper;
        oper = (n) -> Math.abs(n);  // 람다 표현식
        System.out.println(oper.applyAsDouble(-5));
        oper = Math::abs; // 메소드 참조 표현식
        System.out.println(oper.applyAsDouble(-5));
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
            08. 람다와 스트림 / 입력과 출력
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            01. 함수형 프로그래밍
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle2>자바에서의 함수형프로그래밍</ClassContentsTitle2>
        <ClassContentsText>
          - 자바는 <b>Java 8 버전</b>부터 함수형 프로그래밍을 지원하기 위해{" "}
          <b>람다(Lambda)와 스트림(Stream)</b>이 도입
          <br />-{" "}
          <b>
            람다와 스트림을 사용하면 요즘 유행하는 함수형 프로그래밍 스타일로
            자바 코드를 작성
          </b>
          <br />
          <br />
          물론 람다와 스트림을 사용하여 작성한 코드를 일반 스타일의 자바코드로
          바꾸어 작성하는 것이 불가능하지는 않다. 달리 말하면 람다와 스트림
          없이도 자바 코드를 작성하는데 어려움이 없다는 뜻이다. 하지만 그럼에도
          불구하고 람다와 스트림을 사용하는 이유는 작성하는 코드의 양이 줄어들고
          읽기 쉬운 코드를 만드는데 유리하기 때문이다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>함수형 프로그래밍과 람다식</ClassContentsTitle2>
        <ClassContentsText>
          - 함수형 프로그래밍은 하나의 프로그래밍 패러다임으로 정의되는 일련의
          코딩 접근 방식이며, 
          <b>
            <u>
              자료처리를 수학적 함수의 계산으로 취급하고 상태와 가변 데이터를
              멀리하는 프로그래밍 패러다임
            </u>
          </b>
          을 의미
          <br />
          <br />
          함수형 프로그래밍 언어로 설계된 
          <b>
            <font color="red">클로저,스칼라,하스켈</font>
          </b>
           등의 언어가 있고, 
          <b>
            <font color="red">자바스크립트, 코틀린, 파이썬</font>
          </b>
           등에도 최근 버전에 함수형 프로그래밍 문법이 추가 되었다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>함수형 프로그래밍의 정의</ClassContentsTitle2>
        <ClassContentsText>
          1. <b>불변성(Immutability)</b> : 함수형 프로그래밍에서 데이터는 변경할
          수 없는(immutable) 것으로 취급됩니다. 데이터를 변경하고 싶을 때는,
          변경 사항을 적용한 새로운 데이터 복사본을 생성합니다. 이는 프로그램의
          상태를 더 쉽게 추적할 수 있게 해줍니다.
          <br />
          2. <b>함수의 일급 객체(First-Class and Higher-Order Functions)</b> :
          함수는 "일급 객체"로 취급됩니다. 이는 함수를 변수에 할당할 수 있으며,
          다른 함수의 인자로 전달하거나,{" "}
          <b>함수로부터 반환값을 받을 수 있음을 의미</b>합니다. 더 나아가,
          함수는 다른 함수를 생성하고 반환할 수 있는 "고차 함수(Higher-Order
          Functions)"로 작용할 수 있습니다.
          <br />
          3. <b>순수 함수(Pure Functions)</b> : 순수 함수는 동일한 인자에 대해
          항상 동일한 결과를 반환하며, 외부 상태를 변경하지 않고, 외부 상태에
          의존하지 않는 함수를 말합니다. 순수 함수의 사용은 프로그램의 사이드
          이펙트를 줄이고, 코드의 테스트와 재사용을 용이하게 합니다.
          <br />
          4. <b>함수 조합(Function Composition)</b> : 함수 조합은{" "}
          <b>여러 함수를 하나의 연산으로 결합</b>하는 것을 의미합니다. 이를 통해
          복잡한 처리를 간결하고 명확한 코드로 표현할 수 있습니다.
          <br />
          5. <b>재귀(Recursion)</b> : 함수형 프로그래밍에서는 반복문 대신 재귀를
          사용하여 반복적인 처리를 구현합니다. 재귀는 함수가 자기 자신을
          호출하는 것을 의미하며, 이를 통해 코드의 가독성을 높일 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>람다(Lambda)</ClassContentsTitle1>
        <ClassContentsText>
          자바 8부터 도입된 기능으로, 간단한 익명 함수를 생성하기 위한 방법을
          제공합니다.{" "}
          <b>
            람다 표현식은 주로 함수형 프로그래밍 스타일을 지원하며, 컬렉션
            처리나 멀티스레딩과 같은 상황에서 유용하게 활용
          </b>
          됩니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>람다 표현식 작성</ClassContentsTitle2>
        <ClassContentsText>
          자바에서는{" "}
          <b>
            <font color="red">
              화살표 (→)기호를 사용하여 람다 표현식을 작성
            </font>
          </b>
          할 수 있습니다.
          <ClassContentsCodeBox>
            👉 {`(매개변수목록)->{실행문;}`}
          </ClassContentsCodeBox>
          - 매개변수의 타입을 추론할 수 있는 경우에는 타입을 생략 할 수
          있습니다.
          <br />- 매개변수가 하나인 경우에는 괄호()를 생략 할 수 있습니다.
          <br />- 함수의 몸체가 하나의 명령문만으로 이루어진 경우에는 중괄호{}를
          생략 할 수 있습니다.
          <Java_08_01_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>람다식 문법 살펴보기</ClassContentsTitle2>
        <ClassContentsTitle3>
          매개변수 자료형과 괄호 생략하기
        </ClassContentsTitle3>
        <ClassContentsText>
          매개변수가 하나인 경우에는 괄호를 생략 할 수 있습니다.
          <Java_08_01_Code02 />
        </ClassContentsText>
        <ClassContentsTitle3>중괄호 생략하기</ClassContentsTitle3>
        <ClassContentsText>
          중괄호 안의 구현 부분이 한 문장인 경우 중괄호 생략 할 수 있습니다.
          <Java_08_01_Code03 />
        </ClassContentsText>
        <ClassContentsTitle3>return 생략하기</ClassContentsTitle3>
        <ClassContentsText>
          중괄호 안의 두현 부분이 return문 하나라면{" "}
          <b>중괄호와 return을 모두 생략</b>하고 식만 씁니다.
          <Java_08_01_Code04 />
        </ClassContentsText>
        <ClassContentsTitle3>일회용 스레드 사용</ClassContentsTitle3>
        <Java_08_01_Code05 />
        <br />
        <ClassContentsTitle2>
          함수형 인터페이스(functional interface)
        </ClassContentsTitle2>
        <ClassContentsText>
          -{" "}
          <b>
            람다식은 메소드 이름이 없고 메소드를 실행하는데 필요한 매개변수와
            매개변수를 활용한 실행 코드를 구현하는 것
          </b>
          <br />- 함수형 언어에서는 함수만 따로 호출 할 수 있지만, 자바는 참조
          변수없이 메소드를 호출 할 수 없습니다. 그러므로
          <b>
            람다식을 구현하기 함수형 인터페이스를 만들고, 인터페이스에
            람다식으로 구현할 인터페이스를 선언
          </b>
          <br />
          <br />
          람다 표현식을 사용할 때는 람다 표현식을 저장하기 위한{" "}
          <b>참조 변수의 타입을 결정</b>해야만 합니다.
          <br />
          <ClassContentsCode>
            참조변수의타입 참조변수의이름 = 람다표현식
          </ClassContentsCode>
          <br />
          위의 문법처럼 람다표현식을 하나의 변수에 대입할 때 사용하는 참조
          변수의 타입을 함수형 인터페이스 라고 부릅니다.
          <br />
          함수형 인터페이스는 추상 클래스와 달리 <b>단 하나의 추상 메소드</b>
          만을 가져야 합니다.
          <br />
          또한, 다음과 같은{" "}
          <b>어노테이션을 사용하여 함수형 인터페이스임을 명시</b>할 수 있습니다.
          <br />
          <ClassContentsCode>@FunctionalInterface</ClassContentsCode>
          <br />
          위와 같은 어노테이션을 인터페이스의 선언 앞에 붙이면, 컴파일러는 해당
          인터페이스를 함수형 인터페이스로 인식 합니다. 자바 컴파일러는 이렇게{" "}
          <b>
            명시된 함수형 인터페이스에 두 개 이상의 메소드가 선언되면 오류를
            발생
          </b>
          시킵니다.
        </ClassContentsText>
        <ClassContentsTitle3>객체지향 코드</ClassContentsTitle3>
        <Java_08_01_Code06 />
        <ClassContentsTitle3>람다를 적용한 코드</ClassContentsTitle3>
        <Java_08_01_Code07 />
        <br />
        <ClassContentsTitle2>매개변수가 있는 람다식</ClassContentsTitle2>
        <ClassContentsText>
          <ClassContentsCode>
            {`MyFuncInterface fi = (x) -> { …}`}
          </ClassContentsCode>
          <Java_08_01_Code08 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>리턴값이 있는 람다식</ClassContentsTitle2>
        <ClassContentsText>
          <ClassContentsCode>
            {`MyFuncInterface fi = (x, y) → x < y ? x : y; `}
          </ClassContentsCode>
          <Java_08_01_Code09 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>메서드 참조(method reference)</ClassContentsTitle2>
        <ClassContentsText>
          - 메서드 참조(method reference)는 메소드를 참조해서 매개 변수의 정보
          및 리턴 타입을 알아 내어, 불 필요한 매개 변수를 제거하는 것이 목적
          <br />- 메서드 참조는 기본적으로 메서드 이름을 직접 참조하여, 마치
          람다 표현식처럼 사용할 수 있는 기능
        </ClassContentsText>
        <ClassContentsTitle3>
          정적 메소드와 인스턴스 메소드 참조
        </ClassContentsTitle3>
        <ClassContentsText>
          <font color="red">
            <b>
              - 클래스 :: 메소드
              <br />- 참조변수 :: 메소드
            </b>
          </font>
          <Java_08_01_Code10 />-{" "}
          <ClassContentsCode>applyAsInt</ClassContentsCode>는 함수형
          인터페이스에서 입력값을 받아 int 결과를 반환하는 메서드 (기본형 특화
          함수형인터페이스)
        </ClassContentsText>
        <ClassContentsTitle3>매개 변수의 메소드 참조</ClassContentsTitle3>
        <ClassContentsText>
          -{" "}
          <ClassContentsCode>{`ToIntBiFunction<String, String>`}</ClassContentsCode>{" "}
          : 두개의 문자열을 입력 받고 int 값을 리턴
          <br />- <ClassContentsCode>compareToIgnoreCase()</ClassContentsCode> :
          두 문자열을 대소문자와 상관없이 동일한 알파벳으로 구성되어 있는지 비교
          <Java_08_01_Code11 />
        </ClassContentsText>
        <ClassContentsTitle3>생성자 참조</ClassContentsTitle3>
        <ClassContentsText>
          메소드 참조는 생성자 참조를 포함 합니다.
          <Java_08_01_Code12 />
          <br />
          <font color="#2c79c1">
            <i>
              <b>
                DoubleUnaryOperator 인터페이스는 한 개의 double 형 매개변수를
                전달받아 한 개의 double 형 값을 반환하는 java.util.function
                패키지에서 제공하는 함수형 인터페이스입니다.
              </b>
            </i>
          </font>
          <br />
          <br />
          <font color="red">
            <b>Math::abs</b>
          </font>
          ← 메소드 참조
          <Java_08_01_Code13 />
        </ClassContentsText>
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
export default Java_08_01_M;
