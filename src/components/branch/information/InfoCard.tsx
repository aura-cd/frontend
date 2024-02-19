import React from "react";
import "./info.scss";
import InfoCard from "./InfoCard";
import EditorArea from "./EditorArea";
const InformationContents = () => {
  return (
    <div className='wrap'>
      <InfoCard />
      <EditorArea />
    </div>
  );
};

export default InformationContents;
