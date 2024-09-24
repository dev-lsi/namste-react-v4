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
    return createApp(null);
  }
  
}

startApp();
