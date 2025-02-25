import { useState, useEffect, useCallback } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import {
  CIcon,
  CommunityInnerLeft,
  CommunityInnerRight,
  CommunityOuterContainer,
  CommunityTitle,
  Container,
  CPlusIcon,
  CTButton,
  CTContents,
  CTImage,
  CTOuterContainer,
  CTTextContainer,
  CTTitle,
  EachIconContainer,
  IconContainer,
  IconContainer1,
  IconContainer2,
  IconContents,
  IconOuterContainer,
  IconText,
  IconTextContainer,
  IconTitle,
  JavaIcon,
  JSIcon,
  PythonIcon,
  RoadmapContents,
  RoadmapEachContents,
  RoadmapIcon,
  RoadmapImage,
  RoadmapInnerContainer,
  RoadmapInnerPart,
  RoadmapOuterContainer,
  RoadnmapTitle,
  Wrap,
} from "../../styles/main/Main";
import Main_M from "./Main_M";
import ScrollToTopButton from "../ScrollToTopButton";
import {
  setLoginCondition,
  logoutCondition,
} from "../../../redux/slice/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import Common from "../../../util/Common";
import AxiosApi from "../../../api/AxiosApi";
import { setLoginData, logoutAuth } from "../../../redux/slice/authSlice";
import Board_PostList_Main from "../community/components/common/Board_PostList_Main";

const Main = () => {
  const { isMobile } = useOutletContext();

  const isautologin = useSelector((state) => state.login.autologin);
  const accesstoken = useSelector((state) => state.auth.accesstoken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function autologin() {
    try {
      const resposne = await AxiosApi.autologin();
      return resposne.data;
    } catch (error) {}
  }

  useEffect(() => {
    if (!isautologin) {
      navigate("/");
      return;
    }
    if (accesstoken) {
      return;
    }

    const autoLoginProcess = async () => {
      try {
        let token = accesstoken;
        console.log(token);

        if (!token) {
          token = await Common.refreshAccessToken();
          if (!token) {
            dispatch(logoutAuth());
            dispatch(logoutCondition());
            navigate("/");
            return;
          }
        }
        console.log("자동 로그인 시도...");
        const res = await autologin();
        if (res) {
          console.log("자동 로그인 성공, 유저 데이터 저장");
          const keynumber = Common.getNewUserKeyNumber(token);
          const nickname = Common.getNewNickname(token);

          dispatch(setLoginData({ keynumber: keynumber, nickname: nickname }));
        } else {
          console.log("자동 로그인 실패, 로그아웃 처리");
          dispatch(logoutAuth());
          dispatch(logoutCondition());
          navigate("/");
        }
      } catch (error) {
        console.error("자동 로그인 실패:", error);
        dispatch(logoutAuth());
        dispatch(logoutCondition());
        navigate("/");
      }
    };
    autoLoginProcess();
  }, []);

  return (
    <>
      {isMobile ? (
        <Main_M /> // 모바일 화면일 경우 MainPage_M 컴포넌트를 렌더링
      ) : (
        <Wrap>
          <Carousel />
          <Container>
            <IconOuterContainer>
              <IconContainer1>
                <EachIconContainer
                  onClick={() => {
                    navigate("/study/java");
                  }}
                >
                  <JavaIcon />
                  <IconTextContainer>
                    <IconTitle>객체지향의 강력함, Java 완전 정복!</IconTitle>
                    <IconContents>
                      기업에서 가장 많이 사용하는 언어,
                      <br />
                      Java를 기초부터 탄탄하게 배워보세요.
                    </IconContents>
                  </IconTextContainer>
                </EachIconContainer>
                <EachIconContainer
                  onClick={() => {
                    navigate("/study/python");
                  }}
                >
                  <PythonIcon />
                  <IconTextContainer>
                    <IconTitle>쉽고 강력한 Python으로 개발 시작하기!</IconTitle>
                    <IconContents>
                      데이터 분석, 웹 개발, 인공지능까지!
                      <br />
                      Python을 활용한 다양한 실전 프로젝트 경험
                    </IconContents>
                  </IconTextContainer>
                </EachIconContainer>
              </IconContainer1>
              <IconContainer2>
                <EachIconContainer
                  onClick={() => {
                    navigate("/study/c");
                  }}
                >
                  <CIcon />
                  <IconTextContainer
                  // style={{ justifyContent: "flex-end", textAlign: "right" }}
                  >
                    <IconTitle>
                      프로그래밍의 기초, C 언어로 기본기 쌓기!
                    </IconTitle>
                    <IconContents>
                      컴퓨터 구조와 저수준 프로그래밍을 이해하고,
                      <br />C 언어를 활용한 알고리즘 해결 능력 키우기
                    </IconContents>
                  </IconTextContainer>
                </EachIconContainer>
                <EachIconContainer
                  onClick={() => {
                    navigate("/study/javascript");
                  }}
                >
                  <JSIcon />
                  <IconTextContainer
                  // style={{ justifyContent: "flex-end", textAlign: "right" }}
                  >
                    <IconTitle>JavaScript로 웹 개발의 핵심을 배우자!</IconTitle>
                    <IconContents>
                      동적인 웹 페이지를 만들 수 있는 JavaScript
                      <br />
                      프론트엔드 개발에 필수적인 언어 배우기
                    </IconContents>
                  </IconTextContainer>
                </EachIconContainer>
              </IconContainer2>
            </IconOuterContainer>
            <CTOuterContainer>
              <CTImage />
              <CTTextContainer>
                <CTTitle>🚀 코딩 테스트, 첫걸음부터 시작하세요!</CTTitle>
                <CTContents>
                  처음 코딩 테스트를 시작하는 당신을 위해 준비된
                  <br />
                  Practice 문제로 기본기를 다져보세요!
                  <br />
                  문제를 풀며 실력을 쌓고, 자신감을 얻을 수 있습니다.
                </CTContents>
              </CTTextContainer>
              <CTButton
                onClick={() => {
                  navigate("/codingtest/practice");
                }}
              >
                지금 시작하기
              </CTButton>
            </CTOuterContainer>
            <CommunityOuterContainer>
              <CommunityInnerLeft>
                <CommunityTitle>지금 올라온 💻 코딩 질문 글</CommunityTitle>
                <Board_PostList_Main
                  boardType="coding"
                  page="1"
                  size="5"
                  sortBy="createdAt"
                  order="desc"
                />
              </CommunityInnerLeft>
              <CommunityInnerRight>
                <CommunityTitle>지금 인기 있는 ✏️ 스터디 글</CommunityTitle>
                <Board_PostList_Main
                  boardType="study"
                  page="1"
                  size="5"
                  sortBy="createdAt"
                  order="desc"
                />
              </CommunityInnerRight>
            </CommunityOuterContainer>
            <RoadmapOuterContainer>
              <RoadmapImage />
              <RoadmapInnerContainer>
                <RoadmapInnerPart>
                  <RoadmapEachContents
                    onClick={() => {
                      navigate("/roadmap/frontend");
                    }}
                  >
                    <RoadmapIcon>✨</RoadmapIcon>
                    <RoadnmapTitle>프론트엔드 개발자 로드맵</RoadnmapTitle>
                    <RoadmapContents>
                      웹 화면을 구현하는
                      <br />
                      UI/UX 개발자가 되고 싶다면?
                      <br />
                      HTML, CSS, JS부터 프레임워크까지
                      <br />
                      단계별 학습을 따라가세요!
                    </RoadmapContents>
                  </RoadmapEachContents>
                  <RoadmapEachContents
                    onClick={() => {
                      navigate("/roadmap/backend");
                    }}
                  >
                    <RoadmapIcon>🛠️</RoadmapIcon>
                    <RoadnmapTitle>백엔드 개발자 로드맵</RoadnmapTitle>
                    <RoadmapContents>
                      서버와 데이터베이스,
                      <br />
                      API 개발까지!
                      <br />
                      백엔드 개발자로 성장하기 위한
                      <br />
                      필수 기술을 한눈에 확인하세요.
                    </RoadmapContents>
                  </RoadmapEachContents>
                </RoadmapInnerPart>
                <RoadmapInnerPart>
                  <RoadmapEachContents
                    onClick={() => {
                      navigate("/roadmap/devops");
                    }}
                  >
                    <RoadmapIcon>🪢</RoadmapIcon>
                    <RoadnmapTitle>데브옵스 개발자 로드맵</RoadnmapTitle>
                    <RoadmapContents>
                      인프라 자동화부터
                      <br />
                      CI/CD 파이프라인 구축까지!
                      <br />
                      개발과 운영을 동시에 다루는
                      <br />
                      데브옵스 전문가가 되는 길을 알아보세요.
                    </RoadmapContents>
                  </RoadmapEachContents>
                  <RoadmapEachContents
                    onClick={() => {
                      navigate("/roadmap/fullstack");
                    }}
                  >
                    <RoadmapIcon>📚</RoadmapIcon>
                    <RoadnmapTitle>풀스택 개발자 로드맵</RoadnmapTitle>
                    <RoadmapContents>
                      프론트엔드와 백엔드를
                      <br />
                      모두 다루고 싶다면?
                      <br />
                      풀스택 개발자가 되기 위한
                      <br />
                      필수 기술들을 단계별로 학습하세요!
                    </RoadmapContents>
                  </RoadmapEachContents>
                </RoadmapInnerPart>
              </RoadmapInnerContainer>
            </RoadmapOuterContainer>
          </Container>
          <ScrollToTopButton />
        </Wrap>
      )}
    </>
  );
};

export default Main;
