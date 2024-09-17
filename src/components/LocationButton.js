import { useContext } from "react";
import { appCTX } from "../utils/appCTX.js";

const LocationButton=({city,setData})=>{
  const {name,coords}=city;
  const { ctxValue, setCTXValue } = useContext(appCTX);

    return (
        <button
          className=" w-40 h-8 font-bold text-stone-200 border border-slate-200 rounded-sm py-2 px4 inline-block"
          onClick={() => {
            setData(null);
            setCTXValue({...ctxValue,location:{isValid:true,coords,name},});
          }}
        >
         {city.name}
        </button>
    );
};

export default LocationButton;