import { fetchUsageInterface } from "@/api/interface/usage";
import { fetchUsage } from "@/api/usage";
import { useEffect, useState } from "react";

export const useUsage = (org_id: string, deploy_name: string) => {
  const [data, setData] = useState<fetchUsageInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchUsage(org_id, deploy_name);
      if (res !== null && res !== undefined) {
        setData(res);
      }
      return res;
    };

    fetchData();
  }, []);

  return { data };
};
