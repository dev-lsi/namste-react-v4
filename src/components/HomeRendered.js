import { useEffect} from "react";
import { useContext } from "react";
import { locationContext, restaurantsContext } from "../utils/context";
import { cities } from "../utils/citiesWithCoordinates";
import { url_base } from "../utils/constants";
import s from "./Home.module.css";
import RestaurantCard from "./RestaurantCard";
import LoadMoreButton from "./LoadMoreButton";
import Shirm from "./Shirm";
import LocationButton from "./LocationButton";


const HomeRendered=({data,setData})=>{
    const { locationContextValue, setLocationContextValue } = useContext(locationContext);
    const { coords, isValid, city } = locationContextValue;
    const { lat, lng } = coords;
    const url = url_base + "lat=" + lat + "&lng=" + lng;
    
    const {restaurantsContextValue,setRestaurantsContextValue} = useContext(restaurantsContext);
    const {restaurants} = restaurantsContextValue;
    console.log(restaurants)
    
    useEffect(()=>{
        if(!data){
            getRestaurants(url);
        }
        
    },[data]);

    async function getRestaurants(url) {
        
        const response = await fetch(url);
        const responseData = await response.json();

        const restaurantsArr=responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        setData(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantsContextValue({'restaurants':[...restaurants,...restaurantsArr]})
        
    }
    
    return (
              <div>
                { !data
                    ?<Shirm/>
                    :<div className={(s["home"]) + " " + " text-slate-200"}>
                        <div className="text-left mb-8">
                            <h2>{city}</h2>
                            <h4>restaurants delivering food in your area</h4>
                            <h6>{restaurants.length}</h6>
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
                        <LocationButton city={cities.Bengaluru} setData={setData}/>   
                        <LoadMoreButton data={data} setData={setData} currentLocation={coords} />
                   
                    </div>
                        
                }        
              </div>  
        );
};    

export default HomeRendered;
