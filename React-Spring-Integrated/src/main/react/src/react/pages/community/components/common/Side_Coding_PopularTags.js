import { useEffect, useState } from "react";
import {
  PopularTagsContainer,
  PopularTagsItemsBox,
  PopularTagsItem,
  PopularTagsTitle,
} from "../../../../styles/community/PopularTags";

const CodingPopularTags = ({ onEnumFilterChange, enumFilter }) => {
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

  const CodingEnumFilter = {
    Java: "JAVA",
    JavaScript: "JS",
    Python: "PYTHON",
    C: "C",
    Cpp: "CPP",
    Cs: "CS",
    SpringBoot: "SPB",
    React: "RE",
    AngularJS: "AN",
    ExpressJS: "EX",
    NodeJS: "NO",
    HTML: "HTML",
    CSS: "CSS",
  };

  return (
    <>
      <PopularTagsContainer>
        <PopularTagsTitle>인기 태그</PopularTagsTitle>
        <PopularTagsItemsBox>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.Java}
            onClick={() => handleEnumFilter(CodingEnumFilter.Java)}
          >
            # Java
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.JavaScript}
            onClick={() => handleEnumFilter(CodingEnumFilter.JavaScript)}
          >
            # JavaScript
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.Python}
            onClick={() => handleEnumFilter(CodingEnumFilter.Python)}
          >
            # Python
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.C}
            onClick={() => handleEnumFilter(CodingEnumFilter.C)}
          >
            # C
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.Cpp}
            onClick={() => handleEnumFilter(CodingEnumFilter.Cpp)}
          >
            # C++
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.Cs}
            onClick={() => handleEnumFilter(CodingEnumFilter.Cs)}
          >
            # C#
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.SpringBoot}
            onClick={() => handleEnumFilter(CodingEnumFilter.SpringBoot)}
          >
            # SpringBoot
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.React}
            onClick={() => handleEnumFilter(CodingEnumFilter.React)}
          >
            # React
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.AngularJS}
            onClick={() => handleEnumFilter(CodingEnumFilter.AngularJS)}
          >
            # AngularJS
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.NodeJS}
            onClick={() => handleEnumFilter(CodingEnumFilter.NodeJS)}
          >
            # NodeJS
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.HTML}
            onClick={() => handleEnumFilter(CodingEnumFilter.HTML)}
          >
            # HTML
          </PopularTagsItem>
          <PopularTagsItem
            isActive={activeEnumFilter === CodingEnumFilter.CSS}
            onClick={() => handleEnumFilter(CodingEnumFilter.CSS)}
          >
            # CSS
          </PopularTagsItem>
        </PopularTagsItemsBox>
      </PopularTagsContainer>
    </>
  );
};

export default CodingPopularTags;
