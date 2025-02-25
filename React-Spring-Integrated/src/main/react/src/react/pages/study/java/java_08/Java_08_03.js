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
import Java_08_03_M from "./Java_08_03_M";

const Java_08_03 = () => {
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
    navigate("/study/java/08/03");
    window.location.reload();
  };

  const Java_08_03_Code01 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    OutputStream os = new FileOutputStream("test.db");
    byte a = 10;
    byte b = 20;
    byte c = 30;
    os.write(a);
    os.write(b);
    os.write(c);

    os.flush(); // 버퍼 비우기
    os.close(); // 자원 반납 후 스트림 닫기
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code02 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    OutputStream os = new FileOutputStream("test2.db");
    byte[] array = {10, 20, 30};
    os.write(array);
    os.flush();
    os.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code03 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    OutputStream os = new FileOutputStream("test3.db");
    byte[] array = {10, 20, 30, 40, 50};
    os.write(array, 1, 3); // 배열의 1번 인댁스 부터 3개 출력
    os.flush();
    os.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code04 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    InputStream is = new FileInputStream("test2.db");
    while(true) {
        int data = is.read(); // 1 바이트씩 읽기
        if(data == -1) break; // 파일의 끝에 도달
        System.out.println(data);
    }
    is.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code05 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    InputStream is = new FileInputStream("test2.db");
    byte[] buffer = new byte[100];
    while(true) {
        int readByteNum = is.read(buffer); // 배열의 길이 만큼 읽기
        if(readByteNum == -1) break;  // 파일의 끝에 도달
        for(int i = 0; i < readByteNum; i++) {
            System.out.println(buffer[i]);
        }
    }
    is.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code06 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    InputStream is = new FileInputStream("test2.db");
    byte[] buffer = new byte[5];
    int readByteNum = is.read(buffer, 2, 3);
    if(readByteNum != -1) {
        for(int i = 0; i < buffer.length; i++) {
            System.out.println(buffer[i]);
        }
    }
    is.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code07 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
		Writer writer = new FileWriter("test.txt");
		char[] data = "곰돌이사육사".toCharArray();
		for(int i=0; i<data.length; i++) {
			writer.write(data[i]);
		}
		writer.flush();
		writer.close();
	}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code08 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
		Writer writer = new FileWriter("test.txt");
		char[] data = "곰돌이사육사".toCharArray();
		writer.write(data);

		writer.flush();
		writer.close();
	}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code09 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
		Writer writer = new FileWriter("test.txt");
		//char[] data = "곰돌이사육사".toCharArray();
		String data = "곰돌이사육사";
		writer.write(data, 1, 2);

		writer.flush();
		writer.close();
	}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code10 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
    Reader reader = new FileReader("src/test.txt");
    int readData;
    while( true ) {
        readData = reader.read();
        if(readData == -1) break;
        System.out.print((char)readData);
    }
    reader.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code11 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
    Reader reader = new FileReader("src/test.txt");
    int readCharNo;
    char[] cbuf = new char[10];
    String data = "";
    while( true ) {
        readCharNo = reader.read(cbuf);
        if(readCharNo == -1) break;
        data += new String(cbuf, 0, readCharNo);
    }
    System.out.println(data);

    reader.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code12 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
File file = new File("C:\\Temp\\file.txt");
File file = new File("C:/Temp/file.txt");
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code13 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws URISyntaxException, IOException {
    File temp = new File("src");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd   a   HH:mm");
        File[] contents = temp.listFiles();
        System.out.println("날짜              시간         형태       크기    이름");
        System.out.println("-------------------------------------------------------------------");
        for(File file : contents) {
            System.out.print(sdf.format(new Date(file.lastModified()))); // 파일의 최종 갱신 시간
            if(file.isDirectory()) {
                System.out.print("\t<DIR>\t\t\t" + file.getName()); // 파일 이름을 스트링으로 반환
            } else {
                System.out.print("\t\t\t" + file.length() + "\t" + file.getName());
            }
            System.out.println();
        }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code14 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("src/파일인풋스트림/FileInputStreamEx.java");
            int data;
            while ( (data = fis.read() ) != -1 ) {
                System.out.write(data);
            }
            fis.close();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code15 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    String originalFileName = "src/파일아웃풋스트림/house.jpg";
    String targetFileName = "src/house.jpg";

    FileInputStream fis = new FileInputStream(originalFileName);
    FileOutputStream fos = new FileOutputStream(targetFileName);

    int readByteNo;
    byte[] readBytes = new byte[100];
    while( (readByteNo = fis.read(readBytes)) != -1 ) {
        fos.write(readBytes, 0, readByteNo);
    }

    fos.flush();
    fos.close();
    fis.close();

    System.out.println("복사가 잘 되었습니다.");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code16 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 파일입출력;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileInput {
    public static void main(String[] args) {
        FileInputStream inputStream = null;

        try {
            inputStream = new FileInputStream("src/파일입출력/chiken.txt");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        Scanner sc = new Scanner(inputStream);
        while(sc.hasNextLine()) {
            String line = sc.nextLine();
            System.out.println(line);
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code17 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
보조스트림 변수 = new 보조스트림(연결스트림);
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code18 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
InputStream is = System.in;
InputStreamReader reader = new InputStreamReader(is);
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code19 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
    InputStream is = System.in;
    Reader reader = new InputStreamReader(is);

    int readCharNo;
    char[] cbuf = new char[100];
    while ((readCharNo=reader.read(cbuf)) != -1) {
        String data = new String(cbuf, 0, readCharNo);
        System.out.println(data);
    }

    reader.close();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code20 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws Exception {
    FileOutputStream fos = new FileOutputStream("src/파일로출력하기/file.txt");
    Writer writer = new OutputStreamWriter(fos);

    String data = "";
    writer.write(data);

    writer.flush();
    writer.close();
    System.out.println("파일 저장이 끝났습니다.");
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code21 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 버퍼성능비교;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class EnhancedBuffMain {
    public static void main(String[] args) throws Exception {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;

        int data = -1;
        long start = 0;
        long end = 0;

        fis = new FileInputStream("src/버퍼성능비교/forest.jpg");
        bis = new BufferedInputStream(fis);
        fos = new FileOutputStream("src/forest.jpg");
        start = System.currentTimeMillis();
        while((data = bis.read()) != -1) {
            fos.write(data);
        }
        fos.flush();
        end = System.currentTimeMillis();
        fos.close(); 	bis.close();  fis.close();
        System.out.println("사용하지 않았을 때: " + (end-start) + "ms");

        fis = new FileInputStream("src/버퍼성능비교/forest.jpg");
        bis = new BufferedInputStream(fis);
        fos = new FileOutputStream("src/forest.jpg");
        bos = new BufferedOutputStream(fos);
        start = System.currentTimeMillis();
        while((data = bis.read()) != -1) {
            bos.write(data);
        }
        bos.flush();
        end = System.currentTimeMillis();
        bos.close(); fos.close(); 	bis.close(); fis.close();
        System.out.println("사용했을 때: " + (end-start) + "ms");
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code22 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
DataInputStream dis = new DataInputStream(바이트입력스트림)
DataOutputStream dos = new DataOutputStream(바이트출력스트림)
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code23 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class DataInPutStream {
    public static void main(String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream("primitive.db");
        DataOutputStream dos = new DataOutputStream(fos);
        dos.writeUTF("우영우");
        dos.writeDouble(95.5);
        dos.writeInt(1);

        dos.writeUTF("동그라미");
        dos.writeDouble(90.3);
        dos.writeInt(2);

        dos.flush();
        dos.close();

        FileInputStream fis = new FileInputStream("primitive.db");
        DataInputStream dis = new DataInputStream(fis);

        for(int i = 0; i < 2; i++) {
            String name = dis.readUTF();
            double score = dis.readDouble();
            int order = dis.readInt();
            System.out.println(name + " : " + score + " : " + order);
        }
        dis.close();
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code24 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 객체입력보조스트림;

import java.io.Serializable;
import java.util.Date;

public class Board implements Serializable {
    private int bno;
    private String title;
    private String content;
    private String writer;
    private Date date;

    public Board(int bno, String title, String content, String writer, Date date) {
        this.bno = bno;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.date = date;
    }

    public int getBno() {
        return bno;
    }

    public void setBno(int bno) {
        this.bno = bno;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code25 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 객체입력보조스트림;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ObjectStreamEx {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        writeList();
        List<Board> list = readList();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Board board : list) {
            System.out.println(
                board.getBno() + "\t" + board.getTitle() + "\t" + board.getContent() + "\t" +
                        board.getWriter() + "\t" + sdf.format(board.getDate()));
        }
    }

    public static void writeList() throws IOException {
        List<Board> list = new ArrayList<>(); // List 생성
        list.add(new Board(1, "C++", "고성능언어", "우영우", new Date()));
        list.add(new Board(2, "java", "객체지향언어", "동그라미", new Date()));
        list.add(new Board(3, "Python", "간결한언어", "이준호", new Date()));

        FileOutputStream fos = new FileOutputStream("board.db");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(list); // 객체 출력 스트림을 이용해서 list 출력
        oos.flush();
        oos.close();
    }

    public static List<Board> readList() throws IOException, ClassNotFoundException {
        FileInputStream fis = new FileInputStream("board.db");
        ObjectInputStream ois = new ObjectInputStream(fis);
        List<Board> list = (List<Board>) ois.readObject();
        return list;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code26 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
InputStream is = System.in;
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code27 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public class SystemInEx {
	public static void main(String[] args) throws IOException {
		System.out.println("=== 메뉴 ===");
		System.out.println("1. 예금 조회");
		System.out.println("2. 예금 출금");
		System.out.println("3. 예금 입금");
		System.out.println("4. 종료 하기");
		System.out.print("메뉴를 선택 하세요 : ");
		
		InputStream is = System.in; // 키보드 입력 스트림 얻기 
		char inputChar = (char) is.read(); // ASCII 코드를 읽어 문자로 리턴 
		switch(inputChar) {
			case '1' :
				System.out.println("예금 조회를 선택 하셨습니다.");
				break;
			case '2' :
				System.out.println("예금 출금을 선택 하셨습니다.");
				break;
			case '3' :
				System.out.println("예금 입금을 선택 하셨습니다.");
				break;
			case '4' :
				System.out.println("종료 하기를 선택하셨습니다.");
				break;
		}
	}
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code28 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
OutputStream os = System.out
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code29 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
public static void main(String[] args) throws IOException {
    OutputStream os = System.out;
    for(byte b = 48; b < 58; b++) {
        os.write(b);
    }
    os.write(10);
    for(byte b= 97; b < 123; b++) {
        os.write(b);
    }
    os.write(10);

    String hangul = "가나다라마바사아자타카타파하";
    byte[] hangulBytes = hangul.getBytes();
    os.write(hangulBytes);
    os.flush();
}
          `}
        </code>
      </pre>
    );
  };

  const Java_08_03_Code30 = () => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 자바파이널과제;
//- 임의의 위치에 텍스트 파일을 만들고, 10명의 정보를 공백 기준으로 미리 입력 해둠.
//- 이름 국어 영어 수학  형식
// 해당 파일을 읽어 총점을 구하고
// 총점이 높은 사람 순으로 이름과 총점 보여주기(총점이 같은 경우 이름순)

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class JavaFinalReportMain {
    public static void main(String[] args) {
        FileInputStream inputStream = null;
        try {
            // 
            inputStream = new FileInputStream("src/자바파이널과제/student.txt");
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        Scanner sc = new Scanner(inputStream);
        List<Student> list = new ArrayList<>();
        while (sc.hasNextLine()) {
            String line = sc.nextLine();
            String[] splitLine = line.split(" ");
            list.add(new Student(splitLine[0], Integer.parseInt(splitLine[1]),
                    Integer.parseInt(splitLine[2]), Integer.parseInt(splitLine[3])));
        }
        Collections.sort(list);
        for (Student e : list) System.out.println(e);
    }
}

class Student implements Comparable<Student>{
    String name;
    int kor;
    int eng;
    int mat;

    public Student(String name, int kor, int eng, int mat) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
    }
    public int getTotalScore() {
        return kor + eng + mat;
    }

    @Override
    public int compareTo(Student o) {
        if(this.getTotalScore() != o.getTotalScore()) {
            return o.getTotalScore() - this.getTotalScore();
        } else {
            return this.name.compareTo(o.name);
        }
    }
    @Override
    public String toString() {
        return name + " : " + getTotalScore();
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
        <Java_08_03_M />
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
                03. 입출력 스트림
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
                  <ClassHeaderTitle>입출력 스트림</ClassHeaderTitle>
                </ClassHeader>
                <ClassContentsContainer>
                  <ClassContentsTitle1>입출력(I/O)</ClassContentsTitle1>
                  <ClassContentsText>
                    Input과 Output의 약자, 컴퓨터 내부 또는 외부 장치와 프로그램
                    간의 데이터를 주고 받는 것 장치와 입출력을 위해서는 하드웨어
                    장치에 직접 접근이 필요한데 다양한 매체에 존재하는
                    데이터들을 사용하기 위해{" "}
                    <b>입출력 데이터를 처리할 공통적인 방법으로 스트림</b> 이용
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "100px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_01.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림</ClassContentsTitle2>
                  <ClassContentsText>
                    자바에서는 파일이나 콘솔의 입출력을 직접 다루지 않고,
                    <b>스트림(stream)이라는 흐름</b>을 통해 다룹니다.
                    <br />
                    스트림(stream)이란 실제의 입력이나 출력이 표현된 데이터의
                    이상화된 흐름을 의미합니다.
                    <br />
                    즉, 스트림은 운영체제에 의해 생성되는 가상의 연결 고리를
                    의미하며, 중간 매개자 역할을 합니다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림의 특징</ClassContentsTitle2>
                  <ClassContentsTitle3>FIFO 구조</ClassContentsTitle3>
                  <ClassContentsText>
                    먼저 들어간 데이터가 먼저 나오는 형태로 데이터의 순서가
                    바뀌지 않는다.
                  </ClassContentsText>
                  <ClassContentsTitle3>단방향</ClassContentsTitle3>
                  <ClassContentsText>
                    하나의 스트림에서 입출력이 동시에 이루어 지지 않는다.
                    <br />
                    입력과 출력에 각각 스트림을 열어 사용해야 한다.
                  </ClassContentsText>
                  <ClassContentsTitle3>지연 가능</ClassContentsTitle3>
                  <ClassContentsText>
                    스트림 내의 데이터가 모두 전송되기 전까지 프로그램이 지연
                    상태에 빠질 수 있다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>스트림의 분류</ClassContentsTitle2>
                  <ClassContentsTitle3>용도에 의한 분류</ClassContentsTitle3>
                  <ClassContentsText>
                    - 1차 스트림 : 디바이스에 직접 연결되는 스트림
                    <br />- 2차 스트림 : 1차 스트림과 연결을 통해 디바이스와
                    연결되는 스트림
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    전송 방향에 의한 분류
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 입력 스트림 : 디바이스로부터 데이터를 읽어오는 스트림
                    <br />- 출력 스트림 : 디바이스로 데이터를 출력하는 스트림
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    전송단위에 의한 분류
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    - 바이트 스트림 : 1 Byte 단위로 입력, 출력하는 스트림
                    <br />- 문자 스트림 : 한 문자(2 Byte) 단위로 입력, 출력하는
                    스트림
                  </ClassContentsText>
                  <ClassContentsTitle3>보조 스트림</ClassContentsTitle3>
                  <ClassContentsText>
                    스트림의 기능을 향상시키거나 새로운 기능을 추가시키며,
                    직접적인 데이터 입출력을 할 수 없다.
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle1>바이트 스트림</ClassContentsTitle1>
                  <ClassContentsText>
                    바이트 단위로 데이터를 전송
                    <br />
                    바이트 단위로 구성된 파일(동영상, 이미지, 음악 등)을
                    처리하기에 적합한 스트림
                    <br />
                    바이트 스트림의 최상위 클래스는 InputStream과
                    OutputStream이다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    바이트 출력 스트림 : OutputStream
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    Output 스트림은 바이트 기반 출력 스트림의{" "}
                    <b>최상위 클래스로 추상 클래스</b> 입니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "100px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_02.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    OutputStream에 정의된 메소드
                  </ClassContentsTitle3>
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
                          <ClassTableTd>void close()</ClassTableTd>
                          <ClassTableTd>스트림을 닫음</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>void flush()</ClassTableTd>
                          <ClassTableTd>
                            스트림 버퍼의 내용을 모두 내보냄
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            abstract void write(int i)
                          </ClassTableTd>
                          <ClassTableTd>주어진 값을 출력</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>void write(byte b[])</ClassTableTd>
                          <ClassTableTd>
                            배열 b에 저장된 내용을 모두 출력
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            void write(byte b[], int index, int size)
                          </ClassTableTd>
                          <ClassTableTd>
                            배열 b에 저장된 내용을 index부터 size만큼 출력
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <Java_08_03_Code01 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    배열 전체를 출력하기
                  </ClassContentsTitle3>
                  <Java_08_03_Code02 />
                  <ClassContentsTitle3>
                    배열 일부를 출력하기
                  </ClassContentsTitle3>
                  <Java_08_03_Code03 />
                  <br />
                  <ClassContentsTitle2>
                    바이트 입력 스트림 : InputStream
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    InputStream은 바이트 기반 입력 스트림의{" "}
                    <b>최상위 클래스로 추상 클래스</b> 입니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "100px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_03.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    InputStream에 정의된 메소드
                  </ClassContentsTitle3>
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
                          <ClassTableTd>int available()</ClassTableTd>
                          <ClassTableTd>
                            현재 읽을 수 있는 바이트 수를 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>void close()</ClassTableTd>
                          <ClassTableTd>스트림을 닫음</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>void mark(int readlimit)</ClassTableTd>
                          <ClassTableTd>
                            스트림에서 현재 위치를 표시, reset()에 의해 돌아감
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>boolean markSupported()</ClassTableTd>
                          <ClassTableTd>
                            mark()와 reset() 지원 여부 확인
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>abstract int read()</ClassTableTd>
                          <ClassTableTd>
                            스트림에서 1바이트를 읽음(0~255 아스키 코드 값)
                            <br />더 이상 읽을 데이터가 없으면 -1 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>int read(byte[] b)</ClassTableTd>
                          <ClassTableTd>
                            배열 b의 크기만큼 읽어서 배열을 채우고 읽은 데이터
                            수를 반환
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            int read(byte[] b, int off, int len)
                          </ClassTableTd>
                          <ClassTableTd>
                            최대 len만큼의 바이트를 읽어서 배열 b의 지정된
                            위치부터 저장
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>void reset()</ClassTableTd>
                          <ClassTableTd>
                            mark()를 마지막으로 호출한 위치로 이동
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>long skip(long n)</ClassTableTd>
                          <ClassTableTd>
                            n바이트만큼 데이터를 건너뛰고 바이트 수를 반환
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <ClassContentsTitle3>1바이트씩 읽기</ClassContentsTitle3>
                  <Java_08_03_Code04 />
                  <ClassContentsTitle3>
                    배열의 길이만큼 읽기
                  </ClassContentsTitle3>
                  <Java_08_03_Code05 />
                  <ClassContentsTitle3>
                    지정된 길이만큼 읽기
                  </ClassContentsTitle3>
                  <Java_08_03_Code06 />
                  <br />
                  <ClassContentsTitle1>문자 스트림</ClassContentsTitle1>
                  <ClassContentsText>
                    문자 단위로 데이터를 전송하며 사용방법은 바이트 스트림과
                    동일하다.
                    <br />
                    영어 이외의 문자에 대한 처리와 인코딩을 내부에서 처리
                    해준다.
                    <br />
                    <b>문자 스트림의 최상위 클래스는 Reader와 Writer</b>이다.
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    문자 스트림과 바이트 스트림 비교
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    InputStream이 Reader로 OutputStream이 Writer에 대응
                    <br />
                    이름만 다를 뿐 활용 방법은 거의 동일 합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>스트림 비교</ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>바이트 스트림</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>문자 스트림</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>FileInputStream</ClassTableTd>
                          <ClassTableTd>FileReader</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>FileOutputStream</ClassTableTd>
                          <ClassTableTd>FileWriter</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>ByteArrayInputStream</ClassTableTd>
                          <ClassTableTd>CharArrayReader</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>ByteArrayOutputStream</ClassTableTd>
                          <ClassTableTd>CharArrayWriter</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>PipedInputStream</ClassTableTd>
                          <ClassTableTd>PipedReader</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>PipedOutputStream</ClassTableTd>
                          <ClassTableTd>PipedWriter</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>StringBufferInputStream</ClassTableTd>
                          <ClassTableTd>StringReader</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>StringBufferOutputStream</ClassTableTd>
                          <ClassTableTd>StringWriter</ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    * StringBufferInputStream과 StringBufferOutputStream은 JDK
                    1.1부터 사용되지 않음
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    InputStream과 Reader 메소드 비교
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>InputStream</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>Reader</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>abstract int read()</ClassTableTd>
                          <ClassTableTd>int read()</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>int read(byte[] b)</ClassTableTd>
                          <ClassTableTd>int read(char[] cbuf)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            int read(byte{} b, int off, int len)
                          </ClassTableTd>
                          <ClassTableTd>
                            abstract int read(char[] cbuf, int off, int len)
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    OutputStream과 Writer 메소드 비교
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>OutputStream</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>Writer</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            abstract void write(int b)
                          </ClassTableTd>
                          <ClassTableTd>void write(int c)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>void write(byte[] b)</ClassTableTd>
                          <ClassTableTd>void write(char[] cbuf)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            void write(byte[] b, int off, int len)
                          </ClassTableTd>
                          <ClassTableTd>
                            abstract void write(char[] cbuf, int off, int len)
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>-</ClassTableTd>
                          <ClassTableTd>void write(String str)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>-</ClassTableTd>
                          <ClassTableTd>
                            void write(String str, int off, int len)
                          </ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>Writer</ClassContentsTitle2>
                  <ClassContentsText>
                    Write는 문자열 기반 출력 스트림의 최상위 클래스로 추상
                    클래스 입니다.
                    <br />
                    모든 문자 기반 출력 스트림 클래스는 이 클래스를 상속받아서
                    만들어 집니다.
                    <br />
                    기존 파일 내용 끝에 데이터를 추가할 경우 두번 째 매개값에
                    true를 주면됨 <b>(new FileWriter("test.txt", true);)</b>
                  </ClassContentsText>
                  <ClassContentsTitle3>write(int c) 메소드</ClassContentsTitle3>
                  <Java_08_03_Code07 />
                  <ClassContentsTitle3>
                    write(char[] c) 메소드
                  </ClassContentsTitle3>
                  <Java_08_03_Code08 />
                  <ClassContentsTitle3>
                    write(char[] c, int off, int len) 메소드
                  </ClassContentsTitle3>
                  <Java_08_03_Code09 />
                  <br />
                  <ClassContentsTitle2>Reader</ClassContentsTitle2>
                  <ClassContentsText>
                    Reader는 문자 기반 입력 최상위 클래스로 추상 클래스 입니다.
                    <br />
                    모든 문자 기반 입력 스트림은 이 클래스를 상속 받아서 만들어
                    집니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>read() 메소드</ClassContentsTitle3>
                  <ClassContentsText>
                    입력 스트림으로 부터 한 개의 문자(2바이트)를 읽고 4바이트
                    int 타입으로 리턴 합니다.
                    <br />
                    read() 메소드가 리턴한 int 값을 char형으로 변환하면 읽은
                    문자열을 확인 할 수 있습니다.
                    <Java_08_03_Code10 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    read(char[] cbuf) 메소드
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    입력스트림으로 부터 매개변수로 주어진 문자 배열의 길이만큼
                    문자를 읽고 배열에 저장 합니다.
                    <br />
                    그리고, 읽은 문자 수를 리턴 합니다. 실제로 읽은 문자 수가
                    배열 길이 보다 작을 경우 읽은 수만큼만 리턴 합니다.
                    <Java_08_03_Code11 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle1>파일 입출력</ClassContentsTitle1>
                  <ClassContentsTitle2>File 클래스</ClassContentsTitle2>
                  <ClassContentsText>
                    <b>
                      파일이나 디렉토리를 추상화한 클래스이며 가장 많이 사용되는
                      입출력 대상
                    </b>{" "}
                    입니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    File 클래스의 생성자와 메소드
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>생성자</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>설명</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>File(String fileName)</ClassTableTd>
                          <ClassTableTd>
                            주어진 파일 이름을 가지는 객체 생성
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            File(String pathname, String fileName)
                          </ClassTableTd>
                          <ClassTableTd rowspan="2">
                            파일의 경로와 이름을 따로 지정하여 객체 생성
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>
                            File(File pathname, String fileName)
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>File(URI uri)</ClassTableTd>
                          <ClassTableTd>지정된 URI로 파일 생성</ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <Java_08_03_Code12 />
                    <br />
                    <br />- 디렉토리 구분자는 운영체제에 따라 달라 질 수
                    있습니다.
                    <Java_08_03_Code13 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>FileInputSteam</ClassContentsTitle2>
                  <ClassContentsText>
                    파일로부터 바이트 단위로 읽어 들일 때 사용되는 바이트 기반
                    입력 스트림 입니다.
                    <Java_08_03_Code14 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>FileOutputStream</ClassContentsTitle2>
                  <ClassContentsText>
                    바이트 단위로 데이터를 파일에 저장 할 때 사용하는 바이트
                    기반 출력 스트림 입니다.
                    <br />
                    바이트 단위로 저장하기 때문에 그림, 오디오, 비디오, 텍스트
                    등 모든 종류의 데이터를 파일로 저장 할 수 있습니다.
                    <Java_08_03_Code15 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    FileInputStream과 Scanner 활용
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    - Scanner 입력으로 파일을 읽습니다.
                    <br />- 스캐너의 hasNextLine()으로 읽을 내용 있는지 확인
                    합니다.
                    <Java_08_03_Code16 />
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle1>보조 스트림</ClassContentsTitle1>
                  <ClassContentsText>
                    기본 스트림인 InputStream/OutputStream, Reader/Writer를 직접
                    사용해서 데이터를 입출력 할 수 있지만,{" "}
                    <b>
                      데이터 변환해서 입출력하거나, 데이터의 출력 형식을
                      지정하고 싶은 경우, 그리고 입출력 성능을 향상시키고 싶을
                      경우에 기본 스트림에 보조 스트림을 연결
                    </b>
                    하여 사용하면 편리하게 기능들을 수행 할 수 있습니다.
                    <Java_08_03_Code17 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    콘솔 입력 스트림을 문자 보조 스트림에 연결
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Java_08_03_Code18 />
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_04.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    문자 변환 보조 스트림
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    바이트 스트림과 문자 스트림을 연결할 수 있도록 도와주는
                    스트림 입니다.
                    <br />
                    인코딩 방식을 정할 수 있고 플랫폼의 기본 인코딩을 사용하기도
                    합니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>InputStreamReader</ClassContentsTitle3>
                  <ClassContentsText>
                    - InputStreamReader(InputStream in) : 기본 인코딩을 사용하는
                    객체를 생성
                    <br />- InputStreamReader(InputStream in, String
                    charsetName) : 지정된 인코딩을 사용하는 객체를 생성
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_05.png"})`,
                      }}
                    />
                    <Java_08_03_Code19 />
                  </ClassContentsText>
                  <ClassContentsTitle3>OutputStreamWriter</ClassContentsTitle3>
                  <ClassContentsText>
                    - OutputStreamWriter(OutputStream out) : 기본 인코딩을
                    사용하는 객체를 생성
                    <br />- OutputStreamWriter(OutputStream out, String
                    charsetName) : 지정된 인코딩을 사용하는 객체 생성
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_06.png"})`,
                      }}
                    />
                    <Java_08_03_Code20 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    성능 향상 보조 스트림
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    프로그램의 실행 성능에서 가능 느린 것이 입출력 장치 입니다.
                    이를 해결하기 위해 프로그램이 입출력 소스와 직접 작업하지
                    않고 중간에 메모리 버퍼와 작업해 실행 성능을 향상 할 수
                    있습니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    BufferedOutputStream과 BufferedWriter
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_07.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    BufferedInputStream과 BufferedReader
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_08.png"})`,
                      }}
                    />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    버퍼 사용에 따른 성능 비교
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    <Java_08_03_Code21 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    기본 타입 입출력 보조 스트림
                  </ClassContentsTitle2>
                  <ClassContentsText>
                    바이트 스트림은 바이트 단위로 입출력하기 때문에 자바의 기본
                    데이터 타입인 boolean, char, short, int, long, float, double
                    단위로 입출력 할 수 없습니다. 그러나 DataInputStream과
                    DataOutputStream 보조 스트림을 연결하면 기본 데이터 타입으로
                    입출력이 가능 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_09.png"})`,
                      }}
                    />
                    <Java_08_03_Code22 />
                    <ClassTableBox>
                      <ClassTable style={{ textAlign: "center" }}>
                        <ClassTableTr>
                          <ClassTableTd
                            colspan="2"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>DataInputStream</b>
                          </ClassTableTd>
                          <ClassTableTd
                            colspan="2"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>DataOutputStream</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>리턴 타입</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>메소드</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>리턴 타입</b>
                          </ClassTableTd>
                          <ClassTableTd
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                          >
                            <b>메소드</b>
                          </ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>boolean</ClassTableTd>
                          <ClassTableTd>readBoolean()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeBoolean(Boolean v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>byte</ClassTableTd>
                          <ClassTableTd>readByte()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeByte(int v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>char</ClassTableTd>
                          <ClassTableTd>readChar()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeChar(int v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>double</ClassTableTd>
                          <ClassTableTd>readDouble()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeDouble(double v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>float</ClassTableTd>
                          <ClassTableTd>readFloat()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeFloat(float v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>int</ClassTableTd>
                          <ClassTableTd>readInt()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeInt(int v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>long</ClassTableTd>
                          <ClassTableTd>readLong()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeLong(long v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>short</ClassTableTd>
                          <ClassTableTd>readShort()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeShort(short v)</ClassTableTd>
                        </ClassTableTr>
                        <ClassTableTr>
                          <ClassTableTd>String</ClassTableTd>
                          <ClassTableTd>readUTF()</ClassTableTd>
                          <ClassTableTd>void</ClassTableTd>
                          <ClassTableTd>writeUTF(String str)</ClassTableTd>
                        </ClassTableTr>
                      </ClassTable>
                    </ClassTableBox>
                    <Java_08_03_Code23 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    객체 입출력 보조 스트림
                  </ClassContentsTitle2>
                  <ClassContentsTitle3>직렬화와 역직렬화</ClassContentsTitle3>
                  <ClassContentsText>
                    자바는 메모리에 생성된 객체를 파일 또는 네트워크로 출력 할
                    수 있습니다. 객체는 문자가 아니기 때문에 바이트 기반
                    스트림으로 출력해야 합니다. 객체를 출력하기 위해서는 일렬로
                    연속적인 바이트로 변경해야 하는데, 이것을 <b>객체 직렬화</b>
                    라고 합니다. 반대로 파일에 저장되어 있거나 네트워크에서
                    전송된 객체를 읽을 수도 있는데, 입력 스트림으로 부터
                    읽어들인 연속적인 바이트를 객체로 복원하는 것을{" "}
                    <b>역직렬화</b>라고 합니다.
                    <ClassContentsImage
                      style={{
                        width: "100%",
                        height: "150px",
                        backgroundImage: `url(${"/images/study/java/java_08_03_10.png"})`,
                      }}
                    />
                    <br />
                    <b>Board</b>
                    <Java_08_03_Code24 />
                    <br />
                    <b>Main</b>
                    <Java_08_03_Code25 />
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    직렬화(Serialization)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    Serializable 인터페이스를 implements하여 구현 합니다. 객체
                    직렬화 시 private 필드를 포함한 모든 필드를 바이트로
                    변환하지만 transient키워드를 사용한 필드는 직렬화에서 제외
                    됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    역직렬화(Deserialization)
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    직렬화된 객체를 역직렬화할 때는 직렬화 했을 때와 같은
                    클래스를 사용 합니다.
                    <br />
                    단, 클래스 이름이 같더라도 클래스 내용이 변경된 경우
                    역직렬화가 실패하게 됩니다.
                  </ClassContentsText>
                  <ClassContentsTitle3>
                    serialVersionUID 필드
                  </ClassContentsTitle3>
                  <ClassContentsText>
                    직렬화한 클래스와 같은 클래스임을 알려주는 식별자 역할로
                    컴파일 시 JVM이 자동으로 serialViersionUID 정적 필드를
                    추가해줘 별로도 작성하지 않아도 오류는 나지 않지만 자동 생성
                    시 역직렬화에서 예상하지 못한 InvalidClassException을 유발할
                    수 있어 명시 권장
                    <br />
                    <b>private static final long</b> serialVersionUID =
                    -6423919775137290062L;
                  </ClassContentsText>
                  <br />
                  <hr />
                  <br />
                  <ClassContentsTitle1>콘솔 입출력</ClassContentsTitle1>
                  <ClassContentsText>
                    콘솔은 시스템을 사용하기 위해 키보드로 입력을 받고 화면으로
                    출력하는 소프트웨어를 말합니다.
                    <br />- System.in : 표준 입력 스트림
                    <br />- System.out : 표준 출력 스트림
                    <br />- System.err : 표준 오류 출력 스트림
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>System.in 필드</ClassContentsTitle2>
                  <ClassContentsText>
                    자바는 프로그램이 콘솔로 부터 데이터 입력을 받을 수 있도록
                    System 클래스의 <b>in 정적 필드</b>를 제공하고 있습니다.
                    System.in은 InputStream 타입의 필드 이므로 다음과 같이
                    InputStream 변수로 참조 가능 합니다.
                    <Java_08_03_Code26 />
                    <Java_08_03_Code27 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>System.out 필드</ClassContentsTitle2>
                  <ClassContentsText>
                    콘솔로 데이터를 출력하기 위해서 System 클래스의 out 정적
                    필드를 사용 합니다.
                    <Java_08_03_Code28 />
                    콘솔로 1개의 바이트를 출력하려면 OutputStream의 write(int
                    b)메소드를 이용하면 됩니다.
                    <br />이 때 바이트 값은 ASCII 코드 인데, write() 메소드는
                    ASCII 코드를 문자로 콘솔에 출력 합니다.
                    <br />- getBytes() :{" "}
                    <b>
                      유니코드 문자열을 바이트코드로 인코딩 해주는 메소드
                    </b>{" "}
                    입니다.
                    <Java_08_03_Code29 />
                  </ClassContentsText>
                  <br />
                  <ClassContentsTitle2>
                    <font color="black">실습과제</font>
                  </ClassContentsTitle2>
                  <Java_08_03_Code30 />
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
export default Java_08_03;
