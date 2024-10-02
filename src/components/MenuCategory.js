import s from "./MenuPage.module.css";
import MenuItemCard from "./MenuItemCard";
import { useContext, useState } from "react";


const MenuCategoryHeader = ({
  title,
  openCategoryId,
  setOpenCategoryId,
  categoryId,
  ch,
  setCh
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
           <h6>{title}</h6><h6>{ch}</h6>
           
            
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
  setHasAdded,
  ch,
  setCh
}) => {
  return categoryId === openCategoryId ? (
    <div className={s["items-container"]}>
      {items.map((i) => (
        <MenuItemCard key={i.card.info.name} data={i.card.info} hasAdded={hasAdded} setHasAdded={setHasAdded} ch={ch}
        setCh={setCh} />
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
  const [ch,setCh]=useState(0);
  

  return (
    <div className={s["menu-category"]}>
      <MenuCategoryHeader
        title={title}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
        hasAdded={hasAdded}
        setHasAdded={setHasAdded}
        ch={ch}
        setCh={setCh}
      />
      <MenuItemsContainer
        items={items}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
        hasAdded={hasAdded}
        setHasAdded={setHasAdded}
        ch={ch}
        setCh={setCh}
      />
    </div>
  );
};

export default MenuCategory;
