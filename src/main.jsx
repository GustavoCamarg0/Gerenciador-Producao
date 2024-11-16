import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { Users } from "./pages/Users.jsx";
import { Process } from "./pages/Process.jsx";
import { Production } from "./pages/Production.jsx";
import { Product } from "./pages/Product.jsx";
import { DashProduct } from "./pages/DashProduct.jsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/process",
    element: <Process />,
  },
  {
    path: "/production",
    element: <Production />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/dashproduct",
    element: <DashProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
