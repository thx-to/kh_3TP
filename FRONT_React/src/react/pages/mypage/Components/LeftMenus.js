import { useLocation, useNavigate } from "react-router-dom";
import {
  LeftContainerEach,
  LeftContainerTitle,
  LeftContainerContentsInactive,
  LeftContainerContentsActive,
  LeftContainerContentsBox,
  LeftMenuLink,
} from "../../../styles/mypage/MyPage";
import { useEffect, useState } from "react";

const LeftMenus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // URL path에서 현재 메뉴 ID 추출
    const currentPath = location.pathname.split("/")[2] || "accountmanager";
    setActiveMenu(currentPath);
  }, [location.pathname]);

  const handleNavigation = (menuId, navigatepath) => {
    setActiveMenu(menuId);
    navigate(navigatepath);
  };

  const menus = [
    {
      id: "accountmanager",
      sort: "profile",
      label: "계정 관리",
      link: "/mypage/accountmanager",
    },
    {
      id: "userfeedfeed",
      sort: "profile",
      label: "내 소개",
      link: "/mypage/userfeed",
    },
    {
      id: "withdrawal",
      sort: "profile",
      label: "️회원 탈퇴",
      link: "/mypage/withdrawal",
    },
    {
      id: "study",
      sort: "dashboard",
      label: "study",
      link: "/mypage/study",
    },
    {
      id: "codingtest",
      sort: "dashboard",
      label: "coding test",
      link: "/mypage/codingtest",
    },
    {
      id: "community",
      sort: "post",
      label: "community",
      link: "/mypage/community",
    },
    {
      id: "report",
      sort: "post",
      label: "악성 사용자 신고",
      link: "/mypage/report",
    },
    {
      id: "question",
      sort: "post",
      label: "건의사항",
      link: "/mypage/suggestion",
    },
  ];

  return (
    <>
      {["profile", "dashboard", "post"].map((category) => (
        <LeftContainerEach key={category}>
          <LeftContainerTitle>{category}</LeftContainerTitle>
          <LeftContainerContentsBox>
            {menus
              .filter((menu) => menu.sort === category)
              .map((menu) => {
                const isActive = activeMenu === menu.id;
                const BoardComponent = isActive
                  ? LeftContainerContentsActive
                  : LeftContainerContentsInactive;

                return (
                  <BoardComponent key={menu.id}>
                    <LeftMenuLink
                      onClick={() => handleNavigation(menu.id, menu.link)}
                    >
                      {menu.label}
                    </LeftMenuLink>
                  </BoardComponent>
                );
              })}
          </LeftContainerContentsBox>
        </LeftContainerEach>
      ))}
    </>
  );
};

export default LeftMenus;
