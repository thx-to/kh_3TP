import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  TopBoxLink,
  Container,
  LeftContainer,
  CenterContainer,
  MobileEachTitle,
} from "../../styles/mypage/MyPage_M";
import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import Board_PostList_MyPage_Report from "../community/components/common/Board_PostList_MyPage_Report";

const MyPage_Report_M = () => {
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
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxLink onClick={() => handleMyPage()}>
            <TopBoxText>my page</TopBoxText>
          </TopBoxLink>

          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxLink onClick={() => handleRefresh()}>
            <TopBoxText>악성 사용자 신고</TopBoxText>
          </TopBoxLink>
        </TopBox>
      </TopBoxWide>
      <Container>
        <MobileEachTitle style={{ marginBottom: "10px" }}>
          악성 사용자 신고
        </MobileEachTitle>
        <Board_PostList_MyPage_Report
          page={page}
          size={size}
          onPageChange={handlePageChange}
        />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default MyPage_Report_M;
