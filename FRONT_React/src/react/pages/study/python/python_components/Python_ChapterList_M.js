import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
} from "../../../../styles/study/Language_ChapterList_M";

import { PythonStudyChapter } from "../../../../../util/study/PythonStudyChapter";

const Python_ChapterList_M = ({ refs, mainContentRef }) => {
  // Scrolling Action Set
  const handleScrollToSection = (clsId) => {
    const sectionElement = refs[clsId];
    const offset = 175;
    if (sectionElement && mainContentRef.current) {
      const mainContent = mainContentRef.current;

      // MainContent 내에서의 스크롤 위치 계산
      const elementPosition = sectionElement.offsetTop; // MainContent 기준
      const offsetPosition = elementPosition - offset;

      mainContent.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Chapter Shortcut Set
  const ChapterComponent = ({ cls }) => {
    return (
      <ChapterName onClick={() => handleScrollToSection(cls.id)}>
        {cls.title}
      </ChapterName>
    );
  };

  return (
    <>
      <ChapterOuter>
        <ChapterInner>
          {PythonStudyChapter.map((cls) => (
            <ChapterComponent key={cls.id} cls={cls} />
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default Python_ChapterList_M;
