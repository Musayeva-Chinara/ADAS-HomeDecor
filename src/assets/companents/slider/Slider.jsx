import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CollectionsGrid from "../CollectionsGrid/CollectionsGrid";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Slider = ({ sliderItem, gap }) => {
  return (
    <Swiper spaceBetween={gap} slidesPerView={3}>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
