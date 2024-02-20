import React from "react";
import "./style/contents.scss";
import InfoCard from "./InfoCard";
import InfoParameter from "./InfoParameter";
const InformationContents = () => {
  return (
    <div className='wrap'>
      <InfoCard />
      <InfoParameter />
    </div>
  );
};

export default InformationContents;
