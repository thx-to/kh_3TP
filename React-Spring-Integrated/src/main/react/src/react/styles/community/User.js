import styled, {css} from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
export const TopBoxWide = styled.div.attrs({
  id: "topboxwide",
})`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #313131;
  position: fixed;
  top: 100px;
  z-index: 5;
`;
export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const TopBoxText = styled.div.attrs({
  id: "topboxtext",
})`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 30px;
  border: 1px solid #313131;
  font-family: "bold", sans-serif;
  font-size: 18px;
  align-items: center;
  padding-bottom: 3px;
  cursor: pointer;
  color: white;
  background-color: #313131;
  &:hover {
    color: #313131;
    background-color: white;
  }
`;
export const TopBoxArrow = styled.div.attrs({
  id: "topboxarrow",
})`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "light", sans-serif;
  padding-bottom: 3px;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
  margin-top: 75px;
`;

export const LeftContainer = styled.div.attrs({
  id: "leftcontainer",
})`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  left: 0;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;

export const FeedContainer = styled.div.attrs({
  id: "feedcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  }
`;

export const FeedTitle = styled.div.attrs({
  id: "feedtitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 28px;
  font-family: "bold", sans-serif;
  color: black;
`;

export const FeedContents = styled.div.attrs({
  id: "feedcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 16px;
  color: black;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const PostContainer = styled.div.attrs({
  id: "postcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const PostTitle = styled.div.attrs({
  id: "posttitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 28px;
  font-family: "bold", sans-serif;
  color: black;
`;
export const UserProfileBox = styled.div.attrs({
  id: "userprofilebox",
})`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
`;
export const UserProfileImg = styled.div.attrs({
  id: "userprofileimg",
})`
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
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
export const UserProfileTextBox = styled.div.attrs({
  id: "userprofiletextbox",
})`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const UserId = styled.div.attrs({
  id: "userid",
})`
  text-align: left;
  font-size: 24px;
  font-family: "extrabold", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const UserPostAmount = styled.div.attrs({
  id: "userpostamount",
})`
  text-align: left;
  font-size: 20px;
  font-family: "medium", sans-serif;
  color: rgba(0, 0, 0, 0.4);
`;
