import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import style from "./NewPasswordPage.module.css";

const NewPasswordPage = () => {
  return (
    <div className="container">
      <div className={style.new_button}>
        <div className={style.new_button1}>
          <button className={style.new_b1}>
            <GoArrowLeft />
          </button>
        </div>
        <div className={style.back}>
          <p>BACK</p>
        </div>
      </div>
      <div className={style.NewPasswordPage}>
        <div className={style.newPassH2}>
          <h2>NEW PASSWORD</h2>
        </div>
        <form className={style.NewPasPage}>
          <input
            className={style.newPasPage}
            placeholder="ENTER NEW PASSWORD"
          />
          <input className={style.newPasPage} placeholder="CONFIRM PASSWORD" />
        </form>
        <Link to="/auth">
          <button className={style.subNew}>SUBMIT</button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NewPasswordPage;
