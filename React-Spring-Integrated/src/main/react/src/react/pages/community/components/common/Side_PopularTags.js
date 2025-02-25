import { useState } from "react";
import {
  PopularTagsContainer,
  PopularTagsItemsBox,
  PopularTagsItem,
  PopularTagsTitle,
} from "../../../../styles/community/PopularTags";

const PopularTags = ({ onEnumFilterChange }) => {
  const [activeEnumFilter, setActiveEnumFilter] = useState(null);

  const handleEnumFilter = (enumFilter) => {
    setActiveEnumFilter(enumFilter);
    onEnumFilterChange(enumFilter);
  };

  const CodingEnumFilter = {
    JAVA: "JAVA",
  };

  const enumFilterJava = "JAVA";
  const enumFilterPython = "PYTHON";
  const enumFilterC = "C";

  return (
    <>
      <PopularTagsContainer>
        <PopularTagsTitle>인기 태그</PopularTagsTitle>
        <PopularTagsItemsBox>
          <PopularTagsItem
            isActive={activeEnumFilter === enumFilterJava}
            onClick={() => handleEnumFilter("JAVA")}
          >
            # Java
          </PopularTagsItem>
          <PopularTagsItem># Python</PopularTagsItem>
          <PopularTagsItem># C</PopularTagsItem>
          <PopularTagsItem># 머신러닝</PopularTagsItem>
          <PopularTagsItem># github</PopularTagsItem>
          <PopularTagsItem># C++</PopularTagsItem>
          <PopularTagsItem># git</PopularTagsItem>
          <PopularTagsItem># JavaScript</PopularTagsItem>
          <PopularTagsItem># JPA</PopularTagsItem>
          <PopularTagsItem># CSS</PopularTagsItem>
          <PopularTagsItem># HTML</PopularTagsItem>
          <PopularTagsItem># React</PopularTagsItem>
          <PopularTagsItem># SpringBoot</PopularTagsItem>

          <PopularTagsItem># 엘라스틱서치</PopularTagsItem>
        </PopularTagsItemsBox>
      </PopularTagsContainer>
    </>
  );
};

export default PopularTags;
