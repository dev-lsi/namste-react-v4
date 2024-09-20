import { Outlet } from "react-router-dom";
import s from "./Main.module.css"

const Main = () => {
  return (
    <div >
      < Outlet/>
    </div>
  );
};

export default Main;
