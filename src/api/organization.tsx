"use client";

import { fetchOrganizationInterface } from "@/api/interface/organization";

export const fetchOrg = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations`,
    );
    const data = (await response.json()) as fetchOrganizationInterface[];
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
