import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function AddProcess () {
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
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
