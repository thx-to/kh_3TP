import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  /* height: calc(var(--vh, 1vh) * 100); */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 0, 0, 0.8); */
  justify-content: flex-start;
  align-items: center;
`;
export const TopBarContainer = styled.div.attrs({
  id: "topbarcontainer",
})`
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const TopBar = styled.div.attrs({
  id: "topbar",
})`
  max-width: 1280px;
  width: 100%;
  height: 100%;
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
  background-image: url("/images/logo/fulllogo_white.png");
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
export const BodyContainer = styled.div.attrs({
  id: "bodycontainer",
})`
  width: 100%;
  height: calc(100vh - 100px);
  padding-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const FloatingContainer = styled.div.attrs({
  id: "floatingcontainer",
})`
  width: 95%;
  max-width: 500px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;
export const FloatingTitle = styled.h1.attrs({
  id: "inputtitle",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-bottom: 30px;
  font-size: 30px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.isUserIdAvailable &&
    css`
      animation: ${moveSequence} 0.5s ease-out forwards;
      font-size: 25px;
    `}
`;
const moveSequence = keyframes`
    0% {
      transform: translateX(0) translateY(0);
    }
    50%{
      transform: translateX(0) translateY(-80%);
    }
    100%{
      transform: translateX(-27%) translateY(-80%);
    }
  `;
export const InputDiv = styled.div.attrs({
  id: "inputdiv",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  user-select: none;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;
export const Input = styled.input.attrs({
  id: "input",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url(${(props) => props.icon});
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isEmail &&
    css`
      border: 2px solid black;
      width: 75%;
    `}
  ${(props) =>
    !props.isEmailAvailable &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.5);
      width: 100%;
    `}
`;
export const InputSecurity = styled.input.attrs({
  id: "inputsecurity",
})`
  width: 75%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url(${(props) => props.icon});
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isSecurity &&
    css`
      border: 2px solid black;
    `}
`;
export const FindIdOutput = styled.div.attrs({
  id: "findoutput",
})`
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  transition: all 1s ease-in-out;
  margin-bottom: 40px;
`;
export const FindPwButton = styled.button.attrs({
  id: "findpwbutton",
})`
  width: 25%;
  height: 50px;
  display: flex;
  position: relative;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "medium", sans-serif;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.isEmail === false &&
    css`
      display: none;
    `}
  ${(props) =>
    props.isEmail &&
    css`
      &:hover {
        background-color: black;
      }
    `}
  border: none;
`;
export const FindPwButtonDiv = styled.div.attrs({
  id: "findpwbutton",
})`
  width: 25%;
  height: 50px;
  display: flex;
  position: relative;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: white;
  font-family: "medium", sans-serif;
  font-size: 10px;
  border: none;
`;
export const FindPwButtonTimer = styled.div.attrs({
  id: "findpwbuttontimer",
})`
  width: 50%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: black;
  font-family: "medium", sans-serif;
  font-size: 12px;
  border: none;
`;
export const FindPwButtonRefresh = styled.div.attrs({
  id: "findpwbuttonrefresh",
})`
  width: 50%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  &::before {
    content: "";
    width: 50%;
    height: 50%;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    background-position: center;
    background-image: url("/images/icon/refresh-1.png");
    position: absolute;
    z-index: 5;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
  }
  &::after {
    content: "";
    width: 50%;
    height: 50%;
    position: absolute;
    background-color: #d6d6d6;
    border-radius: 5px;
  }
  &:hover::before {
    transform: rotate(180deg);
  }
`;
export const ValidEmailMessage = styled.span.attrs({
  id: "validemailmessage",
})`
  width: 100%;
  min-height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 10px;
  color: red;
  padding-bottom: 3px;
`;
export const SecurityButton = styled.button.attrs({
  id: "securitybutton",
})`
  width: 25%;
  height: 50px;
  display: flex;
  position: relative;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "medium", sans-serif;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.isSecurity &&
    css`
      &:hover {
        background-color: black;
      }
    `}
  border: none;
`;
export const ValidSecurityMessage = styled.span.attrs({
  id: "validsecuritymessage",
})`
  width: 100%;
  min-height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 10px;
  color: red;
  padding-bottom: 3px;
`;
export const ModifyPw = styled.button.attrs({
  id: "modifypw",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#313131")};
  cursor: pointer;
  border: none;
  margin-top: 10px;
  color: ${(props) => (props.disabled ? "#313131" : "white")};
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-family: "medium", sans-serif;
`;
export const NoticeContainer = styled.div.attrs({
  id: "noticecontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 30px;
`;

export const Notice = styled.div.attrs({
  id: "notice",
})`
  width: 150px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-family: "medium", sans-serif;
  user-select: none;
  & + &::before {
    content: "";
    position: absolute;
    left: -8px;
    bottom: 8px;
    width: 10px;
    height: 1px;
    background-color: #dadcdf;
    transform: rotate(90deg);
  }
`;
export const NoticeLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;
export const InputEach = styled.div.attrs({
  id: "inputeach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const InputIndex = styled.div.attrs({
  id: "inputindex",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 12px;
  font-family: "medium", sans-serif;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 10px;
`;
export const InputPwDiv = styled.div.attrs({
  id: "inputpwdiv",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  border: none;
  user-select: none;
  border-radius: 5px;
`;
export const InputPw = styled.input.attrs({
  id: "inputpw",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url("/images/icon/pwd.png");
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isPw &&
    css`
      border: 2px solid black;
    `}
`;
export const InputPwConfirm = styled.input.attrs({
  id: "inputpwconfirm",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url("/images/icon/pwd.png");
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isConPw &&
    css`
      border: 2px solid black;
    `}
`;
export const InputPwDivToggle = styled.button.attrs({
  id: "inputpwdivtoggle",
})`
  display: flex;
  position: absolute;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  right: 10px;
  ${(props) =>
    props.isVisible
      ? css`
          &::before {
            content: "";
            position: absolute;
            background-repeat: no-repeat;
            background-size: contain;
            right: 10px;
            margin-top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("/images/icon/eye_open.png");
            z-index: 5;
            cursor: pointer;
          }
        `
      : css`
          &::before {
            content: "";
            position: absolute;
            background-repeat: no-repeat;
            background-size: contain;
            right: 10px;
            top: -11px;
            margin-top: 5px;
            width: 15px;
            height: 15px;
            background-image: url("/images/icon/eye_close.png");
            z-index: 5;
            cursor: pointer;
          }
        `}
`;
export const ValidPwMessage = styled.span.attrs({
  id: "validpwmessage",
})`
  width: 100%;
  min-height: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 10px;
  color: red;
  padding-bottom: 3px;
`;
