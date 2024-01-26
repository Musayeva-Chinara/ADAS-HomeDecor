import React from "react";
import style from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import productImg from "../../img/Rectangle 117.png";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCard = () => {
  return (
    <Link className={style.product}>
      <div className={style.product1}>
        <img src={productImg} alt="" />
        <button className={style.product_icon}>
          <IoIosHeartEmpty />
        </button>
      </div>
      <div className={style.product_h2p}>
        <h2>Grayson Premium Grey Wash Nest of Tables</h2>
        <p>140$</p>
      </div>
    </Link>
  );
};

export default ProductCard;
