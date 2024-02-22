import React from "react";
import "./style/contents.scss";
import InfoCard from "./InfoCard";
import InfoParameter from "@/components/branch/information/InfoParameter";
const InformationContents = () => {
  return (
    <div className='container-wrap'>
      <InfoCard />
      <InfoParameter />
    </div>
  );
};

export default InformationContents;
