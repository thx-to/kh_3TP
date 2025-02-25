import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuImgContainer,
  MenuImgJava,
  MenuImgPython,
  MenuImgC,
  MenuImgCPlus,
  MenuImgJavaScript,
  MenuImgCss,
  MenuLink,
} from "../../styles/sideBar/StudyBar";

const StudyBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };
  // 언어가 늘어난다면 다음과 같은 형식으로 맨 밑에 추가해주면 자동 생성이 됩니다.
  const subMenuData = [
    {
      title: "Java",
      imgComponent: <MenuImgJava />,
      navigatepath: "/study/java",
    },
    {
      title: "Python",
      imgComponent: <MenuImgPython />,
      navigatepath: "/study/python",
    },
    {
      title: "C",
      imgComponent: <MenuImgC />,
      navigatepath: "/study/c",
    },
    {
      title: "C++",
      imgComponent: <MenuImgCPlus />,
      navigatepath: "/study/cplus",
    },
    {
      title: "JavaScript",
      imgComponent: <MenuImgJavaScript />,
      navigatepath: "/study/javascript",
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        {subMenuData.map((menu, index) => (
          <MenuColumn key={index} onClick={closeMenu}>
            <MenuLink
              onClick={() =>
                handleNavigation(menu.navigatepath)
              }
            >
              <MenuImgContainer>{menu.imgComponent}</MenuImgContainer>
              <MenuTitle>{menu.title}</MenuTitle>
            </MenuLink>
          </MenuColumn>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default StudyBar;
