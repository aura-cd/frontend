import { fetchDeploymentInterface } from "@/api/interface/deployment";

export const dummyData: fetchDeploymentInterface[] = [
  {
    branchName: "master",
    gitHubLink: "sdc",
    pods: [
      {
        name: "master",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "master",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "master",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
    ],
    yaml: "sdc",
  },
  {
    branchName: "develop",
    gitHubLink: "sdc",
    pods: [
      {
        name: "develop",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "develop",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "develop",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
    ],
    yaml: "sdc",
  },
  {
    branchName: "feature/1",
    gitHubLink: "sdc",
    pods: [
      {
        name: "feature/1",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "feature/1",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "feature/1",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
    ],
    yaml: "sdc",
  },
  {
    branchName: "feature/2",
    gitHubLink: "sdc",
    pods: [
      {
        name: "feature/2",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "feature/2",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
      {
        name: "feature/2",
        status: "active",
        age: "2 days",
        image: "v1.0.0",
      },
    ],
    yaml: "sdc",
  },
];
