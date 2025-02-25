import { useState, useEffect } from "react";
import {
  PopularTagsContainer,
  PopularTagsItemsBox,
  PopularTagsItem,
  PopularTagsTitle,
} from "../../../../styles/community/PopularTags";

const StudyPopularTags = ({ onEnumFilterChange, enumFilter }) => {
  const [activeEnumFilter, setActiveEnumFilter] = useState(null);

  const handleEnumFilter = (enumFilter) => {
    setActiveEnumFilter(enumFilter);
    onEnumFilterChange(enumFilter);
  };

  useEffect(() => {
    if (enumFilter === null) {
      setActiveEnumFilter(null);
    }
  }, [enumFilter]);

  const StudyEnumFilter = {
    Algorithm: "ALGORITHM",
    Structure: "STRUCTURE",
    Coding: "CODING",
  };

  return (
    <>
      <PopularTagsContainer>
        <PopularTagsTitle>인기 태그</PopularTagsTitle>
        <PopularTagsItemsBox>
          <PopularTagsItem
            isActive={activeEnumFilter === StudyEnumFilter.Algorithm}
            onClick={() => handleEnumFilter(StudyEnumFilter.Algorithm)}
          >
            # 알고리즘
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === StudyEnumFilter.Structure}
            onClick={() => handleEnumFilter(StudyEnumFilter.Structure)}
          >
            # 자료구조
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === StudyEnumFilter.Coding}
            onClick={() => handleEnumFilter(StudyEnumFilter.Coding)}
          >
            # 코딩테스트
          </PopularTagsItem>
        </PopularTagsItemsBox>
      </PopularTagsContainer>
    </>
  );
};

export default StudyPopularTags;
