"use client";

import { fetchDeploymentInterface } from "@/api/interface/deployment";
export const fetchDeployment = async (
  org_id: string,
  repo_id: string,
  deployment_name: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${org_id}/repositories/${repo_id}/deployments/${deployment_name}`
    );
    const data: fetchDeploymentInterface = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
