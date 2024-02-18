import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import React from "react";
import ButtonArea from "../../components/ButtonArea";
import LastPath from "@/components/path/LastPath";

const page = () => {
  return (
    <div className='container'>
      <Pankuzu />
      <div>
        <div>
          <ButtonArea />
          <DataTableComponent pageSize={5} />
          <LastPath />
        </div>
      </div>
    </div>
  );
};

export default page;
