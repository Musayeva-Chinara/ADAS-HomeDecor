import React from "react";
import style from "./WishlistPage.module.css";
import { Outlet } from "react-router-dom";
import whislistImg from "../../../assets/img/Rectangle 109.png";
import { IoMdHeartEmpty } from "react-icons/io";

const WishlistPage = () => {
  return (
    <div className={style.whislist}>
      <div className={style.whislistImg}>
        <img src={whislistImg} alt="" />
        <div className={style.whislistImg1}>
          <h2>Grayson Premium Grey Wash Nest of Tables</h2>
          <p>140$</p>
        </div>
        <div className={style.whislistIcon}>
          <button>
            <IoMdHeartEmpty />
          </button>
        </div>
      </div>
      <div className={style.whislistImg}>
        <img src={whislistImg} alt="" />
        <div className={style.whislistImg1}>
          <h2>Grayson Premium Grey Wash Nest of Tables</h2>
          <p>140$</p>
        </div>
        <div className={style.whislistIcon}>
          <button>
            <IoMdHeartEmpty />
          </button>
        </div>
      </div>
      <div className={style.whislistImg}>
        <img src={whislistImg} alt="" />
        <div className={style.whislistImg1}>
          <h2>Grayson Premium Grey Wash Nest of Tables</h2>
          <p>140$</p>
        </div>
        <div className={style.whislistIcon}>
          <button>
            <IoMdHeartEmpty />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
