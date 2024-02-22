"use client";
import YamlEditor from "@focus-reactive/react-yaml";
import "@/styles/editor.scss";
const Editor = () => {
  const handleChange = ({ json, text }: any) => {
    console.log(json);
  };
  return (
    <div className='editor-wrap'>
      <YamlEditor onChange={handleChange} />
    </div>
  );
};

export default Editor;
