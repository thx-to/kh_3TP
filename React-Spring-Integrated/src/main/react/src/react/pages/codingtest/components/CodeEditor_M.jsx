import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { CodeEditorStyles as CssWrapper } from "../../../styles/codingtest/CodeEditorStyles_M";

const CodeEditor_M = ({
  codeLanguage,
  value,
  setValue,
  handleSubmitButtonClick,
  handleCancelButtonClick,
  isConnectedRef,
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [language, setLanguage] = useState("Java");

  /**
   * [설명]
   * Monaco Editor를 사용할 때 automaticLayout=true로 설정한 경우
   * 종종 ResizeObserver loop limit exceeded 에러가 발생하는 버그를 해결하기 위해 적용
   * https://github.com/microsoft/vscode/issues/183324
   *
   * [동작]
   * 브라우저에 할당된 ResizeObserver를 최적화된 버전으로 재할당
   */
  useEffect(() => {
    // Save a reference to the original ResizeObserver
    const OriginalResizeObserver = window.ResizeObserver;

    // Create a new ResizeObserver constructor
    window.ResizeObserver = function (callback) {
      const wrappedCallback = (entries, observer) => {
        window.requestAnimationFrame(() => {
          callback(entries, observer);
        });
      };

      // Create an instance of the original ResizeObserver
      // with the wrapped callback
      return new OriginalResizeObserver(wrappedCallback);
    };

    // Copy over static methods, if any
    for (let staticMethod in OriginalResizeObserver) {
      if (OriginalResizeObserver.hasOwnProperty(staticMethod)) {
        window.ResizeObserver[staticMethod] =
          OriginalResizeObserver[staticMethod];
      }
    }
  }, []);

  return (
    <CssWrapper>
      <div>
        <span>CODE EDITOR</span>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              style={{
                color: "white",
                fontSize: "12px",
                width: "120px",
                height: "30px",
              }}
              value={language}
              onChange={(event) => {
                setLanguage(event.target.value);
              }}
            >
              <MenuItem style={{ fontSize: "12px" }} value={"Java"}>
                Java
              </MenuItem>
            </Select>
          </FormControl>
          <button
            style={{ display: isConnectedRef.current ? "none" : "" }}
            className="run-btn"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={handleSubmitButtonClick}
          >
            <img src="/images/icon/run_code.png" />
            <p style={{ display: isButtonHovered ? "inline-block" : "none" }}>
              코드를 실행합니다.
            </p>
          </button>
          <button
            style={{ display: isConnectedRef.current ? "" : "none" }}
            className="stop-btn"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onClick={handleCancelButtonClick}
          >
            <img src="/images/icon/stop_code.png" />
            <p style={{ display: isButtonHovered ? "inline-block" : "none" }}>
              실행을 중지합니다.
            </p>
          </button>
        </div>
      </div>
      <Editor
        height="calc(100% - 49px)"
        defaultLanguage={codeLanguage.toLowerCase()}
        onMount={(editor) => {
          editor.focus();
        }}
        theme="vs-dark"
        value={value}
        onChange={(value) => setValue(value)}
        options={{
          scrollBeyondLastLine: false, // 마지막 줄 이후로 스크롤 X
          tabSize: 2, // 탭 크기 설정 (2칸)
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
        }}
      />
    </CssWrapper>
  );
};

export default CodeEditor_M;
