import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    height: 320px;
  }
  position: relative;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainBox = styled.div.attrs({
  id: "mainbox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MainLeftBox = styled.div.attrs({
  id: "mainleftbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainRightBox = styled.div.attrs({
  id: "mainrightbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const FooterName = styled.div.attrs({
  id: "footername",
})`
  width: 100%;
  color: white;
  font-family: "bold", sans-serif;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

export const FooterContents = styled.div.attrs({
  id: "footercontents",
})`
  width: 100%;
  color: white;
  font-family: "regular", sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 160%;
  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  position: relative;
  align-items: center;
  @media (max-width: 768px) {
    width: 110px;
    height: 65px;
  }
`;
export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 186px;
  height: 50px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/logo/fulllogo_white.png");
  position: absolute;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 30px;
  }
`;

export const TermsLink = styled.div.attrs({
  id: "termslink",
})`
  display: flex;
  margin: 0 5px;
  cursor: pointer;
`;
