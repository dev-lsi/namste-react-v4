import { Link } from "react-router-dom";
import s from "./Header.module.css";


const NavMain = () => {
  return (
    <nav className={s["nav-main"]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About this.Project</Link>
        </li>
        <li>
          <Link to="/contacts">Contact me</Link>
        </li>
        
        <li>
          <Link to="/login">LogIn/LogOut</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
