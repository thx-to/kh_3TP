import React, { useState } from "react";
import Select from "react-select";

import {
  WriteWrap,
  WriteContainer,
  WriteTagBox,
  WriteTags,
  WriteTitle,
  WriteTitleBox,
} from "../../styles/community/Post_M";

import Post_WriteSort_M from "./components/common/Post_WriteSort_M";
import Post_WriteEditor_Team_M from "./components/team/Post_WriteEditor_Team_M";

const Post_Write_Team_M = () => {
  const [title, setTitle] = useState("");
  const [team, setTeam] = useState("");

  const [selectedTeam, setSelectedTeam] = useState([]);
  const teamOptions = [
    { value: "FRONT", label: "프론트엔드" },
    { value: "BACK", label: "백엔드" },
    { value: "DBA", label: "DBA" },
    { value: "DBS", label: "DBS" },
    { value: "DESIGNER", label: "디자이너" },
    { value: "ETC", label: "기타" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedTeam(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      boxShadow: "none",
      "&:hover": { borderColor: "#333333" },
      maxWidth: "1280px",
      // border: "1px solid #f1f1f1",
      border: "none",
      padding: "5px",
      fontSize: "16px",
      fontFamily: "medium, sans-serif",
      // marginLeft: "10px",
      marginRight: "10px",
    }),
    menu: (provided) => ({
      // 토글 메뉴 바 UI
      ...provided,
      marginTop: "-1px",
      backgroundColor: "white",
      boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.1)",
      zIndex: "50",
      maxWidth: "1280px",
      padding: "5px 25px",
      fontSize: "12px",
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
      fontSize: "12px",
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
          <Post_WriteSort_M />
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
              options={teamOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <Post_WriteEditor_Team_M title={title} team={selectedTeam} />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Post_Write_Team_M;
