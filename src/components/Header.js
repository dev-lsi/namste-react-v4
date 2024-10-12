import logo from "../assets/logo512.png";
import { useEffect, useState } from "react";
import NavMain from "./NavMain";
import NavMobile from "./NavMobile";
import { useContext } from "react";
import { locCTX, resCTX, cartCTX } from "../utils/context";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-colored.png";
import whiteCartIcon from "../assets/cart-white01.png"
import { getItemsCount } from "../utils/getItemsCount";

const Header = ({isHeaderShown}) => {
  const { locCtx } = useContext(locCTX);
  const { coords } = locCtx;
  const { lat, lng } = coords;
  const city = locCtx.city;
  const { cartCtx, setCartCtx } = useContext(cartCTX);

  const { resCtx } = useContext(resCTX);
  const { restaurants } = resCtx;

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
    <div className={s["header"]+" "+ s[isHeaderShown?"show-header":"hide-header"]}>
      <div className={s["left"]}>
        <img className={s["logo"]} src={logo} alt="logo"></img>
      </div>
      <div className={s["middle"]}>
        {windowWidth >= 600 ? <NavMain /> : <NavMobile />}
      </div>
      <Link to="/cart">
          <div className={s["cart-icon-container"]}>
            <img className={s["cart-icon"]} src={whiteCartIcon} />
            <p
              className={
                !cartCtx || Object.keys(cartCtx).length === 0
                  ? s["cart-icon-counter"] + " " + s["red"]
                  : s["cart-icon-counter"] + " " + s["green"]
              }
            >
              {!cartCtx ? 0 : getItemsCount(cartCtx)}
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
