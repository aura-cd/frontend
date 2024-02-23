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
  branchName: string;
  status: string;
  version: string;
  age: string;
};
