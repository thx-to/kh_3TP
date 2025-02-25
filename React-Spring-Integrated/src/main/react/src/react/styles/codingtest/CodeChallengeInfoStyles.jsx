import styled from "styled-components";

export const CodeChallengeInfoStyles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  .challenge-title {
    & > div:first-child {
      color: white;
      background-color: black;
      height: 39px;
    }
    & > div:nth-child(2) {
      border-bottom: 1px solid rgba(256, 256, 256, 0.2);
      color: white;
    }
    & span {
      display: inline-block;
      padding: 7px 30px;
      font-family: "bold", sans-serif;
      font-size: 16px;
      white-space: pre-wrap;
    }
    & > div:last-child p {
      padding: 10px 30px;
      font-family: "medium", sans-serif;
      font-size: 14px;
    }
  }

  .challenge-desc {
    & > div:first-child {
      color: white;
      background-color: black;
      height: 39px;
    }
    & > div:nth-child(2) {
      border-bottom: 1px solid rgba(256, 256, 256, 0.2);
      color: white;
    }
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:last-child {
      flex-direction: column;
      align-items: start;
    }
    & span {
      display: inline-block;
      padding: 7px 30px;
      font-family: "bold", sans-serif;
      font-size: 16px;
      white-space: pre-wrap;
    }
    & span:not(.challenge-desc > div:first-child > span) {
      padding-bottom: 3px;
      font-family: "bold", sans-serif;
      font-size: 14px;
    }
    & > div:last-child p {
      width: 100%;
      padding: 5px 30px;
      font-family: "regular", sans-serif;
      font-size: 14px;
      border-bottom: 1px solid rgba(256, 256, 256, 0.2);
      padding-bottom: 10px;
    }
    & > div:last-child p:last-of-type {
      border: 0;
    }
    & > div:last-child span {
      display: inline-block;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .challenge-io-example {
    & > div:first-child {
      color: white;
      background-color: black;
      height: 39px;
      & > span {
        display: inline-block;
        padding: 7px 30px;
        font-family: "bold", sans-serif;
        font-size: 16px;
        white-space: pre-wrap;
      }
    }
    & > div:nth-child(2) {
      & table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
      }
      & th,
      & td {
        padding: 6px 15px;
        border-bottom: 1px solid rgba(256, 256, 256, 0.2);
        text-align: center;
        color: white;
        font-family: "regular", sans-serif;
        font-size: 14px;
      }
      & th:first-child,
      & th:nth-child(2) {
        border-right: 1px solid rgba(256, 256, 256, 0.2);
      }
      & td:first-child {
        border-right: 1px solid rgba(256, 256, 256, 0.2);
      }
      & td:first-child {
        border-right: 1px solid rgba(256, 256, 256, 0.2);
      }
      & th {
        background: rgba(256, 256, 256, 0.2);
        color: rgba(256, 256, 256, 0.6);
        font-family: "medium", sans-serif;
        font-size: 14px;
      }
      & td:nth-child(3) {
        border-right: none;
      }
      & td:nth-child(2) {
        border-right: 1px solid rgba(256, 256, 256, 0.2);
      }
    }
  }
`;
