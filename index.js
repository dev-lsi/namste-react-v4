import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contacts from "./src/components/Contacts";
import LoginLogout from "./src/components/LoginLogout";
import Cart from "./src/components/Cart";
import Menu from "./src/components/Menu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contacts",
            element: <Contacts />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
        {
            path: "/login",
            element: <LoginLogout />,
        },
        {
          path: "/menu/:id",
          element: <Menu />,
      },
      ],
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}><App/></RouterProvider>);