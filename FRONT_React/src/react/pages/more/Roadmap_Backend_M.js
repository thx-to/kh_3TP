import { useNavigate } from "react-router-dom";
import {
  Container,
  ImageBox,
  TopBoxWide,
  TopBoxWide2,
  TopBox,
  TopBox2,
  TopBoxText,
  TopBoxText2,
  TopBoxArrow,
  TopBoxArrow2,
  TopBoxLink,
  Wrap,
} from "../../styles/more/Roadmap_M";
import ScrollToTopButton from "../ScrollToTopButton";

const Roadmap_Backend_M = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/roadmap/backend");
  };

  return (
    <>
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
          </TopBox>
        </TopBoxWide>
        <TopBoxWide2>
          <TopBox2>
            <TopBoxLink onClick={() => handleRefresh()}>
              <TopBoxText2>🛠️ 백엔드</TopBoxText2>
            </TopBoxLink>
          </TopBox2>
        </TopBoxWide2>
        <Container>
          <ImageBox src="/images/more/roadmap_be_m.png" />
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Roadmap_Backend_M;
