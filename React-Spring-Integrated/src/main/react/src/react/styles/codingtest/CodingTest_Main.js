import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
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

export const PathLink = styled.button.attrs({
  id: "pathlink",
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
    background-color: #313131;
    color: white;
  }
`;

export const SubjectLink = styled.button`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 30px;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    transition: all 0.3s ease-in-out;
  }
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  margin-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  align-items: top;
  justify-content: center;
  gap: 25px;
  padding-bottom: 25px;
  margin-top: 75px;
`;

export const LevelContainer = styled.div.attrs({
  id: "levelcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 5px;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: sticky;
  top: 75px;
  left: 0;
  font-size: 20px;
  font-family: "medium", sans-serif;
  color: #333333;
`;
export const LevelContainerPage = styled.div.attrs({
  id: "levelcontainerpage",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 5px;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: relative;
  font-size: 20px;
  font-family: "medium", sans-serif;
  color: #333333;
`;

export const LevelImgPractice = styled.div.attrs({
  id: "levelimgpractice",
})`
  width: 35%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/icon/ct_prtc.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LevelImgBasic = styled.div.attrs({
  id: "levelimgbasic",
})`
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/icon/ct_basic.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LevelImgIntermediate = styled.div.attrs({
  id: "levelimgpractice",
})`
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/icon/ct_im.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LevelImgExpert = styled.div.attrs({
  id: "levelimgpractice",
})`
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/icon/ct_expert.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;
