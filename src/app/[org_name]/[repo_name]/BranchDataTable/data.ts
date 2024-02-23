import { fetchBrunchInterface } from "@/api/interface/brunch";
export const dummyData: fetchBrunchInterface = {
  branches: [
    {
      deploymentName: "demo-4hr8z",
      branchName: "goapp",
      pullRequestID: "8",
      status: "1/1",
      version: "2",
      age: "2024-02-23 06:19:57",
    },
  ],
};
