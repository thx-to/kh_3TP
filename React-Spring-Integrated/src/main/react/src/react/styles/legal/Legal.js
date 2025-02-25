import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TopBoxInner = styled.div.attrs({
  id: "topboxinner",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
`;
export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 10px;
  width: 186px;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  position: relative;
  align-items: center;
`;
export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 186px;
  height: 50px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/logo/fulllogo_white.png");
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
export const BodyContainerOuter = styled.div.attrs({
  id: "bodycontainerouter",
})`
  width: 100%;
  max-height: calc(100vh - 100px);
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
  max-width: 1280px;
  margin-top: 75px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
export const TermsTitle = styled.div.attrs({
  id: "termstitle",
})`
  width: 100%;
  margin-bottom: 50px;
  font-family: "bold", sans-serif;
  font-size: 30px;
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
  font-size: 24px;
  margin-bottom: 30px;
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
  margin-bottom: 20px;
  font-family: "medium", sans-serif;
  font-size: 20px;
`;
export const Item = styled.div.attrs({
  id: "item",
})`
  width: 100%;
  font-family: "medium", sans-serif;
  font-size: 16px;
`;
export const ItemTab = styled.div.attrs({
  id: "itemtap",
})`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 25px;
  font-family: "medium", sans-serif;
  font-size: 16px;
`;
