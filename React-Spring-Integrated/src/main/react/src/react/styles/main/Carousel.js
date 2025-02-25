import styled from "styled-components";

export const CarouselContainer = styled.div.attrs({
  id: "carouselcontainer",
})`
  width: 100vw;
  height: 300px;
  overflow: hidden;
  transform: translate() (-100vw);
  display: flex;
  flex-direction: row;
`;

export const CarouselOuter = styled.div.attrs({
  id: "carouselouter",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CarouselInner = styled.div.attrs({
  id: "carouselinner",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const CarouselTextBox = styled.div.attrs({
  id: "carouseltextbox",
})`
  margin-left: 50px;
  margin-top: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CarouselTextCategory = styled.div.attrs({
  id: "carouseltextcategory",
})`
  font-size: 18px;
  font-family: "medium", sans-serif;
  margin-bottom: 5px;
  color: ${(props) => props.textColor || "black"};
`;

export const CarouselTextTitle = styled.div.attrs({
  id: "carouseltexttitle",
})`
  font-size: 26px;
  font-family: "bold", sans-serif;
  margin-bottom: 20px;
  color: ${(props) => props.textColor || "black"};
`;

export const CarouselTextContents = styled.div.attrs({
  id: "carouseltextcontentsz",
})`
  font-size: 16px;
  font-family: "medium", sans-serif;
  margin-bottom: 20px;
  color: ${(props) => props.textColor || "black"};
`;

export const CarouselImage = styled.div.attrs({
  id: "carouselimage",
})`
  width: 50%;
  height: 300px;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
`;

export const ArrowBox = styled.div.attrs({
  id: "arrowbox",
})`
  width: 100px;
  height: 32px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 3;
`;

export const LeftArrow = styled.div.attrs({
  id: "leftarrow",
})`
  width: 7px;
  height: 10px;
  margin-right: 2px;
  background-repeat: no-repeat;
  background-size: 7px 10px;
  background-position: bottom right;
  background-image: url("/images/icon/arrow_left.png");
  cursor: pointer;
`;

export const ArrowText = styled.div.attrs({
  id: "arrowtext",
})`
  margin-top: -3px;
  color: white;
  font-family: "regular", sans-serif;
  font-size: 14px;
`;

export const ArrowSlash = styled.div.attrs({
  id: "arrowslash",
})`
  margin-top: -3px;
  color: white;
  font-family: "medium", sans-serif;
  font-size: 12px;
`;

export const RightArrow = styled.div.attrs({
  id: "rightarrow",
})`
  width: 7px;
  height: 10px;
  margin-left: 2px;
  background-repeat: no-repeat;
  background-size: 7px 10px;
  background-position: center;
  background-image: url("/images/icon/arrow_right.png");
  cursor: pointer;
`;
