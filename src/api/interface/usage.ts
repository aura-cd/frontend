export interface fetchUsageInterface {
  organization: string;
  deploymentName: string;
  isDisable: boolean;
  deployments: {
    podName: string;
    cpu: number;
    memory: number;
    storage: string;
  };
}
