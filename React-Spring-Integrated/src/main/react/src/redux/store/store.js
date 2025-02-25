import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import localStorage from "redux-persist/lib/storage";
import authReducer from "../slice/authSlice";
import loginReducer from "../slice/loginSlice";
// LocalStorage에 저장

// "redux-persist/lib/storage" -> 브라우저 껏다 켜도 state 계속 저장 및 유지
// "redux-persist/lib/storage/session" -> 브라우저 껐다 켤 시 초기화

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("디스패치된 액션 :", action.type);
  console.log("현재 상태 : ", store.getState());
  const result = next(action);
  console.log("디스패치 후 상태 : ", store.getState());
  return result;
};

const persistAuthConfig = {
  key: "auth",
  storage: sessionStorage,
};
const persistLoginConfig = {
  key: "login",
  storage: localStorage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedLoginReducer = persistReducer(persistLoginConfig, loginReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    login: persistedLoginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
