import {
  WeeklyBestContainer,
  WeeklyBestContents,
  WeeklyBestEach,
  WeeklyBestList,
  WeeklyBestTitle,
  WeeklyBestUserBox,
  WeeklyBestUserId,
  WeeklyBestUserImg,
} from "../../../../styles/community/WeeklyBest";
import AxiosApi from "../../../../../api/AxiosApi";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WeeklyBest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [weeklybest, setWeeklyBest] = useState([]);

  useEffect(() => {
    const readWeeklyBest = async () => {
      try {
        const response = await AxiosApi.getpopularpost();
        setWeeklyBest(response);
        console.log("weekly best 받은 데이터 : ", response);
        console.log("weekly best 저장된 데이터 : ", weeklybest);
      } catch (error) {
        console.error("weekly best 불러오는 중 오류 발생 : ", error);
      }
    };
    readWeeklyBest();
  }, []);

  // view post
  const handlePost = (post) => {
    navigate(
      `/community/${post.boardType.toLowerCase()}/post/${post.boardId}`,
      {
        state: {
          boardId: post.boardId,
          boardType: post.boardType.toLowerCase(),
        },
      }
    );
  };

  const handleMove = async (post) => {
    try {
      const response = await AxiosApi.getPostCheck(post.boardId);
      if (response) {
        handlePost(post);
      }
    } catch (error) {
      console.error("게시글 이동중 오류 발생 : ", error);
    }
  };

  return (
    <>
      <WeeklyBestContainer>
        <WeeklyBestTitle>주간 인기글</WeeklyBestTitle>
        {weeklybest.map((post, index) => (
          <WeeklyBestList key={index}>
            <WeeklyBestEach
              key={post.boardId}
              style={{ cursor: "pointer" }}
              onClick={() => handleMove(post)}
            >
              <WeeklyBestContents>{post.title}</WeeklyBestContents>
              <WeeklyBestUserBox>
                <WeeklyBestUserImg isProfile={post.profileUrl} />
                <WeeklyBestUserId>{post.name}</WeeklyBestUserId>
              </WeeklyBestUserBox>
            </WeeklyBestEach>
          </WeeklyBestList>
        ))}
      </WeeklyBestContainer>
    </>
  );
};

export default WeeklyBest;
