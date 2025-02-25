import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
} from "../../../../styles/study/Language_ChapterList";

import { JavaStudyChapter } from "../../../../../util/study/JavaStudyChapter";

const Java_ChapterList = ({ refs, mainContentRef }) => {
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
          {JavaStudyChapter.map((cls) => (
            <ChapterComponent key={cls.id} cls={cls} />
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default Java_ChapterList;
