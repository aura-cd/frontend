import React from "react";
import { IoMdClose } from "react-icons/io";
import "@/styles/status.scss";
const FailedStatus = () => {
  return (
    <>
      <div className='status-wrap'>
        <IoMdClose className='text-red-500 text-2xl' />
        <div className='text-red-500 ml-1'>Failed</div>
      </div>
    </>
  );
};

export default FailedStatus;
