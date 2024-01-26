import React from "react";
import style from "./Button1.module.css";
import { Link } from "react-router-dom";

const Button1 = ({ children }) => {
  return (
    <>
      <Link className={style.slbasket}>{children}</Link>
    </>
  );
};

export default Button1;
