"use client";

import { repositoryInterface } from "./interface/repository";
export const fetchRepo = async (organization_id: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories`);
    const data: repositoryInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
