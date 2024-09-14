import { useEffect, useState } from "react";
import { Base_URL, url_base } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import s from "./Home.module.css";
import { useGeoLocation } from "../hooks/useGeoLocation";
import DefaultHome from "./DefaultHome";
import { checkIfLocationIsValid } from "../utils/checkIfLocationIsValid";

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [data, setData] = useState(null);
  const [isLocationValid, setIsLocationValid] = useState(false);
  const userLocation = useGeoLocation();

  useEffect(() => {
    if (userLocation) {
      checkIfLocationIsValid(setIsLocationValid, userLocation);
    }
  }, [userLocation,userLocation]);

  async function getRestaurants(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    console.log("Fetched in getRestaurants");
    console.log(responseData);

    setData(responseData);
  }

  return !isLocationValid ? (
    <DefaultHome
      setCurrentLocation={setCurrentLocation}
      setIsLocationValid={setIsLocationValid}
    />
  ) : (<div>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
    <h1>HHHHHHHH</h1>
  </div>)
//     <div className={s.home}>
//       <p className={s["restaurants-counter-display"]}>
//         {data ? data.length : 0} restaurants loaded
//       </p>
//       <div className={s["restaurants-container"]}>
//         {!data
//           ? "Loading..."
//           : data.map((r) => (
//               <RestaurantCard
//                 key={r.info.id}
//                 restaurantData={r.info}
//                 id={r.info.id}
//               />
//             ))}
//         <div className={s["restaurant-card-shifter"]}></div>
//         <div className={s["restaurant-card-shifter"]}></div>
//         <div className={s["restaurant-card-shifter"]}></div>
//       </div>
//       <Button data={data} setData={setData} currentLocation={currentLocation} />
//     </div>
//   );
};

export default Home;
