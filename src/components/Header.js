import logo from "../assets/logo512.png"
import githubIcon from "../assets/291716_github_logo_social network_social_icon.png";
import faceBookIcon from "../assets/4202867_facebook_icon.png";
import linkedInIcon from "../assets/107159_circle_linkedin_icon.png"
import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <div className="header  bg-slate-900 text-slate-300">
            <div className="left">
              <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="middle">
              <nav>
                <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About this.Project</Link></li>
                 <li><Link to="/contacts">Contact me</Link></li>
                 <li><Link to="/cart">Cart</Link></li>
                 <li><Link to="/login">LogIn/LogOut</Link></li>    
                </ul>
              </nav>
                    
            </div>
            <div className="right">
              <ul className="">
                <li>
                    <img className="social-icon" src={githubIcon} alt="GitHub icon"/>  
                </li>
                <li>
                    <img className="social-icon" src={linkedInIcon} alt="linkedIn icon"/>
                </li>
                <li>
                    <img className="social-icon" src={faceBookIcon} alt="FaceBook icon"/>
                </li>
              </ul>
            </div>
        </div>
    )
}

export default Header;