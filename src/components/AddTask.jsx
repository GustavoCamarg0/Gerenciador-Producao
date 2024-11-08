import { useState } from "react";
import Input from "./Input";
import { Button } from "./ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask({ onAddTaskSubmit }) {
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleSaveClick = () => {
    if (!description.trim() || !unitPrice.trim()) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    
    onAddTaskSubmit(description, unitPrice);
    toast.success("Unidade adicionada com sucesso!");
    setDescription("");
    setUnitPrice("");
  };

  return (
    <div className="w-[80%] flex flex-col p-2 justify-center items-center bg-white mt-3 rounded-md">
      <div className="flex gap-4 w-full justify-center">
        <div>
          <p className="text-slate-600 font-semibold">Descrição:</p>
          <Input
            type="text"
            placeholder="Digite o nome da peça"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div>
          <p className="text-slate-600 font-semibold">Preço Unitário:</p>
          <Input
            type="number"
            placeholder="Digite o preço unitário"
            value={unitPrice}
            onChange={(event) => setUnitPrice(event.target.value)}
          />
        </div>
      </div>

      <Button
        className="w-[10%] mt-2 bg-blue-800 hover:bg-blue-800/90"
        onClick={handleSaveClick}
      >
        Salvar
      </Button>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default AddTask;
