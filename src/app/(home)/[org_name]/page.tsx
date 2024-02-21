"use client";
import Pankuzu from "@/components/path/Pankuzu";
import TableComponent from "@/components/TableComponent";
import React from "react";
import ButtonArea from "../components/ButtonArea";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import LastPath from "@/components/path/LastPath";
import { RepoContext } from "@/api/RepositoryContext";

const page = () => {
  const data = React.useContext(RepoContext);
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
        <DataTableComponent data={data} pageSize={5} />
      </div>
    </div>
  );
};

export default page;
