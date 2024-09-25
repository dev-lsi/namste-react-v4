export async function getRestaurants(url,setRestaurantsContextValue) {
    const response = await fetch("https://corsproxy.io/?"+url);
    const responseData = await response.json();

    const restaurants =
      responseData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setRestaurantsContextValue({ restaurants: [...restaurants] });
  }