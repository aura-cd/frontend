"use client";

import { repositoryInterface } from "./interface/repository";
export const fetchOrganization = async (organization_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/organizations`,
      {
        method: "GET",
      }
    );
    const data: repositoryInterface = await response.json();

    console.log(data);
    const jsonData = await response.json();
    console.log(jsonData);

    return jsonData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
