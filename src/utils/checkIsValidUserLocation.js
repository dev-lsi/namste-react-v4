import { url_base } from "./constants";

export async function checkIsValidUserLocation(coords) {
  
  const url = url_base + "lat=" + coords.lat + "&lng=" + coords.lng;
  const response = await fetch(url);
  const responseData = await response.json();

  return responseData.data.success.cards ? true : false;
}
