import styled, { css } from "styled-components";

export const WeeklyBestContainer = styled.div.attrs({
  id: "weeklybestcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
`;
export const WeeklyBestTitle = styled.div.attrs({
  id: "weeklybesttitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  color: black;
`;
export const WeeklyBestList = styled.div.attrs({
  id: "weeklybestlist",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const WeeklyBestEach = styled.div.attrs({
  id: "weeklybesteach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const WeeklyBestContents = styled.div.attrs({
  id: "weeklybestcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 13px;
`;
export const WeeklyBestUserBox = styled.div.attrs({
  id: "weeklybestuserbox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const WeeklyBestUserImg = styled.div.attrs({
  id: "weeklybestuserimg",
})`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  ${(props) =>
    props.isProfile === null &&
    css`
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-image: url(${(props) => props.isProfile});
    `}
`;
export const WeeklyBestUserId = styled.div.attrs({
  id: "weeklybestuserid",
})`
  width: calc(100% = 20px);
  text-align: left;
  font-family: "medium", sans-serif;
  font-size: 13px;
  color: black;
  position: relative;
`;
