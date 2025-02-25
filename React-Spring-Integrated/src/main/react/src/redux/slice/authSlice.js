import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 생성
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    keynumber: "",
    nickname: "",
    accesstoken: "",
    accesstokenexpiresin: "",
    authorities: "",
    profile: null,
    error: "",
  },
  reducers: {
    setLoginData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logoutAuth: (state) => {
      state.keynumber = "";
      state.nickname = "";
      state.accesstoken = "";
      state.accesstokenexpiresin = "";
      state.authorities = "";
      state.profile = "";
      state.error = "";
    },
    clearAccessToken: (state) => {
      state.accesstoken = "";
      state.accesstokenexpiresin = "";
    },
  },
});

export const { setLoginData, setError, logoutAuth, clearAccessToken } =
  authSlice.actions;

export default authSlice.reducer;
