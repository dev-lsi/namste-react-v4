import { useEffect, useState} from "react";
import { useContext } from "react";
import { locationContext, restaurantsContext } from "../utils/context";
import { cities } from "../utils/citiesWithCoordinates";
import { url_base } from "../utils/constants";
import s from "./Home.module.css";
import RestaurantCard from "./RestaurantCard";
import LoadMoreButton from "./LoadMoreButton";
import Shirm from "./Shirm";
import LocationButton from "./LocationButton";


const HomeRendered=()=>{
    const { locationContextValue, setLocationContextValue } = useContext(locationContext);
    const { coords, isValid, city } = locationContextValue;
    const { lat, lng } = coords;
    const url = url_base + "lat=" + lat + "&lng=" + lng;
    
    const {restaurantsContextValue,setRestaurantsContextValue} = useContext(restaurantsContext);
    
    const data = restaurantsContextValue.restaurants;
    
    
    useEffect(()=>{
        if(restaurantsContextValue.restaurants.length===0){
            getRestaurants(url);
        }
        
    },[data]);

    async function getRestaurants(url) {
        
        const response = await fetch(url);
        const responseData = await response.json();

        const restaurantsArr=responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        setRestaurantsContextValue({'restaurants':[...data,...restaurantsArr]})
        
    }
    
    return (
              <div>
                { !data
                    ?<Shirm/>
                    :<div className={(s["home"]) + " " + " text-slate-200"}>
                        <div className="text-left mb-8">
                            <h2>{city}</h2>
                            <h4>restaurants delivering food in your area</h4>
                            <h6>{data.length}</h6>
                        </div>
                        <p className={s["restaurants-counter-display"]}>
                            {data ? data.length : 0} restaurants loaded :  {"lat:"+lat+"lng:"+lng}
                       </p>
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
                        
                        <LoadMoreButton/>
                        <div>
                            <LocationButton city={cities.Delhi}/>
                            <LocationButton city={cities.Bengaluru}/>
                            <LocationButton city={cities.Satara}/>
                        </div>
                    </div>
                        
                }        
              </div>  
        );
};    

export default HomeRendered;
