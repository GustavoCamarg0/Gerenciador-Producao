import React from "react";

function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full flex gap-10 justify-center">
        <div className="w-[220px] h-[120px] flex flex-col p-2 bg-blue-500 text-white rounded-md">
          <h1 className="font-bold">26k</h1>
          <p>Peças</p>
        </div>
        <div className="w-[220px] h-[120px] flex flex-col p-2 bg-blue-600 text-white rounded-md">
          <h1 className="font-bold">97</h1>
          <p>Vendas</p>
        </div>
        <div className="w-[220px] h-[120px] flex flex-col p-2 bg-blue-700 text-white rounded-md">
          <h1 className="font-bold">4078 R$</h1>
          <p>Total</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
