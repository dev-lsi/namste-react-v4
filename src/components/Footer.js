import s from "./Footer.module.css";
const Footer=()=>{

    const changeTheme=()=>{
        
        const currBackground = document.documentElement.style.getPropertyValue('--bg-dark-theme');
        const currTextColor = document.documentElement.style.getPropertyValue('--color-dark-theme');
      
        if(currBackground =='rgb(34,34,34)'){ //sets light
            document.documentElement.style.setProperty('--bg-dark-theme', 'lightgrey');
            document.documentElement.style.setProperty('--color-dark-theme', 'rgb(34,34,34)');
        }else{
            document.documentElement.style.setProperty('--bg-dark-theme', 'rgb(34,34,34)');
            document.documentElement.style.setProperty('--color-dark-theme', 'antiquewhite');
        }
        
    }
    return (
        <div className={s["footer"]}>
            <h4>Footer.....</h4>
            <button onClick={changeTheme}>Theme</button>
        </div>
    );
};

export default Footer;