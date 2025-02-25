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
import Java_06_04_M from "./Java_06_04_M";

const Java_06_04 = () => {
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
    navigate("/study/java/06/04");
    window.location.reload();
  };

  const Java_06_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
		// Map 컬렉션 생성
    HashMap<String, Integer>map = new HashMap<>();
		// 객체 추가
    map.put("Americano", 2500);
    map.put("Latte", 4000);
		// 객체 찾기
    System.out.println(map.get("Latte"));
		// 객체 삭제
		map.remove("Latte");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class HashMapEx1 {
    public static void main(String[] args) {
        // Map 컬렉션 생성
        Map<String, Integer> map = new HashMap<>();
        // 객체 저장
        map.put("우영우", 99);
        map.put("동그라미", 55);
        map.put("최수연", 95);
        map.put("이준호", 80);
        map.put("동그라미", 96); // 키가 같기 때문에 나중에 저장된 값으로 대치
        System.out.println("총 Entry 수 : " + map.size());
        // 객체 찾기
        System.out.println(map.get("동그라미"));
        // 객체를 하나씩 처리
        Set<String> keySet = map.keySet(); // 모든 키를 Set 객체에 담아서 리턴
        Iterator<String> iterator = keySet.iterator();
        System.out.println("iterator를 이용하는 방법");
        while(iterator.hasNext()) {
            String key = iterator.next();
            Integer value = map.get(key);
            System.out.println(key + "\t" + value);
        }
        System.out.println();


        // 향상된 for문을 이용하는 방법 : keySet()으로 key를 포함하는 Set컨렉션 반환
        System.out.println("향상된 for문을 사용하는 방법");
        for(String key : map.keySet()) {
            System.out.println(key + "\t" + map.get(key));
        }

        //객체 삭제
        map.remove("최수연"); // 키로 Map.Entry를 제거
        System.out.println("총 Entry 수 : " + map.size());
        System.out.println();

        // replace() 메소드를 이용한 요소 수정
        map.replace("이준호", 91);

        // 객체를 하나씩 처리, 키와 값의 쌍으로 구성된 모든 Map.Entry 객체를 set에 담아서 리턴
        System.out.println("iterator entrySet() ");
        Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
        Iterator<Map.Entry<String,Integer>> entryIterator = entrySet.iterator();

        while (entryIterator.hasNext()) {
            Map.Entry<String, Integer> entry = entryIterator.next();
            String key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println(key + "\t" + value);
        }
        System.out.println();

        //객체 전체 삭제
        map.clear();
        System.out.println("총 Entry 수 : " + map.size());

    }
          `}
        </code>
      </pre>
    );
  };

  const Java_06_04_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 해시맵메뉴;
import java.util.*;
// 해시맵을 이용한 커피 메뉴 (보기/추가/삭제/변경)
public class HashMenuMain {
    static Map<String, MenuInfo> map = new HashMap<>();
    public static void main(String[] args) {
        makeMenu();
        selectMenu();
    }
    // 초기 메뉴를 추가 함
    static void makeMenu() {
        map.put("Americano", new MenuInfo("Americano", 2000, "Coffee", "기본커피"));
        map.put("Espresso", new MenuInfo("Espresso", 2500, "Coffee", "진한커피"));
        map.put("Latte", new MenuInfo("Latte", 4000, "Coffee", "우유 포함"));
    }
    static void selectMenu() {
        Scanner sc = new Scanner(System.in);
        String key;
        while(true) {
            System.out.println("메뉴를 선택 하세요 : ");
            System.out.print("[1]메뉴보기, [2]메뉴조회, [3]메뉴추가, [4]메뉴삭제, [5]메뉴수정, [6]종료 :");
            int selMenu = sc.nextInt();
            switch (selMenu) {
                case 1 :
//                    Set<String> keySet = map.keySet(); // 맵의 모든 key를 모아서 반환
//                    Iterator<String> iterator =keySet.iterator();
//                    while(iterator.hasNext()) {
//                        key = iterator.next();
//                        System.out.println("메뉴 : " + map.get(key).name);
//                        System.out.println("메뉴 : " + map.get(key).price);
//                        System.out.println("메뉴 : " + map.get(key).group);
//                        System.out.println("메뉴 : " + map.get(key).desc);
//                    }
                    System.out.println("========== 메뉴 보기 ==========");
                    for(String e : map.keySet()) {
                        System.out.println("메뉴 : " + map.get(e).name);
                        System.out.println("가격 : " + map.get(e).price);
                        System.out.println("분류 : " + map.get(e).group);
                        System.out.println("설명 : " + map.get(e).desc);
                        System.out.println("------------------------------");
                    }
                    break;
                case 2 :
                    System.out.print("조회 할 메뉴를 입력 하세요 : ");
                    key = sc.next();
                    // containsKey(키) : map 내에 해당 키가 있는지 확인하여 결과를 반환 함
                    if(map.containsKey(key)) {
                        System.out.println("메뉴 : " + map.get(key).name);
                        System.out.println("가격 : " + map.get(key).price);
                        System.out.println("분류 : " + map.get(key).group);
                        System.out.println("설명 : " + map.get(key).desc);
                    } else System.out.println("해당 메뉴가 존재하지 않습니다.");
                    break;
                case 3 :
                    System.out.print("추가 할 메뉴를 입력 하세요 : ");
                    key = sc.next(); // key 이면서 메뉴이름이 된다.
                    if(map.containsKey(key)) {
                        System.out.println("해당 메뉴가 이미 존재 합니다.");
                    } else {
                        System.out.print("가격 입력 : ");
                        int price = sc.nextInt();
                        System.out.print("분류 입력 : ");
                        String grp = sc.next();
                        //sc.nextInt(); // 버퍼 비우기
                        System.out.print("설명 입력 : ");
                        String desc = sc.next();
                        map.put(key, new MenuInfo(key, price, grp, desc));
                    }
                    break;
                case 4 :
                    System.out.print("삭제할 메뉴를 입력 하세요 : ");
                    key = sc.next();
                    if(map.containsKey(key)) {
                        map.remove(key);
                        System.out.println(key + " 메뉴를 삭제 하였습니다.");
                    } else {
                        System.out.println("삭제할 메뉴가 없습니다.");
                    }
                    break;
                case 5 :
                    System.out.print("수정할 메뉴를 입력 하세요 : ");
                    key = sc.next();
                    if(map.containsKey(key)) {
                        System.out.print("가격 입력 : ");
                        int price = sc.nextInt();
                        System.out.print("분류 입력 : ");
                        String grp = sc.next();
                        //sc.nextInt(); // 버퍼 비우기
                        System.out.print("설명 입력 : ");
                        String desc = sc.next();
                        map.replace(key, new MenuInfo(key, price, grp, desc));
                    } else {
                        System.out.println("수정 할 메뉴가 없습니다.");
                    }
                    break;
                case 6 :
                    System.out.println("메뉴를 종료 합니다.");
                    return; // break 사용하면 반복문을 벗어나지 못함..
            }
        }

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_04_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[]args) throws IOException {
        Properties properties = new Properties();
        String path = Main.class.getResource("./database.properties").getPath();
        path = URLDecoder.decode(path, "utf-8");
        properties.load(new FileReader(path));
        String driver = properties.getProperty("driver");
        String url = properties.getProperty("url");
        String username = properties.getProperty("username");
        String password = properties.getProperty("password");
        System.out.println("drive : " + driver);
        System.out.println("url : " + url);
        System.out.println("username : " + username);
        System.out.println("password : " + password);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_04_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
driver=oracle.jdbc.OracleDriver
url=jdbc:oracle:thin:@local:1521:xe
username=scott
password=tiger
          `}
        </code>
      </pre>
    );
  };

  const Java_06_04_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
        Properties properties = new Properties();

        properties.setProperty("timeout", "30");
        properties.setProperty("language", "kr");
        properties.setProperty("size", "10");
        properties.setProperty("capacity", "10");

				for(Object e : properties.keySet()) {
            String key = (String) e;
            System.out.println(properties.getProperty(key));
        }

        // properties에 저장된 요소들을 Enumeration을 이용해 출력
        Enumeration enumeration = properties.propertyNames();
        while (enumeration.hasMoreElements()) {
            String element = (String) enumeration.nextElement();
            System.out.println(element + "=" + properties.getProperty(element));
        }

//        Iterator<String> iter = (Iterator<String>) properties.propertyNames();
//        while(iter.hasNext()) {
//            String element = iter.next();
//            System.out.println(element + "=" + properties.getProperty(element));
//        }



        System.out.println();

        properties.setProperty("size", "20");
        System.out.println("size=" + properties.getProperty("size"));
        System.out.println("capacity=" + properties.getProperty("capacity", "20"));
        System.out.println("loadfactor=" + properties.getProperty("loadfactor", "0.75"));

        System.out.println(properties);

        System.out.println();

        properties.list(System.out);
    }
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_06_04_M />
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
              <TopBoxText onClick={() => handleRefresh()}>04. Map</TopBoxText>
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
                  <ClassHeaderTitle>Map</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle2>Map 인터페이스</ClassContentsTitle2>
                  <ClassContentsText>
                    Map 인터페이스는 하나가 아닌{" "}
                    <b>쌍(Pair)으로 되어 있는 자료를 관리하는 메소드로 선언</b>
                    되어 있습니다.
                    <br />
                    하나의 <b>쌍(Pair)는 키(key)와 값(value)</b>으로 이루어져
                    있습니다.
                    <br />
                    키는 중복 될 수 없으며, 값은 중복될 수 있습니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: `url(${"/images/study/java/java_06_04_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>Hash?</ClassContentsTitle3>
                  <ClassContentsText>
                    데이터에 대한 검색과 저장에서 아주 우수한 성능을 보여
                    쓰임새가 많습니다.
                    <br />
                    Hash로 값을 생성하면 고유 주소 값이 생기는데 이것을 숫자로
                    변환한 것을 <b>해시코드</b>라고 합니다.
                    <br />
                    즉, 자바에서{" "}
                    <b>해시코드는 Heap 영역에 인스턴스에 대한 참조 값</b>
                    이라고도 부를 수 있습니다.
                    <br />
                    <b>Hash 함수</b>란? 데이터의 효율적인 관리를 위해 임의의
                    길이를 가진 데이터를 고정된 길이를 가진 테이터로 매핑해주는
                    함수 입니다. (암호화 기법이라고도 볼 수 있습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>Hash Collision?</ClassContentsTitle3>
                  <ClassContentsText>
                    가장 이상적인 해시테이블은 한 버켓에 딱 한개의 노드가 있는
                    경우 입니다. 이 경우 데이터 검색의 경우 인덱스만 계산하면
                    바로 값을 찾을 수 있으므로 <b>O(1)의 시간복잡도를 보장</b>할
                    수 있습니다. 이 경우를 제외하고 한 버켓에 여러개의 노드가
                    있는 경우를 충돌이라고 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Map 컬렉션</ClassContentsTitle2>
                  <ClassContentsText>
                    Map은 리스트나 배열처럼 순차적으로(sequential) 해당 요소
                    값을 구하지 않고 key를 통해 value를 얻는다. 맵(Map)의 가장
                    큰 특징이라면 <b>key로 value를 얻어낸다는 점</b>이다.
                    <br />- 순서가 보장 되지 않음 (HashMap)
                    <br />- 키와 값으로 구성되어 있으며{" "}
                    <b>키는 중복 허용하지 않고 값은 중복 가능</b>
                    <br />- HashMap, HashTable, TreeMap, Properties
                    <br />- 키의 동일 조건은 hashCode()의 리턴값이 같고,
                    equals()메소드의 결과가 true
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "180px",
                        backgroundImage: `url(${"/images/study/java/java_06_04_02.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>HashMap</ClassContentsTitle2>
                  <ClassContentsText>
                    키의 해시 값을 계산하여 저장하고 검색 속도를 빠르게 합니다.
                    순서를 보장하지 않습니다.
                    <br />
                    HashMap은 Map 인터페이스를 구현한 대표적인 Map 컬렉션
                    입니다. (가장 많이 사용 됨)
                    <br />
                    haseCode() 리턴값과 equals()리턴값이 같은 경우 같은 키로
                    간주 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "80px",
                        backgroundImage: `url(${"/images/study/java/java_06_04_03.png"})`,
                      }}
                    />
                    <Java_06_04_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle3>주요 메소드</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>메서드</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>설명</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>put(key, value)</ClassTableTd>
                          <ClassTableTd>
                            지정된 키와 값으로 맵에 항목을 추가합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>get(key)</ClassTableTd>
                          <ClassTableTd>
                            지정된 키에 해당하는 값을 반환합니다. 키가 없으면
                            null을 반환합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>remove(key)</ClassTableTd>
                          <ClassTableTd>
                            지정된 키에 해당하는 항목을 제거합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>containsKey(key)</ClassTableTd>
                          <ClassTableTd>
                            특정 키가 맵에 포함되어 있는지 여부를 확인 합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>containsValue(value)</ClassTableTd>
                          <ClassTableTd>
                            특정 값이 맵에 포함되어 있는지 여부를 확인합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>isEmpty()</ClassTableTd>
                          <ClassTableTd>
                            맵이 비어 있는지 여부를 확인 합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>size()</ClassTableTd>
                          <ClassTableTd>
                            맵에 저장된 키-쌍의 개수를 반환합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>clear()</ClassTableTd>
                          <ClassTableTd>
                            맵에 모든 항목을 제거하여 비웁니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>keySet()</ClassTableTd>
                          <ClassTableTd>
                            맵에 있는 모든 키를 포함하는 Set 컬렉션을 반환
                            합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>values()</ClassTableTd>
                          <ClassTableTd>
                            맵에 있는 모든 값을 포함하는 Collection을
                            반환합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>entrySet()</ClassTableTd>
                          <ClassTableTd>
                            맵에 있는 모든 키-값 쌍을 포함하는 Set 컬렉션을
                            반환합니다.
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    기본 예제 (기본 문법 익히기)
                  </ClassContentsTitle3>
                  <Java_06_04_Code02 />
                  <ClassContentsTitle3>
                    HashMap - 응용예제(커피 메뉴 만들기)
                  </ClassContentsTitle3>
                  <Java_06_04_Code03 />
                  <br />
                  <ClassContentsTitle2>HashTable</ClassContentsTitle2>
                  <ClassContentsText>
                    - Hashtable은 HashMap과 동일한 구조를 가지고 있습니다.
                    <br />- HashTable도 키로 사용할 객체는 hashCode()와 equals()
                    메소드를 재정의해서 동등 객체가 될 조건을 정해야 합니다.
                    <br />- 동기화된 메소드로 구현되어 있어{" "}
                    <b>멀티 스레드 환경에서 안전</b>합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Properties</ClassContentsTitle2>
                  <ClassContentsText>
                    - 키와 값을 <b>String 타입으로 제한</b>한 Map 컬렉션 입니다.
                    <br />- 내부 설정 정보 읽기(database.properties가 생성되어
                    있지 않으면 에러 발생)
                    <br />- 주로 Properties의 정보를 읽어 들일때 사용 됩니다.
                    <Java_06_04_Code04 />
                    <Java_06_04_Code05 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    Application 등에서 관련 정보 저장 및 읽기
                  </ClassContentsTitle3>
                  <Java_06_04_Code06 />
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
export default Java_06_04;
