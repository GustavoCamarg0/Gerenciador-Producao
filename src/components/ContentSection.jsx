import React from "react";
import { useNavigate } from "react-router-dom";

function ContentSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex-grow bg-slate-600 p-6 space-y-4">
      <h3 className="text-xl text-white font-semibold">Nossos Serviços</h3>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/Cadastro-produto")}
        >
          Cadastro de peça
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Serviço 2
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Serviço 3
        </button>
      </div>
    </div>
  );
}

export default ContentSection;
