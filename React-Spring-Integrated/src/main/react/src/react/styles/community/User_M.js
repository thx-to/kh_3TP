import styled, { keyframes, css } from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;
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
  top: 65px;
  z-index: 5;
`;

export const TopBoxWide2 = styled.div.attrs({
  id: "topboxwide2",
})`
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  position: fixed;
  top: 115px;
  z-index: 5;
  border-bottom: 1px solid #313131;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap; /* 줄바꿈 방지 */
`;

export const TopBox = styled.div.attrs({
  id: "topbox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 5;
`;

export const TopBox2 = styled.div.attrs({
  id: "topbox2",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 5;
`;

export const TopBoxText = styled.div.attrs({
  id: "topboxtext",
})`
  display: inline-block;
  font-family: "bold", sans-serif;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;
  color: white;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const TopBoxText2 = styled.div.attrs({
  id: "topboxtext2",
})`
  display: inline-block;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  text-align: left;
  align-items: center;
  cursor: pointer;
  color: #313131;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const TopBoxArrow = styled.div.attrs({
  id: "topboxarrow",
})`
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "medium", sans-serif;
  padding-bottom: 3px;
`;

export const TopBoxArrow2 = styled.div.attrs({
  id: "topboxarrow2",
})`
  color: #313131;
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: "bold", sans-serif;
`;
export const TopBoxLink = styled.button.attrs({
  id: "topboxlink",
})`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;
export const Container = styled.div.attrs({
  id: "container",
})`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 30px;
  padding-bottom: 25px;
  margin-top: 70px;
`;
export const ProfileContainer = styled.div.attrs({
  id: "profilecontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ProfileTitle = styled.div.attrs({
  id: "profiletitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  font-size: 24px;
  font-family: "bold", sans-serif;
  color: black;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;
`;
export const UserProfileBox = styled.div.attrs({
  id: "userprofilebox",
})`
  width: 100%;
  padding: 30px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f1f1f1;
`;
export const UserProfileImg = styled.div.attrs({
  id: "userprofileimg",
})`
  width: 120px;
  height: 120px;
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
export const UserId = styled.div.attrs({
  id: "userid",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 18px;
  font-family: "bold", sans-serif;
`;
export const UserPostAmount = styled.div.attrs({
  id: "userpostamount",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
export const FeedContainer = styled.div.attrs({
  id: "feedcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  } */
`;

export const FeedTitle = styled.div.attrs({
  id: "feedtitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  font-size: 24px;
  font-family: "bold", sans-serif;
  color: black;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;
`;

export const FeedContentsContainer = styled.div.attrs({
  id: "feedcontentscontainer",
})`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
`;

export const FeedContents = styled.div.attrs({
  id: "feedcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 16px;
  color: black;
  display: flex;
  justify-content: center;
`;

export const PostContainer = styled.div.attrs({
  id: "postcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  gap: 30px;
`;

export const PostTitle = styled.div.attrs({
  id: "posttitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  font-size: 24px;
  font-family: "bold", sans-serif;
  color: black;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;
`;
