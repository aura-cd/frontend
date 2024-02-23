import { repositoryAppInterface } from "@/api/interface/repository";
import { fetchRepo } from "@/api/repository";
import { RepoContext } from "@/api/useRepoContext";
import { useContext, useEffect } from "react";

const useOrgById = () => {
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

  return data;
};

export default useOrgById;
