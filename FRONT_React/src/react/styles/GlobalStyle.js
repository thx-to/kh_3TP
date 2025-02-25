import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${Fonts}

  *{
    box-sizing : border-box;
    margin: 0;
    padding: 0;
  }
  /* h1, h2, h3 {
    font-family:'extrabold', sans-serif;
  }
  div {
    font-family:'bold', sans-serif;
  }
  button {
    font-family:'bold', sans-serif;
  }*/
  p {
    font-family:'regular', sans-serif;
    font-size: 14px;
  } 

  pre {
  background: #2e2b29; /* 기본 배경색 */
  border-radius: 0.5rem; /* 모서리 라운딩 */
  color: white; /* 기본 텍스트 색상 */
  font-family: "JetBrainsMono", monospace; /* 폰트 설정 */
  margin: 1.5rem 0; /* 상하 여백 */
  padding: 0.75rem 1rem; /* 안쪽 여백 */
  overflow-x: auto; /* 코드 줄바꿈 방지 및 스크롤 */
}

/* pre 안의 code 기본 스타일링 */
pre code {
  background: none; /* 중복 배경 제거 */
  color: inherit; /* 상속된 텍스트 색상 */
  font-size: 0.8rem; /* 코드 폰트 크기 */
  padding: 0; /* 중복 padding 제거 */
  line-height: 1.5; /* 가독성을 위한 줄 간격 */
}

/* Lowlight.js의 클래스 스타일 추가 (GitHub 테마 기반) */
.hljs-comment,
.hljs-quote {
  color: #6a737d; /* 주석, 인용문 */
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-section {
  color: #d73a49; /* 키워드 */
  font-weight: bold;
}

.hljs-string,
.hljs-title,
.hljs-name,
.hljs-variable,
.hljs-template-variable,
.hljs-builtin-name,
.hljs-literal {
  color: #28a745; /* 문자열, 변수 */
}

.hljs-number,
.hljs-symbol,
.hljs-bullet {
  color: #005cc5; /* 숫자, 기호 */
}

.hljs-meta,
.hljs-link {
  color: #032f62; /* 메타 정보, 링크 */
}

.hljs-attribute {
  color: #6f42c1; /* 속성 */
}

.hljs-title.class_,
.hljs-type {
  color: #005cc5; /* 클래스, 타입 */
}

.hljs-tag {
  color: #22863a; /* 태그 */
}

.hljs-deletion {
  color: #b31d28; /* 삭제 텍스트 */
  background-color: #ffeef0;
}

.hljs-addition {
  color: #22863a; /* 추가 텍스트 */
  background-color: #f0fff4;
}

.hljs-emphasis {
  font-style: italic; /* 강조 */
}

.hljs-strong {
  font-weight: bold; /* 강한 강조 */
}


  
.fade-enter {
  opacity: 0.2;
  transition: opacity 0.3s ease-in;
}

.fade-enter-active {
  opacity: 1;
}

.css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
  background-color: transparent !important;
}

.css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root.Mui-selected:hover {
  background-color: rgba(0, 0, 0, 0.25) !important;
}

.css-1toxriw-MuiList-root-MuiMenu-list {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}
`;

export default GlobalStyle;
