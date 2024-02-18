import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import React from "react";
import ButtonArea from "../../components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import BranchTab from "@/components/branch/BranchTab";

const page = () => {
  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        <DataTableComponent pageSize={5} />
        <BranchTab />
      </div>
    </div>
  );
};

export default page;
