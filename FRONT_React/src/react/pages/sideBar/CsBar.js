import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/CsBar";

const CsBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleQAClick = () => {
    navigate("/cs/suggestion");
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleQAClick()}>건의사항</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn></MenuColumn>
        <MenuColumn></MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CsBar;
