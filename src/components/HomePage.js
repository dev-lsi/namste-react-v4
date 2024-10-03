import HomeDefault from "./HomeDefault";
import HomeRendered from "./HomeRendered";
import { useContext } from "react";
import { locCTX } from "../utils/context";

const HomePage = () => {
  const {locCtx} = useContext(locCTX);
  const {isValid,coords} = locCtx;
  const {lat,lng}=coords;
  

  return isValid 
    ? <HomeRendered /> 
    : <HomeDefault lat={lat}/>
};

export default HomePage;
