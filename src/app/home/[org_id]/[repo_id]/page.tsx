import Breadcrumb from "@/components/Breadcrumb";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import React from "react";

const page = () => {
  return (
    <div className='container'>
      <Breadcrumb />
      <div className='mainContainer'>
        <DataTableComponent />
      </div>
    </div>
  );
};

export default page;
