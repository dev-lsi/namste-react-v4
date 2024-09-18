import { createApp } from "./src/utils/createApp";
import { getUserLocation } from "./src/utils/getUserLocation";
import { checkIsValidUserLocation } from "./src/utils/checkIsValidUserLocation";

async function startApp() {

  return(<h1>"App Started!"</h1>)
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
  }else return createApp(null);
  
}

startApp();
