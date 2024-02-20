import React from "react";
import style from "./SliderNavB.module.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const SliderNavB = () => {
  return (
    <div className="container">
      <div className={style.GoIcons}>
        <button className={style.Left}>
          <GoArrowLeft />
        </button>
        <button className={style.Right}>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SliderNavB;
