import { useEffect, useState } from "react";
import { Base_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import s from "./Home.module.css";


const Home=()=>{
    
    const [data,setData] = useState(null);
    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const response = await fetch(Base_URL);
        const responseData = await response.json();
        console.log(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        const restaurants = responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants);
        setData(restaurants);
    }

    return (

        <div className={s.home}>
            <p className={s["restaurants-counter-display"]}>{data?data.length:0} restaurants loaded</p>
            <div className={s["restaurants-container"]}>
                {!data
                    ?"Loading..."
                    :data.map(r=>
                    <RestaurantCard key={r.info.id}  restaurantData = {r.info} id={r.info.id}/>
                    )
                }
                <div className={s["restaurant-card-shifter"]}></div>
                <div className={s["restaurant-card-shifter"]}></div>
                <div className={s["restaurant-card-shifter"]}></div>

            </div>
            <Button data={data} setData={setData}/>
        </div>
    );
};

export default Home;