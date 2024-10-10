import s from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { cartCTX, resCTX } from "../utils/context";
import CartCategory from "./CartCategory";

const CartRestaurant = ({ resId }) => {
  const { cartCtx, setCartCtx } = useContext(cartCTX);
  const { resCtx, setResCtx } = useContext(resCTX);
  
  
  const resData=resCtx.restaurants.filter((r) => r.info.id === resId)[0];
  console.log(resData)
  function calculateTotal() {
    let resTotal = 0;
    const catIds = Object.keys(cartCtx[resId]);
    const Ids = catIds.map((catId) => {
      Object.keys(cartCtx[resId][catId]).map((id) => {
        const price =
          cartCtx[resId][catId][id].price ||
          cartCtx[resId][catId][id].defaultPrice;
        const quantity = cartCtx[resId][catId][id].itemCount;
        const total = price * quantity;
        resTotal += total;
      });
    });
    return resTotal;
  }

  return (
    <div className={s["cart-restaurant"]}>
      
      <h4 className={s["restaurant-name"]}>{resData.info.name}</h4>
      
     
      <Link to={"/menu/" + resId}><button>Go to Menu</button></Link> 
      {Object.keys(cartCtx[resId]).map((catId) => (
        <CartCategory key={catId} catId={catId} resId={resId} />
      ))}
      <div className={s["restaurant-controls"]}>
        <h5>Total: {calculateTotal()} &#8377; </h5>
        <div className={s["restaurant-controls-buttons"]}> 
        <button>Submit This Order</button>
        <button onClick={()=>{
          const cartCtxMutated={...cartCtx};
          delete cartCtxMutated[resId];
          if(Object.keys(cartCtxMutated).length===0){
            setCartCtx(null);
          }else{
            setCartCtx({...cartCtxMutated});
          }
          
        }}>Delete This Order</button></div>
        
      </div>
    </div>
  );
};

export default CartRestaurant;
