export async function getMenuData(url,setData){
    
    const response = await fetch(url);
    const rawMenuData = await response.json();
    
    const list = rawMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

    const filtered=list.filter(x=>x.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    const categories = filtered.map(x=>{return{title:x.card.card.title,items:x.card.card.itemCards
    }});
    setData([...categories]);
};