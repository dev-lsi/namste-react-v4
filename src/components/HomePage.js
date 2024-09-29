import HomeDefault from "./HomeDefault";
import HomeRendered from "./HomeRendered";
import { useContext } from "react";
import { locationContext } from "../utils/context";

const HomePage = () => {
  const {locationContextValue} = useContext(locationContext);
  const {isValid,coords} = locationContextValue;
  const {lat,lng}=coords;
  

  return isValid 
    ? <HomeRendered /> 
    : <HomeDefault lat={lat}/>
};

export default HomePage;
