import styled, {css, keyframes} from "styled-components";
import {Link} from "react-router-dom";

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
  id: "floatingtitle",
})`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-bottom: 30px;
  font-size: 30px;
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
  margin-bottom: 10px;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 10px auto;
  background-position: 20px center;
  background-image: url(${(props) => props.icon});
  &:focus {
    outline: none;
  }
`;
export const InputExtra = styled.div.attrs({
  id: "inputextra",
})`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  margin-top: 10px;
`;
export const InputExtraItem1 = styled.div.attrs({
  id: "inputextraitem1",
})`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
`;
export const InputExtraItem2 = styled.div.attrs({
  id: "inputextraitem2",
})`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  margin-left: -50px;
`;
export const InputExtraItem3 = styled.div.attrs({
  id: "inputextraitem3",
})`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  gap: 5px;
`;
export const InputExtraItemCheckBox = styled.input.attrs({
  id: "inputextraitemcheckbox",
})`
  appearance: none;
  width: 14px;
  height: 14px;
  display: flex;
  position: absolute;
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
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        background-color: #313131;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`;
export const InputExtraItemLeftP = styled.p.attrs({
  id: "inputextraitemleftp",
})`
  margin-bottom: 1px;
  margin-left: 20px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  font-size: 12px;
  color: #313131;
`;
const checkmark = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(45deg);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1) rotate(45deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(45deg);
  }`;

export const InputExtraItemRightP = styled.p.attrs({
  id: "inputextraitemrightp",
})`
  width: 80px;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  user-select: none;
  font-size: 12px;
  color: #313131;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  & + &::before {
    content: "";
    position: absolute;
    left: -18px;
    bottom: 7px;
    width: 11px;
    height: 1px;
    background-color: #313131;
    transform: rotate(90deg);
  }
`;
export const SignIn = styled.button.attrs({
  id: "signin",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  color: ${(props) => (props.disabled ? "black" : "white")};
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#313131")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-family: "medium", sans-serif;
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
  background-color: #f1f1f1;
  border: none;
  margin-top: 10px;
  color: black;
  font-size: 14px;
  font-family: "medium", sans-serif;
  transition: all 0.3s ease-in-out;
`;
export const ThirdLogin = styled.div.attrs({
  id: "thirdlogin",
})`
  width: 70%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  border: none;
  margin-top: 20px;
`;
export const ThirdLoginItem = styled.div.attrs({
  id: "thirdloginitem",
})`
  width: 50px;
  height: 50px;
  display: flex;
  position: relative;
  user-select: none;
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.icon});
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
