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

const Java_04_12_M = () => {
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
    navigate("/study/java/04/12");
    window.location.reload();
  };

  const Java_04_12_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        Bank kakao = new Bank("카카오", 1000);
        Bank shinhan = new Bank("신한", 1000);
        kakao.viewAccount();
        System.out.println(Bank.getCount());
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_12_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 정적메소드;

public class Bank {
    private static int count = 0; // 정적 멤버
    private int account;
    private String bank;
    Bank(String name, int account) {
        count++;
        this.bank = name;
        this.account = account;
        System.out.println(name + "은행에 계좌 개설 합니다. 잔액은 " + account + "입니다");
    }

    public static int getCount() { // 정적 메소드
        return count;
    }

    public void setDeposit(final int dep) {
        this.account += dep;
        System.out.println(dep + "을 예금 했습니다.");
    }
    public void setWithdraw(final int with) {
        if(with > account) {
            System.out.println("잔액이 부족 합니다.");
        } else {
            account -= with;
        }
    }
    public void viewAccount() {
        System.out.println("현재 잔액은 " + account + "입니다.");
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_12_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
import java.text.SimpleDateFormat;
import java.util.Date;

class Util {
    public static String getCurrentDate(String fmt) {
        SimpleDateFormat sdf = new SimpleDateFormat(fmt);
        return sdf.format(new Date());
    }
}

public class Sample {
    public static void main(String[] args) {
        System.out.println(Util.getCurrentDate("yyyyMMdd"));  // 오늘 날짜 출력
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_04_12_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class DefineVal {
	static final DOMAIN = "192.168.30.43";
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
            04. 객체 지향 프로그래밍
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>
            12. 정적 멤버 & Method
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
          <b>
            static은 고정된 의미를 가지고 있으며, 정적 멤버는 클래스에 고정된
            멤버로서 객체를 생성하지 않고 사용 할수 있는 필드와 메소드를 의미
            합니다.{" "}
          </b>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>정적 메소드 사용</ClassContentsTitle2>
        <ClassContentsText>
          정적 메소드 내부에서는 인스턴스 필드나 인스턴스 매소드를 사용 할 수
          없습니다.
          <br />
          static 변수와 메소드는 클래스를 통해 호출 됩니다.
          <Java_04_12_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle3>Bank Class 만들기</ClassContentsTitle3>
        <ClassContentsText>
          -{" "}
          <font color="#2c79c1">
            <i>private static int count</i>
          </font>
          는 Bank Class가 몇번 생성되었는지를 누적하는{" "}
          <b>정적멤버(클래스 필드)</b> 입니다.
          <br />-{" "}
          <font color="#2c79c1">
            <i>public static int getCount()</i>
          </font>
          는 정적 메소드이며 정적멤버에 대한 게터 입니다.
          <br />- 매개변수에 사용된 final은 전달 받은 매개변수가 변경되는 것을
          방지하기 위해 사용 됩니다.
          <Java_04_12_Code02 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>사용 예</ClassContentsTitle2>
        <ClassContentsTitle3>자주 사용하는 유틸리티 작성</ClassContentsTitle3>
        <ClassContentsText>
          <b>static 메소드는 유틸리티성 메소드 작성할 때 자주 사용</b>
          됩니다.
          <Java_04_12_Code03 />
        </ClassContentsText>
        <ClassContentsTitle3>final 필드와 상수</ClassContentsTitle3>
        <ClassContentsText>
          final 선언 시 값을 단 한번만 대입할 수 있도 이후로는 변경 할 수 없는
          상수의 특성을 가집니다.
          <br />
          하지만, 자바에서는 final 선언으로만 상수로 부르지 않습니다.
          <br />
          왜냐면 변하지 않는 불변의 값은 객체마다 저장 할 필요가 없기 때문에 단
          한번만 생성되어야 하기 때문입니다.
          <br />
          그러므로,{" "}
          <ClassContentsCode>
            static final 데이터 타입 상수명;
          </ClassContentsCode>{" "}
          선언되어야 합니다.
          <Java_04_12_Code04 />
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

export default Java_04_12_M;
