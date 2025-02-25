import { useSelector } from "react-redux";

import {
  ProfileImage,
  UserNickName,
  LeftContainerEach,
  UserSignupDate,
} from "../../../styles/mypage/MyPage";
import { useEffect, useState } from "react";
import AxiosApi from "../../../../api/AxiosApi";
import { useNavigate } from "react-router-dom";

const LeftTopProfile = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.auth.profile);
  const nickname = useSelector((state) => state.auth.nickname);
  const [userSignupDate, setUserSignupDate] = useState("");

  useEffect(() => {
    const mypage = async () => {
      try {
        const response = await AxiosApi.getmyprofile();
        console.log(response);
        setUserSignupDate(response.registeredAt);
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };
    mypage();
  }, []);

  return (
    <>
      <LeftContainerEach>
        <ProfileImage isProfile={profile}></ProfileImage>
        <UserNickName style={{ marginTop: "0" }}>{nickname}</UserNickName>
        <UserSignupDate style={{ marginTop: "-15px" }}>
          가입일 :{" "}
          {userSignupDate
            ? new Date(userSignupDate)
                .toISOString()
                .slice(0, 10)
                .replace(/-/g, ".")
            : "정보 없음"}
          {". "}
        </UserSignupDate>
      </LeftContainerEach>
    </>
  );
};

export default LeftTopProfile;
