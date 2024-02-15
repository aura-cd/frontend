import { headers } from "next/headers";

// //2個以上の型を持つ配列
// type header<T> = [T, T, ...T[]] | string[];
// //headersの数分のデータを持つ配列
// type data<T> = Array<{ [key in T]: string }>;

export const TableData = {
  header: ["invoice", "status", "amount", "dueDate"],

  data: [
    {
      invoice: "001",
      status: "Paid",
      amount: "$300",
      dueDate: "20/03/2023",
    },
    {
      invoice: "002",
      status: "Pending",
      amount: "$500",
      dueDate: "20/03/2023",
    },
    {
      invoice: "003",
      status: "Paid",
      amount: "$300",
      dueDate: "20/03/2023",
    },
    {
      invoice: "004",
      status: "Pending",
      amount: "$500",
      dueDate: "20/03/2023",
    },
  ],
};
