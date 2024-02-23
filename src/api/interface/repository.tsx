export interface fetchRepositoryInterface {
  repositories: {
    repository: string;
    deployments: number;
  }[];

  apps: {
    name: string;
    status: string;
    version: string;
    age: string;
  }[];
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
[];

export interface repositoryAppInterface {
  name: string;
  version: string;
  status: string;
  age: string;
}
[];

export interface repositoryInterface {
  repository: string;
  deployments: number;
}
[];
