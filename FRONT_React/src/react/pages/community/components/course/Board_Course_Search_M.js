import { useState } from "react";

import {
  InputSearch,
  InputSearchBox,
  InputSearchButton,
  InputSearchContainer,
  SearchContainer,
} from "../../../../styles/community/Board_M";

const Board_Course_Search_M = ({
  boardType,
  onSearchChange,
  onEnumFilterRefresh,
  enumFilter,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      onSearchChange(searchValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <SearchContainer>
        <InputSearchContainer>
          <InputSearchBox>
            <InputSearch
              autoComplete="off"
              value={searchValue}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              placeholder="대화 내용을 검색해보세요!"
            />
          </InputSearchBox>
          <InputSearchButton onClick={handleSearch}>검색</InputSearchButton>
        </InputSearchContainer>
      </SearchContainer>
    </>
  );
};

export default Board_Course_Search_M;
