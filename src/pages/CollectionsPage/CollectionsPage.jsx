import React from "react";
import style from "./CollectionsPage.module.css";
import CollectionsGrid from "../../assets/companents/CollectionsGrid/CollectionsGrid";
import { useSelector } from "react-redux";

const CollectionsPage = () => {
  const { products, categories, collections } = useSelector(
    (state) => state.product
  );

  return (
    <div className="container">
      <div className={style.collecPage}>
        <ul className={style.collecUl}>
          <li>Home</li>
          <li>Collections</li>
        </ul>
      </div>
      <div className={style.collectionP}>
        <h2>COLLECTIONS</h2>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </p>
      </div>
      <div className={style.collecPageGrid}>
        {collections.map((col) => {
          return (
            <CollectionsGrid
              styles="myWidth"
              height="myHeight"
              collection
              data={col}
            />
          );
        })}
        {/* <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid />
        <CollectionsGrid /> */}
      </div>
    </div>
  );
};

export default CollectionsPage;
