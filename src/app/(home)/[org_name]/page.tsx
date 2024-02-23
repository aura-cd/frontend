"use client";
import Pankuzu from "@/components/path/Pankuzu";
import TableComponent from "@/components/TableComponent";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import LastPath from "@/components/path/LastPath";
import { useEffect } from "react";
import { useRepo } from "@/hook/useRepo";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    useRepoData("org_id");
  }, []);
  const { repo_data, app_data } = repo_data("org_id");

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />

      <div>
        <ButtonArea />
        <TableComponent data={repo_data} />
        {app_data === null ? (
          <div>loading...</div>
        ) : (
          <DataTableComponent pageSize={5} data={app_data} />
        )}
      </div>
    </div>
  );
};

export default page;
