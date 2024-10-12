import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { resMenu } from "../utils/constants";
import MenuCategory from "./MenuCategory";
import { getMenuData } from "../utils/getMenuData";
import Shirm from "./Shirm";

const MenuCategoriesContainer = ({ categories, resId }) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  function handleCategories() {
    setIsOpen(!isOpen);
  }
  return !categories ? (
    <Shirm />
  ) : (
    <div className={s["menu-categories-container"]}>
      <h3 className={s["container-heading"]} 
      onClick={handleCategories}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </h3>
      <div className={s["menu-container-header-links"]}>
        <Link to="/">{"<-Restaurants"}</Link>
        <Link to="/cart">{"Cart ->"}</Link>
      </div>
      <div className={s["just-categories"] + " " + `${isOpen?s["open-menu"]:s["close-menu"]}`}>
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
    </div>
  );
};

export default MenuCategoriesContainer;
