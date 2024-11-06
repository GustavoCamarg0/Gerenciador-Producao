import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <main className="bg-[#27272a] w-full h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white w-[400px] h-[500px] p-5 gap-2 items-center relative">
        <h1 className="font-bold text-center text-3xl">LOGIN</h1>

        <div className="bg-gray-800/10 w-80 h-[40px] flex items-center justify-center gap-2 p-1 mt-[15%]">
          <Mail />
          <input
            type="text"
            className="flex-1 outline-none bg-transparent h-full"
            placeholder="Email"
          />
        </div>
        <div className="bg-gray-800/10 w-80 h-[40px] flex items-center justify-center gap-2 p-1">
          <Lock />
          <input
            type="password"
            className="flex-1 outline-none bg-transparent h-full"
            placeholder="Password"
          />
        </div>
        <a href="#" className="text-purple-500 underline text-sm mt-1">
          Forgot password?
        </a>

        <Link
          to={"/home"}
          className="bg-sky-400 h-[30px] w-[90px] text-center p-1 text-white font-bold rounded mt-[15%]"
        >
          Sing in
        </Link>
      </div>
    </main>
  );
}
