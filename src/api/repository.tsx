"use client";

import { repositoryInterface } from "./interface/repository";
export const fetchOrganizationApp = async (organization_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories`,
      {
        method: "GET",
      }
    );
    console.log(response);
    const data: repositoryInterface = await response.json();

    console.log(data);
    const jsonData = await response.json();
    console.log(jsonData);
    const appData = jsonData.apps;
    return appData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
