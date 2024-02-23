import "@/styles/status.scss";

import { BsQuestion } from "react-icons/bs";
const UnknownStatus = () => {
  return (
    <>
      <div className="status-wrap">
        <BsQuestion className="text-gray-500 text-2xl" />

        <div className="text-gray-500 ml-1">Unknown</div>
      </div>
    </>
  );
};

export default UnknownStatus;
