import { useContext } from "react";
import { locCTX, resCTX } from "../utils/context.js";
import s from "./Home.module.css";
const LocationButton = ({ city }) => {
  const { name, coords } = city;
  const { locCtx, setLocCtx } = useContext(locCTX);
  const { resCtx, setResCtx } = useContext(resCTX);
  
    
 

  return (
    <button
      className={s["location-button"]}
      
      onClick={() => {
        setResCtx({
          restaurants: [],
        });
        setLocCtx({
          ...locCtx,
          isValid: true,
          coords,
          city: name,
        });
        window.scroll({
          top: 0,
          left:0,
          behavior: "smooth",
        });
        
      }}
    >
      {name}
    </button>
  );
};

export default LocationButton;
