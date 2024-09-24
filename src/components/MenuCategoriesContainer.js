import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";
import MenuCategory from "./MenuCategory";
import { getMenuData } from "../utils/getMenuData";
import Shirm from "./Shirm";

const MenuCategoriesContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [openCategoryId, setOpenCategoryId] = useState(null);

   useEffect(()=>{
    if(id&&(!data)){
      getMenuData(resMenu+id,setData)
    }
   },[]);

   
  

  return !data ? (
    <Shirm />
  ) : (
    <div className={s["menu-categories-container"]}>
      <h4 className={s["container-header"]}>Categories</h4>
      {data.map((c, index) => (
        <MenuCategory
          key={c.title}
          data={c}
          categoryId={c.title}
          setOpenCategoryId={setOpenCategoryId}
          openCategoryId={openCategoryId}
        />
      ))}
    </div>
  );
};

export default MenuCategoriesContainer;
