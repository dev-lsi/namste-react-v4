import s from "./MenuPage.module.css";
import MenuItemCard from "./MenuItemCard";
import { useContext, useState } from "react";
import { cartCTX } from "../utils/context";


const MenuCategoryHeader = ({
  title,
  openCategoryId,
  setOpenCategoryId,
  resId,
  categoryId,
}) => {

  const{cartCtx,setCartCtx} = useContext(cartCTX);
  
  
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
            {
           !cartCtx
           ? 0 
           : !cartCtx[resId] 
              ? 0 
              : !cartCtx[resId][categoryId]
                   ? 0
                   : callcSum(cartCtx[resId][categoryId])
           }
           </h6>
        </div>
      </a>
  );
};

function callcSum(items){
  let sum=0;
  Object.keys(items).map(i=>sum+=Number(items[i].itemCount))
  return sum
}

const MenuItemsContainer = ({
  items,
  resId,
  categoryId,
  openCategoryId,
  setOpenCategoryId,
  
}) => {
  return categoryId === openCategoryId ? (
    <div className={s["items-container"]}>
      {items.map((i) => (
        <MenuItemCard
        resId={resId}
        categoryId={categoryId} 
        key={i.card.info.name} 
        data={i.card.info} 
        />
      ))}
    </div>
  ) : (
    ""
  );
};

const MenuCategory = ({
  data,
  resId,
  categoryId,
  openCategoryId,
  setOpenCategoryId
}) => {
  const { title, items } = data;
  const [hasAdded,setHasAdded] = useState(0);
  const [headerCounter,setHeaderCounter]=useState(0)
  

  return (
    <div className={s["menu-category"]}>
      <MenuCategoryHeader
        title={title}
        resId={resId}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
        hasAdded={hasAdded}
        setHasAdded={setHasAdded}
        headerCounter={headerCounter}
        setHeaderCounter={setHeaderCounter}
      />
      <MenuItemsContainer
        items={items}
        resId={resId}
        categoryId={categoryId}
        openCategoryId={openCategoryId}
        setOpenCategoryId={setOpenCategoryId}
        hasAdded={hasAdded}
        setHasAdded={setHasAdded}
        headerCounter={headerCounter}
        setHeaderCounter={setHeaderCounter}
      />
    </div>
  );
};

export default MenuCategory;
