import MenuPageHero from "./MenuPageHero";
import MenuCategoriesContainer from "./MenuCategoriesContainer";
import s from "./MenuPage.module.css";
import { useEffect, useState,useContext } from "react";
import { getMenuData } from "../utils/getMenuData";
import { useParams } from "react-router-dom";
import { resMenu,resMenuProxy } from "../utils/constants";
import { cartCTX } from "../utils/context";


const MenuPage = () => {
  const {cartCtx,setCartCtx} = useContext(cartCTX);
  const [categories, setCategories] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(()=>{
    
      getMenuData(resMenuProxy + id,setCategories,setRestaurant);
      
      //getDineout(id);
    
   },[]);

  return (
    
      <div className={s["menu-page"]}>
        {!restaurant?"....":<MenuPageHero restaurant={restaurant}/>}
        <MenuCategoriesContainer categories={categories} resId={id}/>
      </div>
    
  );
};

export default MenuPage;
