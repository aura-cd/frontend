import { fetchOrganizationInterface } from "@/api/interface/organization";
import { fetchOrg } from "@/api/organization";
import { RepoContext } from "@/store/useRepoContext";
import { useState } from "react";

export const useOrg = async () => {
  const [data, setData] = useState<fetchOrganizationInterface>();
  const res = await fetchOrg();
  if (res !== null && res !== undefined) {
    setData(res);
    return data;
  }
};
