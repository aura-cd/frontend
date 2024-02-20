import ProgressComponent from "@/components/ProgressComponent";
import React from "react";
import "./style/InfoParameter.scss";
const InfoParameter = () => {
  return (
    <div className='parameter-container'>
      <div className='parameter-row'>
        <div className='head'>
          <h4>icon </h4>
          <h4>CPU usage(Ave.)</h4>
        </div>
        <div className='data-container'>
          <h6>50% (150m/300m)</h6>
          <ProgressComponent value={22} />
        </div>
      </div>
      <div className='parameter-row'>
        <div className='head'>
          <h4>icon </h4>
          <h4>CPU usage(Ave.)</h4>
        </div>
        <div className='data-container'>
          <h6>50% (150m/300m)</h6>
          <ProgressComponent value={22} />
        </div>
      </div>
      <div className='parameter-row'>
        <div className='head'>
          <h4>icon </h4>
          <h4>CPU usage(Ave.)</h4>
        </div>
        <div className='data-container'>
          <h6>50% (150m/300m)</h6>
          <ProgressComponent value={22} />
        </div>
      </div>
    </div>
  );
};

export default InfoParameter;
