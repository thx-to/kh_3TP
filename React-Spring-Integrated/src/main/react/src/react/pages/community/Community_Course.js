import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

import {
  TopBoxArrow,
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  Wrap,
  LeftContainer,
  CenterContainer,
  RightContainer,
  BoardContainer,
} from "../../styles/community/Community";
import BoardList from "./components/common/Side_BoardList";
import PopularTags from "./components/common/Side_PopularTags";
import CoursePopularTags from "./components/common/Side_Course_PopularTags";
import TopWriters from "./components/common/Side_TopWriters";
import WeeklyBest from "./components/common/Side_WeeklyBest";
import Board_Course_Search from "./components/course/Board_Course_Search";
import Board_PostList from "./components/common/Board_PostList";
import Board_TopSort from "./components/common/Board_TopSort";
import Board_Order from "./components/common/Board_Order";
import ScrollToTopButton from "../ScrollToTopButton";
import Community_Course_M from "./Community_Course_M";

const Community_Course = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { isMobile } = useOutletContext();

  // Pagination and sorting params
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);
  const [sortBy, setSortBy] = useState(
    queryParams.get("sortBy") || "createdAt"
  ); // 기본 타입은 createdAt / 조회순 / 좋아요순 / 댓글많은순 가능
  const [order, setOrder] = useState(queryParams.get("order") || "desc"); // 타입은 desc / asc
  const [status, setStatus] = useState(queryParams.get("status") || null); // 타입은 active / inactive
  const [enumFilter, setEnumFilter] = useState(
    queryParams.get("enumfilter") || null
  ); // 해쉬태그
  const [search, setSearch] = useState(queryParams.get("search") || null); // 검색

  const boardType = "course";

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community");
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate(`/community/${boardType}`);
  };

  const handleEnumFilterRefresh = () => {
    setEnumFilter(null);
  };

  // Update sorting parameters
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleEnumFilterChange = (newEnumFilter) => {
    setEnumFilter(newEnumFilter);
  };

  return (
    <>
      {isMobile ? (
        <Community_Course_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleCommunity()}>
                community
              </TopBoxText>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText onClick={() => handleRefresh()}>
                🎓 진로 질문
              </TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <BoardList />
              <CoursePopularTags
                enumFilter={enumFilter}
                onEnumFilterChange={handleEnumFilterChange}
              />
              <WeeklyBest />
            </LeftContainer>
            <CenterContainer>
              <BoardContainer>
                <Board_TopSort boardType={boardType} />
                <Board_Course_Search
                  onEnumFilterRefresh={handleEnumFilterRefresh}
                  onSearchChange={handleSearchChange}
                  boardType={boardType}
                  enumFilter={enumFilter}
                />
                <Board_Order
                  boardType={boardType}
                  onSortChange={handleSortChange}
                />
                <Board_PostList
                  boardType={boardType}
                  page={page}
                  size={size}
                  sortBy={sortBy}
                  order={order}
                  status={status}
                  enumFilter={enumFilter}
                  search={search}
                />
              </BoardContainer>
            </CenterContainer>
            <RightContainer>
              <TopWriters />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Community_Course;
