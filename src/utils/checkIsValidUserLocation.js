import { url_base } from "./constants";

export async function checkIsValidUserLocation(coords) {
  alert("in Validity:"+ "LAT"+coords.lat +"LNG:"+coords.lng)
  const url = url_base + "lat=" + coords.lat + "&lng=" + coords.lng;
  const response = await fetch(url);
  alert(Object.keys(response));
  const responseData = await response.json();

  return responseData.data.success.cards ? true : false;
}
