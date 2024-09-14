import { RES_IMAGES_URL } from "../utils/constants";
import s from "./Home.module.css";
import logo from "../assets/logo512.png";
import { useEffect, useState } from "react";

const RestaurantImage = ({ id }) => {
  const [currImage,setCurrImage] = useState(null)
  useEffect(()=>{
     
     const img = <img
        className={s["restaurant-image"]}
        src={RES_IMAGES_URL + id}
        alt="restaurant image"
      ></img>
      setCurrImage(img);
    
  },[])
  return (
    <div className={s["restaurant-image-container"]}>
      {!currImage?<img src={logo} alt="loading..."/>:currImage}
    </div>
  );
};



export default RestaurantImage;
