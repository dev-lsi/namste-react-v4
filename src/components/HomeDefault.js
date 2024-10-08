import s from "./Home.module.css";
import LocationButton from "./LocationButton.js";
import { cities } from "../utils/citiesWithCoordinates.js";

const HomeDefault = ({ lat }) => {
  return (
    <div className={"page"}>
      <div className={s["bg-layout"]}>
        <div className={s["default-container"]}>
          <h4>
            {lat === "N/A"
              ? "Location not provided!"
              : "It looks like you are not in the delivery range of Swiggy!"}
          </h4>
          <h5>To try the App you can choose among locations below</h5>
          <div className={s["default-container-controls"]}>
            <LocationButton city={cities.Delhi} />
            <LocationButton city={cities.Bengaluru} />
            <LocationButton city={cities.Mumbai} />
            <LocationButton city={cities.Kolkata} />
            <LocationButton city={cities.Pune} />
            <LocationButton city={cities.Jaipur} />
            <LocationButton city={cities.Agra} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeDefault;
