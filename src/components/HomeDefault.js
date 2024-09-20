import s from "./Home.module.css";
import LocationButton from "./LocationButton.js";
import { cities } from "../utils/citiesWithCoordinates.js";

const HomeDefault = () => {
  return (
    <div className={s["home-default"]}>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <div className={s["default-container"]}>
        <h4>
          It looks like you are not in the delivery range of Swiggy
        </h4>
        <h5 >
          To try the App you can choose among locations below
        </h5>
        <div className={s["default-container-controls"]}>
          <LocationButton city={cities.Delhi}/>
          <LocationButton city={cities.Bengaluru}/>
          <LocationButton city={cities.Satara}/>
        </div>
      </div>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h1 className={s["bg-text-h1"]}>Choose location</h1>
      <h4 className={s["bg-text-h4"]}>Choose location</h4>
    </div>
  );
};
export default HomeDefault;
