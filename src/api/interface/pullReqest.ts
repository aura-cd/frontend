export interface fetchPullRequestInterface {
  branchName: string;
  gitHubLink: string;
  pods: [
    {
      name: string;
      status: string;
      age: string;
      image: string;
    }
  ];
  yaml: string;
}
[];
