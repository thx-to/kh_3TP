import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  InputDiv,
  Input,
  SignIn,
  LinkDiv,
  SignUp,
  ToFindPw,
  BodyContainer,
  FindIdButton,
  ValidEmailMessage,
  FindIdOutput,
  CheckedIcon,
  CheckedText,
  OutputText,
} from "../../styles/login/FindId";

import AxiosApi from "../../../api/AxiosApi";
import { setLoginData, setError } from "../../../redux/slice/authSlice";
import Common from "../../../util/Common";
import FindId_M from "./FindId_M";

const FindId = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 로그인 중 상태 관리
  const [userId, setUserId] = useState(""); // 가입일 추가해야함
  const [isUserIdAvailable, setIsUserIdAvailable] = useState(false); // 아이디 찾기 상태 관련
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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

  function emailAvailable(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  }
  // 공통 공란 여부 검사 (공란 시 -> true)
  function isBlank(input) {
    return input.trim() === "";
  }

  async function confirmemail(email) {
    try {
      const response = await AxiosApi.findid(email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setEmailMessage("등록된 이메일이 없습니다.");
      setIsEmail(false);
      return null;
    }
  }

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    const currentValue = e.target.value;
    if (emailAvailable(currentValue)) {
      setEmailMessage("");
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const onBlurEmail = (e) => {
    const currentValue = inputEmail;
    if (isBlank(currentValue)) {
      setEmailMessage("아이디를 찾기 위해서는 이메일이 필요합니다.");
      setIsEmail(false);
      return;
    }
    if (!emailAvailable(currentValue)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
      return;
    } else {
      setIsEmail(true);
    }
  };

  const onClickFindId = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsLoading(true);
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const emailExist = await confirmemail(currentValue);
      console.log(emailExist);
      console.log(emailExist.userId);
      if (emailExist) {
        setIsUserIdAvailable(true);
        setUserId(emailExist.userId);
      } else {
        setEmailMessage("등록된 이메일이 없습니다.");
        setIsEmail(false);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);

  return (
    <>
      {isMobile ? (
        <FindId_M />
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
              <FloatingTitle isUserIdAvailable={isUserIdAvailable}>
                {!isUserIdAvailable ? "아이디 찾기" : ""}
              </FloatingTitle>
              <InputDiv isUserIdAvailable={isUserIdAvailable}>
                {!isUserIdAvailable ? (
                  <Input
                    autoComplete="off"
                    placeholder="등록한 이메일 주소 입력"
                    icon="/images/icon/mail.png"
                    value={inputEmail}
                    isEmail={isEmail}
                    onChange={(e) => onChangeEmail(e)}
                    onBlur={(e) => onBlurEmail(e)}
                  ></Input>
                ) : (
                  <FindIdOutput isUserIdAvailable={isUserIdAvailable}>
                    <CheckedIcon />
                    <CheckedText>
                      회원님의 아이디는
                      <br />
                      <OutputText>{userId}</OutputText> 입니다.
                    </CheckedText>
                  </FindIdOutput>
                  // 소셜 연동 로그인한 회원의 ID 찾기 같은 경우에는 로직이 달라져야함
                  // 로컬 회원과 소셜 연동 회원 구분하는 로직 필요
                )}

                {isEmail && !isUserIdAvailable && (
                  <FindIdButton
                    isEmail={isEmail}
                    onClick={(e) => onClickFindId(e)}
                  >
                    아이디 확인
                  </FindIdButton>
                )}
              </InputDiv>
              <ValidEmailMessage isEmail={isEmail}>
                {emailMessage}
              </ValidEmailMessage>
              <SignIn>
                <StyledLink to="/login"></StyledLink>로그인 페이지 이동
              </SignIn>
              <LinkDiv>
                <SignUp>
                  <StyledLink to="/signup"></StyledLink>
                  회원가입
                </SignUp>
                <ToFindPw>
                  <StyledLink to="/findpw"></StyledLink>
                  비밀번호 재설정
                </ToFindPw>
              </LinkDiv>
            </FloatingContainer>
            <NoticeContainer>
              <Notice>
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
    </>
  );
};
export default FindId;
