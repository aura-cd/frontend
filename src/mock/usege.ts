import { fetchUsageInterface } from "@/api/interface/usage";
export const dummyData: fetchUsageInterface[] = [
  {
    organization: "sdc",
    deploymentName: "master",
    isDisable: false,
    deployments: {
      podName: "master",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },

  {
    organization: "sdc",
    deploymentName: "develop",
    isDisable: false,
    deployments: {
      podName: "develop",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
  {
    organization: "sdc",
    deploymentName: "feature/1",
    isDisable: false,
    deployments: {
      podName: "feature/1",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
  {
    organization: "sdc",
    deploymentName: "feature/2",
    isDisable: false,
    deployments: {
      podName: "feature/2",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
  {
    organization: "sdc",
    deploymentName: "feature/3",
    isDisable: false,
    deployments: {
      podName: "feature/3",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
  {
    organization: "sdc",
    deploymentName: "feature/4",
    isDisable: false,
    deployments: {
      podName: "feature/4",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
  {
    organization: "sdc",
    deploymentName: "feature/5",
    isDisable: false,
    deployments: {
      podName: "feature/5",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
  {
    organization: "sdc",
    deploymentName: "feature/6",
    isDisable: false,
    deployments: {
      podName: "feature/6",
      cpu: 0.5,
      memory: 0.5,
      storage: "1Gi",
    },
  },
];
