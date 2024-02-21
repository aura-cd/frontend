import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import React from "react";
import ButtonArea from "../../components/ButtonArea";
import LastPath from "@/components/path/LastPath";

const page = () => {
  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        <DataTableComponent pageSize={5} />
      </div>
    </div>
  );
};

export default page;
