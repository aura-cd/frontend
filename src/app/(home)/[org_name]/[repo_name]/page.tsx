"use client";
import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import React, { useEffect, useState } from "react";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import { RepoContext } from "@/api/RepoContext";
const page = () => {
  const data = React.useContext(RepoContext);
  console.log(data);
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
