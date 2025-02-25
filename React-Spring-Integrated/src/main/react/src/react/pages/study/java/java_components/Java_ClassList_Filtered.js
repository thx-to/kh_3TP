import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContents,
  ClassSet,
  ClassName,
} from "../../../../styles/study/Language_ClassList";

import { JavaStudyChapter } from "../../../../../util/study/JavaStudyChapter";

// 특정 챕터 진입시 해당 챕터의 클래스 리스트만 출력
// 토글 없이
const Java_ClassList_Filtered = ({ chapter }) => {
  const navigate = useNavigate();

  // 클래스 이름 클릭시 진입
  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  // 각 챕터/클래스 리스트 생성
  const EachClassComponent = ({ cls }) => (
    <EachClass key={cls.id}>
      <ClassHeader>
        <ClassHeaderTitle>
          {cls.title}
        </ClassHeaderTitle>
      </ClassHeader>
      <ClassContents>
        {cls.contents.map((content, index) => (
          <ClassSet key={index}>
            <ClassName
              onClick={() =>
                handleNavigation(content.navigatepath)
              }
            >
              {content.label}
            </ClassName>
          </ClassSet>
        ))}
      </ClassContents>
    </EachClass>
  );

  // chapter에 맞게 필터링
  const filteredJavaStudyChapter = JavaStudyChapter.filter(
    (menu) => menu.id === chapter
  ).map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
    })),
  }));

  return (
    <>
      {filteredJavaStudyChapter.map((cls) => (
        <EachClassComponent key={cls.id} cls={cls} />
      ))}
    </>
  );
};

export default Java_ClassList_Filtered;
