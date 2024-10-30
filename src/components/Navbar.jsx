// components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <div className="w-full p-4 bg-slate-600 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">VipPlast</h1>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Home
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sobre
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Contato
        </button>
      </div>
    </div>
  );
}

export default Navbar;
