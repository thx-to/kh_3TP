import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
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
    height: 460px;
    opacity: 1;
  }
`;
const collapseHeight = keyframes`
  0% {
    height: 460px;
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
export const CloseButton = styled.button.attrs({
  id: "container",
})`
  display: flex;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 2px;
    bottom: 14px;
    width: 25px;
    height: 2px;
    background-color: black;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
  }
  &::after {
    content: "";
    position: absolute;
    left: 2px;
    bottom: 14px;
    width: 25px;
    height: 2px;
    background-color: black;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::before {
    transform: rotate(-45deg) scale(0.8);
    opacity: 0.7;
  }
  &:hover::after {
    transform: rotate(45deg) scale(0.8);
    opacity: 0.7;
  }
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
  ${(props) =>
    props.isOpen
      ? css`
          &::before,
          &::after {
            animation: ${fadeInOpacity} 0.3s ease-out forwards;
          }
        `
      : css`
          &::before,
          &::after {
            animation: ${fadeOutOpacity} 0.3s ease-out forwards;
          }
        `}
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
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: left;
  font-family: "bold", sans-serif;
  font-size: 18px;
  margin: 10px;
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
  cursor: pointer;
`;
export const LinkContents = styled.div.attrs({
  id: "menucontents",
})`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-family: "medium", sans-serif;
  font-size: 15px;
  margin: 8px;
  &:hover {
    font-family: "bold", sans-serif;
    & > #outlink {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const OutLink = styled.div.attrs({
  id: "outlink",
})`
  margin-left: 10px;
  top: 1px;
  width: 12px;
  height: 12px;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/outlink.png");
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s;
`;
