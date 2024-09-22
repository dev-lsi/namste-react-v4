import MenuHeader from "./MenuHeader";
import MenuContainer from "./MenuContainer";
import s from "./MenuPage.module.css";


const MenuPage = () => {
    
    
    return (
        <div className={s["menu-page"]}>
           <MenuHeader/>
           <MenuContainer/>
        </div>
    );
};

export default MenuPage;