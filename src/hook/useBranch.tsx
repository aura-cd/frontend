import {
  fetchBrunchInterface,
  dataTableInterface,
} from "@/api/interface/brunch";
import { useEffect, useState } from "react";
import { fetchBranch } from "@/api/brunch";

const useBranch = (org_id: string, repo_id: string) => {
  const [data, setData] = useState<dataTableInterface[]>([]);

  useEffect(() => {
    const fetchData = async (org_id: string, repo_id: string) => {
      const res: fetchBrunchInterface[] | undefined = await fetchBranch(
        org_id,
        repo_id
      );
      if (res !== undefined) {
        const tableData: dataTableInterface[] = res.map((branch) => {
          return {
            branchName: branch.branchName,
            status: branch.status,
            version: branch.version,
            age: branch.age,
          };
        });
        setData(tableData);
      }
    };

    fetchData(org_id, repo_id);
  }, [org_id, repo_id]);

  return { data };
};
export default useBranch;
