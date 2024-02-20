import React from "react";
import style from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import productImg from "../../img/Rectangle 117.png";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCard = ({ id, name, price, img }) => {
  return (
    <Link to={`/products/ProductDetail/${id}`} className={style.product}>
      <div className={style.product1}>
        <img src={img} alt="" />
        <button className={style.product_icon}>
          <IoIosHeartEmpty />
        </button>
      </div>
      <div className={style.product_h2p}>
        <h2>{name}</h2>
        <p>
          {price}$ ~{id}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
