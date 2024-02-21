import Pankuzu from "@/components/path/Pankuzu";
import DataTableComponent from "@/components/DataTable/DataTableComponent";
import React, { useEffect, useState } from "react";
import ButtonArea from "../../components/ButtonArea";
import LastPath from "@/components/path/LastPath";
import { fetchRepository } from "@/api/repository";
import {
  repoFormatInterface,
  repositoryInterface,
  repositoryRepoAppInterface,
} from "@/api/interface/repository";

const page = () => {
  const [appData, setAppData] = useState<repositoryRepoAppInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchRepository("organization_id");
      setAppData(response);
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <Pankuzu />
      <LastPath />
      <div>
        <ButtonArea />
        <DataTableComponent pageSize={5} data={appData} />
      </div>
    </div>
  );
};

export default page;
