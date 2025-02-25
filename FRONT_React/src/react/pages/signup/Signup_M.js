import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

import {
  Wrap,
  TopBar,
  LogoContainer,
  Logo,
  StyledLink,
  FloatingContainer,
  FloatingTitle,
  InputIndex,
  InputId,
  InputPwDiv,
  InputPw,
  InputPwDivToggle,
  InputEmailDiv,
  InputEmail,
  InputEmailButton,
  InputSecurityDiv,
  InputSecurity,
  InputSecurityButton,
  InputNickName,
  InputExtraContainer,
  InputExtra,
  InputExtraItemCheckBox,
  InputExtraItemP,
  SignUp,
  NoticeContainer,
  Notice,
  NoticeLink,
  ValidIdMessage,
  ValidPwMessage,
  ValidEmailMessage,
  TopBarContainer,
  BodyContainer,
  InputEach,
  InputPwConfirm,
  ValidNameMessage,
  InputExtraAll,
  ExtraLink,
  FloatingInnerContainer,
  InputEmailButtonDiv,
  InputEmailButtonTimer,
  InputEmailButtonRefresh,
  ValidSecurityMessage,
  InputArea,
  ButtonArea,
} from "../../styles/signup/Signup_M";

import AxiosApi from "../../../api/AxiosApi";
import { setError } from "../../../redux/slice/authSlice";

const Signup_M = () => {
  const navigate = useNavigate();
  // 키보드 입력
  const [inputUserId, setInputUserId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSecurity, setInputSecurity] = useState("");
  // 오류 메시지
  const [userIdMessage, setUserIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [securityMessage, setSecurityMessage] = useState("");
  // 유효성 검사
  const [isUserId, setIsUserId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isSecurity, setIsSecurity] = useState(false);
  // 약관동의
  const [isCheckedAll, setIsCheckedAll] = useState("");
  const [isCheckedTerms, setIsCheckedTerms] = useState("");
  const [isCheckedUses, setIsCheckedUses] = useState("");
  const [isChecked14, setIsChecked14] = useState("");
  const [isCheckedMarketing, setIsCheckedMarketing] = useState("");
  // 인증번호 입력 가능 / 불가능 여부
  const [isSecurityAvailable, setIsSecurityAvailable] = useState(false); // 현재만 true 시작 실제로는 false 시작
  // 이메일 수정 가능 / 불가능 여부
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  // 타이머 설정
  const [timeLeft, setTimeLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const timeLeftRef = useRef(180);
  // 로딩 설정
  const [isLoading, setIsLoading] = useState(false); // 이메일 otp 번호 전송 과정 로딩
  const [isLoadingSignUp, setIsLoadingSignUp] = useState(false); // 회원가입 로딩

  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

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
  };

  const stopTimer = () => {
    timeLeftRef.current = 0;
    setTimeLeft(0);
    setEmailMessage("요청시간이 지났습니다. 다시 시도해주세요.");
    setIsRunning(false);
    setIsSecurityAvailable(false);
  };

  // 전체 동의 누를 시 모든 체크박스 선택
  const handleCheckAllBox = (e) => {
    setIsCheckedAll(e.target.checked);
    setIsCheckedTerms(e.target.checked);
    setIsCheckedUses(e.target.checked);
    setIsChecked14(e.target.checked);
    setIsCheckedMarketing(e.target.checked);
  };
  // 전체 동의 누르지 않고 체크 박스 전부 체크/해제 시 전체 동의 란의 상태 결정
  useEffect(() => {
    if (
      !isCheckedTerms &&
      !isCheckedUses &&
      !isChecked14 &&
      !isCheckedMarketing
    ) {
      setIsCheckedAll("");
    } else if (
      isCheckedTerms &&
      isCheckedUses &&
      isChecked14 &&
      isCheckedMarketing
    ) {
      setIsCheckedAll("checked");
    }
  }, [isCheckedTerms, isCheckedUses, isChecked14, isCheckedMarketing]);

  const handleCheckTermsBox = (e) => {
    setIsCheckedTerms(e.target.checked);
  };

  const handleCheckUsesBox = (e) => {
    setIsCheckedUses(e.target.checked);
  };

  const handleCheck14Box = (e) => {
    setIsChecked14(e.target.checked);
  };

  const handleCheckMarketingBox = (e) => {
    setIsCheckedMarketing(e.target.checked);
  };

  // 유효성 검사 나누기
  // 1. ID 유효성 검사
  // 특수 문자열 포함 여부 (포함 시 -> true)
  function isIdContainsSpecialCharacter(input) {
    const specialCharRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/;
    return specialCharRegex.test(input);
  }
  function isIdContainsKorean(input) {
    const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    return koreanRegex.test(input);
  }
  function idAvailable(input) {
    const idRegex = /^[a-zA-Z0-9]{6,16}$/;
    return idRegex.test(input);
  }
  // ID input 문자열 길이 검사 (6보다 작을 시 -> true)
  function isIdTooShort(input) {
    return input.length < 6;
  }
  // ID input 문자열 길이 검사 (16보다 클 시 -> true)
  function isIdTooLong(input) {
    return input.length > 16;
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
  function emailAvailable(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  }
  // 6. 닉네임 유효성 검사
  // Name input 문자열 길이 검사 (3보다 작을 시 -> true)
  function isNameTooShort(input) {
    return input.length < 3;
  }
  // Name input 문자열 길이 검사 (3보다 작을 시 -> true)
  function isNameTooLong(input) {
    return input.length > 16;
  }
  // 특수 문자열 포함 여부 (포함 시 -> true)
  function isNameContainsSpecialCharacter(input) {
    const specialCharRegex = /[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣._-]/;
    return specialCharRegex.test(input);
  }
  function nameAvailable(input) {
    const nameRegex = /^[a-zA-Zㄱ-ㅎ가-힣0-9._-]{3,16}$/;
    return nameRegex.test(input);
  }

  // 공통 공란 여부 검사 (공란 시 -> true)
  function isBlank(input) {
    return input.trim() === "";
  }

  const onChangeUserId = (e) => {
    setInputUserId(e.target.value);
    const currentValue = e.target.value;
    if (isIdContainsSpecialCharacter(currentValue)) {
      setUserIdMessage("아이디는 공백을 포함한 특수문자가 포함될 수 없습니다.");
      setIsUserId(false);
      return;
    }
    if (isIdContainsKorean(currentValue)) {
      setUserIdMessage("아이디는 한글이 포함될 수 없습니다.");
      setIsUserId(false);
    }
    if (isIdTooLong(currentValue)) {
      setUserIdMessage("아이디는 16자 이하 6자 이상이어야 합니다.");
      setIsUserId(false);
      return;
    }
    if (idAvailable(currentValue)) {
      setUserIdMessage("");
      setIsUserId(true);
    } else {
      setIsUserId(false);
    }
  };
  async function validate(key, data) {
    try {
      const response = await AxiosApi.validate(key, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return "다시 시도해주세요";
    }
  }
  async function verifyemail(email) {
    try {
      const response = await AxiosApi.verifyemail(email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return null;
    }
  }
  async function verifyotp(otpnumber, email) {
    try {
      const response = await AxiosApi.verifyotp(otpnumber, email);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  const onBlurUserId = async () => {
    const currentValue = inputUserId;
    if (isBlank(currentValue)) {
      setUserIdMessage("아이디는 필수 입력 정보입니다.");
      setIsUserId(false);
      return;
    }
    if (isIdTooShort(currentValue)) {
      setUserIdMessage("아이디는 6자 이상 16자 이하이어야 합니다.");
      setIsUserId(false);
      return;
    }
    try {
      const isIdAvailable = await validate("userId", currentValue);
      if (isIdAvailable && idAvailable(currentValue)) {
        setUserIdMessage("");
        setIsUserId(true);
      } else {
        setUserIdMessage("사용할 수 없는 아이디입니다.");
        setIsUserId(false);
      }
    } catch (error) {
      setUserIdMessage("ID 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      setIsUserId(false);
    }
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
      setEmailMessage("이메일 인증이 필요합니다.");
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
  const onClickEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsRunning(false);
    setIsLoading(true);
    setIsSubmitting(true);
    const currentValue = inputEmail;
    try {
      const emailAvailable = await validate("email", currentValue);
      console.log(emailAvailable);
      if (!emailAvailable) {
        setEmailMessage("중복 이메일입니다.");
        setIsEmail(false);
      } else {
        const res = await verifyemail(currentValue);
        console.log(res);
        if (res) {
          setSecurityMessage("");
          setIsSecurityAvailable(true);
          startTimer();
        }
      }
    } catch (error) {
      dispatch(setError(error.response?.data?.message || "Verify Failed"));
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const onChangeSecurity = (e) => {
    setInputSecurity(e.target.value);
  };

  const onClickSecurity = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const currentValue = inputSecurity;
    console.log(currentValue);
    try {
      const otpAvailable = await verifyotp(currentValue, inputEmail);
      if (!otpAvailable) {
        setSecurityMessage("인증번호가 일치하지 않습니다.");
        setIsSecurity(false);
      } else {
        setSecurityMessage("");
        setIsSecurity(true);
        setIsSecurityAvailable(false);
        setIsEmailAvailable(false);
        setIsRunning(false);
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
  const onBlurPw = () => {
    const currentValue = inputPw;
    if (isBlank(currentValue)) {
      setPwMessage("비밀번호는 필수 입력 정보입니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsCharacter(currentValue)) {
      setPwMessage("비밀번호는 1개 이상의 영문자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsNumber(currentValue)) {
      setPwMessage("비밀번호는 1개 이상의 숫자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (!isPwContainsSpecialCharacter(currentValue)) {
      setPwMessage("비밀번호는 1개 이상의 특수문자를 포함해야 합니다.");
      setIsPw(false);
      return;
    }
    if (isPwTooLong(currentValue)) {
      setPwMessage("비밀번호는 20자 이하 8자 이상이어야 합니다.");
      setIsPw(false);
      return;
    }
    if (isPwTooShort(currentValue)) {
      setPwMessage("비밀번호는 8자 이상 20자 이하이어야 합니다.");
      setIsPw(false);
      return;
    } else {
      setPwMessage("");
      setIsPw(true);
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

  const onChangeName = (e) => {
    setInputName(e.target.value);
    const currentValue = e.target.value;
    if (isNameContainsSpecialCharacter(currentValue)) {
      setNameMessage("특수문자 기호는 (.),(-),(_) 만 사용 가능합니다.");
      setIsName(false);
    }
    if (isNameTooLong(currentValue)) {
      setNameMessage("닉네임은 16자 이하 3자 이상이어야 합니다.");
      setIsName(false);
    }
    if (nameAvailable(currentValue)) {
      setNameMessage("");
      setIsName(true);
    } else {
      setIsName(false);
    }
  };
  const onBlurName = async () => {
    const currentValue = inputName;
    if (isBlank(currentValue)) {
      setNameMessage("닉네임은 필수 입력 정보입니다.");
      setIsName(false);
      return;
    }
    if (isNameTooShort(currentValue)) {
      setNameMessage("닉네임은 3자 이상 16자 이하이어야 합니다.");
      setIsName(false);
      return;
    }
    try {
      const isNameAvailable = await validate("nickname", currentValue);
      if (isNameAvailable && nameAvailable(currentValue)) {
        setNameMessage("");
        setIsName(true);
      } else {
        setNameMessage("사용할 수 없는 닉네임입니다.");
        setIsName(false);
      }
    } catch (error) {
      setNameMessage("닉네임 확인 중 오류가 발생했습니다. 다시 시도해주세요.");
      setIsName(false);
    }
  };
  const onClickSignUp = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsLoadingSignUp(true);
    setIsSubmitting(true);
    try {
      const memberReg = await AxiosApi.join(
        inputUserId.trim().replace(/\s+/g, ""),
        inputEmail.trim().replace(/\s+/g, ""),
        inputPw.trim().replace(/\s+/g, ""),
        inputName.trim(),
        inputSecurity.trim()
      );
      console.log(memberReg.data);
      if (memberReg.data) {
        alert("회원 가입에 성공했습니다.");
        navigate("/");
      } else {
        alert("회원 가입에 실패했습니다.");
      }
    } catch (e) {
      alert("서버가 응답하지 않습니다.");
    } finally {
      setIsLoadingSignUp(false);
      setIsSubmitting(false);
    }
  };

  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const [isVisibleConPwd, setIsVisibleConPwd] = useState(false);

  const toggleVisiblePwd = () => {
    setIsVisiblePwd(!isVisiblePwd);
  };
  const toggleVisibleConPwd = () => {
    setIsVisibleConPwd(!isVisibleConPwd);
  };

  return (
    <>
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
            <FloatingTitle>회원가입</FloatingTitle>
            <InputArea>
              <InputEach>
                <InputIndex>아이디</InputIndex>
                <InputId
                  autoComplete="off"
                  type="userId"
                  placeholder="아이디 입력"
                  value={inputUserId}
                  onChange={onChangeUserId}
                  onBlur={onBlurUserId}
                  isUserId={isUserId}
                ></InputId>
                <ValidIdMessage>{userIdMessage}</ValidIdMessage>
              </InputEach>
              <InputEach>
                <InputIndex>비밀번호</InputIndex>
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
              <InputEach>
                <InputIndex>이메일</InputIndex>
                <InputEmailDiv isSecurity={isSecurity}>
                  <InputEmail
                    autoComplete="off"
                    type="email"
                    placeholder="이메일 주소 입력"
                    value={inputEmail}
                    onChange={onChangeEmail}
                    onBlur={onBlurEmail}
                    isEmailAvailable={isEmailAvailable}
                    isEmail={isEmail}
                    isSecurityAvailable={isSecurityAvailable}
                    readOnly={isSecurity}
                  ></InputEmail>
                  {isEmail &&
                  isEmailAvailable &&
                  !isSecurity &&
                  !isSecurityAvailable &&
                  !isLoading ? (
                    <InputEmailButton
                      enabled
                      onClick={(e) => {
                        onClickEmail(e);
                      }}
                    >
                      인증번호받기
                    </InputEmailButton> // 인증번호 받기 버튼
                  ) : isEmail && isEmailAvailable && !isRunning && isLoading ? (
                    <InputEmailButtonDiv>
                      <RotatingLines
                        visible={true}
                        height="15"
                        width="15"
                        strokeColor="black"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </InputEmailButtonDiv>
                  ) : (
                    isEmail &&
                    isEmailAvailable &&
                    isSecurityAvailable &&
                    isRunning &&
                    !isLoading && (
                      <InputEmailButtonDiv isEmail={isEmail}>
                        <InputEmailButtonTimer>
                          {Math.floor(timeLeft / 60)}:
                          {timeLeft % 60 < 10
                            ? `0${timeLeft % 60}`
                            : timeLeft % 60}
                        </InputEmailButtonTimer>
                        <InputEmailButtonRefresh
                          onClick={(e) => {
                            onClickEmail(e);
                          }}
                        ></InputEmailButtonRefresh>
                      </InputEmailButtonDiv> // 타이머 및 새로고침 버튼
                    )
                  )}
                </InputEmailDiv>
                <ValidEmailMessage>{emailMessage}</ValidEmailMessage>
              </InputEach>
              {isSecurityAvailable && (
                <InputEach>
                  <InputSecurityDiv>
                    <InputSecurity
                      autoComplete="off"
                      type="text"
                      placeholder="인증번호 입력"
                      value={inputSecurity}
                      onChange={onChangeSecurity}
                    ></InputSecurity>
                    <InputSecurityButton
                      isSecurity={isSecurity}
                      onClick={(e) => onClickSecurity(e)}
                    >
                      이메일 인증
                    </InputSecurityButton>
                  </InputSecurityDiv>
                  <ValidSecurityMessage>{securityMessage}</ValidSecurityMessage>
                </InputEach>
              )}
              <InputEach>
                <InputIndex>닉네임</InputIndex>
                <InputNickName
                  autoComplete="off"
                  type="text"
                  placeholder="닉네임 입력"
                  value={inputName}
                  onChange={onChangeName}
                  onBlur={onBlurName}
                  isName={isName}
                ></InputNickName>
                <ValidNameMessage>{nameMessage}</ValidNameMessage>
              </InputEach>
            </InputArea>
            <InputExtraContainer>
              <InputExtraAll>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeall"
                  checked={isCheckedAll}
                  onChange={handleCheckAllBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>전체동의</InputExtraItemP>
              </InputExtraAll>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeterms"
                  checked={isCheckedTerms}
                  onChange={handleCheckTermsBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>
                  <ExtraLink to="../legal/Terms" target="_blank">
                    이용약관
                  </ExtraLink>{" "}
                  동의
                </InputExtraItemP>
              </InputExtra>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreeuses"
                  checked={isCheckedUses}
                  onChange={handleCheckUsesBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>
                  <ExtraLink to="../legal/Privacy" target="_blank">
                    개인정보 수집 및 이용
                  </ExtraLink>{" "}
                  동의
                </InputExtraItemP>
              </InputExtra>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agree14"
                  checked={isChecked14}
                  onChange={handleCheck14Box}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>
                  <font color="black">
                    <b>[선택]</b>
                  </font>
                  &nbsp;만 14세 이상입니다.
                </InputExtraItemP>
              </InputExtra>
              <InputExtra>
                <InputExtraItemCheckBox
                  type="checkbox"
                  id="agreemarketing"
                  checked={isCheckedMarketing}
                  onChange={handleCheckMarketingBox}
                ></InputExtraItemCheckBox>
                <InputExtraItemP>
                  <font color="black">
                    <b>[선택]</b>
                  </font>
                  &nbsp;마케팅 활용 동의 및 광고 수신 동의
                </InputExtraItemP>
              </InputExtra>
            </InputExtraContainer>
            <ButtonArea>
              <InputEach>
                {isUserId &&
                isEmail &&
                isSecurity &&
                isPw &&
                isConPw &&
                isName &&
                isCheckedTerms &&
                isCheckedUses &&
                !isLoadingSignUp ? (
                  <SignUp enabled onClick={onClickSignUp}>
                    회원가입하기
                  </SignUp>
                ) : isUserId &&
                  isEmail &&
                  isSecurity &&
                  isPw &&
                  isConPw &&
                  isName &&
                  isCheckedTerms &&
                  isCheckedUses &&
                  isLoadingSignUp ? (
                  <SignUp disabled>
                    <RotatingLines
                      visible={true}
                      height="15"
                      width="15"
                      strokeColor="black"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </SignUp>
                ) : (
                  <SignUp disabled>회원가입하기</SignUp>
                )}
              </InputEach>
            </ButtonArea>
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
    </>
  );
};
export default Signup_M;
