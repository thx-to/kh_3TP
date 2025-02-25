import {
  LeftSubjectContainer,
  SubjectImgContainerC,
  SubjectTitle,
  SubjectContents,
  SubjectRateContainer,
  SubjectRateBox,
  SubjectRateWhite,
  SubjectRateBlack,
  SubjectRateContents,
} from "../../../../styles/study/Language_Title_M";

const C_Title_M = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerC />
        <SubjectTitle>C</SubjectTitle>
        {/* <SubjectContents>학습전</SubjectContents>
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

export default C_Title_M;
