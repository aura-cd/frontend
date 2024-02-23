/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import { useContext } from "react";
import { usePath } from "@/hook/usePath";
import useBranch from "@/hook/useBranch";
const page = async () => {
  const { orgName, repoName } = usePath();
  const { data } = await useBranch(orgName, repoName);
  console.log(orgName);

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        {data === undefined ? (
          <DataTableComponent data={data} pageSize={5} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default page;
