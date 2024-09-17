import { createApp } from "./src/utils/createApp";
import { getUserLocation } from "./src/utils/getUserLocation";
import { checkIsValidUserLocation } from "./src/utils/checkIsValidUserLocation";

async function startApp() {
  const userLocationCoordinates = await getUserLocation();
  const userLocationData = await checkIsValidUserLocation(userLocationCoordinates);
  return createApp( userLocationData );
}

startApp();
