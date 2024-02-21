"use client";
import { useState, createContext, useEffect } from "react";
import {
  repositoryAppInterface,
  repositoryInterface,
} from "./interface/repository";
import { fetchRepository } from "./repository";
import React from "react";

export const RepoContext = createContext([] as repositoryInterface[]);

export const RepoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<repositoryInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRepository("test1");

        if (data) {
          setData([data]);
        }
        console.log(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return <RepoContext.Provider value={data}>{children}</RepoContext.Provider>;
};
