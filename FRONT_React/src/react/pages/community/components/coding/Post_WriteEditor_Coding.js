import React, { useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import ListItem from "@tiptap/extension-list-item";
import { Image } from "@tiptap/extension-image";
import "./../../../../styles/community/PostEditor.css";
import {
  EditorArea,
  TipTapBox,
  ToolBarContainer,
  WriteButtonsArea,
  WriteCancelButton,
  WriteSubmitButton,
} from "../../../../styles/community/Post";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosApi from "../../../../../api/AxiosApi";
import { useSelector } from "react-redux";

const lowlight = createLowlight(all);

CodeBlockLowlight.configure({
  lowlight,
});

const ToolBar = ({ editor }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  if (!editor) return null;

  const handleImageInsert = () => {
    const url = window.prompt('이미지 URL을 입력하세요');
  
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  // 드롭다운 표시/숨기기
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // 색상 변경 처리
  const handleColorChange = (color) => {
    // 색상 코드 매핑
    const colorMap = {
      black: "#000000",
      blue: "#228be6",
      red: "#fa5252",
      green: "#00C471",
      yellow: "#ffff00",
      gray: "#868e96",
    };
    const selectedColor = colorMap[color];
    editor.chain().focus().setColor(selectedColor).run(); // setColor 메서드 사용
    setDropdownVisible(false); // 색상 변경 후 드롭다운 숨김
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="toolbar">
      <div
        className="button-group"
        style={{ display: "flex", alignItems: "center" }}
      >
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_01_Bold.svg)",
          }}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_02_Italic.svg)",
          }}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        />

        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_03_UnderLine.svg)",
          }}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        />

        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_04_StrikeThrough.svg)",
          }}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        />

        {/* 색상 변경 버튼 */}
        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_05_TextColor.svg)",
            backgroundSize: "80%",
          }}
          onClick={toggleDropdown}
        />

        {/* 드롭다운 메뉴 */}
        <div className={`dropdown-menu ${isDropdownVisible ? "show" : ""}`}>
          {["black", "blue", "red", "green", "yellow", "gray"].map(
            (color, index) => (
              <button
                key={color}
                style={{
                  zIndex: "10",
                  backgroundColor: "#fff",
                  backgroundImage: `url(/images/tiptap/Editor_Toolbar_05_0${
                    index + 1
                  }_${capitalizeFirstLetter(color)}.svg)`, // 동적으로 이미지 경로 설정
                  backgroundSize: "80%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => handleColorChange(color)}
              />
            )
          )}
        </div>

        <div
          style={{
            display: "inline-block",
            height: "30px",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            margin: "0 10px",
          }}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_06_Code.svg)",
          }}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage:
              "url(/images/tiptap/Editor_Toolbar_07_CodeBlock.svg)",
          }}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_08_Quote.svg)",
          }}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        />
        <label
          htmlFor="upload-image"
          className="upload-button"
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_09_Image.svg)",
          }}
        />
        <input
          id="upload-image"
          accept="image/*"
          style={{ display: "none" }}
          onClick={handleImageInsert}
        />
        <div
          style={{
            display: "inline-block",
            height: "30px",
            borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
            margin: "0 10px",
          }}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_10_H1.svg)",
          }}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_11_H2.svg)",
          }}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_12_H3.svg)",
          }}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_13_UL.svg)",
          }}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_14_OL.svg)",
          }}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        />
        <button
          style={{
            backgroundImage: "url(/images/tiptap/Editor_Toolbar_15_Line.svg)",
          }}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        />
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Code,
  CodeBlock,
  Image,
];

const Post_WriteEditor_Coding = ({ title, language }) => {
  const navigate = useNavigate();
  const [editorContent, setEditorContent] = useState("");
  const [boardType, setBoardType] = useState("coding");

  const userAuth = useSelector((state) => state.auth.accesstoken);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color.configure({ types: [TextStyle.name] }), // TextStyle 확장과 연동
      Underline,
      Code,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image,
      Placeholder.configure({
        placeholder: `- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 마크다운, 단축키를 이용해서 편리하게 글을 작성할 수 있어요.
- 먼저 유사한 질문이 있었는지 검색해보세요.
- 서로 예의를 지키며 존중하는 문화를 만들어가요.
- 서비스 운영 관련 문의는 홈페이지 우측 CS 메뉴를 이용해주세요.`,
      }),
    ],
    content: "",
  });

  // cancel button
  const handleGoBack = () => {
    navigate(`/community/${boardType}`, {
      state: {
        id: boardType,
      },
    });
  };

  // submit button
  const handleSubmit = async () => {
    if (userAuth === "") {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/login");
    }

    if (!editor.getHTML().trim() || !title.trim()) {
      alert("제목과 내용을 모두 입력하세요!");
      return;
    }
    try {
      const response = await AxiosApi.writeCodingPost(
        boardType,
        title,
        language,
        editor.getHTML()
      );
      alert("내용이 성공적으로 제출되었습니다.");
      navigate(`/community/${boardType}`);
    } catch (error) {
      console.error("제출 실패:", error);
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <TipTapBox>
        <EditorArea>
          <ToolBarContainer>
            <ToolBar editor={editor} />
          </ToolBarContainer>
          <EditorContent
            style={{
              width: "100%",
              height: "calc(100% - 50px)",
              padding: "30px",
              overflowY: "auto", // 세로 스크롤 활성화
              overflowX: "hidden", // 가로 스크롤 비활성화
              boxSizing: "border-box", // 패딩 포함 계산
            }}
            editor={editor}
          />
        </EditorArea>
        <WriteButtonsArea>
          <WriteCancelButton onClick={handleGoBack}>취소</WriteCancelButton>
          <WriteSubmitButton onClick={handleSubmit}>등록</WriteSubmitButton>
        </WriteButtonsArea>
      </TipTapBox>
    </>
  );
};

export default Post_WriteEditor_Coding;
