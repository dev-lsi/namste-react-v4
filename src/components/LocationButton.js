import { useContext } from "react";
import { locationContext } from "../utils/context.js";

const LocationButton = ({ city, setData }) => {
  const { name, coords } = city;
  const { locationContextValue, setLocationContextValue } =
    useContext(locationContext);

  return (
    <button
      className=" w-40 h-8 font-bold text-stone-200 border border-slate-200 rounded-sm px-4 inline-block"
      onClick={() => {
        setData(null);
        setLocationContextValue({
          ...locationContextValue,
          isValid: true,
          coords,
          city:name,
        });
      }}
    >
      {name}
    </button>
  );
};

export default LocationButton;
