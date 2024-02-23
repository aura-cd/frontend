import { fetchRepositoryInterface } from "@/api/interface/repository";
export const dummyData: fetchRepositoryInterface[] = [
  {
    repositories: [
      {
        repository: "sdc",
        deployments: 0,
      },
      {
        repository: "sdc",
        deployments: 0,
      },
    ],

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
