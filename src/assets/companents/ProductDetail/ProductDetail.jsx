import React from "react";
import style from "./ProductDetail.module.css";
import detailImg from "../../img/Rectangle 123.png";
import detailImg1 from "../../img/Rectangle 124.png";
import { SlBasket } from "react-icons/sl";
import { CiShoppingBasket } from "react-icons/ci";
import Slider from "../slider/Slider";
import ProductCard from "../productCard/ProductCard";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

const ProductDetail = () => {
  const { productID } = useParams();
  const { products, categories, collections } = useSelector(
    (state) => state.product
  );

  const product = products.filter((product) => product.id == productID)[0];

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
            <img src={product && product.image} alt="" />
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
          <h2>{product && product.title}</h2>
          <p className={style.graysonP}>{product && product.desc}</p>
          <p className={style.colors}>COLORS</p>
          <div className={style.ColorButton}>
            <div className={style.greenColor}>
              <button className={style.GreenColor}></button>
            </div>
            <div className={style.brownColor}>
              <button className={style.GreenColor}></button>
            </div>
            <div>
              <button className={style.GreenColor}></button>
            </div>
          </div>
          <div className={style.pdetailButton}>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <div className={style.buttonP}>
            <p>{product && product.price}$</p>
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
        <Slider gap={20}>
          {products
            .filter((i) => i.categoriesId == product.categoriesId)
            .map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.title}
                    price={product.price}
                    img={product.image}
                  />
                </SwiperSlide>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetail;
