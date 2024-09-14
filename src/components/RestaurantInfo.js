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
            <h4 className="">{name}</h4>
            <h5 className="">{areaName}</h5>
            <h6 className="">{locality}</h6>
            <h6 className="">{avgRating}</h6>
            <h6 className="">{cuisines.join(",")}</h6>
      </div>
    );
};

export default RestaurantInfo;