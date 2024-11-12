import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AddProduct({ onAddProductSubmit }) {
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleSaveClick = () => {
    if (!description.trim() || !unitPrice.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    onAddProductSubmit(description, unitPrice,[]);
    toast.success("Produto adicionado com sucesso!");
    setDescription("");
    setUnitPrice("");
  };

  return (
    <div className="w-[80%] flex p-2 px-4 justify-center items-end bg-white mt-3 rounded-t-md">
      <div className="flex gap-2 w-full justify-start items-end text-xs">
        <div className="flex flex-col gap-1">
          <p className="font-medium underline">Descrição:</p>
          <Input
            className="w-52"
            type="text"
            placeholder="Digite o nome da peça"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium underline">Preço Unitário:</p>
          <Input
            className="w-32"
            type="number"
            placeholder="R$ 0,00"
            value={unitPrice}
            onChange={(event) => setUnitPrice(event.target.value)}
          />
        </div>
        <Button
          className="w-24  bg-blue-800 hover:bg-blue-800/90"
          onClick={handleSaveClick}
        >
          Salvar
        </Button>
      </div>

      <div className="flex flex-1 justify-end">
        <Input
          className="w-60 rounded-none border-r-0 rounded-s-md focus-visible:ring-0"
          placeholder="Informe o Nome do Produto"
          type="search"
        />
        <div className="border p-1 rounded-e-md border-l-0">
          <Search size={25} className="text-gray-500" />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        hideProgressBar
      />
    </div>
  );
}

