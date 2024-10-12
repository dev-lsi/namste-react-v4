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
      <div>
      <h2 className="text-center">Welcome to Your Cart!</h2>
      <h4 className="text-center">Menage orders and See details.</h4>
      </div>
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
        <h3 className="text-center text-orange-700">Your Cart is Empty!</h3>
      ) : (
        <div className={s["cart-restaurants"]}>
          <h2 className="basis-11/12 pl-4 pb-4">Orders</h2>
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
