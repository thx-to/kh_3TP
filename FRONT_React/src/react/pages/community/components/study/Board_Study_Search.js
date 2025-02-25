import { useState } from "react";
import {
  InputSearch,
  InputSearchBox,
  InputSearchButton,
  InputSearchContainer,
  TagSearch,
  TagSearchBox,
  TagSearchContainer,
  SearchContainer,
  ResetButtonBox,
  ResetButtonText,
  ResetButtonIcon,
  TagSearchItem,
} from "../../../../styles/community/Board";
import { StudyDisplayNames } from "../common/DisplayNames";

const Board_Study_Search = ({
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

  const enumFilterRefresh = () => {
    onEnumFilterRefresh();
  };

  const searchRefresh = () => {
    setSearchValue("");
    onSearchChange("");
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
              placeholder="관심 스터디를 검색해보세요!"
            />
          </InputSearchBox>
          <InputSearchButton onClick={handleSearch}>검색</InputSearchButton>
        </InputSearchContainer>
        <TagSearchContainer>
          <TagSearchBox>
            <TagSearch>
              {enumFilter !== null && (
                <TagSearchItem>{StudyDisplayNames[enumFilter]}</TagSearchItem>
              )}
            </TagSearch>
          </TagSearchBox>
          <ResetButtonBox
            onClick={() => {
              enumFilterRefresh();
              searchRefresh();
            }}
          >
            <ResetButtonIcon />
            <ResetButtonText>초기화</ResetButtonText>
          </ResetButtonBox>
        </TagSearchContainer>
      </SearchContainer>
    </>
  );
};

export default Board_Study_Search;
