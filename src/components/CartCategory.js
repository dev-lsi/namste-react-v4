import s from "./Cart.module.css";
import { useContext } from "react";
import { cartCTX } from "../utils/context";
import CartItem from "./CartItem";

const CartCategory=({resId,catId})=>{
    const {cartCtx, setCartCtx} = useContext(cartCTX);
    
    return (
        <div className={s["cart-category"]}>
            {
                Object.keys(cartCtx[resId][catId]).map(itemId=>
                <CartItem key={itemId} resId={resId} catId={catId} itemId={itemId}/>)
                
            }
        </div>
    );
};

export default CartCategory;