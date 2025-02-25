import { useLocation, useNavigate } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  BoardContainer,
} from "../../styles/community/Community_M";

import Board_Community_Main from "./components/common/Board_Community_Main";
import BoardList from "./components/common/Side_BoardList";
import TopWriters from "./components/common/Side_TopWriters";
import ScrollToTopButton from "../ScrollToTopButton";

const Community_Main_M = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRefresh = () => {
    navigate("/community");
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
            <TopBoxText onClick={() => handleRefresh()}>community</TopBoxText>
          </TopBox>
        </TopBoxWide>
        <Container>
          <Board_Community_Main />
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default Community_Main_M;
