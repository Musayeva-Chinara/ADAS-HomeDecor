import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${style.footer} container`}>
      <div className={style.footer1}>
        <h2>HomeDecor</h2>
        <p>©2022 All Right Reserved. Developed by Webcoder Agency</p>
      </div>
      <div className={style.footer2}>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
        <p className={style.footerN}>+994 50 555 55 55</p>
        <p>youremailhere@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
