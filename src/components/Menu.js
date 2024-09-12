import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";

const Menu = () => {
    const {id} = useParams();
    const [data,setData]=useState(null);
    useEffect(()=>{
        getData();
    },[]);
    async function getData(){
        const response = await fetch(resMenu+id);
        const RawMenuData = await response.json();
        const list = RawMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        
        const filtered=list.filter(x=>x.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
        const categories=filtered.map(x=>{return{title:x.card.card.title,items:x.card.card.itemCards
        }})
        console.log(categories)
        setData(categories);
    }
    return (
        <div className="menu-page">
            {!data
             ?"Loading Data..."
             :data.map(cat=>cat.title)}
            <h1>{id}</h1>
        </div>
    );
};

export default Menu;