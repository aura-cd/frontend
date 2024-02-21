export interface repositoryInterface {
  repositories: [
    {
      repository: string;
      deployments: 0;
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
