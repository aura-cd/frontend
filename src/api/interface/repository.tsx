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
