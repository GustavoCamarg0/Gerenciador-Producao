import { useEffect, useState } from "react";
import {AddProduct} from "../components/AddProduct";
import Products from "../components/Products";
import { Sidebar } from "../components/Sidebar";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import data from "../JSONs/Products_Process_Example.json"

export function Product() {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function onDeleteProductClick(productID) {
    const newproducts = products.filter((products) => products.id != productID);
    setproducts(newproducts);
  }

  function onAddProductSubmit(description, unitPrice) {
    const newTask = {
      id: products.length + 1,
      description,
      unitPrice,
      processes: [],
    };
    setproducts([...products, newTask]);
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />
          <span className="w-full p-1 pl-4">
            Home <span className="text-gray-400">/ Cadastro de Produto</span>
          </span>
          <div className="h-full bg-gray-200 w-full flex flex-col items-center">
            <AddProduct onAddProductSubmit={onAddProductSubmit} />
            <hr />
            {products.length > 0 ? (
              <Products
                products={products}
                onDeleteProductClick={onDeleteProductClick}
              />
            ) : null}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
