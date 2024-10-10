import s from "./Cart.module.css";
import { useContext } from "react";
import { cartCTX } from "../utils/context";

const CartItem = ({ resId, catId, itemId }) => {
  const { cartCtx, setCartCtx } = useContext(cartCTX);
  const item = cartCtx[resId][catId][itemId];
  console.log(item);
  return (
    <div className={s["cart-item"]}>
     
        <p className={s["item-name"]}>{item.name || title}</p>
        <div className={s["item-info"]}>
            <div className={s["item-info-prices"]}>
            <p className={s["item-count"]}>{item.itemCount}</p>
            <p> ✖ </p>
            <p className={s["item-price"]}>
              {item.price || item.defaultPrice} &#8377;
            </p>
            </div>
            <div className={s["item-controls"]}>
              <button onClick={()=>{
                const newCount=(cartCtx[resId][catId][itemId].itemCount)+1;
                setCartCtx({
                  ...cartCtx,
                  [resId]: {
                    ...cartCtx[resId],
                    [catId]: {
                      ...cartCtx[resId][catId],
                      [itemId]: {
                        ...cartCtx[resId][catId][itemId],
                        itemCount: newCount,
                      },
                    },
                  },
                });
              }}> ➕ </button>

              {/* Button Remove 1pcs of Item */}
              <button onClick={()=>{
                //If has onli one Item
                const mutatedCtx={...cartCtx};
                if(cartCtx[resId][catId][itemId].itemCount===1){
                  delete mutatedCtx[resId][catId][itemId];
                  if(Object.keys(mutatedCtx[resId][catId]).length===0){
                    delete mutatedCtx[resId][catId];
                    if(Object.keys(mutatedCtx[resId]).length===0){
                      delete mutatedCtx[resId];
                      if(Object.keys(mutatedCtx).length===0){
                        setCartCtx(null);
                        return;
                      }
                    }
                  }
                   setCartCtx({...mutatedCtx});
                  
                 
                //if items are more than ONE  
                }else if(cartCtx[resId][catId][itemId].itemCount>1){
                  const newCount=(cartCtx[resId][catId][itemId].itemCount)-1;
                  setCartCtx({
                    ...cartCtx,
                    [resId]: {
                      ...cartCtx[resId],
                      [catId]: {
                        ...cartCtx[resId][catId],
                        [itemId]: {
                          ...cartCtx[resId][catId][itemId],
                          itemCount: newCount,
                        },
                      },
                    },
                  });
                }
                

                
              }}> ➖ </button>
            </div>
        </div>
    </div>
  );
};

export default CartItem;
