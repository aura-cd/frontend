import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableComponentProps {
  header: string[];
  data: {
    name: string;
    deployments: number;
  }[];
}

function TableDemo(props: TableComponentProps) {
  const { header, data } = props;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {header.map((head) => (
            <TableHead key={head} className='w-[100px]'>
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.deployments}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemo;
