import {
  repositoryInterface,
  repositoryAppInterface,
} from "@/api/interface/repository";
import { fetchRepo } from "@/api/repository";
import { useEffect, useState } from "react";

const useRepo = (org_id: string) => {
  const [appsData, setAppsData] = useState<repositoryAppInterface[]>();
  const [repositoriesData, setRepositoriesData] =
    useState<repositoryInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchRepo(org_id);
      if (res !== null && res !== undefined) {
        const apps: repositoryAppInterface[] = res.apps;
        const repositories = res.repositories;

        if (apps !== null && apps !== undefined) {
          setAppsData(apps);
        }
        if (repositories !== null) {
          setRepositoriesData(repositories);
        }
      }
    };
    fetchData();
  }, [org_id]);

  return {
    appsData,
    repositoriesData,
  };
};

export default useRepo;
