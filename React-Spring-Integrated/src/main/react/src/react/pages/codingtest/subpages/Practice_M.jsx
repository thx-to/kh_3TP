import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import AxiosApi from "../../../../api/AxiosApi";

import JwtDecoding from "../../../../api/JwtDecode";

import {
  Wrap,
  Container,
  LeftContainer,
  LeftTopSubjectContainer,
  LeftMiddleSubjectContainer,
  LeftSubjectSubContainer,
  SubjectImgContainerJava,
  SubjectUserImgContainer,
  SubjectTitle,
  SubjectContent,
  RightContainer,
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContents,
  ClassSet,
  ClassName,
  TopBox,
  TopBoxWide,
  TopBoxText,
  TopBoxArrow,
  NavigatiePath,
} from "../../../styles/codingtest/CodingTestCommons_M";
import ScrollToTopButton from "../../ScrollToTopButton";

import FeynmanQuote from "../components/FeynmanQuote";
import {
  LevelContainer,
  LevelContainerPage,
  LevelImgPractice,
} from "../../../styles/codingtest/CodingTest_Main";

// User Nickname, 등급
// Coding Test 난이도 받아와야함
// 경로 받아와야함
const Practice_M = () => {
  const [challengeGroups, setChallengeGroups] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const nickname = useSelector((state) => state.auth.nickname);
  const { mainContentRef } = useOutletContext();

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const accessToken = useSelector((state) => state.auth.accesstoken);
  const userId = accessToken
    ? JwtDecoding.getFieldFromToken(accessToken, "sub")
    : null;

  useEffect(() => {
    const fetchChallengeList = async () => {
      const responseData = await AxiosApi.getChallengeList("practice", userId);

      if (!responseData["error"]) {
        setChallengeGroups(
          responseData.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})
        );
      }
    };

    fetchChallengeList();
  }, []);

  const profile = useSelector((state) => state.auth.profile);

  // TopBox firstpath
  const handleCodingTest = () => {
    navigate("/codingtest");
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate("/codingtest/practice");
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleCodingTest()}>
            coding test
          </TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>Practice</TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <LevelContainerPage>
          <LevelImgPractice />
          Practice
        </LevelContainerPage>
        {challengeGroups === null
          ? "Loading..."
          : Object.keys(challengeGroups).length === 0
          ? "데이터가 존재하지 않습니다😓.."
          : Object.entries(challengeGroups).map(([category, items]) => (
              <EachClass key={category}>
                <ClassHeader>
                  <ClassHeaderTitle>{category}</ClassHeaderTitle>
                </ClassHeader>
                <ClassContents isOpen={true}>
                  {items.map((content) => (
                    <ClassSet key={content.questionId}>
                      <ClassName>
                        <NavigatiePath
                          onClick={() =>
                            navigate(
                              `/codingtest/challenge/${content.questionId}`
                            )
                          }
                        ></NavigatiePath>
                        {content.title}
                      </ClassName>
                    </ClassSet>
                  ))}
                </ClassContents>
              </EachClass>
            ))}
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};
export default Practice_M;
