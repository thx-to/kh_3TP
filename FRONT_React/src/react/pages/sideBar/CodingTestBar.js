import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuImgContainer,
  MenuImgPractice,
  MenuImgBasic,
  MenuImgIntermediate,
  MenuImgExpert,
  MenuTitle,
  MenuContents,
  StyledLink,
  NavigatePath,
} from "../../styles/sideBar/CodingTestBar";

const CodingTestBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const subMenuData = [
    {
      title: "Practice",
      imgComponent: <MenuImgPractice />,
      navigatepath: "/codingtest/practice",
    },
    {
      title: "Basic",
      imgComponent: <MenuImgBasic />,
      navigatepath: "/codingtest/basic",
    },
    {
      title: "Intermediate",
      imgComponent: <MenuImgIntermediate />,
      navigatepath: "/codingtest/intermediate",
    },
    {
      title: "Expert",
      imgComponent: <MenuImgExpert />,
      navigatepath: "/codingtest/expert",
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        {subMenuData.map((menu, index) => (
          <MenuColumn key={index} onClick={closeMenu}>
            <MenuImgContainer
              onClick={() => handleNavigation(menu.navigatepath)}
            >
              {menu.imgComponent}
            </MenuImgContainer>
            <NavigatePath onClick={() => handleNavigation(menu.navigatepath)}>
              {menu.title}
            </NavigatePath>
          </MenuColumn>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default CodingTestBar;
