export interface fetchBrunchInterface {
  branches: [
    {
      deploymentName: string;
      branchName: string;
      pullRequestName: string;
      status: string;
      version: string;
      age: string;
    }
  ];
}

export type dataTableInterface = {
  branches: [
    {
      branchName: string;
      status: string;
      version: string;
      age: string;
    }
  ];
};
