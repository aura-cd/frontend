import Breadcrumb from "@/components/Breadcrumb";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import React from "react";
import ButtonArea from "../../components/ButtonArea";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <div>
        <div>
          <ButtonArea />
          <DataTableComponent pageSize={5} />
        </div>
      </div>
    </div>
  );
};

export default page;
