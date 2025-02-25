import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  margin-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
`;

export const EachClass = styled.div.attrs({
  id: "eachclass",
})`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ClassHeader = styled.div.attrs({
  id: "classheader",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: ${(props) => (props.isOpen ? "30px" : "30px 30px 0px 0px")};
  transition: border-radius 1s ease-in-out, background-color 1s ease-in-out;
`;

export const ClassHeaderTitle = styled.div.attrs({
  id: "classheadertitle",
})`
  width: 90%;
  padding-left: 30px;
  color: white;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;

export const ClassHeaderTitlePathLink = styled.button.attrs({
  id: "classheadertitlepathlink",
})`
  width: inherit;
  height: 30px;
  text-align: left;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;
export const ClassHeaderTitleButton = styled.div.attrs({
  id: "classheadertitlebutton",
})`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  position: relative;
  margin-right: 30px;
  color: white;
  cursor: pointer;
  &::before {
    /* 토글 상태에 따라 아이콘 변경 */
    content: ${(props) => (props.isOpen ? '"◀"' : '"▼"')};
    position: relative;
    margin-left: 7px;
  }
`;

export const ClassContentsContainer = styled.div.attrs({
  id: "classcontentscontainer",
})`
  width: 90%;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const ClassContentsTitle1 = styled.div.attrs({
  id: "classcontentstitle1",
})`
  width: 100%;
  font-size: 20px;
  font-family: "bold", sans-serif;
  color: black;
`;
export const ClassContentsTitle2 = styled.div.attrs({
  id: "classcontentstitle2",
})`
  width: 100%;
  font-size: 18px;
  font-family: "bold", sans-serif;
  color: #2c79c1;
`;
export const ClassContentsTitle3 = styled.div.attrs({
  id: "classcontentstitle3",
})`
  width: 100%;
  font-size: 16px;
  font-family: "bold", sans-serif;
  color: #fe9226;
`;
export const ClassContentsText = styled.div.attrs({
  id: "classcontentstext",
})`
  width: 100%;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: black;
`;
export const ClassContentsTextTab = styled.div.attrs({
  id: "classcontentstexttab",
})`
  padding-left: 25px;
  font-family: "regular", sans-serif;
`;
export const ClassContentsImage = styled.div.attrs({
  id: "classcontentsimage",
})`
  width: 600px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
`;

export const ClassContentsCodeBox = styled.div.attrs({
  id: "classcontentscodebox",
})`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  padding: 20px 25px;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: black;
  background-color: white;
  border-radius: 10px;
  margin: 10px 0;
`;

export const ClassContentsCode = styled.div.attrs({
  id: "classcontentscode",
})`
  width: 100%;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: #313131;
`;

export const ClassTableBox = styled.div.attrs({
  id: "classtablebox",
})`
  width: 100%;
  overflow-x: auto;
  font-size: 14px;
  font-family: "regular", sans-serif;
`;

export const ClassTable = styled.table.attrs({
  id: "classtable",
})`
  width: 100%;
  border-collapse: collapse;
  border: 1px;
`;

export const ClassTableTr = styled.tr.attrs({
  id: "classtabletr",
})`
  border: 1px solid black;
`;

export const ClassTableTd = styled.td.attrs({
  id: "classtabletd",
})`
  border: 1px solid black;
  padding: 10px;
`;

export const StickyClassBox = styled.div.attrs({
  id: "stickyclassbox",
})`
  width: 100%;
  height: calc(100vh - 465px);
  position: sticky;
  top: 314px;
  bottom: 50px;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
`;

export const ClassLinkBox = styled(Link).attrs({
  id: "classlinkbox",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 14px;
  font-family: "medium", sans-serif;
  background-color: white;
  text-align: center;
  &:hover {
    font-family: "bold", sans-serif;
    background-color: #313131;
    color: white;
  }
`;
