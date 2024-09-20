import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../components/Home";
import About from "../components/About";
import Contacts from "../components/Contacts";
import LoginLogout from "../components/LoginLogout";
import Cart from "../components/Cart";
import Menu from "../components/Menu";

export function createApp(location) {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App location={location} />,
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
  root.render(<RouterProvider router={router} />);
}
