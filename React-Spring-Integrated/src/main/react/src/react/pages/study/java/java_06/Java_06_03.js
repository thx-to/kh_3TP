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
import Java_06_03_M from "./Java_06_03_M";

const Java_06_03 = () => {
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
    navigate("/study/java/06/03");
    window.location.reload();
  };

  const Java_06_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
List list new ArrayList();
list.add("우영우");
Object obj = list.get(0);
String name = (String) obj;
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
list<String> list = new ArrayList<String>();
list.add("우영우");
String name = list.get(0);
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // ArrayList 선언
        ArrayList<String> fruits = new ArrayList<>();

        // 요소 추가
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // ArrayList 출력
        System.out.println("Fruits: " + fruits);

        // 특정 인덱스에 요소 추가
        fruits.add(1, "Grapes");
        System.out.println("After adding Grapes: " + fruits);

        // 요소 가져오기 (인덱스로 접근)
        String firstFruit = fruits.get(0);
        System.out.println("First fruit: " + firstFruit);

        // 요소 제거 (인덱스로 제거)
        fruits.remove(2);
        System.out.println("After removing third element: " + fruits);

        // ArrayList 크기
        int size = fruits.size();
        System.out.println("Number of fruits: " + size);

        // 전체 요소 반복하기
        System.out.println("All fruits:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
fruits.add(0, "Watermelon");
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(fruits.get(1));
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(fruits.size());
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(fruits.contains("Banana"));
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(fruits.remove("Peach"));
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(fruits.remove(0));
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    ArrayList<String> person= new ArrayList();
    person.add("안유진");
    person.add("장원영");
    person.add("이서");
    System.out.println(person);
    String one = person.get(0);  // 형 변환이 필요없다.
    String two = person.get(1);  // 형 변환이 필요없다.

    System.out.printf("%s %s\n", one, two);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    String[] data = {"138", "129", "142"};
    ArrayList<String> pitches = new ArrayList<>(Arrays.asList(data));
    System.out.println(pitches);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    String[] data = {"138", "129", "142"};
    ArrayList<String> pitches = new ArrayList<>(Arrays.asList(data));
    String result = String.join(",", pitches);
    System.out.println(result);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

public class List {
    public static void main(String[] args) {
        ArrayList<String> pitches = new ArrayList<>(Arrays.asList("138", "129", "142"));
        pitches.sort(Comparator.naturalOrder());  // 오름차순으로 정렬
        System.out.println(pitches);  // [129, 138, 142] 출력
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package List인터페이스;

import java.util.ArrayList;
import java.util.List;

public class ListMain {
    public static void main(String[] args) {
        List<MenuInfo> menuList = new ArrayList<>();
        menuList.add(new MenuInfo("Americano", 2500, "Coffee", "그냥 커피", true));
        menuList.add(new MenuInfo("Latte", 4000, "Coffee", "우유 커피", true));
        menuList.add(new MenuInfo("Moca", 5000, "Coffee", "달달한 커피", true));

        for(MenuInfo menuInfo : menuList) {
            System.out.println(menuInfo);
        }

    }
}

class MenuInfo {
    String name;
    int price;
    String category;
    String desc;
    boolean isTax;

    public MenuInfo(String name, int price, String category, String desc, boolean isTax) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.desc = desc;
        this.isTax = isTax;
    }
    @Override
    public String toString() {
        return "이름 : " + name + "\n" + "가격 : " + price + "\n" + "분류 : " + category + "\n"
                + "설명 : " + desc + "\n" + "세금 : " + isTax + "\n";
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 어레이홀짝;
public class ArrayListEx1 {
    public static void main(String[] args) {
        ArrayMethod arrayMethod = new ArrayMethod();
        arrayMethod.inputValue();
        arrayMethod.calcMethod();
        arrayMethod.printMethod();
    }
}

package 어레이홀짝;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
public class ArrayMethod {
    List<Integer> inList = new ArrayList<>();
    List<Integer> oddList = new ArrayList<>();
    List<Integer> evenList = new ArrayList<>();
    // 정수값 입력 받는 메소드
    void inputValue() {
        int tmp = 0;
        Scanner sc = new Scanner(System.in);
        System.out.print("정수 입력 : ");
        while(true) {
            tmp = sc.nextInt();
            if(tmp == 999) break;
            inList.add(tmp);
        }
    }
    void calcMethod() {
        for(Integer e : inList) {
            if(e % 2 == 0) evenList.add(e);
            else oddList.add(e);
        }
    }
    void printMethod() {
        System.out.print("홀수 : ");
        for(Integer e : oddList) System.out.print(e + " ");
        System.out.println();
        System.out.print("짝수 : ");
        for(Integer e : evenList) System.out.print(e + " ");
        System.out.println();
    }


}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 벡터연습;
import java.util.List;
import java.util.Vector;

public class VectorMain {
    public static void main(String[] args) {
        List<NameCard> list = new Vector<>();
        list.add(new NameCard("우영우", "yyy@gmail.com", "010-1234-5678", "변호사"));
        list.add(new NameCard("동그라마", "ddd@gmail.com", "010-1234-5678", "무직"));
        list.add(new NameCard("이준호", "ljh@gmail.com", "010-1234-5678", "회사원"));

        for(NameCard e : list) {
            System.out.println("이름 : " + e.name);
            System.out.println("메일 : " + e.mail);
            System.out.println("전화 : " + e.phone);
            System.out.println("직업 : " + e.jobs);
        }
    }
}

class NameCard {
    String name;
    String mail;
    String phone;
    String jobs;

    public NameCard(String name, String mail, String phone, String task) {
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.jobs = task;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
// String을 사용하여 생성
BigDecimal bd1 = new BigDecimal("123.45");

// 정밀한 값을 원할 때는 String을 사용
BigDecimal bd4 = BigDecimal.valueOf(123.45);  // 정확함
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
BigDecimal bd1 = new BigDecimal("10.50");
BigDecimal bd2 = new BigDecimal("2.30");

// 덧셈 (add)
BigDecimal sum = bd1.add(bd2);  // 10.50 + 2.30 = 12.80

// 뺄셈 (subtract)
BigDecimal difference = bd1.subtract(bd2);  // 10.50 - 2.30 = 8.20

// 곱셈 (multiply)
BigDecimal product = bd1.multiply(bd2);  // 10.50 * 2.30 = 24.15

// 나눗셈 (divide)
BigDecimal quotient = bd1.divide(bd2, RoundingMode.HALF_UP);  // 반올림 적용

          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.math.RoundingMode;

BigDecimal bd1 = new BigDecimal("10.00");
BigDecimal bd2 = new BigDecimal("3");

// 무한 소수를 처리할 때 반올림 모드를 사용
BigDecimal result = bd1.divide(bd2, 2, RoundingMode.HALF_UP);  // 소수점 2자리까지 반올림
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
BigDecimal bd = new BigDecimal("123.4567");

// 스케일 확인 (소수점 이하 자리수)
int scale = bd.scale();  // 결과: 4

// 정밀도 확인 (전체 자릿수)
int precision = bd.precision();  // 결과: 7

// 스케일을 2로 설정하고 반올림
BigDecimal scaledValue = bd.setScale(2, RoundingMode.HALF_UP);  // 결과: 123.46
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code21 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println("\n==== 주문 관리 시스템 ====");
System.out.println("1. 제품 추가");
System.out.println("2. 제품 제거");
System.out.println("3. 제품 목록 보기");
System.out.println("4. 제품 보기");
System.out.println("5. 최종 가격 계산 (세금 포함)");
System.out.println("6. 종료");
System.out.print("원하는 작업을 선택하세요: ");
int choice = sc.nextInt();
sc.nextLine();  // 버퍼 비우기
          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code22 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;

public class Order {
    private final ArrayList<Product> products;
    private BigDecimal total;

    public Order() {
        products = new ArrayList<>();
        total = BigDecimal.ZERO;
    }

    public void addItem(Product product) {
        products.add(product);
        total = total.add(product.getPrice()); // 객체 타입으므로..
    }

    public Product getItem(String name) {
        for (Product product : products) {
            if (product.getName().equals(name)) {
                return product;
            }
        }
        return null;
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public boolean removeItem(String name) {
        for (Product product: products) {
            if (product.getName().equals(name)) {
                products.remove(product);
                total = total.subtract(product.getPrice());
                return true;
            }
        }
        return false;
    }

    public BigDecimal calculateFinalPrice(BigDecimal taxRate) {
        BigDecimal taxAmount = total.multiply(taxRate); // 주문 금액에 세율을 곱해 세금 금액을 계산
        BigDecimal finalPrice = total.add(taxAmount);
        return finalPrice.setScale(2, RoundingMode.HALF_UP);
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code23 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.math.BigDecimal;

public class Product {
    private final String name;
    private final BigDecimal price;

    public Product(String name, BigDecimal price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }
    public BigDecimal getPrice() {
        return price;
    }
}

          `}
        </code>
      </pre>
    );
  };

  const Java_06_03_Code24 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.math.BigDecimal;
import java.util.Scanner;

public class Driver {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Order myOrder = new Order();

        while (true) {
            System.out.println("\n==== 주문 관리 시스템 ====");
            System.out.println("1. 제품 추가");
            System.out.println("2. 제품 제거");
            System.out.println("3. 제품 목록 보기");
            System.out.println("4. 제품 보기");
            System.out.println("5. 최종 가격 계산 (세금 포함)");
            System.out.println("6. 종료");
            System.out.print("원하는 작업을 선택하세요: ");
            int choice = sc.nextInt();
            sc.nextLine();  // 버퍼 비우기

            switch (choice) {
                case 1:
                    System.out.print("제품 이름을 입력하세요: ");
                    String name = sc.nextLine();
                    System.out.print("제품 가격을 입력하세요 (예: 3.25): ");
                    BigDecimal price = sc.nextBigDecimal();
                    myOrder.addItem(new Product(name, price));
                    System.out.println(name + " 제품이 추가되었습니다.");
                    break;
                case 2:
                    System.out.print("제거할 제품 이름을 입력하세요: ");
                    String removeName = sc.nextLine();
                    if (myOrder.removeItem(removeName)) {
                        System.out.println(removeName + " 제품이 제거되었습니다.");
                    } else {
                        System.out.println("해당 이름의 제품을 찾을 수 없습니다.");
                    }
                    break;
                case 3:
                    System.out.println("==== 현재 제품 목록 ====");
                    for (Product product : myOrder.getProducts()) {
                        System.out.println(product.getName() + " - $" + product.getPrice());
                    }
                    break;
                case 4:
                    System.out.println("==== 제품 검색 ====");
                    String findName = sc.nextLine();
                    Product product = myOrder.getItem(findName);
                    if (product != null) {
                        System.out.println(product.getName() + " - $" + product.getPrice());
                    } else {
                        System.out.println("해당 이름의 제품을 찾을 수 없습니다.");
                    }
                case 5:
                    System.out.print("세율을 입력하세요 (예: 0.06 for 6%): ");
                    BigDecimal taxRate = new BigDecimal(sc.nextLine());
                    BigDecimal finalPrice = myOrder.calculateFinalPrice(taxRate);
                    System.out.println("세금이 포함된 최종 가격: $" + finalPrice);
                    break;
                case 6:
                    System.out.println("프로그램을 종료합니다.");
                    return;
                default:
                    System.out.println("잘못된 입력입니다. 다시 선택 하세요.");
            }
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
        <Java_06_03_M />
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
              <TopBoxText onClick={() => handleRefresh()}>03. List</TopBoxText>
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
                  <ClassHeaderTitle>List</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>List 인터페이스란?</ClassContentsTitle1>
                  <ClassContentsText>
                    리스트는 배열과 비슷한 자바의 자료형으로 배열보다 편리한
                    기능을 많이 가지고 있습니다.
                    <br />
                    리스트와 배열의 가장 큰 차이점은 크기가 정해져 있지 않고
                    동적으로 변한다는 점 입니다.
                    <br />
                    데이터를 크기를 알 수 없을 때 유용하게 사용할 수 있습니다.
                    <br />- 요소의 저장 순서가 유지 됩니다.
                    <br />- 같은 요소의 중복 저장을 허용 합니다.
                    <br />- 데이터 크기가 고정되어 있지 않습니다. (동적 할당)
                    <br />- 데이터를 다루기 위한 여러 방법이 제공됨
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    자바4 이전 표시 방법
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    리스트 생성 시 컴파일 타임에 객체의 타입을 확인하지
                    않습니다.
                    <Java_06_03_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    자바5 이후 표시 방법
                  </ClassContentsTitle3>
                  <Java_06_03_Code02 />
                  <ClassContentsTitle3>
                    List 컬렉션 클래스의 종류
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - ArrayList (가장 많이 사용 됩니다.)
                    <br />- LinkedList
                    <br />- Vector
                    <br />- Stack
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>ArrayList 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    개체의 배열을 구현한 클래스이며 컬렉션 인터페이스와 그
                    하위의 List 인터페이스로 구현 합니다.
                    <br />
                    객체 순서를 기반으로 순차적으로 자료를 관리하는 프로그램을
                    구현 할 때 사용 합니다.
                    <Java_06_03_Code03 />
                    <b>제네릭스</b> : 자바는 J2SE 5.0 버전 이후부터
                    <ClassContentsCode>
                       {`ArrayList<String> pitches = new ArrayList<>();`}
                    </ClassContentsCode>
                     처럼 객체를 포함하는 자료형도 어떤 객체를 포함하는지에
                    대해서 명확하게 표현할 것을 권고하고 있다.
                  </ClassContentsText>
                  <ClassContentsTitle3>특정 위치에 삽입</ClassContentsTitle3>
                  <ClassContentsText>
                    해당 컬렉션에 요소를 추가 하거나 해당 인덱스 위치에 값을
                    삽입
                    <Java_06_03_Code04 />
                  </ClassContentsText>
                  <ClassContentsTitle3>get</ClassContentsTitle3>
                  <ClassContentsText>
                    특정 위치의 값을 가져 올 때
                    <Java_06_03_Code05 />
                  </ClassContentsText>
                  <ClassContentsTitle3>size</ClassContentsTitle3>
                  <ClassContentsText>
                    ArrayList의 갯수를 리턴한다.
                    <Java_06_03_Code06 />
                  </ClassContentsText>
                  <ClassContentsTitle3>contains</ClassContentsTitle3>
                  <ClassContentsText>
                    리스트 안에 해당 항목이 있는지를 판별하여 그 결과를
                    boolean으로 리턴한다.
                    <Java_06_03_Code07 />
                  </ClassContentsText>
                  <ClassContentsTitle3>remove</ClassContentsTitle3>
                  <ClassContentsText>
                    remove(객체) : 리스트에서 객체에 해당되는 항목을 삭제하고
                    삭제한 결과(true, false)를 리턴
                    <Java_06_03_Code08 />
                    remove(인덱스) : 해당 인덱스의 항목을 삭제하고 삭제된 항목을
                    리턴
                    <Java_06_03_Code09 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    다양한 방법으로 ArrayList 만들기
                  </ClassContentsTitle2>
                  <Java_06_03_Code10 />
                  <ClassContentsTitle3>
                    이미 데이터가 존재할 경우 데이터 추가 하기
                  </ClassContentsTitle3>
                  <Java_06_03_Code11 />
                  <ClassContentsTitle3>String.join</ClassContentsTitle3>
                  <ClassContentsText>
                    콤마로 구분하여 문자열 만들기
                    <Java_06_03_Code12 />
                  </ClassContentsText>
                  <ClassContentsTitle3>리스트 정렬하기</ClassContentsTitle3>
                  <ClassContentsText>
                    - 오름차순 정렬 :{" "}
                    <ClassContentsCode>
                      Comparator.naturalOrder()
                    </ClassContentsCode>
                    <br />- 내림차순 정렬 :{" "}
                    <ClassContentsCode>
                      Comparator.reverseOrder()
                    </ClassContentsCode>
                    <br />- Comparator의 compare() 메서드롤 오버라이딩해서 정렬
                    방법을 만들 수 있습니다.
                    <Java_06_03_Code13 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    클래스를 ArrayList로 구성
                  </ClassContentsTitle3>
                  <Java_06_03_Code14 />
                  <ClassContentsTitle3>
                    홀수, 짝수 나눠 담기 (ArrayList 만들기)
                  </ClassContentsTitle3>
                  <Java_06_03_Code15 />
                  <br />
                  <ClassContentsTitle2>LinkedList 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    <font color="#2c79c1">
                      <i>사용 방법은 ArrayList와 동일 합니다.</i>
                    </font>
                    <br />
                    LinkedList 클래스는 ArrayList 클래스가 배열을 이용하여
                    요소를 저장함으로써 발생하는 단점을 극복하기 위해
                    고안되었습니다.
                    <br />
                    JDK 1.2부터 제공된 LinkedList 클래스는 내부적으로 연결
                    리스트(linked list)를 이용하여 요소를 저장합니다.
                    <br />
                    배열은 저장된 요소가 순차적으로 저장됩니다.
                    <br />
                    하지만 연결 리스트는 저장된 요소가 비순차적으로 분포되며,
                    이러한 요소들 사이를 링크(link)로 연결하여 구성합니다.
                    <br />
                    다음 요소를 가리키는 참조만을 가지는 연결 리스트를 단일 연결
                    리스트(singly linked list)라고 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_06_03_01.png"})`,
                      }}
                    />
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_06_03_02.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Vector 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    Vector는 ArrayList와 동일한 내부 구조를 가지고 있습니다.
                    (사용 방법 동일)
                    <br />
                    <ClassContentsCode>
                      {`List<E> list = new Vector<E>();`}
                    </ClassContentsCode>
                    <br />
                    ArrayList와 다른점은{" "}
                    <b>
                      동기화된(synchronized) 메소드로 구성되어 있어 멀티 쓰레드
                      환경에서 안전
                    </b>
                    하지만 ArrayList에 비해 성능은 떨어집니다.
                    <Java_06_03_Code16 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle1>ArrayList 응용 예제</ClassContentsTitle1>
                  <ClassContentsText>
                    <b>BigDecimal ?</b>
                    <br />
                    <ClassContentsTextTab>
                      - BigDecimal은 자바에서 고정소수점 및 부동 소수점 연산의
                      정확성을 요구할 때 사용되는 클래스
                      <br />- 금융 계산이나 높은 정밀도가 필요한 경우 double이나
                      float보다 더 안정하게 사용
                    </ClassContentsTextTab>
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">BigDecimal 객체 생성</font>
                  </ClassContentsTitle3>
                  <Java_06_03_Code17 />
                  <ClassContentsTitle3>
                    <font color="black">BigDecimal 기본 연산</font>
                  </ClassContentsTitle3>
                  <Java_06_03_Code18 />
                  <ClassContentsTitle3>
                    <font color="black">반올림 모드(Rounding Mode)</font>
                  </ClassContentsTitle3>
                  <Java_06_03_Code19 />
                  <ClassContentsText>
                    - <ClassContentsCode>RoundingMode.UP</ClassContentsCode> :{" "}
                    무조건 올림
                    <br />-{" "}
                    <ClassContentsCode>RoundingMode.DOWN</ClassContentsCode> :
                    무조건 내림
                    <br />-{" "}
                    <ClassContentsCode>
                      RoundingMode.HALF_UP
                    </ClassContentsCode>{" "}
                    : 소수점 중간값에서 올림
                    <br />-{" "}
                    <ClassContentsCode>
                      RoundingMode.HALF_DOWN
                    </ClassContentsCode>{" "}
                    : 소수점 중간값에서 내림
                    <br />-{" "}
                    <ClassContentsCode>
                      RoundingMode.HALF_EVEN
                    </ClassContentsCode>{" "}
                    : 가장 가까운 짝수로 반올림
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    <font color="black">스케일과 정밀도</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    BigDecimal에서 스케일(scale)은 소수점 이하 자릿수를
                    나타내며, 정밀도(precision)는 전체 자릿수를 의미
                    <Java_06_03_Code20 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    <font color="black">예제 풀어보기</font>
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <b>1. Product 클래스 생성</b>
                    <br />- <ClassContentsCode>
                      Product.java
                    </ClassContentsCode>{" "}
                    파일을 프로젝트 폴더에 추가하고{" "}
                    <ClassContentsCode>Product</ClassContentsCode> 클래스를
                    정의하세요.
                    <br />- 모든 <ClassContentsCode>
                      Product
                    </ClassContentsCode>{" "}
                    객체가 가질 멤버 변수를 정의하세요.
                    <ClassContentsTextTab>
                      · <ClassContentsCode>name</ClassContentsCode> : 제품의
                      이름을 저장하는 변수 (예시: "Apples")
                      <br />· <ClassContentsCode>price</ClassContentsCode> :
                      제품 가격을{" "}
                      <ClassContentsCode>BigDecimal</ClassContentsCode>로
                      저장하는 변수 (
                      <ClassContentsCode>float</ClassContentsCode>나{" "}
                      <ClassContentsCode>double</ClassContentsCode>을 사용하면
                      과제에서 0점을 받습니다)
                      <br />· <b>중요</b> : 여기서 요구된 멤버 변수 외에
                      추가적인 멤버 변수를 정의하지 마세요.
                    </ClassContentsTextTab>
                    - 두 개의 입력을 받는 생성자(1. 제품의 이름을 나타내는
                    문자열, 2. 제품의 가격을 나타내는 문자열)를 작성하세요 (
                    <ClassContentsCode>float</ClassContentsCode> 또는{" "}
                    <ClassContentsCode>double</ClassContentsCode>
                    사용 금지)
                    <br />- <ClassContentsCode>Product</ClassContentsCode>{" "}
                    객체가 수행해야 할 아래의 메서드를 작성하세요.
                    <ClassContentsTextTab>
                      · <ClassContentsCode>getName()</ClassContentsCode> :
                      제품의 이름을 반환하는 메서드
                      <br />· <ClassContentsCode>
                        getPrice()
                      </ClassContentsCode>{" "}
                      : 제품의 가격을 BigDecimal로 반환하는 메서드 (
                      <ClassContentsCode>float</ClassContentsCode>나{" "}
                      <ClassContentsCode>double</ClassContentsCode>을 사용하지
                      마세요)
                    </ClassContentsTextTab>
                    - <ClassContentsCode>Drive</ClassContentsCode>의{" "}
                    <ClassContentsCode>main()</ClassContentsCode> 메서드에서
                    다양한 <ClassContentsCode>Product</ClassContentsCode> 객체를
                    생성하고, 메서드를 호출하여 코드가 제대로 작동하는지
                    테스트하세요.
                    <br />
                    <br />
                    <b>2. Order 클래스 생성</b>
                    <br />- <ClassContentsCode>
                      Order.java
                    </ClassContentsCode>{" "}
                    파일을 프로젝트 폴더에 추가하고{" "}
                    <ClassContentsCode>Order</ClassContentsCode> 클래스를
                    정의하세요.
                    <br />- 모든 <ClassContentsCode>
                      Order
                    </ClassContentsCode>{" "}
                    객체가 가질 멤버 변수를 정의하세요.
                    <ClassContentsTextTab>
                      · <ClassContentsCode>products</ClassContentsCode>:{" "}
                      <ClassContentsCode>Product</ClassContentsCode>
                      객체를 저장하는{" "}
                      <ClassContentsCode>ArrayList</ClassContentsCode>
                      <br />· <ClassContentsCode>total</ClassContentsCode>: 각
                      제품 가격의 합계를{" "}
                      <ClassContentsCode>BigDecimal</ClassContentsCode>로
                      저장하는 변수 (
                      <ClassContentsCode>float</ClassContentsCode>나{" "}
                      <ClassContentsCode>double</ClassContentsCode>을 사용하면
                      과제에서 0점을 받습니다)
                    </ClassContentsTextTab>
                    - 입력값이 없는 생성자를 작성하여{" "}
                    <ClassContentsCode>ArrayList</ClassContentsCode>와
                    <ClassContentsCode>BigDecimal</ClassContentsCode>을 적절히
                    초기화하세요.
                    <br />- <ClassContentsCode>Order</ClassContentsCode> 객체가
                    수행해야 할 아래의 메서드를 작성하세요.
                    <ClassContentsTextTab>
                      · <ClassContentsCode>addItem</ClassContentsCode> :
                      <ClassContentsCode>Product</ClassContentsCode>를 입력으로
                      받아 <ClassContentsCode>ArrayList</ClassContentsCode>와
                      <ClassContentsCode>total</ClassContentsCode>을
                      업데이트하는 메서드
                      <br />· <ClassContentsCode>getItem</ClassContentsCode> :
                      사용자가 제품 이름을 입력하면{" "}
                      <ClassContentsCode>Order</ClassContentsCode> 내에서 해당
                      이름과 일치하는{" "}
                      <ClassContentsCode>Product</ClassContentsCode>를 찾아
                      반환하는 메서드. 제품을 찾으면 해당 제품을 반환하고, 찾지
                      못하면 <ClassContentsCode>null</ClassContentsCode>을
                      반환합니다. 여러 제품이 같은 이름을 가질 경우 첫 번째로
                      찾은 제품을 반환합니다.
                      <br />· <b>중요</b> : 문자열 비교에{" "}
                      <ClassContentsCode>==</ClassContentsCode> 연산자를
                      사용하지 마세요. 대신 Java API를 탐색하여 두 문자열이
                      같은지 비교하는 적절한 메서드를 찾아 사용하세요.
                      <br />· <ClassContentsCode>
                        removeItem
                      </ClassContentsCode>{" "}
                      : 제품 이름을 입력받아{" "}
                      <ClassContentsCode>ArrayList</ClassContentsCode>에서 해당
                      이름의 제품을 제거하고,{" "}
                      <ClassContentsCode>total</ClassContentsCode>을
                      업데이트하는 메서드. 이름이 일치하는 제품을 찾으면 제거 후
                      <ClassContentsCode>true</ClassContentsCode>를 반환하고,
                      찾지 못하면 <ClassContentsCode>false</ClassContentsCode>를
                      반환합니다. 여러 제품이 같은 이름을 가질 경우 첫 번째로
                      찾은 제품을 제거합니다.
                      <br />·{" "}
                      <ClassContentsCode>
                        calculateFinalPrice
                      </ClassContentsCode>{" "}
                      : 판매세를 저장하는{" "}
                      <ClassContentsCode>BigDecimal</ClassContentsCode>을
                      입력으로 받아 (
                      <ClassContentsCode>예시: 0.06</ClassContentsCode>),
                      판매세가 적용된{" "}
                      <ClassContentsCode>Order</ClassContentsCode>의 최종 가격을
                      계산하는 메서드입니다. 이 메서드는 계산이 끝나면
                      <ClassContentsCode>BigDecimal</ClassContentsCode>을
                      반환합니다 (<ClassContentsCode>float</ClassContentsCode>나{" "}
                      <ClassContentsCode>double</ClassContentsCode> 사용 금지)
                      <br />· <b>중요</b> : 판매세 적용 후 소수점 이하 자릿수가
                      발생할 수 있습니다 (예시: 총액이 4.22달러이고 판매세가
                      6%일 경우 최종 가격은 4.4732달러가 됩니다). 따라서 가장
                      가까운 센트로 내림하여 반올림하세요 (예시: 4.4732는 4.47로
                      반올림). <ClassContentsCode>BigDecimal</ClassContentsCode>{" "}
                      값을 반올림하는 방법에 대한 간단한 튜토리얼을 참조하세요.
                    </ClassContentsTextTab>
                    <br />
                    <br />
                    <b>3. Driver 구현</b>
                    <br />
                    <ClassContentsCode>Driver</ClassContentsCode>의
                    <ClassContentsCode>main()</ClassContentsCode> 메서드를
                    사용하여 <ClassContentsCode>Order</ClassContentsCode>객체를
                    생성하고 다양한 값의{" "}
                    <ClassContentsCode>Product</ClassContentsCode> 객체를
                    추가하여 <ClassContentsCode>Order</ClassContentsCode>{" "}
                    클래스의 모든 메서드가 제대로 작동하는지 테스트하세요.
                    <Java_06_03_Code21 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle3>
                    <font color="black">Order.java</font>
                  </ClassContentsTitle3>
                  <Java_06_03_Code22 />
                  <ClassContentsTitle3>
                    <font color="black">Product.java</font>
                  </ClassContentsTitle3>
                  <Java_06_03_Code23 />
                  <ClassContentsTitle3>
                    <font color="black">Driver.java</font>
                  </ClassContentsTitle3>
                  <Java_06_03_Code24 />
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
export default Java_06_03;
