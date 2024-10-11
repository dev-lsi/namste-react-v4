import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { resMenu } from "../utils/constants";
import MenuCategory from "./MenuCategory";
import { getMenuData } from "../utils/getMenuData";
import Shirm from "./Shirm";

const MenuCategoriesContainer = ({categories,resId}) => {
 
  const [openCategoryId, setOpenCategoryId] = useState(null);

  return !categories ? (
    <Shirm />
  ) : (
    <div className={s["menu-categories-container"]}>
       <div className={s["menu-container-header-links"]}>
       <Link to="/">{"<-Restaurants"}</Link>
       <h3 className={s["container-header"]}>Menu</h3>
       <Link to="/cart">{"Cart ->"}</Link>
       </div>
      {categories.map((c, index) => (
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
