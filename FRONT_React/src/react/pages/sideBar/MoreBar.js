import React, { useState, useEffect } from "react";

import {
  Container,
  MenuContainer,
  MenuColumn,
  MenuTitle,
  MenuContents,
  OutLink,
  LinkContents,
} from "../../styles/sideBar/MoreBar";
import { useNavigate } from "react-router-dom";
import { MenuLink } from "../../styles/sideBar/CsBar";

const MoreBar = ({ isOpen, closeMenu, path }) => {
  const navigate = useNavigate();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };
  // 언어가 늘어난다면 다음과 같은 형식으로 맨 밑에 추가해주면 자동 생성이 됩니다.
  const subMenuData = [
    {
      title: "✨ 프론트엔드",
      navigatepath: "/roadmap/frontend",
    },
    {
      title: "🛠️ 백엔드",
      navigatepath: "/roadmap/backend",
    },
    {
      title: "🪢 DevOps",
      navigatepath: "/roadmap/devops",
    },
    {
      title: "📚 풀스택",
      navigatepath: "/roadmap/fullstack",
    },
    // {
    //   title: "Data Anaysis",
    //   navigatepath: "/roadmap/dataanalysis",
    // },
    // {
    //   title: "AI & Data Science",
    //   navigatepath: "/roadmap/datascience",
    // },
    // {
    //   title: "앱 개발",
    //   navigatepath: "/roadmap/appdev",
    // },
    // {
    //   title: "게임 개발",
    //   navigatepath: "/roadmap/gamedev",
    // },
    // {
    //   title: "네트워크 & 보안",
    //   navigatepath: "/roadmap/network",
    // },
  ];

  return (
    <Container isOpen={isOpen}>
      <MenuContainer>
        <MenuColumn onClick={closeMenu}>
          <MenuTitle>개발자 로드맵</MenuTitle>
          {subMenuData.map((menu, index) => (
            <MenuContents
              key={index}
              onClick={() => handleNavigation(menu.navigatepath)}
            >
              <MenuLink>{menu.title}</MenuLink>
            </MenuContents>
          ))}
        </MenuColumn>
        <MenuColumn>
          <MenuTitle>
            코딩 테스트 및<br />
            알고리즘 관련 외부 사이트
          </MenuTitle>
          <LinkContents
            onClick={() => window.open("https://www.acmicpc.net", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            백준 온라인 저지
            <OutLink />
          </LinkContents>
          <LinkContents
            className="menu-link"
            onClick={() =>
              window.open("https://swexpertacademy.com/main/main.do", "_blank")
            }
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            삼성 SW Expert Academy
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://programmers.co.kr/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            프로그래머스
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://codeup.kr/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            코드업
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://leetcode.com/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            LeetCode
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://codeforces.com/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Codeforces
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://www.hackerrank.com/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Hackerrank
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://devth.goorm.io/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            구름DEVTH
            <OutLink />
          </LinkContents>
        </MenuColumn>
        <MenuColumn>
          <MenuTitle>기타 정보</MenuTitle>
          <LinkContents
            onClick={() => window.open("https://www.geeksforgeeks.org/top-10-ides-for-programmers/", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            IDE Top 10
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://clickup.com/ko/blog/145498/productivity-tools-for-agencies", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            생산성, 협업 도구 Top 10
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://terms.tta.or.kr/dictionary/searchList.do", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            IT 용어 사전
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://lifebase.kr/011-certi-com-it/?utm_source=chatgpt.com#google_vignette", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            IT 관련 자격증
            <OutLink />
          </LinkContents>
          <LinkContents
            onClick={() => window.open("https://pypl.github.io/PYPL.html", "_blank")}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            연도별 언어 인기 순위
            <OutLink />
          </LinkContents>
        </MenuColumn>
      </MenuContainer>
    </Container>
  );
};

export default MoreBar;
