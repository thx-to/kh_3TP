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
export const CenterContentsContainer = styled.div.attrs({
  id: "centercontentscontainer",
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
  padding: 50px 50px;
  gap: 30px;
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
  width: 20%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  font-family: "regular", sans-serif;
  font-size: 15px;
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
  width: 10%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  font-family: "regular", sans-serif;
  font-size: 15px;
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
