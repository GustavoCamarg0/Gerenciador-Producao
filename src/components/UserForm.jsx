import { Input } from "./ui/input";
import { Button } from "./ui/button";
export function UserForm() {
  return (
    <div className="p-2 flex flex-col items-center gap-2 text-sm">
      <div className="w-[70%]">
        <span>Nome:</span>
        <Input placeholder="Digite o nome do usuário" />
      </div>
      <div className="w-[70%]">
        <span>CPF:</span>
        <Input placeholder="Informe o CPF" />
      </div>
      <div className="w-[70%]">
        <span>Login:</span>
        <Input placeholder="Digite o login do usuário" />
      </div>
      <div className="w-[70%]">
        <span>Senha:</span>
        <Input placeholder="Informe a senha" />
      </div>
      <div className="w-[70%]">
        <span>Confirme a Senha:</span>
        <Input placeholder="Confirme a senha" />
      </div>
    </div>
  );
}
