import s from "./MenuPage.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { restaurantsContext } from "../utils/context";
import Shirm from "./Shirm";

const MenuHeader = ({}) => {
  const { id } = useParams();

  const { restaurantsContextValue } = useContext(restaurantsContext);
  const restaurants = restaurantsContextValue.restaurants;
  const restaurantData = restaurants.filter((r) => r.info.id === id);
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
    sla,
  } = restaurantData[0].info;
  const { nextCloseTime, opened } = availability;
  const { deliveryTime } = sla;

  console.log(restaurantData[0]);

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
      <div className={s["res-image-container"]}>
        {resImage ? resImage : <Shirm />}
      </div>
      <div className={s["res-info-container"]}>
        <h4 className={s["res-info-name"]}>{name || title}</h4>
        <h5 className={s["res-info-area"]}>Area: {areaName}</h5>
        <h5 className={s["res-info-locality"]}>Locality: {locality}</h5>
        <h5 className={s["res-info-reating"]}>Rating: {avgRating}⭐</h5>
        <h5 className={s["res-info-close-at"]}>Close at: {nextCloseTime}</h5>
        <h5 className={s["res-info-open-closed"]}>Now is {opened ? "Open" : "Closed"} </h5>
        <h5 className={s["res-info-delivery-time"]}>Delivery time: {deliveryTime} min.</h5>
        <h5 className={s["res-info-cuisines"]} >Cuisines: {cuisines.join(", ")}</h5>
        
      </div>
    </div>
  );
};

export default MenuHeader;
