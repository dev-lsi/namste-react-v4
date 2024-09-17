import s from "./Home.module.css";
import LocationButton from "./LocationButton.js";
import { appCTX } from "../utils/appCTX.js";
import { useContext } from "react";
import { cities } from "../utils/citiesWithCoordinates.js";


const DefaultHome = ({data,setData}) => {
  const { ctxValue, setCTXValue } = useContext(appCTX);
  const { location } = ctxValue;
  const { coords, isValid } = location;
  const { lat, lng } = coords;
  console.log("DefaultHome with location->");
  console.log(coords);

  return (
    <div className={s["home"]}>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
      <div className="flex justify-between">
        <LocationButton city={cities.Delhi} setData={setData} />
        <LocationButton city={cities.Bengaluru} setData={setData} />
        <LocationButton city={cities.Satara} setData={setData} />
      </div>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
      <h1>Choose location</h1>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
    </div>
  );
};
export default DefaultHome;
