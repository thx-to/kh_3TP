import {
  LeftSubjectContainer,
  SubjectImgContainerJava,
  SubjectTitle,
  SubjectContents,
  SubjectRateContainer,
  SubjectRateBox,
  SubjectRateWhite,
  SubjectRateBlack,
  SubjectRateContents,
} from "../../../../styles/study/Language_Title";

const Java_Title = () => {
  return (
    <>
      <LeftSubjectContainer>
        <SubjectImgContainerJava />
        <SubjectTitle>Java</SubjectTitle>
        {/*  <SubjectContents>기본 자료형과 연산자 / 학습중</SubjectContents>
          <SubjectRateContainer>
            <SubjectRateBox>
              <SubjectRateWhite />
              <SubjectRateBlack />
            </SubjectRateBox>
            <SubjectRateContents>52%</SubjectRateContents>
          </SubjectRateContainer> */}
      </LeftSubjectContainer>
    </>
  );
};

export default Java_Title;
