import { useEffect, useState } from "react";
import {
  BoardListTitle,
  BoardListActiveContents,
  BoardListInactiveContents,
  BoardListContainer,
  BoardListLink,
} from "../../../../styles/community/BoardList";
import { useLocation, useNavigate } from "react-router-dom";

const BoardList = () => {
  const [activeBoard, setActiveBoard] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const handleRefresh = () => {
    navigate("/community");
  };

  useEffect(() => {
    if (location.state?.id) {
      setActiveBoard(location.state.id);
    } else if (!location.state?.id) {
      setActiveBoard(location.pathname.split("/").pop());
    }
  }, [location.state]);

  const boards = [
    {
      id: "coding",
      label: "💻 코딩 질문",
      link: "/community/coding",
    },
    {
      id: "course",
      label: "🎓 진로 질문",
      link: "/community/course",
    },
    {
      id: "study",
      label: "️✏️ 스터디",
      link: "/community/study",
    },
    {
      id: "team",
      label: "📋 팀 프로젝트",
      link: "/community/team",
    },
  ];

  return (
    <BoardListContainer>
      <BoardListTitle>
        <BoardListLink onClick={() => handleRefresh()}>
          코디터 커뮤니티
        </BoardListLink>
      </BoardListTitle>
      {boards.map((board) => {
        const isActive = activeBoard === board.id;
        const BoardComponent = isActive
          ? BoardListActiveContents
          : BoardListInactiveContents;

        return (
          <BoardComponent key={board.id}>
            <BoardListLink
              onClick={() => {
                handleNavigation(board.link, board);
                setActiveBoard(board.label);
              }}
            >
              {board.label}
            </BoardListLink>
          </BoardComponent>
        );
      })}
    </BoardListContainer>
  );
};

export default BoardList;
