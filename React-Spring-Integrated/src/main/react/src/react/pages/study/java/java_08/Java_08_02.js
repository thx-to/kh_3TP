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
import Java_08_02_M from "./Java_08_02_M";

const Java_08_02 = () => {
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
    navigate("/study/java/08/02");
    window.location.reload();
  };

  const Java_08_02_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Integer[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
List<Integer> list = Arrays.asList(arr);

list.stream()
    .filter(n -> n >= 5) // 중간 연산: 필터링
    .forEach(System.out::println); // 최종 연산: 출력
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int[] arr = {1,2,3,4,5};
for(int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
// 스트림 생성, 요소를 하나씩 꺼내서 출력하는 기능
Arrays.stream(arr).forEach(n -> System.out.println(n));
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
  Integer[] arr = {1,2,3,4,5,6,7,8,9,10};
  List<Integer> sList = new ArrayList<>(Arrays.asList(arr));

  int sumVal = sList.stream().mapToInt(e ->e).sum();
	//int sumVal = sList.stream().reduce(0, Integer::sum);
  int count = (int) sList.stream().count();

  System.out.println("합계 : " + sumVal);
  System.out.println("횟수 : " + count);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
 public static void main(String[] args) {
        List<String> list = Arrays.asList(
          "나희도", "고유림", "백이진", "구자경", "우영우"
        );
        // 순차 처리
        Stream<String> stream = list.stream();
        stream.forEach(Main :: print);
        System.out.println();

        // 병렬 처리
        Stream<String> parallelStream = list.parallelStream();
        parallelStream.forEach(Main :: print);
        System.out.println();
    }

    public static void print(String str) {
        System.out.println(str + " : " + Thread.currentThread().getName());
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
        List<Student> stList = Arrays.asList(
                new Student("우영우", 99),
                new Student("최수연", 96),
                new Student("권민우", 92)
        );
        double average = list.stream() // 스트림 생성
                .mapToInt(Student::getScore) // 메소드 참조, 중간 연산
                .average() // 중간 연산
                .orElse(0.0); // 만약 스트림이 비어 있으면 0.0으로 반환

        System.out.println("평균 점수 : " + avg);
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
List<Integer> list = Arrays.asList(1,2,3,4,5);
Stream<Integer> stream = list.stream();
stream.forEach(System.out::println);
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    String[] arr = {"고유림", "나희도", "백이진", "구자경", "우영우"};
    // 배열에서 스트림 생성
    Stream<String> stream1 = Arrays.stream(arr);
    stream1.forEach(e -> System.out.print(e + " "));
    System.out.println();

    // 배열의 특정 부분만을 이용한 스트림 생성
    Stream<String> stream2 = Arrays.stream(arr, 1, 3);
    stream2.forEach(e -> System.out.print(e + " "));
    System.out.println();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    IntStream stream = IntStream.rangeClosed(1, 100); // 1 ~ 100까지로 구성된 정수 스트림 생성
    System.out.println("함계 : " + stream.sum());
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Path path = Paths.get("data.txt");
try (Stream<String> fileStream = Files.lines(path)) {
    fileStream.forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
IntStream.of(1, 2, 3, 4, 5)
         .filter(n -> n % 2 == 0)
         .forEach(System.out::println); // 출력: 2, 4
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Stream.of("java", "stream")
      .map(String::toUpperCase)
      .forEach(System.out::println); // 출력: JAVA, STREAM
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
String[] phrases = {"Hello World", "Java Stream"};
Stream.of(phrases)
      .flatMap(phrase -> Stream.of(phrase.split(" ")))
      .forEach(System.out::println); // 출력: Hello, World, Java, Stream
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Stream.of(5, 3, 1, 4, 2)
      .sorted()
      .forEach(System.out::println); // 출력: 1, 2, 3, 4, 5
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
IntStream.range(1, 10)
         .skip(5)
         .forEach(System.out::println); // 출력: 6, 7, 8, 9
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Stream.of("A", "B", "C").forEach(System.out::println);
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
int sum = IntStream.of(1, 2, 3, 4, 5).reduce(0, Integer::sum);
System.out.println("합계: " + sum); // 출력: 합계: 15
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
OptionalInt first = IntStream.of(4, 2, 7, 1).sorted().findFirst();
first.ifPresent(System.out::println); // 출력: 1
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
boolean anyMatch = Stream.of("apple", "banana", "cherry").anyMatch(s -> s.startsWith("a"));
System.out.println(anyMatch); // 출력: true
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class TravelCustomer {
    private String name;
    private int age;
    private int price;

    public TravelCustomer(String name, int age, int price) {
        this.name = name;
        this.age = age;
        this.price = price;
    }

    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
    public int getPrice() {
        return price;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_02_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    TravelCustomer customerA = new TravelCustomer("안유진", 21, 100);
    TravelCustomer customerY = new TravelCustomer("유나", 21, 100);
    TravelCustomer customerJ = new TravelCustomer("지수", 24, 80);
    List<TravelCustomer> customerList = new ArrayList<>();
    customerList.add(customerA);
    customerList.add(customerY);
    customerList.add(customerJ);
    customerList.add(new TravelCustomer("민지", 18, 90));
    System.out.println("고객 명단 순서대로 출력");
		// map을 이용해 고객 이름 가져오고 이를 순회하면서 출력
    customerList.stream().map(c -> c.getName()).forEach(s -> System.out.println(s));
		// 고객이 지불한 금액을 가져오기 위해 mapToInt를 이용해 정수 변환
    int total = customerList.stream().mapToInt(c -> c.getPrice()).sum();
    System.out.println("총 여행 비용 : " + total);

    System.out.println("== 20세 이상 명단 출력 ==");
    customerList.stream()
            .filter(c -> c.getAge() >= 20)
            .map(c -> c.getName())
            .sorted() // 중간 연산
						.forEach(s -> System.out.println(s));  // 최종 연산
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_08_02_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleStudy()}>study</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>Java</TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleStudyJava()}>
                08. 람다와 스트림 / 입력과 출력
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                02. 스트림
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <Java_Title />
              <StickyClassBox>
                <Java_ClassList_Filtered chapter="08" />
              </StickyClassBox>
            </LeftContainer>
            <RightContainer>
              <EachClass>
                <ClassHeader>
                  <ClassHeaderTitle>스트림</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>스트림이란?</ClassContentsTitle2>
                  <ClassContentsText>
                    <b>스트림은 자바 8부터 추가된 기능</b>으로, 배열이나
                    컬렉션의 데이터를 일관성 있게 처리할 수 있게 해줍니다.
                    스트림을 사용하면{" "}
                    <b>
                      배열, 컬렉션 등의 자료를 반복문 없이 람다식을 이용해
                      간결하고 일관된 방식으로 처리
                    </b>
                    할 수 있습니다. 스트림은 데이터 소스를 변경하지 않고,{" "}
                    <b>
                      내부 반복자를 사용해 성능을 최적화하며, 단 한 번만 사용
                    </b>
                    할 수 있습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림 API의 특징</ClassContentsTitle2>
                  <ClassContentsText>
                    1. <b>일관된 연산</b> : 자료의 대상과 관계없이 동일한 연산을
                    수행합니다.
                    <br />
                    2. <b>내부 반복</b> : 외부 반복이 아닌 내부 반복을 사용하여
                    작업을 수행합니다.
                    <br />
                    3. <b>단일 사용</b> : 스트림은 한 번만 사용할 수 있습니다.
                    <br />
                    4. <b>원본 데이터 불변</b> : 스트림 연산은 원본 데이터를
                    변경하지 않습니다.
                    <br />
                    5. <b>지연 연산</b> : 중간 연산은 지연(lazy)되어 최종 연산이
                    호출될 때 수행됩니다.
                    <br />
                    6. <b>병렬 처리 지원</b> :{" "}
                    <ClassContentsCode>parallelStream()</ClassContentsCode>{" "}
                    메서드를 사용하여 병렬 처리를 쉽게 수행할 수 있습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    스트림 API의 동작 흐름
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    1. <b>스트림 생성</b> :{" "}
                    <ClassContentsCode>stream()</ClassContentsCode>,{" "}
                    <ClassContentsCode>Arrays.stream()</ClassContentsCode>,{" "}
                    <ClassContentsCode>Stream.of()</ClassContentsCode> 등을
                    사용해 스트림을 생성합니다.
                    <br />
                    2. <b>중간 연산</b> : 스트림을 변환하는 연산으로, 필터링,
                    매핑, 정렬 등을 수행합니다. (
                    <ClassContentsCode>filter()</ClassContentsCode>,{" "}
                    <ClassContentsCode>map()</ClassContentsCode>,{" "}
                    <ClassContentsCode>sorted()</ClassContentsCode> 등)
                    <br />
                    3. <b>종단 연산</b> : 스트림의 요소를 최종 처리하는
                    연산으로, 요소의 집계, 반복 등의 작업을 수행합니다. (
                    <ClassContentsCode>forEach()</ClassContentsCode>,{" "}
                    <ClassContentsCode>collect()</ClassContentsCode>,{" "}
                    <ClassContentsCode>reduce()</ClassContentsCode>
                    등)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      스트림 생성, 중간 연산, 최종 연산 예시
                    </font>
                  </ClassContentsTitle3>
                  <Java_08_02_Code01 />
                  <ClassContentsTitle3>
                    <font color="black">배열과 스트림 비교</font>
                  </ClassContentsTitle3>
                  <Java_08_02_Code02 />
                  <ClassContentsTitle3>
                    <font color="black">스트림 생성하고 사용하기</font>
                  </ClassContentsTitle3>
                  <Java_08_02_Code03 />
                  <ClassContentsTitle3>
                    <font color="black">내부 반복자를 사용하는 병렬 처리</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    내부 반복자는 요소들의 반복 순서를 변경하거나,{" "}
                    <b>
                      멀티 코어 CPU를 최대한 활용하기 위해 요소들을 분배 시켜
                      병렬 처리
                    </b>
                    를 할 수 있게 도와준다.
                    <Java_08_02_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      스트림을 통한 중간 처리와 최종 처리 예시
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    스트림은 컬렉션의 요소에 대해 중간 처리와 최종 처리를 수행
                    할 수 있는데, 중간 처리에서는 매핑, 필터링, 정렬을 수행하고
                    최종 처리에서는 반복, 카운팅, 평균, 총합 등의 집계 처리를
                    수행 합니다.
                    <Java_08_02_Code05 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림 생성 방법</ClassContentsTitle2>
                  <ClassContentsTitle3>
                    <font color="black">컬렉션으로부터 스트림 얻기</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    자바에서 제공하는 모든 컬렉션의 최고 상위 조상인 Collection
                    인터페이스에는 stream() 메소드 정의 되어 있습니다.
                    <Java_08_02_Code06 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">배열로부터 스트림 얻기</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    배열에 관한 스트림을 생성하기 위해 Arrays 클래스에는 다양한
                    형태의 stream() 메소드가 클래스 메소드로 정의 되어 있습니다.
                    <Java_08_02_Code07 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">숫자 범위로부터 스트림 얻기</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    1부터 100까지의 합을 구하기 위해 IntStream의 rangeClosed()
                    메소드를 이용
                    <Java_08_02_Code08 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">파일로부터 스트림 얻기</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    Files의 정적 메소드인 lines()와 BufferedReader의 Line()
                    메소드를 이용하여 문자 파일의 내용을 스트림을 통해 행 단위로
                    읽고 콘솔에 출력 합니다.
                    <Java_08_02_Code09 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림 파이프라인</ClassContentsTitle2>
                  <ClassContentsText>
                    대량의 데이터를 가공해서 축소하는 것을 일반적으로
                    리덕션이라고 하는데, 데이터의 합계, 평균값, 카운팅, 최대값,
                    최소값 등이 대표적인 리덕션의 결과물 입니다. 그러나 컬렉션의
                    결과물로 바로 집계할 수 없을 경우에는 집계하기 좋도록
                    필터링, 매핑 정렬, 그룹핑 등의 중간 처리가 필요 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_02_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림의 중간 연산</ClassContentsTitle2>
                  <ClassContentsText>
                    스트림 API에 의해 생성된 초기 스트림은 중개 연산을 통해 또
                    다른 스트림으로 변환 됩니다.
                    <br />
                    이러한 중개 연산은 스트림을 전달받아 스트림을 반환하므로,
                    중개 연산은 연속으로 연결해서 사용할 수 있습니다.
                    <br />
                    또한, 스트림의 중개 연산은 필터-맵(filter-map) 기반의 API를
                    사용함으로 지연(lazy) 연산을 통해 성능을 최적화할 수
                    있습니다.
                    <br />
                    스트림 API에서 사용할 수 있는 대표적인 중개 연산과 그에 따른
                    메소드는 다음과 같습니다.
                    <br />
                    <ClassContentsTextTab>
                      1. 스트림 필터링 :{" "}
                      <font color="red">
                        <b>filter(), distinct()</b>
                      </font>
                      <br />
                      2. 스트림 변환 :{" "}
                      <font color="red">
                        <b>map(), flatMap()</b>
                      </font>
                      <br />
                      3. 스트림 제한 :{" "}
                      <font color="red">
                        <b>limit(), skip()</b>
                      </font>
                      <br />
                      4. 스트림 정렬 :{" "}
                      <font color="red">
                        <b>sorted()</b>
                      </font>
                      <br />
                      5. 스트림 연산 결과 확인 :{" "}
                      <font color="red">
                        <b>peek()</b>
                      </font>{" "}
                      - 메소드를 루핑 하지만 중간 처리 메소드 입니다.
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      <ClassContentsCode>map()</ClassContentsCode> vs{" "}
                      <ClassContentsCode>flatMap()</ClassContentsCode> 차이
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>특징</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <ClassContentsCode>map()</ClassContentsCode>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <ClassContentsCode>flatMap()</ClassContentsCode>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            <b>변환 방식</b>
                          </ClassTableTd>
                          <ClassTableTd>
                            입력 스트림의 각 요소를 변환하여 <b>새로운 값</b>
                            으로 매핑
                          </ClassTableTd>
                          <ClassTableTd>
                            각 요소를 <b>여러 </b>값 혹은 <b>스트림</b>으로
                            변환하고 병합
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            <b>출력 구조</b>
                          </ClassTableTd>
                          <ClassTableTd>변환된 값들의 스트림</ClassTableTd>
                          <ClassTableTd>
                            평탄화된 하나의 단일 스트림
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            <b>1:1 또는 N:1</b>
                          </ClassTableTd>
                          <ClassTableTd>1:1 매핑</ClassTableTd>
                          <ClassTableTd>1또는 N:1 매핑</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            <b>예시</b>
                          </ClassTableTd>
                          <ClassTableTd>
                            문자열을 그 길이로 매핑 (
                            <ClassContentsCode>String</ClassContentsCode> {`->`}
                            <ClassContentsCode>Integer</ClassContentsCode>)
                          </ClassTableTd>
                          <ClassTableTd>
                            문자열을 단어 리스트로 매핑 (
                            <ClassContentsCode>String</ClassContentsCode> {`->`}{" "}
                            <ClassContentsCode>{`List<String>`}</ClassContentsCode>
                            )
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      필터링 (<ClassContentsCode>filter()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    특정 조건에 맞는 요소만 필터링합니다.
                    <Java_08_02_Code10 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      변환 (<ClassContentsCode>map()</ClassContentsCode>,{" "}
                      <ClassContentsCode>flatMap()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    각 요소를 다른 값으로 변환합니다.
                    <br />
                    <br />
                    <b>map()</b>
                    <Java_08_02_Code11 />
                    <br />
                    <b>flatMap()</b>
                    <Java_08_02_Code12 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      정렬 (<ClassContentsCode>sorted()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    요소를 정렬합니다.
                    <Java_08_02_Code13 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      제한 (<ClassContentsCode>limit()</ClassContentsCode>,{" "}
                      <ClassContentsCode>skip()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    스트림의 요소 수를 제한하거나 일부를 건너뜁니다.
                    <Java_08_02_Code14 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림의 최종 연산</ClassContentsTitle2>
                  <ClassContentsText>
                    스트림 API에서 중개 연산을 통해 변환된 스트림은 마지막으로
                    최종 연산을 통해 각 요소를 소모하여 결과를 표시합니다.
                    <br />
                    즉, 지연(lazy)되었던 모든 중개 연산들이 최종 연산 시에 모두
                    수행되는 것입니다.
                    <br />
                    이렇게 최종 연산 시에 모든 요소를 소모한 해당 스트림은 더는
                    사용할 수 없게 됩니다.
                    <br />
                    스트림 API에서 사용할 수 있는 대표적인 최종 연산과 그에 따른
                    메소드는 다음과 같습니다.
                    <br />
                    <br />- 요소의 출력 :{" "}
                    <font color="red">
                      <b>forEach()</b>
                    </font>
                    <br />
                    요소의 소모 :{" "}
                    <font color="red">
                      <b>reduce()</b>
                    </font>
                    <br />
                    요소의 검색 :{" "}
                    <font color="red">
                      <b>findFirst(), findAny()</b>
                    </font>
                    <br />
                    요소의 검사 :{" "}
                    <font color="red">
                      <b>anyMatch(), allMatch(), noneMatch()</b>
                    </font>
                    <br />
                    요소의 통계 :{" "}
                    <font color="red">
                      <b>count(), min(), max()</b>
                    </font>
                    <br />
                    요소의 연산 :{" "}
                    <font color="red">
                      <b>sum(), average()</b>
                    </font>
                    <br />
                    요소의 수집 :{" "}
                    <font color="red">
                      <b>collect()</b>
                    </font>
                    , Collector 타입의 인자를 받아서 처리(Collector 제공)
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      반복 (<ClassContentsCode>forEach()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    스트림의 각 요소를 처리합니다.
                    <Java_08_02_Code15 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      집계 (<ClassContentsCode>reduce()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    스트림의 모든 요소를 결합하여 결과를 도출합니다.
                    <Java_08_02_Code16 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      검색 (<ClassContentsCode>findFirst()</ClassContentsCode>,{" "}
                      <ClassContentsCode>findAny()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    스트림의 첫 번째 또는 임의의 요소를 반환합니다.
                    <Java_08_02_Code17 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">
                      검사 (<ClassContentsCode>anyMatch()</ClassContentsCode>,{" "}
                      <ClassContentsCode>allMatch()</ClassContentsCode>,{" "}
                      <ClassContentsCode>noneMatch()</ClassContentsCode>)
                    </font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    특정 조건을 만족하는 요소가 있는지 검사합니다.
                    <Java_08_02_Code18 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림 활용 예시</ClassContentsTitle2>
                  <ClassContentsText>
                    <b>
                      스트림에서 제공되는 메소드를 이용해 조건문과 반복문 없이
                      일관된 방식으로 처리
                    </b>
                    할 수 있습니다.
                    <Java_08_02_Code19 />
                    <Java_08_02_Code20 />
                    <ClassContentsCodeBox>
                      👉{" "}
                      {`Java8에서는 Optional<T> 클래스를 사용해 NPE를 방지할 수 있도록 도와  줍니다.  Optinal<T>는 null이 올 수 있는 값을 감싸는 Wrapper 클래스로, 참조하더라도 NPE가 발생하지 않도록 도와 줍니다. Optional 클래스는 아래와 같은 value에 값을 저장하기 때문에 값이 null이더라도 바로 NPE가 발생하지 않으며, 클래스이기 때문에 각종 메소드를 제공해 줍니다.`}
                    </ClassContentsCodeBox>
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
export default Java_08_02;
