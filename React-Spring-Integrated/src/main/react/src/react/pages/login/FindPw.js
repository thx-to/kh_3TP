import React, {useEffect, useState, useRef} from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

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
  InputSecurity,
  FindPwButtonDiv,
  FindPwButtonTimer,
  FindPwButtonRefresh,
  ModifyPw,
  BodyContainer,
  FindPwButton,
  SecurityButton,
  ValidEmailMessage,
  ValidSecurityMessage,
  InputEach,
  InputIndex,
  InputPwDiv,
  InputPw,
  InputPwConfirm,
  InputPwDivToggle,
  ValidPwMessage,
} from "../../styles/login/FindPw";

import AxiosApi from "../../../api/AxiosApi";
import FindPw_M from "./FindPw_M";

const FindPw = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputSecurity, setInputSecurity] = useState("");
  const [isSecurity, setIsSecurity] = useState(false);
  const [securityMessage, setSecurityMessage] = useState("");
  const [isSecurityAvailable, setIsSecurityAvailable] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isPwAvailable, setIsPwAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  // 타이머 설정
  const [timeLeft, setTimeLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const timeLeftRef = useRef(180);

  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const [isVisibleConPwd, setIsVisibleConPwd] = useState(false);

  const navigate = useNavigate();

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };
  const toggleVisibleConPwd = () => {
    setIsVisibleConPwd(!isVisibleConPwd);
  };

  function emailAvailable(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  }
  // 공통 공란 여부 검사 (공란 시 -> true)
  function isBlank(input) {
    return input.trim() === "";
  }
  // 2. PW 유효성 검사
  // PW input 문자열 길이 검사 (8보다 작을 시 -> true)
  function isPwTooShort(input) {
    return input.length < 8;
  }
  // PW input 문자열 길이 검사 (20보다 클 시 -> true)
  function isPwTooLong(input) {
    return input.length > 20;
  }
  function pwAvailable(input) {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    return passwordRegex.test(input);
  }
  //  특수 문자열 포함 여부 (포함 시 -> true)
  function isPwContainsSpecialCharacter(input) {
    const specialCharRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]/;
    return specialCharRegex.test(input);
  }
  //  숫자열 포함 여부 (포함 시 -> true)
  function isPwContainsNumber(input) {
    const numberRegex = /\d/;
    return numberRegex.test(input);
  }
  //  문자열 포함 여부 (포함 시 -> true)
  function isPwContainsCharacter(input) {
    const charRegex = /[a-zA-Z]/;
    return charRegex.test(input);
  }

  async function verifyemail(email) {
    try {
      const response = await AxiosApi.findpw(email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setEmailMessage("등록된 이메일이 없습니다.");
      setIsEmail(false);
      return null;
    }
  }

  async function verifysecurity(optnumber, email) {
    try {
      const response = await AxiosApi.verifypwsecurity(optnumber, email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setSecurityMessage("인증번호가 일치하지 않습니다.");
      // 인증 번호 유효시간 등에 대한 에러 처리를 위해서는 구분이 필요함
      setIsSecurity(false);
      return null;
    }
  }

  async function validatenewpw(email, newpassword) {
    try {
      const response = await AxiosApi.validatenewpassword(email, newpassword);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setPwMessage(
        "새 비밀번호 확인 중 오류가 발생했습니다. 다시 시도해주세요."
      );
      setIsPw(false);
      return null;
    }
  }

  async function resetpw(email, newpassword) {
    try {
      const response = await AxiosApi.resetpassword(email, newpassword);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setConPwMessage(
        "비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요."
      );
      return null;
    }
  }

  // 타이머 업데이트 함수 (정확한 1초 단위 실행)
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      console.log("setInterval 실행됨", timeLeftRef.current);
      timeLeftRef.current -= 1;
      setTimeLeft(timeLeftRef.current);
      if (timeLeftRef.current <= 0) {
        clearInterval(interval);
        stopTimer();
        return;
      }
      if (!isEmail) {
        clearInterval(interval);
        resetTimer();
        return;
      }
    }, 1000);

    return () => clearInterval(interval); // 기존 타이머 정리
  }, [isRunning, isEmail]); // 타이머 상태가 변경될 때만 실행

  const startTimer = () => {
    timeLeftRef.current = 180;
    setTimeLeft(180);
    setIsRunning(true);
  };
  const resetTimer = () => {
    timeLeftRef.current = 0;
    setTimeLeft(0);
    setEmailMessage("새로운 이메일을 입력해주세요.");
    setIsRunning(false);
    setIsSecurityAvailable(false);
    setIsLoading(false);
  };

  const stopTimer = () => {
    timeLeftRef.current = 0;
    setTimeLeft(0);
    setEmailMessage("요청시간이 지났습니다. 다시 시도해주세요.");
    setIsRunning(false);
    setIsSecurityAvailable(false);
    setIsLoading(false);
  };

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
  const onBlurEmail = () => {
    const currentValue = inputEmail;
    if (isBlank(currentValue)) {
      setEmailMessage(
        "비밀번호를 재설정하기 위해서는 이메일 인증이 필요합니다."
      );
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

  const onClickFindPw = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsRunning(false);
    setIsLoading(true);
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const emailExist = await verifyemail(currentValue);
      if (emailExist) {
        setEmailMessage("");
        setSecurityMessage("");
        setIsSecurityAvailable(true);
        startTimer();
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

  const onChangeSecurity = (e) => {
    setInputSecurity(e.target.value);
  };

  const onClickVerifySecurity = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const currentValue = inputSecurity;
    console.log(currentValue);
    try {
      const otpAvailable = await verifysecurity(currentValue, inputEmail);
      if (!otpAvailable) {
        setSecurityMessage("인증번호가 일치하지 않습니다.");
        setIsSecurity(false);
      } else {
        setEmailMessage("");
        setSecurityMessage("");
        setIsSecurity(true);
        setIsRunning(false);
        setIsSecurityAvailable(false);
        setIsEmailAvailable(false);
        setIsPwAvailable(true);
      }
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
    const currentValue = e.target.value;
    if (pwAvailable(currentValue)) {
      setPwMessage("");
      setIsPw(true);
    } else {
      setIsPw(false);
    }
  };
  const onBlurPw = async () => {
    const currentValuePw = inputPw;
    const currentValueEmail = inputEmail;
    if (isBlank(currentValuePw)) {
      setPwMessage("비밀번호는 필수 입력 정보입니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsCharacter(currentValuePw)) {
      setPwMessage("비밀번호는 1개 이상의 영문자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsNumber(currentValuePw)) {
      setPwMessage("비밀번호는 1개 이상의 숫자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsSpecialCharacter(currentValuePw)) {
      setPwMessage("비밀번호는 1개 이상의 특수문자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (isPwTooLong(currentValuePw)) {
      setPwMessage("비밀번호는 20자 이하 8자 이상이어야 합니다.");
      setIsPw(false);
      return;
    }
    if (isPwTooShort(currentValuePw)) {
      setPwMessage("비밀번호는 8자 이상 20자 이하이어야 합니다.");
      setIsPw(false);
      return;
    } else {
      setPwMessage("");
      setIsPw(true);
    }
    try {
      const newPwAvailable = await validatenewpw(
        currentValueEmail,
        currentValuePw
      );
      if (newPwAvailable) {
        setPwMessage("");
        setIsPw(true);
      } else {
        setPwMessage("동일한 비밀번호를 사용할 수 없습니다.");
        setIsPw(false);
      }
    } catch (error) {
      setPwMessage(
        "새 비밀번호 확인 중 오류가 발생했습니다. 다시 시도해주세요."
      );
      setIsPw(false);
    }
  };
  const onChangeConPw = (e) => {
    setInputConPw(e.target.value);
    const currentValue = e.target.value;
    if (currentValue === inputPw) {
      setConPwMessage("");
      setIsConPw(true);
    } else {
      setIsConPw(false);
    }
  };
  const onBlurConPw = () => {
    const currentValue = inputConPw;
    if (isBlank(inputPw)) {
      setConPwMessage("비밀번호 입력이 필요합니다.");
      setIsConPw(false);
      return;
    }
    if (isBlank(currentValue)) {
      setConPwMessage("비밀번호 확인이 필요합니다.");
      setIsConPw(false);
      return;
    }
    if (currentValue !== inputPw) {
      setConPwMessage("비밀번호가 일치하지 않습니다.");
      setIsConPw(false);
      return;
    } else {
      setConPwMessage("");
      setIsConPw(true);
    }
  };

  const onClickResetPw = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      const email = inputEmail.trim().replace(/\s+/g, "");
      const newPw = inputPw.trim().replace(/\s+/g, "");
      const resetPassword = await resetpw(email, newPw);
      console.log(resetPassword);
      if (resetPassword) {
        alert("비밀번호 변경에 성공했습니다.");
        navigate("/login");
      } else {
        alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("서버가 응답하지 않습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    // console.log(`Viewport height 설정: ${vh}`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);

  return (
    <>
      {isMobile ? (
        <FindPw_M />
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
              <FloatingTitle>
                {!isSecurityAvailable
                  ? "비밀번호 재설정"
                  : "비밀번호 찾기 결과"}
              </FloatingTitle>
              {isEmailAvailable ? (
                <>
                  <InputDiv isSecurityAvailable={isSecurityAvailable}>
                    <Input
                      autoComplete="off"
                      placeholder="등록한 이메일 주소 입력"
                      icon="/images/icon/mail.png"
                      value={inputEmail}
                      isEmail={isEmail}
                      isEmailAvailable={isEmailAvailable}
                      isLoading={isLoading}
                      onChange={(e) => onChangeEmail(e)}
                      onBlur={(e) => onBlurEmail(e)}
                    ></Input>
                    {isEmail &&
                    isEmailAvailable &&
                    !isSecurity &&
                    !isSecurityAvailable &&
                    !isLoading ? (
                      <FindPwButton
                        isEmail={isEmail}
                        onClick={(e) => onClickFindPw(e)}
                      >
                        인증번호 받기
                      </FindPwButton>
                    ) : isEmail &&
                      isEmailAvailable &&
                      !isRunning &&
                      isLoading ? (
                      <FindPwButtonDiv>
                        <RotatingLines
                          visible={true}
                          height="30"
                          width="30"
                          strokeColor="black"
                          strokeWidth="5"
                          animationDuration="0.75"
                          ariaLabel="rotating-lines-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </FindPwButtonDiv>
                    ) : (
                      isEmail &&
                      isEmailAvailable &&
                      isSecurityAvailable &&
                      isRunning &&
                      !isLoading && (
                        <FindPwButtonDiv>
                          <FindPwButtonTimer>
                            {Math.floor(timeLeft / 60)}:
                            {timeLeft % 60 < 10
                              ? `0${timeLeft % 60}`
                              : timeLeft % 60}
                          </FindPwButtonTimer>
                          <FindPwButtonRefresh
                            onClick={(e) => {
                              onClickFindPw(e);
                            }}
                          ></FindPwButtonRefresh>
                        </FindPwButtonDiv>
                      )
                    )}
                  </InputDiv>
                  <ValidEmailMessage isEmail={isEmail}>
                    {emailMessage}
                  </ValidEmailMessage>
                </>
              ) : (
                <>
                  <InputEach>
                    <InputIndex>비밀번호 변경</InputIndex>
                    <InputPwDiv>
                      <InputPw
                        type={isVisiblePwd ? "text" : "password"}
                        placeholder="영문자, 숫자, 특수문자 포함 8~20자"
                        value={inputPw}
                        onChange={onChangePw}
                        onBlur={() => {
                          onBlurPw();
                          onBlurConPw();
                        }}
                        isPw={isPw}
                      ></InputPw>
                      <InputPwDivToggle
                        isVisible={isVisiblePwd}
                        onClick={() => toggleVisiblePwd()}
                      />
                    </InputPwDiv>
                    <ValidPwMessage>{pwMessage}</ValidPwMessage>
                  </InputEach>
                  <InputEach>
                    <InputPwDiv>
                      <InputPwConfirm
                        type={isVisibleConPwd ? "text" : "password"}
                        placeholder="비밀번호 확인"
                        value={inputConPw}
                        onChange={onChangeConPw}
                        onBlur={() => {
                          onBlurConPw();
                          onBlurPw();
                        }}
                        isConPw={isConPw}
                      ></InputPwConfirm>
                      <InputPwDivToggle
                        isVisible={isVisibleConPwd}
                        onClick={() => toggleVisibleConPwd()}
                      />
                    </InputPwDiv>
                    <ValidPwMessage>{conPwMessage}</ValidPwMessage>
                  </InputEach>
                </>
              )}
              {isSecurityAvailable && (
                <>
                  <InputDiv>
                    <InputSecurity
                      autoComplete="off"
                      placeholder="인증번호 입력"
                      icon="/images/icon/mail.png"
                      onChange={onChangeSecurity}
                    ></InputSecurity>
                    <SecurityButton
                      isSecurity={isSecurity}
                      onClick={(e) => {
                        onClickVerifySecurity(e);
                      }}
                    >
                      이메일 인증
                    </SecurityButton>
                  </InputDiv>
                  <ValidSecurityMessage isSecurity={isSecurity}>
                    {securityMessage}
                  </ValidSecurityMessage>
                </>
              )}
              {isEmail && isSecurity && isPw && isConPw ? (
                <ModifyPw enabled onClick={(e) => onClickResetPw(e)}>
                  비밀번호 재설정하기
                </ModifyPw>
              ) : (
                <ModifyPw disabled>비밀번호 재설정하기</ModifyPw>
              )}
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
export default FindPw;
