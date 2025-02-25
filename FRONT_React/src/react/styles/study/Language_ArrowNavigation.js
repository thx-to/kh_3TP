import styled from "styled-components";

export const ArrowContainer = styled.div.attrs({
  id: "arrowcontainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
export const LeftArrow = styled.div.attrs({
  id: "leftarrow",
})`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center; */
  /* background-image: url("/images/icon/arrow_left.png"); */

  /* 기존 background-image 제거 */
  background-image: none;

  /* ::before를 사용하여 텍스트 추가 */
  &::before {
    content: "◀";
    width: 95%;
    height: 95%;
    padding-right: 5%;
    padding-bottom: 5%;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RightArrow = styled.div.attrs({
  id: "rightarrow",
})`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center; */
  /* background-image: url("/images/icon/arrow_right.png"); */

  /* ::before를 사용하여 텍스트 추가 */
  &::before {
    content: "▶";
    width: 95%;
    height: 95%;
    padding-left: 5%;
    padding-bottom: 5%;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ArrowLink = styled.button.attrs({
  id: "arrowlink",
})`
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
