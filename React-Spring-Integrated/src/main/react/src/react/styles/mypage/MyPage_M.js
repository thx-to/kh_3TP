import styled, { css } from "styled-components";

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

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  gap: 30px;
  padding-bottom: 25px;
  margin-top: 70px;
`;

export const AccountManagerContainer = styled.div.attrs({
  id: "accountmanagercontainer",
})`
  width: 100%;
  padding: 30px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f1f1f1;
`;

export const ProfileImage = styled.div.attrs({
  id: "profileimage",
})`
  width: 120px;
  height: 120px;
  display: flex;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
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
export const UserNickName = styled.div.attrs({
  id: "usernickname",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px !important;
  margin-bottom: 5px;
  font-size: 18px;
  font-family: "bold", sans-serif;
`;

export const UserEmail = styled.div.attrs({
  id: "useremail",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  font-size: 12px;
  font-family: "regular", sans-serif;
  color: rgba(0, 0, 0, 0.4);
`;

export const UserSignupDate = styled.div.attrs({
  id: "usersignupdate",
})`
  font-family: "regular", sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

export const ButtonContainer = styled.div.attrs({
  id: "buttoncontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;
export const CancelButton = styled.div.attrs({
  id: "cancelbutton",
})`
  margin-top: 20px;
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #333333;
  font-size: 14px;
  font-family: "bold", sans-serif;
  cursor: pointer;
`;

export const ModifyButton = styled.div.attrs({
  id: "modifybutton",
})`
  margin-top: 20px;
  width: 150px;
  height: 50px;
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

export const MobileEachTitle = styled.div.attrs({
  id: "mobileeachtitle",
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

export const CenterAccountContainer = styled.div.attrs({
  id: "centeraccountcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const CenterContainerEach = styled.div.attrs({
  id: "centercontainereach",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CenterContainerTitle = styled.div.attrs({
  id: "centercontainertitle",
})`
  position: relative;
  display: flex;
  font-family: "bold", sans-serif;
  font-size: 28px;
  margin-left: 20px;
`;
export const CenterContentsContainer = styled.div.attrs({
  id: "centercontentscontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  margin-top: 13.75px;
  border-radius: 20px;
  border: 1px solid #f1f1f1;
  padding: 30px 30px;
  gap: 20px;
`;
export const AccountEachContainer = styled.div.attrs({
  id: "AccountEachContainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 10px;
`;
export const InputLabel = styled.div.attrs({
  id: "inputlabel",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "medium", sans-serif;
  font-size: 14px;
`;
export const IDInput = styled.input.attrs({
  id: "IDInput",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/user.png");
  &:focus {
    outline: none;
  }
`;
export const NicknameInput = styled.input.attrs({
  id: "nicknameinput",
})`
  width: 80%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/nickname.png");
  &:focus {
    outline: none;
  }
`;
export const InputContainer = styled.div.attrs({
  id: "inputcontainer",
})`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  user-select: none;
  flex-direction: row;
  margin-bottom: 10px;
  font-family: "medium", sans-serif;
  gap: 20px;
`;
export const EmailInput = styled.input.attrs({
  id: "emailinput",
})`
  width: 80%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 15px auto;
  background-position: 15px center;
  background-image: url("/images/icon/mail.png");
  &:focus {
    outline: none;
  }
`;
export const SubmitButton = styled.button.attrs({
  id: "submitbutton",
})`
  width: 80px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "medium", sans-serif;
  font-size: 15px;
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#313131")};
  color: ${(props) => (props.disabled ? "#313131" : "white")};
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  ${(props) =>
    props.enabled &&
    css`
      &:hover {
        background-color: black;
      }
    `}
  border: none;
`;
export const PasswordInput = styled.input.attrs({
  id: "nicknameinput",
})`
  width: 80%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #313131;
  font-family: "medium", sans-serif;
  font-size: 13px;
  padding-left: 40px;
  background-repeat: no-repeat;
  background-size: 12px auto;
  background-position: 15px center;
  background-image: url("/images/icon/pwd.png");
  &:focus {
    outline: none;
  }
`;
export const AlertContainer = styled.div.attrs({
  id: "alertcontainer",
})`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f1f1f1;
`;
export const AlertTitleArea = styled.div.attrs({
  id: "alerttitlearea",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
`;
export const AlertTitle = styled.div.attrs({
  id: "alerttitle",
})`
  width: 100%;
  display: flex;
  position: relative;
  font-size: 20px;
  font-family: "bold", sans-serif;
`;
export const AlertText = styled.div.attrs({
  id: "alerttext",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "regular", sans-serif;
`;
export const CenterAlertContentsEach1 = styled.div.attrs({
  id: "centeralertcontentseach1",
})`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
export const CenterAlertContentsEach2 = styled.div.attrs({
  id: "centeralertcontentseach2",
})`
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    margin-bottom: 23px;
    height: 2px;
    background-color: #f1f1f1;
    transform: scaleY(0.5);
  }
`;

export const CenterAlertContentsInner = styled.div.attrs({
  id: "centeralertcontentsinner",
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const SNSContainer = styled.div.attrs({
  id: "snscontainer",
})`
  width: 100%;
  padding: 20px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f1f1f1;
`;

export const CenterSNSContentsEach1 = styled.div.attrs({
  id: "centersnscontentseach1",
})`
  display: flex;
`;

export const CenterSNSContentsEach2 = styled.div.attrs({
  id: "centersnscontentseach2",
})`
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    margin-top: 15px;
    margin-bottom: 15px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    transform: scaleY(0.5);
  }
`;
export const CenterSNSContentsEach3 = styled.div.attrs({
  id: "centersnscontentseach3",
})`
  display: flex;
  flex-direction: column;
  &::before {
    content: "";
    margin-bottom: 15px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    transform: scaleY(0.5);
  }
`;

export const CenterSNSContentsInner = styled.div.attrs({
  id: "centersnscontentsinner",
})`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

export const SNSIcon = styled.div.attrs({
  id: "snsicon",
})`
  width: 60px;
  height: 60px;
  display: flex;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.icon});
`;

export const SubjectContainer = styled.div.attrs({
  id: "Subjectcontainer",
})`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: row;
  align-items: top;
  justify-content: center;
  gap: 25px;
`;

export const Messages = styled.div.attrs({
  id: "messages",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "regular", sans-serif;
  font-size: 12px;
`;
