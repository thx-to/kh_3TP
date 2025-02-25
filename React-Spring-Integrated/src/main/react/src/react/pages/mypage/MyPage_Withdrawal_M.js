import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import {
  Wrap,
  TopBoxWide,
  TopBox,
  TopBoxText,
  TopBoxArrow,
  Container,
  LeftContainer,
  CenterContainer,
  CenterContainerEach,
  CenterContainerTitle,
  CenterContentsContainer,
  ContentsHeadline,
  ContentsText,
  CheckBoxGroup,
  ContentsCheckText,
  WithdrawalButton,
  ContentsImage,
  WithdrawnContainer,
  WithdrawnImage,
  WithdrawnHeadline,
  WithdrawnText,
  BackButton,
} from "../../styles/mypage/MyPage_Withdrawal_M";

import LeftTopProfile from "./Components/LeftTopProfile";
import LeftMenus from "./Components/LeftMenus";
import ScrollToTopButton from "../ScrollToTopButton";
import { useEffect, useState } from "react";
import { MobileEachTitle } from "../../styles/mypage/MyPage_M";

const MyPage_Withdrawal_M = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { mainContentRef } = useOutletContext();
  const [isWithdrawn, setIsWithdrawn] = useState(false);

  // 페이지 진입 시 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef?.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [mainContentRef]);

  const handleMyPage = () => {
    navigate("/mypage");
  };

  const handleRefresh = () => {
    navigate("/mypage/withdrawal");
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleWithdrawal = () => {
    const result = window.confirm("정말로 탈퇴하시겠습니까?");
    if (result) {
      setIsWithdrawn(true); // 탈퇴 완료 상태 변경
    } else {
      alert("탈퇴가 취소되었습니다.");
    }
  };

  return (
    <>
      <Wrap>
        {isWithdrawn ? ( // 탈퇴 완료 상태일 경우 다른 메시지 표시
          <>
            <WithdrawnContainer>
              <WithdrawnImage />
              <WithdrawnHeadline>회원 탈퇴 완료</WithdrawnHeadline>
              <WithdrawnText>
                회원 탈퇴가 완료되었습니다. <br />
                그동안 코디터 서비스를 이용해 주셔서 감사합니다.
              </WithdrawnText>
              <BackButton onClick={() => navigate("/")}>메인으로</BackButton>
            </WithdrawnContainer>
          </>
        ) : (
          <>
            <TopBoxWide>
              <TopBox>
                <TopBoxText onClick={() => handleMyPage()}>my page</TopBoxText>
                <TopBoxArrow>{`>`}</TopBoxArrow>
                <TopBoxText onClick={() => handleRefresh()}>
                  회원 탈퇴
                </TopBoxText>
              </TopBox>
            </TopBoxWide>
            <Container>
              <MobileEachTitle>회원 탈퇴</MobileEachTitle>
              <CenterContentsContainer>
                <ContentsHeadline>
                  회원 탈퇴 전, 다음 내용을 꼭 확인해주세요.
                </ContentsHeadline>
                <ContentsText>
                  · 고객 정보 및 개인형 서비스 이용 기록은 개인정보 처리방침에
                  따라 삭제됩니다.
                  <br />
                  · 회원 탈퇴 후에는 회원님의 개인정보를 복원할 수 없으며, 해당
                  아이디는 영구 삭제되어 재가입이 불가합니다.
                  <br />· 회원 탈퇴 후에도 작성하신 게시물은 삭제되지 않으니,
                  한번 더 확인하시기 바랍니다.
                </ContentsText>
                <CheckBoxGroup>
                  <Checkbox
                    color="default"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <ContentsCheckText>
                    안내 사항을 모두 확인하였으며, 이에 동의합니다.
                  </ContentsCheckText>
                </CheckBoxGroup>
                <WithdrawalButton
                  disabled={!isChecked}
                  onClick={handleWithdrawal}
                >
                  코디터 회원 탈퇴
                </WithdrawalButton>
              </CenterContentsContainer>
            </Container>
            <ScrollToTopButton />
          </>
        )}
      </Wrap>
    </>
  );
};

export default MyPage_Withdrawal_M;
