import { useContext } from "react";
import { cartCTX } from "../utils/context";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartCtx, setCartCtx } = useContext(cartCTX);
  const navigate = useNavigate();

  function calculateTotal(cartCtx) {
    let total = 0;
    Object.keys(cartCtx).map((k) => {
    
      total += 
      Number(cartCtx[k]["count"]) * 
      (Number(cartCtx[k]["price"]||Number(cartCtx[k]["defaultPrice"])));
    });
    return total;
  }

  return (
    <div className={"page" + " " + "pl-5 flex gap-y-2"}>
      <Link to={"/"}>
      <button
        className="border-2 border-slate-400 mr-2 mb-2"
        //onClick={() => navigate(-1)}
      >
        {"<<- Back to Menu <<-"}
      </button>
      </Link>
      
      <button
        className="border-2 border-slate-400 mb-2"
        onClick={() => setCartCtx(null)}
      >
        {"Clear Cart"}
      </button>

      {!cartCtx||cartCtx==null ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <div className="bills">
          {Object.keys(cartCtx).map((k) => {
            const count = Number(cartCtx[k]["count"]);
            const price = Number(cartCtx[k]["price"]||cartCtx[k]["defaultPrice"]);
            const total = count * price;
            return (
              <div key={k} className="">
                <h6>{cartCtx[k]["name"]}</h6>
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

      <h4>Total: {!cartCtx?0:calculateTotal(cartCtx)}</h4>
      <button
        className="border-2 border-slate-400 mr-2 mb-2"
      >
        {!cartCtx||Object.keys(cartCtx).length===0?"Empty order":"Submit order"}
      </button>
    </div>
  );
};

export default Cart;
