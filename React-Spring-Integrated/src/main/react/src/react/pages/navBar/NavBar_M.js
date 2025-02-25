import { useState } from "react";

import {
  Wrap,
  Container,
  Logo,
  LogoContainer,
  MenuButton,
  MenuButtonContainer,
  StyledLink,
} from "../../styles/navBar/NavBar_M";

import NavBar_M_Menu from "./NavBar_M_Menu";

const NavBar_M = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // 상태를 반전
  };
  const closeMenu = () => {
    setMenuOpen(false); // 메뉴 닫기
  };
  return (
    <Wrap>
      <Container>
        <LogoContainer>
          <Logo>
            <StyledLink
              to="/"
              className={menuOpen ? "open" : "closed"}
              onClick={closeMenu}
            />
          </Logo>
        </LogoContainer>
        <MenuButtonContainer>
          <MenuButton
            className={menuOpen ? "open" : "closed"}
            onClick={toggleMenu}
          />
        </MenuButtonContainer>
      </Container>
      {menuOpen && <NavBar_M_Menu closeMenu={closeMenu} />}
    </Wrap>
  );
};

export default NavBar_M;
