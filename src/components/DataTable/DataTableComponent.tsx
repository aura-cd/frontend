"use client";

import * as React from "react";
import { flexRender } from "@tanstack/react-table";
import { columns } from "./Column";
import { Button } from "@/components/ui/button";
import "@/styles//dataprops..table.scss";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SheetComponent from "../SheetComponent";

function DataTableComponent(props: { pageSize: number; table: any }) {
  return (
    <div className='container'>
      <div className='flex justify-between  '>
        <div className='flex items-center py-4'>
          <Input
            placeholder='Filter Name...'
            value={
              (props.table.getColumn("Name")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              props.table.getColumn("Name")?.setFilterValue(event.target.value)
            }
            className='max-w-sm'
          />
        </div>
        <div className='flex items-center justify-end space-x-2 py-4'>
          <div className='space-x-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => props.table.previousPage()}
              disabled={!props.table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              size='sm'
              onClick={() => props.table.nextPage()}
              disabled={!props.table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {props.table
              .getHeaderGroups()
              .map(
                (headerGroup: {
                  id: React.Key | null | undefined;
                  headers: any[];
                }) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                )
              )}
          </TableHeader>
          <TableBody>
            {props.table.getRowModel().rows?.length ? (
              props.table
                .getRowModel()
                .rows.map(
                  (row: {
                    id: React.Key | null | undefined;
                    getIsSelected: () => any;
                    getVisibleCells: () => any[];
                  }) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          <SheetComponent id={cell.id} title={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </SheetComponent>
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataTableComponent;
