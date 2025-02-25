import styled from "styled-components";

export const CodeChallengeStyles = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0 0px;
  width: 100vw;
  height: 100vh;
  font-family: "regular", sans-serif;
  overflow-y: hidden;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgba(256, 256, 256, 0.2);
    padding: 5px 30px;
    & > div:first-child {
      display: flex;

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

    & > div:last-child {
      display: flex;
      align-items: center;

      * {
        font-family: "regular", sans-serif;
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

  main {
    display: flex;
height: 100%;
    min-height: calc(100vh - 100px);

    & > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: calc(100% - 480px);
      min-width: 440px;
      border-right: 1px solid rgba(256, 256, 256, 0.2);

      & > div:first-child {
        flex: 1;
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;

        height: 300px;
      }
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;

      width: 480px;
    }
  }

  footer {
    height: 20px;
  }

  @media (max-width: 767px) {
    header {
      .logo {
        width: 40px !important;
        height: 40px !important;
      }

      .menu-tree-indicator {
        font-size: 16px !important;
      }

      & > div:first-child .menu-tree-indicator > span:nth-child(2)::before,
      & > div:first-child .menu-tree-indicator > span:nth-child(2)::after {
        content: "〉";
        margin: 0 0 0 8px;
      }

      .leave-page-btn {
        width: 80px !important;
        height: 40px !important;
      }
    }
    main {
      flex-direction: column-reverse;

      & > div {
        width: 100% !important;
      }

      & > div:first-child > div:first-child {
        min-height: 480px;
      }

      & > div:first-child > div:last-child {
        height: 240px;
      }
    }
  }

`;
