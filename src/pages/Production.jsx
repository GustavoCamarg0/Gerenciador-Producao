import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ComboboxDemo } from "../components/ui/combobox";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function Production() {
  const [Price, setPrice] = useState(0); // Inicializa como 0
  const [Amount, setAmount] = useState(0);

  const products = JSON.parse(localStorage.getItem("products")) || [];

  const setAmountHandle = (e) => {
    const amount = parseInt(e.target.value, 10);
    if (!isNaN(amount) && Price > 0) {
      // Verifica se o preço é válido e maior que zero
      setAmount(amount * Price);
    } else {
      setAmount(0);
    }
  };

  const setPriceSelect = (price) => {
    console.log(price);
    if (price && price.unitPrice) {
      // Converte price.unitPrice para número, caso venha como string
      const priceValue = parseFloat(price.unitPrice);
      if (!isNaN(priceValue)) {
        setPrice(priceValue);
      } else {
        setPrice(0); // Se a conversão falhar, define como 0
      }
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />

          <span className="w-full p-1 pl-4">
            Home <span className="text-gray-400">/ Cadastro de Produção</span>
          </span>
          <hr />

          <div className="h-full bg-gray-200 w-full flex flex-col items-center">
            <div className="bg-white w-[55%] flex flex-col mt-5 rounded-md gap-5 items-center text-sm">
              <div className="flex w-full gap-5 justify-center mt-5">
                <div className="w-56">
                  <span>Escolha o Produto:</span>
                  <ComboboxDemo
                    data={products}
                    displayKey="description"
                    onSelectionChange={setPriceSelect}
                  />
                </div>
                <div className="w-56">
                  <span>Valor Unitário:</span>
                  <Input
                    type="text"
                    value={
                      Price > 0 ? `R$ ${Price.toFixed(2)}` : "Valor Unitário"
                    } // Exibe o valor apenas se for maior que 0
                    className="w-full  bg-gray-300"
                    disabled
                  />
                </div>
              </div>

              <div className="w-full flex gap-5 justify-center">
                <div className="w-56">
                  <span>Quantidade:</span>
                  <Input
                    type="number"
                    className="w-full"
                    onChange={setAmountHandle}
                    placeholder="Informe a Quantidade"
                  />
                </div>
                <div className="w-56">
                  <span>Valor Total:</span>
                  <Input
                    type="text"
                    className="w-full bg-gray-300"
                    disabled
                    value={`R$ ${Amount.toFixed(2)}`}
                  />
                </div>
              </div>

              <div className="w-full flex gap-5 justify-center">
                <div className="w-56">
                  <span>Data de Inicio:</span>
                  <Input type="date" />
                </div>
                <div className="w-56">
                  <span>Data de Entrega:</span>
                  <Input type="date" />
                </div>
              </div>

              <Button className="bg-blue-800 w-[20%] mb-2 hover:bg-blue-800/80">
                Salvar
              </Button>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
