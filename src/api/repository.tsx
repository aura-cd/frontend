"use client";

import SucceededStatus from "@/components/status/SucceededStatus";
import {
  repositoryAppInterface,
  repositoryInterface,
} from "./interface/repository";
import UnknownStatus from "@/components/status/UnknownStatus";
import RunningStatus from "@/components/status/RunningStatus";
import PendingStatus from "@/components/status/PendingStatus";
import FailedStatus from "@/components/status/FailedStatus";
export const fetchRepositoryApp = async (organization_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories`
    );
    const data: repositoryInterface[] = await response.json();
    console.log(data);
    const formattedData = data.map((item: any) => {
      switch (item.states) {
        case "Failed":
          item.status = <FailedStatus />;
          break;
        case "Pending":
          item.status = <PendingStatus />;
          break;
        case "Running":
          item.status = <RunningStatus />;
          break;
        case "Succeeded":
          item.status = <SucceededStatus />;
          break;
        case "Unknown":
        default:
          item.status = <UnknownStatus />;
      }

      return {
        name: item.name,
        version: item.version,
        states: item.status,
        age: item.age,
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
