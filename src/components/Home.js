import DefaultHome from "./DefaultHome";
import HomeRendered from "./HomeRendered";
import { useContext,useState } from "react";
import { appCTX } from "../utils/appCTX";

const Home = () => {
  const { ctxValue, setCTXValue } = useContext(appCTX);
  const { location } = ctxValue;
  const { coords, isValid } = location;
  const { lat, lng } = coords;
  console.log("Home called with location->");
  console.log(coords);
  const [data, setData] = useState(null);
  //  setCTXValue({
  //    location: {coords:{lat: "17.6805", lng: "74.0183"},isValid:true},
  //    user: null,
  //    data: null,
  //  })

  return isValid 
    ? <HomeRendered data={data} setData={setData} /> 
    : <DefaultHome data={data} setData={setData}/>;
};

export default Home;
