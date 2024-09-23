import s from "./MenuPage.module.css";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { resMenu } from "../utils/constants";
import MenuCategory from "./MenuCategory";
import { getMenuData } from "../utils/getMenuData";
import Shirm from "./Shirm";

const MenuCategoriesContainer = () => {
    const {id} = useParams();
    const [data,setData] = useState(null);

    useEffect(()=>{
        console.log(id)
       if(id){
        getMenuData(resMenu+id,setData);
       }
    },[]);

    
  return (
    <div className={s["menu-categories-container"]}>
         <h4 className={s["container-header"]}>Categories</h4>
        {!data 
            ? <Shirm/> 
            : data.map((c) => <MenuCategory key={c.title}  data={c}/>)
        }
    </div>
  );
};

export default MenuCategoriesContainer;
