import { useState } from "react"

const Button=({data,setData})=>{
    
    const [counter,setCounter] = useState(11);
    const payload = {"widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","Restaurant_Group_WebView_PB_Theme":"","Restaurant_Group_WebView_SEO_PB_Theme":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":JSON.stringify(counter),"inlineFacetFilter":"","restaurantCountWidget":""},"nextOffset":"CJY7ELQ4KICQjNPXvt7AJTDUEA=="};
     
    
    return (
        <div>
            <button onClick={async()=>{
                console.log(counter)
               const response = await fetch("https://www.swiggy.com/api/seo/getListing?lat=19.2133035606211&lng=72.87611371920241&isDineoutCollection=false",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(payload)
               })
               const newData = await response.json()
               console.log(newData)
               setCounter(counter + 15);
                setData([...data, ...newData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants])
            }}>Fetch</button>
        </div>
    )
}

export default Button;