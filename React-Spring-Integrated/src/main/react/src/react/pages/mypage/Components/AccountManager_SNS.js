import {
  SubmitButton,
  AlertTitle,
  CenterSNSContentsEach1,
  CenterSNSContentsEach2,
  CenterSNSContentsInner,
  SNSIcon,
  SNSContainer,
} from "../../../styles/mypage/MyPage_M";

const AccountManager_SNS = () => {
  return (
    <>
        <SNSContainer>
          <CenterSNSContentsEach1>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/gmail.png"></SNSIcon>
              <AlertTitle>Google</AlertTitle>
              <SubmitButton>연결</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach1>
          <CenterSNSContentsEach2>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/kakao.png"></SNSIcon>
              <AlertTitle>Kakao</AlertTitle>
              <SubmitButton>연결</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach2>
          <CenterSNSContentsEach2>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/naver.png"></SNSIcon>
              <AlertTitle>Naver</AlertTitle>
              <SubmitButton>연결</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach2>
          <CenterSNSContentsEach2>
            <CenterSNSContentsInner>
              <SNSIcon icon="/images/sns/facebook.png"></SNSIcon>
              <AlertTitle>FaceBook</AlertTitle>
              <SubmitButton>연결</SubmitButton>
            </CenterSNSContentsInner>
          </CenterSNSContentsEach2>
        </SNSContainer>
    </>
  );
};

export default AccountManager_SNS;
