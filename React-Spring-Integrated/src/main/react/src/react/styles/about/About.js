import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
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
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  margin-bottom: 0;
  /* background-repeat: no-repeat;
  background-size: 500px 500px;
  background-position: bottom right;
  background-image: url("/images/general/aboutimg_50.png"); */
  box-sizing: border-box;
`;
export const ImageContainer = styled.div.attrs({
  id: "imagecontainer",
})`
  width: 500px;
  height: 500px;
  position: fixed;
  top: 45vh;
  left: 55vw;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 10% 100%;
  background-image: url("/images/general/aboutimg_50.png");
  z-index: -1;
`;
export const AboutTitle = styled.div.attrs({
  id: "abouttitle",
})`
  width: 100%;
  margin-bottom: 50px;
  font-family: "bold", sans-serif;
  font-size: 30px;
`;
export const AboutSubTitle = styled.div.attrs({
  id: "aboutsubtitle",
})`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "bold", sans-serif;
  font-size: 24px;
`;

export const AboutListTitle = styled.div.attrs({
  id: "aboutlisttitle",
})`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-right: 20px;
  font-family: "bold", sans-serif;
  font-size: 20px;
`;

export const AboutContents = styled.div.attrs({
  id: "aboutcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 18px;
  margin-bottom: 30px;
`;
