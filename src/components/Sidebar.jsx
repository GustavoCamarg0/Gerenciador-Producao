import {
  DiamondPlus,
  Menu,
  LayoutDashboard,
  LogOut,
  RefreshCcwDot,
  GitCompareArrows,
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
      className={`border-r ${
        isClose ? "w-52" : "w-16 close"
      } flex flex-col transition-all ease-in-out duration-300 bg-white`}
    >
      <div className="flex-1 p-3">
        <div className="flex gap-3 items-center">
          <span className="font-bold underline flex justify-center w-full text-2xl ">
            <p className="text-[#363949]">Vip</p>
            <p className="text-sky-400 ">Plast</p>
          </span>
          <Menu className="cursor-pointer menu" onClick={toggleSidebar} />
        </div>

        <ul className="flex flex-col gap-2 mt-12 w-full text-blue-500 pl-2 text-sm">
          <Link to="/home">
            <li className="flex gap-2 cursor-pointer">
              <LayoutDashboard size={20}/>

              <span>Dashboard</span>
            </li>
          </Link>
          <hr className="mt-[10%]" />
          <Link to="/product">
            <li className="flex gap-2 cursor-pointer">
              <DiamondPlus size={20} color="#f59e0b"/>

              <span>Cadastro de Produto</span>
            </li>
          </Link>
          <hr className="mt-[10%]" />

          <Link to="/process">
            <li className="flex gap-2 cursor-pointer">
              <GitCompareArrows size={20} color="#5b21b6"/>
              
              <span>Cadastro de Processo</span>
            </li>
          </Link>

          <hr className="mt-[10%]" />

          <Link to="/production">
            <li className="flex gap-2 cursor-pointer">
              <RefreshCcwDot size={20} color="#06b6d4"/>
              <span>Cadastro de Produção</span>
            </li>
          </Link>
        </ul>
      </div>

      <Link to="/">
        <div className="flex gap-2 text-red-400 w-full h-[72px] items-center pl-5 logout">
          <LogOut />
         <span>Logout</span>
        </div>
      </Link>
    </aside>
  );
}
