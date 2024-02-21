"use client";
import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import React, { useEffect, useState } from "react";
import ButtonArea from "../../components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import { repositoryAppInterface } from "@/api/interface/repository";
import { fetchRepositoryApp } from "@/api/repository";
import { RepoContext } from "@/api/RepositoryContext";
const page = () => {
  const data = React.useContext(RepoContext);
  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        <DataTableComponent pageSize={5} data={data} />
      </div>
    </div>
  );
};

export default page;
