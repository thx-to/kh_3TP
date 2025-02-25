import {useState, useEffect} from "react";

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

import CS_WriteEditor_Report_M from "./components/CS_WriteEditor_Report_M";
import {useLocation, useNavigate} from "react-router-dom";
import Select from "react-select";

const Report_M = () => {
  const [boardId, setBoardId] = useState("");
  const [writerName, setWriterName] = useState("");
  const [boardTitle, setBoardTitle] = useState("");
  const [boardUrl, setBoardUrl] = useState("");
  const [title, setTitle] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const originBoardId = location.state?.boardId || "";
    const originWriterName = location.state?.writerName || "";
    const originBoardTitle = location.state?.boardTitle || "";
    const originBoardUrl = location.state?.boardUrl || "";
    setBoardId(originBoardId);
    setWriterName(originWriterName);
    setBoardTitle(originBoardTitle);
    setBoardUrl(originBoardUrl);

    console.log(originBoardId);
    console.log(originWriterName);
    console.log(originBoardTitle);
    console.log(originBoardUrl);

    if (originBoardId === "") {
      alert("잘못된 접근입니다.");
      navigate("/");
    }
  }, [location.state]);

  const [selectedReports, setSelectedReports] = useState([]);
  const reportOptions = [
    {value: "ILLEGAL_CONTENT", label: "부적절한 콘텐츠"},
    {value: "VIOLENCE", label: "욕설, 비방"},
    {value: "SPAM", label: "스팸, 광고"},
    {value: "PLAGIARISM", label: "저작권 침해"},
    {value: "ETC", label: "기타"},
  ];

  const handleChange = (selectedOptions) => {
    setSelectedReports(selectedOptions.map((option) => option.value));
  };

  const customStyles = {
    control: (provided, state) => ({
      // 컨트롤 바 UI
      ...provided,
      backgroundColor: "white",
      boxShadow: "none",
      "&:hover": {borderColor: "#333333"},
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
          <WriteSortOuterContiner>
            <WriteSortInnerContainer>
              <WriteSortTitleActive>악성 사용자 신고</WriteSortTitleActive>
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
              options={reportOptions}
              isMulti
              onChange={handleChange}
              placeholder="태그를 설정하세요."
              styles={customStyles}
            />
          </WriteTagBox>
          <CS_WriteEditor_Report_M
            boardId={boardId}
            writerName={writerName}
            boardTitle={boardTitle}
            boardUrl={boardUrl}
            title={title}
          />
        </WriteContainer>
      </WriteWrap>
    </>
  );
};

export default Report_M;
