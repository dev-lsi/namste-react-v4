import s from "./MenuPage.module.css";
import MenuItemCard from "./MenuItemCard";
import { useState } from "react";

const MenuCategoryHeader = ({ title, isOpenCat, setIsOpenCat }) => {
  function toggle() {
    setIsOpenCat(!isOpenCat);
  }

  return <h6 className={s["menu-category-header"]} onClick={toggle}>{title}</h6>;
};

const MenuItemsContainer = ({ items, isOpenCat }) => {
  return isOpenCat ? (
    <div className={s["items-container"]}>
      {items.map((i) => (
        <MenuItemCard key={i.card.info} data={i.card.info} />
      ))}
    </div>
  ) : (
    ""
  );
};

const MenuCategory = ({ data }) => {
  console.log(data);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const { title, items } = data;
  return (
    <div className={s["menu-category"]}>
      <MenuCategoryHeader
        title={title}
        isOpenCat={isOpenCat}
        setIsOpenCat={setIsOpenCat}
      />
      <MenuItemsContainer items={items} isOpenCat={isOpenCat} />
    </div>
  );
};

export default MenuCategory;
