import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";
import s from "./Home.module.css";
import { restaurantsContext } from "../utils/context";


const Menu = () => {
    const {id} = useParams();
    const {restaurantsContextValue,setRestaurantsContextValue}=useContext(restaurantsContext)
    const restaurants=restaurantsContextValue.restaurants;
    const restaurantData = restaurants.filter(r=>r.info.id===id);
    console.log(restaurantData[0])
    const restaurantName=restaurantData[0].info.name;
    const [menuData,setMenuData]=useState(null);
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        const response = await fetch(resMenu+id);
        const rawMenuData = await response.json();
        const list = rawMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        
        const filtered=list.filter(x=>x.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
        const categories = filtered.map(x=>{return{title:x.card.card.title,items:x.card.card.itemCards
        }})
        console.log(categories)
        setMenuData(categories);
    }
    return (
        <div className={s["home"] + " text-slate-200"}>
            {!menuData
             ?"Loading Data..."
             :menuData.map(cat=>cat.title)}
            <h3>{id}</h3>
            <h3>{restaurantName}</h3>
        </div>
    );
};

export default Menu;