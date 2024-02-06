import React from "react";
import { Outlet } from "react-router-dom";
import loginImg from "../../assets/img/Rectangle 1.png";
import style from "./LoginLayout.module.css";

const LoginLayout = () => {
  return (
    <>
      <div className={style.login1}>
        <Outlet />
        <div className={style.login2}>
          <img src={loginImg} />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
