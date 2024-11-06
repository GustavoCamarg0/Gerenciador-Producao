import {
  DiamondPlus,
  SquarePlus,
  Menu,
  LayoutDashboard,
  ClipboardList,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [isClose, setisClose] = useState(true);
  const toggleSidebar = () => {
    setisClose(!isClose);
  };
  return (
    <aside
      className={`border-r p-2 ${
        isClose ? "w-52" : "w-16 close"
      } flex flex-col transition-all ease-in-out duration-300 bg-white`}
    >
      <div className="flex gap-3 items-center">
        <span className="font-bold underline flex justify-center w-full text-2xl ">
          <p className="text-[#363949]">Vip</p>
          <p className="text-sky-400 ">Plast</p>
        </span>
        <Menu className="cursor-pointer menu" onClick={toggleSidebar} />
      </div>

      <ul className="flex flex-col gap-2 mt-[20%] w-full">
        <Link to="/home">
          <li className="flex gap-4 cursor-pointer">
            <LayoutDashboard />

            <span>Dashboard</span>
          </li>
        </Link>
        <hr className="mt-[10%]" />
        <Link to="/Cadastro-produto">
          <li className="flex gap-4 cursor-pointer">
            <DiamondPlus />

            <span>Cadastro de Peça</span>
          </li>
        </Link>
        <hr className="mt-[10%]" />

        <Link to="/task">
          <li className="flex gap-4 cursor-pointer">
            <ClipboardList />
            <span>Detalhes</span>
          </li>
        </Link>

        <hr className="mt-[10%]" />

        <Link to="/Cadastro-produto">
          <li className="flex gap-4 cursor-pointer">
            <SquarePlus />

            <span>Serviço 3</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
}
