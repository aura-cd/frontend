export type Payment = {
  ID: string;
  Name: string;
  Status: "Running" | "Pending" | "Succeeded" | "Unknown" | "Failed";
  Usage: string;
  Ver: string;
  Age: string;
};
