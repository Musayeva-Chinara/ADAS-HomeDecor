import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import style from "./ResetPasswordPage.module.css";

const ResetPasswordPage = () => {
  return (
    <div className="container">
      <div className={style.ResetPP}>
        <div className={style.Reset_button}>
          <button className={style.Reset_button1}>
            <GoArrowLeft />
          </button>
        </div>
        <div className={style.Reset_P}>
          <p>BACK</p>
        </div>
      </div>
      <div className={style.ResetPassword}>
        <div className={style.ResetPasswordh2}>
          <h2>RESET PASSWORD</h2>
        </div>
        <form className={style.ResetInput}>
          <input className={style.ResetInput1} placeholder="E-MAIL ADRESS" />
        </form>
        <Link to="/VersificationPage">
          <button className={style.send}>SEND</button>
        </Link>
        <div className={style.ResetPassword1}>
          <div className={style.registerP}>
            <p>Don’t have an account?</p>
          </div>
          <Link to="/RegisterPage" className={style.register1}>
            Register
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
