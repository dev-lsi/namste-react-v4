import { Link } from "react-router-dom";
import s from "./Header.module.css";
import githubIcon from "../assets/291716_github_logo_social network_social_icon.png";
import faceBookIcon from "../assets/4202867_facebook_icon.png";
import linkedInIcon from "../assets/107159_circle_linkedin_icon.png";


const NavMain = () => {
  return (
    <nav className={s["nav-main"]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
        <li>
            <a
              href="https://github.com/dev-lsi"
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              <img
                className={s["social-icon"]}
                src={githubIcon}
                alt="GitHub icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lachezar-ivanov-026917284/"
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              <img
                className={s["social-icon"]}
                src={linkedInIcon}
                alt="linkedIn icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100079584917511"
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              <img
                className={s["social-icon"]}
                src={faceBookIcon}
                alt="FaceBook icon"
              />
            </a>
          </li>       
      </ul>
    </nav>
  );
};

export default NavMain;
