import { url_base } from "./constants";

export async function checkIsValidUserLocation(coords) {
  alert("innnnnn")
  alert("in Validity:"+ "LAT" + coords.lat + "LNG:" + coords.lng)
  const url = url_base + "lat=" + coords.lat + "&lng=" + coords.lng;
  alert("URL:"+url)
  const response = await fetch(url,{
    'mode': 'cors'
  });
  alert(Object.keys(response));
  const responseData = await response.json();
  alert("responseData keys:"+Object.keys(responseData));
  return responseData.data.success.cards ? true : false;
}
