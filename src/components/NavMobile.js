
import githubIcon from "../assets/291716_github_logo_social network_social_icon.png";
import faceBookIcon from "../assets/4202867_facebook_icon.png";
import linkedInIcon from "../assets/107159_circle_linkedin_icon.png";
import { useEffect, useState } from "react";
import s from "./NavMobile.module.css";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu(e) {
    setIsOpen(!isOpen);
  }
  return (
    <nav className={s["nav-mobile"]} onClick={(e) => toggleMenu(e)}>
      <button className={s["menu-button"]}>Menu</button>
      <ul className={isOpen ? s["opened-menu"] : s["closed-menu"]}>
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
          <Link to="/login"> ✒ Log In </Link>
        </li>
        <li>
        
          <a className={s["social-link"]} href="https://www.github.com" target="_blank" rel="noopener noreferrer" alt="">
          <img 
              className={s["social-icon-mob"]}
              src={githubIcon}
              alt="GitHub icon"
            />
          GitHub
          </a>
         
        </li>
        <li>
          <a className={s["social-link"]} href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" alt="">
            <img
              className={s["social-icon-mob"]}
              src={linkedInIcon}
              alt="linkedIn icon"
            />
            LinkedIn
          </a>
        </li>
        <li>
          <a className={s["social-link"]} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" alt="">
            <img
              className={s["social-icon-mob"]}
              src={faceBookIcon}
              alt="FaceBook icon"
            />
            Facebook
          </a>
          
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
