import { useEffect, useState } from "react";
import {
  CenterContainerEach,
  CenterContainerTitle,
  CenterContentsContainer,
  AccountEachContainer,
  InputLabel,
  IDInput,
  InputContainer,
  EmailInput,
  SubmitButton,
  PasswordInput,
  Messages,
} from "../../../styles/mypage/MyPage";
import AxiosApi from "../../../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountManager_Account = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(""); // 사용자 아이디
  const [userEmail, setUserEmail] = useState(""); // 사용자 이메일
  const [currentPw, setCurrentPw] = useState(""); // 현재 비밀번호 입력
  const [newPw, setNewPw] = useState(""); // 새로운 비밀번호 입력
  const [message, setMessage] = useState(""); // 메시지 상태 추가
  const [isPwVerified, setIsPwVerified] = useState(false); // 현재 비밀번호 확인 여부
  const nickname = useSelector((state) => state.auth.nickname);

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

  return (
    <>
      <CenterContainerEach>
        <CenterContainerTitle>계정 관리</CenterContainerTitle>
        <CenterContentsContainer>
          <AccountEachContainer>
            <InputLabel>아이디</InputLabel>
            <InputContainer>
              {" "}
              <IDInput disabled value={userId} />
            </InputContainer>
          </AccountEachContainer>

          <AccountEachContainer>
            <InputLabel>이메일</InputLabel>
            <InputContainer>
              <EmailInput disabled value={userEmail} autoComplete="off" />
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
        </CenterContentsContainer>
      </CenterContainerEach>
    </>
  );
};

export default AccountManager_Account;
