import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import style from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className="container">
      <Link to="/">
        <div className={style.loginIcons}>
          <div className={style.goArrIcon}>
            <button className={style.icon_button}>
              <GoArrowLeft />
            </button>
          </div>
          <div className={style.loginP}>
            <p>Home</p>
          </div>
        </div>
      </Link>
      <div className={style.Login}>
        <div className={style.Login_title}>
          <h2>Log In</h2>
        </div>
        <form className={style.loginPageform}>
          <input className={style.loginPageform1} placeholder="E-MAIL ADRESS" />
          <input className={style.loginPageform1} placeholder="PASSWORD" />
          <div className={style.resetP}>
            <Link to="/ResetPasswordPage">Forgot password?</Link>
          </div>
          <Link to="/MyAccountLayout">
            <button className={style.page_button}>LOG IN</button>
          </Link>
        </form>
        <div className={style.LoGIn}>
          <div className={style.LPage}>
            <p>Don’t have an account?</p>
            <Link to="/RegisterPage" className={style.register3}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
