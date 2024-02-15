import React, { Children } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GeneralTableBody from "./GeneralTableBody";
const HeaderData = ["Invoice", "Date", "Amount", "Status"];
const GeneralTableContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {HeaderData.map((item, index) => (
            <TableHeader key={index}>{item}</TableHeader>
          ))}
        </TableRow>
      </TableHeader>
      {HeaderData.map((index) => (
        <GeneralTableBody key={index} />
      ))}
    </Table>
  );
};

export default GeneralTableContainer;
