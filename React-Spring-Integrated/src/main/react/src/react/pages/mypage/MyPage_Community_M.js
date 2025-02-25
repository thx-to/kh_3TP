import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Board_PostList_MyPage from "../community/components/common/Board_PostList_MyPage";

const MyPage_Community_M = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  // ✅ 페이지 변경 함수 추가
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => navigate("/mypage")}>my page</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => navigate("/mypage/community")}>
            community
          </TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <MobileEachTitle style={{ marginBottom: "10px" }}>
          community
        </MobileEachTitle>
        <Board_PostList_MyPage
          page={page}
          size={size}
          onPageChange={handlePageChange}
        />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default MyPage_Community_M;
