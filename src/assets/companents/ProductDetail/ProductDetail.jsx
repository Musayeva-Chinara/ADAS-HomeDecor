import React from "react";
import style from "./ProductDetail.module.css";
import detailImg from "../../img/Rectangle 123.png";
import detailImg1 from "../../img/Rectangle 124.png";
import { SlBasket } from "react-icons/sl";
import { CiShoppingBasket } from "react-icons/ci";
import Slider from "../slider/Slider";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className={style.productDetail}>
        <ul className={style.proDetailUL}>
          <li>Home</li>
          <li>Products</li>
          <li>Grayson Premium Grey Wash Nest of Tables</li>
        </ul>
      </div>
      <div className={style.ProductDetail}>
        <div className={style.proDetail}>
          <div className={style.DetailImg}>
            <img src={detailImg} alt="" />
          </div>
          <div className={style.ProductDetail1}>
            <div className={style.DetailImg1}>
              <img src={detailImg1} alt="" />
            </div>
            <div className={style.DetailImg1}>
              <img src={detailImg1} alt="" />
            </div>
            <div className={style.DetailImg1}>
              <img src={detailImg1} alt="" />
            </div>
          </div>
        </div>
        <div className={style.ProductDetail2}>
          <h2>GRAYSON PREMIUM GREY WASH NEST OF TABLES</h2>
          <p className={style.graysonP}>
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae.
          </p>
          <p className={style.colors}>COLORS</p>
          <div></div>
          <div></div>
          <div></div>
          <div className={style.pdetailButton}>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <div className={style.buttonP}>
            <p>140$</p>
          </div>
          <div className={style.detailButton}>
            <Link to="/Checkout" className={style.detailB}>
              <SlBasket />
              BUY NOW
            </Link>
            <Link to="/shoppingCart" className={style.detailB1}>
              <CiShoppingBasket />
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
      <div className={style.detailSim}>
        <h2>SIMILAR PRODUCTS</h2>
      </div>
      <div className={style.datilCard}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductDetail;
