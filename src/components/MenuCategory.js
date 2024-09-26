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
  }

  return (
    <h6 
    className={s["menu-category-header"]+`${(openCategoryId==categoryId)?" h-24 text-3xl text-center bg-red-950":" h-12"}`} onClick={(e) => manageMenu(e)}>
      {title}
    </h6>
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
