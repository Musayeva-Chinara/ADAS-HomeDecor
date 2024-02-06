import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import style from "./VersificationPage.module.css";

const VersificationPage = () => {
  return (
    <div className="container">
      <Link to="/auth">
        <div className={style.versification}>
          <div className={style.versification_b}>
            <button className={style.versification_button}>
              <GoArrowLeft />
            </button>
          </div>
          <div className={style.Vback}>
            <p>BACK</p>
          </div>
        </div>
      </Link>
      <div className={style.versificationPage}>
        <div className={style.versificationH2}>
          <h2>VERIFICATION</h2>
        </div>
        <form className={style.Enter}>
          <input
            className={style.enterVN}
            placeholder="ENTER VERIFICATION NUMBER"
          />
        </form>
        <div className={style.VPage}>
          <div className={style.VPage1}>
            <p>Didn’t receive a code?</p>
          </div>
          <Link to="/RegisterPage" className={style.resend}>
            Resend
          </Link>
        </div>
        <Link to="/NewPasswordPage">
          <button className={style.verify_button}>VERIFY</button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default VersificationPage;
