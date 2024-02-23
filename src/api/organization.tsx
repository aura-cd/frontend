"use client";

import { fetchOrganizationInterface } from "@/api/interface/organization";
import { dummyData } from "@/mock/org";
export const fetchOrg = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations
    `
    );
    // const data: fetchOrganizationInterface = await response.json();

    const data = dummyData;
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
