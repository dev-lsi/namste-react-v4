import MenuHeader from "./MenuHeader";
import MenuCategoriesContainer from "./MenuCategoriesContainer";
import s from "./MenuPage.module.css";

const MenuPage = () => {
    
    return (
        <div className={s["menu-page"]}>
           <MenuHeader/>
           <MenuCategoriesContainer/>
        </div>
    );
};

export default MenuPage;