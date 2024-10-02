import logo from "../assets/logo512.png";
import githubIcon from "../assets/291716_github_logo_social network_social_icon.png";
import faceBookIcon from "../assets/4202867_facebook_icon.png";
import linkedInIcon from "../assets/107159_circle_linkedin_icon.png";
import { useEffect, useState } from "react";
import NavMain from "./NavMain";
import NavMobile from "./NavMobile";
import { useContext } from "react";
import { locationContext, restaurantsContext, cartCTX } from "../utils/context";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-colored.png";

const Header = () => {
  const { locationContextValue } = useContext(locationContext);
  const { coords } = locationContextValue;
  const { lat, lng } = coords;
  const city = locationContextValue.city;
  const { cart, setCart } = useContext(cartCTX);

  const { restaurantsContextValue } = useContext(restaurantsContext);
  const { restaurants } = restaurantsContextValue;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <div className={s["header"]}>
      <div className={s["left"]}>
        <img className={s["logo"]} src={logo} alt="logo"></img>
      </div>
      <div className={s["middle"]}>
        {windowWidth >= 600 ? <NavMain /> : <NavMobile />}
      </div>
      <Link to="/cart">
          <div className={s["cart-icon-container"]}>
            <img className={s["cart-icon"]} src={cartIcon} />
            <p
              className={
                !cart || Object.keys(cart).length === 0
                  ? s["cart-icon-counter"] + " " + s["red"]
                  : s["cart-icon-counter"] + " " + s["green"]
              }
            >
              {!cart ? 0 : Object.keys(cart).length}
            </p>
          </div>
        </Link>

      <div className={s["right"]}>
        <Link to="/login">
          <button className={s["login-button"]}>Log In</button>
        </Link>
      </div>

      <div className={s["restaurants-info-display"]}>
        <p>{city}</p>
        <p>
          lat={lat} lng={lng}
        </p>
        <p>{restaurants ? restaurants.length : "0 "} :Loaded</p>
        <p>📡: {isOnline ? " ✅ connected" : "⭕ offline"}</p>
        <p>User: 👤</p>
      </div>
    </div>
  );
};

export default Header;
