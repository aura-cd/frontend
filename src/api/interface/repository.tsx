import React from "react";

export interface repositoryInterface {
  repositories: [
    {
      repository: string;
      deployments: number;
    }
  ];
  apps: [
    {
      name: string;
      status: string;
      version: string;
      age: string;
    }
  ];
}
[];

export interface repoFormatInterface {
  repositories: [
    {
      repository: string;
      deployments: number;
    }
  ];
  apps: [
    {
      name: string;
      status: React.ReactNode;
      version: string;
      age: string;
    }
  ];
}

export interface repositoryAppInterface {
  name: string;
  version: string;
  // states: JSX.Element;
  status: string;
  age: string;
}
