import logo from "../assets/logo512.png"
import githubIcon from "../assets/291716_github_logo_social network_social_icon.png";
import faceBookIcon from "../assets/4202867_facebook_icon.png";
import linkedInIcon from "../assets/107159_circle_linkedin_icon.png"
import { useEffect, useState } from "react";
import NavMain from "./NavMain";
import NavMobile from "./NavMobile";
import { useContext } from "react";
import { locationContext,restaurantsContext } from "../utils/context";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-colored.png";

const Header=()=>{
  const { locationContextValue} = useContext(locationContext);
  const { coords } = locationContextValue;
  const { lat, lng } = coords;
  const city = locationContextValue.city;
  
  const {restaurantsContextValue} = useContext(restaurantsContext);
  const {restaurants} = restaurantsContextValue;

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [isOnline,setIsOnline]=useState(true);

  useEffect(()=>{
    const handleOnline=()=>setIsOnline(true);
    const handleOffline=()=>setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline',handleOffline);

  return ()=>{
    removeEventListener('online',handleOnline);
    removeEventListener('offline',handleOffline);
  }
  },[]);
  
  
  
  useEffect(()=>{
      window.addEventListener('resize',handleResize);
      return ()=>{window.removeEventListener('resize', handleResize)}
    }
    ,[windowWidth]);
    
    function handleResize(){
      setWindowWidth(window.innerWidth);
    }
  
    return (
        <div className={s["header"]}>
            <div className={s["left"]}>
              <img className={s["logo"]} src={logo} alt="logo"></img>
            </div>
            <div className={s["middle"]}>
              {windowWidth>=480
              ?<NavMain/>
              :<NavMobile/>}
              
                    
            </div>
            <div>
            
            <Link to="/cart">
                <img className={s["cart-icon"]} src={cartIcon}/>
            </Link>
      
            </div>
            <div className={s["right"]}>
              <ul className="">
                <li>
                  <a href="https://github.com/dev-lsi" target="_blank" rel="noopener noreferrer" alt="">
                    <img className={s["social-icon"]} src={githubIcon} alt="GitHub icon"/>  
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lachezar-ivanov-026917284/" target="_blank" rel="noopener noreferrer" alt="">
                    <img className={s["social-icon"]} src={linkedInIcon} alt="linkedIn icon"/>
                  </a>  
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100079584917511" target="_blank" rel="noopener noreferrer" alt="">
                      <img className={s["social-icon"]} src={faceBookIcon}    alt="FaceBook icon"/> 
                  </a>
                </li>
              </ul>
            </div>
            <div className={s["restaurants-info-display"]}>
               <p>City:{city}</p>
               <p>Coords: lat={lat} lng={lng}</p>
               <p>{restaurants?restaurants.length:"0"} Restaurants Loaded</p>
               <p>📡: {isOnline?" ✅" : "⭕" }</p>
            </div>
        </div>
    )
}

export default Header;