import { useLocation, useNavigate } from "react-router-dom";

import {
  ArrowLink,
  LeftArrow,
  RightArrow,
} from "../../../../styles/study/Language_ArrowNavigation";

import { CStudyChapter } from "../../../../../util/study/CStudyChapter";

const C_ArrowNavigation = ({ direction }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 경로의 chapterId와 contentIndex 추출
  const currentPath = location.pathname.split("/");
  const currentChapterId = currentPath[3] || "";
  const currentContentIndex = currentPath[4]
    ? parseInt(currentPath[4], 10) - 1
    : -1;

  // 현재 챕터와 콘텐츠 찾기
  const currentChapter = CStudyChapter.find(
    (chapter) => chapter.id === currentChapterId
  );
  const currentContent = currentChapter?.contents?.[currentContentIndex];

  if (!currentChapter || !currentContent) {
    console.error("유효하지 않은 경로입니다. 현재 경로:", location.pathname);
    return null;
  }

  const handleNavigation = () => {
    let nextContent;
    let nextNavigatePath; // 다음 navigatepath를 위한 변수

    if (direction === "left") {
      if (currentContentIndex === 0) {
        // 첫 번째 콘텐츠인 경우, 이전 챕터의 마지막 콘텐츠로 이동
        const previousChapterIndex =
          CStudyChapter.findIndex(
            (chapter) => chapter.id === currentChapterId
          ) - 1;
        const previousChapter = CStudyChapter[previousChapterIndex];

        if (previousChapter) {
          nextContent =
            previousChapter.contents[previousChapter.contents.length - 1];
          nextNavigatePath = nextContent.navigatepath; // 이전 챕터의 마지막 콘텐츠로 이동
        } else {
          alert("이전 챕터가 없습니다.");
          return;
        }
      } else {
        // 이전 콘텐츠로 이동
        const nextContentIndex = currentContentIndex - 1;
        nextContent = currentChapter.contents[nextContentIndex];
        nextNavigatePath = nextContent.navigatepath;
      }
    } else if (direction === "right") {
      const nextContentIndex = currentContentIndex + 1;

      // 현재 챕터의 마지막 콘텐츠인 경우, 다음 챕터로 이동
      if (nextContentIndex >= currentChapter.contents.length) {
        const nextChapterIndex =
          CStudyChapter.findIndex(
            (chapter) => chapter.id === currentChapterId
          ) + 1;
        const nextChapter = CStudyChapter[nextChapterIndex];

        if (nextChapter) {
          nextContent = nextChapter.contents[0]; // 다음 챕터의 첫 번째 콘텐츠로 이동
          nextNavigatePath = nextContent.navigatepath;
        } else {
          alert("다음 챕터가 없습니다.");
          return;
        }
      } else {
        nextContent = currentChapter.contents[nextContentIndex];
        nextNavigatePath = nextContent.navigatepath;
      }
    }

    if (nextContent && nextNavigatePath) {
      navigate(nextNavigatePath);
    } else {
      console.error("다음 콘텐츠를 찾을 수 없습니다.");
    }
  };

  return (
    <ArrowLink onClick={handleNavigation}>
      {direction === "left" ? <LeftArrow /> : <RightArrow />}
    </ArrowLink>
  );
};

export default C_ArrowNavigation;
