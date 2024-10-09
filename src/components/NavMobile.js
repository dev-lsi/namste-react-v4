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

  function handleAnimation(e) {
    const currClassName = e.target.className;
    console.log(currClassName);
    if (currClassName == "opened-menu") {
      e.target.style.display = "block";
    } else {
      e.target.style.display = "none";
    }
  }

  return (
    <nav className={s["nav-mobile"]} onClick={(e) => toggleMenu(e)}>
      <button className={s["menu-button"]}>Menu</button>
      <ul
        onAnimationEnd={handleAnimation}
        className={isOpen ? s["opened-menu"] : s["closed-menu"]}
      >
        <li>
          <Link to="/">
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>❌</span>
              <span className={s["span-name"]}>Close Menu</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>🏠</span>
              <span className={s["span-name"]}>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>👀</span>
              <span className={s["span-name"]}>About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>📪</span>
              <span className={s["span-name"]}>Contact</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>✒</span>
              <span className={s["span-name"]}>Login</span>
            </div>
          </Link>
        </li>
        <li>
          <a
            className={s["social-link"]}
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            alt=""
          >
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>
                <img
                  className={s["social-icon-mob"]}
                  src={githubIcon}
                  alt="GitHub icon"
                />
              </span>

              <span className={s["span-name"]}>GitHub</span>
            </div>
          </a>
        </li>
        <li>
          <a
            className={s["social-link"]}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            alt=""
          >
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>
                <img
                  className={s["social-icon-mob"]}
                  src={linkedInIcon}
                  alt="linkedIn icon"
                />
              </span>

              <span className={s["span-name"]}>LinkedIn</span>
            </div>
          </a>
        </li>
        <li>
          <a
            className={s["social-link"]}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            alt=""
          >
            <div className={s["link-div"]}>
              <span className={s["span-icon"]}>
                <img
                  className={s["social-icon-mob"]}
                  src={faceBookIcon}
                  alt="FaceBook icon"
                />
              </span>

              <span className={s["span-name"]}>FaceBook</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
