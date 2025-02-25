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

const Java_06_10_M = () => {
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
    navigate("/study/java/06/10");
    window.location.reload();
  };

  const Java_06_10_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 성적순정렬;
import java.util.Iterator;
import java.util.TreeSet;
// 5명의 성적을 입력 받아 성적 정렬
// 이름과 성적을 입력 받아 성적이 높은 사람 순으로 정렬 하기
// 이름과 성적으로 이루어진 클래스 생성 후 정렬
// TreeSet (트리 형태의 자료 구조이며, 트리 생성 시 자동 정렬 특성을 가지고 있음)
// 클래스 타입으로 트리를 구성하기 위해서는 검색 조건의 기준을 만들어 줘야 한다.
public class ScoreSortMain {
    public static void main(String[] args) {
        // 트리셋에 값이 대입될 때 자동 정렬 됩니다.
        // 값이 입력되면 현재 입력된 값이 루트 노드 기준으로 큰지 작은지 판단해서 저장 위치를 결정 함.
        TreeSet<StudentInfo> info = new TreeSet<>();
        info.add(new StudentInfo("우영우", 95));
        info.add(new StudentInfo("동그라미", 65));
        info.add(new StudentInfo("이준호", 77));
        info.add(new StudentInfo("최수연", 88));
        info.add(new StudentInfo("정명석", 97));

        Iterator<StudentInfo> iterator = info.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next().name + " ");
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_10_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 성적순정렬;
// 이름과 성적을 저장
// Comparable interface 구현, compareTo() 메소드를 상속받아 우리가 정한 기준으로 정렬
public class StudentInfo implements Comparable<StudentInfo>{
    public String name; // 게터와 세터 생성없이 진행하기 위해서
    public int score;
    // 생성자를 통해서 인스턴스 필드를 초기화
    public StudentInfo(String name, int score) {
        this.name = name;
        this.score = score;
    }

    @Override
    // 성적이 높은 사람 순으로 정렬 하기 (내림 차순)
    // compareTo()는 정수형 반환값을 가진다. 같으면 0, 다르면 1, -1 반환
    // 반환값이 1인 경우는 정렬 조건 조건이되고, -1이면 현상태 유지
    // compareTo() 메소드는 매개변수가 1개이며, 자신과 매개변수로 넘어온 개체를 비교
    public int compareTo(StudentInfo o) {
        if(this.score == o.score) return 0;
        else if(this.score > o.score) return -1; // 정렬하지 않겠다는 뜻
        else return 1; // 정렬 조건이 된다.
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_10_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 단어정렬;
import java.util.Comparator;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class WordSortEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();

        Set<String> set = new TreeSet<>(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                if (o1.length() == o2.length()) {
                    return o1.compareTo(o2); // 길이가 같으면 사전 순 정렬
                }
                return o1.length() - o2.length(); // 길이 순으로 정렬
            }
        });
        for(int i = 0; i < n; i++) {
            set.add(sc.nextLine().trim());
        }
        sc.close();

        for (String e : set) System.out.println(e);

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_10_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 단어정렬;
import java.util.Comparator;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class WordSortEx {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();

        Set<String> set = new TreeSet<>((o1, o2) -> {
            if (o1.length() == o2.length()) {
                return o1.compareTo(o2); // 길이가 같으면 사전 순 정렬
            }
            return o1.length() - o2.length(); // 길이 순으로 정렬
        });
        for(int i = 0; i < n; i++) {
            set.add(sc.nextLine().trim());
        }
        sc.close();

        for (String e : set) System.out.println(e);

    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_10_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자동차클래스정렬;
import java.util.Iterator;
import java.util.TreeSet;

public class CarSortMain {
    public static void main(String[] args) {
        TreeSet<CarSortInfo> treeSet = new TreeSet<>(new CarSortComparator().reversed());
        treeSet.add(new CarSortInfo(1999, "소나타", 2000));
        treeSet.add(new CarSortInfo(1988, "프라이드", 700));
        treeSet.add(new CarSortInfo(2001, "그랜저", 2800));
        treeSet.add(new CarSortInfo(2012, "싼타페", 3500));
        treeSet.add(new CarSortInfo(2022, "GV80", 7000));

        Iterator<CarSortInfo> iterator = treeSet.iterator();
        while(iterator.hasNext()) {
            CarSortInfo car = iterator.next();
            System.out.println(car.productYear + " " + car.carName + " " + car.price);
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_10_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자동차클래스정렬;

public class CarSortInfo {
    public int productYear;
    public String carName;
    public int price;

    public CarSortInfo(int productYear, String carName, int price) {
        this.productYear = productYear;
        this.carName = carName;
        this.price = price;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_06_10_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자동차클래스정렬;
import java.util.Comparator;

public class CarSortComparator implements Comparator<CarSortInfo> {

    @Override
    public int compare(CarSortInfo o1, CarSortInfo o2) {
        return o1.carName.compareTo(o2.carName);
    }

    @Override
    public Comparator<CarSortInfo> reversed() {
        return Comparator.super.reversed();
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
            06. 제네릭 / 컬렉션 프레임워크
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            10. ✏️ 예제 : 컬렉션 프레임워크
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle1>
          학생 성적 정렬하기 (Compareble)
        </ClassContentsTitle1>
        <ClassContentsText>
          5명의 학생에 대해 이름과 성적을 입력 성적이 높은 사람 순으로 정렬하기
          <Java_06_10_Code01 />
          <Java_06_10_Code02 />
        </ClassContentsText>
        <br />
        <hr />
        <br />
        <ClassContentsTitle1>단어 정렬</ClassContentsTitle1>
        <ClassContentsText>
          알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라
          정렬하는 프로그램을 작성하시오.
          <br />
          1. 길이가 짧은 것부터
          <br />
          2. 길이가 같으면 사전 순으로
          <br />
          3. 중복 제거
        </ClassContentsText>
        <ClassContentsTitle3>입력 예시</ClassContentsTitle3>
        <ClassContentsText>
          <ClassContentsCodeBox>
            13
            <br />
            but
            <br />
            i<br />
            wont
            <br />
            hesitate
            <br />
            no
            <br />
            more
            <br />
            no
            <br />
            more
            <br />
            it
            <br />
            cannot
            <br />
            wait
            <br />
            im
            <br />
            yours
          </ClassContentsCodeBox>
        </ClassContentsText>
        <ClassContentsTitle3>출력 예시</ClassContentsTitle3>
        <ClassContentsText>
          <ClassContentsCodeBox>
            i<br />
            im
            <br />
            it
            <br />
            no
            <br />
            but
            <br />
            more
            <br />
            wait
            <br />
            wont
            <br />
            yours
            <br />
            cannot
            <br />
            hesitate
          </ClassContentsCodeBox>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>코드 (익명의 클래스)</ClassContentsTitle3>
        <ClassContentsText>
          <Java_06_10_Code03 />
        </ClassContentsText>
        <ClassContentsTitle3>코드 (람다식으로 변경)</ClassContentsTitle3>
        <ClassContentsText>
          <Java_06_10_Code04 />- <b>매개변수</b> :{" "}
          <ClassContentsCode>(o1, o2)</ClassContentsCode>가{" "}
          <ClassContentsCode>compare</ClassContentsCode>
          메서드의 매개변수입니다. 람다식에서는 메서드 이름(
          <ClassContentsCode>compare</ClassContentsCode>)이나 매개변수의 타입(
          <ClassContentsCode>String</ClassContentsCode>)을 명시적으로 적을
          필요가 없습니다. Java 컴파일러가 타입을 추론하기 때문입니다.
        </ClassContentsText>
        <br />
        <hr />
        <br />
        <ClassContentsTitle1>
          자동차 클래스 생성 및 정렬 (Comparator 사용)
        </ClassContentsTitle1>
        <ClassContentsText>
          - 연식, 이름, 가격에 대한 인스턴스 필드 생성
          <br />- 10개의 데이터 입력 받음
          <br />- 연식(오름차순, 내림차순), 이름(오름차순, 내림차순),
          가격(오름차순, 내림차순)
          <Java_06_10_Code05 />
          <Java_06_10_Code06 />
          <Java_06_10_Code07 />
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
export default Java_06_10_M;
