"use client";

import { repositoryInterface } from "./interface/repository";
export const fetchOrganization = async (organization_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organization/${organization_id}/repository`
    );
    const data: repositoryInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
