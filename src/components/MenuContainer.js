import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";
import MenuCategory from "./MenuCategory";


const MenuContainer = () => {
    const {id} = useParams();
    
    const [data,setData] = useState(null);
    useEffect(()=>{
        console.log(id)
       if(id){
        getData(resMenu+id)
       }
    },[]);

    async function getData(url){
        const response = await fetch(url);
        const rawMenuData = await response.json();
        console.log(rawMenuData)
        const list = rawMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

        const filtered=list.filter(x=>x.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
        const categories = filtered.map(x=>{return{title:x.card.card.title,items:x.card.card.itemCards
        }});
        console.log(categories)
        setData(categories);
    }
  return (
    <div className="menu-container">
        {!data 
            ? "Loading Menu..." 
            : data.map((c) => <MenuCategory key={c.title}  data={c}/>)
        }
    </div>
  );
};

export default MenuContainer;
