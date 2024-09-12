import { useEffect, useState } from "react";
import { Base_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


const Home=()=>{
    const [data,setData] = useState(null);
    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const response=await fetch(Base_URL);
        const responseData = await response.json();
        console.log(responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        const restaurants = responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setData(restaurants);
    }

    return (

        <div className="home">
            <div className="restaurants-container">
                {!data
                    ?"Loading..."
                    :data.map(r=><Link to={"/menu/" + r.info.id}>
                    <RestaurantCard key={r.info.id} resData = {r.info}/>
                    </Link>)
                }
            </div>
           
        </div>
    );
};

export default Home;