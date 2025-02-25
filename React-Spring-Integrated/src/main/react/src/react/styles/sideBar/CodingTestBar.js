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
    height: 230px;
    opacity: 1;
  }
`;
const collapseHeight = keyframes`
  0% {
    height: 230px;
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
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MenuImgContainer = styled.div.attrs({
  id: "menuimgcontainer",
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const MenuImgPractice = styled.div.attrs({
  id: "menuimgpractice",
})`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/ct_prtc.png");
  cursor: pointer;
`;
export const MenuImgBasic = styled.div.attrs({
  id: "menuimgbasic",
})`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/ct_basic.png");
  cursor: pointer;
`;
export const MenuImgIntermediate = styled.div.attrs({
  id: "menuimgintermediate",
})`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/ct_im.png");
  cursor: pointer;
`;
export const MenuImgExpert = styled.div.attrs({
  id: "menuimgexpert",
})`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/ct_expert.png");
  cursor: pointer;
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
  padding: 5px 10px;
  border-radius: 30px;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;

export const NavigatePath = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  height: 100%;
  position: absolute;
  border: none;
  background-color: transparent;
  font-family: "bold", sans-serif;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
