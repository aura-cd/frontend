"use client";
import YamlEditor from "@focus-reactive/react-yaml";
import React from "react";

const Editor = () => {
  const handleChange = ({ json, text }: any) => {
    console.log(json);
  };
  return (
    <div>
      <YamlEditor onChange={handleChange} />
    </div>
  );
};

export default Editor;
