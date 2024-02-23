import { fetchPullRequestInterface } from "@/api/interface/pullReqest";
import { useEffect, useState } from "react";
import { fetchPullReq } from "@/api/pullReqest";

const useBranch = (org_id: string, repo_id: string, pullReq_id: string) => {
  const [data, setData] = useState<fetchPullRequestInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const res: fetchPullRequestInterface | undefined = await fetchPullReq(
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
  return data;
};

export default useBranch;
