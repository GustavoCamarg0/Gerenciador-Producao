import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import data from "../JSONs/data_example.json";

export function TableContent() {
  const resolutions = `
  lg:max-h-[280px]
  2xl:max-h-[700px]
  `;
  return (
    <div
      className={`bg-white w-[90%] flex-1 h-full overflow-auto ${resolutions}`}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Valor p/ Unidade</TableHead>
            <TableHead>Valor Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.produto}</TableCell>
              <TableCell>{item.quantidade}</TableCell>
              <TableCell>R${item.valorUnidade.toFixed(2)}</TableCell>
              <TableCell>R${item.valorTotal.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
