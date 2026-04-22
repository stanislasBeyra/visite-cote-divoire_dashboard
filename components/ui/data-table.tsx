import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils/cn";

export type DataTableColumn<T> = { key: keyof T | string; header: string; render?: (row: T) => React.ReactNode };

export interface DataTableProps<T extends object> extends React.HTMLAttributes<HTMLDivElement> {
  rows: T[];
  columns: DataTableColumn<T>[];
  getRowKey: (row: T, index: number) => string | number;
}

export function DataTable<T extends object>({
  rows,
  columns,
  getRowKey,
  className,
  ...props
}: DataTableProps<T>) {
  const cell = (row: T, c: DataTableColumn<T>) => {
    if (c.render) return c.render(row);
    const raw = (row as Record<string, unknown>)[String(c.key)];
    return String(raw ?? "");
  };

  return (
    <div data-ui="datatable" className={cn(className)} {...props}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((c) => (
              <TableHead key={String(c.key)}>{c.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, ri) => (
            <TableRow key={getRowKey(row, ri)}>
              {columns.map((c) => (
                <TableCell key={String(c.key)}>{cell(row, c)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
