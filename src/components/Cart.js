import { useContext } from "react";
import { cartCTX } from "../utils/context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(cartCTX);
  const navigate = useNavigate();

  function calculateTotal(cart) {
    let total = 0;
    Object.keys(cart).map((k) => {
    
      total += 
      Number(cart[k]["count"]) * 
      (Number(cart[k]["price"]||Number(cart[k]["defaultPrice"])));
    });
    return total;
  }

  return (
    <div className="page">
      <button
        className="border-2 border-slate-400 mr-2 mb-2"
        onClick={() => navigate(-1)}
      >
        {"<<- Back to Menu <<-"}
      </button>
      <button
        className="border-2 border-slate-400 mb-2"
        onClick={() => setCart(null)}
      >
        {"[Clear Cart]"}
      </button>

      {!cart||cart==null ? (
        <h1>Your cart is Empty!</h1>
      ) : (
        <div className="bills">
          {Object.keys(cart).map((k) => {
            const count = Number(cart[k]["count"]);
            const price = Number(cart[k]["price"]||cart[k]["defaultPrice"]);
            const total = count * price;
            return (
              <div key={k} className="">
                <h6>{cart[k]["name"]}</h6>
                <h6>
                  <span> {count} </span>
                  <span> {" X "} </span>
                  <span> {price} </span>
                  <span> {" => "} </span>
                  <span> {total} </span>
                  <span> &#8377; </span>
                </h6>
              </div>
            );
          })}
        </div>
      )}

      <h4>Total: {!cart?0:calculateTotal(cart)}</h4>
      <button
        className="border-2 border-slate-400 mr-2 mb-2"
      >
        {!cart||Object.keys(cart).length===0?"Empty order":"Submit order"}
      </button>
    </div>
  );
};

export default Cart;
