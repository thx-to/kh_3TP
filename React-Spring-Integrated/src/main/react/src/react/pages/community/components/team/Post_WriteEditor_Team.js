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
import Subscript from "@tiptap/extension-subscript";
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
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
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
  Subscript,
];

const Post_WriteEditor_Team = ({ title, team }) => {
  const navigate = useNavigate();
  const [editorContent, setEditorContent] = useState(`
    <p><b>[개발 프로젝트 모집 내용 예시]</b></p>
        <ul>
          <li>프로젝트 주제 : </li>
          <li>프로젝트 목표 : </li>
          <li>예상 일정(횟수) : </li>
          <li>예상 커리큘럼 : </li>
          <li>예상 모집인원 : </li>
          <li>프로젝트 소개 : </li>
          <li>주의사항 : </li>
          <li>지원 방법(이메일, 카카오 오픈채팅방, 구글폼 등) : </li>
        </ul>
    `);
  const [boardType, setBoardType] = useState("team");

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
      Subscript,
    ],
    content: editorContent,
    onUpdate: ({ editor }) => {
      // 에디터 내용이 변경될 때마다 editorContent 상태 업데이트
      setEditorContent(editor.getHTML());
    },
  });

  // cancel button
  const handleGoBack = () => {
    navigate(`/community/${boardType}`);
  };

  // submit button
  const handleSubmit = async () => {
    if (userAuth === "") {
      alert("로그인이 필요한 서비스입니다.");
      return navigate("/login");
    }

    // 에디터 내용이 비어 있거나 제목이 없으면 경고 표시
    if (!editorContent || !title) {
      console.log(title);
      console.log(editorContent);
      alert("제목과 내용을 모두 입력하세요!");
      return;
    }
    try {
      const response = await AxiosApi.writeTeamPost(
        boardType,
        title,
        team,
        editorContent
      );
      alert("내용이 성공적으로 제출되었습니다.");
      navigate(`/community/${boardType}`, {
        state: {
          id: boardType,
        },
      });
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
            className="tiptap-editor"
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

export default Post_WriteEditor_Team;
