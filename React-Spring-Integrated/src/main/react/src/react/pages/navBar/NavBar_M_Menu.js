import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  MenuContainer,
  MenuLeftActive,
  MenuLeftContainer,
  MenuLeftInctive,
  MenuLeftItem,
  MenuLeftItems,
  MenuLeftLogin,
  MenuLeftLoginLink,
  MenuRightColumn,
  MenuRightColumnContents,
  MenuRightColumnTitle,
  MenuRightContainer,
  MenuRightContentsWrap,
  MenuRightLink,
  MenuWrapper,
} from "../../styles/navBar/NavBar_M_Menu";

import { logoutAuth } from "../../../redux/slice/authSlice";
import { logoutCondition } from "../../../redux/slice/loginSlice";
import { menus } from "../../../util/mobilemenu/MobileMenu";

const NavBar_M_Menu = ({ closeMenu }) => {
  const [activeMenu, setActiveMenu] = useState("about");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeMenuData = menus.find((menu) => menu.id === activeMenu);
  const nickname = useSelector((state) => state.auth.nickname);
  const [isUser, setIsUser] = useState(null);

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
    closeMenu();
  };

  const handleLogin = () => {
    navigate("/login");
    closeMenu();
  };

  const handleLogout = () => {
    dispatch(logoutAuth());
    dispatch(logoutCondition());
    closeMenu();
    navigate("/");
  };

  useEffect(() => {
    setIsUser(nickname);
  }, [nickname]);

  return (
    <MenuWrapper>
      <MenuContainer>
        <MenuLeftContainer>
          {menus
            .filter((menu) => menu.id !== "mypage" || isUser)
            .map((menu) => (
              <MenuLeftItems
                key={menu.id}
                as={menu.id === activeMenu ? MenuLeftActive : MenuLeftInctive}
                onClick={() => setActiveMenu(menu.id)}
              >
                {menu.label}
              </MenuLeftItems>
            ))}
          <MenuLeftLogin>
            {isUser !== "" ? (
              <MenuLeftLoginLink onClick={() => handleLogout()}>
                logout
              </MenuLeftLoginLink>
            ) : (
              <MenuLeftLoginLink onClick={() => handleLogin()}>
                login
              </MenuLeftLoginLink>
            )}
          </MenuLeftLogin>
        </MenuLeftContainer>
        <MenuRightContainer>
          <MenuRightContentsWrap>
            {activeMenuData?.columns?.map((column, idx) => (
              <MenuRightColumn key={idx}>
                <MenuRightColumnTitle
                  onClick={() =>
                    column.title.link && handleNavigation(column.title.link)
                  }
                  style={{
                    cursor: column.title.link ? "pointer" : "default",
                  }}
                >
                  {column.title.text}
                </MenuRightColumnTitle>

                {column.contents.map((content, idx) => (
                  <MenuRightColumnContents key={idx}>
                    <MenuRightLink
                      onClick={() => handleNavigation(content.link)}
                      style={{ cursor: "pointer" }}
                    >
                      {content.text}
                    </MenuRightLink>
                  </MenuRightColumnContents>
                ))}
              </MenuRightColumn>
            ))}
          </MenuRightContentsWrap>
        </MenuRightContainer>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default NavBar_M_Menu;
