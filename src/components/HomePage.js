import HomeDefault from "./HomeDefault";
import HomeRendered from "./HomeRendered";
import { useContext,useState } from "react";
import { locationContext } from "../utils/context";

const HomePage = () => {
  const {locationContextValue} = useContext(locationContext);
  const {isValid} = locationContextValue;
  

  return isValid 
    ? <HomeRendered /> 
    : <HomeDefault />
};

export default HomePage;
