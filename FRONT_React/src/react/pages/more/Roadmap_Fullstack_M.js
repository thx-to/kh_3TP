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

const Roadmap_Fullstack_M = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/roadmap/fullstack");
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
              <TopBoxText2>📚 풀스택</TopBoxText2>
            </TopBoxLink>
          </TopBox2>
        </TopBoxWide2>
        <Container>
          <ImageBox src="/images/more/roadmap_fs_m.png" />
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Roadmap_Fullstack_M;
