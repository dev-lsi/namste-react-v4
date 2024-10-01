import s from "./MenuPage.module.css";
import MenuItemCard from "./MenuItemCard";
import { useContext, useState } from "react";


const MenuCategoryHeader = ({
  title,
  openCategoryId,
  setOpenCategoryId,
  categoryId,
  hasAdded,
  setHasAdded
}) => {
  
  
  function manageMenu(e) {
    if (openCategoryId !== categoryId) {
      setOpenCategoryId(null);
      setOpenCategoryId(categoryId);
    } else if (openCategoryId === categoryId) {
      setOpenCategoryId(null);
    }
    setTimeout(()=>{
      const curr=document.getElementById(categoryId);
      const rect = curr.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY-100,
          left:0,
          behavior: "smooth",
        })
      
      
    },200)
   
  }

  return (
    <a className={s["category-header-a"]} href={"#"+categoryId}>
        <div 
          id={categoryId}
          className={s["menu-category-header"] + " " +`${(openCategoryId==categoryId)?s["opened-header"]:""}`} onClick={(e) => manageMenu(e)}
          >
           <h6>{title}</h6>
           <h6>
              Added: 
                <span className={hasAdded===0?"text-red-500 text-lg":"text-green-500 text-lg"}>
                   { hasAdded }
                </span> 
            </h6>
            
        </div>
    </a>
  );
};

const MenuItemsContainer = ({
  items,
  categoryId,
  openCategoryId,
  setOpenCategoryId,
  hasAdded,
  setHasAdded
  
}) => {
  return categoryId === openCategoryId ? (
    <div className={s["items-container"]}>
      {items.map((i) => (
        <MenuItemCard key={i.card.info.name} data={i.card.info} hasAdded={hasAdded} setHasAdded={setHasAdded} />
      ))}
    </div>
  ) : (
    ""
  );
};

const MenuCategory = ({
  data,
  categoryId,
  openCategoryId,
  setOpenCategoryId,
}) => {
  const { title, items } = data;
  const [hasAdded,setHasAdded] = useState(0);
  

  return (
    <div className={s["menu-category"]}>
      <MenuCategoryHeader
        title={title}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
        hasAdded={hasAdded}
        setHasAdded={setHasAdded}
      />
      <MenuItemsContainer
        items={items}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
        hasAdded={hasAdded}
        setHasAdded={setHasAdded}
      />
    </div>
  );
};

export default MenuCategory;
