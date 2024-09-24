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
import { getRestaurants } from "../utils/getRestaurants";

const HomeRendered = () => {
  const { locationContextValue, setLocationContextValue } =
    useContext(locationContext);
  const { coords, isValid, city } = locationContextValue;
  const { lat, lng } = coords;
  const url = url_base + "lat=" + lat + "&lng=" + lng;

  const { restaurantsContextValue, setRestaurantsContextValue } =
    useContext(restaurantsContext);
  
  const[isfilterOn,setIsFilterOn]=useState(false);
  const[filterValue,setFilterValue]= useState(4);
  let data = restaurantsContextValue.restaurants;

  console.log(data);
  console.log(restaurantsContextValue.restaurants);

  useEffect(() => {
    if (restaurantsContextValue.restaurants.length === 0) {
      getRestaurants(url,setRestaurantsContextValue);
    }
  }, [data]);

  if(isfilterOn&&data){
    data=[...formatData(data,filterValue)]
  }else{
    data = restaurantsContextValue.restaurants
  }

  function formatData(data,filterValue){
    return data
    .filter(x => 
      Number(x.info.avgRating) >= Number(filterValue))
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
            <div className="filters-container min-w-full">
              <button
                className="w-36 h-12 border-2 border-slate-400 rounded-md bg-slate-900"
                onClick={()=>{setIsFilterOn(!isfilterOn)}}
                >Show Only With Rating Over:
              </button>
              <input 
                  className="text-slate-900 w-8 pl-2" 
                  type="text"
                  value={filterValue}
                  onKeyDown={(e)=>{
                    const key = e.key;
                   
                    if( /^\d$/.test(key) )
                    //e.target.value=key;
                    setFilterValue(Number(key));
                  }}
                  >
              </input>
          
            </div>
            {!data
              ? <Shirm/>
              : data.map((r,index) => (
                  <RestaurantCard
                    key={r.info.id+index}
                    restaurantData={r.info}
                    id={r.info.id}
                  />
                ))}
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
          </div>
          <LoadMoreButton />
          <div className={s["change-location-container"]}>
               <h5>Change current Location</h5>
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
