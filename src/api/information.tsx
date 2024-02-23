"use client";

import { fetchInformationInterface } from "@/api/interface/information";

export const fetchOrganization = async (
  organization_id: string,
  repository_id: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories/${repository_id}/information
    `
    );
    const data: fetchInformationInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
