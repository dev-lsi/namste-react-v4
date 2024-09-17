import { useState } from "react";
import DefaultHome from "./DefaultHome";
import HomeRendered from "./HomeRendered";

const Home = ({location}) => {
  const {lat,lng}=location.data;
  const isValid=location.isValid;
  const [isLocationValid, setIsLocationValid] = useState(isValid);
  const [currentLocation, setCurrentLocation] = useState({lat,lng});
   
  return isLocationValid 
   ? <HomeRendered currentLocation={currentLocation}/>
   : <DefaultHome
        setCurrentLocation={setCurrentLocation}
        setIsLocationValid={setIsLocationValid}
    />
};

export default Home;
