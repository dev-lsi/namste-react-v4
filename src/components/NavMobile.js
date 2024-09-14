import { useEffect, useState } from "react";
import s from "./NavMobile.module.css";
import { Link } from "react-router-dom";

const NavMobile = () => {
   const [isOpen,setIsOpen] = useState(false);
   function toggleMenu(e){
    setIsOpen(!isOpen)
  }
  return (
    <nav className={s["nav-mobile"]} onClick={(e)=>toggleMenu(e)}>
    <button >Menu</button>
      <ul className={isOpen?s["opened-menu"]:s["closed-menu"]}>
        <li>
          <Link to="/"> 🏠 Home </Link>
        </li>
        <li>
          <Link to="/about"> 👀 About this.Project </Link>
        </li>
        <li>
          <Link to="/contacts"> 📪 Contact me </Link>
        </li>
        <li>
          <Link to="/cart"> 🛒 Cart </Link>
        </li>
        <li>
          <Link to="/login"> ✒  LogIn/LogOut </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
