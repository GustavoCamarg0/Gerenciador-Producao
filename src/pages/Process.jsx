import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/ui/button";
import { ComboboxDemo, ComboboxPlace } from "../components/ui/combobox";
import { Input } from "../components/ui/input";
import { useState } from "react";

export function Process() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />
          <span className="w-full p-1 pl-4 dark:bg-gray-900">
            Home <span className="text-gray-400">/ Cadastro de Processos</span>
          </span>
          <hr />
          <div className="h-full bg-gray-200 w-full flex flex-col items-center dark:bg-gray-800">
            <div className="bg-white w-[60%] p-4 flex justify-center mt-4 rounded-md dark:bg-gray-900">
              <div className="w-full flex flex-col items-center gap-4">
                <div className="flex  gap-2 w-[80%]">
                  <ComboboxDemo data={products} displayKey="description"/>
                  <Input placeholder="Nome do Processo" />
                </div>
                <div className="flex gap-2 w-[80%]">
                  <ComboboxPlace />
                  <Input placeholder="Valor a ser pago" />
                </div>
                <Button className="bg-blue-800 hover:bg-blue-800/80 text-white mt-3 w-32">
                  Salvar
                </Button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
