import s from "./MenuPage.module.css";
import logo from "../assets/logo512.png";
import MenuItemDescription from "./MenuItemDescription";
import { RES_IMAGES_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { cartCTX } from "../utils/context";

const MenuItemCard = ({ data, resId, categoryId }) => {
  const {
    id,
    name,
    imageId,
    isVeg,
    price,
    defaultPrice,
    description,
    ratings,
  } = data;
  const { cartCtx, setCartCtx } = useContext(cartCTX);

  function handleAdd() {
    if (!cartCtx) {
      setCartCtx({
        [resId]: { [categoryId]: { [id]: { ...data, itemCount: 1 } } },
      });
    } else if (cartCtx) {
      if (!cartCtx[resId]) {
        setCartCtx({
          ...cartCtx,
          [resId]: { [categoryId]: { [id]: { ...data, itemCount: 1 } } },
        });
      } else if (cartCtx[resId]) {
        if (!cartCtx[resId][categoryId]) {
          setCartCtx({
            ...cartCtx,
            [resId]: {
              ...cartCtx[resId],
              [categoryId]: { [id]: { ...data, itemCount: 1 } },
            },
          });
          //.................................
          //Down to work!....................
        } else if (cartCtx[resId][categoryId]) {
          if (!cartCtx[resId][categoryId][id]) {
            setCartCtx({
              ...cartCtx,
              [resId]: {
                ...cartCtx[resId],
                [categoryId]: {
                  ...cartCtx[resId][categoryId],
                  [id]: { ...data, itemCount: 1 },
                },
              },
            });
          } else if (cartCtx[resId][categoryId][id]) {
            const newCount =
              Number(cartCtx[resId][categoryId][id].itemCount) + 1;
            setCartCtx({
              ...cartCtx,
              [resId]: {
                ...cartCtx[resId],
                [categoryId]: {
                  ...cartCtx[resId][categoryId],
                  [id]: {
                    ...data,
                    itemCount: newCount,
                  },
                },
              },
            });
          }
        }
      }
    }
    console.log(cartCtx);
  }

  function handleRemove() {
    if (
      cartCtx &&
      cartCtx[resId] &&
      cartCtx[resId][categoryId] &&
      cartCtx[resId][categoryId][id]
    ) {
      // Check if the item count is greater than 0
      if (cartCtx[resId][categoryId][id].itemCount > 0) {
        const newCount = Number(cartCtx[resId][categoryId][id].itemCount) - 1;

        // Create a deep copy of cartCtx to avoid mutating the state directly
        let updatedCart = { ...cartCtx };

        // Update the item count
        updatedCart[resId][categoryId][id] = {
          ...updatedCart[resId][categoryId][id],
          itemCount: newCount,
        };

        // Check if the item count has reached zero, then delete it
        if (newCount === 0) {
          delete updatedCart[resId][categoryId][id];

          // Check if the category is now empty, and if so, delete the category
          if (Object.keys(updatedCart[resId][categoryId]).length === 0) {
            delete updatedCart[resId][categoryId];

            // Check if the restaurant is now empty, and if so, delete the restaurant
            if (Object.keys(updatedCart[resId]).length === 0) {
              delete updatedCart[resId];
              if (Object.keys(updatedCart).length === 0) {
                console.log("empty");
                setCartCtx(null);
                return;
              }
            }
          }
        }

        // Update the state with the modified cart
        setCartCtx(updatedCart);
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

        {/* IMAGE CONTAINER --> RIGHT SECTION */}

        <div className={s["item-image-container"]}>
          <img
            className={s["item-image"]}
            src={!imageId ? logo : RES_IMAGES_URL + imageId}
            alt="logo"
          />
        </div>
     
      {/* CONTROLS..............*/}
      <div className={s["controls-container"]}>
        <button className={s["button-add"]} onClick={handleAdd}>
          Add
        </button>

        <h4>
          {!cartCtx
            ? 0
            : !cartCtx[resId]
            ? 0
            : !cartCtx[resId][categoryId]
            ? 0
            : !cartCtx[resId][categoryId][id]
            ? 0
            : cartCtx[resId][categoryId][id].itemCount}
        </h4>

        <button className={s["button-remove"]} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
