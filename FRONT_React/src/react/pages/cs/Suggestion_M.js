import {useState} from "react";

import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
  WriteSortOuterContiner,
  WriteSortInnerContainer,
  WriteSortTitleActive,
} from "../../styles/cs/CS_M";

import CS_WriteEditor_Suggestion_M from "./components/CS_WriteEditor_Suggestion_M";
import Select from "react-select";

const Suggestion_M = () => {
  const [title, setTitle] = useState("");

  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const suggestOptions = [
    {value: "FEATURE_REQUEST", label: "기능 개선"},
    {value: "PERFORMANCE_ISSUE", label: "성능 이슈"},
    {value: "CONTENT_SUGGESTION", label: "콘텐츠 제안"},
    {value: "POLICIES", label: "약관 관련"},
    {value: "DEBUG", label: "버그"},
    {value: "ETC", label: "기타"},
  ];

  const handleChange = (selectedOptions) => {
    setSelectedSuggestions(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      borderColor: "#ccc",
      boxShadow: "none",
      "&:hover": {borderColor: "#333333"},
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
    option: (provided, {isSelected, isFocused}) => ({
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
      <WriteWrap>
        <WriteContainer>
          <WriteSortOuterContiner>
            <WriteSortInnerContainer>
              <WriteSortTitleActive>건의사항</WriteSortTitleActive>
            </WriteSortInnerContainer>
          </WriteSortOuterContiner>
          <WriteTitleBox>
            <WriteTitle
              autoComplete="off"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </WriteTitleBox>
          <WriteTagBox>
            <Select
              options={suggestOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <CS_WriteEditor_Suggestion_M
            title={title}
            suggestion={selectedSuggestions}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Suggestion_M;
