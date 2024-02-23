"use client";

import { fetchBrunchInterface } from "@/api/interface/brunch";
export const fetchRepo = async (
  org_id: string,
  repo_id: string,
  pullReq_id: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${org_id}/repositories/${repo_id}/pulls/${pullReq_id}`
    );
    const data: fetchBrunchInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
