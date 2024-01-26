import React from "react";
import style from "./CollectionsGrid.module.css";
import collecImg from "../../img/Rectangle 109.png";

const CollectionsGrid = ({ styles }) => {
  const myStyles = {
    width: "330px",
    myWidth: "446px",
  };

  console.log(myStyles.width);
  return (
    <>
      <div className={style.section} style={{ width: myStyles[styles] }}>
        <a style={{ width: myStyles[styles] }} href="">
          <img src={collecImg} alt="" />
          <div className={style.section_blur}>
            <p>SOFAS</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default CollectionsGrid;
