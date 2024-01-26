import React from "react";
import style from "./CollectionsPage.module.css";
import CollectionsGrid from "../../assets/companents/CollectionsGrid/CollectionsGrid";

const CollectionsPage = () => {
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
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
        <CollectionsGrid styles="myWidth" />
      </div>
    </div>
  );
};

export default CollectionsPage;
