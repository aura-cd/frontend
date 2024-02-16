"use client";
import YamlEditor from "@focus-reactive/react-yaml";
import React from "react";

const Editor = () => {
  const [text, setText] = React.useState("");
  const handleChange = (text: any) => {
    setText(text);
  };
  return (
    <div>
      <YamlEditor json={text} onChange={handleChange} />
    </div>
  );
};

export default Editor;
