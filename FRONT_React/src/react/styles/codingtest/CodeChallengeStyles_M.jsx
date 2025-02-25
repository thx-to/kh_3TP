import styled from "styled-components";

export const CodeChallengeStyles = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0px;
  width: 100%;
  height: 100vh;
  font-family: "regular", sans-serif;
  overflow-x: hidden;

  header1 {
    box-sizing: border-box;
    background-color: #1e1e1e;
    position: fixed;
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgba(256, 256, 256, 0.2);
    padding: 5px 20px;
    z-index: 5;
    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .logo-container {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .logo {
          display: inline-block;
          width: 30px;
          height: 30px;
          background-image: url("/images/logo/logo_white.png");
          background-size: contain;
        }
      }
      .leave-page-btn {
        width: 80px;
        height: 30px;
        background-color: #1e1e1e;
        border: 1px solid white;
        border-radius: 5px;
        cursor: pointer;
        color: white;
        font-size: 12px;
        font-family: "bold", sans-serif;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }

  header2 {
    background-color: #1e1e1e;
    position: fixed;
    width: 96%;
    top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgba(256, 256, 256, 0.2);
    padding: 5px 20px;
    z-index: 5;
    & {
      display: flex;
      .menu-tree-indicator {
        display: flex;
        align-items: center;

        font-family: "regular", sans-serif;
        font-size: 14px;
        margin-bottom: 2px;
        color: white;
        & > span:nth-child(2)::before,
        & > span:nth-child(2)::after {
          content: "〉";

          margin: 0 6px 0 14px;
        }

        span:last-child {
          font-family: "bold";
        }
      }
    }
  }

  main {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 100px);

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 100%;

      border-right: 1px solid rgba(256, 256, 256, 0.2);

      @media (max-width: 767px) {
        min-width: 100%;
      }

      & > div:first-child {
        flex: 1;

        @media (max-width: 767px) {
          & > section {
            min-height: 300px;
          }
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        height: 300px;
        width: 100%;
      }
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;

      width: 480px;

      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }

  footer {
    height: 20px;
  }
`;
