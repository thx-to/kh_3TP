// Refresh Token 받아오는 로직 구현해야함
import axios from "axios";
import Common from "../util/Common";

const AxiosInstance = axios.create({
  baseURL: Common.SPRING_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 필요시 쿠키 전송 활성화
});

// 요청 인터셉터 추가
AxiosInstance.interceptors.request.use(
  async (config) => {
    // Access Token을 가져와서 Authorization 헤더에 추가
    const accessToken = Common.getAccessToken(); // Access Token
    const expirationTime = Common.getAccessTokenExpiresIn(); // 만료 시간
    if (accessToken && expirationTime) {
      const currentTime = Math.floor(new Date().getTime() / 1000); // 자리수 차이로 인한 에러...
      if (currentTime > expirationTime) {
        console.log("Access Token 만료");
        Common.clearAccessToken();
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
AxiosInstance.interceptors.response.use(
  (response) => {
    return response; // 응답 성공 시 그대로 반환
  },
  async (error) => {
    const originalRequest = error.config; // 실패한 요청
    // 401 Unauthorized 에러가 발생했을 때
    if (
      error.response &&
      error.response.status === 401 && // 401 한정
      !originalRequest._retry // 재시도 방지
    ) {
      originalRequest._retry = true;
      try {
        // Refresh Token을 사용하여 새로운 Access Token을 발급 받음
        const newAccessToken = await Common.refreshAccessToken();
        if (newAccessToken) {
          // 새로운 Access Token을 헤더에 설정
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // 원래의 요청을 새로운 Access Token으로 재요청
          return AxiosInstance.request(originalRequest);
        }
      } catch (refreshError) {
        // Refresh Token이 실패하면 로그인 페이지로 리다이렉트하거나 로그아웃 처리
        console.error("Refresh Token 실패:", refreshError);
        // 예시로 로그인 페이지로 리다이렉트
        // window.location.href = "/login";
        // refreshToken 만료 -> 재로그인 관련 알림 필요

        if (originalRequest.url.includes("/code-challenge/submit")) {
          alert("로그인이 만료되었습니다. 로그인 후 다시 시도해주세요");
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error); // 그 외 에러는 그대로 반환
  }
);

export default AxiosInstance;
