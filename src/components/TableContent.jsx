import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import data from "./data_example.json";

export function TableContent() {
  return (
    <div className="bg-white w-[90%] rounded max-h-[300px]  overflow-auto">
      <Table >
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
