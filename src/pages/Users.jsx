import { Plus, Search } from "lucide-react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TableUsers } from "../components/TableUsers";
import { Button } from "../components/ui/button";
import { UserForm } from "../components/UserForm";
import { Input } from "../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
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
          <div className="h-full bg-gray-200 w-full flex justify-center p-8 gap-8">
            <div className="flex-1">
              <div className="bg-white w-full h-[50px] flex gap-2 items-center pl-3 pr-6">
                <h1 className="text-lg font-medium">Lista de Usuarios</h1>
                <Dialog>
                  <DialogTrigger>
                    <Button className="bg-blue-800 hover:bg-blue-800/80">
                      <Plus />
                      Adicionar Usuario
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-0 w-96 top-[40%]">
                    <DialogHeader>
                      <DialogTitle className="p-2 text-lg text-gray-500">
                        Adicionar Novo Usuário
                      </DialogTitle>
                      <hr />
                      <UserForm />
                      <hr />
                      <div className="w-full flex justify-end mt-5 p-2">
                        <Button className="bg-blue-800 hover:bg-blue-800/80">
                          Salvar
                        </Button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div className="flex flex-1 justify-end">
                  <Input
                    className="w-60 rounded-none border-r-0 rounded-s-md focus-visible:ring-0"
                    placeholder="Informe o Nome do Usuario"
                    type="search"
                  />
                  <div className="border p-1 rounded-e-md border-l-0">
                    <Search size={25} className="text-gray-500" />
                  </div>
                </div>
              </div>
              <hr />
              <TableUsers />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
