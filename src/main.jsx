import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import PrincipalPage from "./pages/PrincipalPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/Cadastro-produto",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
  {
    path: "/home",
    element: <PrincipalPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
