"use client";
import { useState, useEffect, createContext } from "react";
import { repositoryAppInterface } from "./interface/repository";
import { fetchRepositoryApp } from "./repository";
import React from "react";
export const RepoContext = createContext({} as repositoryAppInterface);

export default function RepositoryContext(props: React.PropsWithChildren<{}>) {
  const [data, setData] = useState<repositoryAppInterface>(
    {} as repositoryAppInterface
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchRepositoryApp("test1");

        setData(response);
      } catch (e) {
        console.error("Error fetching data", e);
      }
    }
    fetchData();
  }, []);

  return (
    <RepoContext.Provider value={data}>{props.children}</RepoContext.Provider>
  );
}
