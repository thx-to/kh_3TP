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
} from "../../../../styles/study/Language_Title";

const CPlus_Title = () => {
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

export default CPlus_Title;
