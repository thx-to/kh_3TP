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
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 20px;
  padding-bottom: 25px;
  margin-top: 50px;
`;
export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  gap: 25px;
`;
export const LeftTopSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  border-radius: 30px;
  position: sticky;
  left: 0;
`;
export const LeftMiddleSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  position: sticky;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 30px 30px;
  border-radius: 30px;
  background-color: #f1f1f1;
  white-space: pre-wrap;
  font-family: "medium", sans-serif;
  font-size: 14px;
  position: relative;
`;
export const LeftSubjectSubContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: relative;
  justify-content: center;
`;
export const SubjectImgContainerJava = styled.div.attrs({
  id: "subjectimgcontainerjava",
})`
  width: 156px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/java_full.png");
`;
export const SubjectImgContainerPython = styled.div.attrs({
  id: "subjectimgcontainerpython",
})`
  width: 156px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/python_full.png");
`;
export const SubjectImgContainerC = styled.div.attrs({
  id: "subjectimgcontainerc",
})`
  width: 156px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/c_full.png");
`;
export const SubjectImgContainerCPlus = styled.div.attrs({
  id: "subjectimgcontainercplus",
})`
  width: 156px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/cplus_full.png");
`;
export const SubjectImgContainerJavaScript = styled.div.attrs({
  id: "subjectimgcontainercplus",
})`
  width: 156px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/js_full.png");
`;
export const SubjectUserImgContainer = styled.div.attrs({
  id: "subjectuserimgcontainer",
})`
  width: 104px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${(props) =>
    props.isProfile === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const SubjectTitle = styled.div.attrs({
  id: "subjecttitle",
})`
  width: 100%;
  height: 30px;
  font-family: "semibold", sans-serif;
  color: #313131;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubjectContent = styled.div.attrs({
  id: "subjecttitle",
})`
  width: 100%;
  height: 30px;
  font-family: "medium", sans-serif;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 50px;
  position: relative;
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
    transform: translate(-50%, -50%)
      ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
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
    border-top-color: #f0f0f0; /* 호버 시 색상 변화를 추가 */
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
  display: ${(props) =>
    props.isOpen ? "block" : "none"}; /* 토글 상태에 따라 표시/숨김 */
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
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0px;
  bottom: 0px;
  position: absolute;
  background-color: transparent;
`;

export const NavigatiePath = styled.button`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0px;
  bottom: 0px;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
