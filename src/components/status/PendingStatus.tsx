import React from "react";
import { LuLoader } from "react-icons/lu";
import "@/styles/status.scss";
const PendingStatus = () => {
  return (
    <>
      <div className='wrap'>
        <LuLoader className='text-orange-500 text-2xl' />

        <div className='text-orange-500'>Pending</div>
      </div>
    </>
  );
};

export default PendingStatus;
