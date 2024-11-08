import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import PrincipalPage from "./pages/Dashboard.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { Users } from "./pages/Users.jsx";
import { Process } from "./pages/Process.jsx";
import { Production } from "./pages/Production.jsx";
import { Product } from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/product",
    element: <Product />,
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
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/process",
    element: <Process />,
  },
  {
    path: "/production",
    element: <Production />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
