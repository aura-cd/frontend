"use client";
import { fetchHomeInterface } from "@/api/interface/home";
import { useEffect, useState } from "react";
export const fetchHome = async () => {
  try {
    const response = await fetch(`http://localhost:8082/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: any = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
