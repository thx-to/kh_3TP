import {
  LeftSubjectContainer,
  SubjectImgContainerPython,
  SubjectTitle,
  SubjectContents,
  SubjectRateContainer,
  SubjectRateBox,
  SubjectRateWhite,
  SubjectRateBlack,
  SubjectRateContents,
} from "../../../../styles/study/Language_Title_M";

const Python_Title_M = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerPython />
         <SubjectTitle>Python</SubjectTitle>
      {/*   <SubjectContents>학습전</SubjectContents>
        <SubjectRateContainer>
          <SubjectRateBox>
            <SubjectRateWhite />
          </SubjectRateBox>
          <SubjectRateContents>0%</SubjectRateContents>
        </SubjectRateContainer> */}
      </LeftSubjectContainer>
    </>
  );
};

export default Python_Title_M;
