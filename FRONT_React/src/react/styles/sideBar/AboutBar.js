import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 100px;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  z-index: 100;
  ${(props) =>
    props.isOpen
      ? css`
          animation: ${expandHeight} 0.3s ease-out forwards;
        `
      : css`
          animation: ${collapseHeight} 0.3s ease-out forwards;
        `}
`;
const expandHeight = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 110px;
    opacity: 1;
  }
`;
const collapseHeight = keyframes`
  0% {
    height: 180px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`;
const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOutOpacity = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;
export const MenuContainer = styled.div.attrs({
  id: "menucontainer",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
`;
export const MenuColumn = styled.div.attrs({
  id: "menucolumn",
})`
  width: 33%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const MenuTitle = styled.div.attrs({
  id: "menutitle",
})`
  display: inline-block;
  position: relative;
  align-items: left;
  font-family: "bold", sans-serif;
  font-size: 18px;
  margin: 10px;
  padding: 5px 10px;
`;
export const MenuContents = styled.div.attrs({
  id: "menucontents",
})`
  width: auto;
  display: inline-block;
  position: relative;
  align-items: left;
  font-family: "medium", sans-serif;
  font-size: 15px;
  margin: 8px;
`;
export const MenuLink = styled.button.attrs({
  id: "menulink",
})`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  background-color: transparent;
  font-family: "medium", sans-serif;
  font-size: 15px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;

  }
`;
