"use client";
import { useState, createContext, useEffect } from "react";
import {
  repositoryAppInterface,
  repositoryInterface,
} from "./interface/repository";

import React from "react";

export const RepoContext = createContext([] as repositoryInterface[]);

export const RepoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<repositoryInterface[]>([]);

  useEffect(() => {
    const fetchRepositoryApp = async (organization_id: string) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories`
        );
        const api_data: repositoryInterface[] = await response.json();
        setData(api_data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchRepositoryApp("test1");
  }, []);

  return <RepoContext.Provider value={data}>{children}</RepoContext.Provider>;
};
