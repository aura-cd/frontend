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

export interface repositoryRepoAppInterface {
  name: string;
  states: React.ReactNode;
  version: string;
  age: string;
}

export interface repositoryAppInterface {
  name: string;
  status: string;
  version: string;
  age: string;
}
