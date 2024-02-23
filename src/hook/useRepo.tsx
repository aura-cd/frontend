import { repositoryInterface } from "@/api/interface/repository";
import { fetchRepo } from "@/api/repository";
import { useState } from "react";

const useRep = async (org_id: string) => {
  const [data, setData] = useState<repositoryInterface>();
  const res: repositoryInterface | undefined = await fetchRepo(org_id);
  setData(res);
  return data;
};

export default useRep;
