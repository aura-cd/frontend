"use client";

import { repositoryInterface } from "@/api/interface/repository";
export const fetchRepo = async (org_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${org_id}/repositories`
    );
    const data: repositoryInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
