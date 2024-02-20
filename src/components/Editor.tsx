"use client";
import YamlEditor from "@focus-reactive/react-yaml";
import React from "react";
import "@/styles/editor.scss";
const Editor = () => {
  const handleChange = ({ json, text }: any) => {
    console.log(json);
  };
  return (
    <div className='wrap'>
      <YamlEditor onChange={handleChange} />
    </div>
  );
};

export default Editor;
