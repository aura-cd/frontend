"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchRepo } from "./repository";
import { repositoryAppInterface } from "./interface/repository";

export const RepoContext = createContext(
  {} as {
    data: repositoryAppInterface[];
    setData: React.Dispatch<React.SetStateAction<repositoryAppInterface[]>>;
  }
);

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<repositoryAppInterface[]>([]);

  return (
    <RepoContext.Provider value={{ data, setData }}>
      {children}
    </RepoContext.Provider>
  );
};

export const useRepo = () => {
  const context = useContext(RepoContext);
  if (context === undefined) {
    throw new Error("useRepo must be used within a RepoProvider");
  }
  return context;
};
