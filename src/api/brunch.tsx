"use client";

import { fetchBrunchInterface } from "@/api/interface/brunch";
import { dummyData } from "@/mock/branch";
export const fetchBranch = async (org_id: string, repo_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${org_id}/repositories/${repo_id}
      /branches
    `,
    );
    // const data: fetchBrunchInterface[] = await response.json();
    const data = dummyData;
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
