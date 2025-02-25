import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  height: 100%;
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
  top: 65px;
  z-index: 5;
`;
export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TopBoxText = styled.div.attrs({
  id: "topboxtext",
})`
  display: inline-block;
  font-family: "bold", sans-serif;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;
  color: white;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const TopBoxArrow = styled.div.attrs({
  id: "topboxarrow",
})`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "medium", sans-serif;
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
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: row;
  align-items: top;
  justify-content: center;
  gap: 20px;
  padding-bottom: 25px;
  margin-top: 50px;
`;
export const SubjectLink = styled.button.attrs({
  id: "subjectlink",
})`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 30px;
  border: 2px solid #f1f1f1;
  cursor: pointer;
  &:hover {
    border: 2px solid #313131;
    transition: all 0.3s ease-in-out;
  }
`;
export const StickyClassBox = styled.div.attrs({
  id: "stickyclassbox",
})`
  width: 100%;
  height: calc(100vh - 492px);
  position: sticky;
  top: 340px;
  bottom: 50px;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
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
