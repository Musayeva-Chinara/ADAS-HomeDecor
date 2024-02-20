import React from "react";
import style from "./Most.module.css";
import Products from "../Products/Products";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../productCard/ProductCard";
import { useSelector } from "react-redux";

const Most = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="container">
      <div className={style.most}>
        <h2 className={style.most2}>MOST POPULAR</h2>
      </div>
      <div className={style.mostSl}>
        {/* <Slider gap={20} sliderItem={<ProductCard />} /> */}
        <Slider gap={20}>
          {products.slice(0, 8).map((product) => {
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

export default Most;
