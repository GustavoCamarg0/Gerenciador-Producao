import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <p className="text-slate-600 font-semibold">Descrição:</p>
      <Input
        type="text"
        placeholder="Digite o nome da peça"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <p className="text-slate-600 font-semibold">Preço Unitário:</p>
      <Input
        type="number"
        placeholder="Digite o preço unitário"
        value={unitPrice}
        onChange={(event) => setUnitPrice(event.target.value)}
      />

      <button
        onClick={() => {
          if (!description.trim() || !unitPrice.trim()) {
            return alert("Preencha os campos!");
          }
          onAddTaskSubmit(description, unitPrice);
          setDescription("");
          setUnitPrice("");
        }}
        className="bg-slate-500 text-white pc-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
