import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Wrap,
  Container,
  LogoContainer,
  Logo,
  StyledLink,
  MenuContainer,
  MenuTitle,
  MenuBox,
  LoginContainer,
  MenuButton,
  LoginBox,
  LoginLink,
  ProfileImgDiv,
  ProfileImg,
  MyPageButton,
  MyPageMenu,
  MyPageMenuContents,
  StyledNavigate,
  MyPageProfileImg,
} from "../../styles/navBar/NavBar";

import store from "../../../redux/store/store";
import { logoutAuth } from "../../../redux/slice/authSlice";
import { logoutCondition } from "../../../redux/slice/loginSlice";
import AboutBar from "../sideBar/AboutBar";
import StudyBar from "../sideBar/StudyBar";
import CodingTestBar from "../sideBar/CodingTestBar";
import CommunityBar from "../sideBar/CommunityBar";
import MoreBar from "../sideBar/MoreBar";
import CsBar from "../sideBar/CsBar";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    // 사이드 메뉴 바 필요한 Components useState 설정
    // My page는 제외 (Link로 바로 연결 예정)
    isAboutOpen: false,
    isStudyOpen: false,
    isCodingTestOpen: false,
    isCommunityOpen: false,
    isMoreOpen: false,
    isCsOpen: false,
  });
  const [animatingMenus, setAnimatingMenus] = useState({
    isAboutOpenAnimating: false,
    isStudyOpenAnimating: false,
    isCodingTestOpenAnimating: false,
    isCommunityOpenAnimating: false,
    isMoreOpenAnimating: false,
    isCsOpenAnimating: false,
  });

  const paths = {
    pathAbout: "about",
    pathStudy: "study",
    pathCT: "coding test",
    pathCommunity: "community",
    pathMore: "more",
    pathCs: "cs",
    pathMypage: "my page", // 추후 추가할 마이페이지용
  };
  const [isToggleMyPage, setIsToggleMyPage] = useState(false);

  const onClickToggleMyPage = () => {
    setIsToggleMyPage(!isToggleMyPage);
  };

  // 메뉴 열기, 닫기
  const toggleMenu = (menuName) => {
    // menuName (실제로는 isAboutOpen 등)을 받아 state 변환하는 함수
    if (!menuState[menuName]) {
      setMenuState((prev) => ({
        ...prev,
        [menuName]: true,
      }));
      setAnimatingMenus((prev) => ({
        ...prev,
        [`${menuName}Animating`]: true,
      }));
    } else {
      setMenuState((prev) => ({
        ...prev,
        [menuName]: false,
      }));
      setTimeout(() => {
        setAnimatingMenus((prev) => ({
          ...prev,
          [`${menuName}Animating`]: false,
        }));
      }, 300);
    }
  };

  // 메뉴 닫기 (추가적인 상황에서 사용)
  const closeMenu = (menuName) => {
    setMenuState((prev) => ({ ...prev, [menuName]: false }));
    setTimeout(() => {
      setAnimatingMenus((prev) => ({
        ...prev,
        [`${menuName}Animating`]: false,
      }));
    }, 300);
  };

  // 메뉴 닫기 (떨림 방지용 -> Timeout 제거)
  const closeMenuIm = (menuName) => {
    setMenuState((prev) => ({ ...prev, [menuName]: false }));
    setAnimatingMenus((prev) => ({
      ...prev,
      [`${menuName}Animating`]: false,
    }));
  };

  const closeMyPage = () => {
    setIsToggleMyPage(false);
  };

  // 버블링 방지용 함수 (효과는 잘 모르겠음)
  const handleContentClick = (menuName, event) => {
    event.stopPropagation();
    closeMenuIm(menuName);
  };

  const menuRefs = useRef({
    isAboutOpen: null,
    isStudyOpen: null,
    isCodingTestOpen: null,
    isCommunityOpen: null,
    isMoreOpen: null,
    isCsOpen: null,
  });

  const handleEvent = (event) => {
    if (event.type === "mousedown") {
      Object.keys(menuRefs.current).forEach((menuName) => {
        const ref = menuRefs.current[menuName];
        if (ref && !ref.contains(event.target) && menuState[menuName]) {
          closeMenu(menuName);
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, [menuState]);

  const myPageRef = useRef(null);

  useEffect(() => {
    if (!isToggleMyPage) return;

    const handleClickOutside = (event) => {
      setTimeout(() => {
        if (myPageRef.current && !myPageRef.current.contains(event.target)) {
          setIsToggleMyPage(false);
        }
      }, 100);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggleMyPage]);

  const nickname = useSelector((state) => state.auth.nickname);
  const [isUser, setIsUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isUser) {
      return;
    }
    if (nickname) {
      setIsUser(nickname);
    } else {
      setIsUser(null);
    }
    setIsLoading(false);
  }, [nickname]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAuth());
    dispatch(logoutCondition());
    setIsUser(null);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const location = useLocation();

  const handleStudy = () => {
    navigate("/study");
  };
  const handleCodingTest = () => {
    navigate("/codingtest");
  };
  const handleCommunity = () => {
    navigate("/community");
  };
  const handleMyPage = () => {
    navigate("/mypage");
  };

  const profile = useSelector((state) => state.auth.profile);

  return (
    <Wrap>
      <Container>
        <LogoContainer>
          <Logo>
            <StyledLink to="/"></StyledLink>
          </Logo>
        </LogoContainer>
        <MenuContainer>
          {/* 메뉴 컨테이너 -> 선택 메뉴 포함 */}
          <MenuTitle
            ref={(el) => (menuRefs.current["isAboutOpen"] = el)}
            onMouseEnter={() => toggleMenu("isAboutOpen")}
            onMouseLeave={() => toggleMenu("isAboutOpen")}
          >
            <MenuBox isOpen={menuState.isAboutOpen}>
              <MenuButton isOpen={menuState.isAboutOpen}>
                <img src="/images/icon/About.svg" />
              </MenuButton>
            </MenuBox>
            {(menuState.isAboutOpen || animatingMenus.isAboutOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <AboutBar
                isOpen={menuState.isAboutOpen} // isOpen 상태 전달
                closeMenu={(event) => handleContentClick("isAboutOpen", event)} // closeMenu 함수 전달
                path={paths.pathAbout}
              ></AboutBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isStudyOpen"] = el)}
            onMouseEnter={() => toggleMenu("isStudyOpen")}
            onMouseLeave={() => toggleMenu("isStudyOpen")}
            onClick={() => handleStudy()}
          >
            <MenuBox isOpen={menuState.isStudyOpen}>
              <MenuButton isOpen={menuState.isStudyOpen}>
                <img src="/images/icon/Study.svg" />
              </MenuButton>
            </MenuBox>
            {(menuState.isStudyOpen || animatingMenus.isStudyOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <StudyBar
                isOpen={menuState.isStudyOpen} // isOpen 상태 전달
                closeMenu={(event) => handleContentClick("isStudyOpen", event)} // closeMenu 함수 전달
                path={paths.pathStudy}
              ></StudyBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isCodingTestOpen"] = el)}
            onMouseEnter={() => toggleMenu("isCodingTestOpen")}
            onMouseLeave={() => toggleMenu("isCodingTestOpen")}
            onClick={() => handleCodingTest()}
          >
            <MenuBox isOpen={menuState.isCodingTestOpen}>
              <MenuButton isOpen={menuState.isCodingTestOpen}>
                <img src="/images/icon/CodingTest.svg" />
              </MenuButton>
            </MenuBox>
            {(menuState.isCodingTestOpen ||
              animatingMenus.isCodingTestOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <CodingTestBar
                isOpen={menuState.isCodingTestOpen} // isOpen 상태 전달
                closeMenu={(event) =>
                  handleContentClick("isCodingTestOpen", event)
                } // closeMenu 함수 전달
                path={paths.pathCT}
              ></CodingTestBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isCommunityOpen"] = el)}
            onMouseEnter={() => toggleMenu("isCommunityOpen")}
            onMouseLeave={() => toggleMenu("isCommunityOpen")}
            onClick={() => handleCommunity()}
          >
            <MenuBox isOpen={menuState.isCommunityOpen}>
              <MenuButton isOpen={menuState.isCommunityOpen}>
                <img src="/images/icon/Community.svg" />
              </MenuButton>
            </MenuBox>
            {(menuState.isCommunityOpen ||
              animatingMenus.isCommunityOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <CommunityBar
                isOpen={menuState.isCommunityOpen} // isOpen 상태 전달
                closeMenu={(event) =>
                  handleContentClick("isCommunityOpen", event)
                } // closeMenu 함수 전달
                path={paths.pathCommunity}
              ></CommunityBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isMoreOpen"] = el)}
            onMouseEnter={() => toggleMenu("isMoreOpen")}
            onMouseLeave={() => toggleMenu("isMoreOpen")}
          >
            <MenuBox isOpen={menuState.isMoreOpen}>
              <MenuButton isOpen={menuState.isMoreOpen}>
                <img src="/images/icon/More.svg" />
              </MenuButton>
            </MenuBox>
            {(menuState.isMoreOpen || animatingMenus.isMoreOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <MoreBar
                isOpen={menuState.isMoreOpen} // isOpen 상태 전달
                closeMenu={(event) => handleContentClick("isMoreOpen", event)} // closeMenu 함수 전달
                path={paths.pathMore}
              ></MoreBar>
            )}
          </MenuTitle>
          <MenuTitle
            ref={(el) => (menuRefs.current["isCsOpen"] = el)}
            onMouseEnter={() => toggleMenu("isCsOpen")}
            onMouseLeave={() => toggleMenu("isCsOpen")}
          >
            <MenuBox isOpen={menuState.isCsOpen}>
              <MenuButton isOpen={menuState.isCsOpen}>
                <img src="/images/icon/CS.svg" />
              </MenuButton>
            </MenuBox>
            {(menuState.isCsOpen || animatingMenus.isCsOpenAnimating) && ( // isAnimating이 완료되어야지만 AboutBar 제거
              <CsBar
                isOpen={menuState.isCsOpen} // isOpen 상태 전달
                closeMenu={(event) => handleContentClick("isCsOpen", event)} // closeMenu 함수 전달
                path={paths.pathCs}
              ></CsBar>
            )}
          </MenuTitle>
        </MenuContainer>
        <LoginContainer>
          {!isLoading && (
            <LoginBox isUser={isUser}>
              {isUser !== null ? (
                <>
                  <ProfileImgDiv>
                    <ProfileImg
                      isUser={isUser}
                      isProfile={profile}
                    ></ProfileImg>
                  </ProfileImgDiv>
                  <MyPageButton
                    ref={myPageRef}
                    isUser={isUser}
                    onClick={() => onClickToggleMyPage()}
                    // 선 두께 안맞음 수정해야함
                  >
                    <div />
                  </MyPageButton>
                  <MyPageMenu ref={myPageRef} isToggleMyPage={isToggleMyPage}>
                    <MyPageMenuContents
                      isToggleMyPage={isToggleMyPage}
                      onClick={() => {
                        handleMyPage();
                        closeMyPage();
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <MyPageProfileImg isUser={isUser} isProfile={profile} />
                    </MyPageMenuContents>
                    <MyPageMenuContents
                      isToggleMyPage={isToggleMyPage}
                      onClick={() => {
                        handleMyPage();
                        closeMyPage();
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {nickname}
                    </MyPageMenuContents>
                    <MyPageMenuContents isToggleMyPage={isToggleMyPage}>
                      <StyledNavigate
                        onClick={() => {
                          handleMyPage();
                          closeMyPage();
                        }}
                      ></StyledNavigate>
                      my page
                    </MyPageMenuContents>
                    <MyPageMenuContents
                      isToggleMyPage={isToggleMyPage}
                      onClick={() => handleLogout()}
                    >
                      logout
                    </MyPageMenuContents>
                  </MyPageMenu>
                </>
              ) : (
                <LoginLink isUser={isUser} onClick={() => handleLogin()}>
                  login
                </LoginLink>
              )}
            </LoginBox>
          )}
        </LoginContainer>
      </Container>
    </Wrap>
  );
};

export default NavBar;
