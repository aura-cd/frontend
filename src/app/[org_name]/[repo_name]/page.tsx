/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import { useContext } from "react";
import { usePath } from "@/hook/usePath";
const page = () => {
  const { orgName, repoName } = usePath();
  console.log(orgName, repoName);

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        {/* <DataTableComponent pageSize={5} /> */}
      </div>
    </div>
  );
};

export default page;
