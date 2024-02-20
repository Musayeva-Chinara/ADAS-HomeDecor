import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CollectionsGrid from "../CollectionsGrid/CollectionsGrid";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import SliderNavB from "../SliderNavB/SliderNavB";
import ProductDetail from "../ProductDetail/ProductDetail";

const Slider = ({ sliderItem, gap, children, count = 4 }) => {
  return (
    <Swiper spaceBetween={gap} slidesPerView={count}>
      {children}
      {/* <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide> */}
      <SliderNavB />
    </Swiper>
  );
};

export default Slider;
