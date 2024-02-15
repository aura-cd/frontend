import GeneralTable from "@/components/Table/GeneralTable";
import React from "react";
import { TableData } from "@/mock/TableData";
const page = () => {
  return (
    <>
      <GeneralTable title={"General Table"} TableData={TableData} />
    </>
  );
};

export default page;
