import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  MenuLink,
} from "../../styles/sideBar/CommunityBar";

const CommunityBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleCodingClick = () => {
    navigate("/community/coding");
  };

  const handleCourseClick = () => {
    navigate("/community/course");
  };

  const handleStudyClick = () => {
    navigate("/community/study");
  };

  const handleTeamClick = () => {
    navigate("/community/team");
  };

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleCodingClick()}>💻 코딩 질문</MenuLink>
          </MenuContents>

          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleCourseClick()}>🎓 진로 질문</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleStudyClick()}>✏️ 스터디</MenuLink>
          </MenuContents>
          <MenuContents onClick={closeMenu}>
            <MenuLink onClick={() => handleTeamClick()}>📋 팀 프로젝트</MenuLink>
          </MenuContents>
        </MenuColumn>
        <MenuColumn>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default CommunityBar;
