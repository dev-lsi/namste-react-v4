import { useEffect, useState } from "react";

export function useGeoLocation(){

   const [gl,setGL] = useState(null);

   useEffect(()=>{
    getGeolocation();
   },[]);

  function getGeolocation(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(success, error);
      }else{
        console.log("Not supported!");
        setGL({ response: "not supported" })
      }
    
      // Success callback
      function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setGL({ response: { lat, long } })
      }
    
      // Error callback
      function error() {
        setGL({ response: "failed" })
      }
  }
  return gl;
};
