import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-full bg-slate-700 flex flex-col items-center text-center p-4">
      <h2 className="text-3xl text-white font-bold">
        Bem-vindo à nossa plataforma!
      </h2>
      <p className="text-white max-w-md">
        Explore nossos serviços e descubra como podemos ajudar no
        desenvolvimento das suas peças.
      </p>
    </div>
  );
}

export default HeroSection;
