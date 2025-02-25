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
  padding-bottom: 50px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;

export const CenterContainer = styled.div.attrs({
  id: "centercontainer",
})`
  width: calc(100% - 225px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  left: 0;
`;

export const CenterContainerEach = styled.div.attrs({
  id: "centercontainereach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CenterContainerTitle = styled.div.attrs({
  id: "centercontainertitle",
})`
  position: relative;
  display: flex;
  font-family: "bold", sans-serif;
  font-size: 28px;
  margin-left: 20px;
`;

export const CenterFeedContainer = styled.div.attrs({
  id: "centerfeedcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-top: 13.75px;
  border-radius: 20px;
  border: 1px solid #f1f1f1;
  padding: 30px 30px;
`;
export const CenterFeedContentsBox = styled.div.attrs({
  id: "centerfeedcontentsbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  gap: 20px;
`;
export const CenterFeedText = styled.div.attrs({
  id: "centerfeedtext",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "medium", sans-serif;
`;

export const FeedButton = styled.button.attrs({
  id: "feedbutton",
})`
  width: 20%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid #333333;
  color: white;
  font-family: "regular", sans-serif;
  font-size: 15px;
  background-color: #333333;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #f1f1f1;
    color: #333333;
    border: 1px solid #333333;
    font-family: "bold", sans-serif;
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
`;

export const EditorArea = styled.div.attrs({
  id: "editorarea",
})`
  width: 100%;
  height: 300px;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;
`;
export const WriteCancelButton = styled.div.attrs({
  id: "writecancelbutton",
})`
  width: 60px;
  height: 30px;
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
  width: 60px;
  height: 30px;
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
