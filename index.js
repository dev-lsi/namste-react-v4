import { createApp } from "./src/utils/createApp";
import { getUserLocation } from "./src/utils/getUserLocation";
import { checkIsValidUserLocation } from "./src/utils/checkIsValidUserLocation";

async function start() {

  async function configureLocation() {
    const userLocationData = await getUserLocation();
    return checkIsValidUserLocation(userLocationData);
  }

  return createApp(await configureLocation());
}


start();



