import styled from "styled-components";

export const LeftSubjectContainer = styled.div.attrs({
  id: "leftsubjectcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  gap: 5px;
  border-radius: 30px;
  background-color: #f1f1f1;
  position: sticky;
  top: 75px;
  left: 0;
`;

export const SubjectImgContainerJava = styled.div.attrs({
  id: "subjectimgcontainerjava",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/java_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerPython = styled.div.attrs({
  id: "subjectimgcontainerpython",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/python_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerC = styled.div.attrs({
  id: "subjectimgcontainerc",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/c_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerCPlus = styled.div.attrs({
  id: "subjectimgcontainercplus",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/cplus_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectImgContainerJavaScript = styled.div.attrs({
  id: "subjectimgcontainerjavascript",
})`
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/program/js_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectTitle = styled.div.attrs({
  id: "subjecttitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  color: #313131;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubjectContents = styled.div.attrs({
  id: "subjectcontents",
})`
  width: 100%;
  font-family: "medium", sans-serif;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const SubjectRateContainer = styled.div.attrs({
  id: "subjectratecontainer",
})`
  width: 100%;
  height: 33px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SubjectRateBox = styled.div.attrs({
  id: "subjectratebox",
})`
  width: 100%;
  height: 13px;
`;
export const SubjectRateWhite = styled.div.attrs({
  id: "subjectratewhite",
})`
  width: 90%;
  height: 13px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 220px;
  left: 5%;
`;
export const SubjectRateBlack = styled.div.attrs({
  id: "subjectrateblack",
})`
  width: 46%;
  height: 13px;
  border-radius: 10px 0px 0px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 220px;
  left: 5%;
`;
export const SubjectRateContents = styled.div.attrs({
  id: "subjectratecontents",
})`
  width: 100%;
  height: 14px;
  font-family: "regular", sans-serif;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
