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
      getDineout(id);
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
        />
      ))}
      <select className="bg-slate-700 placeholder:2">
        <option value={199}>hi1</option>
        <option value={200}>hi2</option>
        <option value={201}>hi3</option>
        <option value={302}>hi4</option>
        <option value={304}>hi5</option>
        
      </select>
    </div>
  );
};

export default MenuCategoriesContainer;
