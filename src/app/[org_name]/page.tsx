"use client";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import LastPath from "@/components/path/LastPath";
import Pankuzu from "@/components/path/Pankuzu";
import TableComponent from "@/components/TableComponent";
import { usePath } from "@/hook/usePath";
import useRepo from "@/hook/useRepo";
import { app, dummyData, repository } from "@/mock/repo";
const Page = () => {
  const { orgName } = usePath();

  // const { appsData, repositoriesData } = useRepo(orgName);
  const repositoriesData = repository;
  const appsData = app;
  return (
    <div className="container">
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
