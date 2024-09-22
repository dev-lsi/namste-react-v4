import s from "./MenuPage.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { restaurantsContext } from "../utils/context";
import Shirm from "./Shirm";

const MenuHeader = () => {
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
  const {nextCloseTime,opened}=availability;
  const {deliveryTime}=sla;
 
  console.log(restaurantData[0]);
  
  const resImage = <img className={s["res-image"]} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>

  return (
    <div className={s["menu-header"]}>
      <div className={s["res-image-container"]}>
         {resImage?resImage:<Shirm/>}
      </div>
      <h4>{name || title}</h4>
      <h5>Area: {areaName}</h5>
      <h5>Locality: {locality}</h5>
      <h5>Op/Cl: {isOpen}</h5>
      <h5>Rating: {avgRating}</h5>
      <h5>Close at: {nextCloseTime}</h5>
      <h5>{opened?"Open":"Closed"} now</h5>
      <h5>Delivery time: {deliveryTime}</h5>
      <h5>Cuisines: {cuisines.join(", ")}</h5>
    </div>
  );
};

export default MenuHeader;
