import { useState } from "react";
import s from "./Login.module.css";

const Login = () => {
    const [formData,setFormData]=useState(
        {
          username:"",
          password:""
        }
    )

    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(formData)
    }

    const handleInputChange=(e)=>{
        const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      });
    }
  
    return (
    <div className={s["login-page"]}>
      <form onSubmit={handleSubmit} className={s["login-form"]}>
      
        <div className={s["row"]}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={s["row"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={s["row"]}>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Not Registered yet?... 
        <a href="" className="text-blue-800 hover:text-blue-700 active:text-blue-900 underline underline-offset-4 "> Create new account here!</a>
      </p>
    </div>
  );
};

export default Login;
