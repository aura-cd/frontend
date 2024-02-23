"use client";

import { fetchOrganizationInterface } from "@/api/interface/organization";

export const fetchOrg = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations
    `
    );
    const data: fetchOrganizationInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
