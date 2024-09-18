import { createApp } from "./src/utils/createApp";
import { getUserLocation } from "./src/utils/getUserLocation";
import { checkIsValidUserLocation } from "./src/utils/checkIsValidUserLocation";


async function startApp() {
  
  const userLocationCoordinates = await getUserLocation();
  alert(userLocationCoordinates.lat +":"+ userLocationCoordinates.lng)
  
  if(userLocationCoordinates){
    alert("User Location Coordinates")
    const isUserLocationInRange = await checkIsValidUserLocation(
      userLocationCoordinates
    );
    alert(isUserLocationInRange)
    const locationData = {
      city: "",
      coords: userLocationCoordinates,
      isValid: isUserLocationInRange,
    };
    
    return createApp(locationData);
  }else {
    
    return createApp(null);}
  
}

startApp();
