import Breadcrumb from "@/components/Breadcrumb";
import DataTableComponent from "@/components/DetaTable/DataTableComponent";
import React from "react";
import "@/styles/pageStyles/repoPage.scss";
import ButtonArea from "../../components/ButtonArea";

const page = () => {
  return (
    <div className='container'>
      <Breadcrumb />
      <div>
        <div className='tableContainer '>
          <ButtonArea />

          <DataTableComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
