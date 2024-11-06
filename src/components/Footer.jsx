import { Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-slate-700/90 p-2 text-center text-white flex flex-col items-center gap-2 relative">
      <div className="flex gap-2 underline">
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>

      <p>&copy; 2023 Minha Página. Todos os direitos reservados.</p>

      <div className="flex gap-2 cursor-pointer right-2 bottom-2 absolute">
        <Instagram />
        <Linkedin />
      </div>
    </footer>
  );
}

export default Footer;
