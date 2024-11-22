import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export function TableProcess({ processos }) {
  return (
    <div>
      <Table className="border">
        <TableHeader>
          <TableRow className="bg-gray-300/90  hover:bg-gray-300/90 ">
            <TableHead className="dark:text-black">Processo</TableHead>
            <TableHead className="dark:text-black">Valor</TableHead>
            <TableHead className="dark:text-black">Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processos.length > 0 ? (
            processos.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>valor</TableCell>
                <TableCell>
                  <Button className="bg-red-600 hover:bg-red-500 text-white">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="flex-1 relative h-[50px]">
              <TableCell className="absolute left-48 top-1 text-lg text-gray-400">
                N/A
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
