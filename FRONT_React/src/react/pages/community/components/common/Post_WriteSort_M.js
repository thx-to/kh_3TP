import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  WriteSortInnerContainer,
  WriteSortOuterContiner,
  WriteSortTitleActive,
  WriteSortTitleInactive,
  WriteBoardLink,
} from "../../../../styles/community/Post_M";

const Post_WriteSort_M = () => {
  const [activeBoard, setActiveBoard] = useState("coding"); // 초기 설정
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  useEffect(() => {
    const currentBoard = location.state?.id || location.pathname.split("/")[2];
    setActiveBoard(currentBoard);
  }, [location.state]);

  const boards = [
    {
      id: "coding",
      label: "💻 코딩 질문",
      link: "/community/coding/write",
    },
    {
      id: "course",
      label: "🎓 진로 질문",
      link: "/community/course/write",
    },
    {
      id: "study",
      label: "✏️ 스터디",
      link: "/community/study/write",
    },
    {
      id: "team",
      label: "📋 팀 프로젝트",
      link: "/community/team/write",
    },
  ];

  return (
    <>
      <WriteSortOuterContiner>
        <WriteSortInnerContainer>
          {boards.map((board) => {
            const isActive = activeBoard === board.id;
            const BoardComponent = isActive
              ? WriteSortTitleActive
              : WriteSortTitleInactive;

            return (
              <BoardComponent key={board.id}>
                <WriteBoardLink
                  onClick={() => {
                    handleNavigation(board.link, board);
                    setActiveBoard(board.id);
                  }}
                >
                  {board.label.slice(3,)}
                </WriteBoardLink>
              </BoardComponent>
            );
          })}
        </WriteSortInnerContainer>
      </WriteSortOuterContiner>
    </>
  );
};

export default Post_WriteSort_M;
