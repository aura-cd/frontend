import ProgressComponent from "@/components/ProgressComponent";
import React from "react";
import "./style/InfoParameter.scss";
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaMemory } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";

const InfoParameter = () => {
  return (
    <div className='parameter-container'>
      <div className='parameter-row'>
        <div className='head'>
          <div className='icons'>
            <HiMiniCpuChip />
          </div>
          <h4>CPU usage(Ave.)</h4>
        </div>
        <div className='data-container'>
          <h6>50% (150m/300m)</h6>
          <ProgressComponent value={22} />
        </div>
      </div>
      <div className='parameter-row'>
        <div className='head'>
          <div className='icons'>
            <FaMemory />
          </div>
          <h4>Mem usage(Ave.)</h4>
        </div>
        <div className='data-container'>
          <h6>50% (150m/300m)</h6>
          <ProgressComponent value={22} />
        </div>
      </div>
      <div className='parameter-row'>
        <div className='head'>
          <div className='icons'>
            <GrStorage />
          </div>
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
