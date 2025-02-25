import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
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

const Java_03_04_M = () => {
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
    navigate("/study/java/03/04");
    window.location.reload();
  };

  const Java_03_04_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 회원정보;

public class Main {
    public static void main(String[] args) {
        Member member = new Member();
        member.setName();
        member.setAge();
        member.setGender();
        member.setJobs();
        member.getInfo();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_03_04_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 회원정보;

import java.util.Scanner;

public class Member {
    // 필드 추가 하기
    String name;
    int age;
    char gender;
    int jobs;
    Scanner sc = new Scanner(System.in);

    public void setName() {
        System.out.print("이름을 입력 하세요 : ");
        name = sc.nextLine();
    }

    public char getGender() {
        return gender;
    }

    public int getGenderType() {
        if (gender == 'M' || gender == 'm') return 1;
        else return 2;
    }

    public void setGender() {
        while(true) {
            System.out.print("성별을 입력 하세요 : ");
            gender = sc.next().charAt(0);
            switch(gender) {
                case 'M' :
                case 'm' :
                case 'F' :
                case 'f' :
                    break;
                default :
                    System.out.println("성별을 잘 못 입력 하셨습니다. ");
                    continue;
            }
            break;
        }
    }

    public int getJobs() {
        return jobs;
    }

    public void setJobs() {
        while(true) {
            System.out.print("직업을 입력 하세요 : ");
            jobs = sc.nextInt();
            if (jobs > 0 && jobs < 5) break;
            else System.out.println("직업이 잘 못 입력 되었습니다. 다시 입력 하세요.");
        }
    }

    public String getName() {
        return name;
    }

    public void setAge() {
        while(true) {
            System.out.print("나이를 입력 하세요 : ");
            age = sc.nextInt();
            if (age > 0 && age < 200) break;
            else System.out.println("나이를 잘못 입력 하셨습니다. 다시 입력 하세요.");
        }
    }
    public int getAge() {
        return age;
    }

    public void getInfo() {
        String[] genderStr = {"", "남성", "여성"};
        String[] jobsStr = {"", "학생", "회사원", "주부", "무직"};
        System.out.println("======= 회원 정보 =======");
        System.out.println("이름 : " + name);
        System.out.println("나이 : " + age);
        System.out.println("성별 : " + genderStr[getGenderType()]);
        System.out.println("직업 : " + jobsStr[jobs]);
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
            03. 배열과 문자열
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            04. ✏️ 예제 : 회원정보
          </TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
            <ClassHeader>
              <ClassHeaderTitle>변수와 자료형</ClassHeaderTitle>
            </ClassHeader>
            <ClassContentsContainer> */}
        <ClassContentsText>
          <font color="#2c79c1">
            <i>
              지금까지 배운 내용을 복습하고 앞으로 배울 클래스에 대해 미리
              사용해 보는 예제입니다.
            </i>
          </font>
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>학습 내용</ClassContentsTitle3>
        <ClassContentsText>
          - 사용 목적에 맞는 데이터형을 사용해 변수를 만든다.
          <br />- 값이 변경되지 않는 자료형에 대해서는 상수로 선언 한다.
          <br />- 연산자, 조건문, 반복문 등을 사용한다.
          <br />- 클래스에 대해서 사전 학습 한다.
        </ClassContentsText>
        <ClassContentsTitle3>조건</ClassContentsTitle3>
        <ClassContentsText>
          - 이름은 String 클래스로 입력 받는다. (이후에 학습할 내용)
          <br />- 나이는 정수타입으로 입력 받는다. 나이는 0 ~ 199까지만 정상적인
          값으로 판단하고 다른 숫자가 입력되면 재 입력 요구를 한다. 단, 숫자
          입력 요구에서 문자가 입력되면 오류가 발생하는데 이 부분에 대해서
          나중에 학습 하도록 한다.
          <br />- 성별은 문자 타입으로 입력 받는다. 남성은 ‘M’, ‘m’, 여성은 ‘F’,
          ‘f’
          <br />
          - 성별에 대한 출력은 “남성"과 “여성" 문자열로 출력 한다.
          <br />- 직업은 정수로 입력(1 ~ 4) 받고 1은 “학생, 2는 “회사원", 3은
          “주부", 4는 “무직"으로 출력 한다.
          <br />- 1 ~ 4사이의 숫자가 아니면 재 입력 요구를 하도록 한다.
          <br />- 결과는 한번에 출력 한다.
          <Java_03_04_Code01 />
          <Java_03_04_Code02 />
        </ClassContentsText>
        {/* </ClassContentsContainer>
          </EachClass> */}
        <ArrowContainer>
          <Java_ArrowNavigation direction="left" />
          <Java_ArrowNavigation direction="right" />
        </ArrowContainer>
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default Java_03_04_M;
