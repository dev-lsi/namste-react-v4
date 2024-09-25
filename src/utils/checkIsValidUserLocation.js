import { url_base } from "./constants";

export async function checkIsValidUserLocation(coords) {
  const url ="https://corsproxy.io/?" + url_base + "lat=" + coords.lat + "&lng=" + coords.lng;
  
  const response = await fetch(url);
  //alert(Object.keys(response));
  const responseData = await response.json();
  //alert(Object.keys(responseData));
  return responseData.data.success.cards ? true : false;
}
