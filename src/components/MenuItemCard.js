import s from "./MenuPage.module.css";
import logo from "../assets/logo512.png";
import MenuItemDescription from "./MenuItemDescription";
import { RES_IMAGES_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { cartCTX } from "../utils/context";

const MenuItemCard = ({ data, hasAdded, setHasAdded }) => {
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
  const { cart, setCart } = useContext(cartCTX);

  function handleAdd() {
    if (cart == null) {
      const ctx = {};
      ctx[id] = { ...data, count: 1 };
      setCart({ ...ctx });
      setHasAdded(hasAdded+1);
    } else {
      if (!cart[id]) {
        const ctx = {};
        ctx[id] = { ...data, count: 1 };
        setCart({ ...cart, ...ctx });
        setHasAdded(hasAdded+1);
      } else {
        const count = Number(cart[id].count) + 1;
        const ctx = {};
        ctx[id] = { ...data, count: count };
        setCart({ ...cart, ...ctx });
        setHasAdded(hasAdded+1);
      }
    }
    
  }

  function handleRemove() {
    if (cart !== null) {
      const ctx = { ...cart };
      if (ctx[id]) {
        let count = Number(ctx[id].count);
        if (count > 0) {
          count--;
          if (count == 0) {
            delete ctx[id];
            setCart({ ...ctx });
            setHasAdded(hasAdded-1);
          } else {
            ctx[id].count = count;
            setCart({ ...ctx });
            setHasAdded(hasAdded-1);

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
          Added:<span>{!cart ? 0 : !cart[id] ? 0 : cart[id]["count"]}</span>
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
    </div>
  );
};

export default MenuItemCard;
