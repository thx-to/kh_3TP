import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
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
  justify-content: flex-start;
  align-items: center;
`;
export const BodyContainerOuter = styled.div.attrs({
  id: "bodycontainerouter",
})`
  width: 100%;
  margin-top: 115px;
  height: calc(100vh - 115px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const BodyContainer = styled.div.attrs({
  id: "bodycontainer",
})`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TermsTitle = styled.div.attrs({
  id: "termstitle",
})`
  margin-top: 50px;
  width: 100%;
  margin-bottom: 30px;
  font-family: "bold", sans-serif;
  font-size: 24px;
`;
export const Chapter = styled.div.attrs({
  id: "chapter",
})`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;
export const ChapterTitle = styled.div.attrs({
  id: "chaptertitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Article = styled.div.attrs({
  id: "article",
})`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
export const ArticleTitle = styled.div.attrs({
  id: "articletitle",
})`
  width: 100%;
  margin-bottom: 15px;
  font-family: "medium", sans-serif;
  font-size: 18px;
`;
export const Item = styled.div.attrs({
  id: "item",
})`
  width: 100%;
  font-family: "medium", sans-serif;
  font-size: 14px;
`;
export const ItemTab = styled.div.attrs({
  id: "itemtap",
})`
  margin-top: 2px;
  margin-bottom: 5px;
  padding-left: 15px;
  font-family: "medium", sans-serif;
  font-size: 14px;
`;
