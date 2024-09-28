import s from "./MenuPage.module.css";
import MenuItemCard from "./MenuItemCard";
import { useState } from "react";

const MenuCategoryHeader = ({
  title,
  openCategoryId,
  setOpenCategoryId,
  categoryId,
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
        <h6 
         
          id={categoryId}
          className={s["menu-category-header"] + " " +`${(openCategoryId==categoryId)?s["opened-header"]:""}`} onClick={(e) => manageMenu(e)}
         
          
          >
         
            {title}
      </h6>
    </a>
  );
};

const MenuItemsContainer = ({
  items,
  categoryId,
  openCategoryId,
  setOpenCategoryId,
}) => {
  return categoryId === openCategoryId ? (
    <div className={s["items-container"]}>
      {items.map((i) => (
        <MenuItemCard key={i.card.info.name} data={i.card.info} />
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

  return (
    <div className={s["menu-category"]}>
      <MenuCategoryHeader
        title={title}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
      />
      <MenuItemsContainer
        items={items}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
      />
    </div>
  );
};

export default MenuCategory;
