import s from "./Cart.module.css";
import { useContext } from "react";
import { cartCTX } from "../utils/context";
import { Link, useNavigate } from "react-router-dom";
import CartRestaurant from "./CartRestaurant";

const Cart = () => {
  const { cartCtx, setCartCtx } = useContext(cartCTX);
  
  const navigate = useNavigate();

  return (
    <div className={"page"}>

      <div className={s["cart-controls"]}>
        <Link to={"/"}>
          <button
            className="cart-back-to-restaurants"
          >
            {"<< Back to Restaurants"}
          </button>
        </Link>

        <button
          className="cart-clear-btn"
          onClick={() => setCartCtx(null)}
        >
          {"Clear Cart"}
        </button>
      </div>

      {(!cartCtx) ? (
        <h3 className="text-center">Your Cart is Empty!</h3>
      ) : (
        <div className={s["cart-restaurants"]}>
          {
            Object.keys(cartCtx).map( (id) => <CartRestaurant key={id} resId = {id} /> )
          }
          
        </div>
      )}

      <button className="border-2 border-slate-400 mr-2 mb-2">
        {!cartCtx || Object.keys(cartCtx).length === 0
          ? "Nothing to Submit"
          : Object.keys(cartCtx).length===1
          ?"Submit this order"
          :"Submit all - " + Object.keys(cartCtx).length + " - Orders"}
      </button>
    </div>
  );
};

export default Cart;
