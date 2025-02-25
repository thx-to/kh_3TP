import styled from "styled-components";

export const PaginationContainer = styled.div.attrs({
  id: "paginationcontainer",
})`
  width: 70%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const PaginationNumberBox = styled.div.attrs({
  id: "paginationnumberbox",
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;

`;

export const PaginationEachBoxActive = styled.div.attrs({
  id: "paginationeachboxactive",
})`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 50%;
  cursor: pointer;
`;
export const PaginationEachBoxInactive = styled.div.attrs({
  id: "paginationeachboxinactive",
})`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const PaginationLLActive = styled.div.attrs({
  id: "paginationllactive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_ll_active.png");
`;
export const PaginationLLInactive = styled.div.attrs({
  id: "paginationllinactive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_ll_inactive.png");
`;
export const PaginationLActive = styled.div.attrs({
  id: "paginationlactive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_l_active.png");
`;
export const PaginationLInactive = styled.div.attrs({
  id: "paginationlinactive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_l_inactive.png");
`;
export const PaginationRRActive = styled.div.attrs({
  id: "paginationrractive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_rr_active.png");
`;
export const PaginationRRInactive = styled.div.attrs({
  id: "paginationrrinactive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_rr_inactive.png");
`;
export const PaginationRActive = styled.div.attrs({
  id: "paginationractive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_r_active.png");
`;
export const PaginationRInactive = styled.div.attrs({
  id: "paginationrinactive",
})`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/page_r_inactive.png");
`;
export const PaginationNumber = styled.div.attrs({
  id: "paginationnumber",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "regular", sans-serif;
  color: black;
  font-size: 14px;
`;
