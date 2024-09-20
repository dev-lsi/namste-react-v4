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
        isOpen,
      } = restaurantData;
      const {deliveryTime}=sla

    return (
        <div className={s["restaurant-info"]}>
            <div className={s["sub-1"]}>
              <p className={s["name"]}>{name}</p>
              <p className={s["area"]}>
                <span className={s["area-logo"]}>Area: </span>
                <span className={s["area-name"]}>{areaName}</span>
              </p>
              <p className={s["delivery-time"]}>
                <span className={s["delivery-time-logo"]}>Delivery Time </span>
                <span className={s["delivery-time-number"]}>{deliveryTime}</span>
                <span className={s["delivery-time-min"]}> min.</span>
              </p>
            </div>
            <div className={s["sub-2"]}>
              <p className={s["open-closed"]}>{isOpen?
                <span className={s["open"]}>Open</span>:
                <span className={s["closed"]}>Closed</span>}
              </p>
              <p className={s["rating"]}>
                <span className={s["rating-logo"]}>⭐</span>
                <span className={s["rating-number"]}>{avgRating}</span>
              </p>
            </div>
            <div className={s["cuisines-container"]}>
              <p className={s["cuisines-header"]}>Cuisines</p>
              <p className={s["cuisines-list"]}>{cuisines.join(", ")}</p>
            </div>
      </div>
    );
};

export default RestaurantInfo;