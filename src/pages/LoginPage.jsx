import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
//bg-[#27272a]
export function LoginPage() {
  return (
    <main className="bg-gray-200 w-full h-screen flex justify-center items-center dark:bg-gray-800">
      <div className="w-[30%] h-[70%] bg-white rounded-lg flex flex-col items-center  p-5 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-3">
          <span className="font-bold underline flex justify-center w-full text-3xl ">
            <p className="text-[#363949] dark:text-white">Vip</p>
            <p className="text-sky-400 ">Plast</p>
          </span>
          <h2 className="text-2xl font-bold text-[#363949] dark:text-white">LOGIN</h2>
        </div>

        <div className="flex flex-col gap-2 w-full items-center mt-11">
          <div className="w-[70%] ">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="w-[70%]">
            <Input type="password" placeholder="Password" />
          </div>
          <a className="underline cursor-pointer text-md">Forgot password?</a>
        </div>

        <Button asChild className="w-[30%] bg-blue-800 hover:bg-blue-800/80 mt-11 text-white">
          <Link to="/home">Login</Link>
        </Button>

       
      </div>
    </main>
  );
}
