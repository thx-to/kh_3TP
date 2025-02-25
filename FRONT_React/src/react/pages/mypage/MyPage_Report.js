import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
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
  CenterContainerTitle,
} from "../../styles/mypage/MyPage";
import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import Board_PostList_MyPage_Report from "../community/components/common/Board_PostList_MyPage_Report";
import MyPage_Report_M from "./MyPage_Report_M";

// Board_TopSort 스타일 가져오기
import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../styles/community/Board";

const MyPage_Report = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [status, setStatus] = useState("ACTIVE"); // 기본값: 미해결
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  // 정렬 버튼 클릭 시 status 값 변경
  const handleSortChange = (newStatus) => {
    setStatus(newStatus);
    setPage(1); // 정렬 변경 시 첫 페이지로 이동
  };

  // 페이지 변경 함수 추가
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {isMobile ? (
        <MyPage_Report_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxLink onClick={() => navigate("/mypage")}>
                <TopBoxText>my page</TopBoxText>
              </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => navigate("/mypage/report")}>
                <TopBoxText>악성 사용자 신고</TopBoxText>
              </TopBoxLink>
            </TopBox>
          </TopBoxWide>

          <Container>
            <LeftContainer>
              <LeftTopProfile />
              <LeftMenus />
            </LeftContainer>

            <CenterContainer>
              <CenterContainerTitle>악성 사용자 신고</CenterContainerTitle>
              {/* 정렬 버튼을 Board_TopSort 스타일로 변경 */}
              <TopSortOuterContiner>
                <TopSortInnerContainer>
                  {status === "ACTIVE" ? (
                    <TopSortTitleActive
                      onClick={() => handleSortChange("ACTIVE")}
                    >
                      미해결
                    </TopSortTitleActive>
                  ) : (
                    <TopSortTitleInactive
                      onClick={() => handleSortChange("ACTIVE")}
                    >
                      미해결
                    </TopSortTitleInactive>
                  )}
                  {status === "INACTIVE" ? (
                    <TopSortTitleActive
                      onClick={() => handleSortChange("INACTIVE")}
                    >
                      해결완료
                    </TopSortTitleActive>
                  ) : (
                    <TopSortTitleInactive
                      onClick={() => handleSortChange("INACTIVE")}
                    >
                      해결완료
                    </TopSortTitleInactive>
                  )}
                </TopSortInnerContainer>
              </TopSortOuterContiner>

              <Board_PostList_MyPage_Report
                page={page}
                size={size}
                status={status} // status 값 전달
                onPageChange={handlePageChange}
              />
            </CenterContainer>
          </Container>

          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default MyPage_Report;
