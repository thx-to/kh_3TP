import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

import {
  TopBoxText,
  TopBox,
  TopBoxWide,
  Container,
  Wrap,
  LeftContainer,
  CenterContainer,
  RightContainer,
} from "../../styles/community/Community";

import Board_Community_Main from "./components/common/Board_Community_Main";
import BoardList from "./components/common/Side_BoardList";
import TopWriters from "./components/common/Side_TopWriters";
import ScrollToTopButton from "../ScrollToTopButton";
import Community_Main_M from "./Community_Main_M";

const Community_Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useOutletContext();

  const handleRefresh = () => {
    navigate("/community");
  };

  return (
    <>
      {isMobile ? (
        <Community_Main_M />
      ) : (
        <Wrap>
          <TopBoxWide>
            <TopBox>
              <TopBoxText onClick={() => handleRefresh()}>community</TopBoxText>
            </TopBox>
          </TopBoxWide>
          <Container>
            <LeftContainer>
              <BoardList />
            </LeftContainer>
            <CenterContainer>
              <Board_Community_Main />
            </CenterContainer>
            <RightContainer>
              <TopWriters />
            </RightContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Community_Main;
