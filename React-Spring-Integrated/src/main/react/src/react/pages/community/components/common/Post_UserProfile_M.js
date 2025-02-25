import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  UserProfileBox,
  UserProfileImg,
  UserProfileTextBox,
  UserId,
  UserPostAmount,
} from "../../../../styles/community/Post_M";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AxiosApi from "../../../../../api/AxiosApi";

const Post_UserProfile_M = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [nickname, setNickname] = useState(null);
  const [profile, setProfile] = useState(null);
  const [postCnt, setPostCnt] = useState(null);
  const [writerKey, setWriterKey] = useState(null);

  const handleUserProfile = () => {
    navigate(`/community/user/${writerKey}`, {
      state: {
        writerKey: writerKey,
      },
    });
  };

  // Get Post from Backend
  useEffect(() => {
    const readUser = async () => {
      try {
        const response = await AxiosApi.getPost(boardId);
        console.log("유저 정보 : ", response);
        setNickname(response.name);
        setProfile(response.profileUrl);
        setPostCnt(response.postCnt);
        setWriterKey(response.userKey);
      } catch (error) {
        console.error("게시글 가져오는 중 오류 발생 : ", error);
      }
    };
    readUser();
  }, []);

  return (
    <>
      <UserProfileBox
        style={{ cursor: "pointer" }}
        onClick={() => handleUserProfile()}
      >
        <UserProfileImg isProfile={profile} />
        <UserId>{nickname}</UserId>
        <UserPostAmount>작성한 질문수 {postCnt}</UserPostAmount>
      </UserProfileBox>
    </>
  );
};

export default Post_UserProfile_M;
