import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
`;
export const TopBoxWide = styled.div.attrs({
  id: "topboxwide",
})`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  position: fixed;
  left: 0;
  top: 100px;
  z-index: 5;
`;
export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const TopBoxText = styled.div.attrs({
  id: "topboxtext",
})`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 30px;
  border: 1px solid #313131;
  font-family: "bold", sans-serif;
  font-size: 18px;
  align-items: center;
  padding-bottom: 3px;
  cursor: pointer;
  color: white;
  background-color: #313131;
  &:hover {
    color: #313131;
    background-color: white;
  }
`;
export const TopBoxArrow = styled.div.attrs({
  id: "topboxarrow",
})`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "light", sans-serif;
  padding-bottom: 3px;
`;
export const TopBoxLink = styled.button.attrs({
  id: "topboxlink",
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
    color: white;
  }
`;
export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
  margin-top: 75px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 20%;
  min-width: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;

export const CenterContainer = styled.div.attrs({
  id: "centercontainer",
})`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  left: 0;
  margin-top: 10px;
`;

export const ImageBox = styled.img.attrs({
  id: "imagebox",
})`
  width: 100%; /* div의 width에 맞게 */
  height: auto; /* 비율에 맞게 자동으로 조정 */
  object-fit: contain; /* 이미지의 비율을 유지하면서 크기 조정 */
`;

export const MenuListContainer = styled.div.attrs({
  id: "menulistcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 15px;
`;
export const MenuListTitle = styled.div.attrs({
  id: "menulisttitle",
})`
  width: 100%;
  font-family: "bold", sans-serif;
  font-size: 24px;
  color: black;
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;
export const MenuListLink = styled.button.attrs({
  id: "menulistlink",
})`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  border: none;
  color: inherit;
  background-color: transparent;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const MenuListActiveContents = styled.div.attrs({
  id: "menulistactivecontents",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 18px;
  color: black;
  display: flex;
  position: relative;
`;
export const MenuListInactiveContents = styled.div.attrs({
  id: "menulistactivecontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  position: relative;
`;
