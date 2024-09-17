import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { appCTX } from "./src/utils/appCTX";
import { useState } from "react";

const App = ({ location }) => {
  console.log("APP rendered")
  
  const initialContextValue = {
    location,
    user: null,
    data: null,
  };
  
  const [ctxValue,setCTXValue] = useState(initialContextValue);

  return (
    <appCTX.Provider value={{ctxValue,setCTXValue}}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </appCTX.Provider>
  );
};
export default App;
