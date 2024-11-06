import { DiamondPlus, SquarePlus, Menu } from "lucide-react";
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
        isClose ? "w-16 close" : "w-52"
      } flex flex-col transition-all ease-in-out duration-300`}
    >
      <div className="flex gap-3 items-center">
        <span className="text-sky-400 font-bold underline flex justify-center w-full text-2xl ">
          VipPlast
        </span>
        <Menu className="cursor-pointer menu" onClick={toggleSidebar} />
      </div>

      <ul className="flex flex-col gap-2 mt-[20%] w-full">
        <li className="flex gap-4 cursor-pointer">
          <DiamondPlus />
          <Link to="/Cadastro-produto">
            <span>Serviço 1</span>
          </Link>
        </li>
        <hr className="mt-[10%]" />
        <li className="flex gap-4 cursor-pointer">
          <SquarePlus />
          <Link to="">
            <span>Serviço 2</span>
          </Link>
        </li>
        <hr className="mt-[10%]" />
        <li className="flex gap-4 cursor-pointer">
          <SquarePlus />
          <Link to="">
            <span>Serviço 3</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
