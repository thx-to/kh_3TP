import { useEffect, useState } from "react";
import {
  CenterContentsContainer,
  AccountEachContainer,
  InputLabel,
  IDInput,
  InputContainer,
  EmailInput,
  SubmitButton,
  PasswordInput,
  ProfileImage,
  UserNickName,
  UserEmail,
  AccountManagerContainer,
  ModifyButton,
  ButtonContainer,
  CancelButton,
  NicknameInput,
  Messages,
} from "../../../styles/mypage/MyPage_M";
import AxiosApi from "../../../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountManager_ProfileIMG_M from "./AccountManager_ProfileIMG_M";
import { setLoginData } from "../../../../redux/slice/authSlice";
import { NicknameErrorText } from "../../../styles/mypage/MyPage_ProfileIMG";

const AccountManager_Account_M = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const profile = useSelector((state) => state.auth.profile);
  const nickname = useSelector((state) => state.auth.nickname);
  const [userSignupDate, setUserSignupDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState(nickname);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [nicknameEditing, setNicknameEditing] = useState(false);
  const [currentPw, setCurrentPw] = useState(""); // 현재 비밀번호 입력
  const [newPw, setNewPw] = useState(""); // 새로운 비밀번호 입력
  const [isPwVerified, setIsPwVerified] = useState(false); // 현재 비밀번호 확인 여부
  const [message, setMessage] = useState(""); // 메시지 상태 추가

  useEffect(() => {
    const mypage = async () => {
      try {
        const response = await AxiosApi.getmyprofile();
        console.log(response);
        setUserSignupDate(response.registeredAt);
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };
    mypage();
  }, []);

  useEffect(() => {
    const mypage = async () => {
      try {
        const response = await AxiosApi.getmyprofile();
        console.log(response);
        setUserId(response.userId);
        setUserEmail(response.email);
      } catch (error) {
        navigate("/login", { replace: true });
      }
    };
    mypage();
  }, []);

  // 현재 비밀번호 확인 요청 (checkCurrentPassword API 호출)
  const handlePasswordCheck = async () => {
    try {
      const isMatch = await AxiosApi.checkCurrentPassword(currentPw || ""); // null이든 빈 문자열이든 그대로 요청 전송
      if (isMatch) {
        setIsPwVerified(true);
        setMessage("비밀번호가 확인되었습니다. 새 비밀번호를 입력하세요.");
      } else {
        setIsPwVerified(false);
        setMessage("현재 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      setMessage("비밀번호 확인 중 오류가 발생했습니다.");
    }
  };

  // 비밀번호 변경 요청 (changePassword API 호출)
  const handlePasswordChange = async () => {
    if (!isPwVerified) {
      setMessage("현재 비밀번호 확인 후 진행하세요.");
      return;
    }

    if (!newPw) {
      setMessage("새 비밀번호를 입력하세요.");
      return;
    }

    try {
      const success = await AxiosApi.changePassword(currentPw, newPw);
      if (success) {
        setMessage("비밀번호가 성공적으로 변경되었습니다.");
        setCurrentPw("");
        setNewPw("");
        setIsPwVerified(false);
      } else {
        setMessage("비밀번호 변경에 실패했습니다.");
      }
    } catch (error) {
      setMessage("비밀번호 변경 중 오류가 발생했습니다.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // 닉네임 중복 검사 실행
  useEffect(() => {
    if (newNickname && newNickname !== nickname) {
      setLoading(true);
      const checkNickname = async () => {
        const available = await AxiosApi.checkNicknameAvailability(newNickname);
        setIsNicknameAvailable(available);
        setLoading(false);
      };
      checkNickname();
    }
  }, [newNickname]);

  // 닉네임 변경 요청
  const handleNicknameChange = async () => {
    if (!isNicknameAvailable) {
      alert("이미 사용 중인 닉네임입니다.");
      return;
    }

    try {
      const success = await AxiosApi.changeNickname(newNickname);
      if (success) {
        dispatch(setLoginData({ nickname: newNickname })); // Redux 상태 업데이트
        setIsEditing(false);
        alert("닉네임 변경에 성공했습니다.");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      alert("닉네임 변경 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <AccountManagerContainer>
        {!isEditing ? (
          // 프로필 관리 컨테이너 (기본 화면)
          <>
            <AccountManager_ProfileIMG_M />
            <UserNickName>{nickname}</UserNickName>
            <UserEmail>{userEmail}</UserEmail>
            <ModifyButton onClick={() => setIsEditing(true)}>
              정보 수정하기
            </ModifyButton>
          </>
        ) : (
          <>
            <AccountEachContainer>
              <InputLabel>아이디</InputLabel>
              <IDInput disabled value={userId} />
            </AccountEachContainer>
            <AccountEachContainer>
              <InputLabel>닉네임</InputLabel>
              <InputContainer onClick={() => setNicknameEditing(true)}>
                {isEditing ? (
                  <>
                    <NicknameInput
                      type="text"
                      value={newNickname}
                      onChange={(e) => setNewNickname(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleNicknameChange()
                      } // 엔터 키 입력 시 변경
                    />
                    <SubmitButton
                      onClick={handleNicknameChange}
                      disabled={!isNicknameAvailable || loading}
                    >
                      변경
                    </SubmitButton>{" "}
                  </>
                ) : (
                  <>
                    <NicknameInput value={nickname} />
                  </>
                )}
              </InputContainer>
              {!isNicknameAvailable && (
                <NicknameErrorText>
                  이미 사용 중인 닉네임입니다.
                </NicknameErrorText>
              )}
            </AccountEachContainer>
            <AccountEachContainer>
              <InputLabel>이메일</InputLabel>
              <InputContainer>
                <EmailInput value={userEmail} autoComplete="off" />
                <SubmitButton>변경</SubmitButton>
              </InputContainer>
            </AccountEachContainer>
            <AccountEachContainer>
              <InputLabel>비밀번호</InputLabel>
              <InputContainer>
                <PasswordInput
                  placeholder="현재 비밀번호 입력"
                  type="password"
                  value={currentPw}
                  onChange={(e) => setCurrentPw(e.target.value)}
                />
                <SubmitButton onClick={handlePasswordCheck}>확인</SubmitButton>{" "}
              </InputContainer>

              <InputContainer>
                <PasswordInput
                  placeholder="새로운 비밀번호 입력"
                  type="password"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  disabled={!isPwVerified} // 확인되지 않으면 비활성화
                />
                <SubmitButton
                  onClick={handlePasswordChange}
                  disabled={!isPwVerified}
                >
                  변경
                </SubmitButton>
              </InputContainer>

              {message && (
                <Messages
                  style={{
                    color: isPwVerified ? "green" : "red",
                    marginTop: "-10px",
                  }}
                >
                  {message}
                </Messages>
              )}
            </AccountEachContainer>
            <ButtonContainer>
              <CancelButton onClick={() => handleCancel()}>
                뒤로가기
              </CancelButton>
            </ButtonContainer>
          </>
        )}
      </AccountManagerContainer>
    </>
  );
};

export default AccountManager_Account_M;
