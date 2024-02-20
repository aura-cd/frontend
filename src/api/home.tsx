"use client";

import { fetchHomeInterface } from "./interface/home";

export const fetchHome = async () => {
  try {
    const response = await fetch("http://localhost:8082/home", {
      method: "GET",
    });
    const data: fetchHomeInterface = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
