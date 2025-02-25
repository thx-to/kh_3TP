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
} from "../../../../styles/study/Language_Title_M";

const Java_Title_M = () => {

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

export default Java_Title_M;
