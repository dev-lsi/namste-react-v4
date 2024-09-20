import { useEffect, useState } from "react";
import { useContext } from "react";
import { locationContext, restaurantsContext } from "../utils/context";
import { cities } from "../utils/citiesWithCoordinates";
import { url_base } from "../utils/constants";
import s from "./Home.module.css";
import RestaurantCard from "./RestaurantCard";
import LoadMoreButton from "./LoadMoreButton";
import Shirm from "./Shirm";
import LocationButton from "./LocationButton";

const HomeRendered = () => {
  const { locationContextValue, setLocationContextValue } =
    useContext(locationContext);
  const { coords, isValid, city } = locationContextValue;
  const { lat, lng } = coords;
  const url = url_base + "lat=" + lat + "&lng=" + lng;

  const { restaurantsContextValue, setRestaurantsContextValue } =
    useContext(restaurantsContext);

  const data = restaurantsContextValue.restaurants;
  console.log(data);
  console.log(restaurantsContextValue.restaurants);

  useEffect(() => {
    if (restaurantsContextValue.restaurants.length === 0) {
      getRestaurants(url);
    }
  }, [data]);

  async function getRestaurants(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    const restaurantsArr =
      responseData.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants;
    console.log(
      responseData.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );

    setRestaurantsContextValue({ restaurants: [...data, ...restaurantsArr] });
  }

  return (
    <div>
      {!data ? (
        <Shirm />
      ) : (
        <div className={s["home-rendered"]}>
          <div className={s["hero"]}>
            <h3 className={s["hero-heading"]}>{city}</h3>
            <h5>Restaurants delivering food in your area</h5>
          </div>

          <div className={s["restaurants-container"]}>
            {!data
              ? "Loading..."
              : data.map((r) => (
                  <RestaurantCard
                    key={r.info.id}
                    restaurantData={r.info}
                    id={r.info.id}
                  />
                ))}
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
          </div>

          <LoadMoreButton />
          <div>
            <LocationButton city={cities.Delhi} />
            <LocationButton city={cities.Bengaluru} />
            <LocationButton city={cities.Satara} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeRendered;
