import { fetchRepositoryInterface } from "@/api/interface/repository";
export const dummyData: fetchRepositoryInterface[] = [
  {
    repository: "sdc",
    deployments: 1,
    apps: [
      {
        name: "sdc",
        status: "active",
        version: "v1.0.0",
        age: "2 days",
      },
      {
        name: "sdc",
        status: "active",
        version: "v1.0.0",
        age: "2 days",
      },
      {
        name: "sdc",
        status: "active",
        version: "v1.0.0",
        age: "2 days",
      },
    ],
  },
  {
    repository: "sdc",
    deployments: 1,
    apps: [
      {
        name: "sdc",
        status: "active",
        version: "v1.0.0",
        age: "2 days",
      },
      {
        name: "sdc",
        status: "active",
        version: "v1.0.0",
        age: "2 days",
      },
      {
        name: "sdc",
        status: "active",
        version: "v1.0.0",
        age: "2 days",
      },
    ],
  },
];
