import MenuPageHero from "./MenuPageHero";
import MenuCategoriesContainer from "./MenuCategoriesContainer";
import s from "./MenuPage.module.css";
import { useEffect, useState,useContext } from "react";
import { getMenuData } from "../utils/getMenuData";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";
import { cartCTX } from "../utils/context";


const MenuPage = () => {
  const {cartCtx,setCartCtx} = useContext(cartCTX);
  const [data, setData] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(()=>{
    
      getMenuData(resMenu+id,setData);

      //getDineout(id);
    
   },[]);

  return (
    
      <div className={"page"}>
        <MenuPageHero />
        <MenuCategoriesContainer data={data} resId={id}/>
      </div>
    
  );
};

export default MenuPage;
