import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import {
  CenterContainer,
  LeftContainer,
  Container,
  ImageBox,
  TopBox,
  TopBoxArrow,
  TopBoxLink,
  TopBoxText,
  TopBoxWide,
  Wrap,
} from "../../styles/more/Roadmap";

import LeftMenus from "./components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import Roadmap_Backend_M from "./Roadmap_Backend_M";

const Roadmap_Backend = () => {
  const navigate = useNavigate();
  const { mainContentRef } = useOutletContext();
  const { isMobile } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleRefresh = () => {
    navigate("/roadmap/backend");
  };

  return (
    <>
      {isMobile ? (
        <Roadmap_Backend_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>more</TopBoxText>
              </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>개발자 로드맵</TopBoxText>
              </TopBoxLink>
              <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxLink onClick={() => handleRefresh()}>
                <TopBoxText>🛠️ 백엔드</TopBoxText>
              </TopBoxLink>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <LeftMenus />
            </LeftContainer>
            <CenterContainer>
              <ImageBox src="/images/more/roadmap_be_p.png" />
            </CenterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Roadmap_Backend;
