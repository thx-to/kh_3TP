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
  margin-left: 5px;
  margin-right: 5px;
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
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 20px;
  padding-bottom: 25px;
  margin-top: 100px;
`;

export const MainPostContainer = styled.div.attrs({
  id: "mainpostcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
    margin-top: 10px;
  }
`;
export const MainPostTopBox = styled.div.attrs({
  id: "mainposttopbox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-right: 5px;
  margin-bottom: 10px;
`;
export const MainPostTop = styled.div.attrs({
  id: "mainposttop",
})`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
`;
export const MainPostTitle = styled.div.attrs({
  id: "mainposttitle",
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 20px;
  font-family: "bold", sans-serif;
  color: black;
`;
export const MainPostTitleArea = styled.div.attrs({
  id: "mainposttitlearea",
})`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: left;
  gap: 10px;
  margin-top: -3px;
`;
export const MainPostPending = styled.div.attrs({
  id: "mainpostpending",
})`
  height: 25px;
  display: flex;
`;
export const MainPostDiv = styled.div.attrs({
  id: "mainpostdiv",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  position: relative;
`;
export const MainPostInformation = styled.div.attrs({
  id: "mainpostinformation",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 5px;
`;
export const MainPostDate = styled.div.attrs({
  id: "mainpostdate",
})`
  font-family: "medium", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
export const MainPostViewsBox = styled.div.attrs({
  id: "mainpostviewsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const MainPostViewsImg = styled.div.attrs({
  id: "mainpostviewsimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/main_views.png");
`;
export const MainPostViewsText = styled.div.attrs({
  id: "mainpostviewstext",
})`
  font-family: "medium", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
export const MainPostEditedText = styled.div.attrs({
  id: "mainposteditedtext",
})`
  font-family: "medium", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;
export const MainPostThumbsUpBox = styled.div.attrs({
  id: "mainpostthumbsupbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const MainPostThumbsUpImg = styled.div.attrs({
  id: "mainpostthumbsupimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/thumbsup_g.png");
`;
export const MainPostThumbsUpText = styled.div.attrs({
  id: "mainpostthumbsuptext",
})`
  font-family: "medium", sans-serif;
  font-size: 12px;
  color: #0c8450;
`;
export const MainPostThumbsDownBox = styled.div.attrs({
  id: "mainpostthumbsdownbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const MainPostThumbsDownImg = styled.div.attrs({
  id: "mainpostthumbsdownimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/thumbsdown_r.png");
`;
export const MainPostThumbsDownText = styled.div.attrs({
  id: "mainpostthumbsdowntext",
})`
  font-family: "medium", sans-serif;
  font-size: 12px;
  color: #ff0000;
`;
export const MainPostContentsPending = styled.div.attrs({
  id: "mainpostcontentspending",
})`
  border-radius: 50px;
  background-color: #f1f1f1;
  font-size: 12px;
  font-family: "semibold", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 5px 14px;
`;
export const MainPostContentsSolved = styled.div.attrs({
  id: "mainpostcontentssolved",
})`
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
  font-family: "semibold", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5px 14px;
`;
export const MainPostExtra = styled.div.attrs({
  id: "mainpostextra",
})`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: flex-end;
`;
export const MainPostExtraButton = styled.div.attrs({
  id: "mainpostextrabutton",
})`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  transform: rotate(90deg);
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/m_menu_open.png");
`;
export const MainPostExtraItemContainer = styled.div.attrs({
  id: "mainpostextraitemcontainer",
})`
  width: 150px;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 80px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid #dadcdf;
  background-color: white;
  ${(props) =>
    props.isOpen && props.boardType !== "course"
      ? css`
          animation: ${expandHeight} 0.3s ease-out forwards;
        `
      : !props.isOpen && props.boardType !== "course"
      ? css`
          animation: ${collapseHeight} 0.3s ease-out forwards;
        `
      : props.isOpen && props.boardType === "course"
      ? css`
          animation: ${expandHeightCourse} 0.3s ease-out forwards;
        `
      : !props.isOpen &&
        props.boardType === "course" &&
        css`
          animation: ${collapseHeightCourse} 0.3s ease-out forwards;
        `}
  ${(props) =>
    !props.isOpen &&
    css`
      cursor: none;
      pointer-events: none;
    `}
`;
export const MainPostExtraItemOtherContainer = styled.div.attrs({
  id: "mainpostextraitemothercontainer",
})`
  width: 150px;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 80px;
  right: 0px;
  border-radius: 10px;
  border: 1px solid #dadcdf;
  background-color: white;
  ${(props) =>
    props.isOpenOther
      ? css`
          animation: ${expandHeightOther} 0.3s ease-out forwards;
        `
      : css`
          animation: ${collapseHeightOther} 0.3s ease-out forwards;
        `}
  ${(props) =>
    !props.isOpenOther &&
    css`
      cursor: none;
      pointer-events: none;
    `}
`;
const expandHeight = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 170px;
    opacity: 1;
  }
`;
const collapseHeight = keyframes`
  0% {
    height: 170px;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
`;
const expandHeightCourse = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 110px;
    opacity: 1;
  }
`;
const collapseHeightCourse = keyframes`
  0% {
    height: 110px;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
`;
const expandHeightOther = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 60px;
    opacity: 1;
  }
`;
const collapseHeightOther = keyframes`
  0% {
    height: 60px;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
`;
export const MainPostExtraItem = styled.div.attrs({
  id: "mainpostextraitem",
})`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 13px;
  font-family: "medium", sans-serif;
  user-select: none;
  cursor: pointer;
  & + &::before {
    content: "";
    width: 80%;
    height: 1px;
    position: absolute;
    top: -5px;
    left: 10%;
    background-color: #dadcdf;
    transform: scaleY(0.5);
  }
  &:hover {
    font-family: "bold", sans-serif;
  }
  ${(props) =>
    !props.isOpen &&
    css`
      color: transparent;
    `}
  ${(props) =>
    props.boardType === "course" &&
    css`
      height: 50%;
      & + &::before {
        top: 0px;
      }
    `}
`;
export const MainPostExtraOtherItem = styled.div.attrs({
  id: "mainpostextraitem",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 13px;
  font-family: "medium", sans-serif;
  user-select: none;
  cursor: pointer;
  &:hover {
    font-family: "bold", sans-serif;
  }
  ${(props) =>
    !props.isOpenOther &&
    css`
      color: transparent;
    `}
`;
export const MainPostMiddle = styled.div.attrs({
  id: "mainpostmiddle",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const LeftEvBox = styled.div.attrs({
  id: "leftevbox",
})`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-top: 5px;
`;
export const LeftEvUp = styled.div.attrs({
  id: "leftevup",
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.userLikeCnt === 1 &&
    css`
      background-color: green;
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsup_w.png");
    `}
  ${(props) =>
    props.userLikeCnt === 0 &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsup_w.png");
    `}
    ${(props) =>
    props.userLikeCnt === "" &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsup_w.png");
    `}
`;
export const LeftEvDown = styled.div.attrs({
  id: "leftevdown",
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.userDisLikeCnt === 1 &&
    css`
      background-color: red;
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsdown_w.png");
    `}
  ${(props) =>
    props.userDisLikeCnt === 0 &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsdown_w.png");
    `}
    ${(props) =>
    props.userDisLikeCnt === "" &&
    css`
      background-color: rgba(0, 0, 0, 0.3);
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      background-image: url("/images/icon/thumbsdown_w.png");
    `}
`;
export const MainPostContentsBox = styled.div.attrs({
  id: "mainpostcontentsbox",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const MainPostContentsText = styled.div.attrs({
  id: "mainpostcontentstext",
})`
  width: 100%;
  font-size: 16px;
  font-family: "regular", sans-serif;
  color: black;
  line-height: 156%;
  padding-left: 10px;
`;
export const MainPostTagsBox = styled.div.attrs({
  id: "mainposttagsbox",
})`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
export const MainPostTag = styled.div.attrs({
  id: "mainposttag",
})`
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 6px;
  font-size: 11px;
  font-family: "medium", sans-serif;
`;
export const ReplyContainer = styled.div.attrs({
  id: "replycontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
export const ReplyTitle = styled.div.attrs({
  id: "replytitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: 20px;
  font-family: "semibold", sans-serif;
  color: black;
`;
export const SuggestBox = styled.div.attrs({
  id: "suggestbox",
})`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-family: "medium", sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  transition: all 0.3s ease;
  /* cursor: pointer; */
  ${({ expanded }) =>
    expanded &&
    `
    max-height: 400px;
    flex-direction: column;
    padding-top: 10px;
  `}
  /* 확장 후 내부 텍스트 숨기기 */
    ${({ expanded }) =>
    expanded &&
    `
    > span {
      display: none;
      transition: all 0.3s ease;
    }
  `}
`;

export const EditorBox = styled.div.attrs({
  id: "editorbox",
})`
  width: 100%;
  transition: all 0.3s ease;
  display: ${({ expanded }) => (expanded ? "block" : "none")};
`;

export const ReplyList = styled.div.attrs({
  id: "replylist",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 40px;
`;
export const ReplyEach = styled.div.attrs({
  id: "replyeach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  }
`;
export const ReplyUserProfileBox = styled.div.attrs({
  id: "replyuserprofilebox",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
export const ReplyUserProfileImg = styled.div.attrs({
  id: "replyuserprofileimg",
})`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50%;
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
export const ReplyUserProfileTextBox = styled.div.attrs({
  id: "replyuserprofiletextbox",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ReplyUserId = styled.div.attrs({
  id: "replyuserid",
})`
  text-align: left;
  font-size: 16px;
  font-family: "semibold", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const ReplyUserDate = styled.div.attrs({
  id: "replyuserdate",
})`
  text-align: left;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const ReplyMiddle = styled.div.attrs({
  id: "replymiddle",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: flex-start;
  padding-bottom: 20px;
`;
export const ReplyMiddleText = styled.div.attrs({
  id: "replymiddletext",
})`
  font-size: 15px;
  font-family: "regular", sans-serif;
  color: black;
  line-height: 25px;
`;

export const RightContainer = styled.div.attrs({
  id: "rightcontainer",
})`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  left: 0;
`;
export const UserProfileBox = styled.div.attrs({
  id: "userprofilebox",
})`
  width: 100vw;
  margin-left: -20px;
  margin-top: -20px;
  padding: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: sticky;
  top: 100px;
  z-index: 9;
`;
export const UserProfileImg = styled.div.attrs({
  id: "userprofileimg",
})`
  width: 35px;
  height: 35px;
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
  font-size: 16px;
  font-family: "extrabold", sans-serif;
  color: rgba(0, 0, 0, 0.8);
`;
export const UserPostAmount = styled.div.attrs({
  id: "userpostamount",
})`
  text-align: left;
  font-size: 16px;
  font-family: "medium", sans-serif;
  color: rgba(0, 0, 0, 0.4);
`;
export const RelatedPostsContainer = styled.div.attrs({
  id: "relatedpostscontainer",
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
export const RelatedPostsTitle = styled.div.attrs({
  id: "relatedpoststitle",
})`
  width: 100%;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  color: black;
`;

export const RelatedPostsList = styled.div.attrs({
  id: "relatedpostslist",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const RelatedPostEach = styled.div.attrs({
  id: "relatedposteach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const RelatedPostContents = styled.div.attrs({
  id: "relatedpostcontents",
})`
  width: 100%;
  font-family: "regular", sans-serif;
  font-size: 13px;
`;
export const RelatedPostContentsTitle = styled.div.attrs({
  id: "relatedpostcontentstitle",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: "semibold", sans-serif;
  font-size: 16px;
  text-align: left;
`;
export const RelatedPostContentsText = styled.div.attrs({
  id: "relatedpostcontentstext",
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: "regular", sans-serif;
  font-size: 14px;
  text-align: left;
`;
export const RelatedPostContentsBottom = styled.div.attrs({
  id: "relatedpostcontentsbottom",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
`;
export const PostBottomRepliesBox = styled.div.attrs({
  id: "postbottomrepliesbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const PostBottomRepliesImg = styled.div.attrs({
  id: "postbottomrepliesimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  margin-top: 1px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/replies.png");
`;
export const PostBottomRepliesText = styled.div.attrs({
  id: "postbottomrepliestext",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: black;
`;
export const PostBottomViewsBox = styled.div.attrs({
  id: "postbottomviewsbox",
})`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const PostBottomViewsImg = styled.div.attrs({
  id: "postbottomviewsimg",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  margin-top: 1px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/views.png");
`;
export const PostBottomViewsText = styled.div.attrs({
  id: "postbottomviewstext",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: black;
`;

export const MiddleDot = styled.div.attrs({
  id: "middledot",
})`
  width: 1.5px;
  height: 1.5px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  margin-right: 1px;
`;
export const WriteWrap = styled.div.attrs({
  id: "writewrap",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  overflow: none;
`;
export const WriteContainer = styled.div.attrs({
  id: "writecontainer",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 10px;
  overflow: none;
`;

export const WriteSortOuterContiner = styled.div.attrs({
  id: "writesortoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  }
`;
export const WriteSortInnerContainer = styled.div.attrs({
  id: "writesortinnercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WriteSortTitleActive = styled.div.attrs({
  id: "writesorttitleactive",
})`
  width: 25%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 18px;
  font-family: "semibold", sans-serif;
  border-bottom: 2px solid black;
`;
export const WriteSortTitleInactive = styled.div.attrs({
  id: "writesorttitleinactive",
})`
  width: 25%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 18px;
  font-family: "semibold", sans-serif;
`;

export const WriteBoardLink = styled.button.attrs({
  id: "writeboardlink",
})`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  border: none;
  color: inherit;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const WriteTitleBox = styled.div.attrs({
  id: "writetitlebox",
})`
  margin-top: 10px;
  width: 100%;
`;
export const WriteTitle = styled.input.attrs({
  id: "writetitle",
})`
  width: 100%;
  padding: 5px 15px;
  font-family: "bold", sans-serif;
  font-size: 24px;
  color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const WriteTagBox = styled.div.attrs({
  id: "writetagbox",
})`
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
`;
export const WriteTags = styled.input.attrs({
  id: "writetags",
})`
  width: 100%;
  padding: 5px 25px;
  font-family: "medium", sans-serif;
  font-size: 20px;
  color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const TipTapBox = styled.div.attrs({
  id: "tiptapbox",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const EditorArea = styled.div.attrs({
  id: "editorarea",
})`
  width: 100%;
  height: calc(100vh - 262px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  overflow: auto;
`;
export const ToolBarContainer = styled.div.attrs({
  id: "toolbarcontainer",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  max-width: 1280px;
`;
export const WriteButtonsArea = styled.div.attrs({
  id: "writebuttonsarea",
})`
  width: 100vw;
  height: 80px;
  margin-left: -10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 10px;
  border-top: 1px solid #f1f1f1;
  box-shadow: 0 0 20px 1px #f1f1f1;
`;
export const WriteCancelButton = styled.div.attrs({
  id: "writecancelbutton",
})`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;

export const WriteSubmitButton = styled.div.attrs({
  id: "writesutmitbutton",
})`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f1f1f1;
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;
