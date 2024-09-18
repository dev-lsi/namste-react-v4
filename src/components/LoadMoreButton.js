import { useState } from "react";
import s from "./Home.module.css";
import { url_base } from "../utils/constants";
import { restaurantsContext,locationContext } from "../utils/context";
import { useContext } from "react";

const LoadMoreButton=()=>{
    const {locationContextValue,setLocationContextValue} = useContext(locationContext)
    const {city,coords,isValid}=locationContextValue;
    const {lat,lng}=coords;
    const url = url_base + "lat=" + lat + "&lng=" + lng;
    
    const {restaurantsContextValue,setRestaurantsContextValue} = useContext(restaurantsContext);
    const data = restaurantsContextValue.restaurants;
    if(!restaurantsContextValue.paging){
        setRestaurantsContextValue({
            restaurants:[...data],
            paging:11
        })
    }
    
    const payload = {"widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","Restaurant_Group_WebView_PB_Theme":"","Restaurant_Group_WebView_SEO_PB_Theme":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":JSON.stringify(restaurantsContextValue.paging),"inlineFacetFilter":"","restaurantCountWidget":""},"nextOffset":"CJY7ELQ4KICQjNPXvt7AJTDUEA=="};

    return (
        <div className={s["load-more-button"]}>

            <button onClick={async()=>{
               
               const response = await fetch(url,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
               });
            
                const responseData = await response.json();
                
                if(responseData.statusMessage==="read ECONNRESET"){
                    console.log("Fetch Failed!");
                }else{
                    setRestaurantsContextValue({
                        paging:(Number(restaurantsContextValue.paging)+15),
                        restaurants:[...data,...responseData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants]
                    })
                    
                }
                
               
               
            }}>Load More...</button>
        </div>
    )
}

export default LoadMoreButton;