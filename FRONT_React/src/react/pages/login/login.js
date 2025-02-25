import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google"; // GoogleOAuthProvider 추가
import GoogleLogin from "./Googlelogin";
import { handleNaverLoginClick, useNaverCallback } from "./Naverlogin";

import {
  Wrap,
  TopBarContainer,
  TopBar,
  LogoContainer,
  Logo,
  StyledLink,
  FloatingContainer,
  NoticeContainer,
  Notice,
  NoticeLink,
  FloatingTitle,
  Input,
  InputExtra,
  SignIn,
  SignUp,
  ThirdLogin,
  ThirdLoginItem,
  InputExtraItemCheckBox,
  InputExtraItemLeftP,
  InputExtraItemRightP,
  BodyContainer,
  InputExtraItem1,
  InputExtraItem2,
  InputExtraItem3,
} from "../../styles/login/login";

import AxiosApi from "../../../api/AxiosApi";
import { setLoginData, setError } from "../../../redux/slice/authSlice";
import { setLoginCondition } from "../../../redux/slice/loginSlice";
import JwtDecoding from "../../../api/JwtDecode";
import Common from "../../../util/Common";
import Login_M from "./Login_M";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 초기 화면 크기 체크
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize); // 화면 크기 변화에 따른 상태 업데이트
    handleResize(); // 컴포넌트 마운트 시 초기 상태 설정
    return () => {
      window.removeEventListener("resize", handleResize); // 클린업
    };
  }, []);

  const closeMadal = () => {
    console.log("closeMadal 호출됨");
    setModalOpen(false);
  };

  const confirmModal = () => {
    console.log("Confirm 버튼이 눌러졌습니다.");
    closeMadal();
  };

  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 로그인 중 상태 관리
  const [rsp, setRsp] = useState(null); // rsp 상태 추가
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isCheckedAutoId, setIsCheckedAutoId] = useState(false);
  const [isCheckedAutoLogin, setIsCheckedAutoLogin] = useState(false);

  const issaveuserid = useSelector((state) => state.login.saveuserid);
  const userid = useSelector((state) => state.login.userid);

  useEffect(() => {
    if (issaveuserid) {
      setIsCheckedAutoId(issaveuserid);
      setInputUserId(userid ?? ""); // NULL-safe ??
      setIsId(true);
    } else {
      setIsCheckedAutoId(false);
      setInputUserId("");
      setIsId(false);
    }
  }, []);

  const handleInputChange = (e, setState, setValidState) => {
    // console.log(`handleInputChange 호출: ${e.target.value}`);
    setState(e.target.value);
    setValidState(e.target.value.length >= 5);
  };

  const handleCheckAutoIdBox = (e) => {
    setIsCheckedAutoId(e.target.checked);
  };

  const handleCheckAutoLoginBox = (e) => {
    console.log(isCheckedAutoLogin);
    setIsCheckedAutoLogin(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit 호출됨");

    if (isSubmitting) {
      console.log("로그인 중인 상태로 중복 요청 방지");
      return;
    }

    setIsSubmitting(true); // 로그인 요청 시작
    console.log("로그인 요청 시작");

    try {
      const response = await AxiosApi.login(inputUserId, inputPw); // 로그인 API 호출
      console.log("로그인 응답:", response.data);
      setRsp(response); // 응답 데이터를 상태에 저장

      if (response.data.grantType === "Bearer") {
        const nickname = Common.getNewNickname(response.data.accessToken);
        const keynumber = Common.getNewUserKeyNumber(response.data.accessToken);
        const accesstokenexpiresin = Common.getNewAccessTokenExpiresIn(
          response.data.accessToken
        );
        const profile = response.data.profileUrl;
        console.log("액세스 토큰: ", response.data.accessToken);

        dispatch(
          setLoginData({
            keynumber: keynumber,
            nickname: nickname,
            accesstoken: response.data.accessToken,
            accesstokenexpiresin: accesstokenexpiresin,
            profile: profile,
          })
        );
        dispatch(
          setLoginCondition({
            saveuserid: isCheckedAutoId,
            userid: inputUserId,
            autologin: isCheckedAutoLogin,
          })
        );

        navigate("/"); // 로그인 후 홈 페이지로 이동
      }
    } catch (err) {
      console.error("로그인 실패: ", err);
      dispatch(setError(err.rsp?.data?.message || "Login Failed"));
    } finally {
      setIsSubmitting(false); // 로그인 요청 끝
    }
  };

  // useEffect에서 rsp 상태를 감지하여 처리
  useEffect(() => {
    if (rsp && rsp.data.grantType === "Bearer") {
      navigate("/"); // 필요한 경우 navigate만 유지
    }
  }, [rsp]);

  ////////////// GoogleLogin 구글 로그인 메소드 //////////////
  const { handleGoogleLoginClick } = GoogleLogin({
    setModalOpen,
    setModalContent,
  });

  ///////////////// 카카오 로그인 구현 시작 부분 ////////////////
  const initializeKakao = () => {
    console.log("카카오 SDK 초기화 시작");
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("");
      console.log("카카오 SDK 초기화 완료");
    } else {
      console.error("카카오 SDK 로드 실패 또는 이미 초기화됨");
    }
  };

  const handleKakaoLoginClick = () => {
    console.log("카카오 로그인 클릭");

    if (!window.Kakao) {
      console.error("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    if (!window.Kakao.isInitialized()) {
      console.log("카카오 SDK 초기화 필요");
      initializeKakao();
    } else {
      console.log("카카오 SDK 이미 초기화됨");
    }

    // 현재 액세스 토큰이 있는지 확인
    const accessToken = window.Kakao.Auth.getAccessToken();
    if (accessToken) {
      console.log("기존 카카오 액세스 토큰 존재:", accessToken);
      // 유효한 토큰이 있을 경우, 로그아웃 실행 후 로그인
      window.Kakao.Auth.logout(() => {
        console.log("카카오 세션이 종료되었습니다.");
        proceedWithKakaoLogin();
      });
    } else {
      console.log("카카오 액세스 토큰 없음, 바로 로그인 진행");
      proceedWithKakaoLogin();
    }
  };

  // 로그인 URL 생성 및 팝업 실행
  const proceedWithKakaoLogin = () => {
    const kakaoLoginUrl =
      "https://kauth.kakao.com/oauth/authorize?client_id=b671c94481a96fb5b006c43e6969d883&redirect_uri=http://localhost:3000/login/oauth2/code/kakao&response_type=code&force_login=true";

    console.log(`카카오 로그인 URL: ${kakaoLoginUrl}`);

    // 기존: 팝업 방식
    // const kakaoLoginWindow = window.open(kakaoLoginUrl, "KakaoLogin", `width=${width},height=${height},left=${left},top=${top}`);

    // 변경: 현재 창에서 바로 카카오 로그인으로 이동
    window.location.href = kakaoLoginUrl;
  };

  const handleKakaoLoginCallback = async (code) => {
    console.log("카카오 로그인 콜백 처리 시작, 받은 코드:", code);
    try {
      const response = await AxiosApi.kakaoLogin(code); // 백엔드로 인가 코드 전송
      console.log("카카오 로그인 성공:", response.data);

      const data = response.data;
      if (data.grantType === "Bearer") {
        dispatch(
          setLoginData({
            nickname: JwtDecoding.getFieldFromToken(
              data.accessToken,
              "nickname"
            ),
            accesstoken: data.accessToken,
            accesstokenexpiresin: data.accessTokenExpiresIn,
            refreshtoken: data.refreshToken,
            refreshtokenexpiresin: data.refreshTokenExpiresIn,
          })
        );
        navigate("/"); // 로그인 성공 시 메인 페이지로 이동
      } else {
        setModalOpen(true);
        setModalContent("카카오 로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
      setModalOpen(true);
      setModalContent("카카오 로그인 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    console.log("카카오 SDK 로딩 확인 시작");
    const checkKakaoSDK = setInterval(() => {
      if (window.Kakao) {
        clearInterval(checkKakaoSDK);
        console.log("카카오 SDK 로드 완료");
        initializeKakao();
      } else {
        console.log("카카오 SDK 로딩 중...");
      }
    }, 500);

    // 리다이렉트 후 URL에서 인가 코드 추출 및 처리
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      handleKakaoLoginCallback(code); // 인가 코드로 로그인 콜백 처리
    } else {
      console.log("인가 코드가 없어 로그인 콜백 처리 생략");
    }

    return () => clearInterval(checkKakaoSDK);
  }, []);

  // const initializeKakao = () => {
  //   console.log("카카오 SDK 초기화 시작");
  //   if (window.Kakao && !window.Kakao.isInitialized()) {
  //     window.Kakao.init("ccd0061668dbb55d02bf897bc1dea392");
  //     console.log("카카오 SDK 초기화 완료");
  //   } else {
  //     console.error("카카오 SDK 로드 실패 또는 이미 초기화됨");
  //   }
  // };

  // const handleKakaoLoginClick = () => {
  //   console.log("카카오 로그인 클릭");
  //   if (!window.Kakao) {
  //     console.error("카카오 SDK가 로드되지 않았습니다.");
  //     return;
  //   }

  //   if (!window.Kakao.isInitialized()) {
  //     initializeKakao();
  //   }

  //   const width = 600;
  //   const height = 600;
  //   const left = (window.innerWidth - width) / 2;
  //   const top = (window.innerHeight - height) / 2;

  //   const kakaoLoginUrl =
  //     "https://kauth.kakao.com/oauth/authorize?client_id=ccd0061668dbb55d02bf897bc1dea392&redirect_uri=http://localhost:3000/login/oauth2/code/kakao&response_type=code";

  //   window.open(
  //     kakaoLoginUrl,
  //     "KakaoLogin",
  //     `width=${width},height=${height},left=${left},top=${top}`
  //   );
  // };

  // const handleKakaoLoginCallback = async (code) => {
  //   try {
  //     console.log("카카오 로그인 콜백 처리 시작, 코드:", code);
  //     const response = await AxiosApi.kakaoLogin(code); // 백엔드로 인가 코드 전송
  //     console.log("카카오 로그인 성공:", response);
  //     navigate("/"); // 로그인 성공 시 메인 페이지로 이동
  //   } catch (error) {
  //     console.error("카카오 로그인 실패:", error);
  //     alert("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
  //   }
  // };

  // useEffect(() => {
  //   console.log("카카오 SDK 로딩 확인");
  //   const checkKakaoSDK = setInterval(() => {
  //     if (window.Kakao) {
  //       clearInterval(checkKakaoSDK);
  //       console.log("카카오 SDK 로드 완료");
  //       initializeKakao();
  //     } else {
  //       console.log("카카오 SDK 로딩 중...");
  //     }
  //   }, 500);

  //   // 리다이렉트 후 URL에서 인가 코드 추출 및 처리
  //   const params = new URLSearchParams(window.location.search);
  //   const code = params.get("code");

  //   if (code) {
  //     handleKakaoLoginCallback(code);
  //   }

  //   return () => clearInterval(checkKakaoSDK);
  // }, []);

  // 네이버 콜백 처리
  useNaverCallback();

  return (
    <GoogleOAuthProvider clientId="159300514752-4da56n3as35i523kr5resdcqaba8e7t4.apps.googleusercontent.com">
      {isMobile ? (
        <Login_M />
      ) : (
        <Wrap>
          <TopBarContainer>
            <TopBar>
              <LogoContainer>
                <Logo>
                  <StyledLink to="/"></StyledLink>
                </Logo>
              </LogoContainer>
            </TopBar>
          </TopBarContainer>
          <BodyContainer>
            <FloatingContainer>
              <FloatingTitle>로그인</FloatingTitle>
              <Input
                autoComplete="off"
                placeholder="아이디 입력"
                icon="/images/icon/user.png"
                value={inputUserId}
                onChange={(e) => handleInputChange(e, setInputUserId, setIsId)}
              ></Input>
              <Input
                type="password"
                placeholder="비밀번호 입력"
                icon="/images/icon/pwd.png"
                value={inputPw}
                onChange={(e) => handleInputChange(e, setInputPw, setIsPw)}
              ></Input>
              <InputExtra>
                <InputExtraItem1>
                  <InputExtraItemCheckBox
                    type="checkbox"
                    id="autoid"
                    checked={isCheckedAutoId}
                    onChange={handleCheckAutoIdBox}
                  ></InputExtraItemCheckBox>
                  {/* 아이디 저장 관련 로직 아직 미구현 */}
                  <InputExtraItemLeftP>아이디 저장</InputExtraItemLeftP>
                </InputExtraItem1>
                <InputExtraItem2>
                  <InputExtraItemCheckBox
                    type="checkbox"
                    id="autologin"
                    checked={isCheckedAutoLogin}
                    onChange={handleCheckAutoLoginBox}
                  ></InputExtraItemCheckBox>
                  {/* 아이디 저장 관련 로직 아직 미구현 */}
                  <InputExtraItemLeftP>자동 로그인</InputExtraItemLeftP>
                </InputExtraItem2>
                <InputExtraItem3>
                  <InputExtraItemRightP>
                    <StyledLink to="/findid"></StyledLink>
                    아이디 찾기
                  </InputExtraItemRightP>
                  <InputExtraItemRightP>
                    <StyledLink to="/findpw"></StyledLink>
                    비밀번호 재설정
                  </InputExtraItemRightP>
                </InputExtraItem3>
              </InputExtra>
              {isId && isPw ? (
                <SignIn enabled onClick={handleSubmit}>
                  로그인하기
                </SignIn>
              ) : (
                <SignIn disabled>로그인하기</SignIn>
              )}
              <SignUp>
                <StyledLink to="/signup"></StyledLink>
                회원가입
              </SignUp>
              <ThirdLogin>
                <ThirdLoginItem
                  icon="/images/sns/gmail.png"
                  onClick={handleGoogleLoginClick}
                ></ThirdLoginItem>
                <ThirdLoginItem
                  icon="/images/sns/kakao.png"
                  onClick={handleKakaoLoginClick} // 카카오 로그인 클릭 핸들러 적용
                >
                  <StyledLink to="#"></StyledLink>
                </ThirdLoginItem>
                <ThirdLoginItem
                  icon="/images/sns/naver.png"
                  onClick={handleNaverLoginClick} // 네이버 로그인 클릭 핸들러
                >
                  <StyledLink to="#"></StyledLink>
                </ThirdLoginItem>
                <ThirdLoginItem icon="/images/sns/facebook.png">
                  <StyledLink to="#"></StyledLink>
                </ThirdLoginItem>
              </ThirdLogin>
            </FloatingContainer>
            <NoticeContainer>
              <Notice>
                {/* 공지 및 안내 페이지 링크 연결 미구현 */}
                <NoticeLink to="../legal/Terms"></NoticeLink>
                서비스 이용약관
              </Notice>
              <Notice>
                <NoticeLink to="../legal/Privacy"></NoticeLink>
                개인정보 처리방침
              </Notice>
            </NoticeContainer>
          </BodyContainer>
        </Wrap>
      )}
    </GoogleOAuthProvider>
  );
};
export default Login;
