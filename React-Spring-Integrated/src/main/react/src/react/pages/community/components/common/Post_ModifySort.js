import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  WriteSortInnerContainer,
  WriteSortOuterContiner,
  WriteSortTitleActive,
  WriteSortTitleInactive,
  WriteBoardLink,
} from "../../../../styles/community/Post";

const Post_ModifySort = () => {
  const [activeBoard, setActiveBoard] = useState(""); // 초기 설정
  const [boardId, setBoardId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentBoard = location.state?.id || location.pathname.split("/")[2];
    const currentBoardId = location.state?.boardId || "";
    setBoardId(currentBoardId);
    setActiveBoard(currentBoard);
  }, [location.state]);

  const boards = [
    {
      id: "coding",
      label: "💻 코딩 질문",
    },
    {
      id: "course",
      label: "🎓 진로 질문",
    },
    {
      id: "study",
      label: "✏️ 스터디",
    },
    {
      id: "team",
      label: "📋 팀 프로젝트",
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
                <WriteBoardLink>{board.label}</WriteBoardLink>
              </BoardComponent>
            );
          })}
        </WriteSortInnerContainer>
      </WriteSortOuterContiner>
    </>
  );
};

export default Post_ModifySort;
