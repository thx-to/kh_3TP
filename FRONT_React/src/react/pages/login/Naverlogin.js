import React, { useEffect } from "react";
import AxiosApi from "../../../api/AxiosApi";
import JwtDecoding from "../../../api/JwtDecode";
import Common from "../../../util/Common";
import { useNavigate } from "react-router-dom";

export const handleNaverLoginClick = () => {
  const clientId = "X_BBB0DjfcyGQrl7o9jD";
  const redirectUri = "http://localhost:8111/auth/naver/callback";
  const state = "RANDOM_STATE";
  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  const width = 600;
  const height = 700;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  const popup = window.open(
    naverLoginUrl,
    "Naver Login",
    `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`
  );

  if (!popup) {
    alert(
      "네이버 팝업 창이 열리지 않았습니다. 팝업 차단 설정을 확인해 주세요."
    );
  } else {
    console.log("네이버 팝업 창이 열렸습니다.");
  }

  const handleMessage = (event) => {
    console.log("부모 창에서 메시지 수신 시도:", event);

    const allowedOrigin = "http://localhost:8111";
    if (event.origin !== allowedOrigin) return;

    console.log("받은 메시지 데이터:", event.data);
    const { success, error } = event.data;

    if (success) {
      console.log("로그인 성공, 토큰 저장 시작");
      const { accessToken, refreshToken } = success;

      const accessTokenExpirationTime =
        Common.getNewAccessTokenExpiresIn(accessToken);
      const keynumber = Common.getNewUserKeyNumber(accessToken);
      const nickname = Common.getNewNickname(accessToken);
      const profile = success.profileUrl;

      Common.setKeyNumber(keynumber);
      Common.setAccessToken(accessToken);
      Common.setAccessTokenExpiresIn(accessTokenExpirationTime);
      Common.setNickname(nickname);
      Common.setProfile(profile);

      console.log("토큰 저장 완료");

      setTimeout(() => {
        console.log("메인 페이지 이동 시작");
        window.location.href = "/";
      }, 500);
    } else if (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    }

    window.removeEventListener("message", handleMessage);
  };

  window.addEventListener("message", handleMessage);
};

export const useNaverCallback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code) {
      const fetchAccessToken = async () => {
        try {
          console.log("네이버 인증 코드:", code);
          const response = await AxiosApi.getAccessTokenFromNaver(code, state);
          console.log("네이버 인증 응답:", response.data);

          if (response.data.grantType === "Bearer") {
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;
            const nickname = JwtDecoding.getFieldFromToken(
              accessToken,
              "nickname"
            );
            const profile = response.data.profileUrl;

            console.log("네이버 로그인 성공:", nickname);

            if (window.opener) {
              console.log("부모 창으로 메시지 전송 중...");
              window.opener.postMessage(
                {
                  success: {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    profileUrl: profile,
                    nickname: nickname,
                  },
                },
                "http://localhost:3000"
              );
              console.log("부모 창으로 메시지 전송 완료");
            } else {
              console.error("window.opener가 존재하지 않습니다.");
            }
          }
        } catch (err) {
          console.error("네이버 인증 실패:", err);
          if (window.opener) {
            console.log("부모 창으로 인증 실패 메시지 전송");
            window.opener.postMessage(
              { error: "네이버 인증 실패" },
              "http://localhost:3000"
            );
          }
        } finally {
          console.log("팝업 창 닫기");
          window.close();
        }
      };

      fetchAccessToken();
    } else {
      console.error("인증 코드가 없습니다.");
      if (window.opener) {
        console.log("부모 창으로 인증 코드 없음 메시지 전송");
        window.opener.postMessage(
          { error: "인증 코드 없음" },
          "http://localhost:3000"
        );
      }
      window.close();
    }
  }, []);
};
