import { url_base } from "./constants";

export async function checkIsValidUserLocation(data) {

    const url = url_base + "lat=" + data.lat + "&lng=" + data.lng;
    const response = await fetch(url);
    const responseData = await response.json();

    return responseData.data.success.cards
      ? { data, isValid: true }
      : { data, isValid: false };
  }