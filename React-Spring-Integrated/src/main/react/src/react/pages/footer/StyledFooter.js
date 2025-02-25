import { useNavigate } from "react-router-dom";
import {
  Wrap,
  Container,
  FooterName,
  FooterContents,
  MainBox,
  LogoContainer,
  Logo,
  MainLeftBox,
  MainRightBox,
  TermsLink,
} from "../../styles/footer/StyledFooter";

const StyledFooter = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrap>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <MainBox>
            <MainLeftBox>
              <FooterName>📍 회사 정보</FooterName>
              <FooterContents>
                상호명: 코디터 | 사업자등록번호: 000-00-00000 <br />
                주소: 서울특별시 강남구 테헤란로14길 6<br />
                이메일: support@coditer.com
              </FooterContents>
            </MainLeftBox>
            <MainRightBox>
              <FooterContents>
                🔗{" "}
                <TermsLink
                  onClick={() => {
                    navigate("/legal/terms");
                  }}
                >
                  이용약관
                </TermsLink>{" "}
                |{" "}
                <TermsLink
                  onClick={() => {
                    navigate("/legal/privacy");
                  }}
                >
                  개인정보처리방침
                </TermsLink>
              </FooterContents>
              <br />
              <FooterContents>
                © 2025 coditor. All rights reserved.
              </FooterContents>
            </MainRightBox>
          </MainBox>
        </Container>
      </Wrap>
    </>
  );
};

export default StyledFooter;
