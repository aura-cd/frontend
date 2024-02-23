import { fetchPullRequestInterface } from "@/api/interface/pullReqest";
import { useState } from "react";
import { fetchPullReq } from "@/api/pullReqest";

const useBranch = async (
  org_id: string,
  repo_id: string,
  pullReq_id: string
) => {
  const [data, setData] = useState<fetchPullRequestInterface>();
  const res: fetchPullRequestInterface | undefined = await fetchPullReq(
    org_id,
    repo_id,
    pullReq_id
  );
  if (res !== null && res !== undefined) {
    setData(res);
    return data;
  }
};

export default useBranch;
