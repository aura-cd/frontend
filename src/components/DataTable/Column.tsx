import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { repositoryAppInterface } from "@/api/interface/repository";
import SheetComponent from "@/components/SheetComponent";

const pro = ["name", "status", "version", "age"];
export const columns: ColumnDef<repositoryAppInterface>[] = pro.map((item) => ({
  accessorKey: item,
  header: ({ column }) => {
    return (
      <Button
        variant='ghost'
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
        <CaretSortIcon className='ml-2 h-4 w-4' />
      </Button>
    );
  },
  cell: ({ row }) => (
    <div>
      <SheetComponent title='rr' description='http'>
        <div className='lowercase'>{row.getValue(item)}</div>
      </SheetComponent>
    </div>
  ),
}));
