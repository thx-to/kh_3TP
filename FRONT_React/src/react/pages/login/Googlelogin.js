import React, { useEffect } from "react";
import AxiosApi from "../../../api/AxiosApi"; // AxiosApi 경로에 맞게 수정
import Common from "../../../util/Common"; // Common 경로에 맞게 수정
import { useNavigate } from "react-router-dom";

const GoogleLogin = ({ setModalOpen, setModalContent }) => {
  const navigate = useNavigate();

  //////////////////// 구글 로그인 메소드 ////////////////////
  const onGoogleLoginSuccess = async (response) => {
    console.log("구글 로그인 성공: ", response);
    const token = response.credential;

    if (!token) {
      console.log("Google 토큰이 존재하지 않음");
      setModalOpen(true);
      setModalContent("Google 토큰이 존재하지 않습니다.");
      return;
    }

    try {
      console.log("구글 로그인 API 호출");
      const rsp = await AxiosApi.googleLogin(token);
      console.log("구글 로그인 응답: ", rsp.data);

      const data = rsp.data;

      if (data && data.grantType === "Bearer") {
        if (data.isNewUser === "true") {
          // 새로운 사용자로 로그인
          console.log("새로운 사용자로 로그인");
        } else {
          // 기존 사용자 로그인
          console.log("기존 사용자로 로그인");
        }

        // 공통된 토큰 처리
        const accessTokenExpirationTime = Common.getNewAccessTokenExpiresIn(
          data.accessToken
        );
        const keynumber = Common.getNewUserKeyNumber(data.accessToken);
        const nickname = Common.getNewNickname(data.accessToken);
        const profile = data.profileUrl;

        Common.setKeyNumber(keynumber);
        Common.setAccessToken(data.accessToken);
        Common.setAccessTokenExpiresIn(accessTokenExpirationTime);
        Common.setNickname(nickname);
        Common.setProfile(profile);
        navigate("/");
      } else {
        setModalOpen(true);
        setModalContent(`구글 로그인 실패: ${data.error}`);
      }
    } catch (error) {
      console.error(
        "Google login failure: ",
        error.response?.data || error.message
      );
      setModalOpen(true);
      setModalContent("구글 로그인 중 서버 오류가 발생했습니다.");
    }
  };

  //////////////////// 구글 로그인 스크립트 로드 ////////////////////
  useEffect(() => {
    console.log("구글 로그인 스크립트 로드 시작");
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      console.log("구글 로그인 스크립트 로드 완료");
      window.google.accounts.id.initialize({
        client_id:
          "159300514752-4da56n3as35i523kr5resdcqaba8e7t4.apps.googleusercontent.com",
        callback: onGoogleLoginSuccess, // 구글 로그인 성공 시 콜백 함수
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // 컴포넌트 언마운트 시 스크립트 제거
      console.log("구글 로그인 스크립트 제거");
    };
  }, []); // 의존성 배열을 비워서 한 번만 실행되도록 설정

  const handleGoogleLoginClick = () => {
    console.log("구글 로그인 클릭");
    window.google.accounts.id.prompt();
  };

  return { handleGoogleLoginClick };
};

export default GoogleLogin;
