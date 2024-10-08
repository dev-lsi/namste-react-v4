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
            <p className={s["item-count"]}>{item.itemCount}</p>
            <p> ✖ </p>
            <p className={s["item-price"]}>
              {item.price || item.defaultPrice} &#8377;
            </p>
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
              <button onClick={()=>{
                
                if(cartCtx[resId][catId][itemId].itemCount===0){
                  return;
                }
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
              }}> ➖ </button>
            </div>
        </div>
    </div>
  );
};

export default CartItem;
