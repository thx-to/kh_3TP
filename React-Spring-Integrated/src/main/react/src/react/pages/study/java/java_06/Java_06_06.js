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
import Java_06_06_M from "./Java_06_06_M";

const Java_06_06 = () => {
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
    navigate("/study/java/06/06");
    window.location.reload();
  };

  const Java_06_06_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
        TreeSet<Integer> ts = new TreeSet<>();
        ts.add(23);
        ts.add(10);
        ts.add(48);
        ts.add(15);
        ts.add(7);
        ts.add(22);
        ts.add(56);
        // Enhanced for 문
        for(int e : ts) System.out.println(e + " ");

        // remove()메소드로 요소의 제거
        ts.remove(40);

        // iterator() 메소드를 이용한 요소의 출력
        Iterator<Integer> iter = ts.iterator();
        while(iter.hasNext()) System.out.print(iter.next() + " ");

        // size() 메소드를 이용한 요소의 총 개수
        System.out.println("이진 검색 트리의 크기 : " + ts.size());

        // subSet() 메소드를 이용한 부분 집합의 출력
        System.out.println(ts.subSet(10, 20));
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_06_06_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
	Integer[] score = {78, 45, 60, 54, 92};
  TreeSet<Integer> treeSet = new TreeSet<>(Arrays.asList(score));

    System.out.println("60점 이하 : " + treeSet.headSet(60));
    System.out.println("60점 이상 : " + treeSet.tailSet(60));

    // 주어진 점수 보다 바로 아래 점수
    System.out.println("60점 이하 : " + treeSet.lower(60));
    // 주어진 점수 보다 바로 위의 점수
    System.out.println("60점 이상 : " + treeSet.higher(60));
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_06_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    TreeMap<Integer, String> score = new TreeMap<>();
    score.put(87, "나희도");
    score.put(88, "고유림");
    score.put(75, "백이진");
    score.put(65, "구자경");
    score.put(98, "우영우");

    Map.Entry<Integer, String> entry = null;

    entry = score.firstEntry();
    System.out.println("가장 낮은 점수 : " + entry.getKey() + "-" + entry.getValue());

    entry = score.lastEntry();
    System.out.println("가장 높은 점수 : " + entry.getKey() + "-" + entry.getValue());

    entry = score.lowerEntry(95);
    System.out.println("95점 아래 점수 : " + entry.getKey() + "-" + entry.getValue());

    entry = score.higherEntry(95);
    System.out.println("95점 위의 점수 : " + entry.getKey() + "-" + entry.getValue());

    entry = score.floorEntry(95);
    System.out.println("95점 이거나 바로 아래 점수 : " + entry.getKey() + "-" + entry.getValue());

    entry = score.ceilingEntry(95);
    System.out.println("95점 이거나 바로 위의 점수 : " + entry.getKey() + "-" + entry.getValue());

    while(!score.isEmpty()) {
        entry = score.pollFirstEntry();
        System.out.println(entry.getKey() + "-" + entry.getValue() + "남은 객체 수 : " + score.size());
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_06_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
NavigableMap<Integer, String> descendingMap = score.descendingMap();
Set<Map.Entry<Integer, String>> descendingEntrySet = descendingMap.entrySet();
for(Map.Entry<Integer, String> entry : descendingEntrySet) {
    System.out.print(entry.getKey() + "-" + entry.getValue() + " ");
}
System.out.println();
          `}
        </code>
      </pre>
    );
  };

  const Java_06_06_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
for(Map.Entry<Integer, String> entry : score.entrySet()) {
    System.out.print(entry.getKey() + "-" + entry.getValue() + " ");
}
          `}
        </code>
      </pre>
    );
  };

  return (
    <>
      {isMobile ? (
        <Java_06_06_M />
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
                06. 검색기능을 강화시킨 컬렉션
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
                  <ClassHeaderTitle>
                    검색기능을 강화시킨 컬렉션
                  </ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsText>
                    컬렉션 프레임워크는 <b>검색 기능을 강화</b>시킨 TreeSet와
                    TreeMap을 제공하고 있습니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    {`TreeSet<E>클래스`}
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    - TreeSet 클래스는 데이터가 정렬된 상태로 저장되는{" "}
                    <b>
                      이진 검색 트리(binary search tree)의 형태로 요소를 저장
                    </b>
                    합니다.
                    <br />- 요소들이 자동으로 정렬이 됩니다. 특정 기준으로
                    정렬이 필요하면 Comparator를 사용
                    <br />- 삽입, 삭제, 검색시 O(log n)의 시간 복잡도를 가짐
                    <br />- 중복 허용하지 않음
                    <br />- 요소들이 정렬된 상태로 유지되어야 할 때 사용 (사용자
                    정의 기준에 따라 정렬된 데이터가 필요할 때 사용)
                  </ClassContentsText>
                  <ClassContentsTitle3>이진 검색 트리</ClassContentsTitle3>
                  <ClassContentsText>
                    트리는 자료 사이의 계층 구조를 나타내는 자료 구조 입니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "250px",
                        backgroundImage: `url(${"/images/study/java/java_06_06_01.png"})`,
                      }}
                    />
                    이진 검색 트리는 데이터를 추가하거나 제거하는 등의 기본 동작
                    시간이 매우 빠릅니다.
                    <br />
                    좌, 우 child 노드를 참조하기 위한 두 개의 변수로 구성되어
                    있습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    간단한 검색 트리 예제
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsCodeBox>
                      💡 23, 10, 48, 15, 7, 22, 56
                    </ClassContentsCodeBox>
                    <b>트리 생성</b>
                    <ClassContentsImage
                      style={{
                        width: "50%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_06_06_02.png"})`,
                      }}
                    />
                    위와 같이 트리가 자동으로 정렬되면서 생성이 되고, 이를
                    <b>중위(Inorder) 순회를 하면 오름차순된 결과값</b>을 얻을 수
                    있습니다. (Left - Root - Right)
                    <ClassContentsCodeBox>
                      💡 7 → 10 → 15 → 22 → 23 → 48 → 56
                    </ClassContentsCodeBox>
                    <Java_06_06_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle3>주요 메서드</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>기능</b>
                          </ClassTableTd>
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
                          <ClassTableTd rowspan="4">
                            특정 객체 검색
                          </ClassTableTd>
                          <ClassTableTd>Object first()</ClassTableTd>
                          <ClassTableTd>
                            정렬된 순서에서 첫 번째 객체 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>Object last()</ClassTableTd>
                          <ClassTableTd>
                            정렬된 순서에서 마지막 객체 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>Object lower(Object o)</ClassTableTd>
                          <ClassTableTd>
                            지정된 객체보다 작은 값을 가진 객체 중 제일 가까운
                            객체 반환, 없으면 null
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>Object higher(Object o)</ClassTableTd>
                          <ClassTableTd>
                            지정된 객체보다 큰 값을 가진 객체 중 제일 가까운
                            값의 객체 반환, 없으면 null
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>정렬</ClassTableTd>
                          <ClassTableTd>
                            NaviableSet descendingSet()
                          </ClassTableTd>
                          <ClassTableTd>
                            TreeSet 에 저장된 요소들을 역순으로 정렬해서 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd rowspan="3">범위 검색</ClassTableTd>
                          <ClassTableTd>
                            SortedSet headSet(Object toElement)
                          </ClassTableTd>
                          <ClassTableTd>
                            지정된 객체보다 작은 값의 객체 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            SortedSet tailSet(Object toElement)
                          </ClassTableTd>
                          <ClassTableTd>
                            지정된 객체보다 큰 값의 객체들을 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            SortedSet subSet(Object frontElement, Object
                            toElement)
                          </ClassTableTd>
                          <ClassTableTd>
                            범위 검색(frontElement ~ to Element사이)의 결과 반환
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <ClassContentsTitle3>TreeSet 예제</ClassContentsTitle3>
                  <ClassContentsText>
                    - int 배열에 5명의 성적을 입력 받아 저장
                    <br />- TreeSet에 성적을 추가하여 합격점수와 불합격 점수
                    출력( 합격 기준은 60점)
                    <Java_06_06_Code02 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>TreeMap</ClassContentsTitle2>
                  <ClassContentsText>
                    Map 인터페이스를 구현한 클래스 중 key 값으로 자료를
                    정렬하려면 TreeMap을 사용 할 수 있습니다.
                    <br />
                    TreeMap은 TreeSet과 마찬가지로 이진 검색 트리로 구현 되어
                    있습니다.
                    <br />
                    Key 값으로 정렬하므로{" "}
                    <b>
                      key 값에 해당하는 클래스에 Comparable과 Comparator를 구현
                    </b>
                    해야 합니다.
                    <br />- 이진 트리 기반의 Map 컬렉션 입니다.
                    <br />- TreeSet과 차이점은 키와 값이 저장된 Map.Entry를 저장
                    합니다.
                    <br />- 기본적으로 부모키값과 비교해 낮은것은 왼쪽에 높은
                    것으로 오른쪽에 저장 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "280px",
                        backgroundImage: `url(${"/images/study/java/java_06_06_03.png"})`,
                      }}
                    />
                    - Map 인터페이스 타입 변수에 대입해도 되지만 TreeMap 클래스
                    타입으로 대입하는 이유는 특정 객체를 찾거나 범위 검색과
                    관련된 메소드를 사용하기 위함 입니다.
                    <br />
                    <ClassContentsCode>
                      {`TreeMap<String, Integer> treeMap = new TreeMap<String, Integer>();`}
                    </ClassContentsCode>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>리턴 타입</b>
                          </ClassTableTd>
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
                          <ClassTableTd rowspan="8">{`Map.Entry<K, V>`}</ClassTableTd>
                          <ClassTableTd>firstEntry()</ClassTableTd>
                          <ClassTableTd>
                            제일 낮은 Map.Entry를 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>lastEntry()</ClassTableTd>
                          <ClassTableTd>
                            제일 높은 Map.Entry를 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>lowerEntry(K key)</ClassTableTd>
                          <ClassTableTd>
                            주어진 키보다 바로 아래 Map.Entry를 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>higherEntry(K key)</ClassTableTd>
                          <ClassTableTd>
                            주어진 키보다 바로 위의 Map.Entry를 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>floorEntry(K key)</ClassTableTd>
                          <ClassTableTd>
                            주어진 키와 동등한 키가 있으면 해당 Map.Entry를
                            리턴, 없다면 주어진 키 바로 아래의 Map.Entry 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>ceillingEntry(K key)</ClassTableTd>
                          <ClassTableTd>
                            주어진 키와 동등한 키가 있으면 해당 Map.Entry를
                            리턴, 없다면 주어진 키 바로 위의 Map.Entry 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>pollFirstEntry()</ClassTableTd>
                          <ClassTableTd>
                            제일 낮은 Map.Entry를 꺼내오고 컬렉션 제거
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>pollLast()</ClassTableTd>
                          <ClassTableTd>
                            제일 높은 Map.Entry를 꺼내오고 컬렉션 제거
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <Java_06_06_Code03 />
                  </ClassContentsText>
                  <ClassContentsTitle2>
                    내림차순으로 출력하기
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>리턴 타입</b>
                          </ClassTableTd>
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
                          <ClassTableTd>{`NavigableSet<K>`}</ClassTableTd>
                          <ClassTableTd>descendingKeySet()</ClassTableTd>
                          <ClassTableTd>
                            내림차순으로 정렬된 키의 NavigableSet 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>{`NavigableMap<K, V>`}</ClassTableTd>
                          <ClassTableTd>descendingMap()</ClassTableTd>
                          <ClassTableTd>
                            내림차순으로 정렬된 Map.Entry의 NavigableMap을 리턴
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <Java_06_06_Code04 />
                    Map에 값을 전체 출력하기 위해서는 entrySet(), keySet()
                    메소드를 사용하면 되는데 entrySet() 메서드는 key와 value의
                    값이 모두 필요한 경우 사용하고, keySet() 메서드는 key의 값만
                    필요한 경우 사용합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>오름차순 출력</ClassContentsTitle3>
                  <Java_06_06_Code05 />
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
export default Java_06_06;
