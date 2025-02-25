import { useEffect, useState } from "react";
import {
  CenterContainerEach,
  CenterContainerTitle,
  CenterContentsContainer,
  AlertTitle,
  AlertText,
  CenterAlertContentsEach1,
  CenterAlertContentsEach2,
  CenterAlertContentsInner,
} from "../../../styles/mypage/MyPage";
import AlertSwtich from "./AlertSwitch";

const AccountManager_Alert = () => {
  // alert상태 localstorage에 저장
  const getStoredState = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  };
  const [commentAlert, setCommentAlert] = useState(() =>
    getStoredState("commentAlert", false)
  );
  const [marketingAlert, setMarketingAlert] = useState(() =>
    getStoredState("marketingAlert", false)
  );
  useEffect(() => {
    localStorage.setItem("commentAlert", JSON.stringify(commentAlert));
  }, [commentAlert]);
  useEffect(() => {
    localStorage.setItem("marketingAlert", JSON.stringify(marketingAlert));
  }, [marketingAlert]);

  const handleCommentAlert = (event) => {
    setCommentAlert(event.target.checked); // ✅ event에서 checked 값 가져오기
    alert(
      `댓글 알림이 ${
        event.target.checked ? "설정되었습니다" : "해제되었습니다"
      }.`
    );
  };

  const handleMarketingAlert = (event) => {
    setMarketingAlert(event.target.checked);
    alert(
      `마케팅 알림이 ${
        event.target.checked ? "설정되었습니다" : "해제되었습니다"
      }.`
    );
  };

  return (
    <>
      <CenterContainerEach>
        <CenterContainerTitle>이메일 알림 설정</CenterContainerTitle>
        <CenterContentsContainer>
          <CenterAlertContentsEach1>
            <AlertTitle>댓글 알림</AlertTitle>
            <CenterAlertContentsInner>
              <AlertText>
                내 질문에 댓글이 등록되면 알림을 받겠습니다.
              </AlertText>
              <AlertSwtich
                onChange={handleCommentAlert}
                checked={commentAlert}
              />
            </CenterAlertContentsInner>
          </CenterAlertContentsEach1>
          <CenterAlertContentsEach2>
            <AlertTitle>마케팅 활용 동의 및 광고 수신 동의</AlertTitle>
            <CenterAlertContentsInner>
              <AlertText>
                강의 오픈, 신규 테스트 등록, 각종 이벤트, 회원 혜택 등 코디터
                마케팅 알림을 받겠습니다.
              </AlertText>
              <AlertSwtich
                onChange={handleMarketingAlert}
                checked={marketingAlert}
              />
            </CenterAlertContentsInner>
          </CenterAlertContentsEach2>
        </CenterContentsContainer>
      </CenterContainerEach>
    </>
  );
};

export default AccountManager_Alert;
