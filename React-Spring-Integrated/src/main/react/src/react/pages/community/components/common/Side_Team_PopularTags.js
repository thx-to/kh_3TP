import { useState, useEffect } from "react";
import {
  PopularTagsContainer,
  PopularTagsItemsBox,
  PopularTagsItem,
  PopularTagsTitle,
} from "../../../../styles/community/PopularTags";

const TeamPopularTags = ({ onEnumFilterChange, enumFilter }) => {
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

  const TeamEnumFilter = {
    FrontEnd: "FRONT",
    BackEnd: "BACK",
    DBA: "DBA",
    DBS: "DBS",
    Designer: "DESIGNER",
  };

  return (
    <>
      <PopularTagsContainer>
        <PopularTagsTitle>인기 태그</PopularTagsTitle>
        <PopularTagsItemsBox>
          <PopularTagsItem
            isActive={activeEnumFilter === TeamEnumFilter.FrontEnd}
            onClick={() => handleEnumFilter(TeamEnumFilter.FrontEnd)}
          >
            # 프론트엔드
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === TeamEnumFilter.BackEnd}
            onClick={() => handleEnumFilter(TeamEnumFilter.BackEnd)}
          >
            # 백엔드
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === TeamEnumFilter.DBA}
            onClick={() => handleEnumFilter(TeamEnumFilter.DBA)}
          >
            # DBA
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === TeamEnumFilter.DBS}
            onClick={() => handleEnumFilter(TeamEnumFilter.DBS)}
          >
            # DBS
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === TeamEnumFilter.Designer}
            onClick={() => handleEnumFilter(TeamEnumFilter.Designer)}
          >
            # 디자이너
          </PopularTagsItem>
        </PopularTagsItemsBox>
      </PopularTagsContainer>
    </>
  );
};

export default TeamPopularTags;
