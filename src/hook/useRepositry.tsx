import {
  repositoryInterface,
  repositoryAppInterface,
} from "@/api/interface/repository";
import { fetchRepo } from "@/api/repository";
import { useState } from "react";

const useRepository = async (org_id: string) => {
  const [data, setData] = useState<repositoryAppInterface[]>();
  const res = await fetchRepo(org_id);
  if (res !== null && res !== undefined) {
    const app_data: repositoryAppInterface[] = res.apps;
    setData(app_data);
    return data;
  }
};

export default useRepository;
