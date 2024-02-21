import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "@/styles/table.scss";
interface TableComponentProps {
  data: {
    name: string;
    deployments: number;
  }[];
}

function TableDemo(props: TableComponentProps) {
  const { data } = props;
  return (
    <Table className='table'>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[300px]'>Name</TableHead>
          <TableHead className='header-deployments'>Deployments</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: any) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell className='row-deployments'>{row.deployments}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemo;
