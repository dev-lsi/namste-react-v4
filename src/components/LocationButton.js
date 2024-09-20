import { useContext } from "react";
import { locationContext,restaurantsContext } from "../utils/context.js";
import s from "./Home.module.css";
const LocationButton = ({ city }) => {
  const { name, coords } = city;
  const { locationContextValue, setLocationContextValue } =
    useContext(locationContext);
    const {restaurantsContextValue,setRestaurantsContextValue} = useContext(restaurantsContext);
    
  return (
    <button
      className={s["location-button"]}
      onClick={() => {
        setRestaurantsContextValue({
          restaurants:[]
        });
        setLocationContextValue({
          ...locationContextValue,
          isValid: true,
          coords,
          city:name,
        });
      }}
    >
      {name}
    </button>
  );
};

export default LocationButton;
