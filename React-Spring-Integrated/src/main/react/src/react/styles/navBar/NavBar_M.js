import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  height: 65px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;

  background-color: white;
  position: fixed;
  z-index: 10;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100vw;
  height: 65px;
  display: flex;
  flex-direction: row;
  position: fixed;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;

export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 18px;
  width: 110px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 100%;
  height: 30px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/logo/fulllogo_black.png");
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const MenuButtonContainer = styled.div.attrs({
  id: "MenuButtonContainer",
})`
  margin-right: 18px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MenuButton = styled.div.attrs({
  id: "MenuButton",
})`
  width: 30px;
  height: 100%;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  align-items: center;
  justify-content: center;
  &.closed {
    background-image: url("/images/icon/m_menu_open.png");
  }
  &.open {
    background-image: url("/images/icon/m_menu_close.png");
    background-size: 55%;
  }
`;
