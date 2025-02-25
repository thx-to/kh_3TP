import styled, { css } from "styled-components";

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
    content: "";
    position: absolute;
    top: 40%;
    left: 90%;
    transform: translate(-50%, -50%)
      ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid white;
    transition: transform 0.3s ease;
  }
`;

export const ClassContents = styled.div.attrs({
  id: "classcontents",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  /* 토글 상태에 따라 표시/숨김 */
  display: ${(props) => (props.isOpen ? "none" : "block")};
`;

export const ClassSet = styled.div.attrs({
  id: "classset",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  & + &::before {
    content: "";
    position: absolute;
    left: 3%;
    width: 94%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  }
`;
export const ClassName = styled.div.attrs({
  id: "classname",
})`
  color: black;
  font-size: 20px;
  font-family: "medium", sans-serif;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:hover {
    font-family: "extrabold", sans-serif;
  }
  &:hover::before {
    content: "<";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    color: red;
    font-size: 18px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
  }
`;
