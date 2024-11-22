import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ComboboxProduct } from "../components/ui/combobox";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { MoneyInput } from "../components/MoneyInput";

export function Production() {
  const [Price, setPrice] = useState(0); // Inicializa como 0
  const [Amount, setAmount] = useState(0);

  const setAmountHandle = (e) => {
    const amount = parseInt(e.target.value, 10);
    if (!isNaN(amount) && Price > 0) {
      setAmount(amount * Price);
    } else {
      setAmount(0);
    }
  };

  const setPriceSelect = (selectedProduct) => {
    if (selectedProduct && selectedProduct.unitPrice) {
      const priceValue = parseFloat(selectedProduct.unitPrice);
      setPrice(isNaN(priceValue) ? 0 : priceValue);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />

          <span className="w-full p-1 pl-4 dark:bg-gray-900">
            Home <span className="text-gray-400 ">/ Cadastro de Produção</span>
          </span>
          <hr />

          <div className="h-full bg-gray-200 w-full flex flex-col items-center dark:bg-gray-800">
            <div className="bg-white w-[55%] flex flex-col mt-5 rounded-md gap-5 items-center text-sm dark:bg-gray-900">
              <div className="flex w-full gap-5 justify-center mt-5">
                <div className="w-56">
                  <span>Escolha o Produto:</span>
                  <ComboboxProduct
                    onSelectionChange={(selectedProduct) => {
                      if (selectedProduct && selectedProduct.unitPrice) {
                        const priceValue = parseFloat(
                          selectedProduct.unitPrice
                        );
                        setPrice(isNaN(priceValue) ? 0 : priceValue);
                      }
                    }}
                  />
                </div>
                <div className="w-56">
                  <span>Valor Unitário:</span>
                  <MoneyInput
                    value={Price}
                    onChange={setPrice}
                    disabled
                    classProp="bg-gray-300 dark:bg-gray-800"
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
                  <MoneyInput
                    type="text"
                    classProp="bg-gray-300 dark:bg-gray-800"
                    disabled
                    value={Amount.toFixed(2)}
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

              <Button className="bg-blue-800 w-[20%] mb-2 hover:bg-blue-800/80 text-white">
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
