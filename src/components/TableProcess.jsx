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
          <TableRow className="bg-gray-300/90  hover:bg-gray-300/90">
            <TableHead>Processo</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processos.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item}</TableCell>
              <TableCell>valor</TableCell>
              <TableCell>
                <Button variant={"destructive"}>
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
