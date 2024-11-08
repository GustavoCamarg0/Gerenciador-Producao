import { useState } from "react";
import Input from "./Input";
import { Button } from "./ui/button";

function AddTask({ onAddTaskSubmit }) {
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

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
      className="w-[10%] mt-2"
        onClick={() => {
          if (!description.trim() || !unitPrice.trim()) {
            return alert("Preencha os campos!");
          }
          onAddTaskSubmit(description, unitPrice);
          setDescription("");
          setUnitPrice("");
        }}
      >
        Salvar
      </Button>
      <hr />
    </div>
  );
}

export default AddTask;
