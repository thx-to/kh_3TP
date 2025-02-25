import store from "../redux/store/store";
import { setLoginData, clearAccessToken } from "../redux/slice/authSlice"; // Redux 액션 가져오기
import axios from "axios";
import JwtDecoding from "../api/JwtDecode";

const Common = {
  SPRING_DOMAIN: "http://localhost:8111",

  // 저장되어 있는 access token 가져오기
  getAccessToken: () => {
    console.log("accessToken", store.getState().auth);
    const accesstoken = store.getState().auth.accesstoken; // Redux store에서 토큰 가져오기
    return accesstoken;
  },

  // 저장되어 있는 access token 만료시간 가져오기
  getAccessTokenExpiresIn: () => {
    const accesstokenexpiresin = parseInt(
      store.getState().auth.accesstokenexpiresin
    );
    return accesstokenexpiresin;
  },

  // 들어온 토큰 기반 만료 시간 추출하기
  getNewAccessTokenExpiresIn: (token) => {
    // 들어오는 token은 accesstoken
    const newaccesstokenexpiresin = JwtDecoding.getFieldFromToken(token, "exp");
    console.log(JwtDecoding.getFieldFromToken(token, "exp"));
    return newaccesstokenexpiresin;
  },

  // 들어온 토큰 기반 키값 추출하기
  getNewUserKeyNumber: (token) => {
    // 들어오는 token은 accesstoken
    const newKeynumber = JwtDecoding.getFieldFromToken(token, "sub");
    return newKeynumber;
  },
  getNickName: () => {
    const nickname = store.getState().auth.nickname;
    return nickname;
  },
  // 들어온 토큰 기반 닉네임 추출하기
  getNewNickname: (token) => {
    // 들어오는 token은 accesstoken
    const newNickname = JwtDecoding.getFieldFromToken(token, "nickname");
    return newNickname;
  },

  setAccessToken: (token) => {
    store.dispatch(setLoginData({ accesstoken: token })); // Redux store에 토큰 저장
  }, // accesstoken 데이터는 (response.data.accessToken) -> response는 지정한 변수명

  setAccessTokenExpiresIn: (expirationtime) => {
    store.dispatch(setLoginData({ accesstokenexpiresin: expirationtime }));
  }, // accesstoken expiretime 데이터는 getNewAccessTokenExpiresIn 함수를 거친 데이터

  setKeyNumber: (keynumber) => {
    store.dispatch(setLoginData({ keynumber: keynumber }));
  },

  setNickname: (nickname) => {
    store.dispatch(setLoginData({ nickname: nickname }));
  },

  // 추가
  setRegistered_at: (registered_at) => {
    store.dispatch(setLoginData({ registered_at: registered_at }));
  },

  setProfile: (profile) => {
    store.dispatch(setLoginData({ profile: profile }));
  },

  clearAccessToken: () => {
    store.dispatch(clearAccessToken());
  },

  // 쿠키 방식 이전
  //   refreshAccessToken: async () => {
  //     const refreshToken = Common.getRefreshToken();
  //     if (!refreshToken) {
  //       throw new Error(600);
  //     }
  //     const response = await axios.post(`${Common.SPRING_DOMAIN}/auth/reissue`, {
  //       refreshToken,
  //     });
  //     const accessToken = response.data.accessToken;
  //     const accessTokenExpirationTime = Common.getNewAccessTokenExpiresIn(
  //       response.data.accessToken
  //     );

  //     Common.setAccessToken(accessToken);
  //     Common.setAccessTokenExpiresIn(accessTokenExpirationTime);

  //     return accessToken;
  //   },
  // };
  refreshAccessToken: async () => {
    try {
      const response = await axios.post(
        `${Common.SPRING_DOMAIN}/auth/reissue`,
        {},
        {
          withCredentials: true,
        }
      );
      const accessToken = response.data.accessToken;
      const accessTokenExpirationTime = Common.getNewAccessTokenExpiresIn(
        response.data.accessToken
      );
      const profile = response.data.profileUrl;
      Common.setAccessToken(accessToken);
      Common.setAccessTokenExpiresIn(accessTokenExpirationTime);
      Common.setProfile(profile);
      return accessToken;
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      throw new Error(600);
    }
  },
};

export default Common;
