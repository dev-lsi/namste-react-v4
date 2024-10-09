import { useEffect, useState } from "react";
import s from "./Home.module.css";
import { url_base } from "../utils/constants";
import { resCTX, locCTX } from "../utils/context";
import { useContext } from "react";

const LoadMoreButton = () => {
  const { locCtx } = useContext(locCTX);
  const { coords } = locCtx;
  const { lat, lng } = coords;

  const url0 = url_base + "lat=" + lat + "&lng=" + lng;

  const url1 =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
    lat +
    "&lng=" +
    lng +
    "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const url2 =
    "https://www.swiggy.com/api/seo/getListing?lat=" +
    lat +
    "&lng=" +
    lng +
    "&isDineoutCollection=false";

  const urlProxy = "https://proxy.cors.sh/" + 'https://www.swiggy.com/api/seo/getListing?lat='+lat+"&lng="+lng+"&isDineoutCollection=false";

  const { resCtx, setResCtx } = useContext(resCTX);
  const data = resCtx.restaurants;
  const [page, setPage] = useState(26);
  const [btnName, setBtnName] = useState("Load More");
  const numberOfLoaded = resCtx.restaurants.lenght;
  const [hasResponse, setHasResponse] = useState(true);

  const payload0 = {
    widgetOffset: {
      NewListingView_category_bar_chicletranking_TwoRows: "",
      NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
      Restaurant_Group_WebView_PB_Theme: "",
      Restaurant_Group_WebView_SEO_PB_Theme: "",
      collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
        JSON.stringify(page),
      inlineFacetFilter: "",
      restaurantCountWidget: "",
    },
    nextOffset: "CJY7ELQ4KICQjNPXvt7AJTDUEA==",
  };

  const payload1 = {
    sortAttribute: "relevance",
    isFiltered: false,
    queryId: "seo-data-6ed08255-6af2-42cb-a41b-e4ae04db48b2",
    seoParams: {
      apiName: "CityPage",
      brandId: "",
      seoUrl: "www.swiggy.com/city/pune",
      pageType: "CITY_PAGE",
      businessLine: "FOOD",
    },
    widgetOffset: {
      NewListingView_category_bar_chicletranking_TwoRows: "",
      NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
      Restaurant_Group_WebView_PB_Theme: "",
      Restaurant_Group_WebView_SEO_PB_Theme: "",
      collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
        JSON.stringify(page),
      inlineFacetFilter: "",
      restaurantCountWidget: "",
    },
    nextOffset: "CJY7ELQ4KICQi8LNwrmmHzDUEDgE",
  };

//   useEffect(() => {
//     resCtx;
//   }, []);

  async function getNextRestaurants() {
    if (hasResponse === true) {
      setHasResponse(false);
      const response = await fetch(urlProxy, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload1),
      });
      setHasResponse(true);
      const responseData = await response.json();
      if (responseData.statusMessage === "read ECONNRESET") {
        setBtnName("Try Again");
      } else {
        setPage(page + 15);
        setBtnName("Load More");
        setResCtx({
          restaurants: [
            ...data,
            ...responseData.data.success.cards[0].card.card.gridElements
              .infoWithStyle.restaurants,
          ],
          //  restaurants:[...data,...responseData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants]
        });
      }
    }
  }

  return hasResponse ? (
    <button className={s["load-more-button"]} onClick={getNextRestaurants}>
      {btnName} | Loaded: {resCtx.restaurants.length}
    </button>
  ) : (
    <button className={s["load-more-button"]} onClick={getNextRestaurants}>
      Loading... | Loaded: {resCtx.restaurants.length}
    </button>
  );
};

export default LoadMoreButton;
