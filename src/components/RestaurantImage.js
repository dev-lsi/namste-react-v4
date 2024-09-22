import { RES_IMAGES_URL } from "../utils/constants";
import s from "./Home.module.css";
import logo from "../assets/logo512.png";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

const RestaurantImage = ({imageId,resId}) => {
  
  const [currImage,setCurrImage] = useState(null)
  useEffect(()=>{
     
     const img = <img
        className={s["restaurant-image"]}
        src={RES_IMAGES_URL + imageId}
        alt="restaurant image"
      ></img>
      setCurrImage(img);
    
  },[])
  return (
    <div className={s["restaurant-image-container"]}>
      {!currImage
        ?<img src={logo} alt="loading..."/>
        :(<div>
          {currImage}
          <Link className={s["show-menu-link"]}  to={"/menu/" + resId}>
            Show Menu
          </Link>
        </div>)
      }
      
    </div>
  );
};



export default RestaurantImage;
