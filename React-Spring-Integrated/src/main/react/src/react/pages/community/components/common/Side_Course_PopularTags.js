import { useState, useEffect } from "react";
import {
  PopularTagsContainer,
  PopularTagsItemsBox,
  PopularTagsItem,
  PopularTagsTitle,
} from "../../../../styles/community/PopularTags";

const CoursePopularTags = ({ onEnumFilterChange, enumFilter }) => {
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

  const CourseEnumFilter = {
    Company: "COMPANY",
    Portfolio: "PORTFOLIO",
    Salary: "SALARY",
    Resume: "RESUME",
    Bootcamp: "BOOTCAMP",
    Project: "PROJECT",
  };

  return (
    <>
      <PopularTagsContainer>
        <PopularTagsTitle>인기 태그</PopularTagsTitle>
        <PopularTagsItemsBox>
          <PopularTagsItem
            isActive={activeEnumFilter === CourseEnumFilter.Company}
            onClick={() => handleEnumFilter(CourseEnumFilter.Company)}
          >
            # 회사정보
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CourseEnumFilter.Portfolio}
            onClick={() => handleEnumFilter(CourseEnumFilter.Portfolio)}
          >
            # 포트폴리오
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CourseEnumFilter.Salary}
            onClick={() => handleEnumFilter(CourseEnumFilter.Salary)}
          >
            # 급여
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CourseEnumFilter.Resume}
            onClick={() => handleEnumFilter(CourseEnumFilter.Resume)}
          >
            # 자기소개서
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CourseEnumFilter.Bootcamp}
            onClick={() => handleEnumFilter(CourseEnumFilter.Bootcamp)}
          >
            # 부트캠프
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CourseEnumFilter.Project}
            onClick={() => handleEnumFilter(CourseEnumFilter.Project)}
          >
            # 프로젝트
          </PopularTagsItem>
        </PopularTagsItemsBox>
      </PopularTagsContainer>
    </>
  );
};

export default CoursePopularTags;
