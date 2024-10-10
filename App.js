import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { locCTX, resCTX, cartCTX,menuCTX } from "./src/utils/context";
import { useEffect, useState } from "react";
import Shirm from "./src/components/Shirm";
import {useLocation} from "react-router-dom";

const App = ({ location }) => {
  //const [loc,setLoc]=useState(location)
  const [cartCtx, setCartCtx] = useState(null);
  const [locCtx, setLocCtx] = useState(location);
  const [resCtx, setResCtx] = useState({ restaurants: [] });
  const [menuCtx,setMenuCtx]= useState({})
  const [isHeaderShown,setIsHeaderShown]=useState(true);
  const [currPosY,setCurrPosY]=useState(0);
  const locationPath=useLocation();

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }, [locationPath.pathname]);

  function handleScroll(e) {
      //console.log(window.scrollY);
      const newPosY = window.scrollY;
      console.log(newPosY)
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
         { locCtx.isValid
          ?<div className="app">
            <Header isHeaderShown={isHeaderShown} />
            <Main />
            <Footer />
          </div>
          :<div className="app">
           
            <Main />
          
          </div>
          }
        </cartCTX.Provider>
        </menuCTX.Provider>
      </locCTX.Provider>
    </resCTX.Provider>
  );
};
export default App;
