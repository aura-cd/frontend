import { fetchDeploymentInterface } from "@/api/interface/deployment";
import { useEffect, useState } from "react";
import { fetchDeployment } from "@/api/deployment";
const useBranch = (org_id: string, repo_id: string, pullReq_id: string) => {
  const [data, setData] = useState<fetchDeploymentInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const res: fetchDeploymentInterface | undefined = await fetchDeployment(
        org_id,
        repo_id,
        pullReq_id
      );
      if (res !== null && res !== undefined) {
        setData(res);
      }
    };

    fetchData();
  }, [org_id, repo_id, pullReq_id]);
  return { data };
};

export default useBranch;
