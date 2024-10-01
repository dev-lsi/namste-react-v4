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
    if(id){
      getMenuData(resMenu+id,setData);

      //getDineout(id);
    }
   },[]);

   const getDineout=async (id)=>{
    const response=
    await fetch('https://www.swiggy.com/menu/' + id);
    const dineout = await response.json();
    console.log(dineout);
   }
  

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
          // hasAdded={hasAdded} 
          // setHasAdded={setHasAdded}
        />
      ))}
     
    </div>
  );
};

export default MenuCategoriesContainer;
