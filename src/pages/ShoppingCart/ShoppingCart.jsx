import React from "react";
import style from "./ShoppingCart.module.css";
import { GoX } from "react-icons/go";
import shopImg from "../../assets/img/Rectangle 123.png";
import { Link } from "react-router-dom";

const Shopping = () => {
  return (
    <div className="container">
      <div className={style.shoppinUl}>
        <ul className={style.shoppinLi}>
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
      </div>
      <div className={style.shoppinhH2}>
        <h2>Shopping Cart</h2>
      </div>
      <div className={style.ShoppingCart1}>
        <div className={style.ShoppingCart}>
          <div className={style.Shopping}>
            <button className={style.GoIcon}>
              <GoX />
            </button>
            <div>
              <img src={shopImg} alt="" />
            </div>
            <p className={style.ShopP}>
              Grayson Premium Grey Wash Nest of Tables
            </p>
            <span></span>
            <div className={style.shopButton}>
              <button>+</button>
              <p>1</p>
              <button>-</button>
              <p className={style.P140}>140$</p>
            </div>
          </div>
          <div className={style.Shopping}>
            <button className={style.GoIcon}>
              <GoX />
            </button>
            <div>
              <img src={shopImg} alt="" />
            </div>
            <p className={style.ShopP}>
              Grayson Premium Grey Wash Nest of Tables
            </p>
            <span></span>
            <div className={style.shopButton}>
              <button>+</button>
              <p>1</p>
              <button>-</button>
              <p className={style.P140}>100$</p>
            </div>
          </div>
          <div className={style.Shopping}>
            <button className={style.GoIcon}>
              <GoX />
            </button>
            <div>
              <img src={shopImg} alt="" />
            </div>
            <p className={style.ShopP}>
              Grayson Premium Grey Wash Nest of Tables
            </p>
            <span></span>
            <div className={style.shopButton}>
              <button>+</button>
              <p>1</p>
              <button>-</button>
              <p className={style.P140}>120$</p>
            </div>
          </div>
        </div>
        <div className={style.summary}>
          <div className={style.summary1}>
            <h2>SUMMARY</h2>
            <div className={style.SumP}>
              <div className={style.Sump_text}>
                <p>ITEM COUNT</p>
                <span>4</span>
              </div>
              <div className={style.Sump_text}>
                <p>TOTAL PRICE</p>
                <span>460$</span>
              </div>
              <Link to="/Checkout">
                <button className={style.sum_button}>CHECKOUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.backTo}>
        <Link to="/products">BACK TO SHOPPING</Link>
      </div>
    </div>
  );
};

export default Shopping;
