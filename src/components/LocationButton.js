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
      }}
    >
      {name}
    </button>
  );
};

export default LocationButton;
