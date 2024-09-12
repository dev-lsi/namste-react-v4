import RestaurantImage from "./RestaurantImage";

const RestaurantCard = ({resData}) => {
  const {
    id,
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName,
    locality,
    sla,
  } = resData;
  return <div className="restaurant-card">
      <RestaurantImage id={cloudinaryImageId}/>
      <div className="restaurant-info">
        <h1>{name}</h1>
        <h2>{areaName}</h2>
        <h3>{locality}</h3>
        <h4>{avgRating}</h4>
        <h5>{cuisines.join(",")}</h5>
      </div>
  </div>;
};

export default RestaurantCard;
