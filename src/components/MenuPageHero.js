import s from "./MenuPage.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { resCTX } from "../utils/context";
import Shirm from "./Shirm";

const MenuPageHero = ({ restaurant }) => {
  const { id } = useParams();
  const { resCtx } = useContext(resCTX);
  //const restaurants = resCtx.restaurants;
  // const restaurantData = restaurants.filter((r) => r.info.id === id);
  // const {
  //   name,
  //   title,
  //   areaName,
  //   locality,
  //   isOpen,
  //   avgRating,
  //   availability,
  //   cloudinaryImageId,
  //   cuisines,
  //   sla,
  //   logo
  // } = restaurantData[0].info;

  const {
    name,
    title,
    areaName,
    locality,
    isOpen,
    avgRating,
    availability,
    cloudinaryImageId,
    cuisines,
    logo,
  } = restaurant;
  const { nextCloseTime, opened } = availability;
  

  const resLogo = (
    <img
      className={s["res-image"]}
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        logo
      }
    ></img>
  );

  const resImage = (
    <img
      className={s["res-image"]}
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId
      }
    ></img>
  );

  return (
    <div className={s["menu-header"]}>
      <div className={s["logo-name-row"]}>
      <div className={s["res-image-container"]}>
        {logo ? resLogo : resImage}
      </div>
      <div className={s["res-info-container"]}>
        <h5 className={s["res-info-name"]}>{name || title}</h5>
        <h6 className={s["res-info-area"]}>Area: {areaName}</h6>
        <h6 className={s["res-info-locality"]}>Locality: {locality}</h6>
      </div>
      </div>
      <div className={s["res-stat-container"]}>
          <h4 className={s["res-stat-rating"]}>
                <span className={s["res-stat-rating-span"]}>
                  {avgRating}
                </span>⭐
          </h4>
          <h6 
            className={s["res-stat-close-at"]}>
              Closes at: 
              <span className={s["res-stat-close-at-number"]}>
              {
               nextCloseTime?nextCloseTime.split(" ")[1].split(":",2).join(" : "):"N/A"
              }
              </span>
          </h6>
          <h6 className={s["res-stat-open-closed"]}>
            Now is 
            {opened 
            ? <span className={"text-green-500 " + s["res-stat-open-closed-number"]}> Open</span> 
            : <span 
            className={"text-red-700 " + s["res-stat-open-closed-number"]}> Closed</span>
            }
          </h6>
         
        </div>
      <h6 className={s["cuisines-header"]}>
         Cuisines:  
         <span className={s["cuisines-text"]+" text-sm"}>{cuisines.join(", ")}

         </span>
      </h6>
     
    </div>
  );
};

export default MenuPageHero;
