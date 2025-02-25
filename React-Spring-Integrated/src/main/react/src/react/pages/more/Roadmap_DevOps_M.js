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
  Wrap,
} from "../../styles/more/Roadmap_M";
import ScrollToTopButton from "../ScrollToTopButton";

const Roadmap_DevOps_M = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/roadmap/devops");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText onClick={() => handleRefresh()}>more</TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
            <TopBoxText onClick={() => handleRefresh()}>
              개발자 로드맵
            </TopBoxText>
          </TopBox>
        </TopBoxWide>
        <TopBoxWide2>
          <TopBox2>
            <TopBoxText2 onClick={() => handleRefresh()}>🪢 DevOps</TopBoxText2>
          </TopBox2>
        </TopBoxWide2>
        <Container>
          <ImageBox src="/images/more/roadmap_do_m.png" />
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Roadmap_DevOps_M;
