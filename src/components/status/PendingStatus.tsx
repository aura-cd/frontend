import React from "react";
import { LuLoader } from "react-icons/lu";
import "@/styles/status.scss";
const PendingStatus = () => {
  return (
    <>
      <div className='status-wrap'>
        <LuLoader className='text-orange-500 text-2xl' />

        <div className='text-orange-500 ml-1'>Pending</div>
      </div>
    </>
  );
};

export default PendingStatus;
