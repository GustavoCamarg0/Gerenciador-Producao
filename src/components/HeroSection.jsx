import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-64 bg-slate-700 flex flex-col items-center justify-center text-center p-4 space-y-4">
      <h2 className="text-3xl text-white font-bold">
        Bem-vindo à nossa plataforma!
      </h2>
      <p className="text-white max-w-md">
        Explore nossos serviços e descubra como podemos ajudar no
        desenvolvimento das suas peças.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
        Saiba mais
      </button>
    </div>
  );
}

export default HeroSection;
