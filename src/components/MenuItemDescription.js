import s from "./MenuPage.module.css";
import { useEffect, useState } from "react";

const MenuItemDescription=(data)=>{
    const [isOpen,setIsOpen]=useState("hidden");
    useEffect(()=>{

    })
    function toggle(){
      isOpen=="shown"?setIsOpen("hidden"):setIsOpen("shown")
      
    }
    return (
        <div className={s["description-container"]}>
          <h5 className={s["description-header"]} 
          onClick={()=>toggle()}>{isOpen=="shown"?"Hide description <<":"Show Description >"}</h5>
          <p className={s["description-text"] + " " + s[isOpen]}>
            {data.data}
          </p>
        </div>
    )
}

export default MenuItemDescription;