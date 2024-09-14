import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";
import s from "./Home.module.css";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurantData,id }) => {
  const { cloudinaryImageId } = restaurantData;

  return (
    <div className={s["restaurant-card"]}>
      
      <RestaurantImage id={cloudinaryImageId} />
      <RestaurantInfo restaurantData={restaurantData} />
      <Link className={s["show-menu-link"]}  to={"/menu/" + id}>
      <span> Show Menu</span>
      </Link>
    </div>
  );
};

export default RestaurantCard;
