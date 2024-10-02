import s from "./Footer.module.css";
const Footer=()=>{

    const changeTheme=()=>{
        
        const currBackground = document.documentElement.style.getPropertyValue('--bg');
        const currTextColor = document.documentElement.style.getPropertyValue('--color');
      
        if(currBackground =='rgb(34,34,34)'){ //sets light
            document.documentElement.style.setProperty('--bg', 'grey');
            document.documentElement.style.setProperty('--color', 'rgb(34,34,34)');
        }else{
            document.documentElement.style.setProperty('--bg', 'rgb(34,34,34)');
            document.documentElement.style.setProperty('--color', 'antiquewhite');
        }
        
    }
    return (
        <div className={s["footer"]}>
            <button onClick={changeTheme}>Theme</button>
        </div>
    );
};

export default Footer;