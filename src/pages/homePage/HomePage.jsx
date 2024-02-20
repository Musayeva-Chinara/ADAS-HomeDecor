import React from "react";
import style from "./HomePage.module.css";
import { CiShoppingBasket } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import headerImg from "../../assets/img/Rectangle 1.png";
import Button1 from "../../assets/companents/button/Button1";
import Slider from "../../assets/companents/slider/Slider";
import About from "../../assets/companents/About/About";
import Products from "../../assets/companents/Products/Products";
import Most from "../../assets/companents/mostpopular/most";
import CollectionsGrid from "../../assets/companents/CollectionsGrid/CollectionsGrid";
import { Link } from "react-router-dom";
import Footer from "../../assets/companents/footer/Footer";
import Contact from "../../assets/companents/Contact/Contact";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

const HomePage = () => {
  const { products, categories, collections } = useSelector(
    (state) => state.product
  );

  return (
    <>
      <main>
        <section className={`container `}>
          <div className={style.main_header}>
            <div className={style.mainheader_h2}>
              <h2>THE FURNITURE THAT DEFINES YOU</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
              </p>
              <Link to="/products" className={style.slbasket}>
                <SlBasket />
                SHOP NOW
              </Link>
            </div>
            <div className="main_header_right">
              <div className={style.main_header_img}>
                <img src={headerImg} alt="" />
                <div className={style.main_blur}></div>
              </div>
            </div>
          </div>
          {/* <Slider gap={20} sliderItem={<CollectionsGrid styles="width" />} /> */}
          <Slider gap={20}>
            {categories.map((cat) => {
              return (
                <SwiperSlide key={cat.id}>
                  <CollectionsGrid
                    styles="width"
                    height="height"
                    category
                    data={cat}
                  />
                </SwiperSlide>
              );
            })}
          </Slider>
        </section>
        <About is_home="true" />
        <div className={style.discount}>
          <div className={style.discount_blur}>
            <div className={style.discount1}>
              <h2>20% DISCOUNT</h2>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo
              </p>
              <Link to="/products">
                <button className={style.discount_basket}>
                  <CiShoppingBasket />
                  <span>SHOP NOW</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Products />
        <Most />
        <section className="container">
          <div className={style.collection}>
            <div className={style.collec}>
              <h2>COLLECTIONS</h2>
              <Link to="">See All</Link>
            </div>
            {/* <Slider
              gap={200}
              sliderItem={<CollectionsGrid styles="myWidth" />}
            /> */}
            <Slider gap={200} count={3}>
              {collections.map((collec) => {
                return (
                  <SwiperSlide key={collec.id}>
                    <CollectionsGrid
                      styles="myWidth"
                      height="myHeight"
                      collection
                      data={collec}
                    />
                  </SwiperSlide>
                );
              })}
            </Slider>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
