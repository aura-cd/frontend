/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Pankuzu from "@/components/path/Pankuzu";
import TableComponent from "@/components/TableComponent";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import LastPath from "@/components/path/LastPath";
import { useEffect } from "react";
const page = () => {
  useEffect(() => {
    // fetch data
  }, []);
  const tadata = [
    {
      name: "Invoice 001",
      deployments: 10,
    },
    {
      name: "Invoice 002",
      deployments: 20,
    },
    {
      name: "Invoice 003",
      deployments: 30,
    },
  ];

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />

      <div>
        <ButtonArea />
        <TableComponent data={tadata} />
        {data === null ? (
          <div>loading...</div>
        ) : (
          <DataTableComponent pageSize={5} data={data} />
        )}
      </div>
    </div>
  );
};

export default page;
