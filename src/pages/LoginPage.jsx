import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token to localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the home page
      navigate("/home");
    } catch (error) {
      // Handle errors (e.g., incorrect email/password)
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred!");
      }
    }
  };

  return (
    <main className="bg-gray-200 w-full h-screen flex justify-center items-center dark:bg-gray-800">
      <div className="w-[30%] h-[70%] bg-white rounded-lg flex flex-col items-center p-5 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-3">
          <span className="font-bold underline flex justify-center w-full text-3xl">
            <p className="text-[#363949] dark:text-white">Vip</p>
            <p className="text-sky-400">Plast</p>
          </span>
          <h2 className="text-2xl font-bold text-[#363949] dark:text-white">LOGIN</h2>
        </div>

        <form
          className="flex flex-col gap-2 w-full items-center mt-11"
          onSubmit={handleLogin}
        >
          <div className="w-[70%]">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-[70%]">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <a className="underline cursor-pointer text-md">Forgot password?</a>
          <Button
            type="submit"
            className="w-[30%] bg-blue-800 hover:bg-blue-800/80 mt-5 text-white"
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  );
}
