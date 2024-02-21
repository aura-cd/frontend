"use client";

import SucceededStatus from "@/components/status/SucceededStatus";
import { repositoryInterface } from "./interface/repository";
import UnknownStatus from "@/components/status/UnknownStatus";
import RunningStatus from "@/components/status/RunningStatus";
import PendingStatus from "@/components/status/PendingStatus";
import FailedStatus from "@/components/status/FailedStatus";
export const fetchRepositoryApp = async (organization_id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organization_id}/repositories`
    );
    const data: repositoryInterface = await response.json();

    let jsonData = await response.json();
    const formattedData = jsonData.app.map((data: any) => {
      switch (data.status) {
        case "Failed":
          data.status = <FailedStatus />;
          break;
        case "Pending":
          data.status = <PendingStatus />;
          break;
        case "Running":
          data.status = <RunningStatus />;
          break;
        case "Succeeded":
          data.status = <SucceededStatus />;
          break;
        case "Unknown":
          data.status = <UnknownStatus />;
      }

      return jsonData;
    });

    console.log(formattedData);
    return formattedData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
