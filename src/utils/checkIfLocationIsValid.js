import { url_base } from "./constants";

export async function checkIfLocationIsValid(setIsValid,userLocation){

    const {lat,lng} = userLocation.response
    const url = url_base + "lat=" + lat + "&lng=" + lng;

    const response = await fetch(url);
    const responseData = await response.json();

    console.log("Data fetched in checkIfLocationIsValid");
    console.log(responseData);
    
    responseData.data.success.cards?setIsValid(true):setIsValid(false);
};