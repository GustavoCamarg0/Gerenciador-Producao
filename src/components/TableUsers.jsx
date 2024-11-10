import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

import data from "./user_data_example.json";
import { FilePenLine, Trash2 } from "lucide-react";

export function TableUsers() {
  const resolutions = `
  lg:max-h-[400px]
  2xl:max-h-[700px]
  `;
  
  return (
    <div className={`bg-white h-full overflow-auto rounded-md flex-1 ${resolutions}`}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Login</TableHead>
            <TableHead>Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.cpf}</TableCell>
              <TableCell>{item.login}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button className="bg-blue-800 hover:bg-blue-800/80"><FilePenLine /></Button>
                  <Button variant={"destructive"}><Trash2 /></Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
