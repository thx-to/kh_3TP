import { useLocation, useNavigate } from "react-router-dom";
import {
  MenuListTitle,
  MenuListActiveContents,
  MenuListInactiveContents,
  MenuListContainer,
  MenuListLink,
} from "../../../styles/more/Roadmap";
import { useEffect, useState } from "react";

const LeftMenus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  const menus = [
    {
      id: "frontend",
      label: "✨ 프론트엔드",
      link: "/roadmap/frontend",
    },
    {
      id: "backend",
      label: "🛠️ 백엔드",
      link: "/roadmap/backend",
    },
    {
      id: "devops",
      label: "🪢 DevOps",
      link: "/roadmap/devops",
    },
    {
      id: "fullstack",
      label: "📚 풀스택",
      link: "/roadmap/fullstack",
    },
  ];

  useEffect(() => {
    const currentMenu = menus.find((menu) => menu.link === location.pathname);
    if (currentMenu) {
      setActiveMenu(currentMenu.id);
    }
  }, [location.pathname]);

  const handleNavigation = (menuId, navigatepath) => {
    setActiveMenu(menuId);
    navigate(navigatepath);
  };

  return (
    <MenuListContainer>
      <MenuListTitle>
        <MenuListLink>개발자 로드맵</MenuListLink>
      </MenuListTitle>
      {menus.map((menu) => {
        const isActive = activeMenu === menu.id;
        const MenuComponent = isActive
          ? MenuListActiveContents
          : MenuListInactiveContents;

        return (
          <MenuComponent key={menu.id}>
            <MenuListLink onClick={() => handleNavigation(menu.id, menu.link)}>
              {menu.label}
            </MenuListLink>
          </MenuComponent>
        );
      })}
    </MenuListContainer>
  );
};

export default LeftMenus;
