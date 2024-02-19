import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import "@/styles/status.scss";
const FailedStatus = () => {
  return (
    <>
      <div className='wrap'>
        <IoCloseOutline className='text-red-500 text-2xl' />

        <div className='text-red-500'>Failed</div>
      </div>
    </>
  );
};

export default FailedStatus;
