import { ArchiveRestore, Box, DollarSign } from "lucide-react";
import React from "react";
import { Card } from "./Card";

function HeroSection() {
  return (
    <div className="bg-white w-[90%] h-36 mt-3 rounded-md flex flex-col relative">
      <h1 className="w-full p-1 pl-2 text-gray-500 font-normal">Overview</h1>
      <hr />

      <div className="flex justify-around items-center p-3">
        <Card
          icon={<Box size={20} className="text-white" />}
          bg="bg-blue-500"
          text="Numero de Produtos"
          value="87"
        />
        <Card
          icon={<ArchiveRestore size={20} className="text-white" />}
          bg="bg-purple-500"
          text="Qnt de Produtos"
          value="3.957"
        />
        <Card
          icon={<DollarSign size={20} className="text-white" />}
          bg="bg-emerald-500"
          text="Valor Total"
          value="R$ 344.259"
        />
      </div>

      <hr className=""/>
    </div>
  );
}

export default HeroSection;
