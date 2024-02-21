import { repositoryAppInterface } from "@/api/interface/repository";
import SucceededStatus from "@/components/status/SucceededStatus";

export const repositoryAppData: repositoryAppInterface[] = [
  {
    name: "test1",
    version: "1.0.0",
    states: <SucceededStatus />,
    age: "1d",
  },
  {
    name: "test2",
    version: "1.0.0",
    states: <SucceededStatus />,
    age: "1d",
  },
];
