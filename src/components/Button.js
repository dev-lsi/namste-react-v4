import { useState } from "react";
import s from "./Home.module.css";
import { mockResInfo } from "../utils/mockData";
import { url_base } from "../utils/constants";

const Button=({data,setData,currentLocation})=>{
    
    const {lat,lng} = (currentLocation.response)||{lat:"0",lng:"0"};
    const [currData,setCurrData] = useState(data);
    const [newData,setNewData] = useState(null);
    const [counter,setCounter] = useState(11);
    const payload = {"widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","Restaurant_Group_WebView_PB_Theme":"","Restaurant_Group_WebView_SEO_PB_Theme":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":JSON.stringify(counter),"inlineFacetFilter":"","restaurantCountWidget":""},"nextOffset":"CJY7ELQ4KICQjNPXvt7AJTDUEA=="};
    return (
        <div className={s["load-more-button"]}>

            <button onClick={async()=>{
               setCurrData([...data,mockResInfo])
               const response = await fetch(url_base+"lat="+lat+"&lng="+lng,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
               })
            
                const responseData = await response.json();
                
                if(responseData.statusMessage==="read ECONNRESET"){
                    
                    console.log("Fetch Failed!");
                }else{
                    setCounter(counter + 15);
                    setData([...data, ...responseData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants])
                }
                
               
               
            }}>Load More...</button>
        </div>
    )
}

export default Button;