"use client";

import { repositoryInterface } from "./interface/repository";
export const fetchRepository = async (organization_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories`
    );

    const data: repositoryInterface = await response.json();
    const repo = data.repositories;
    console.log(repo);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
