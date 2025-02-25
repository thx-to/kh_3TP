import styled, { css } from "styled-components";

export const TopWritersContainer = styled.div.attrs({
  id: "topwriterscontainer",
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
export const TopWritersTitle = styled.div.attrs({
  id: "boardlisttitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  color: black;
`;
export const TopWritersList = styled.div.attrs({
  id: "topwriterslist",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TopWritersEach = styled.div.attrs({
  id: "topwriterseach",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const TopWritersImg = styled.div.attrs({
  id: "topwritersimg",
})`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
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
export const TopWritersId = styled.div.attrs({
  id: "topwritersid",
})`
  width: calc(100% - 50px);
  text-align: left;
  font-family: "medium", sans-serif;
  font-size: 13px;
  margin-left: 10px;
  color: black;
  position: relative;
`;
export const TopWritersPoint = styled.div.attrs({
  id: "topwriterspoint",
})`
  width: 30px;
  text-align: right;
  font-family: "bold", sans-serif;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
`;
