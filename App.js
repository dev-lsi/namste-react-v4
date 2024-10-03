import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { locCTX, resCTX, cartCTX,menuCTX } from "./src/utils/context";
import { useEffect, useState } from "react";
import Shirm from "./src/components/Shirm";

const App = ({ location }) => {

  const [cartCtx, setCartCtx] = useState(null);
  const [locCtx, setLocCtx] = useState(location);
  const [resCtx, setResCtx] = useState({ restaurants: [] });
  const [menuCtx,setMenuCtx]= useState({})
  const [isHeaderShown,setIsHeaderShown]=useState(true);
  const [currPosY,setCurrPosY]=useState(0);

  let timeoutId;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e) {
      //console.log(window.scrollY);
      const newPosY = window.scrollY;
      if(newPosY>currPosY){
        setIsHeaderShown(false);
      }else{
        setIsHeaderShown(true);
      }  
      setCurrPosY(newPosY);
  }



  return !location ? (
    <Shirm />
  ) : (
    <resCTX.Provider value={{ resCtx, setResCtx }}>
      <locCTX.Provider value={{ locCtx, setLocCtx }}>
        <menuCTX.Provider value={{menuCtx,setMenuCtx}}>
        <cartCTX.Provider value={{ cartCtx, setCartCtx }}>
          <div className="app">
            <Header isHeaderShown={isHeaderShown} />
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
