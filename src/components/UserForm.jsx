import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function UserForm({toast}) {
  const TesteClick = () => {
    toast(true)
  };

  return (
    <div className="p-0 flex flex-col gap-2 text-sm dark:bg-gray-900">
      <div className="p-2 text-lg text-gray-500">
        <h1> Adicionar Novo Usuário</h1>
      </div>

      <hr />

      {/*----------------------------------FORMULARIO---------------------------------- */}
      <div className="w-full flex flex-col items-center form gap-2 p-1">
        <div>
          <span>Nome:</span>
          <Input placeholder="Digite o nome do usuário" />
        </div>
        <div>
          <span>CPF:</span>
          <Input placeholder="Informe o CPF" />
        </div>
        <div>
          <span>Login:</span>
          <Input placeholder="Digite o login do usuário" />
        </div>
        <div>
          <span>Senha:</span>
          <Input placeholder="Informe a senha" />
        </div>
        <div>
          <span>Confirme a Senha:</span>
          <Input placeholder="Confirme a senha" />
        </div>
      </div>
      {/*----------------------------------FORMULARIO---------------------------------- */}

      <hr />

      <div className="w-full flex justify-end p-2">
        <Button
          className="bg-blue-800 hover:bg-blue-800/80 text-white"
          onClick={TesteClick}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
}
