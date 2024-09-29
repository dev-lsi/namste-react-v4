import s from "./Home.module.css";
import LocationButton from "./LocationButton.js";
import { cities } from "../utils/citiesWithCoordinates.js";

const HomeDefault = ({lat}) => {
  return (
    <div className={s["home-default"]}>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <div className={s["default-container"]}>
        <h4>
          {
            lat==="N/A"
            ?"Location not provided!"
            :"It looks like you are not in the delivery range of Swiggy!"
          }
        </h4>
        <h5 >
          To try the App you can choose among locations below
        </h5>
        <div className={s["default-container-controls"]}>
          <LocationButton city={cities.Delhi}/>
          <LocationButton city={cities.Bengaluru}/>
          <LocationButton city={cities.Mumbai}/>
          <LocationButton city={cities.Kolkata}/>
          <LocationButton city={cities.Pune}/>
          <LocationButton city={cities.Jaipur}/>
          <LocationButton city={cities.Agra}/>
        </div>
      </div>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
    </div>
  );
};
export default HomeDefault;
