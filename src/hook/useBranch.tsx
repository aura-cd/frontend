import { fetchBrunchInterface } from "@/api/interface/brunch";
import { useEffect, useState } from "react";
import { fetchBranch } from "@/api/brunch";

const useBranch = async (org_id: string, repo_id: string) => {
  const [data, setData] = useState<fetchBrunchInterface>();

  useEffect(() => {
    const fetchData = async (org_id: string, repo_id: string) => {
      const res: fetchBrunchInterface | undefined = await fetchBranch(
        org_id,
        repo_id
      );
      if (res !== undefined) {
        setData(res);
      }
      return res;
    };

    fetchData(org_id, repo_id);
  }, [org_id, repo_id]);

  return { data };
};
export default useBranch;
