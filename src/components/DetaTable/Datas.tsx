import FailedStatus from "@/components/status/FailedStatus";
import PendingStatus from "@/components/status/PendingStatus";
import RunningStatus from "@/components/status/RunningStatus";
import SucceededStatus from "@/components/status/SucceededStatus";
import Unknown from "@/components/status/UnknownStatus";
import { Payment } from "./Types";

export const data: Payment[] = [
  {
    ID: "1",
    Name: "Payment 1",
    Status: <FailedStatus />,
    Usage: "1",
    Ver: "1",
    Age: "1",
  },
  {
    ID: "2",
    Name: "Payment 2",
    Status: <PendingStatus />,
    Usage: "2",
    Ver: "2",
    Age: "2",
  },
  {
    ID: "3",
    Name: "Payment 3",
    Status: <RunningStatus />,
    Usage: "3",
    Ver: "3",
    Age: "3",
  },
  {
    ID: "4",
    Name: "Payment 4",
    Status: <SucceededStatus />,
    Usage: "4",
    Ver: "4",
    Age: "4",
  },
  {
    ID: "5",
    Name: "Payment 5",
    Status: <Unknown />,
    Usage: "5",
    Ver: "5",
    Age: "5",
  },
];
