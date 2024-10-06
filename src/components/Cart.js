import { useContext } from "react";
import { cartCTX } from "../utils/context";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartCtx, setCartCtx } = useContext(cartCTX);
  const navigate = useNavigate();

 

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

      {!cartCtx ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <div className="bills">

          {
             Object.keys(cartCtx).map(r=>(
              <div className="border-b-2 border-b-gray-500">
                {
                  
                  Object.keys(cartCtx[r]).map(c=>(
                      <div>
                        {
                         
                         Object.keys(cartCtx[r][c]).map(i=>(
                            <div >
                              <p>{cartCtx[r][c][i].name}</p>
                              <p>{cartCtx[r][c][i].itemCount}</p>
                              <p>{cartCtx[r][c][i].price||cartCtx[r][c][i].defaultPrice}</p>
                            </div>
                          ))
                        }
                      </div>
                  ))
                }
              </div>
             )
                

             
                
            )

          }
         
        </div>
      )}

      <button className="border-2 border-slate-400 mr-2 mb-2">
        {!cartCtx || Object.keys(cartCtx).length === 0
          ? "Empty order"
          : "Submit order"}
      </button>
    </div>
  );
};

export default Cart;
