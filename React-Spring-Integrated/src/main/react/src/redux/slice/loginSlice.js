import {createSlice} from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    saveuserid: false,
    userid: "",
    autologin: false,
  },
  reducers: {
    setLoginCondition: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setSaveUserId: (state, action) => {
      state.saveuserid = action.payload;
    },
    setUserId: (state, action) => {
      state.userid = action.payload;
    },
    setAutoLogin: (state, action) => {
      state.autologin = action.payload;
    },
    logoutCondition: (state) => {
      state.autologin = false;
    },
  },
});

export const {
  setLoginCondition,
  setSaveUserId,
  setUserId,
  setAutoLogin,
  logoutCondition,
} = loginSlice.actions;

export default loginSlice.reducer;
