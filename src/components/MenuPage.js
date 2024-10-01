import MenuHeader from "./MenuHeader";
import MenuCategoriesContainer from "./MenuCategoriesContainer";
import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";

const MenuPage = () => {
  //const cart = useContext(cartCTX);
  

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    
      <div className={s["menu-page"]}>
        <MenuHeader />
        <MenuCategoriesContainer />
      </div>
    
  );
};

export default MenuPage;
