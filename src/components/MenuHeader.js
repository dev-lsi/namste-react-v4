import { useParams } from "react-router-dom";
import { useContext } from "react";
import {restaurantsContext} from "../utils/context";

const MenuHeader=()=>{
    const {id} = useParams();
    const {restaurantsContextValue}=useContext(restaurantsContext)
    const restaurants = restaurantsContextValue.restaurants;
    const restaurantData = restaurants.filter(r=>r.info.id===id);
    const restaurantName = restaurantData[0].info.name;
    return (
        <div>
           <h3>{restaurantName}</h3>
        </div>
    )
}

export default MenuHeader;