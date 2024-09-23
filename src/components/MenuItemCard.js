import s from "./MenuPage.module.css";
import logo from "../assets/logo512.png";
import MenuItemDescription from "./MenuItemDescription";
import { RES_IMAGES_URL } from "../utils/constants";

const MenuItemCard=({data})=>{
    
    const {name,imageId,isVeg,price,description,defaultPrice,ratings} = data;
    

   return (
    <div className={s["item-card"]}>
      <div className={s["item-info-container"]}>
        <h4 className={s["item-name"]}>{name}</h4>
        <div className={s["item-data-set"]}>
            <h5>Veg:
              {
              isVeg
              ?<span className="text-green-500"> Yes</span>
              :<span className="text-orange-500"> No</span>
              }
            </h5>
            <div>
              {
              ratings.aggregatedRating.rating
              &&<h5>
                <span>{ratings.aggregatedRating.rating}⭐</span>
              </h5>
              }
            </div>
            <h5 className={s["item-price"]} >    
                <span className={s["item-price-logo"]}>
                  Price:
                </span>
                <span className={s["item-price-number"]}>
                  {price||defaultPrice}
                </span>
                <span className={s["item-currency-symbol"]}> 
                  &#8377;
                </span> 
            </h5>
        </div>
        {
          (description&&description.length!==0)&&
          < MenuItemDescription data = {description}/>
        }
        
        
      </div>
      {/* IMAGE CONTAINER --> RIGHT SECTION */}
      
       <div className={s["item-image-container"]}>
         <img
           className={s["item-image"]}
           src={
            !imageId
              ? logo
              : RES_IMAGES_URL + imageId
           }
           alt="logo"
         />
         <button className={s["add-button"]}>Add to Cart</button>
       </div>
       
    </div>
  );
    
    
   
}

export default MenuItemCard;