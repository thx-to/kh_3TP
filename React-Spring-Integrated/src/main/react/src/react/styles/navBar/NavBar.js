import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  background-color: white;
  position: absolute;
  z-index: 10;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  z-index: 10;
`;

export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 10px;
  width: 186px;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  position: relative;
  align-items: center;
`;
export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 186px;
  height: 50px;
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/logo/fulllogo_black.png");
  position: absolute;
  align-items: center;
  justify-content: center;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
export const LoginLink = styled.div`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: black;
  }
`;
export const MenuContainer = styled.div.attrs({
  id: "menucontainer",
})`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-content: center;
`;

export const MenuTitle = styled.div.attrs({
  id: "menutitle",
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const MenuBox = styled.div.attrs({
  id: "menubox",
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isOpen &&
    css`
      &::before {
        content: "";
        position: absolute;
        bottom: -1px;
        width: 100%;
        height: 3px;
        background-color: black;
        transform: rotate(0deg);
        z-index: 5;
      }
    `}
`;

export const MenuButton = styled.button.attrs({
  id: "menubutton",
})`
  height: 50%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  user-select: none;
  font-size: 25px;
  font-family: "cocogoose-md";
  &:focus {
    outline: none;
    box-shadow: none;
  }
  transition: all 0.1s ease-in-out;
`;

export const LoginContainer = styled.div.attrs({
  id: "logincontainer",
})`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const LoginBox = styled.div.attrs({
  id: "loginbox",
})`
  width: 100%;
  height: 48px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isUser &&
    css`
      width: 86px;
      user-select: none;
      border-radius: 30px;
      background-color: : white;
      border: 1px solid rgba(0, 0, 0, 0.6);
    `}
  ${(props) =>
    props.isUser === null &&
    css`
      background-color: #313131;
      color: white;
      border-radius: 10px;
      font-size: 25px;
      font-family: "cocogoose-md";
      padding-top: 5px;
      cursor: pointer;
      &:hover {
        background-color: white;
        border: 1px solid #313131;
        color: #313131;
      }
    `}
`;

export const ProfileImgDiv = styled.div.attrs({
  id: "profileimgdiv",
})`
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
  /* position: absolute; */
  /* left: 0px; */
  justify-content: center;
  align-items: center;
`;
export const ProfileImg = styled.div.attrs({
  id: "profileimg",
})`
  width: 35px;
  height: 35px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isProfile === null &&
    css`
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 50%;
      border: 1px solid #f1f1f1;
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 50%;
      border: 1px solid #f1f1f1;
      background-image: url(${(props) => props.isProfile});
    `}
    ${(props) =>
    props.isUser === null &&
    css`
      display: none;
    `}
`;
export const MyPageButton = styled.button.attrs({
  id: "mypagebutton",
})`
  width: 35px;
  height: 35px;
  display: flex;
  position: relative;
  /* position: absolute;
  right: 0px; */
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("/images/icon/bugger_button.png");
  border: none;
  cursor: pointer;
  ${(props) =>
    props.isUser === null &&
    css`
      display: none;
    `}
`;
export const MyPageMenu = styled.div.attrs({
  id: "mypagemenu",
})`
  width: 200px;
  display: flex;
  position: absolute;
  top: 80px;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  right: 0px;
  transition: 0.2s ease-in-out;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
  ${(props) =>
    props.isToggleMyPage
      ? css`
          width: 200px;
          color: black;
        `
      : css`
          width: 200px;
          color: transparent;
          display: none;
        `}
`;

export const MyPageMenuContents = styled.div.attrs({
  id: "mypagemenucontents",
})`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-family: "medium", sans-serif;
  gap: 20px;
  ${(props) =>
    props.isToggleMyPage
      ? css`
          color: black;
        `
      : css`
          color: transparent;
          background-color: transparent;
          display: none;
        `}
  &:first-child {
    font-size: 18px;
  }
  &:nth-child(2) {
    font-family: "bold", sans-serif;
    font-size: 18px;
    margin-top: 15px;
  }
  &:nth-child(3) {
    justify-content: center;
    font-family: "cocogoose-md";
    font-size: 20px;
  }
  &:last-child {
    justify-content: center;
    font-family: "cocogoose-md";
    font-size: 20px;
    cursor: pointer;
  }
  &:nth-child(2)::after,
  &:nth-child(3)::after {
    content: "";
    width: 70%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    transform: scaleY(0.5);
  }
`;
export const StyledNavigate = styled.div`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;

export const MyPageProfileImg = styled.div.attrs({
  id: "mypageprofileimg",
})`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  ${(props) =>
    props.isProfile === null &&
    css`
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 50%;
      background-image: url("/images/general/default_profile.png");
    `}
  ${(props) =>
    props.isProfile !== null &&
    css`
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      border-radius: 50%;
      background-image: url(${(props) => props.isProfile});
    `}
    ${(props) =>
    props.isUser === null &&
    css`
      display: none;
    `}
`;
