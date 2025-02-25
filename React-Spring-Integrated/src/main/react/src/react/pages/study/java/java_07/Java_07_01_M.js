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

const Java_07_01_M = () => {
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
    navigate("/study/java/07/01");
    window.location.reload();
  };

  const Java_07_01_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample {
    public static void main(String args[]){
        Thread subThread1 = new CustomThread(); // Thread를 상속한 객체 생성
        subThread1.start();
    }
}

// Thread 클래스 상속 받음
public class CustomThread extends Thread {
    @Override
    public void run() {
        int sum = 0;
        for(int i = 0; i <= 10; i++) {
            sum += i;
            System.out.println(sum);
        }
        System.out.println(Thread.currentThread() + "합 : " + sum);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample implements Runnable {
		// Runnable 인터페이스 상속 후 메소드 오버라이딩 완성
    @Override
    public void run() {
        int sum = 0;
        for(int i = 0; i <= 10; i++) {
            sum += i;
            System.out.println(sum);
        }
        System.out.println(Thread.currentThread() + "최종 합 : " + sum);
    }
    public static void main(String[] args) {
        Runnable task = new Sample(); //Runnable은 작업 내용을 가지고 있는 객체이지만 실제 쓰레드가 아님
        Thread subThread1 = new Thread(task);
        Thread subThread2 = new Thread(task);
        subThread1.start();
        subThread2.start();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample {
    public static void main(String[] args) {
        Runnable task = new Runnable() {
            @Override
            public void run() {
                int sum = 0;
                for(int i = 0; i <= 10; i++) {
                    sum += i;
                    System.out.println(sum);
                }
                System.out.println(Thread.currentThread() + "최종 합 : " + sum);
            }
        };
        Thread subThread1 = new Thread(task);
        Thread subThread2 = new Thread(task);
        subThread1.start();
        subThread2.start();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample {
    public static void main(String args[]){
        Runnable task = ()-> {
            int sum = 0;
            for (int index = 0; index < 10; index++) {
                sum += index;
                System.out.println(sum);
            }
            System.out.println( Thread.currentThread() + "최종 합 : " + sum);
        };

        Thread subTread1 = new Thread(task);
        Thread subTread2 = new Thread(task);
        subTread1.start();
        subTread2.start();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
	클래스명 레퍼런스 = new 생성자(); // Thread를 상속한 객체 생성
	레퍼런스.setPriority(1 ~ 10);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
try {
    Thread.sleep(2000);
} catch (InterruptedException e) {
    throw new RuntimeException(e);
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[]args) {
  Toolkit toolkit = Toolkit.getDefaultToolkit();
  for(int i = 0; i < 10; i++) {
      toolkit.beep();
      try {
          Thread.sleep(3000);
      } catch(InterruptedException e) {
      }
  }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 쓰레드3;
public class ThreadA extends Thread {
    boolean stop = false; // 종료 플래그
    boolean work = true; // 작업 진행 여부에 대한 플래그

    public void run() {
        while(!stop) {
            if(work) {
                System.out.println("ThreadA가 작업 중 입니다.");
            } else {
                Thread.yield();
            }
        }
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 쓰레드3;
public class ThreadB extends Thread {
    boolean stop = false;
    boolean work = true;

    public void run() {
        while(!stop) {
            if(work) {
                System.out.println("ThreadB가 작업 중 입니다.");
            } else {
                Thread.yield();
            }
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 쓰레드3;
// yield() : 다른 쓰레드에게 실행을 양보하는 것
// 대기 상태로 가는것이 아니고 현재 수행 순서를 양보 함 (수행 대기열을 건너 뜀)
public class ThreadMainEx3 {
    public static void main(String[] args) {
        ThreadA threadA = new ThreadA();
        ThreadB threadB = new ThreadB();

        threadA.start();
        threadB.start();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {}
        threadA.work = false; // thread A 일 중지

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e ) {}
        threadA.work = true; // Thread A, Thread B 둘 다 동작

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) { }
        threadA.stop = true;
        threadB.stop = true;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String args[]){
    SumThread sumThread = new SumThread();
    sumThread.start();
    try {
        sumThread.join();
    } catch (InterruptedException e) {
        throw new RuntimeException(e);
    }
    System.out.println("합 : " + sumThread.getSum());
}

public class SumThread extends Thread {
    private long sum;
    public long getSum() {
        return sum;
    }

    public void setSum(long sum) {
        this.sum = sum;
    }
    public void run() {
        for(int i = 0; i <= 100; i++) {
            sum += 1;
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[] args) {
        WorkObject sharedObject = new WorkObject(); // 고유 객체 생성
        ThreadA threadA = new ThreadA(sharedObject);
        ThreadB threadB = new ThreadB(sharedObject);
        threadA.start();
        threadB.start();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class WorkObject {
    public synchronized void methodA() {
        System.out.println("Thread의 methodA() 작업 실행");
        notify(); // 일시 정지에 있는 ThreadB를 실행 대기 상태로 만듦
        try {
            wait();  // ThreadA를 일시 정지 상태로 만듬
        } catch (InterruptedException e) {
        }
    }
    public synchronized void methodB() {
        System.out.println("Thread의 methodB() 작업 실행");
        notify(); // 일시 정지에 있는 ThreadA를 실행 대기 상태로 만듦
        try {
            wait();  // ThreadB를 일시 정지 상태로 만듬
        } catch (InterruptedException e) {
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class ThreadA extends Thread {
    private WorkObject workObject;

    public ThreadA(WorkObject workObject) {
        this.workObject = workObject;
    }

    @Override
    public void run() {
        for(int i = 0; i < 10; i++) {
            workObject.methodA();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class ThreadB extends Thread {
    private WorkObject workObject;

    public ThreadB(WorkObject workObject) {
        this.workObject = workObject;
    }

    @Override
    public void run() {
        for(int i = 0; i < 10; i++) {
            workObject.methodB();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[]args) throws InterruptedException {
        RunTread runTread = new RunTread();
        runTread.start();
        Thread.sleep(1000);
        runTread.setStop(true);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class RunTread extends Thread {
    private boolean stop; // stop 플래그 설정

    public void setStop(boolean stop) {
        this.stop = stop;
    }

    public void run() {
        while(!stop) {
            System.out.println("Thread 실행 중...");
        }
        System.out.println("자원 정리");
        System.out.println("실행 종료");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Main {
    public static void main(String[]args) {
        InterruptThread interThread = new InterruptThread();
        interThread.start();
        try {
            Thread.sleep(1000);
        } catch(InterruptedException e) { }
        interThread.interrupt();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class InterruptThread extends Thread {
    public void run() {
        try {
            while(true) {
                System.out.println("쓰레드 실행 중...");
                Thread.sleep(1);
            }
        } catch(InterruptedException e) {
        }
        System.out.println("자원 정리");
        System.out.println("실행 종료");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public synchronized void method() {
	// 한개의 스레드만 실행 할 수 있음
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code21 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public void method1() {
	// 여러 스레드 실행 할 수 있음
	synchronized (공유 객체) {
		// 한 개의 스레드만 실행 할 수 있음
	}
	// 여러 스레드 실행 할 수 있음
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code22 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class Sample {
    public static void main(String args[]){
        ShareThread shareThread = new ShareThread();
				// 람다식으로 익명의 클래스 생성
        Thread thread1 = new Thread(()->{
            shareThread.setValue(100);
        });
        Thread thread2 = new Thread(()->{
            shareThread.setValue(10);
        });
        thread1.setName("쓰레드 1");
        thread2.setName("쓰레드 2");
        thread1.start();
        thread2.start();
    }
}

public class ShareThread {
    private int value = 0;

    public int getValue() {
        return value;
    }
    public void setValue(int value) {
        this.value = value;
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(Thread.currentThread().getName() + "의 Value 값은 " + this.value + "입니다.");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code23 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public synchronized void setValue(int value) {
        this.value = value;
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(Thread.currentThread().getName() + "의 Value 값은 " + this.value + "입니다.");
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code24 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
deamon.setDaemon(true);
deamon.start();
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code25 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class DaemonEx {
    public static void main(String[] args) throws InterruptedException {
        AutoSaveThread autoSaveThread = new AutoSaveThread();
        autoSaveThread.setDaemon(true);
        autoSaveThread.start();
        Thread.sleep(3000);
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code26 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class AutoSaveThread extends Thread {
    public void save() {
        System.out.println("작업 내용을 저장 함.");
    }
    @Override
    public void run() {
        while(true) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                break;
            }
            save();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_07_01_Code27 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
subThread1.setName("테스트 쓰레드");
subThread1.start();
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
            07. Thread / 예외 처리
          </TopBoxText2>
          <TopBoxArrow2>{`>`}</TopBoxArrow2>
          <TopBoxText2 onClick={() => handleRefresh()}>01. Thread</TopBoxText2>
        </TopBox2>
      </TopBoxWide2>
      <Container>
        {/* <EachClass>
          <ClassHeader>
            <ClassHeaderTitle>Java 시작하기</ClassHeaderTitle>
          </ClassHeader> */}
        {/* <ClassContentsContainer> */}
        <ClassContentsTitle1>
          멀티 스레드(Multi Thread)의 개념
        </ClassContentsTitle1>
        <ClassContentsText>
          {`
                    운영체제(OS)에서 실행 중인 하나의 어플리케이션 즉 ctrl + alt
                    + del창 작업 관리자에서 프로세스 탭에 올라와 있는
                    어플리케이션 하나를 하나의 프로세스라고 부릅니다. ( Ex)
                    Chrome ) 만약 우리가 크롬창을 더블클릭 누른다면(실행)
                    운영체제로부터 필요한 메모리를 할당받아 어플리케이션의
                    코드를 실행하는 것이 프로세스입니다. `}
          <b>크롬을 2개 띄웠다면 두 개의 프로세스가 생성된 것입니다.</b>
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          멀티 태스킹(Multi Tasking)과 멀티 스레드(Multi Thread)
        </ClassContentsTitle2>
        <ClassContentsText>
          멀티 태스킹이란 두 가지 이상의 작업을 동시에 처리하는 것을 말합니다.
          예를 들어 <b>워드로 문서작업을 하는 동시에 음악을 듣는 것</b>은 OS가
          프로세스마다 작업을 병렬로 처리하기에 가능합니다. 멀티 태스킹이 꼭
          멀티 프로세스(워드 + 윈도 플레이어 프로세스 조합)를 말하는 것은
          아닙니다. 
          <b>한 프로세스 내에서 멀티 태스킹을 할 수 있도록 만들어진 프로세스</b>
          , 예를 들어 메신져 프로세스 같은 경우 채팅 기능을 제공하면서 동시에
          파일 업로드 기능을 수행할 수 있습니다. 이처럼 한 프로세스에서 멀티
          태스킹이 가능한 이유는 
          <b>멀티 스레드(Multi Thread)</b> 덕분입니다. 멀티 프로세스는
          프로세스마다 운영체제로부터 할당받은 고유의 메모리를 서로 침범할 수
          없지만 멀티 스레드는 /java/java-jvm/ 포트스에서 확인할 수 있는 것처럼
          프로세스 내부에서의 멀티 스레드는 공유되는 자원이 있어 하나의
          스레드에서 예외가 발생한다면 프로세스 자체가 종료될 수 있습니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>Main Thread</ClassContentsTitle2>
        <ClassContentsText>
          <b>
            모든 자바 어플리케이션은 Main Thread가 main() 메소드를 실행하면서
            시작됩니다.
          </b>
          <br />
          예외는 없습니다. 이러한 Main Thread 흐름 안에서 싱글 스레드가 아닌
          멀티 스레드 어플리케이션은 필요에 따라 작업 스레드를 만들어 병렬로
          코드를 실행할 수 있습니다. 싱글 스레드 같은 경우 메인 스레드가
          종료되면 프로세스도 종료되지만, 멀티 스레드는 
          <b>
            메인 스레드가 종료되더라도 실행 중인 스레드가 하나라도 있다면
            프로세스는 종료되지 않습니다.
          </b>
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>Thread 생성</ClassContentsTitle1>
        <ClassContentsTitle2>Thread 클래스 상속</ClassContentsTitle2>
        <ClassContentsText>
          start() 메소드를 호출하면 작업 스레드는 자신의 run() 메소드를 실행
          합니다.
          <Java_07_01_Code01 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>Runnable 인터페이스 구현</ClassContentsTitle2>
        <ClassContentsText>
          new를 통해 Thread 클래스 객체를 생성 후 start 메서드를 통해 다른
          스레드에서 할 작업을 할당하는 방법 입니다.
          <br />
          Thread 객체를 생성할 때는 Runnable 인터페이스를 구현한 클래스 객체를
          매개변수로 받습니다.
          <br />
          start() 메서드를 호출하면 작업 스레드는 자신의 run() 메소드를 실행
          합니다.
          <Java_07_01_Code02 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>익명 구현 객체</ClassContentsTitle2>
        <ClassContentsText>
          1회용 객체로 구현
          <Java_07_01_Code03 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>람다식으로 구현하기</ClassContentsTitle2>
        <ClassContentsText>
          <Java_07_01_Code04 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle1>Thread 우선순위</ClassContentsTitle1>
        <ClassContentsTitle3>동시성과 병렬성</ClassContentsTitle3>
        <ClassContentsText>
          멀티 스레드는 동시성( Concurrency ) 또는 병렬성( Parallelism )으로
          실행됩니다. 동시성이랑 멀티작업을 위해 1개의 코어로 스레드마다
          돌아가면서 조금씩 실행하지만, 너무 빨라 사람의 눈에 보기에는
          독립적으로 돌아가는 것처럼 보이는 것을 말하며 병렬성이란 스레드마다
          각각의 독립적인 Core가 할당되어 독립적인 Core에서 작업이 이루어지는
          것을 말합니다. 코어의 수보다 스레드의 수가 작으면 각각의 코어로
          병렬성이 보장되지만 스레드의 개수가 코어보다 많은 경우 스레드를 어떤
          순서에 의해 동시적으로 실행할 것인가를 결정해 주어야 합니다. 이것을
          스레드 스케줄링이라 합니다. 이런 스케쥴링 방식은
          <b>우선순위(Priority) 방식과 순환 할당(Round-Robin) 방식</b>
          으로 나누어집니다.
        </ClassContentsText>
        <ClassContentsTitle3>우선순위(Priority) 방식</ClassContentsTitle3>
        <ClassContentsText>
          우선순위가 높은 스레드가 실행을 더 많이 하도록 스케줄링하는
          방법입니다.
          <br />- thread.setPriority(1) : 우선 순위 가장 낮음
          <br />- thread .setPriority(10) : 우선 순위 가장 높음
          <Java_07_01_Code05 />
        </ClassContentsText>
        <ClassContentsTitle3>순환 할당(Round-Robin) 방식</ClassContentsTitle3>
        <ClassContentsText>
          시간 할당량을 정해서 하나의 스레드를 정해진 시간만큼만 실행하는
          방법입니다. 해당 방식은 JVM안에서 이루어지기 때문에 개발자가 제어할 수
          없습니다.
        </ClassContentsText>
        <ClassContentsTitle1>스레드 상태</ClassContentsTitle1>
        <ClassContentsText>
          스레드로 객체를 생성하면 우선 실행 대기 상태로 들어갑니다. 
          <b>실행 대기</b> 상태란 아직 스케쥴링 전 즉 코어에서 작업을 할당받지
          못한 상태입니다. 실행 대기 상태에 있는 스레드 중 스레드 스케쥴링으로
          선택된 스레드가 CPU를 점유하고 run()을 실행합니다. 이때 CPU를 점유하고
          있는 상태가 <b>실행</b> 상태입니다. 아직 run()메소드가 끝나지 않아도
          스레드 스케쥴링에 의해 다시 실행 대기 상태로 돌아가며 번갈아 가면서
          내용을 끝낼 때까지 지속합니다. 경우에 따라 run중인 스레드를 
          <b>일시 정지</b> 시킬 수도 있는데 예제에서 많이 보았던 sleep()
          메서드와 같은 경우입니다. 일시 정지 후에는 다시 실행 대기 상태로
          갑니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>스레드 상태 제어</ClassContentsTitle2>
        <ClassContentsText>
          실행 중인 스레드 상태를 변경하는 것을 스레드 상태 제어라고 합니다.
          멀티 프로그램을 만들기 위해서는 정교한 스레드 상태 제어가 필요합니다.
          상태를 제어하는 메소드는 아래 그림과 같습니다.
          <ClassContentsImage
            style={{
              width: "100%",
              height: "200px",
              backgroundImage: `url(${"/images/study/java/java_07_01_01.png"})`,
            }}
          />
          <ClassTableBox>
            <ClassTable style={{ textAlign: "center" }}>
              <ClassTableTr>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>메서드</b>
                </ClassTableTd>
                <ClassTableTd style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                  <b>설명</b>
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>interrupt()</ClassTableTd>
                <ClassTableTd>
                  일시 정지 상태의 스레드에서 InterruptException 예외를
                  발생시켜, 예외 처리 코드{" "}
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>notify(), notifyAll()</ClassTableTd>
                <ClassTableTd>
                  동기화 블록 내에서 wait() 메소드에 의해 일시 정지 상태에 있는
                  스레드를 실행 대기 상태로 만듦
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>
                  <del>resume()</del>
                </ClassTableTd>
                <ClassTableTd>
                  suspend() 메소드에 의해 일시 정지 상태에 있는 스레드를 대기
                  상태로 만든다.(Deprecated 됨, 대신에 notify(), notifyAll()
                  사용)
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>sleep()</ClassTableTd>
                <ClassTableTd>
                  주어진 시간 동안 스레드를 일시 정지 상태로 만든다.
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>join()</ClassTableTd>
                <ClassTableTd>
                  join()메소드를 호출한 스레드는 일시 정지 상태가 된다. 실행
                  대기 상태로 가려면 join() 메소드를 멤버로 가진 스레드가 종료
                  되거나, 매개값으로 주어진 시간이 지나야 한다.
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>wait()</ClassTableTd>
                <ClassTableTd>
                  동기화 블록 내에서 스레드를 일시 정지 상태로 만든다.
                  매개변수가 주어지면 주어진 시간이 지나면 자동으로 실행 대기
                  상태가 된다. 시간이 주어지진 않으면 notify(), notifyAll()
                  메소드에 의해 실행 대기 상태로 전환
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>
                  <del>suspend()</del>
                </ClassTableTd>
                <ClassTableTd>
                  스레드를 일시 정지 상태로 만든다. (Deprecated 됨, 대신 wait()
                  사용)
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>yield()</ClassTableTd>
                <ClassTableTd>
                  실행중에 우선순위가 동일한 다른 스레드에개 실행을 양보하고
                  대기 상태가 된다.
                </ClassTableTd>
              </ClassTableTr>
              <ClassTableTr>
                <ClassTableTd>
                  <del>stop()</del>
                </ClassTableTd>
                <ClassTableTd>
                  스레드를 종료시킨다. (Deprecated 됨)
                </ClassTableTd>
              </ClassTableTr>
            </ClassTable>
          </ClassTableBox>
        </ClassContentsText>
        <ClassContentsTitle3>
          주어진 시간 동안 일시 정지(sleep())
        </ClassContentsTitle3>
        <ClassContentsText>
          실행 중인 스레드를 일정 시간 멈추고 싶다면 Thread 클래스의 정적
          매소드인 sleep()메소드를 사용하면 됩니다.
          <br />
          Thread.sleep(시간) 메소드를 호출한 스레드는 주어진 시간 동안 일시 정지
          상태가 되고, 이후 다시 실행 상태로 돌아갑니다.
          <Java_07_01_Code06 />
        </ClassContentsText>
        <ClassContentsTitle3>3초 주기로 10번 비프음 발생</ClassContentsTitle3>
        <ClassContentsText>
          <Java_07_01_Code07 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          다른 스레드에 실행 양보(yield())
        </ClassContentsTitle2>
        <ClassContentsText>
          스레드가 처리하는 작업은 반복적인 실행을 위해 for이나 while문을
          포함하는 경우가 많습니다.
          <br />
          무의미한 반복 실행 경우에 다른 스레드에게 실행을 양보하는 경우에
          사용하는 메소드 입니다.
          <Java_07_01_Code08 />
          <Java_07_01_Code09 />
          <Java_07_01_Code10 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          다른 스레드의 종료를 기다림(join())
        </ClassContentsTitle2>
        <ClassContentsText>
          스레드는 다른 스레드와 독립적으로 실행되는 것이 기본이지만
          <b>다른 스레드가 종료될 때까지 기다렸다가 실행해야 하는 경우</b>
          가 있습니다. 예를 들어 계산 작업을 하는 스레드가 모든 계산을 마치고
          결과값을 받아 이용해야 하는 경우가 이에 해당 합니다.
          <br />
          이런 경우를 위해 Thread는 join() 메소드를 제공 합니다.
          <Java_07_01_Code11 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          스레드 간 협업(wait(), notify(), notifyAll())
        </ClassContentsTitle2>
        <ClassContentsText>
          - 경우에 따라 두 개의 스레드가 번갈아가며 실행해야 할 경우가 있습니다.
          <br />- 한 스레드가 작업을 완료하면{" "}
          <b>
            <font color="red">notify() 메소드</font>를 호출
          </b>
          해서 일시 정지 상태에 있는 다른 스레드를 실행 대기 상태로 만들고,
          자신은 두번째 작업을 하지 않도록{" "}
          <b>
            <font color="red">wait() 메소드 호출</font>
          </b>
          <br />-{" "}
          <b>
            <font color="red">notifyAll() 메소드</font>
          </b>
          는 wait()에 의해 일시 정지된 모든 스레드를 실행 대기 상태로 만듭니다.
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">Main.java</font>
        </ClassContentsTitle3>
        <Java_07_01_Code12 />
        <ClassContentsTitle3>
          <font color="black">WorkObject</font>
        </ClassContentsTitle3>
        <Java_07_01_Code13 />
        <ClassContentsTitle3>
          <font color="black">ThreadA</font>
        </ClassContentsTitle3>
        <Java_07_01_Code14 />
        <ClassContentsTitle3>
          <font color="black">ThreadB</font>
        </ClassContentsTitle3>
        <Java_07_01_Code15 />
        <br />
        <ClassContentsTitle2>
          스레드의 안전한 종료(stop 플래그, interrupt())
        </ClassContentsTitle2>
        <ClassContentsTitle3>stop 플래그를 이용하는 방법</ClassContentsTitle3>
        <ClassContentsTitle3>
          <font color="black">Main.java</font>
        </ClassContentsTitle3>
        <Java_07_01_Code16 />
        <ClassContentsTitle3>
          <font color="black">RunThread</font>
        </ClassContentsTitle3>
        <Java_07_01_Code17 />
        <br />
        <ClassContentsTitle3>
          interrupt() 메소드를 이용하는 방법
        </ClassContentsTitle3>
        <ClassContentsText>
          interrupt() 메소드는 스레드가 일시 정지 상태에 있을 때
          InterruptException 예외를 발생 시킨다.
          <br />
          이것을 이용하여 run() 메소드를 정상 종료 시킬 수 있다.
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">Main.java</font>
        </ClassContentsTitle3>
        <Java_07_01_Code18 />
        <ClassContentsTitle3>
          <font color="black">InterruptThread</font>
        </ClassContentsTitle3>
        <Java_07_01_Code19 />
        <br />
        <ClassContentsTitle1>동기화(Synchronized)</ClassContentsTitle1>
        <ClassContentsText>
          한번에 한개의 스레드만 프로세스 공유 자원에 접근 할 수 있도록
          락(Lock)을 걸어 다른 스레드가 진행 중인 작업을 간섭하지 못하도록 하는
          것
          <ClassContentsImage
            style={{
              width: "100%",
              height: "200px",
              backgroundImage: `url(${"/images/study/java/java_07_01_02.png"})`,
            }}
          />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>동기화 메소드</ClassContentsTitle2>
        <Java_07_01_Code20 />
        <br />
        <ClassContentsTitle2>동기화 블록</ClassContentsTitle2>
        <Java_07_01_Code21 />
        <ClassContentsImage
          style={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${"/images/study/java/java_07_01_03.png"})`,
          }}
        />
        <br />
        <ClassContentsTitle2>
          동기화가 안돼 정상 동작하지 않는 코드
        </ClassContentsTitle2>
        <ClassContentsText>
          아래의 코드에서 Thread객체를 생성하는 방법은 익명의 객체를 람다식으로
          구현했습니다.
          <br />
          익명의 객체가 아닌 경우에는 Thread클래스를 상속 받은 클래스 내부에서
          기능을 구현하지만 익명의 객체는 {} 내에서 바로 기능을 구현하는 방식
          입니다.
          <Java_07_01_Code22 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>
          동기화 메소드 또는 동기화 블록 코드
        </ClassContentsTitle2>
        <ClassContentsText>
          {`스레드가 사용 중인 객체를 Lock을 걸어 해당 작업을 진행하는
                    Thread가 작업을 마칠 때까지 다른 스레드가 작업을 하지 못하게
                    하는 방법입니다. 메소드 선언에 synchronized를 붙이던가 (
                    동기화 메소드 ) synchronized( 공유객체 ) {작업} 인 동기화
                    블록을 사용하면 됩니다.`}
          <Java_07_01_Code23 />
          하지만 Synchronized 키워드를 너무 남발하면 오히려 프로그램 성능저하를
          일으킬 수 있기 때문에 적재 적소에 잘 사용해야 합니다.
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>데몬 스레드</ClassContentsTitle2>
        <ClassContentsText>
          - 다른 스레드의 작업들 돕는 보조적인 역할을 수행하는 스레드 입니다.
          <br />- 데몬 스레드 이외의 스레드가 모두 종료 되면 데몬 스레드도 강제
          종료 됩니다.
          <br />- start() 메소드 호출 전에 setDeamon(true)를 호출해야 합니다.
          <Java_07_01_Code24 />
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">DeamonEx</font>
        </ClassContentsTitle3>
        <Java_07_01_Code25 />
        <ClassContentsTitle3>
          <font color="black">AutoSaveThread</font>
        </ClassContentsTitle3>
        <Java_07_01_Code26 />
        <br />
        <ClassContentsTitle2>Thread 이름 생성</ClassContentsTitle2>
        <ClassContentsText>
          기본 스레드는 thread.getName()을 통해 Thread-n이라는 이름을 가지고 올
          수 있습니다. 하지만 조금 더 수월한 디버깅을 위해
          thread.setName(“스레드 이름”)을 통해 스레드의 이름을 설정할 수
          있습니다.
          <Java_07_01_Code27 />
        </ClassContentsText>
        <br />
        <ClassContentsTitle2>인터럽트</ClassContentsTitle2>
        <ClassContentsTitle3>
          <font color="black">사전적 의미</font>
        </ClassContentsTitle3>
        <ClassContentsText>
          인터럽트란? 입출력 장치에서 예외사항이 발생하여 처리가 필요할 경우
          프로세서에데 알려 처리 할 수 있도록 하는 것
        </ClassContentsText>
        <ClassContentsTitle3>
          <font color="black">interrupt()</font>
        </ClassContentsTitle3>
        <ClassContentsText>
          - 해당 스레드에 인터럽트를 거는 역할을 함<br />
          Thread.sleep()이나 Object.wait()메소드와 같은 블로킹 메소드는 인터럽트
          상태를 확인하고 있다가 인터럽트가 걸리면 즉시 리턴된다. 위 두 메서드는
          대기하던 중에 인터럽트가 걸리면 인터럽트 상태를 해제하면서
          InterruptedException을 던진다. 여기서 던지는 InterruptedException은
          인터럽트가 발생해 대기 중이던 상태가 예상보다 빨리 끝났다는 것을
          뜻한다.
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
export default Java_07_01_M;
