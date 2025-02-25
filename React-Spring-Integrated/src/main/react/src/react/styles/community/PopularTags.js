import styled, { css } from "styled-components";
import { Background } from "../Layout";

export const PopularTagsContainer = styled.div.attrs({
  id: "populartagscontainer",
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
export const PopularTagsTitle = styled.div.attrs({
  id: "populartagstitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  color: black;
`;
export const PopularTagsItemsBox = styled.div.attrs({
  id: "populartagsitemsbox",
})`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;
export const PopularTagsItem = styled.div.attrs({
  id: "populartagsitem",
})`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "medium", sans-serif;
  font-size: 11px;
  height: 24px;
  padding: 4px 6px;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background-color: black;
    `}
`;
