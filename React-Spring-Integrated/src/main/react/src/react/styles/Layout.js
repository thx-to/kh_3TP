import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div.attrs({
  id: "header",
})`
  width: 100%;
  height: 100px;
  @media (max-width: 768px) {
    height: 65px;
  }
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const ScrollToTop = styled.div.attrs({
  id: "scrolltotop",
})`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: center;
  background-image: url("/images/icon/totop.png");
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  @media (max-width: 768px) {
    right: 20px; /* 버튼 위치를 왼쪽으로 약간 이동 */
    bottom: 20px; /* 버튼 위치를 아래로 약간 이동 */
  }
`;
