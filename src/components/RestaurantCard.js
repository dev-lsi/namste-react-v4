import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import s from "./Home.module.css";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurantData,id }) => {
  const { cloudinaryImageId } = restaurantData;

  return (
    <div className={s["restaurant-card"]}>
      
      <RestaurantImage imageId={cloudinaryImageId} resId={id}  />
      <RestaurantInfo restaurantData={restaurantData} />
      
    </div>
  );
};

export default RestaurantCard;
