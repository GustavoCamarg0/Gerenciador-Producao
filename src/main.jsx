import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { Users } from "./pages/Users.jsx";
import { AddProcess } from "./pages/AddProcess.jsx";
import { AddProduction } from "./pages/AddProduction.jsx";
import { AddProduct } from "./pages/AddProduct.jsx";
import {DashProduct} from "./pages/DashProduct.jsx";

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
    element: <AddProduct />,
  },
  {
    path: "/process",
    element: <AddProcess />,
  },
  {
    path: "/production",
    element: <AddProduction />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/dashproduct",
    element: <DashProduct />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
