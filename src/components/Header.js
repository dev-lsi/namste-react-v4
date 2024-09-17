import logo from "../assets/logo512.png"
import githubIcon from "../assets/291716_github_logo_social network_social_icon.png";
import faceBookIcon from "../assets/4202867_facebook_icon.png";
import linkedInIcon from "../assets/107159_circle_linkedin_icon.png"
import { useEffect, useState } from "react";
import NavMain from "./NavMain";
import NavMobile from "./NavMobile";
import { useContext } from "react";
import { appCTX } from "../utils/appCTX";

const Header=()=>{
  const { ctxValue, setCTXValue } = useContext(appCTX);
  const { location } = ctxValue;
  const { coords, isValid } = location;
  const { lat, lng } = coords;
  console.log("DefaultHome with location->");
  console.log(coords);

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [isOpen,setIsOpen] = useState(false);
  
  useEffect(()=>{
      window.addEventListener('resize',handleResize);
      return ()=>{window.removeEventListener('resize', handleResize)}
    }
    ,[windowWidth]);
    
    function handleResize(){
      setWindowWidth(window.innerWidth);
    }
  
    return (
        <div className="header  bg-slate-900 text-slate-100 fixed top-0 left-0 right-0 z-10 h-12 border-slate-100 border-b-2">
            <div className="left">
              <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="middle">
              {windowWidth>=440
              ?<NavMain/>
              :<NavMobile/>}
              
                    
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
            <div className="display basis-full">
               <p>City:{location.name?location.name:"N/A"} </p>
               <p>Coords: lat={coords.lat} lng={lng}</p>
            </div>
        </div>
    )
}

export default Header;