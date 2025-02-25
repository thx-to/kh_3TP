import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  Container,
  PostContainer,
  PostTitle,
  TopBox,
  TopBoxArrow,
  TopBoxText,
  TopBoxWide,
  Wrap,
  UserProfileBox,
  UserProfileImg,
  UserId,
  UserPostAmount,
  ProfileTitle,
  ProfileContainer,
} from "../../styles/community/User_M";
import Post_RelatedPosts from "./components/common/Post_RelatedPosts";
import User_Feed_M from "./components/common/User_Feed_M";
import Board_Community_Main from "./components/common/Board_Community_Main";
import Board_Community_User from "./components/common/Board_Community_User";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import AxiosApi from "../../../api/AxiosApi";

const User_Main_M = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { writerKey } = location.state || {};
  const [writerProfile, setWriterProfile] = useState(null);
  const [writerName, setWriterName] = useState("");
  const [writerPostCnt, setWriterPostCnt] = useState(null);
  const [writerSelfIntro, setWriterSelfIntro] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(queryParams.get("page") || 1);
  const [size, setSize] = useState(queryParams.get("size") || 10);

  useEffect(() => {
    const readUserPost = async () => {
      console.log(writerKey);

      try {
        const response = await AxiosApi.getotherprofile(writerKey);
        setWriterProfile(response.profileUrl);
        setWriterName(response.nickname);
        setWriterPostCnt(response.postCnt);
        if (response.introduction === null) {
          setWriterSelfIntro("등록된 소개글이 없습니다.");
        } else if (response.introduction === "") {
          setWriterSelfIntro("등록된 소개글이 없습니다.");
        } else {
          setWriterSelfIntro(response.introduction);
        }
        console.log("불러온 작성자 게시글 목록 : ", response);
      } catch (error) {
        console.log("유저 게시글 불러올 때 오류 발생 : ", error);
      }
    };
    readUserPost();
  }, []);

  // TopBox firstpath
  const handleCommunity = () => {
    navigate("/community");
  };

  // TopBox secondpath
  const handleRefresh = () => {
    navigate(`/community/user/${writerKey}`, {
      state: {
        writerKey: writerKey,
      },
    });
  };

  return (
    <>
      <Wrap>
        <TopBoxWide>
          <TopBox>
              <TopBoxText
                style={{
                  display: "block", // 기본적으로 block으로 설정, 필요 시 다른 스타일을 적용
                  whiteSpace: "nowrap", // 텍스트가 한 줄에 모두 표시되게 설정
                  overflow: "visible", // 텍스트가 잘리지 않도록 설정
                  textOverflow: "clip", // 텍스트가 넘치지 않도록 설정 (필요 시 조정)
                }}
                onClick={() => handleCommunity()}
              >
                community
              </TopBoxText>
            <TopBoxArrow>{`>`}</TopBoxArrow>
              <TopBoxText
                style={{
                  maxWidth: "89vw",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                onClick={() => handleRefresh()}
              >
                {writerName}님의 페이지
              </TopBoxText>
          </TopBox>
        </TopBoxWide>
        <Container>
          <ProfileContainer>
            <ProfileTitle>프로필</ProfileTitle>
            <UserProfileBox style={{ cursor: "pointer" }}>
              <UserProfileImg isProfile={writerProfile} />
              <UserId>{writerName}</UserId>
              <UserPostAmount>작성한 질문수 {writerPostCnt}</UserPostAmount>
            </UserProfileBox>
          </ProfileContainer>
          <User_Feed_M intro={writerSelfIntro} />
          <PostContainer>
            <PostTitle>작성글</PostTitle>
            <Board_Community_User
              writerName={writerName}
              writerKey={writerKey}
              writerProfile={writerProfile}
              page={page}
              size={size}
            />
          </PostContainer>
        </Container>
        <ScrollToTopButton />
      </Wrap>
    </>
  );
};

export default User_Main_M;
