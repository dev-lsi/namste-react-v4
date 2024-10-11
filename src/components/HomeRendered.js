import { useEffect, useState } from "react";
import { useContext } from "react";
import { locCTX, resCTX } from "../utils/context";
import { cities } from "../utils/citiesWithCoordinates";
import { url_base } from "../utils/constants";
import s from "./Home.module.css";
import RestaurantCard from "./RestaurantCard";
import LoadMoreButton from "./LoadMoreButton";
import Shirm from "./Shirm";
import LocationButton from "./LocationButton";
import { getRestaurants } from "../utils/getRestaurants";

const HomeRendered = () => {
  const { locCtx, setLocCtx } = useContext(locCTX);
  const { coords, city } = locCtx;
  const { lat, lng } = coords;
  const url = url_base + "lat=" + lat + "&lng=" + lng;
  const url2 =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=" +
    lat +
    "&lng=" +
    lng +
    "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    
    const url2Proxy = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=')+lat +
    "&lng=" +
    lng +
    "&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const { resCtx, setResCtx } =
    useContext(resCTX);

  const [resList, setResList] = useState(null);
  
  const [data, setData] = useState(null);

  const [buttonName, setButtonName] = useState("Show Top Rated");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBtnName, setSearchBtnName] = useState("Search");

  // console.log(data);
  // console.log(resCtx.restaurants);

  useEffect(() => {
    if (resCtx.restaurants.length === 0) {
      getRestaurants(url2Proxy, setResCtx);
    }
    setResList(resCtx.restaurants);
    setData(resCtx.restaurants);
  }, [resCtx]);

  return (
    <div>
      {!data ? (
        <Shirm />
      ) : (
        <div className={"page"}>
         
          <div className={s["hero"]}>
            
            <h1 className={s["hero-heading"]}>
              {city || "City name not avaiable"}
            </h1>
            <h5 className={s["hero-sub-heading"]}>
              <span>Restaurants Delivering Food Here</span>
            </h5>
            <h5 className={s["hero-sub-heading"]}>
              Lat: <span>{lat}</span> Lng: <span>{lng}</span>
            </h5>
            <div className={s["hero-cover"]}></div>
           
          </div>

          <div className={s["restaurants-container"]}>
            <div className={s["filters-container"]}>
              <button
                className={s["top-rated-button"]}
                onClick={() => {
                  console.log("clicked");
                  if (buttonName === "Show Top Rated") {
                    setButtonName("Show All");
                    setData(data.filter((r) => Number(r.info.avgRating) >= 4));
                  } else {
                    setButtonName("Show Top Rated");
                    setData(resList);
                  }
                }}
              >
                {buttonName}
              </button>
              <div className={s["search-container"]}>
                <input
                  className={s["search-input"]}
                  placeholder="add search term..."
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button
                  className={s["search-button"]}
                  onClick={() => {
                    if (searchBtnName === "Search") {
                      setData(
                        data.filter((x) =>
                          x.info.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                      );
                      setSearchTerm("");
                      setSearchBtnName("Show All");
                    } else {
                      setData(resList);
                      setSearchBtnName("Search");
                    }
                  }}
                >
                  {searchBtnName}
                </button>
              </div>
            </div>
            {!data ? (
              <Shirm />
            ) : (
              data.map((r, index) => {
                //console.log(r);
               return (<RestaurantCard
                  key={r.info.id + index}
                  restaurantData={r.info}
                  id={r.info.id}
                />
              )})
            )}
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
            <div className={s["restaurant-card-shifter"]}></div>
          </div>
          <LoadMoreButton />
          <div className={s["change-location-container"]}>
            <h5>Change current Location</h5>
            <LocationButton city={cities.Delhi} />
            <LocationButton city={cities.Bengaluru} />
            <LocationButton city={cities.Mumbai} />
            <LocationButton city={cities.Kolkata} />
            <LocationButton city={cities.Pune} />
            <LocationButton city={cities.Jaipur} />
            <LocationButton city={cities.Agra} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeRendered;
