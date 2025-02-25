import { useState } from "react";

import {
  TopSortInnerContainer,
  TopSortOuterContiner,
  TopSortTitleActive,
  TopSortTitleInactive,
} from "../../../../styles/community/Board";

const Board_TopSort = ({ onStatusChange, boardType }) => {
  const [activeStatus, setActiveStatus] = useState(null);

  const handleStatus = (status) => {
    setActiveStatus(status);
    onStatusChange(status);
  };

  const renderSortOptions = () => {
    switch (boardType) {
      case "coding":
        return (
          <TopSortOuterContiner>
            <TopSortInnerContainer>
              {activeStatus === null ? (
                <TopSortTitleActive onClick={() => handleStatus(null)}>
                  전체
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleStatus(null)}>
                  전체
                </TopSortTitleInactive>
              )}
              {activeStatus === "ACTIVE" ? (
                <TopSortTitleActive onClick={() => handleStatus("ACTIVE")}>
                  미해결
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleStatus("ACTIVE")}>
                  미해결
                </TopSortTitleInactive>
              )}
              {activeStatus === "INACTIVE" ? (
                <TopSortTitleActive onClick={() => handleStatus("INACTIVE")}>
                  해결됨
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleStatus("INACTIVE")}>
                  해결됨
                </TopSortTitleInactive>
              )}
            </TopSortInnerContainer>
          </TopSortOuterContiner>
        );
      case "study":
      case "team":
        return (
          <TopSortOuterContiner>
            <TopSortInnerContainer>
              {activeStatus === null ? (
                <TopSortTitleActive onClick={() => handleStatus(null)}>
                  전체
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleStatus(null)}>
                  전체
                </TopSortTitleInactive>
              )}
              {activeStatus === "ACTIVE" ? (
                <TopSortTitleActive onClick={() => handleStatus("ACTIVE")}>
                  모집중
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleStatus("ACTIVE")}>
                  모집중
                </TopSortTitleInactive>
              )}
              {activeStatus === "INACTIVE" ? (
                <TopSortTitleActive onClick={() => handleStatus("INACTIVE")}>
                  모집완료
                </TopSortTitleActive>
              ) : (
                <TopSortTitleInactive onClick={() => handleStatus("INACTIVE")}>
                  모집완료
                </TopSortTitleInactive>
              )}
            </TopSortInnerContainer>
          </TopSortOuterContiner>
        );
      case "Course":
        return null; // Course 타입에서는 정렬 옵션이 표시되지 않음
      default:
        return null;
    }
  };

  return <>{renderSortOptions()}</>;
};

export default Board_TopSort;
