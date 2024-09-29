import { createApp } from "./src/utils/createApp";
import { getUserLocation } from "./src/utils/getUserLocation";
import { checkIsValidUserLocation } from "./src/utils/checkIsValidUserLocation";


async function startApp() {

  const userLocationCoordinates = await getUserLocation();
  
  if(userLocationCoordinates){
   
    const isUserLocationInRange = await checkIsValidUserLocation(
      userLocationCoordinates
  );
   
    const locationData = {
      city: "",
      coords: userLocationCoordinates,
      isValid: isUserLocationInRange,
    };
    
    return createApp(locationData);
  }else {
    const locationData = {
      city: "",
      coords: {lat:"N/A",lng:"N/A"},
      isValid: false,
    };
    
    return createApp(locationData);
  }
  
}

startApp();
