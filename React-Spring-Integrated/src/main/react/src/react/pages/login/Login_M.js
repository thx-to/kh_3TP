import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google"; // GoogleOAuthProvider 추가

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
  InputArea,
  ButtonArea,
} from "../../styles/login/Login_M";

import AxiosApi from "../../../api/AxiosApi";
import { setLoginData, setError } from "../../../redux/slice/authSlice";
import { setLoginCondition } from "../../../redux/slice/loginSlice";
import JwtDecoding from "../../../api/JwtDecode";
import Common from "../../../util/Common";

const Login_M = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

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

  const initializeKakao = () => {
    console.log("카카오 SDK 초기화 시작");
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("ccd0061668dbb55d02bf897bc1dea392");
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
      initializeKakao();
    }

    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const kakaoLoginUrl =
      "https://kauth.kakao.com/oauth/authorize?client_id=ccd0061668dbb55d02bf897bc1dea392&redirect_uri=http://localhost:3000/login/oauth2/code/kakao&response_type=code";

    window.open(
      kakaoLoginUrl,
      "KakaoLogin",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  const handleKakaoLoginCallback = async (code) => {
    try {
      console.log("카카오 로그인 콜백 처리 시작, 코드:", code);
      const response = await AxiosApi.kakaoLogin(code); // 백엔드로 인가 코드 전송
      console.log("카카오 로그인 성공:", response);
      navigate("/"); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
      alert("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    console.log("카카오 SDK 로딩 확인");
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
      handleKakaoLoginCallback(code);
    }

    return () => clearInterval(checkKakaoSDK);
  }, []);

  return (
    <GoogleOAuthProvider clientId="159300514752-4da56n3as35i523kr5resdcqaba8e7t4.apps.googleusercontent.com">
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
            <InputArea>
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
                  {/* 아이디 저장 관련 로직 아직 미구현 */}
                  {/* <InputExtraItemCheckBox
                  type="checkbox"
                  id="autoid"
                  checked={isCheckedAutoId}
                  onChange={handleCheckAutoIdBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemLeftP>아이디 저장</InputExtraItemLeftP> */}
                  <InputExtraItemCheckBox
                    type="checkbox"
                    id="autologin"
                    checked={isCheckedAutoLogin}
                    onChange={handleCheckAutoLoginBox}
                  ></InputExtraItemCheckBox>
                  {/* 자동 로그인 관련 로직 아직 미구현 */}
                  <InputExtraItemLeftP>자동 로그인</InputExtraItemLeftP>
                </InputExtraItem1>
                <InputExtraItem2></InputExtraItem2>
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
            </InputArea>
            <ButtonArea>
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
            </ButtonArea>
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
              <ThirdLoginItem icon="/images/sns/naver.png">
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
    </GoogleOAuthProvider>
  );
};
export default Login_M;
