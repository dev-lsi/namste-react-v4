import s from "./MenuPage.module.css";

const MenuItemDescription=(data)=>{
    
    return (
        <div className={s["description-container"]}>
          <h6 className={s["description-header"]}>Description</h6>
          <p className={s["description-text"]}>{data.data}</p>
        </div>
    )
}

export default MenuItemDescription;