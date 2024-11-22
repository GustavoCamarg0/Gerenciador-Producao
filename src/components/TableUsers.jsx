import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

import data from "../JSONs/user_data_example.json";
import { FilePenLine, Trash2 } from "lucide-react";

export function TableUsers() {
  const resolutions = `
  lg:max-h-[350px]
  2xl:max-h-[700px]
  `;
  
  return (
    <div className={`bg-white h-full overflow-auto p-2 rounded-b-md  ${resolutions} dark:bg-gray-900`}>
      <Table className="border">
        <TableHeader>
          <TableRow className="bg-gray-300/90  hover:bg-gray-300/90 dark:bg-gray-800">
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Login</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.cpf}</TableCell>
              <TableCell>{item.login}</TableCell>
              <TableCell>{item.tipo}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button className="bg-emerald-500 hover:bg-emerald-500/80 text-white"><FilePenLine /></Button>
                  <Button  variant="destructive"><Trash2 /></Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
