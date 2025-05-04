import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { cn } from "@/lib/utils";
  
  type SimpleTableProps = {
    data: Record<string, any>[];
    heading?: string;
    headerMap?: Record<string, string>;
    className?: string
  };
  
  export function SimpleTable({ data, heading, className, headerMap = { } }: SimpleTableProps) {
    if (!data || data.length === 0) {
      return <div>No data available.</div>;
    }
  
    const headers = Object.keys(data[0]);
  
    return (
      <div className={cn("bg-white border overflow-clip",className)} >
          {
              heading &&
              <h3 className="text-lg font-semibold text-darkBlue">{heading}</h3>
          }
        <Table className="rounded-lg text-base">
          <TableHeader className="bg-gray-50 *:p-4">
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header} className="capitalize font-semibold">
                  {headerMap[header] || header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} >
                {headers.map((header) => (
                  <TableCell key={header} className="first:break-all p-4">
                    {typeof row[header] === "object"
                      ? JSON.stringify(row[header])
                      : row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }