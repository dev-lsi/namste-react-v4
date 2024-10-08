import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { resMenu } from "../utils/constants";
import MenuCategory from "./MenuCategory";
import { getMenuData } from "../utils/getMenuData";
import Shirm from "./Shirm";

const MenuCategoriesContainer = ({data,resId}) => {
  //const { id } = useParams();
  const [openCategoryId, setOpenCategoryId] = useState(null);

   const getDineout=async (resId)=>{
    const response=
    await fetch('https://www.swiggy.com/menu/' + resId);
    const dineout = await response.json();
   }
  

  return !data ? (
    <Shirm />
  ) : (
    <div className={s["menu-categories-container"]}>
       <div className={s["menu-container-header-links"]}>
       <Link to="/">{"<-Restaurants"}</Link>
       <h4 className={s["container-header"]}>Menu</h4>
       <Link to="/cart">{"Cart ->"}</Link>
       </div>
      {data.map((c, index) => (
        <MenuCategory
          key={c.title}
          data={c}
          resId={resId}
          categoryId={c.title}
          setOpenCategoryId={setOpenCategoryId}
          openCategoryId={openCategoryId}
        />
      ))}
     
    </div>
  );
};

export default MenuCategoriesContainer;
