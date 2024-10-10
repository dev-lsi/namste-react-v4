import { useState } from "react";
import s from "./Login.module.css";
import { useLocation, useParams } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={"page"}>
      <Authenticator></Authenticator>
      <form onSubmit={handleSubmit} className={s["login-form"]}>
        <div className={s["row"]}>
          <label htmlFor="username">Username:</label>
          <input
            placeholder="enter username..."
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
            placeholder="password..."
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={s["row"]}>
          <label htmlFor="repass">Password:</label>
          <input
            placeholder="repeat password..."
            type="password"
            id="repass"
            name="repass"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={s["row"]}>
          <button type="submit">Login</button>
        </div>
        <div className={s["row"]}>
          <p className={s["signup-link-p"]}></p>
        </div>
        <div className={s["row"]}>
          <p className={s["signup-link-p"]}>Not Registered yet?...</p>
        </div>
        <div className={s["row"]}>
          <h5 className="text-blue-800 hover:text-blue-700 active:text-blue-900 underline underline-offset-4 "
          >
            {" "}
            Create new account here!
          </h5>
        </div>
      </form>
    </div>
  );
};

export default Login;
