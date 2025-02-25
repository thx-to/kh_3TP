import { useEffect, useState } from "react";
import Select from "react-select";

import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post";

import Post_WriteSort from "./components/common/Post_WriteSort";
import Post_WriteEditor_Course from "./components/course/Post_WriteEditor_Course";
import Post_Write_Course_M from "./Post_Write_Course_M";

const Post_Write_Course = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기 화면 크기 체크
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize); // 화면 크기 변화에 따른 상태 업데이트
    handleResize(); // 컴포넌트 마운트 시 초기 상태 설정
    return () => {
      window.removeEventListener("resize", handleResize); // 클린업
    };
  }, []);

  const courseOptions = [
    { value: "COMPANY", label: "회사정보" },
    { value: "PORTFOLIO", label: "포트폴리오" },
    { value: "SALARY", label: "급여" },
    { value: "RESUME", label: "자기소개서" },
    { value: "BOOTCAMP", label: "부트캠프" },
    { value: "PROJECT", label: "프로젝트" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedCourses(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      borderColor: "#ccc",
      boxShadow: "none",
      "&:hover": { borderColor: "#333333" },
      maxWidth: "1280px",
      border: "1px solid #f1f1f1",
      padding: "5px",
      fontSize: "20px",
      fontFamily: "medium, sans-serif",
      marginLeft: "10px",
      marginRight: "10px",
    }),
    menu: (provided) => ({
      // 토글 메뉴 바 UI
      ...provided,
      backgroundColor: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      zIndex: "50",
      maxWidth: "1280px",
      padding: "5px 25px",
      fontSize: "15px",
      fontFamily: "medium, sans-serif",
    }),
    option: (provided, { isSelected, isFocused }) => ({
      ...provided,
      backgroundColor: isSelected ? "black" : isFocused ? "#f1f1f1" : "white",
      color: isSelected ? "white" : "black",
      cursor: "pointer",
      zIndex: "50",
      "&:active": {
        backgroundColor: "transparent", // 클릭 순간 색상 (파란 계열 예시)
        fontFamily: "bold",
        textDecoration: "underline",
        textUnderlineOffset: "5px",
      },
    }),
    // 태그 박스
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#333333",
      alignItems: "center",
      borderRadius: "5px",
    }),
    // 태그 텍스트
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
      marginBottom: "1px",
      fontSize: "14px",
      fontFamily: "medium",
    }),
    // 삭제버튼
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      width: "15px",
      height: "15px",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "2px",
      marginRight: "5px",
      padding: "0",
      borderRadius: "50%",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    }),
  };

  return (
    <>
      {isMobile ? (
        <Post_Write_Course_M />
      ) : (
        <>
          <WriteWrap>
            <WriteContainer>
              <Post_WriteSort />
              <WriteTitleBox>
                <WriteTitle
                  autoComplete="off"
                  placeholder="제목을 입력하세요."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </WriteTitleBox>
              <WriteTagBox>
                {/* <WriteTags
              placeholder="태그를 설정하세요. (최대 10개)"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            /> */}
                <Select
                  options={courseOptions}
                  isMulti
                  onChange={handleChange}
                  placeholder="태그를 설정하세요."
                  styles={customStyles}
                />
              </WriteTagBox>
              <Post_WriteEditor_Course title={title} course={selectedCourses} />
            </WriteContainer>
          </WriteWrap>
        </>
      )}
    </>
  );
};

export default Post_Write_Course;
