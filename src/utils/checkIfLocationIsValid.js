import { url_base } from "./constants";

export async function checkIfLocationIsValid(location,setIsLocationValid){
    
    if(location.response){
    const {lat,lng} = location.response;
    const url = url_base + "lat=" + lat + "&lng=" + lng;

    const response = await fetch(url);
    const responseData = await response.json();
    
    responseData.data.success.cards?console.log("location is valid"):console.log("location is invalid")
    
    responseData.data.success.cards?setIsLocationValid(true):setIsLocationValid(false);
    }
    
};