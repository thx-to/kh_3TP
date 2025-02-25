import styled from "styled-components";

export const WriteWrap = styled.div.attrs({
  id: "writewrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  overflow: none;
`;
export const WriteContainer = styled.div.attrs({
  id: "writecontainer",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 10px;
  overflow: none;
`;

export const WriteSortOuterContiner = styled.div.attrs({
  id: "writesortoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  }
`;
export const WriteSortInnerContainer = styled.div.attrs({
  id: "writesortinnercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WriteSortTitleActive = styled.div.attrs({
  id: "writesorttitleactive",
})`
  width: 175px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 18px;
  font-family: "semibold", sans-serif;
  border-bottom: 2px solid black;
`;
export const WriteSortTitleInactive = styled.div.attrs({
  id: "writesorttitleinactive",
})`
  width: 25%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-family: "semibold", sans-serif;
`;

export const WriteBoardLink = styled.button.attrs({
  id: "writeboardlink",
})`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  border: none;
  color: inherit;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const WriteTitleBox = styled.div.attrs({
  id: "writetitlebox",
})`
  margin-top: 10px;
  width: 100%;
  margin-bottom: 10px;
`;
export const WriteTitle = styled.input.attrs({
  id: "writetitle",
})`
  width: 100%;
  padding: 5px 15px;
  font-family: "bold", sans-serif;
  font-size: 24px;
  color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const WriteTagBox = styled.div.attrs({
  id: "writetagbox",
})`
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
`;
export const WriteTags = styled.input.attrs({
  id: "writetags",
})`
  width: 100%;
  padding: 5px 25px;
  font-family: "medium", sans-serif;
  font-size: 20px;
  color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const TipTapBox = styled.div.attrs({
  id: "tiptapbox",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const EditorArea = styled.div.attrs({
  id: "editorarea",
})`
  width: 100%;
  height: calc(100vh - 217px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  overflow: auto;
`;
export const ToolBarContainer = styled.div.attrs({
  id: "toolbarcontainer",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  max-width: 1280px;
`;
export const WriteButtonsArea = styled.div.attrs({
  id: "writebuttonsarea",
})`
  width: 100vw;
  height: 80px;
  margin-left: -10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 10px;
  border-top: 1px solid #f1f1f1;
  box-shadow: 0 0 20px 1px #f1f1f1;
`;
export const WriteCancelButton = styled.div.attrs({
  id: "writecancelbutton",
})`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;

export const WriteSubmitButton = styled.div.attrs({
  id: "writesutmitbutton",
})`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f1f1f1;
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;
