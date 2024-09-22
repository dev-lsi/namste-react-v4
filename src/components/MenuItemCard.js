import s from "./MenuPage.module.css";
import logo from "../assets/logo512.png";


const MenuItemCard=({data})=>{
    console.log(data);
    const {name,imageId,description,dafaultPrice}=data;
    let image;

    //const extractedImageId=imageId.split("/").pop();
    if(imageId){
        console.log(imageId.split("/").pop())
    }

    function fun1(imageId){
        try {
            const res=imageId.split("/").pop()
            return res
        } catch (error) {
            return imageId+"......"+ "Greshka!"
        }
    }
    
    
    imageId
    ?image=<img className={s["item-image"]} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId.split("/").pop()} alt="item image"/>
    :image=<img src={logo} alt="item image"/>

   return (
    <div className={s["item-card"]}>
        <h6>{name}</h6>
        <h6>{fun1(imageId)}</h6>
       <div className={s["item-image-container"]}>
         { image}
       </div>
    </div>
    
   )
}

export default MenuItemCard;