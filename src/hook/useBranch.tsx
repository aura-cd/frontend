import { fetchBrunchInterface } from "@/api/interface/brunch";
import { useState } from "react";
import { fetchBranch } from "@/api/brunch";

const useBranch = async (org_id: string, repo_id: string) => {
  const [data, setData] = useState<fetchBrunchInterface>();
  const res = await fetchBranch(org_id, repo_id);
  if (res !== null && res !== undefined) {
    setData(res);
    return data;
  }
};

export default useBranch;
