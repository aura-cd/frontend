import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "@/styles/status.scss";
const SucceededStatus = () => {
  return (
    <>
      <div className='status-wrap'>
        <IoMdCheckmark className='text-blue-400 text-2xl' />
        <div className='text-blue-400 ml-1'>Succeeded</div>
      </div>
    </>
  );
};

export default SucceededStatus;
