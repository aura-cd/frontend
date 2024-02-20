"use client";

import { fetchHomeInterface } from "./interface/home";

export const fetchHome = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
      method: "GET",
    });
    const data: fetchHomeInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
