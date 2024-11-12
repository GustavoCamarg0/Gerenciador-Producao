import { useState } from "react";
import { Input } from "@/components/ui/input";
import "react-toastify/dist/ReactToastify.css";
import { Search } from "lucide-react";

import AddTask from "./AddProduct";

export function AddTaskHeader({ onAddTaskSubmit }) {
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleSaveClick = () => {
    if (!description.trim() || !unitPrice.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    onAddTaskSubmit(description, unitPrice);
    toast.success("Produto adicionado com sucesso!");
    setDescription("");
    setUnitPrice("");
  };

  return (
    <div className="w-[80%] flex p-2  bg-white mt-3 rounded-md">
      <div></div>
      <div className="flex justify-end w-full">
        <Input
          className="w-60 rounded-none border-r-0 rounded-s-md focus-visible:ring-0"
          placeholder="Informe o Nome do Produto"
          type="search"
        />
        <div className="border p-1 rounded-e-md border-l-0">
          <Search size={25} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
