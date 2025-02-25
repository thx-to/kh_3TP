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
  border-left: ${(props) => (props.isOpen ? "none" : "1px solid #313131")};
  border-right: ${(props) => (props.isOpen ? "none" : "1px solid #313131")};
  border-bottom: ${(props) => (props.isOpen ? "none" : "1px solid #313131")};
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
    content: "";
    position: absolute;
    top: 40%;
    left: 100%;
    transform: translate(-50%, -50%) ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid white;
    transition: transform 0.3s ease, border-top-color 0.3s ease;
    transform-origin: center center;
  }

  /* 변경된 아이콘 스타일에 추가 */
  &:hover::before {
    border-top-color: #f0f0f0;  /* 호버 시 색상 변화를 추가 */
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
    transform: rotate(0deg);
  }
`;

export const ClassName = styled.div.attrs({
  id: "classname",
})`
  color: black;
  font-size: 18px;
  font-family: "medium", sans-serif;
  margin-left: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  position: relative;
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