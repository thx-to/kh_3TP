import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import {
  Background,
  Footer,
  Header,
  LayoutWrapper,
  MainContent,
} from "../styles/Layout";

import NavBar from "./navBar/NavBar";
import NavBar_M from "./navBar/NavBar_M";
import StyledFooter from "./footer/StyledFooter";

const Layout = () => {
  const mainContentRef = useRef(null); // MainContent 참조
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

  return (
    <>
      <LayoutWrapper>
        <Background>
          <Header>
            {/* <NavBar /> */}
            {isMobile ? <NavBar_M /> : <NavBar />}{" "}
            {/* 화면 크기에 따라 다른 NavBar 렌더링 */}
          </Header>
          <MainContent ref={mainContentRef}>
            <Outlet context={{ mainContentRef, isMobile }} />
            <StyledFooter />
          </MainContent>
        </Background>
      </LayoutWrapper>
    </>
  );
};
export default Layout;
