"use client";
import { useState, createContext, useEffect } from "react";
import {
  repositoryAppInterface,
  repositoryInterface,
} from "./interface/repository";

import React from "react";
import { fetchOrganizationApp } from "./repository";

export const RepoContext = createContext([] as repositoryInterface[]);

export const RepoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<repositoryInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrganizationApp("test1");
      if (data) setData(data);
    };
    fetchData();
  }, []);

  return <RepoContext.Provider value={data}>{children}</RepoContext.Provider>;
};
