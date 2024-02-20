import React from "react";
import style from "./CollectionsGrid.module.css";
import collecImg from "../../img/Rectangle 109.png";
import { useSelector } from "react-redux";

const CollectionsGrid = ({ styles, height, collection, category, data }) => {
  const myStyles = {
    width: "330px",
    myWidth: "446px",
    height: "193px",
    myHeight: "267px",
  };

  return (
    <>
      <div
        className={style.section}
        style={{ width: myStyles[styles], height: myStyles[height] }}
      >
        <a style={{ width: myStyles[styles] }}>
          <img src={data.image} />
          <div className={style.section_blur}>
            <p>{collection ? data.colTitle : category && data.catTitle}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default CollectionsGrid;
