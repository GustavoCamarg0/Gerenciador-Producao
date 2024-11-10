import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TableUsers } from "../components/TableUsers";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
export function Users() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <hr />
          <span className="w-full p-1 pl-4">
            Home <span className="text-gray-400">/ Users</span>
          </span>
          <hr />
          <div className="h-full bg-gray-200 w-full flex items-center p-8 gap-8">
            <div className="bg-white h-auto p-4 rounded-md flex flex-col gap-2 items-center flex-1">
              <div className="w-[50%]">
                <p>Nome do Usuario:</p>
                <Input placeholder="Digite o Nome..." />
              </div>
              <div className="w-[50%]">
                <p>CPF:</p>
                <Input placeholder="Informe o CPF..." />
              </div>
              <div className="w-[50%]">
                <p>Login:</p>
                <Input placeholder="Digite o Login..." />
              </div>
              <div className="w-[50%]">
                <p>Senha:</p>
                <Input placeholder="Informe a Senha..." />
              </div>

              <Button className="bg-blue-800 hover:bg-blue-800/80 mt-3">
                Salvar
              </Button>
            </div>
            <TableUsers />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
