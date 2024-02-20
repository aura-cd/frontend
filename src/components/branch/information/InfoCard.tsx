import React from "react";
import "./info.scss";
import InfoCard from "./InfoCard";
import EditorArea from "./EditorArea";
import ProgressComponent from "@/components/ProgressComponent";
const InformationContents = () => {
  return (
    <div className='cardContainer'>
      <div className='cardList'>
        <div className='row-cardContainer'>
          <h4>Image</h4>
          <h3>slslslx</h3>
        </div>

        <div className='row-cardContainer'>
          <h4>Health</h4>
          <h3>slslslx</h3>
        </div>

        <div className='row-cardContainer'>
          <h4>Age</h4>
          <h3>slslslx</h3>
        </div>
      </div>

      <div className='parameter-container'>
        <div className='parameter-row-container'>
          <div className='head'>
            <h4>CPU usage(Ave.)</h4>
          </div>
          <div className='data-container'>
            <h6>ssss</h6>
            <ProgressComponent value={22} />
          </div>
        </div>

        <div className='parameter-row-container'>
          <div className='head'>
            <h4>Mem usage(Ave.)</h4>
          </div>
          <div className='data-container'>
            <h6>ssss</h6>
            <ProgressComponent value={22} />
          </div>
        </div>

        <div className='parameter-row-container'>
          <div className='head'>
            <h4>Storage usage(Ave.)</h4>
          </div>
          <div className='data-container'>
            <h6>ssss</h6>
            <ProgressComponent value={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationContents;
