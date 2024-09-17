import { useEffect,useState } from "react";
import s from "./Home.module.css";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import { url_base } from "../utils/constants";
import Shirm from "./Shirm";
import { useContext } from "react";
import { appCTX } from "../utils/appCTX";
import LocationButton from "./LocationButton";
import { cities } from "../utils/citiesWithCoordinates";

const HomeRendered=({data,setData})=>{
    const { ctxValue, setCTXValue } = useContext(appCTX);
    const { location } = ctxValue;
    const { coords, isValid } = location;
    const { lat, lng } = coords;
    console.log("HomeRendered with location->")
    console.log(coords);

     const url = url_base + "lat=" + lat + "&lng=" + lng;
     
   
    useEffect(()=>{
        if(!data){
            getRestaurants(url);
        }
        
    },[data]);

    async function getRestaurants(url) {
        
        const response = await fetch(url);
        const responseData = await response.json();
      
        console.log(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        setData(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    return (
              <div>
                { !data
                    ?<Shirm/>
                    :<div className={s.home}>
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
                        <Button data={data} setData={setData} currentLocation={coords} />
                   
                    </div>
                        
                }        
              </div>  
        );
};    

export default HomeRendered;
