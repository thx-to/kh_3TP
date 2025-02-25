import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  MiddleSortOuterContiner,
  MiddleSortInnerContainer,
  MiddleSortTitleActiveBox,
  MiddleSortTitleInactiveBox,
  MiddleSortTitleActiveDot,
  MiddleSortTitleActiveText,
  MiddleSortTitleInactiveDot,
  MiddleSortTitleInactiveText,
  MiddleWriteButton,
  MiddleSortContentsBox,
} from "../../../../styles/community/Board_M";
import { useSelector } from "react-redux";

const Board_Order_M = ({ boardType, onSortChange }) => {
  const navigate = useNavigate();
  const [activeOrder, setActiveOrder] = useState("createdAt");

  // order posts
  const handleSort = (sortBy) => {
    setActiveOrder(sortBy);
    onSortChange(sortBy);
  };

  const renderOrderOptions = () => {
    switch (boardType) {
      case "coding":
        return (
          <MiddleSortContentsBox>
            {activeOrder === "createdAt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("createdAt")}
                >
                  최신순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("createdAt")}
                >
                  최신순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "viewCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("viewCnt")}
                >
                  조회순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("viewCnt")}
                >
                  조회순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "commentCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("commentCnt")}
                >
                  답변많은순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("commentCnt")}
                >
                  답변많은순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "likeCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
          </MiddleSortContentsBox>
        );
      case "course":
      case "study":
      case "team":
        return (
          <MiddleSortContentsBox>
            {activeOrder === "createdAt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("createdAt")}
                >
                  최신순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("createdAt")}
                >
                  최신순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "viewCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("viewCnt")}
                >
                  조회순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("viewCnt")}
                >
                  조회순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "commentCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("commentCnt")}
                >
                  댓글많은순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("commentCnt")}
                >
                  댓글많은순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
            {activeOrder === "likeCnt" ? (
              <MiddleSortTitleActiveBox>
                <MiddleSortTitleActiveDot />
                <MiddleSortTitleActiveText
                  onClick={() => handleSort("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleActiveText>
              </MiddleSortTitleActiveBox>
            ) : (
              <MiddleSortTitleInactiveBox>
                <MiddleSortTitleInactiveDot />
                <MiddleSortTitleInactiveText
                  onClick={() => handleSort("likeCnt")}
                >
                  좋아요순
                </MiddleSortTitleInactiveText>
              </MiddleSortTitleInactiveBox>
            )}
          </MiddleSortContentsBox>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <MiddleSortOuterContiner>
        <MiddleSortInnerContainer>
          {renderOrderOptions()}
        </MiddleSortInnerContainer>
      </MiddleSortOuterContiner>
    </>
  );
};

export default Board_Order_M;
