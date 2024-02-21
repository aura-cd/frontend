"use client";

import { fetchOrganizationInterface } from "./interface/organization";

export const fetchOrganization = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
      method: "GET",
    });
    const data: fetchOrganizationInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
