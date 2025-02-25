import { useState, useRef, useCallback } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Base64 } from "js-base64";

import CodeEditor_M from "../components/CodeEditor_M";
import ExecutionResults_M from "../components/ExecutionResults_M";
import CodeChallengeInfo_M from "../components/CodeChallengeInfo_M";
import useSse from "../customhook/useSse";
import AxiosApi from "../../../../api/AxiosApi";

import { CodeChallengeStyles as CssWrapper } from "../../../styles/codingtest/CodeChallengeStyles_M";

const EDITOR_DEFAULT_VALUE = {
  java: "public class Main {\n\tpublic static void main(String[] args) {\n\t\t// 코드를 입력하세요\n\t}\n}",
  c: "#include<stdio.h>\n\nvoid main() {\n\t// 코드를 입력하세요\n}",
};

const CodeChallenge_M = () => {
  const navigate = useNavigate();

  const [headerTitle, setHeaderTitle] = useState("Loading...");

  // 에디터 인풋 value
  const [codeEditorValue, setCodeEditorValue] = useState(
    EDITOR_DEFAULT_VALUE["java"]
  );

  // 문제 번호
  const { questionId } = useParams();

  // 코드 실행 작업의 고유 식별자
  const jobIdRef = useRef(null);

  // 코드 실행 결과
  const [results, setResults] = useState(null);

  // SSE 연결이 반복되지 않도록 useCallback 사용
  const handleOpen = useCallback((numOfTestcase) => {
    const resultToUpdate = {};
    for (let i = 1; i <= numOfTestcase; i++) resultToUpdate[i] = {};
    setResults(resultToUpdate);
  }, []);

  const handleMessage = useCallback((data) => {
    console.log("Testcase Result:", data);

    // 컴파일 & 런타임 에러 시
    if (!data.success && data.detail) {
      setResults((prev) => ({
        ...prev,
        [data.idx]: {
          success: data.success,
          error: data.error,
          detail: data.detail,
        },
      }));
    }
    // 테스트케이스 통과 시
    else if (data.success) {
      setResults((prev) => ({
        ...prev,
        [data.idx]: {
          success: data.success,
          memoryUsage: data.memoryUsage,
          runningTime: data.runningTime,
        },
      }));
    }
    // 테스트케이스 탈락 시
    else if (!data.success && !data.error && !data.detail) {
      setResults((prev) => ({
        ...prev,
        [data.idx]: {
          success: data.success,
          memoryUsage: data.memoryUsage,
          runningTime: data.runningTime,
        },
      }));
    }
  }, []);

  const handleError = useCallback((errorMessage) => {
    jobIdRef.current = null;
    setResults(null);
    alert(errorMessage);
  }, []);

  const handleComplete = useCallback(() => {
    jobIdRef.current = null;
    alert("채점이 완료되었습니다.");
  }, []);

  const [isConnectedRef, connect] = useSse({
    jobId: jobIdRef.current,
    onOpen: handleOpen,
    onMessage: handleMessage,
    onError: handleError,
    onComplete: handleComplete,
  });

  const handleSubmitButtonClick = async (e) => {
    e.preventDefault();

    if (jobIdRef.current) {
      alert(
        "현재 해당 문제에 대한 채점이 진행 중 입니다. 실행을 중단하고 다시 시도해주십시오."
      );
      return;
    }

    const submitResponseData = await AxiosApi.submitCode({
      codeLanguage: "JAVA",
      code: Base64.encode(codeEditorValue),
      questionId: questionId,
    });

    // 토큰 재발급 과정임
    if (submitResponseData === null) return;

    // 조건문 내부 값이 undefined면 falsy 값
    if (!submitResponseData["jobId"]) {
      const errorMessage = submitResponseData["error"];
      handleError(errorMessage);
      return;
    }

    jobIdRef.current = submitResponseData["jobId"];
    setResults(null);
    connect();
  };

  const handleCancelButtonClick = async (e) => {
    e.preventDefault();

    if (!isConnectedRef.current) {
      alert("현재 진행 중인 채점 작업이 없습니다.");
      return;
    }

    const jobIdToCancel = jobIdRef.current;
    jobIdRef.current = null;
    setResults(null);
    connect();

    const cancelJobResponseData = await AxiosApi.cancelJob(jobIdToCancel);
    if (!cancelJobResponseData["success"]) {
      const errorMessage = cancelJobResponseData["error"];
      handleError(errorMessage);
      return;
    }

    alert("채점이 중단되었습니다.");
  };

  return (
    <CssWrapper>
      <header1>
        <div>
          <div className="logo-container">
            <Link className="logo" to="/" />
          </div>
          <div>
            <button
              className="leave-page-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              나가기
            </button>
          </div>
        </div>
      </header1>
      <header2>
        <div className="menu-tree-indicator">
          <span
            onClick={() => navigate("/codingtest")}
            style={{ cursor: "pointer" }}
          >
            coding test
          </span>
          <span
            onClick={() => navigate("/codingtest/practice")}
            style={{ cursor: "pointer" }}
          >
            practice
          </span>
          <span>{headerTitle}</span>
        </div>
      </header2>

      <main>
        <div>
          <CodeEditor_M
            codeLanguage="java"
            value={codeEditorValue}
            setValue={setCodeEditorValue}
            handleSubmitButtonClick={handleSubmitButtonClick}
            handleCancelButtonClick={handleCancelButtonClick}
            isConnectedRef={isConnectedRef}
          />
          <ExecutionResults_M results={results} />
        </div>
        <div>
          <CodeChallengeInfo_M
            setHeaderTitle={setHeaderTitle}
            setCodeEditorValue={setCodeEditorValue}
          />
        </div>
      </main>
      {/* <footer></footer> */}
    </CssWrapper>
  );
};

export default CodeChallenge_M;
