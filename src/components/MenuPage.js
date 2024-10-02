import MenuPageHero from "./MenuPageHero";
import MenuCategoriesContainer from "./MenuCategoriesContainer";
import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";
import { getMenuData } from "../utils/getMenuData";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";

const MenuPage = () => {
  //const cart = useContext(cartCTX);
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id)
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
        <MenuCategoriesContainer data={data} />
      </div>
    
  );
};

export default MenuPage;
