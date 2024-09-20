import s from "./Home.module.css";
import LocationButton from "./LocationButton.js";
import { cities } from "../utils/citiesWithCoordinates.js";

const HomeDefault = () => {
  return (
    <div className={s["home"]}>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
      <div className="flex justify-center flex-wrap fixed gap-y-6 gap-x-4 m-4 p-2 ">
        <h4 className="text-slate-300 basis-full">
          It looks like you are not in the delivery range of Swiggy
        </h4>
        <h6 className="text-slate-300 basis-full">
          To try the App you can choose among locations below
        </h6>
        <LocationButton city={cities.Delhi}/>
        <LocationButton city={cities.Bengaluru}/>
        <LocationButton city={cities.Satara}/>
      </div>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
      <h1>Choose location</h1>
      <h1>Choose location</h1>
      <h4>Choose location</h4>
    </div>
  );
};
export default HomeDefault;
