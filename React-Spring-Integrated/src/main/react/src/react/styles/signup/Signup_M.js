import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: flex-start;
  align-items: center;
`;
export const TopBarContainer = styled.div.attrs({
  id: "topbarcontainer",
})`
  width: 100%;
  height: 65px;
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;
export const TopBar = styled.div.attrs({
  id: "topbar",
})`
  width: 100%;
  height: 100%;
`;
export const LogoContainer = styled.div.attrs({
  id: "logocontainer",
})`
  margin-left: 18px;
  width: 110px;
  height: 65px;
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  position: relative;
  align-items: center;
`;
export const Logo = styled.div.attrs({
  id: "logo",
})`
  width: 100%;
  height: 30px;
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
  height: calc(100vh - 65px);
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
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
  width: 100%;
  /* height: calc(100vh - 200px); */
  max-height: 80vh;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 30px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
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
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 24px;
`;

export const InputArea = styled.div.attrs({
  id: "inputarea",
})`
  width: 100%;
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
export const InputId = styled.input.attrs({
  id: "inputid",
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
  background-image: url("/images/icon/user.png");
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isUserId &&
    css`
      border: 2px solid black;
    `}
`;
export const ValidIdMessage = styled.span.attrs({
  id: "valididmessage",
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
export const InputEmailDiv = styled.div.attrs({
  id: "inputemaildiv",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: none;
  flex-direction: row;
`;

export const InputEmail = styled.input.attrs({
  id: "inputemail",
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
  background-image: url("/images/icon/mail.png");
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  ${(props) =>
    !props.isSecurityAvailable &&
    css`
      width: 100%;
    `}

  ${(props) =>
    !props.isEmail &&
    css`
      width: 100%;
    `}
    ${(props) =>
    props.isEmail &&
    css`
      border: 2px solid black;
      width: 75%;
    `}
    ${(props) =>
    !props.isEmailAvailable &&
    css`
      border: 2px solid black;
      width: 100%;
      background-color: #f1f1f1;
    `}
`;
export const InputEmailButton = styled.button.attrs({
  id: "inputemailbutton",
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
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#313131")};
  color: ${(props) => (props.disabled ? "#313131" : "white")};
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  ${(props) =>
    props.isSecurityAvailable === false &&
    css`
      display: none;
    `}
  ${(props) =>
    props.enabled &&
    css`
      &:hover {
        background-color: black;
      }
    `}
  border: none;
`;
export const InputEmailButtonDiv = styled.div.attrs({
  id: "inputemailbuttondiv",
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
export const InputEmailButtonTimer = styled.div.attrs({
  id: "inputemailbuttontimer",
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
  ${(props) =>
    props.isSecurityAvailable === false &&
    css`
      display: none;
    `}
  border: none;
`;
export const InputEmailButtonRefresh = styled.div.attrs({
  id: "inputemailbuttonrefresh",
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
  ${(props) =>
    props.isSecurityAvailable === false &&
    css`
      display: none;
    `}
  border: none;
  &::before {
    content: "";
    width: 50%;
    height: 50%;
    background-repeat: no-repeat;
    background-size: 10px 10px;
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
    background-color: #f1f1f1;
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
export const InputSecurityDiv = styled.div.attrs({
  id: "inputsecuritydiv",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  border-radius: 5px;
  border: none;
  flex-direction: row;
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
  background-image: url("/images/icon/mail.png");
  &:focus {
    outline: none;
  }
`;
export const InputSecurityButton = styled.button.attrs({
  id: "inputsecuritybutton",
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
  &:hover {
    background-color: black;
  }
`;
export const ValidSecurityMessage = styled.span.attrs({
  id: "validesecuritymessage",
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
export const InputNickName = styled.input.attrs({
  id: "inputuser",
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
  background-image: url("/images/icon/nickname.png");
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.isName &&
    css`
      border: 2px solid black;
    `}
`;
export const ValidNameMessage = styled.span.attrs({
  id: "validnamemessage",
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

export const InputExtraContainer = styled.div.attrs({
  id: "inputextracontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 30px;
  gap: 5px;
`;
export const InputExtra = styled.div.attrs({
  id: "inputextra",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
export const InputExtraAll = styled.div.attrs({
  id: "inputextraall",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-bottom: 14px;
  &::after {
    content: "";
    position: absolute;
    top: 30px;
    width: 100%;
    height: 1px;
    background-color: #313131;
  }
`;
export const InputExtraItemCheckBox = styled.input.attrs({
  id: "inputextraitemcheckbox",
})`
  appearance: none;
  width: 13px;
  height: 13px;
  display: flex;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  left: 0px;
  bottom: 2.5px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;
  &:hover {
    border-color: black;
  }
  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: "";
        position: relative;
        width: 9px;
        height: 9px;
        background-color: #313131;
        border-radius: 50%;
      }
    `}
`;
export const InputExtraItemP = styled.p.attrs({
  id: "inputextraitemleftp",
})`
  width: 100%;
  margin-left: 10px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 14px;
  color: #313131;
  padding-left: 10px;
  margin-top: 0px;
`;
export const ExtraLink = styled(Link).attrs({
  id: "extralink",
})`
  text-decoration: underline;
  text-underline-offset: 3px;
  color: black;
  font-family: "bold", sans-serif;
  display: inline;
  position: relative;
  margin-right: 4px;
  background-color: transparent;
`;
export const ButtonArea = styled.div.attrs({
  id: "buttonarea",
})`
  width: 100%;
`;

export const SignUp = styled.button.attrs({
  id: "signup",
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  font-size: 14px;
  font-family: "medium", sans-serif;
  color: ${(props) => (props.disabled ? "black" : "white")};
  transition: all 0.3s ease-in-out;
  margin-bottom: 30px;
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
