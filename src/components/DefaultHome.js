import { useEffect, useState } from "react";
import { Base_URL, url_base } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Button from "./Button";
import s from "./Home.module.css";
import { useGeoLocation } from "../hooks/useGeoLocation";
const Delhi ={lat:"28.7041", lng:"77.1025"}
const Bengaluru ={lat:"12.971599",lng: "77.594566"}
const Satara ={lat:"17.6805",lng: "74.0183"}

const DefaultHome=({setCurrentLocation, setIsLocationValid})=>{
    
    return(
      <div className={s["home"]}>
        <h1>Deafault Page</h1>
        
        <button 
        className="font-bold text-stone-200 border-2 rounded-md py-2 px4" onClick={()=>{
            setCurrentLocation(url_base + "lat=" + Delhi.lat + "&lng=" + Delhi.lng);
            setIsLocationValid(true);
        }}>Delhi
        </button>
            
        </div>
        
        
    );
};
export default DefaultHome;