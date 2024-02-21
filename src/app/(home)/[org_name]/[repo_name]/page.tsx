import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import React from "react";
import ButtonArea from "../../components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import useTableHooks from "@/components/DataTable/useTableHooks";
const page = () => {
  const { table } = useTableHooks({ pageSize: 5, data: [] });

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        <DataTableComponent pageSize={5} table={table} />
      </div>
    </div>
  );
};

export default page;
