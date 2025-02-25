import styled, {keyframes, css} from "styled-components";
import {Link} from "react-router-dom";

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
export const MenuLink = styled.button.attrs({
  id: "menulink",
})`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    border-bottom: 2px solid #333333;
    & > #menutitle {
      font-family: "extrabold", sans-serif;
    }
  }
`;
export const MenuImgContainer = styled.div.attrs({
  id: "menuimgcontainer",
})`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const MenuImgJava = styled.div.attrs({
  id: "menuimgjava",
})`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/java_full.png");
`;
export const MenuImgPython = styled.div.attrs({
  id: "menuimgpython",
})`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/python_full.png");
`;
export const MenuImgC = styled.div.attrs({
  id: "menuimgc",
})`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/c_full.png");
`;
export const MenuImgCPlus = styled.div.attrs({
  id: "menuimgcplus",
})`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/cplus_full.png");
`;
export const MenuImgJavaScript = styled.div.attrs({
  id: "menuimgjavascript",
})`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/js_full.png");
`;
export const MenuTitle = styled.div.attrs({
  id: "menutitle",
})`
  width: 80px;
  display: inline-block;
  position: relative;
  align-items: left;
  font-family: "bold", sans-serif;
  font-size: 18px;
  margin: 10px;
  text-align: center;
`;
