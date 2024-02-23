"use client";
import Pankuzu from "@/components/path/Pankuzu";
import TableComponent from "@/components/TableComponent";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import LastPath from "@/components/path/LastPath";
import { useEffect } from "react";
import useRepo from "@/hook/useRepo";
const Page = () => {
  const { appsData, repositoriesData } = useRepo("org_name");

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />

      <div>
        <ButtonArea />
        {repositoriesData === undefined ? (
          <div>loading...</div>
        ) : (
          <TableComponent data={repositoriesData} />
        )}
        {appsData === undefined ? (
          <div>loading...</div>
        ) : (
          <DataTableComponent pageSize={5} data={appsData} />
        )}
      </div>
    </div>
  );
};

export default Page;
