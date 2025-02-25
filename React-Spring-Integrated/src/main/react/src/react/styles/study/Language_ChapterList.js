import styled from "styled-components";

export const ChapterOuter = styled.div.attrs({
  id: "chapterouter",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  /* position: sticky;
  top: 311px; */
  height: 100%;
  position: relative;
  overflow-y: scroll; /* 세로 스크롤 활성화 */
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  overflow-x: hidden;
`;

export const ChapterInner = styled.div.attrs({
  id: "chapterinner",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: #333333;
  border-radius: 30px;
`;

export const ChapterName = styled.div.attrs({
  id: "ChapterName",
})`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  font-size: 20px;
  font-family: "medium", sans-serif;
  margin-bottom: 3px;
  cursor: pointer;
  position: relative;
  &:hover {
    font-family: "bold", sans-serif;
  }
  & + &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transform: scaleY(0.5);
  }
`;
