import "@/styles/status.scss";

import { IoMdCheckmark } from "react-icons/io";
const RunningStatus = () => {
  return (
    <>
      <div className="status-wrap">
        <IoMdCheckmark className="text-green-500 text-2xl" />

        <div className="text-green-500 ml-1">Running</div>
      </div>
    </>
  );
};

export default RunningStatus;
