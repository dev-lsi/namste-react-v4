import s from "./Home.module.css";

const RestaurantInfo=({restaurantData})=>{

    const {
        id,
        name,
        cloudinaryImageId,
        avgRating,
        cuisines,
        areaName,
        locality,
        sla,
      } = restaurantData;

    return (
        <div className={s["restaurant-info"]}>
            <h4 className={s["name"]}>{name}</h4>
            <h5 className={s["area"]}>{areaName}</h5>
            <h5 className={s["delivery-time"]}>{areaName}</h5>
            <h5 className={s["open-closed"]}>{areaName}</h5>
            <h6 className={s["rating"]}>{avgRating}</h6>
            <h6 className={s["cuisines"]}>{cuisines.join(", ")}</h6>
      </div>
    );
};

export default RestaurantInfo;