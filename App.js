import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { locationContext,restaurantsContext } from "./src/utils/context";
import { useState } from "react";

const App = ({ location }) => {
  alert("APP rendered");
  alert("NEXT RETURN lat:"+location.coords.lat+"isValid:"+isValid)
  const initialLocationContextValue = location;
  const [locationContextValue, setLocationContextValue] = useState(
    initialLocationContextValue
  );

  const initialRestaurantsValue = {restaurants:[]};
  const [restaurantsContextValue,setRestaurantsContextValue]=useState(initialRestaurantsValue);

  return (
    <restaurantsContext.Provider value={{restaurantsContextValue,setRestaurantsContextValue}}>
    <locationContext.Provider
      value={{ locationContextValue, setLocationContextValue }}
    >
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </locationContext.Provider>
    </restaurantsContext.Provider>
  );
};
export default App;
