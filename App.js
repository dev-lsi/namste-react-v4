import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { locationContext,restaurantsContext,cartCTX } from "./src/utils/context";
import { useState } from "react";
import Shirm from "./src/components/Shirm";


const App = ({ location }) => {
  console.log("APP rendered");

  const [cart,setCart]=useState(null)
 
  const initialLocationContextValue = location;
  const [locationContextValue, setLocationContextValue] = useState(
    initialLocationContextValue
  );

  const initialRestaurantsValue = {restaurants:[]};
  const [restaurantsContextValue,setRestaurantsContextValue]=useState(initialRestaurantsValue);

  return !location?<Shirm/>: (

    <restaurantsContext.Provider value={{restaurantsContextValue,setRestaurantsContextValue}}>
    <locationContext.Provider
      value={{ locationContextValue, setLocationContextValue }}
    >
      <cartCTX.Provider value={{cart,setCart}}>
      <div className="app">
        <Header />
        
        <Main />
        
        <Footer />
      </div>
      </cartCTX.Provider>
    </locationContext.Provider>
    </restaurantsContext.Provider>
  );
};
export default App;
