import { useLocation, useNavigate } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  LeftContainer,
  CenterContainer,
  MobileEachTitle,
} from "../../styles/mypage/MyPage_M";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import Board_PostList_MyPage_Suggestion from "../community/components/common/Board_PostList_MyPage_Suggestion";

const MyPage_Suggestion_M = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  // ✅ 페이지 변경 함수 추가
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleMyPage = () => {
    navigate("/mypage");
  };

  const handleRefresh = () => {
    navigate("/mypage/suggestion");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText onClick={() => handleMyPage()}>my page</TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText onClick={() => handleRefresh()}>건의사항</TopBoxText>
          </TopBox>
        </TopBoxWide>
        <Container>
          <MobileEachTitle style={{ marginBottom: "10px" }}>
            건의사항
          </MobileEachTitle>
          <Board_PostList_MyPage_Suggestion
            page={page}
            size={size}
            onPageChange={handlePageChange}
          />
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default MyPage_Suggestion_M;
