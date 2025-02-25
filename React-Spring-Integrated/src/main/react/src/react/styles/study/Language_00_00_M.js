import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  top: 65px;
  z-index: 5;
`;

export const TopBoxWide2 = styled.div.attrs({
  id: "topboxwide2",
})`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  position: fixed;
  top: 115px;
  z-index: 5;
  border-bottom: 1px solid #313131;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; /* 줄바꿈 방지 */
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

export const TopBox2 = styled.div.attrs({
  id: "topbox2",
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

export const TopBoxText2 = styled.div.attrs({
  id: "topboxtext2",
})`
  display: inline-block;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  text-align: left;
  align-items: center;
  cursor: pointer;
  color: #313131;
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

export const TopBoxArrow2 = styled.div.attrs({
  id: "topboxarrow2",
})`
  color: #313131;
  font-size: 18px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "bold", sans-serif;
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
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 20px;
  padding-bottom: 25px;
  margin-top: 100px;
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
  border-left: 1px solid #313131;
  border-right: 1px solid #313131;
  border-bottom: 1px solid #313131;
`;

export const ClassHeader = styled.div.attrs({
  id: "classheader",
})`
  width: 100%;
  height: 40px;
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
  padding-left: 20px;
  color: white;
  font-size: 18px;
  font-family: "bold", sans-serif;
  cursor: pointer;
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
    margin-left: 15px;
  }
`;

export const ClassContentsContainer = styled.div.attrs({
  id: "classcontentscontainer",
})`
  width: 90%;
  margin-top: 50px;
  padding-bottom: 50px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* overflow-x: auto; */
  pre {
    margin: 5px 0;
  }
`;
export const ClassContentsTitle1 = styled.div.attrs({
  id: "classcontentstitle1",
})`
  width: 100%;
  font-size: 24px;
  font-family: "bold", sans-serif;
  color: black;
  margin-top: 10px;
`;
export const ClassContentsTitle2 = styled.div.attrs({
  id: "classcontentstitle2",
})`
  width: 100%;
  font-size: 20px;
  font-family: "bold", sans-serif;
  color: #2c79c1;
  margin-top: 10px;
`;
export const ClassContentsTitle3 = styled.div.attrs({
  id: "classcontentstitle3",
})`
  width: 100%;
  font-size: 18px;
  font-family: "bold", sans-serif;
  color: #fe9226;
  margin-top: 10px;
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
  padding-left: 10px;
  font-family: "regular", sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ClassContentsImage = styled.div.attrs({
  id: "classcontentsimage",
})`
  width: 100%;
  height: 20vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  margin: 5px 0;
`;

export const ClassContentsCodeBox = styled.div.attrs({
  id: "classcontentscodebox",
})`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  overflow-x: auto;
  padding: 20px 25px;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: black;
  background-color: white;
  border-radius: 10px;
  margin: 5px 0;
`;

export const ClassContentsCode = styled.div.attrs({
  id: "classcontentscode",
})`
  display: inline-block;
  margin: 5px 0;
  padding: 2px 5px;
  border-radius: 5px;
  font-family: "regular", sans-serif;
  color: red;
  background-color: rgba(0, 0, 0, 0.08);
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
  /* width: 100%; */
  width: 200vw;
  border-collapse: collapse;
  border: 1px;
`;

export const ClassTableTr = styled.tr.attrs({
  id: "classtabletr",
})`
  width: auto;
  border: 1px solid black;
`;

export const ClassTableTd = styled.td.attrs({
  id: "classtabletd",
})`
  width: auto;
  border: 1px solid black;
  padding: 10px;
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
  background-color: #f1f1f1;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    font-family: "bold", sans-serif;
    background-color: #313131;
    color: white;
  }
`;
