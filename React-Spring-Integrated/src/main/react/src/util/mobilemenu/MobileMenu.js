export const menus = [
  {
    id: "about",
    label: "about",
    link: "/about",
    columns: [
      {
        title: { text: "🔥 코디터 소개", link: "/about" },
        contents: [],
      },
    ],
  },

  {
    id: "study",
    label: "study",
    link: "/study",
    columns: [
      {
        title: { text: "Java", link: "/study/java" },
        contents: [],
      },
      {
        title: { text: "Python", link: "/study/python" },
        contents: [],
      },
      {
        title: { text: "C", link: "/study/c" },
        contents: [],
      },
      {
        title: { text: "C++", link: "/study/cplus" },
        contents: [],
      },
      {
        title: { text: "JavaScript", link: "/study/javaScript" },
        contents: [],
      },
    ],
  },

  {
    id: "coding test",
    label: "coding test",
    link: "/codingtest",
    columns: [
      {
        title: { text: "Practice", link: "/codingtest/practice" },
        contents: [],
      },
      {
        title: { text: "Basic", link: "/codingtest/basic" },
        contents: [],
      },
      {
        title: { text: "Intermediate", link: "/codingtest/intermediate" },
        contents: [],
      },
      {
        title: { text: "Expert", link: "/codingtest/expert" },
        contents: [],
      },
    ],
  },

  {
    id: "community",
    label: "community",
    link: "/community",
    columns: [
      {
        title: { text: "💻 코딩 질문", link: "/community/coding" },
        contents: [],
      },
      {
        title: { text: "🎓 진로 질문", link: "/community/course" },
        contents: [],
      },
      {
        title: { text: "✏️ 스터디", link: "/community/study" },
        contents: [],
      },
      {
        title: { text: "📋 팀 프로젝트", link: "/community/team" },
        contents: [],
      },
    ],
  },

  {
    id: "more",
    label: "more",
    columns: [
      {
        title: { text: "개발자 로드맵" },
        contents: [
          { text: "✨ 프론트엔드", link: "/roadmap/frontend" },
          { text: "🛠️ 백엔드", link: "/roadmap/backend" },
          { text: "🪢 DevOps", link: "/roadmap/devops" },
          { text: "📚 풀스택", link: "/roadmap/fullstack" },
          // { text: "Data Analyst", link: "/roadmap/dataanalyst" },
          // { text: "AI & Data Science", link: "/roadmap/aianddatascience" },
          // { text: "앱 개발", link: "/roadmap/appdev" },
          // { text: "게임 개발", link: "/roadmap/gamedev" },
          // {
          //   text: "네트워크 & 보안",
          //   link: "/roadmap/networkandsecurities",
          // },
        ],
      },
      {
        title: {
          text: "코딩 테스트 및 알고리즘 관련 외부 사이트",
        },
        contents: [
          { text: "백준 온라인 저지", link: "https://www.acmicpc.net/" },
          {
            text: "삼성 SW 익스퍼트 아카데미",
            link: "https://swexpertacademy.com/",
          },
          { text: "프로그래머스", link: "https://programmers.co.kr/" },
          { text: "코드업", link: "https://codeup.kr/" },
          { text: "LeetCode", link: "https://leetcode.com/" },
          { text: "Codeforces", link: "https://codeforces.com/" },
          { text: "Hackerrank", link: "https://www.hackerrank.com/" },
          { text: "구름DEVTH", link: "https://devth.goorm.io/" },
        ],
      },
      {
        title: { text: "기타 정보" },
        contents: [
          {
            text: "IDE Top 10",
            link: "https://www.geeksforgeeks.org/top-10-ides-for-programmers/",
          },
          {
            text: "생산성, 협업 도구 Top 10",
            link: "https://clickup.com/ko/blog/145498/productivity-tools-for-agencies",
          },
          {
            text: "IT 용어 사전",
            link: "https://terms.tta.or.kr/dictionary/searchList.do",
          },
          {
            text: "IT 관련 자격증",
            link: "https://lifebase.kr/011-certi-com-it/?utm_source=chatgpt.com#google_vignette",
          },
          {
            text: "연도별 언어 인기 순위",
            link: "https://pypl.github.io/PYPL.html",
          },
        ],
      },
    ],
  },

  {
    id: "cs",
    label: "cs",
    link: "/cs",
    columns: [
      {
        title: { text: "건의사항", link: "/cs/suggestion" },
        contents: [],
      },
    ],
  },
  {
    id: "mypage",
    label: "mypage",
    link: "/mypage",
    columns: [
      {
        title: { text: "profile", link: "/mypage/accountmanager" },
        contents: [
          { text: "계정 관리", link: "/mypage/accountmanager" },
          { text: "내 소개", link: "/mypage/userfeed" },
          { text: "회원 탈퇴", link: "/mypage/withdrawal" },
        ],
      },
      {
        title: { text: "dashboard", link: "/mypage/study" },
        contents: [
          { text: "study", link: "/mypage/study" },
          { text: "coding test", link: "/mypage/codingtest" },
        ],
      },
      {
        title: { text: "post", link: "/mypage/community" },
        contents: [
          { text: "community", link: "/mypage/community" },
          { text: "악성 사용자 신고", link: "/mypage/report" },
          { text: "건의사항", link: "/mypage/suggestion" },
        ],
      },
    ],
  },
];
