import { createApp } from "./src/utils/createApp";
import { getUserLocation } from "./src/utils/getUserLocation";
import { checkIsValidUserLocation } from "./src/utils/checkIsValidUserLocation";


function startApp() {
  
  const userLocationCoordinates = getUserLocation();
  return userLocationCoordinates;
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
  }else return createApp(null);
  
}

startApp();
