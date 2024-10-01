export async function getRestaurants(url,setRestaurantsContextValue) {

    const response = await fetch(url);
    const responseData = await response.json();
    
    // const restaurants_old =
    //   responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    
    const restaurants = responseData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurantsContextValue({ restaurants: [...restaurants] });
  }