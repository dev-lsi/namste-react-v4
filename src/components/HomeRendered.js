import { useEffect,useState } from "react";
import s from "./Home.module.css";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import { url_base } from "../utils/constants";
import Shirm from "./Shirm";

const HomeRendered=({currentLocation})=>{
     const {lat,lng}=currentLocation;
     const url = url_base + "lat=" + lat + "&lng=" + lng;
     const [data, setData] = useState(null);
   
    useEffect(()=>{
        getRestaurants(url);
    },[]);

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
                            {data ? data.length : 0} restaurants loaded
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
                        <Button data={data} setData={setData} currentLocation={currentLocation} />
                   
                    </div>
                        
                }        
              </div>  
        );
};    

export default HomeRendered;
