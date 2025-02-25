import {
  LeftSubjectContainer,
  SubjectImgContainerCPlus,
  SubjectTitle,
  SubjectContents,
  SubjectRateContainer,
  SubjectRateBox,
  SubjectRateWhite,
  SubjectRateBlack,
  SubjectRateContents,
} from "../../../../styles/study/Language_Title_M";

const CPlus_Title_M = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerCPlus />
        <SubjectTitle>C++</SubjectTitle>
       {/*  <SubjectContents>학습전</SubjectContents>
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

export default CPlus_Title_M;
