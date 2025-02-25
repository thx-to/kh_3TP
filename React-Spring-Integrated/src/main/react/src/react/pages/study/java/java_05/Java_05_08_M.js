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

const Java_05_08_M = () => {
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
    navigate("/study/java/05/08");
    window.location.reload();
  };

  const Java_05_08_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
System.out.println(Arrays.binarySearch(arr, 5));
          `}
        </code>
      </pre>
    );
  };

  const Java_05_08_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Integer[] arr = {5, 3, 4, 7, 8, 9, 2, 1};
Arrays.sort(arr);
for(int e : arr) System.out.print(e + " ");
          `}
        </code>
      </pre>
    );
  };

  const Java_05_08_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`

Arrays.sort(arr, new Comparator<Integer>() {
    @Override
    public int compare(Integer i1, Integer i2) {
        if(i1 > i2) return 1; // 오름 차순
				// if(i1 < i2) return 1; // 내림 차순
    }
});


          `}
        </code>
      </pre>
    );
  };

  const Java_05_08_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
    String[] fruit = {"Kiwi", "Orange", "Apple", "Banana", "Melon",
            "Mango", "Watermelon", "Cherry", "Plum", "Peach"};
    Arrays.sort(fruit, new Comparator<String>() {
        @Override
        public int compare(String o1, String o2) {
            if(o1.length() > o2.length()) return 1; // 첫번째가 두번째 보다 길이가 길면 정렬 조건
            else {
                if(o1.length() == o2.length()) {
                    return o1.compareTo(o2); // 두번째가 사전순서상 앞에 있으면 양수
                }
                return -1; // 현 상태 유지
            }
        }
    });
    System.out.println(Arrays.toString(fruit));
}
          `}
        </code>
      </pre>
    );
  };

  const Java_05_08_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
Scanner sc = new Scanner(System.in);
  System.out.print("배열의 갯수 : ");
  int num = sc.nextInt();
  int[] arr = new int[num];
  System.out.println("찾을 수를 입력 : ");
  int key = sc.nextInt();
  for(int i = 0; i < arr.length; i++) {
      arr[i] = (int)(Math.random() * num) + 1;
  }
  Arrays.sort(arr);
  for(int val : arr) System.out.print(val + " ");
  System.out.println();
  int result = Arrays.binarySearch(arr, key);
  if(result >= 0) System.out.println(result);
          `}
        </code>
      </pre>
    );
  };

  const Java_05_08_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class BinarySearch {
public static int binarySearch(int[] arr, int target) {
int left = 0;
int right = arr.length - 1;
while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid; // 원하는 값 찾음
        } else if (arr[mid] < target) {
            left = mid + 1; // 중간 값보다 크므로 오른쪽 반을 탐색
        } else {
            right = mid - 1; // 중간 값보다 작으므로 왼쪽 반을 탐색
        }
    }

    return -1; // 값이 배열에 없음
}

public static void main(String[] args) {
    int[] arr = { 2, 4, 6, 8, 10, 12, 14, 16 };
    int target = 10;
    int result = binarySearch(arr, target);

    if (result == -1) {
        System.out.println("원하는 값이 배열에 없습니다.");
    } else {
        System.out.println("원하는 값의 인덱스: " + result);
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
            08. Arrays 클래스
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle2>java.util 패키지</ClassContentsTitle2>
        <ClassContentsText>
          java.util 패키지에는 프로그램을 개발하는 데 사용할 수 있는 유용한
          유틸리티 클래스가 다수 포함되어 있습니다.
          <br />
          실제로 java.lang 패키지 다음으로 가장 많이 사용되는 패키지가 java.util
          패키지입니다.
          <br />
          하지만 import 문을 사용하지 않아도 바로 사용할 수 있는 java.lang
          패키지와는 달리 java.util 패키지는{" "}
          <b>import 문으로 패키지를 불러오고 나서야 클래스 이름만으로 사용</b>할
          수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>java.util.Arrays 클래스</ClassContentsTitle2>
        <ClassContentsText>
          Arrays 클래스에는 <b>배열을 다루기 위한 다양한 메소드가 포함</b>되어
          있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>binarySearch() 메소드</ClassContentsTitle2>
        <ClassContentsText>
          binarySearch() 메소드는 전달받은 배열에서 특정 객체의 위치를 이진 검색
          알고리즘을 사용하여 검색한 후, 해당 위치를 반환합니다.
          <br />이 메소드는 이진 검색 알고리즘을 사용하므로, 매개변수로 전달되는
          배열이 sort() 메소드 등을 사용하여 미리 정렬되어 있어야만 제대로
          동작합니다.
          <Java_05_08_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>sort() 메소드</ClassContentsTitle2>
        <ClassContentsTitle3>오름차순 정렬</ClassContentsTitle3>
        <ClassContentsText>
          sort() 메소드는 전달받은 배열의 모든 요소를 오름차순으로 정렬합니다.
          <Java_05_08_Code02 />
        </ClassContentsText>
        <ClassContentsTitle3>내림차순 정렬</ClassContentsTitle3>
        <ClassContentsText>
          <ClassContentsCode>
            Arrays.sort(arr, Collections.reverseOrder());
          </ClassContentsCode>
        </ClassContentsText>
        <ClassContentsTitle3>정렬 오버라이딩</ClassContentsTitle3>
        <ClassContentsText>
          익명의 객체를 만드는 방법으로 Comparator의 compare 메서드를 오버라이딩
          해서 정렬 조건을 만듭니다.
          <ClassContentsCodeBox>
            💡 자바의 <ClassContentsCode>Comparator</ClassContentsCode>{" "}
            인터페이스는 객체들을 특정한 순서로 비교하는 데 사용되는 메소드를
            정의합니다. 이 인터페이스는 주로 자바 컬렉션 프레임워크에서 객체들을
            정렬할 때 사용되며, 사용자가 정의한 객체의 비교 방식을
            커스터마이징할 수 있게 해줍니다.
            <ClassContentsCode>Comparator</ClassContentsCode>는
            <ClassContentsCode>java.util</ClassContentsCode> 패키지에 있습니다.
          </ClassContentsCodeBox>
          <Java_05_08_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>연습문제</ClassContentsTitle3>
        <ClassContentsText>
          임의의 10개의 과일이름 입력 후 길이 순으로 정렬하기, 길이가 같으면
          사전순으로 정렬하기
          <ClassContentsCodeBox>
            👉 <b>compareTo()</b> 함수는 두개의 값을 비교하여 int 값으로
            반환해주는 함수이며 주로 정렬에서 사용 됩니다.
            <ClassContentsTextTab>
              - <b>0</b> : 두 객체가 같음을 의미합니다.
              <br />- <b>양수</b> : 호출 객체가 매개변수로 전달된 객체보다
              크다는 것을 의미합니다.
              <br />- <b>음수</b> : 호출 객체가 매개변수로 전달된 객체보다
              작다는 것을 의미합니다.
            </ClassContentsTextTab>
          </ClassContentsCodeBox>
          <ClassContentsCodeBox>
            💡 <ClassContentsCode>compareTo()</ClassContentsCode> 메소드
            <ClassContentsTextTab>
              - <b>0</b> : 두 객체가 같음을 의미합니다.
              <br />- <b>양수</b> : 첫 번째 객체가 두 번째 객체보다 크다는 것을
              의미합니다.
              <br />- <b>음수</b> : 첫 번째 객체가 두 번째 객체보다 작다는 것을
              의미합니다.
            </ClassContentsTextTab>
          </ClassContentsCodeBox>
          <Java_05_08_Code04 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>asList()</ClassContentsTitle2>
        <ClassContentsText>
          <ClassContentsCode>
            {`List<String> list = Arrays.asList(arr);`}
          </ClassContentsCode>
          <br />
          일반 배열을 ArrayList로 변환 한다.
        </ClassContentsText>
        <ClassContentsTitle3>연습 문제</ClassContentsTitle3>
        <ClassContentsText>
          배열의 갯수를 입력 받아서 배열의 길이 만큼의 랜덤수를 생성해서 배열에
          추가 합니다.
          <br />
          임의의 수를 입력 받아서 배열내에 해당 값이 존재하는 지 확인 합니다.
          <br />
          임의의 수는 1에서 배열의 크기 만큼의 임의의 수이지만 입력 받은 찾을
          수가 배열내에 존재 하지 않을 수 있습니다. (존재하지 않으면 음수 출력)
          <Java_05_08_Code05 />
          <ClassContentsCodeBox>
            💡 <b>이분검색이란?</b>
            <br />
            정렬된 배열에서 특정한 값을 빠르게 찾는 알고리즘입니다. 배열 내에서
            중간 값과 찾으려는 값을 비교하면서 범위를 절반씩 줄여나가는 방식으로
            동작합니다. 이분 검색은 선형 검색(Linear Search)과 비교하여 훨씬
            효율적인 방법으로 원하는 값을 찾을 수 있습니다.
            <Java_05_08_Code06 />
          </ClassContentsCodeBox>
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
export default Java_05_08_M;
