import "@/styles/status.scss";

import { IoMdClose } from "react-icons/io";
const FailedStatus = () => {
  return (
    <>
      <div className="status-wrap">
        <IoMdClose className="text-red-500 text-2xl" />
        <div className="text-red-500 ml-1">Failed</div>
      </div>
    </>
  );
};

export default FailedStatus;
