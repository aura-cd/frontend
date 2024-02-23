import {
  fetchRepositoryInterface,
  repositoryInterface,
  repositoryAppInterface,
} from "@/api/interface/repository";
import { fetchRepo } from "@/api/repository";
import { use, useEffect, useState } from "react";

export const useRepo = async (org_id: string) => {
  const [data, setData] = useState<fetchRepositoryInterface>();
  useEffect(() => {
    const fetchData = async () => {
      const res: fetchRepositoryInterface | undefined = await fetchRepo(org_id);
      setData(res);
      const repo_data: repositoryInterface[] | undefined = data?.repositories;
      const app_data: repositoryAppInterface[] | undefined = data?.apps;
      return {
        repo_data,
        app_data,
      };
    };
    fetchData();
  }, [org_id]);
  return data;
};
