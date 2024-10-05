import s from "./MenuPage.module.css";
import logo from "../assets/logo512.png";
import MenuItemDescription from "./MenuItemDescription";
import { RES_IMAGES_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { cartCTX } from "../utils/context";

const MenuItemCard = ({ data, hasAdded, setHasAdded,headerCounter,setHeaderCounter,resId }) => {

  const {
    id,
    name,
    imageId,
    isVeg,
    price,
    description,
    defaultPrice,
    ratings,
  } = data;

  const { cartCtx, setCartCtx } = useContext(cartCTX);
  const [addedCount,setAddedCount]=useState(0);
  function handleAdd() {
    if (!cartCtx) {
      setCartCtx({ [resId]:{[id]:{...data,itemCount:1}}});
      setHasAdded(hasAdded+1);
      setAddedCount(addedCount+1)
      setHeaderCounter(headerCounter+1)
    } else {
      if (!cartCtx[resId]) {
        setCartCtx({ ...cartCtx, [resId]:{[id]:{...data,itemCount:1}}});
        setHasAdded(hasAdded+1);
        setAddedCount(addedCount+1)
        setHeaderCounter(headerCounter+1)
      } else {
                 if(!cartCtx[resId][id]){
        setCartCtx({ ...cartCtx,[resId]:{[id]:{...data,itemCount:1}}});
        setHasAdded(hasAdded+1);
        setAddedCount(addedCount+1)
        setHeaderCounter(headerCounter+1)
                 }else if(cartCtx[resId][id]){
                  const newCount=Number(cartCtx[resId][id].itemCount)+1
                  setCartCtx({ ...cartCtx,[resId]:{[id]:{...data,itemCount:newCount}}});
                  setHasAdded(hasAdded+1);
                  setAddedCount(addedCount+1)
                  setHeaderCounter(headerCounter+1)
                 }
      }
    }
     console.log(cartCtx)
  }

  function handleRemove() {
    if (cartCtx !== null) {
      const ctx = { ...cartCtx };
      if (ctx[id]) {
        let count = Number(ctx[id].count);
        if (count > 0) {
          count--;
          if (count == 0) {
            delete ctx[id];
            setCartCtx({ ...ctx });
            setHasAdded(hasAdded-1);
            setAddedCount(addedCount-1)
            setHeaderCounter(headerCounter-1);
            console.log(cartCtx[id]['count'])
          } else {
            ctx[id].count = count;
            setCartCtx({ ...ctx });
            setHasAdded(hasAdded-1);
            setAddedCount(addedCount-1)
            setHeaderCounter(headerCounter-1);
            console.log(cartCtx[id]['count'])
          }
        }
      }
    }
  }

  return (
    <div className={s["item-card"]}>
      <div className={s["item-info-container"]}>
        <h4 className={s["item-name"]}>{name}</h4>
        <div className={s["item-data-set"]}>
          <h5>
            Veg:
            {isVeg ? (
              <span className="text-green-500"> Yes</span>
            ) : (
              <span className="text-orange-500"> No</span>
            )}
          </h5>
          <div>
            {ratings.aggregatedRating.rating && (
              <h5>
                <span>{ratings.aggregatedRating.rating}⭐</span>
              </h5>
            )}
          </div>
          <h5 className={s["item-price"]}>
            <span className={s["item-price-logo"]}>Price:</span>
            <span className={s["item-price-number"]}>
              {price || defaultPrice}
            </span>
            <span className={s["item-currency-symbol"]}>&#8377;</span>
          </h5>
        </div>
        {description && description.length !== 0 && (
          <MenuItemDescription data={description} />
        )}
      </div>
      {/* ADD Button*/}
      <div className={s["controls-container"]}>
        <button className={s["button-add"]} onClick={handleAdd}>
          ADD
        </button>
        <h6>
          Added:
          <span>
            
            {
            !cartCtx ? 0 : !cartCtx[resId] ? 0 : !cartCtx[resId][id]? 0:cartCtx[resId][id].itemCount
            }
           
           </span>
           
        
        </h6>
        <button className={s["button-remove"]} onClick={handleRemove}>
          Remove
        </button>
      </div>
      {/* IMAGE CONTAINER --> RIGHT SECTION */}

      <div className={s["item-image-container"]}>
        <img
          className={s["item-image"]}
          src={!imageId ? logo : RES_IMAGES_URL + imageId}
          alt="logo"
        />
      </div>
      <div>
        {
          // cartCtx?cartCtx[resId][id].id:"NULL"
        }
        </div>
    </div>
  );
};

export default MenuItemCard;
