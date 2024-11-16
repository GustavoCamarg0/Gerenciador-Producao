import { ReceiptText, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { TableProcess } from "./TableProcess";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const resolutions = `
lg:max-h-80
2xl:max-h-[80%]
`;
function Products({ products, onDeleteProductClick }) {
  return (
    <ul
      className={`grid grid-cols-5 gap-10 bg-white w-[80%] p-4 overflow-auto ${resolutions} dark:bg-gray-900`}
    >
      {products.map((products, index) => (
        <li
          key={index}
          className="flex flex-col gap-2 items-center p-1 bg-gray-700/10 rounded-md justify-between dark:bg-gray-800"
        >
          <span className="bg-blue-800 w-full text-white p-2 rounded-md flex-1 text-xs text-center font-semibold flex justify-center items-center">
            {products.description}
          </span>
          <div className="flex gap-2 w-full justify-around">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-emerald-500 hover:bg-emerald-500/80 text-white">
                  <ReceiptText />
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 top-[40%] dark:bg-gray-900">
                <DialogTitle hidden></DialogTitle>
                <div className="p-0 flex flex-col gap-2 text-sm">
                  <div className="p-4 text-lg text-gray-400 ">
                    <h1>{products.description}</h1>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-2 p-4">
                    <span>
                      Preço Unitário:
                      <span className="text-green-600 font-medium">
                        R$ {products.unitPrice}
                      </span>
                    </span>
                    <TableProcess processos={products.processes} />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              onClick={() => onDeleteProductClick(products.id)}
              variant="destructive"
            >
              <TrashIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
