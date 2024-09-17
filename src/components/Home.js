import DefaultHome from "./DefaultHome";
import HomeRendered from "./HomeRendered";
import { useContext,useState } from "react";
import { locationContext } from "../utils/context";

const Home = () => {
  const {locationContextValue} = useContext(locationContext);
  const {isValid} = locationContextValue;
  
  const [data, setData] = useState(null);

  return isValid 
    ? <HomeRendered data={data} setData={setData} /> 
    : <DefaultHome data={data} setData={setData}/>;
};

export default Home;
