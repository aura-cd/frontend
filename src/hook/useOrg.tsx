import { fetchOrganizationInterface } from "@/api/interface/organization";
import { fetchOrg } from "@/api/organization";
import { useEffect, useState } from "react";

export const useOrg = () => {
  const [data, setData] = useState<fetchOrganizationInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchOrg();
      if (res !== null && res !== undefined) {
        setData(res);
      }
      return res;
    };

    fetchData();
  }, []);

  return { data };
};
