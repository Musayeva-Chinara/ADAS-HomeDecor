import React from "react";
import style from "./Most.module.css";
import ProductCard from "../productCard/productCard";
import Products from "../Products/Products";
import Slider from "../slider/Slider";

const Most = () => {
  return (
    <div className="container">
      <div className={style.most}>
        <h2 className={style.most2}>MOST POPULAR</h2>
      </div>
      <div className={style.mostSl}>
        <Slider gap={20} sliderItem={<ProductCard />} />
      </div>
    </div>
  );
};

export default Most;
