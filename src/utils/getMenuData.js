export async function getMenuData(url,setCategories,setRestaurant){
    
    const response = await fetch(url);
    const rawMenuData = await response.json();
    console.log(rawMenuData)
    const list = rawMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards||rawMenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const filtered=list.filter(x=>x.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    const categories = filtered.map(x=>{return{title:x.card.card.title,items:x.card.card.itemCards
    }});

    setCategories([...categories]);

    const restaurantInfo = rawMenuData.data.cards[2].card.card.info;
    console.log(restaurantInfo)
    setRestaurant({...restaurantInfo});


};