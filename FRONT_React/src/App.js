import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./react/pages/Layout";
import Login from "./react/pages/login/login";
import FindId from "./react/pages/login/FindId";
import FindPw from "./react/pages/login/FindPw";
import Signup from "./react/pages/signup/signup";
import GlobalStyle from "././react/styles/GlobalStyle";
import Terms from "./react/pages/legal/Terms";
import Privacy from "./react/pages/legal/Privacy";
import About from "./react/pages/about/About";
import Main from "./react/pages/main/Main";
import Study_Main from "./react/pages/study/Study_Main";
import Java_Main from "./react/pages/study/java/Java_Main";
import Java_01_01 from "./react/pages/study/java/java_01/Java_01_01";
import Java_01_02 from "./react/pages/study/java/java_01/Java_01_02";
import Java_01_03 from "./react/pages/study/java/java_01/Java_01_03";
import Java_02_01 from "./react/pages/study/java/java_02/Java_02_01";
import Java_02_02 from "./react/pages/study/java/java_02/Java_02_02";
import Java_02_03 from "./react/pages/study/java/java_02/Java_02_03";
import Java_02_04 from "./react/pages/study/java/java_02/Java_02_04";
import Java_02_05 from "./react/pages/study/java/java_02/Java_02_05";
import Python_Main from "./react/pages/study/python/Python_Main";
import Python_01_01 from "./react/pages/study/python/python_01/Python_01_01";
import Python_01_02 from "./react/pages/study/python/python_01/Python_01_02";
import Python_01_03 from "./react/pages/study/python/python_01/Python_01_03";
import Python_01_04 from "./react/pages/study/python/python_01/Python_01_04";
import Python_01_05 from "./react/pages/study/python/python_01/Python_01_05";
import Python_01_06 from "./react/pages/study/python/python_01/Python_01_06";
import Python_01_07 from "./react/pages/study/python/python_01/Python_01_07";
import Python_01_08 from "./react/pages/study/python/python_01/Python_01_08";
import Python_01_09 from "./react/pages/study/python/python_01/Python_01_09";
import Python_01_10 from "./react/pages/study/python/python_01/Python_01_10";
import C_Main from "./react/pages/study/c/C_Main";
import C_01_01 from "./react/pages/study/c/c_01/C_01_01";
import CPlus_Main from "./react/pages/study/cplus/CPlus_Main";
import CPlus_01_01 from "./react/pages/study/cplus/cplus_01/CPlus_01_01";
import JavaScript_Main from "./react/pages/study/javascript/JavaScript_Main";
import JavaScript_01_01 from "./react/pages/study/javascript/javascript_01/JavaScript_01_01";
import JavaScript_01_02 from "./react/pages/study/javascript/javascript_01/JavaScript_01_02";
import JavaScript_01_03 from "./react/pages/study/javascript/javascript_01/JavaScript_01_03";
import CodingTest_Main from "./react/pages/codingtest/subpages/CodingTest_Main";
import Practice from "./react/pages/codingtest/subpages/Practice";
import CodeChallenge from "./react/pages/codingtest/subpages/CodeChallenge";
import Community_Main from "./react/pages/community/Community_Main";
import Community_Coding from "./react/pages/community/Community_Coding";
import Community_Course from "./react/pages/community/Community_Course";
import Community_Study from "./react/pages/community/Community_Study";
import Community_Team from "./react/pages/community/Community_Team";
import Post_Read from "./react/pages/community/Post_Read";
import Post_Write_Coding from "./react/pages/community/Post_Write_Coding";
import Post_Write_Course from "./react/pages/community/Post_Write_Course";
import Post_Write_Study from "./react/pages/community/Post_Write_Study";
import Post_Write_Team from "./react/pages/community/Post_Write_Team";
import User_Main from "./react/pages/community/User_Main";
import Report from "./react/pages/cs/Report";
import Suggestion from "./react/pages/cs/Suggestion";
import Roadmap_Frontend from "./react/pages/more/Roadmap_Frontend";
import Roadmap_Backend from "./react/pages/more/Roadmap_Backend";
import Roadmap_DevOps from "./react/pages/more/Roadmap_DevOps";
import Roadmap_Fullstack from "./react/pages/more/Roadmap_Fullstack";
import RequiredAuth from "./util/RequiredAuth";
import MyPage_Main from "./react/pages/mypage/MyPage_Main";
import MyPage_UserFeed from "./react/pages/mypage/MyPage_UserFeed";
import MyPage_Withdrawal from "./react/pages/mypage/MyPage_Withdrawal";
import MyPage_Study from "./react/pages/mypage/MyPage_Study";
import MyPage_CodingTest from "./react/pages/mypage/MyPage_CodingTest";
import MyPage_Community from "./react/pages/mypage/MyPage_Community";
import MyPage_Report from "./react/pages/mypage/MyPage_Report";
import MyPage_Suggestion from "./react/pages/mypage/MyPage_Suggestion";
import Post_Modify_Coding from "./react/pages/community/Post_Modify_Coding";
import Post_Modify_Course from "./react/pages/community/Post_Modify_Course";
import Post_Modify_Study from "./react/pages/community/Post_Modify_Study";
import Post_Modify_Team from "./react/pages/community/Post_Modify_Team";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AppContents />
      </Router>
    </>
  );
};

export default App;

const AppContents = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/community/coding/write" element={<Post_Write_Coding />} />
        <Route
          path="/community/coding/modify/:boardId"
          element={<Post_Modify_Coding />}
        />
        <Route path="/community/course/write" element={<Post_Write_Course />} />
        <Route
          path="/community/course/modify/:boardId"
          element={<Post_Modify_Course />}
        />
        <Route path="/community/study/write" element={<Post_Write_Study />} />
        <Route
          path="/community/study/modify/:boardId"
          element={<Post_Modify_Study />}
        />
        <Route path="/community/team/write" element={<Post_Write_Team />} />
        <Route
          path="/community/team/modify/:boardId"
          element={<Post_Modify_Team />}
        />
        <Route path="/cs/report/:boardId" element={<Report />} />
        <Route path="/cs/suggestion" element={<Suggestion />} />
        <Route
          path="/codingtest/challenge/:questionId"
          element={<CodeChallenge />}
        />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          {StudyRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {CodingTestRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {CommunityRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {MoreRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {MyPageRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

const StudyRoutes = [
  { path: "/study", element: <Study_Main /> },
  { path: "/study/java", element: <Java_Main /> },
  { path: "/study/java/01/01", element: <Java_01_01 /> },
  { path: "/study/java/01/02", element: <Java_01_02 /> },
  { path: "/study/java/01/03", element: <Java_01_03 /> },
  { path: "/study/java/02/01", element: <Java_02_01 /> },
  { path: "/study/java/02/02", element: <Java_02_02 /> },
  { path: "/study/java/02/03", element: <Java_02_03 /> },
  { path: "/study/java/02/04", element: <Java_02_04 /> },
  { path: "/study/java/02/05", element: <Java_02_05 /> },
  { path: "/study/python", element: <Python_Main /> },
  { path: "/study/python/01/01", element: <Python_01_01 /> },
  { path: "/study/python/01/02", element: <Python_01_02 /> },
  { path: "/study/python/01/03", element: <Python_01_03 /> },
  { path: "/study/python/01/04", element: <Python_01_04 /> },
  { path: "/study/python/01/05", element: <Python_01_05 /> },
  { path: "/study/python/01/06", element: <Python_01_06 /> },
  { path: "/study/python/01/07", element: <Python_01_07 /> },
  { path: "/study/python/01/08", element: <Python_01_08 /> },
  { path: "/study/python/01/09", element: <Python_01_09 /> },
  { path: "/study/python/01/10", element: <Python_01_10 /> },
  { path: "/study/c", element: <C_Main /> },
  { path: "/study/c/01/01", element: <C_01_01 /> },
  { path: "/study/cplus", element: <CPlus_Main /> },
  { path: "/study/cplus/01/01", element: <CPlus_01_01 /> },
  { path: "/study/javascript", element: <JavaScript_Main /> },
  { path: "/study/javascript/01/01", element: <JavaScript_01_01 /> },
  { path: "/study/javascript/01/02", element: <JavaScript_01_02 /> },
  { path: "/study/javascript/01/03", element: <JavaScript_01_03 /> },
];

const CodingTestRoutes = [
  { path: "/codingtest", element: <CodingTest_Main /> },
  { path: "/codingtest/practice", element: <Practice /> },
];

const CommunityRoutes = [
  { path: "/community", element: <Community_Main /> },
  { path: "/community/coding", element: <Community_Coding /> },
  { path: "/community/:boardType/post/:boardId", element: <Post_Read /> },
  { path: "/community/course", element: <Community_Course /> },
  { path: "/community/study", element: <Community_Study /> },
  { path: "/community/team", element: <Community_Team /> },
  { path: "/community/user/:userId", element: <User_Main /> },
];

const MoreRoutes = [
  { path: "/roadmap/frontend", element: <Roadmap_Frontend /> },
  { path: "/roadmap/backend", element: <Roadmap_Backend /> },
  { path: "/roadmap/devops", element: <Roadmap_DevOps /> },
  { path: "/roadmap/fullstack", element: <Roadmap_Fullstack /> },
];

const MyPageRoutes = [
  {
    path: "/mypage",
    element: (
      <RequiredAuth>
        <MyPage_Main />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/accountmanager",
    element: (
      <RequiredAuth>
        <MyPage_Main />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/userfeed",
    element: (
      <RequiredAuth>
        <MyPage_UserFeed />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/withdrawal",
    element: (
      <RequiredAuth>
        <MyPage_Withdrawal />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/study",
    element: (
      <RequiredAuth>
        <MyPage_Study />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/codingtest",
    element: (
      <RequiredAuth>
        <MyPage_CodingTest />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/community",
    element: (
      <RequiredAuth>
        <MyPage_Community />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/report",
    element: (
      <RequiredAuth>
        <MyPage_Report />
      </RequiredAuth>
    ),
    auth: true,
  },
  {
    path: "/mypage/suggestion",
    element: (
      <RequiredAuth>
        <MyPage_Suggestion />
      </RequiredAuth>
    ),
    auth: true,
  },
];
