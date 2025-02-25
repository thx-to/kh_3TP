import React, { useState, forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassName,
} from "../../../../styles/study/Language_ClassList";

import { CStudyChapter } from "../../../../../util/study/CStudyChapter";

const C_ClassList = forwardRef(({ refs }, ref) => {
  const navigate = useNavigate();

  // Class Contents onClick
  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  // Class Header Toggle
  const [isToggleOpenId, setIsToggleOpenId] = useState([]);
  const toggleVisibility = (id) => {
    setIsToggleOpenId((prevId) =>
      prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
    );
  };

  // Class List Set
  const EachClassComponent = ({ cls, isOpen, onToggle }) => (
    <EachClass key={cls.id} ref={(el) => (refs[cls.id.toString()] = el)}>
      <ClassHeader isOpen={isOpen}>
        <ClassHeaderTitle>
          {cls.title}
        </ClassHeaderTitle>
        <ClassHeaderTitleButton
          isOpen={isOpen}
          onClick={() => onToggle(cls.id)}
        />
      </ClassHeader>
      <ClassContents isOpen={isOpen}>
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

  // Path Set
  const updatedCStudyChapter = CStudyChapter.map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
    })),
  }));

  return (
    <>
      {updatedCStudyChapter.map((cls) => (
        <EachClassComponent
          key={cls.id}
          cls={cls}
          isOpen={isToggleOpenId.includes(cls.id)}
          onToggle={toggleVisibility}
        />
      ))}
    </>
  );
});

export default C_ClassList;
