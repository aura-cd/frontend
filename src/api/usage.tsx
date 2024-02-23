"use client";

import { fetchUsageInterface } from "@/api/interface/usage";

export const fetchUsage = async (org_id: string, deploy_name: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${org_id}/deployments/${deploy_name}/usage`,
    );
    return (await response.json()) as fetchUsageInterface;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
