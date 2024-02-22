"use client";
import Pankuzu from "@/components/path/Pankuzu";
import TableComponent from "@/components/TableComponent";
import { useEffect, useContext } from "react";
import ButtonArea from "@/app/(home)/components/ButtonArea";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import LastPath from "@/components/path/LastPath";
import { RepoContext } from "@/api/RepoContext";
import { fetchRepo } from "@/api/repository";
import { repositoryAppInterface } from "@/api/interface/repository";

const page = () => {
  const { data, setData } = useContext(RepoContext);

  useEffect(() => {
    const fetchData = async (org_id: string) => {
      const res = await fetchRepo(org_id);
      if (res !== null && res !== undefined) {
        const data: repositoryAppInterface[] = res.apps;
        setData(data);

        return;
      }
    };
    fetchData("test");
  }, [data]);

  console.log(data);
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
