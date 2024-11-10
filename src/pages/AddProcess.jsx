import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import data from "../components/data_example.json";
import { Button } from "../components/ui/button";
import { ComboboxDemo } from "../components/ui/combobox";
import { Input } from "../components/ui/input";

export function AddProcess() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />
          <span className="w-full p-1 pl-4">
            Home <span className="text-gray-400">/ Cadastro de Processos</span>
          </span>
          <hr />
          <div className="h-full bg-gray-200 w-full flex flex-col items-center">
            <div className="bg-white w-[60%] p-4 flex justify-center mt-4 rounded-md">
              <div className="w-[30%] flex flex-col items-center gap-2">
                <ComboboxDemo data={data} displayKey="produto" />
                <Input placeholder="Nome do Processo" />
                <Input placeholder="Valor a ser pago" />
                <Button className="bg-blue-800 hover:bg-blue-800/80">Salvar</Button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
