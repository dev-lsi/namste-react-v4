import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "../../App";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Login from "../components/Login";
import Cart from "../components/Cart";
import MenuPage from "../components/MenuPage";


export function createApp(location) {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App location={location} />,
      children: [
        {
          path: "/",
          element: <HomePage />,
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
          element: <Login />,
        },
        {
          path: "/menu/:id",
          element: <MenuPage />,
        },
      ],
    },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    
      <RouterProvider router={router}/>
    );
  }
