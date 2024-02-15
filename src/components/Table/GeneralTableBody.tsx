import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface GeneralTableBodyProps {
  data: string[];
}
const GeneralTableContainer = (props: GeneralTableBodyProps) => {
  return (
    <TableBody>
      <TableRow>
        {props.data.map((item, index) => (
          <TableCell key={index}>{item}</TableCell>
        ))}
      </TableRow>
    </TableBody>
  );
};

export default GeneralTableContainer;
