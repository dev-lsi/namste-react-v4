import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { locCTX, resCTX, cartCTX,menuCTX } from "./src/utils/context";
import { useState } from "react";
import Shirm from "./src/components/Shirm";

const App = ({ location }) => {

  const [cartCtx, setCartCtx] = useState(null);
  const [locCtx, setLocCtx] = useState(location);
  const [resCtx, setResCtx] = useState({ restaurants: [] });
  const [menuCtx,setMenuCtx]= useState({})

  return !location ? (
    <Shirm />
  ) : (
    <resCTX.Provider value={{ resCtx, setResCtx }}>
      <locCTX.Provider value={{ locCtx, setLocCtx }}>
        <menuCTX.Provider value={{menuCtx,setMenuCtx}}>
        <cartCTX.Provider value={{ cartCtx, setCartCtx }}>
          <div className="app">
            <Header />
            <Main />
            <Footer />
          </div>
        </cartCTX.Provider>
        </menuCTX.Provider>
      </locCTX.Provider>
    </resCTX.Provider>
  );
};
export default App;
