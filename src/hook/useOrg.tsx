import { fetchOrganizationInterface } from "@/api/interface/organization";
import { fetchOrg } from "@/api/organization";
import { RepoContext } from "@/store/useRepoContext";
import React, { useContext } from "react";

export const useOrg = async (org_id: string) => {
  const [data, setData] = React.useState<fetchOrganizationInterface>();
  const res = await fetchOrg();
  if (res !== null && res !== undefined) {
    setData(res);
    return data;
  }
};
