import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import style from "./RegisterPage.module.css";
import { GoArrowLeft } from "react-icons/go";

const RegisterPage = () => {
  return (
    <div className="container">
      <Link to="/">
        <div className={style.Registerpage}>
          <div className={style.registerpage_button}>
            <button className={style.registerpage_button1}>
              <GoArrowLeft />
            </button>
          </div>
          <div className={style.RegisterP}>
            <p>Home</p>
          </div>
        </div>
      </Link>
      <div className={style.RegisterPage}>
        <div className={style.Register_h2}>
          <h2>REGISTER</h2>
        </div>
        <form className={style.RegisterForm}>
          <input className={style.ReactPageform1} placeholder="NAME, SURNAME" />
          <input className={style.ReactPageform1} placeholder="E-MAIL ADRESS" />
          <input className={style.ReactPageform1} placeholder="PASSWORD" />
          <input
            className={style.ReactPageform1}
            placeholder="REPEAT PASSWORD"
          />
        </form>
        <button className={style.register_button}>Login</button>
        <div className={style.RegisterA}>
          <div className={style.RegisterA1}>
            <p>Already have an account?</p>
          </div>
          <Link to="/auth" className={style.log_in}>
            Log in
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RegisterPage;
