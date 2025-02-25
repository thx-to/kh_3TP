import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/AboutBar";

const AboutBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleSubmenuClick = () => {
    navigate("/about");
  };
  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleSubmenuClick()}>
              🔥 코디터 소개
            </MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default AboutBar;
