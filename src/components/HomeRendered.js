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
  const { coords, city } = locationContextValue;
  const { lat, lng } = coords;
  const url = url_base + "lat=" + lat + "&lng=" + lng;

  const { restaurantsContextValue, setRestaurantsContextValue } =
    useContext(restaurantsContext);
  
  const[resList,setResList] = useState(null);
  const[data,setData]=useState(null);
  
  const [buttonName,setButtonName]=useState("Show Top Rated");
  const [searchTerm,setSearchTerm]=useState("");
  const[searchBtnName,setSearchBtnName]=useState("Search")

  // console.log(data);
  // console.log(restaurantsContextValue.restaurants);

  useEffect(() => {
  if (restaurantsContextValue.restaurants.length === 0) {
       getRestaurants(url,setRestaurantsContextValue);
       
   }
   setResList(restaurantsContextValue.restaurants);
    setData(restaurantsContextValue.restaurants);
    
  }, [restaurantsContextValue]);


  return (
    <div>
      {!data ? (
        <Shirm />
      ) : (
        <div className={s["home-rendered"]}>
          <div className={s["hero"]}>
            <h1 className={s["hero-heading"]}>{city||"City name not avaiable"}</h1>
            <h5 className={s["hero-sub-heading"]}>Restaurants delivering at Lat:{lat} Lng:{lng}</h5>
            </div> 

          <div className={s["restaurants-container"]}>
            <div className="filters-container min-w-full flex gap-x-2 h-24 mb-6 justify-around p-0 flex-wrap gap-y-6 border rounded-sm border-slate-500">
              <button
                className="top-rated-button text-xs w-36 h-8 border border-slate-400 rounded-md bg-slate-900 self-center"
                onClick={()=>{
                     console.log("clicked")
                     if(buttonName==="Show Top Rated"){
                      setButtonName("Show All");
                      setData(data.filter(r=>Number(r.info.avgRating) >= 4));
                     }else{
                      setButtonName("Show Top Rated");
                      setData(resList);
                    } 
                }}
                >{buttonName}
              </button>
              <div className="search-container flex flex-nowrap gap-x-2 self-center">
                <input
                  className={`bg-slate-300 text-slate-800 pl-2 h-6 self-center  outline-none w-[8em]`}
                  type="text" 
                  value={searchTerm} 
                  onChange={(e)=>{
                      setSearchTerm(e.target.value);
                  }}/>
                  <button
                   className="search-button text-xs w-24 h-8 border border-slate-400 rounded-md bg-slate-900"
                   onClick={()=>{
                    if(searchBtnName==="Search"){
                      setData(data.filter(x=>x.info.name.toLowerCase().includes(searchTerm.toLowerCase())));
                      setSearchTerm("");
                      setSearchBtnName("Show All");

                    }else{
                      setData(resList);
                      setSearchBtnName("Search");

                    }
                      
                      
                   }}
                  >{searchBtnName}</button>
              </div>
              
          
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
