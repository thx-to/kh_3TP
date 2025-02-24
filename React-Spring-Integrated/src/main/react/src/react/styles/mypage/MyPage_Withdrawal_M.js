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
  overflow-x: hidden;
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
  z-index: 5;
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
  z-index: 5;
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
  margin-left: 5px;
  margin-right: 5px;
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
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 30px;
  padding-bottom: 25px;
  margin-top: 70px;
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
export const CenterContentsContainer = styled.div.attrs({
  id: "centercontentscontainer",
})`
  width: 100%;
  padding: 30px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f1f1f1;
  gap: 20px;
`;

export const ContentsHeadline = styled.div.attrs({
  id: "contentsheadline",
})`
  width: 100%;
  color: #333333;
  font-family: "bold", sans-serif;
  font-size: 20px;
  text-align: center;
`;
export const ContentsText = styled.div.attrs({
  id: "contentstext",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-family: "regular", sans-serif;
`;

export const CheckBoxGroup = styled.div.attrs({
  id: "checkboxgroup",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ContentsCheckText = styled.div.attrs({
  id: "contentschecktext",
})`
  position: relative;
  font-size: 16px;
  font-family: "medium", sans-serif;
  padding-bottom: 3px;
`;

export const WithdrawalButton = styled.button.attrs({
  id: "withdrawlbutton",
})`
  width: 50%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  font-family: "regular", sans-serif;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#f1f1f1" : "#333333")};
  color: white;
`;

export const WithdrawnContainer = styled.div.attrs({
  id: "withdrawncontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export const WithdrawnImage = styled.div.attrs({
  id: "withdrawnimage",
})`
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  border-radius: 50%;
  background-image: url("/images/icon/cdt_monitor.png");
  background-position: center 35px;
  background-repeat: no-repeat;
  background-size: 70%;
  margin-bottom: 30px;
`;

export const WithdrawnHeadline = styled.div.attrs({
  id: "withdrawnheadline",
})`
  width: 100%;
  color: #333333;
  font-family: "bold", sans-serif;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;
export const WithdrawnText = styled.div.attrs({
  id: "withdrawntext",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "regular", sans-serif;
  text-align: center;
  margin-bottom: 30px;
`;

export const BackButton = styled.button.attrs({
  id: "backbutton",
})`
  width: 30%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  font-family: "regular", sans-serif;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: pointer;
  background-color: #333333;
  color: white;
  &:hover {
    background-color: #f1f1f1;
    color: black;
    font-family: "bold", sans-serif;
    border: 1px solid black;
  }
`;
